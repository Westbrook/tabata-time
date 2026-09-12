import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Run after building the Design System: node vendor/refresh-en-reve.mjs ../design-system
const vendor = path.dirname(fileURLToPath(import.meta.url));
const source = path.resolve(process.argv[2] ?? path.join(vendor, '../../design-system'));
const staging = mkdtempSync(path.join(tmpdir(), 'tabata-en-reve-pack-'));
const packages = ['elements', 'primitives', 'styles', 'tokens'];
const license = readFileSync(path.join(source, 'LICENSE'), 'utf8');
const records = [];

function copyRuntime(directory, destination) {
  mkdirSync(destination, { recursive: true });
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (/^(?:tests?|__tests__|fixtures?)$/.test(entry.name) || /fixture|\.map$|\.tsbuildinfo$/.test(entry.name)) continue;
    const from = path.join(directory, entry.name);
    const to = path.join(destination, entry.name);
    if (entry.isDirectory()) {
      copyRuntime(from, to);
    } else if (entry.isFile()) {
      let data = readFileSync(from);
      if (/\.(?:js|ts|css)$/.test(entry.name)) {
        data = Buffer.from(data.toString('utf8').replace(/^\s*\/\/#[\t ]*sourceMappingURL=.*(?:\r?\n|$)/gm, ''));
      }
      if (/\/Users\/|\/home\/|\/private\/tmp\/|file:\/\//.test(data.toString('utf8'))) {
        throw new Error(`Refusing to vendor a local machine path in ${entry.name}`);
      }
      writeFileSync(to, data);
    }
  }
}

try {
  for (const name of packages) {
    const original = path.join(source, 'packages', name);
    const target = path.join(staging, name);
    copyRuntime(path.join(original, 'dist'), path.join(target, 'dist'));
    const metadata = JSON.parse(readFileSync(path.join(original, 'package.json'), 'utf8'));
    metadata.files = ['dist', 'LICENSE'];
    delete metadata.scripts;
    if (name === 'elements') {
      const manifest = readFileSync(path.join(original, 'custom-elements.json'), 'utf8');
      if (/\/Users\/|\/home\/|\/private\/tmp\/|file:\/\//.test(manifest)) throw new Error('Local path in element manifest');
      writeFileSync(path.join(target, 'custom-elements.json'), manifest);
      metadata.files.push('custom-elements.json');
    }
    writeFileSync(path.join(target, 'package.json'), JSON.stringify(metadata, null, 2) + '\n');
    writeFileSync(path.join(target, 'LICENSE'), license);
    const result = JSON.parse(execFileSync('npm', [
      'pack', '--ignore-scripts', '--json', '--pack-destination', vendor,
      '--cache', path.join(staging, 'npm-cache'),
    ], { cwd: target, encoding: 'utf8' }))[0];
    const bytes = readFileSync(path.join(vendor, result.filename));
    records.push({
      name: metadata.name,
      version: metadata.version,
      file: result.filename,
      bytes: bytes.length,
      sha256: createHash('sha256').update(bytes).digest('hex'),
      integrity: result.integrity,
    });
  }

  const sourceCommit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: source, encoding: 'utf8' }).trim();
  const trackedChanges = execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { cwd: source, encoding: 'utf8' }).trim() !== '';
  const provenance = {
    capturedAt: new Date().toISOString(),
    sourceProject: 'Design System',
    sourceCommit,
    sourceHadTrackedChanges: trackedChanges,
    license: 'MIT',
    transformations: [
      'Retained built runtime modules, declarations, CSS, and data, plus the elements custom-element manifest.',
      'Excluded source maps, map references, test/fixture outputs, package documentation, and verification artifacts.',
      'Included the original repository MIT license in each package.',
      'Restricted package files to included artifacts and omitted source-build scripts; retained versions, exports, and dependencies.',
    ],
    packages: records,
  };
  writeFileSync(path.join(vendor, 'provenance.json'), JSON.stringify(provenance, null, 2) + '\n');
  writeFileSync(path.join(vendor, 'SHA256SUMS'), records.map((record) => `${record.sha256}  ${record.file}`).join('\n') + '\n');
  writeFileSync(path.join(vendor, 'LICENSE.en-reve'), license);
  console.log(JSON.stringify(provenance, null, 2));
} finally {
  rmSync(staging, { recursive: true, force: true });
}

# Design System dependencies

These four npm tarballs make a fresh Tabata Time checkout installable without a
sibling Design System repository. They contain the built `@en-reve` packages used
by the app: elements, primitives, styles, and tokens, all at version `0.1.0`.
They are local dependency snapshots; no npm registry publication is required.

The current snapshot was built from Design System commit
`7299c35cd10ec14a07cb26f1b209a090526e697b` on September 14, 2026, with no tracked
source changes. It includes the shared Dialog close button, external Dialog
trigger support, updated focus/hover styles, and all current component exports.

The source Design System checkout had no configured Git remote at capture time.
Its packages are marked `private: true` and licensed MIT. The original copyright
and license are included in every archive and in `LICENSE.en-reve` here.

`provenance.json` records the source checkout commit, whether tracked source had
local edits, the packaging transformations, and archive checksums. The tarballs
capture the existing built output; the commit alone does not identify that build
when local changes are present. `SHA256SUMS` identifies the precise artifacts.

Each archive contains package metadata, built JavaScript, TypeScript declarations,
CSS/data, and its license. The elements package also includes its custom-element
manifest. Source maps and their references, test/fixture outputs, package docs,
verification artifacts, and source-build scripts are omitted. Export and dependency
metadata are preserved. Nothing in the Design System checkout is modified.

To refresh intentionally, first build the desired Design System checkout, then run:

```sh
node vendor/refresh-en-reve.mjs ../design-system
npm install ./vendor/en-reve-elements-0.1.0.tgz ./vendor/en-reve-primitives-0.1.0.tgz ./vendor/en-reve-styles-0.1.0.tgz ./vendor/en-reve-tokens-0.1.0.tgz
npm run build
npm test
npm run test:browser
```

Commit the refreshed tarballs, provenance, checksums, and updated lockfile together.
Install the tarballs explicitly to refresh their integrity entries even when the
package versions and filenames stay the same.
Normal consumers only need `npm ci`; they do not run the refresh script.

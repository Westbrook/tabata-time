(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,ee=globalThis,te=ee.trustedTypes,ne=te?te.emptyScript:``,re=ee.reactiveElementPolyfillSupport,h=(e,t)=>e,ie={toAttribute(e,t){switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),ee.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ie:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ie:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[h(`elementProperties`)]=new Map,g[h(`finalized`)]=new Map,re?.({ReactiveElement:g}),(ee.reactiveElementVersions??=[]).push(`2.1.2`);var se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,_e=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ve=/-->/g,ye=/>/g,x=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),be=/'/g,xe=/"/g,Se=/^(?:script|style|textarea|title)$/i,Ce=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),S=Ce(1),C=Ce(2),w=Symbol.for(`lit-noChange`),T=Symbol.for(`lit-nothing`),we=new WeakMap,E=v.createTreeWalker(v,129);function Te(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var Ee=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=_e;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===_e?c[1]===`!--`?o=ve:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=x):(Se.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=x):o=ye:o===x?c[0]===`>`?(o=i??_e,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?x:c[3]===`"`?xe:be):o===xe||o===be?o=x:o===ve||o===ye?o=_e:(o=x,i=void 0);let d=o===x&&e[t+1].startsWith(`/>`)?` `:``;a+=o===_e?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[Te(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},De=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Ee(t,n);if(this.el=e.createElement(l,r),E.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=E.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?Ae:r[1]===`?`?je:r[1]===`@`?Me:O}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(Se.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),E.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8){if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function D(e,t,n=e,r){if(t===w)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=D(e,i._$AS(e,t.values),i,r)),t}var Oe=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);E.currentNode=r;let i=E.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ke(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Ne(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=E.nextNode(),a++)}return E.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ke=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),b(e)?e===T||e==null||e===``?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==w&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=De.createElement(Te(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new Oe(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=we.get(e.strings);return t===void 0&&we.set(e.strings,t=new De(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=T}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=D(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==w,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=D(this,r[n+o],t,o),s===w&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===T?e=T:e!==T&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},Ae=class extends O{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}},je=class extends O{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}},Me=class extends O{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=D(this,e,t,0)??T)===w)return;let n=this._$AH,r=e===T&&n!==T||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==T&&(n===T||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}},Pe={M:de,P:_,A:fe,C:1,L:Ee,R:Oe,D:he,V:D,I:ke,H:O,N:je,U:Me,B:Ae,F:Ne},Fe=se.litHtmlPolyfillSupport;Fe?.(De,ke),(se.litHtmlVersions??=[]).push(`3.3.3`);var Ie=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ke(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Le=globalThis,k=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};k._$litElement$=!0,k.finalized=!0,Le.litElementHydrateSupport?.({LitElement:k});var Re=Le.litElementPolyfillSupport;Re?.({LitElement:k}),(Le.litElementVersions??=[]).push(`4.2.2`);var ze={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Be=e=>(...t)=>({_$litDirective$:e,values:t}),Ve=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:He}=Pe,Ue=e=>e,We=()=>document.createComment(``),A=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new He(r.insertBefore(We(),i),r.insertBefore(We(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=Ue(e).nextSibling;Ue(r).insertBefore(e,i),e=t}}}return n},j=(e,t,n=e)=>(e._$AI(t,n),e),Ge={},Ke=(e,t=Ge)=>e._$AH=t,qe=e=>e._$AH,Je=e=>{e._$AR(),e._$AA.remove()},Ye=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Xe=Be(class extends Ve{constructor(e){if(super(e),e.type!==ze.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=qe(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=j(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=j(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=j(i[d],a[m]),A(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=j(i[f],a[p]),A(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Ye(o,p,m),u=Ye(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=A(e,i[d]);j(t,a[p]),c[p]=t}else c[p]=j(n,a[p]),A(e,i[d],n),i[t]=null;p++}else Je(i[f]),f--}else Je(i[d]),d++;for(;p<=m;){let t=A(e,c[m+1]);j(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&Je(e)}return this.ut=o,Ke(e,c),w}}),Ze=Object.defineProperty,Qe=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,$e=(e,t,n)=>(Qe(e,typeof t==`symbol`?t:t+``,n),n),et=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},tt=(e,t)=>{if(Object(t)!==t)throw TypeError(`Cannot use the "in" operator on this value`);return e.has(t)},nt=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},rt=(e,t,n)=>(et(e,t,`access private method`),n);function it(e,t){return Object.is(e,t)}var M=null,N=!1,at=1,ot=Symbol(`SIGNAL`);function P(e){let t=M;return M=e,t}function st(){return M}function ct(){return N}var lt={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ut(e){if(N)throw Error(typeof ngDevMode<`u`&&ngDevMode?`Assertion error: signal read during notification phase`:``);if(M===null)return;M.consumerOnSignalRead(e);let t=M.nextProducerIndex++;if(F(M),t<M.producerNode.length&&M.producerNode[t]!==e&&xt(M)){let e=M.producerNode[t];bt(e,M.producerIndexOfThis[t])}M.producerNode[t]!==e&&(M.producerNode[t]=e,M.producerIndexOfThis[t]=xt(M)?yt(e,M,t):0),M.producerLastReadVersion[t]=e.version}function dt(){at++}function ft(e){if(e.dirty||e.lastCleanEpoch!==at){if(!e.producerMustRecompute(e)&&!vt(e)){e.dirty=!1,e.lastCleanEpoch=at;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=at}}function pt(e){if(e.liveConsumerNode===void 0)return;let t=N;N=!0;try{for(let t of e.liveConsumerNode)t.dirty||ht(t)}finally{N=t}}function mt(){return M?.consumerAllowSignalWrites!==!1}function ht(e){var t;e.dirty=!0,pt(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function gt(e){return e&&(e.nextProducerIndex=0),P(e)}function _t(e,t){if(P(t),e&&e.producerNode!==void 0&&e.producerIndexOfThis!==void 0&&e.producerLastReadVersion!==void 0){if(xt(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)bt(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function vt(e){F(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(ft(n),r!==n.version))return!0}return!1}function yt(e,t,n){var r;if(St(e),F(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=yt(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function bt(e,t){var n;if(St(e),F(e),typeof ngDevMode<`u`&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(n=e.unwatched)==null||n.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)bt(e.producerNode[t],e.producerIndexOfThis[t])}let r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let n=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];F(r),r.producerIndexOfThis[n]=t}}function xt(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function F(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function St(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function Ct(e){if(ft(e),ut(e),e.value===Dt)throw e.error;return e.value}function wt(e){let t=Object.create(Ot);t.computation=e;let n=()=>Ct(t);return n[ot]=t,n}var Tt=Symbol(`UNSET`),Et=Symbol(`COMPUTING`),Dt=Symbol(`ERRORED`),Ot={...lt,value:Tt,dirty:!0,error:null,equal:it,producerMustRecompute(e){return e.value===Tt||e.value===Et},producerRecomputeValue(e){if(e.value===Et)throw Error(`Detected cycle in computations.`);let t=e.value;e.value=Et;let n=gt(e),r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==Tt&&t!==Dt&&e.equal.call(e.wrapper,t,r)}catch(t){r=Dt,e.error=t}finally{_t(e,n)}if(i){e.value=t;return}e.value=r,e.version++}};function kt(){throw Error()}var At=kt;function jt(){At()}function Mt(e){let t=Object.create(Ft);t.value=e;let n=()=>(ut(t),t.value);return n[ot]=t,n}function Nt(){return ut(this),this.value}function Pt(e,t){mt()||jt(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,It(e))}var Ft={...lt,equal:it,value:void 0};function It(e){e.version++,dt(),pt(e)}var I=Symbol(`node`),L;(e=>{var t,n,r,i;class a{constructor(r,i={}){nt(this,n),$e(this,t);let a=Mt(r)[ot];if(this[I]=a,a.wrapper=this,i){let t=i.equals;t&&(a.equal=t),a.watched=i[e.subtle.watched],a.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError(`Wrong receiver type for Signal.State.prototype.get`);return Nt.call(this[I])}set(t){if(!(0,e.isState)(this))throw TypeError(`Wrong receiver type for Signal.State.prototype.set`);if(ct())throw Error(`Writes to signals not permitted during Watcher callback`);let n=this[I];Pt(n,t)}}t=I,n=new WeakSet,e.isState=e=>typeof e==`object`&&tt(n,e),e.State=a;class o{constructor(t,n){nt(this,i),$e(this,r);let a=wt(t)[ot];if(a.consumerAllowSignalWrites=!0,this[I]=a,a.wrapper=this,n){let t=n.equals;t&&(a.equal=t),a.watched=n[e.subtle.watched],a.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError(`Wrong receiver type for Signal.Computed.prototype.get`);return Ct(this[I])}}r=I,i=new WeakSet,e.isComputed=e=>typeof e==`object`&&tt(i,e),e.Computed=o,(t=>{var n,r,i,a;function o(e){let t,n=null;try{n=P(null),t=e()}finally{P(n)}return t}t.untrack=o;function s(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError(`Called introspectSources without a Computed or Watcher argument`);return t[I].producerNode?.map(e=>e.wrapper)??[]}t.introspectSources=s;function c(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError(`Called introspectSinks without a Signal argument`);return t[I].liveConsumerNode?.map(e=>e.wrapper)??[]}t.introspectSinks=c;function l(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError(`Called hasSinks without a Signal argument`);let n=t[I].liveConsumerNode;return n?n.length>0:!1}t.hasSinks=l;function u(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError(`Called hasSources without a Computed or Watcher argument`);let n=t[I].producerNode;return n?n.length>0:!1}t.hasSources=u;class d{constructor(e){nt(this,r),nt(this,i),$e(this,n);let t=Object.create(lt);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[I]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError(`Called unwatch without Watcher receiver`);rt(this,i,a).call(this,t);let n=this[I];n.dirty=!1;let r=P(n);for(let e of t)ut(e[I]);P(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError(`Called unwatch without Watcher receiver`);rt(this,i,a).call(this,t);let n=this[I];F(n);for(let e=n.producerNode.length-1;e>=0;e--)if(t.includes(n.producerNode[e].wrapper)){bt(n.producerNode[e],n.producerIndexOfThis[e]);let t=n.producerNode.length-1;if(n.producerNode[e]=n.producerNode[t],n.producerIndexOfThis[e]=n.producerIndexOfThis[t],n.producerNode.length--,n.producerIndexOfThis.length--,n.nextProducerIndex--,e<n.producerNode.length){let t=n.producerIndexOfThis[e],r=n.producerNode[e];St(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError(`Called getPending without Watcher receiver`);return this[I].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}}n=I,r=new WeakSet,i=new WeakSet,a=function(t){for(let n of t)if(!(0,e.isComputed)(n)&&!(0,e.isState)(n))throw TypeError(`Called watch/unwatch without a Computed or State argument`)},e.isWatcher=e=>tt(r,e),t.Watcher=d;function f(){return st()?.wrapper}t.currentComputed=f,t.watched=Symbol(`watched`),t.unwatched=Symbol(`unwatched`)})(e.subtle||={})})(L||={});var Lt=!1,Rt=new L.subtle.Watcher(()=>{Lt||(Lt=!0,queueMicrotask(()=>{Lt=!1,zt()}))});function zt(){for(let e of Rt.getPending())e.get();Rt.watch()}function Bt(e){let t=new L.Computed(()=>e());return Rt.watch(t),t.get(),()=>{Rt.unwatch(t)}}var Vt=`data-en-static-styles`,Ht=new WeakMap,Ut=new WeakMap;function Wt(e){let t=e.constructor;if(Ht.has(t))return Ht.get(t);let n=t.elementStyles,r=n.length>0&&n.every(e=>`cssText`in e&&typeof e.cssText==`string`&&!/@(?:import|namespace)\b/i.test(e.cssText))?n:null;return Ht.set(t,r),r}var Gt=class{#e;#t=!1;#n;#r;#i;#a;#o=[];#s=``;constructor(e){this.#e=e,e.addController(this)}hostConnected(){if(this.#i&&this.#i!==this.#e.ownerDocument){this.#l();return}if(this.#t)return;let e=this.#e.shadowRoot,t=e?.firstElementChild;e&&t?.localName===`style`&&t.getAttribute(`data-en-static-styles`)===`v1`&&(this.#r=e,this.#n=t)}hostUpdated(){this.#t||(this.#t=!0,this.#e.updateComplete.then(()=>this.#c(),()=>{this.#n=void 0}))}#c(){let e=this.#r,n=this.#n;if(this.#n=void 0,!t||!e||e!==this.#e.shadowRoot||!n||n.parentNode!==e||n.getAttribute(`data-en-static-styles`)!==`v1`||!(`adoptedStyleSheets`in e)||[...e.querySelectorAll(`style, link[rel~="stylesheet" i]`)].some(e=>e!==n)||n.getAttributeNames().some(e=>e!==`data-en-static-styles`&&e!==`nonce`)||!n.sheet||n.sheet.disabled)return;let r=Wt(this.#e);if(!r)return;let i=[...e.adoptedStyleSheets];try{let t=r.map(e=>e.styleSheet);if(t.some(e=>e===void 0))return;let n=t.filter(e=>!i.includes(e));e.adoptedStyleSheets=[...n,...i],this.#o=n}catch{try{e.adoptedStyleSheets=i}catch{}return}this.#i=this.#e.ownerDocument,this.#a=r,this.#s=n.nonce,n.remove()}#l(){let e=this.#r,t=this.#a;if(!e||e!==this.#e.shadowRoot||!t)return;let n=Ut.get(t);n===void 0&&(n=t.map(e=>e.cssText).join(``),Ut.set(t,n));let r=this.#e.ownerDocument.createElement(`style`);r.setAttribute(Vt,`v1`),this.#s&&(r.nonce=this.#s),r.textContent=n,e.insertBefore(r,e.firstChild);try{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>!this.#o.includes(e))}catch{}this.#i=void 0,this.#a=void 0,this.#o=[]}};function Kt(e){return e===`inherit`||e===`small`||e===`large`?e:`medium`}var qt=class extends k{staticStyles=new Gt(this);static properties={size:{reflect:!0,useDefault:!0,noAccessor:!0,converter:{fromAttribute:Kt,toAttribute:Kt}}};#e=`medium`;get size(){return this.#e}set size(e){let t=this.#e,n=Kt(e);this.#e=n;let r=this.getAttribute(`size`)===n?void 0:Object.assign(Object.create(this.constructor.getPropertyOptions(`size`)),{hasChanged:()=>!0});this.requestUpdate(`size`,t,r)}},Jt=Object.freeze({"--en-border-invalid-width":`2px`,"--en-border-width":`1px`,"--en-palette-accent":`rgb(36 87 214 / 1)`,"--en-palette-action":`rgb(36 87 214 / 1)`,"--en-color-action":`rgb(36 87 214 / 1)`,"--en-palette-surface":`rgb(255 255 255 / 1)`,"--en-color-surface":`rgb(255 255 255 / 1)`,"--en-color-accent-border":`rgb(181.65277272 203.4391786 246.40882708 / 1)`,"--en-color-accent-subtle":`rgb(227.10943415 235.68356672 252.33563096 / 1)`,"--en-palette-emphasis":`rgb(0 0 0 / 1)`,"--en-color-action-hover":`rgb(31.04856826 77.00062118 191.430243 / 1)`,"--en-color-action-pressed":`rgb(26.20372458 67.21650774 169.34637937 / 1)`,"--en-color-action-text":`rgb(36 87 214 / 1)`,"--en-palette-boundary":`rgb(123 135 152 / 1)`,"--en-color-boundary":`rgb(123 135 152 / 1)`,"--en-color-brand":`rgb(36 87 214 / 1)`,"--en-palette-canvas":`rgb(247 248 250 / 1)`,"--en-color-canvas":`rgb(247 248 250 / 1)`,"--en-palette-danger-text":`rgb(180 35 24 / 1)`,"--en-color-danger-text":`rgb(180 35 24 / 1)`,"--en-palette-focus":`rgb(36 87 214 / 1)`,"--en-color-focus":`rgb(36 87 214 / 1)`,"--en-color-focus-halo":`rgb(36 87 214 / 1)`,"--en-palette-line":`rgb(214 220 228 / 1)`,"--en-color-line":`rgb(214 220 228 / 1)`,"--en-color-link":`rgb(36 87 214 / 1)`,"--en-palette-foreground-dark":`rgb(16 27 57 / 1)`,"--en-palette-foreground-light":`rgb(255 255 255 / 1)`,"--en-color-on-action":`rgb(255 255 255 / 1)`,"--en-color-on-brand":`rgb(255 255 255 / 1)`,"--en-color-scrim":`rgb(0 0 0 / 0.45)`,"--en-palette-selected":`rgb(231 238 255 / 1)`,"--en-color-selected":`rgb(231 238 255 / 1)`,"--en-palette-success-text":`rgb(20 108 67 / 1)`,"--en-color-success-text":`rgb(20 108 67 / 1)`,"--en-palette-surface-raised":`rgb(255 255 255 / 1)`,"--en-color-surface-raised":`rgb(255 255 255 / 1)`,"--en-palette-surface-subtle":`rgb(238 241 245 / 1)`,"--en-color-surface-subtle":`rgb(238 241 245 / 1)`,"--en-palette-text":`rgb(27 31 36 / 1)`,"--en-color-text":`rgb(27 31 36 / 1)`,"--en-palette-text-muted":`rgb(86 97 113 / 1)`,"--en-color-text-muted":`rgb(86 97 113 / 1)`,"--en-palette-warning-text":`rgb(138 75 5 / 1)`,"--en-color-warning-text":`rgb(138 75 5 / 1)`,"--en-focus-halo-width":`0px`,"--en-focus-offset":`2px`,"--en-focus-width":`2px`,"--en-rhythm-base":`0.25rem`,"--en-space-3":`0.75rem`,"--en-space-control-inline":`0.75rem`,"--en-radius-control":`0.5rem`,"--en-focus-accent-width":`0px`,"--en-space-0":`0rem`,"--en-layout-panel-preferred":`20rem`,"--en-space-1":`0.25rem`,"--en-radius-container":`1rem`,"--en-shadow-overlay":`0px 4px 16px 0px rgb(0 0 0 / 0.18)`,"--en-space-1-5":`0.375rem`,"--en-space-control-block":`0.375rem`,"--en-focus-inset-offset":`-2px`,"--en-font-ui-weight":`400`,"--en-font-label-strong-weight":`600`,"--en-duration-immediate":`0ms`,"--en-duration-enter":`0ms`,"--en-duration-exit":`0ms`,"--en-duration-fast":`120ms`,"--en-duration-focus-enter":`0ms`,"--en-duration-focus-exit":`0ms`,"--en-duration-regular":`180ms`,"--en-duration-slow":`240ms`,"--en-duration-spin":`800ms`,"--en-ease-standard":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-enter":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-exit":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-focus-enter":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-focus-exit":`cubic-bezier(0.2, 0, 0, 1)`,"--en-font-body-family":`system-ui, sans-serif`,"--en-font-body-line-height":`1.5`,"--en-font-body-size":`1rem`,"--en-size-type-scale-large":`1.125`,"--en-font-body-size-large":`1.125rem`,"--en-size-type-scale-medium":`1`,"--en-font-body-size-medium":`1rem`,"--en-size-type-scale-small":`0.9375`,"--en-font-body-size-small":`0.9375rem`,"--en-font-body-weight":`400`,"--en-font-code-family":`ui-monospace, monospace`,"--en-font-data-family":`system-ui, sans-serif`,"--en-font-data-line-height":`1.5`,"--en-font-data-size":`0.875rem`,"--en-font-data-size-large":`0.984375rem`,"--en-font-data-size-medium":`0.875rem`,"--en-font-data-size-small":`0.8203125rem`,"--en-font-data-weight":`400`,"--en-font-heading-large-family":`system-ui, sans-serif`,"--en-font-heading-large-line-height":`1.2`,"--en-font-heading-large-size":`2rem`,"--en-font-heading-large-size-large":`2.25rem`,"--en-font-heading-large-size-medium":`2rem`,"--en-font-heading-large-size-small":`1.875rem`,"--en-font-heading-large-weight":`600`,"--en-font-heading-medium-family":`system-ui, sans-serif`,"--en-font-heading-medium-line-height":`1.3`,"--en-font-heading-medium-size":`1.5rem`,"--en-font-heading-medium-size-large":`1.6875rem`,"--en-font-heading-medium-size-medium":`1.5rem`,"--en-font-heading-medium-size-small":`1.40625rem`,"--en-font-heading-medium-weight":`600`,"--en-font-heading-small-family":`system-ui, sans-serif`,"--en-font-heading-small-line-height":`1.4`,"--en-font-heading-small-size":`1.125rem`,"--en-font-heading-small-size-large":`1.265625rem`,"--en-font-heading-small-size-medium":`1.125rem`,"--en-font-heading-small-size-small":`1.0546875rem`,"--en-font-heading-small-weight":`600`,"--en-font-ui-family":`system-ui, sans-serif`,"--en-font-input-family":`system-ui, sans-serif`,"--en-font-ui-line-height":`1.5`,"--en-font-input-line-height":`1.5`,"--en-font-ui-size":`1rem`,"--en-font-input-size":`1rem`,"--en-font-input-size-large":`1.125rem`,"--en-font-input-size-medium":`1rem`,"--en-font-input-size-small":`1rem`,"--en-font-input-weight":`400`,"--en-font-label-strong-family":`system-ui, sans-serif`,"--en-font-label-strong-line-height":`1.5`,"--en-font-label-strong-size":`1rem`,"--en-font-metadata-family":`system-ui, sans-serif`,"--en-font-metadata-line-height":`1.5`,"--en-font-metadata-size":`0.8125rem`,"--en-font-metadata-size-large":`0.9140625rem`,"--en-font-metadata-size-medium":`0.8125rem`,"--en-font-metadata-size-small":`0.8125rem`,"--en-font-metadata-weight":`400`,"--en-font-ui-size-large":`1.125rem`,"--en-font-ui-size-medium":`1rem`,"--en-font-ui-size-small":`1rem`,"--en-layout-article-max":`48rem`,"--en-layout-dialog-collapse":`48rem`,"--en-layout-form-max":`28rem`,"--en-size-scale-large":`1.25`,"--en-layout-form-max-large":`35rem`,"--en-size-scale-medium":`1`,"--en-layout-form-max-medium":`28rem`,"--en-size-scale-small":`0.875`,"--en-layout-form-max-small":`24.5rem`,"--en-layout-panel-preferred-large":`25rem`,"--en-layout-panel-preferred-medium":`20rem`,"--en-layout-panel-preferred-small":`17.5rem`,"--en-layout-prose-max":`66ch`,"--en-motion-surface-offset":`0px`,"--en-motion-surface-scale":`1`,"--en-palette-on-action":`rgb(255 255 255 / 1)`,"--en-radius-choice":`2px`,"--en-radius-choice-large":`2.5px`,"--en-radius-choice-medium":`2px`,"--en-radius-choice-small":`1.75px`,"--en-radius-container-large":`1.25rem`,"--en-radius-container-medium":`1rem`,"--en-radius-container-small":`0.875rem`,"--en-radius-control-large":`0.625rem`,"--en-radius-control-medium":`0.5rem`,"--en-radius-control-small":`0.4375rem`,"--en-radius-dialog":`1.25rem`,"--en-radius-dialog-large":`1.5625rem`,"--en-radius-dialog-medium":`1.25rem`,"--en-radius-dialog-small":`1.09375rem`,"--en-radius-pill":`9999px`,"--en-shadow-dialog":`0px 12px 40px 0px rgb(0 0 0 / 0.18)`,"--en-size-avatar":`2.5rem`,"--en-size-avatar-large":`3.125rem`,"--en-size-avatar-medium":`2.5rem`,"--en-size-avatar-small":`2.1875rem`,"--en-size-choice-dot":`8px`,"--en-size-choice-dot-large":`10px`,"--en-size-choice-dot-medium":`8px`,"--en-size-choice-dot-small":`7px`,"--en-size-choice-mark-block":`10px`,"--en-size-choice-mark-block-large":`12.5px`,"--en-size-choice-mark-block-medium":`10px`,"--en-size-choice-mark-block-small":`8.75px`,"--en-size-choice-mark-inline":`6px`,"--en-size-choice-mark-inline-large":`7.5px`,"--en-size-choice-mark-inline-medium":`6px`,"--en-size-choice-mark-inline-small":`5.25px`,"--en-size-choice-mark-stroke":`2px`,"--en-size-control-min":`2.5rem`,"--en-size-control-large":`3.125rem`,"--en-size-control-medium":`2.5rem`,"--en-size-control-small":`2.1875rem`,"--en-size-icon":`1.125rem`,"--en-size-icon-large":`1.40625rem`,"--en-size-icon-medium":`1.125rem`,"--en-size-icon-small":`0.984375rem`,"--en-size-icon-stroke":`1.5px`,"--en-size-progress":`0.5rem`,"--en-size-progress-large":`0.625rem`,"--en-size-progress-medium":`0.5rem`,"--en-size-progress-small":`0.4375rem`,"--en-size-quote-border":`2px`,"--en-size-range-length":`12rem`,"--en-size-range-track":`4px`,"--en-size-range-track-large":`5px`,"--en-size-range-track-medium":`4px`,"--en-size-range-track-small":`3.5px`,"--en-size-skeleton-line":`1rem`,"--en-size-skeleton-line-large":`1.25rem`,"--en-size-skeleton-line-medium":`1rem`,"--en-size-skeleton-line-small":`0.875rem`,"--en-size-spinner":`1.25rem`,"--en-size-spinner-large":`1.5625rem`,"--en-size-spinner-medium":`1.25rem`,"--en-size-spinner-small":`1.09375rem`,"--en-size-spinner-stroke":`2px`,"--en-size-target-min":`24px`,"--en-size-splitter":`24px`,"--en-size-splitter-large":`30px`,"--en-size-splitter-medium":`24px`,"--en-size-splitter-small":`21px`,"--en-size-swatch":`4rem`,"--en-size-swatch-large":`5rem`,"--en-size-swatch-medium":`4rem`,"--en-size-swatch-small":`3.5rem`,"--en-size-switch-block":`1.5rem`,"--en-size-switch-block-large":`1.875rem`,"--en-size-switch-block-medium":`1.5rem`,"--en-size-switch-block-small":`1.3125rem`,"--en-size-switch-inline":`2.5rem`,"--en-size-switch-inline-large":`3.125rem`,"--en-size-switch-inline-medium":`2.5rem`,"--en-size-switch-inline-small":`2.1875rem`,"--en-size-switch-thumb":`1rem`,"--en-size-switch-thumb-large":`1.25rem`,"--en-size-switch-thumb-medium":`1rem`,"--en-size-switch-thumb-small":`0.875rem`,"--en-size-tab-indicator":`2px`,"--en-size-target-touch":`2.75rem`,"--en-space-0-5":`0.125rem`,"--en-space-12":`3rem`,"--en-space-16":`4rem`,"--en-space-2":`0.5rem`,"--en-space-2-5":`0.625rem`,"--en-space-4":`1rem`,"--en-space-5":`1.25rem`,"--en-space-6":`1.5rem`,"--en-space-8":`2rem`,"--en-space-actions":`0.375rem`,"--en-space-actions-large":`0.46875rem`,"--en-space-actions-medium":`0.375rem`,"--en-space-actions-small":`0.328125rem`,"--en-space-badge-block":`0.125rem`,"--en-space-badge-block-large":`0.15625rem`,"--en-space-badge-block-medium":`0.125rem`,"--en-space-badge-block-small":`0.109375rem`,"--en-space-badge-inline":`0.5rem`,"--en-space-badge-inline-large":`0.625rem`,"--en-space-badge-inline-medium":`0.5rem`,"--en-space-badge-inline-small":`0.4375rem`,"--en-space-control-block-large":`0.46875rem`,"--en-space-control-block-medium":`0.375rem`,"--en-space-control-block-small":`0.328125rem`,"--en-space-control-description":`0.375rem`,"--en-space-control-description-large":`0.46875rem`,"--en-space-control-description-medium":`0.375rem`,"--en-space-control-description-small":`0.328125rem`,"--en-space-control-inline-large":`0.9375rem`,"--en-space-control-inline-medium":`0.75rem`,"--en-space-control-inline-small":`0.65625rem`,"--en-space-fields":`1.5rem`,"--en-space-fields-large":`1.875rem`,"--en-space-fields-medium":`1.5rem`,"--en-space-fields-small":`1.3125rem`,"--en-space-icon-label":`0.5rem`,"--en-space-icon-label-large":`0.625rem`,"--en-space-icon-label-medium":`0.5rem`,"--en-space-icon-label-small":`0.4375rem`,"--en-space-label-control":`0.5rem`,"--en-space-label-control-large":`0.625rem`,"--en-space-label-control-medium":`0.5rem`,"--en-space-label-control-small":`0.4375rem`,"--en-space-panel":`1.5rem`,"--en-space-panel-large":`1.875rem`,"--en-space-panel-medium":`1.5rem`,"--en-space-panel-small":`1.3125rem`,"--en-space-rows":`0.75rem`,"--en-space-rows-large":`0.9375rem`,"--en-space-rows-medium":`0.75rem`,"--en-space-rows-small":`0.65625rem`,"--en-space-sections":`2rem`,"--en-space-sections-large":`2.5rem`,"--en-space-sections-medium":`2rem`,"--en-space-sections-small":`1.75rem`,"--en-space-switch-inset":`0.1875rem`,"--en-space-switch-inset-large":`0.234375rem`,"--en-space-switch-inset-medium":`0.1875rem`,"--en-space-switch-inset-small":`0.1640625rem`});function Yt(e){if(!Object.hasOwn(Jt,e))throw RangeError(`Unknown token `+e);return Jt[e]}var Xt=Object.freeze([`small`,`medium`,`large`]);Object.freeze({small:.875,medium:1,large:1.25}),Object.freeze({small:.9375,medium:1,large:1.125});var Zt=Object.freeze({"size.control":`size.control-min`,"size.icon":`size.icon`,"size.avatar":`size.avatar`,"size.swatch":`size.swatch`,"size.spinner":`size.spinner`,"size.progress":`size.progress`,"size.skeleton-line":`size.skeleton-line`,"size.splitter":`size.splitter`,"size.switch-inline":`size.switch-inline`,"size.switch-block":`size.switch-block`,"size.switch-thumb":`size.switch-thumb`,"size.choice-mark-inline":`size.choice-mark-inline`,"size.choice-mark-block":`size.choice-mark-block`,"size.choice-dot":`size.choice-dot`,"size.range-track":`size.range-track`,"space.switch-inset":`space.switch-inset`,"space.control-inline":`space.control-inline`,"space.control-block":`space.control-block`,"space.panel":`space.panel`,"space.rows":`space.rows`,"space.actions":`space.actions`,"space.fields":`space.fields`,"space.sections":`space.sections`,"space.icon-label":`space.icon-label`,"space.label-control":`space.label-control`,"space.control-description":`space.control-description`,"space.badge-inline":`space.badge-inline`,"space.badge-block":`space.badge-block`,"radius.control":`radius.control`,"radius.container":`radius.container`,"radius.dialog":`radius.dialog`,"radius.choice":`radius.choice`,"layout.form-max":`layout.form-max`,"layout.panel-preferred":`layout.panel-preferred`,"font.ui.size":`font.ui.size`,"font.input.size":`font.input.size`,"font.data.size":`font.data.size`,"font.metadata.size":`font.metadata.size`,"font.body.size":`font.body.size`,"font.heading-small.size":`font.heading-small.size`,"font.heading-medium.size":`font.heading-medium.size`,"font.heading-large.size":`font.heading-large.size`}),Qt=Object.freeze(Object.entries(Zt).map(([e,t])=>Object.freeze({role:`--en-${e.replaceAll(`.`,`-`)}`,base:`--en-${t.replaceAll(`.`,`-`)}`,variants:Object.freeze(Object.fromEntries(Xt.map(t=>[t,`--en-${e.replaceAll(`.`,`-`)}-${t}`])))})));function $t(e){let t=Yt(e);if(!t)throw Error(`Missing stylesheet token default: ${e}`);return o`var(${a(e)}, ${a(t)})`}var en=new Map(Qt.map(({base:e,role:t})=>[e,`--_en-sized-${t.slice(5)}`]));function R(e){let t=$t(e),n=en.get(e);return n?o`var(${a(n)}, ${t})`:t}function z(e,t){return o`var(${a(e)}, ${t})`}function B(e){let t=Qt.filter(({role:t})=>e.cssText.includes(`var(--_en-sized-${t.slice(5)},`)).map(({role:e,variants:t})=>`--_en-sized-${e.slice(5)}: calc(${$t(t.small).cssText} * var(--_en-size-small, 0) + ${$t(t.medium).cssText} * var(--_en-size-medium, 1) + ${$t(t.large).cssText} * var(--_en-size-large, 0));`).join(`
`);return t?o`:host, .en-foundation { ${a(t)} } ${e}`:e}var tn=B(o`
  .en-body, .en-prose, .en-heading-small, .en-heading-medium, .en-heading-large, .en-metadata, .en-data {
    margin: 0;
    overflow-wrap: break-word;
  }
  .en-body, .en-prose {
    color: ${R(`--en-color-text`)};
    font: ${R(`--en-font-body-weight`)} ${R(`--en-font-body-size`)} / ${R(`--en-font-body-line-height`)} ${R(`--en-font-body-family`)};
  }
  .en-prose {
    max-inline-size: ${z(`--en-prose-max-inline-size`,R(`--en-layout-prose-max`))};
  }
  .en-prose :where(p, ul, ol, dl, blockquote) { margin-block: 0 ${R(`--en-space-4`)}; }
  .en-prose :where(ul, ol) { padding-inline-start: ${R(`--en-space-6`)}; }
  .en-heading-small {
    font: ${R(`--en-font-heading-small-weight`)} ${R(`--en-font-heading-small-size`)} / ${R(`--en-font-heading-small-line-height`)} ${R(`--en-font-heading-small-family`)};
  }
  .en-heading-medium {
    font: ${R(`--en-font-heading-medium-weight`)} ${R(`--en-font-heading-medium-size`)} / ${R(`--en-font-heading-medium-line-height`)} ${R(`--en-font-heading-medium-family`)};
  }
  .en-heading-large {
    font: ${R(`--en-font-heading-large-weight`)} ${R(`--en-font-heading-large-size`)} / ${R(`--en-font-heading-large-line-height`)} ${R(`--en-font-heading-large-family`)};
  }
  .en-metadata {
    color: ${R(`--en-color-text-muted`)};
    font: ${R(`--en-font-metadata-weight`)} ${R(`--en-font-metadata-size`)} / ${R(`--en-font-metadata-line-height`)} ${R(`--en-font-metadata-family`)};
  }
  .en-data {
    font: ${R(`--en-font-data-weight`)} ${R(`--en-font-data-size`)} / ${R(`--en-font-data-line-height`)} ${R(`--en-font-data-family`)};
    font-variant-numeric: tabular-nums;
  }
`),nn=o`:host { display: block; min-inline-size: 0; }`,rn=o`:host { display: inline-block; vertical-align: middle; max-inline-size: 100%; }`,an=o`:host { display: inline-flex; align-items: center; justify-content: center; color: inherit; line-height: 0; vertical-align: middle; }`,V=B(o`
  ${o`
  :host, .en-foundation { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='inherit']), .en-foundation[data-size='inherit'] { --_en-size-small: inherit; --_en-size-medium: inherit; --_en-size-large: inherit; }
  :host([size='small']), .en-foundation[data-size='small'] { --_en-size-small: 1; --_en-size-medium: 0; --_en-size-large: 0; }
  :host([size='medium']), .en-foundation[data-size='medium'] { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='large']), .en-foundation[data-size='large'] { --_en-size-small: 0; --_en-size-medium: 0; --_en-size-large: 1; }
`}
  :host, .en-foundation {
    box-sizing: border-box;
    color: ${R(`--en-color-text`)};
    font-family: ${R(`--en-font-ui-family`)};
    font-size: ${R(`--en-font-ui-size`)};
    font-weight: ${R(`--en-font-ui-weight`)};
    line-height: ${R(`--en-font-ui-line-height`)};
    text-align: start;
  }
  :host *, :host *::before, :host *::after,
  .en-foundation *, .en-foundation *::before, .en-foundation *::after { box-sizing: border-box; }
  :host([hidden]), :host [hidden], .en-foundation [hidden] { display: none !important; }
  :host :where(button, input, textarea, select), .en-foundation :where(button, input, textarea, select) {
    font: inherit;
    letter-spacing: inherit;
    word-spacing: inherit;
  }
  :host(:focus-visible), .en-foundation:focus-visible {
    outline: ${R(`--en-focus-width`)} solid ${R(`--en-color-focus`)};
    outline-offset: ${R(`--en-focus-offset`)};
  }
  .en-sr-only {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    border: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .en-break { overflow-wrap: anywhere; }
  .en-truncate { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  @media (forced-colors: active) {
    :host, .en-foundation { color: CanvasText; }
    :host(:focus-visible), .en-foundation:focus-visible { outline-color: Highlight; }
  }
`);function H(e,t,n){return e?z(`--en-${e}-focus-${t}`,n):n}function on(e){let t=H(e.family,`width`,R(`--en-focus-width`));return{width:t,offset:H(e.family,`offset`,e.inset?o`calc(0px - ${t})`:R(`--en-focus-offset`)),color:H(e.family,`color`,R(`--en-color-focus`)),haloWidth:e.halo===!1?o`0px`:H(e.family,`halo-width`,R(`--en-focus-halo-width`)),haloColor:H(e.family,`halo-color`,R(`--en-color-focus-halo`))}}function U(e={}){let t=on(e);return o`max(0px, calc(${t.width} + ${t.offset}), ${t.haloWidth})`}var sn=o`max(${U()}, ${U({family:`button`})}, ${U({family:`input`})}, ${U({family:`option`,inset:!0})}, ${U({family:`overlay`})})`;function W(e,t={}){return G(o`${e}:focus-visible`,{...t,restSelector:t.restSelector??e})}function G(e,t={}){let n=on(t),r=t.restSelector,i=r&&t.halo!==!1,a=t.baseShadow??o`0 0 0 0 transparent`,s=t.baseTransitions?o`${t.baseTransitions},`:o``;return o`
    ${i?o`${r} {
      box-shadow: 0 0 0 0 ${n.haloColor}, ${a};
      transition: ${s} box-shadow ${R(`--en-duration-focus-exit`)} ${R(`--en-ease-focus-exit`)};
    }`:o``}
    ${e} {
      outline: ${n.width} solid ${n.color};
      outline-offset: ${n.offset};
      box-shadow: 0 0 0 ${n.haloWidth} ${n.haloColor}, ${a};
      ${i?o`transition: ${s} box-shadow ${R(`--en-duration-focus-enter`)} ${R(`--en-ease-focus-enter`)};`:o``}
    }
    ${i?o`@media (prefers-reduced-motion: reduce) {
      ${r}, ${e} { transition: none; }
    }`:o``}
    @media (forced-colors: active) {
      ${e} { outline-color: Highlight; box-shadow: none; }
      ${i?o`${r}, ${e} { box-shadow: none; transition: none; }`:o``}
    }
  `}var cn=o`
  .en-button {
    padding-inline: ${z(`--en-control-inline-padding`,z(`--en-button-inline-padding`,R(`--en-space-control-inline`)))};
    display: inline-flex;
    min-inline-size: ${R(`--en-size-target-min`)};
    align-items: center;
    justify-content: center;
    gap: ${R(`--en-space-icon-label`)};
    border-color: ${z(`--en-button-border-color`,R(`--en-color-action`))};
    border-radius: ${z(`--en-button-radius`,R(`--en-radius-control`))};
    background: ${z(`--en-button-background`,R(`--en-color-action`))};
    color: ${z(`--en-button-color`,R(`--en-color-on-action`))};
    font-weight: ${R(`--en-font-label-strong-weight`)};
    text-align: center;
    text-decoration: none;
    white-space: normal;
    overflow-wrap: break-word;
    cursor: pointer;
    transition: background-color ${R(`--en-duration-fast`)} ${R(`--en-ease-standard`)},
      border-color ${R(`--en-duration-fast`)} ${R(`--en-ease-standard`)};
  }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):hover) { background: ${z(`--en-button-background`,R(`--en-color-action-hover`))}; }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):active) { background: ${z(`--en-button-background`,R(`--en-color-action-pressed`))}; }
  .en-button--secondary, .en-button[data-variant='secondary'] {
    background: ${z(`--en-button-background`,R(`--en-color-surface-subtle`))};
    color: ${z(`--en-button-color`,R(`--en-color-text`))};
    border-color: ${z(`--en-button-border-color`,R(`--en-color-boundary`))};
  }
  .en-button--quiet, .en-button[data-variant='ghost'] {
    background: none;
    color: ${z(`--en-button-color`,R(`--en-color-action-text`))};
    border-color: ${z(`--en-button-border-color`,R(`--en-color-line`))};
  }
  :is(.en-button--secondary, .en-button--quiet, .en-button[data-variant='secondary'], .en-button[data-variant='ghost']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${z(`--en-button-background`,R(`--en-color-selected`))};
  }
  .en-button--danger, .en-button[data-variant='danger'] {
    background: ${z(`--en-button-background`,R(`--en-color-surface`))};
    color: ${z(`--en-button-color`,R(`--en-color-danger-text`))};
    border-color: ${z(`--en-button-border-color`,R(`--en-color-danger-text`))};
  }
  :is(.en-button--danger, .en-button[data-variant='danger']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${z(`--en-button-background`,R(`--en-color-surface-subtle`))};
  }
  .en-button__prefix, .en-button__suffix { display: contents; }
  .en-button__label { min-inline-size: 0; }
  .en-icon-button { padding-inline: ${R(`--en-space-2`)}; min-inline-size: max(${z(`--en-control-min-size`,R(`--en-size-control-min`))}, ${R(`--en-size-target-min`)}); }
  /* Explicit button mode; existing stepper/overlay icon recipes retain their layout. */
  .en-button[data-icon-only] {
    --_en-icon-button-side: max(var(--_en-text-control-block-size), calc(max(${z(`--en-icon-size`,R(`--en-size-icon`))}, ${R(`--en-size-spinner`)}) + 2 * ${R(`--en-space-control-block`)} + 2 * ${R(`--en-border-width`)}));
    min-inline-size: var(--_en-icon-button-side);
    min-block-size: var(--_en-icon-button-side);
    inline-size: max-content;
    aspect-ratio: 1;
    padding: ${R(`--en-space-control-block`)};
    gap: 0;
    flex-shrink: 0;
  }
  .en-button[data-icon-only] > .en-button__label {
    position: absolute;
    inline-size: 1px;
    block-size: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  /* Keep one visual glyph while busy. The label and slotted nodes remain intact. */
  .en-button[data-icon-only][aria-busy='true'] > :is(.en-button__prefix, .en-button__suffix) { display: none; }

`,ln=o`background-color ${R(`--en-duration-fast`)} ${R(`--en-ease-standard`)}, border-color ${R(`--en-duration-fast`)} ${R(`--en-ease-standard`)}`,un=W(o`.en-button`,{family:`button`,baseTransitions:ln}),dn=o`.en-button:not(:disabled):not([aria-disabled='true']):hover { background: Highlight !important; color: HighlightText !important; }`,fn=o`max(0px, ${z(`--en-segmented-control-frame-inset`,R(`--en-space-1`))})`,K=o`calc(${fn} + ${R(`--en-border-width`)})`;function pn(e=!1){let t=R(e?`--en-size-target-touch`:`--en-size-target-min`),n=R(`--en-space-control-block`),r=R(`--en-border-width`),i=o`max(calc(${R(`--en-space-1`)} + ${r}), ${K})`;return o`max(
    ${z(`--en-control-min-size`,R(`--en-size-control-min`))},
    calc(${t} + 2 * ${i}),
    calc(${R(`--en-font-input-size`)} * ${R(`--en-font-input-line-height`)} + 2 * ${n} + 2 * ${r}),
    calc(${R(`--en-font-ui-size`)} * ${R(`--en-font-ui-line-height`)} + 2 * max(${n}, ${i}) + 2 * ${r})
  )`}function mn(e,t=!1){return o`${e} { --_en-text-control-block-size: ${pn(t)}; }`}function hn(e){return o`${e} {
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: max(${z(`--en-control-min-size`,R(`--en-size-control-min`))}, ${R(`--en-size-target-min`)});
    max-inline-size: 100%;
    padding-block: ${R(`--en-space-control-block`)};
    padding-inline: ${z(`--en-control-inline-padding`,R(`--en-space-control-inline`))};
    border: ${R(`--en-border-width`)} solid ${z(`--en-control-border-color`,R(`--en-color-boundary`))};
    border-radius: ${z(`--en-control-radius`,R(`--en-radius-control`))};
    background: ${z(`--en-control-background`,R(`--en-color-surface`))};
    color: ${z(`--en-control-color`,R(`--en-color-text`))};
    font: inherit;
    text-align: start;
  }`}function gn(e){return o`${e} { min-block-size: var(--_en-text-control-block-size); }`}function _n(e){return o`${e} {
    color: ${R(`--en-color-text-muted`)};
    background: ${R(`--en-color-surface-subtle`)};
    border-color: ${R(`--en-color-boundary`)};
    cursor: default;
  }`}function vn(e){return o`${e} { min-block-size: max(${z(`--en-control-min-size`,R(`--en-size-control-min`))}, ${R(`--en-size-target-touch`)}); }`}function yn(e){return o`${e} { min-inline-size: max(${z(`--en-control-min-size`,R(`--en-size-control-min`))}, ${R(`--en-size-target-touch`)}); }`}function bn(e){return o`${e} { transition: none; }`}function xn(e){return o`${e} { color: CanvasText !important; background: Canvas !important; border-color: ButtonText !important; }`}function Sn(e){return o`${e} { color: GrayText !important; border-color: GrayText !important; }`}var Cn=B(o`
  ${mn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`)}
  ${hn(o`.en-button`)}
  ${gn(o`.en-button:not(.en-icon-button)`)}
  ${cn}
  ${_n(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
  ${un}
  @media (any-pointer: coarse) {
    ${mn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`,!0)}
    ${vn(o`.en-button`)}
    ${gn(o`.en-button:not(.en-icon-button)`)}
    ${yn(o`.en-icon-button`)}
  }
  @media (prefers-reduced-motion: reduce) { ${bn(o`.en-button`)} }
  @media (forced-colors: active) {
    ${xn(o`.en-button`)}
    ${Sn(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
    ${dn}
  }
`),wn=B(o`
  .en-spinner {
    display: inline-block;
    flex: none;
    inline-size: ${R(`--en-size-spinner`)};
    block-size: ${R(`--en-size-spinner`)};
    border: ${R(`--en-size-spinner-stroke`)} solid currentColor;
    border-inline-end-color: ${R(`--en-color-line`)};
    border-radius: ${R(`--en-radius-pill`)};
    animation: en-style-spin ${R(`--en-duration-spin`)} linear infinite;
  }
  @keyframes en-style-spin { to { transform: rotate(1turn); } }
  .en-skeleton { display: block; inline-size: 100%; block-size: ${z(`--en-skeleton-size`,R(`--en-size-skeleton-line`))}; background: ${z(`--en-skeleton-color`,R(`--en-color-surface-subtle`))}; border-radius: ${R(`--en-radius-control`)}; }
  .en-skeleton[data-shape='circle'] { inline-size: ${z(`--en-skeleton-size`,R(`--en-size-avatar`))}; block-size: ${z(`--en-skeleton-size`,R(`--en-size-avatar`))}; border-radius: ${R(`--en-radius-pill`)}; }
  .en-skeleton[data-shape='rectangle'] { block-size: ${z(`--en-skeleton-size`,R(`--en-space-16`))}; }
  @media (prefers-reduced-motion: reduce) { .en-spinner { animation: none; } }
  @media (forced-colors: active) { .en-spinner { border-color: CanvasText; border-inline-end-color: GrayText; } .en-skeleton { background: Canvas; border: ${R(`--en-border-width`)} solid GrayText; } }
`),Tn=e=>e??T,En=e=>S`
  <button
    class=${e.iconOnly?`en-button en-icon-button`:`en-button`}
    ?data-icon-only=${e.iconOnly}
    part="control"
    type="button"
    tabindex=${e.tabIndex??0}
    data-variant=${e.variant}
    data-size=${e.size}
    ?disabled=${e.disabled||e.loading}
    aria-busy=${e.loading?`true`:`false`}
    aria-haspopup=${Tn(e.popupRole??void 0)}
    aria-expanded=${Tn(e.popupExpanded??void 0)}
  >
    ${e.loading?S`<span class="en-spinner" part="indicator" aria-hidden="true"></span>`:null}
    <slot class="en-button__prefix" name="prefix"></slot>
    <span class="en-button__label" part="label"><slot name="label"><slot></slot></slot></span>
    <slot class="en-button__suffix" name="suffix"></slot>
  </button>
`,Dn=new WeakMap;function On(e,t){Dn.set(e,{write:t})}var kn=class extends qt{static properties={variant:{reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},iconOnly:{type:Boolean,attribute:`icon-only`,reflect:!0},popupRole:{attribute:`aria-haspopup`},popupExpanded:{attribute:`aria-expanded`},descriptionIds:{attribute:`aria-describedby`,hasChanged:()=>!0}};static styles=[V,rn,Cn,wn];tabStop=0;constructor(){super(),this.variant=`primary`,this.disabled=!1,this.loading=!1,this.iconOnly=!1,this.popupRole=null,this.popupExpanded=null,this.descriptionIds=null,On(this,e=>{if(this.tabStop===e)return;this.tabStop=e;let t=this.renderRoot?.querySelector(`button`);t&&(t.tabIndex=e),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.requestUpdate()}focus(e){this.renderRoot.querySelector(`button`)?.focus(e)}render(){return En({variant:this.variant,size:this.size,disabled:this.disabled,loading:this.loading,iconOnly:this.iconOnly,popupRole:this.popupRole,popupExpanded:this.popupExpanded,tabIndex:this.tabStop})}updated(){let e=this.renderRoot.querySelector(`button`);if(!e||!(`ariaDescribedByElements`in e))return;let t=this.ariaDescribedByElements,n=e.ariaDescribedByElements;(n?.length!==t?.length||n?.some((e,n)=>e!==t?.[n]))&&(e.ariaDescribedByElements=t)}};function An(e){let t=new Map,n=new Map,r=[],i=new Set,a=e=>{let r=t.get(e.tagName);if(r&&r.elementClass!==e.elementClass)throw Error(`Conflicting constructors for ${e.tagName}.`);if(t.set(e.tagName,e),i.has(e))return;i.add(e);let o=n.get(e.tagName)??new Set;n.set(e.tagName,o);for(let t of e.dependencies??[])o.add(t.tagName),a(t)};for(let t of e)a(t);let o=new Set,s=new Set,c=e=>{if(!(o.has(e)||s.has(e))){s.add(e);for(let t of n.get(e)??[])c(t);s.delete(e),o.add(e),r.push(t.get(e))}};for(let e of t.keys())c(e);return Object.freeze(r)}function jn(e,t){let n=An(t),r=new Map;for(let t of n){let n=r.get(t.elementClass);if(n&&n!==t.tagName)throw Error(`One constructor cannot define both ${n} and ${t.tagName}.`);r.set(t.elementClass,t.tagName);let i=e.get(t.tagName);if(i&&i!==t.elementClass)throw Error(`A different version of ${t.tagName} is already registered.`)}for(let t of n)e.get(t.tagName)||e.define(t.tagName,t.elementClass)}function q(e,t){jn(e,[t])}q(customElements,{tagName:`en-button`,elementClass:kn});var Mn=o`
  ${un}
  ${W(o`.en-accordion-trigger`,{family:`button`})}
  ${W(o`:where(.en-input, .en-textarea, .en-select, .en-color-control)`,{family:`input`})}
  ${W(o`.en-option`,{family:`option`})}
  ${W(o`:where(.en-link, .en-control:not(.en-color-control), .en-checkbox, .en-radio, .en-switch,
    .en-range, .en-tab, .en-split-separator, .en-rating-item)`)}
`,Nn=on({family:`input`}),Pn=o`
  .en-field-focus-frame {
    position: relative;
    min-inline-size: 0;
    --_en-field-focus-accent-width: ${z(`--en-input-focus-accent-width`,R(`--en-focus-accent-width`))};
  }
  .en-field-focus-frame:not(.en-number-group) { display: grid; }
  .en-field-focus-frame > :is(input, textarea) { display: block; }
  .en-field-focus-frame::after {
    content: '';
    position: absolute;
    pointer-events: none;
    inset-inline: 0;
    inset-block-end: 0;
    box-sizing: border-box;
    block-size: max(var(--_en-field-focus-accent-width), ${z(`--en-control-radius`,R(`--en-radius-control`))});
    border-end-start-radius: ${z(`--en-control-radius`,R(`--en-radius-control`))};
    border-end-end-radius: ${z(`--en-control-radius`,R(`--en-radius-control`))};
    border-block-end: var(--_en-field-focus-accent-width) solid ${z(`--en-input-focus-accent-color`,R(`--en-color-focus`))};
    clip-path: inset(calc(100% - var(--_en-field-focus-accent-width)) 0 0 0);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${R(`--en-duration-focus-exit`)} ${R(`--en-ease-focus-exit`)};
  }
  .en-number-group.en-field-focus-frame {
    box-shadow: 0 0 0 0 ${Nn.haloColor};
    transition: box-shadow ${R(`--en-duration-focus-exit`)} ${R(`--en-ease-focus-exit`)};
  }
  .en-number-group.en-field-focus-frame:focus-within {
    box-shadow: 0 0 0 ${Nn.haloWidth} ${Nn.haloColor};
    transition-duration: ${R(`--en-duration-focus-enter`)};
    transition-timing-function: ${R(`--en-ease-focus-enter`)};
  }
  .en-field-focus-frame:focus-within::after {
    transform: scaleX(1);
    transition-duration: ${R(`--en-duration-focus-enter`)};
    transition-timing-function: ${R(`--en-ease-focus-enter`)};
  }
  @media (prefers-reduced-motion: reduce) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after,
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { transition: none; }
  }
  @media (forced-colors: active) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after { border-block-end-color: Highlight; transition: none; }
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { box-shadow: none; transition: none; }
  }
`;B(o`
  .en-alert { display: flex; align-items: flex-start; gap: ${R(`--en-space-3`)}; min-inline-size: 0; padding: ${R(`--en-space-4`)}; border: ${R(`--en-border-width`)} solid ${z(`--en-alert-border-color`,R(`--en-color-accent-border`))}; border-radius: ${R(`--en-radius-container`)}; background: ${z(`--en-alert-background`,R(`--en-color-surface`))}; color: ${z(`--en-alert-color`,R(`--en-color-text`))}; }
  .en-alert__icon { flex: none; color: ${R(`--en-color-action`)}; }
  .en-alert__content { min-inline-size: 0; flex: 1 1 auto; overflow-wrap: break-word; }
  .en-alert__close { flex: none; margin-inline-start: auto; }
  .en-alert[data-variant='success'] { border-color: ${z(`--en-alert-border-color`,R(`--en-color-success-text`))}; }
  .en-alert[data-variant='warning'] { border-color: ${z(`--en-alert-border-color`,R(`--en-color-warning-text`))}; }
  .en-alert[data-variant='danger'] { border-color: ${z(`--en-alert-border-color`,R(`--en-color-danger-text`))}; }
  .en-alert[data-variant='success'] .en-alert__icon { color: ${R(`--en-color-success-text`)}; }
  .en-alert[data-variant='warning'] .en-alert__icon { color: ${R(`--en-color-warning-text`)}; }
  .en-alert[data-variant='danger'] .en-alert__icon { color: ${R(`--en-color-danger-text`)}; }
  .en-badge { display: inline-flex; align-items: center; gap: ${R(`--en-space-icon-label`)}; max-inline-size: 100%; padding-block: ${R(`--en-space-badge-block`)}; padding-inline: ${R(`--en-space-badge-inline`)}; border: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; border-radius: ${z(`--en-badge-radius`,R(`--en-radius-control`))}; background: ${z(`--en-badge-background`,R(`--en-color-surface-subtle`))}; color: ${z(`--en-badge-color`,R(`--en-color-text`))}; font-size: ${R(`--en-font-metadata-size`)}; line-height: ${R(`--en-font-metadata-line-height`)}; overflow-wrap: break-word; }
  .en-badge__prefix { display: contents; }
  .en-badge__label { min-inline-size: 0; }
  .en-badge[data-variant='accent'] { background: ${z(`--en-badge-background`,R(`--en-color-accent-subtle`))}; color: ${z(`--en-badge-color`,R(`--en-color-action-text`))}; }
  .en-badge[data-variant='success'] { color: ${z(`--en-badge-color`,R(`--en-color-success-text`))}; }
  .en-badge[data-variant='warning'] { color: ${z(`--en-badge-color`,R(`--en-color-warning-text`))}; }
  .en-badge[data-variant='danger'] { color: ${z(`--en-badge-color`,R(`--en-color-danger-text`))}; }
  .en-progress, .en-progress-track { display: block; inline-size: 100%; block-size: ${z(`--en-progress-size`,R(`--en-size-progress`))}; overflow: hidden; border: 0; border-radius: ${R(`--en-radius-pill`)}; background: ${z(`--en-progress-track-color`,R(`--en-color-surface-subtle`))}; }
  .en-progress { appearance: none; accent-color: ${z(`--en-progress-color`,R(`--en-color-action`))}; }
  .en-progress-fill { display: block; inline-size: clamp(0%, var(--en-progress-value, 0%), 100%); block-size: 100%; border-radius: inherit; background: ${z(`--en-progress-color`,R(`--en-color-action`))}; }
  .en-progress::-webkit-progress-bar { background: ${z(`--en-progress-track-color`,R(`--en-color-surface-subtle`))}; border-radius: inherit; }
  .en-progress::-webkit-progress-value { background: ${z(`--en-progress-color`,R(`--en-color-action`))}; border-radius: inherit; }
  .en-progress::-moz-progress-bar { background: ${z(`--en-progress-color`,R(`--en-color-action`))}; border-radius: inherit; }
  ${wn}
  @media (forced-colors: active) {
    .en-alert, .en-alert[data-variant], .en-badge, .en-badge[data-variant] { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-alert__icon, .en-alert[data-variant] .en-alert__icon { color: CanvasText; }
    .en-progress, .en-progress-track { background: Canvas; border: ${R(`--en-border-width`)} solid CanvasText; }
    .en-progress-fill { background: Highlight; }
    .en-progress::-webkit-progress-bar { background: Canvas; }
    .en-progress::-webkit-progress-value { background: Highlight; }
    .en-progress::-moz-progress-bar { background: Highlight; }
  }
`);var Fn=B(o`
  .en-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; inline-size: ${z(`--en-icon-size`,R(`--en-size-icon`))}; block-size: ${z(`--en-icon-size`,R(`--en-size-icon`))}; vertical-align: middle; color: inherit; }
  .en-icon > :where(svg, img), .en-icon ::slotted(svg), .en-icon ::slotted(img) { display: block; inline-size: 100%; block-size: 100%; }
  svg.en-icon, .en-icon > svg, .en-icon ::slotted(svg) { display: block; stroke-width: ${R(`--en-size-icon-stroke`)}; }
  .en-avatar { display: inline-grid; place-items: center; vertical-align: middle; flex: none; inline-size: ${z(`--en-avatar-size`,R(`--en-size-avatar`))}; block-size: ${z(`--en-avatar-size`,R(`--en-size-avatar`))}; overflow: hidden; border-radius: ${z(`--en-avatar-radius`,R(`--en-radius-pill`))}; background: ${R(`--en-color-surface-subtle`)}; color: ${R(`--en-color-text`)}; }
  .en-avatar__image { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  .en-avatar__fallback { font-weight: ${R(`--en-font-label-strong-weight`)}; }
  .en-media { display: block; max-inline-size: 100%; block-size: auto; border-radius: ${z(`--en-media-radius`,R(`--en-radius-container`))}; aspect-ratio: ${z(`--en-media-aspect-ratio`,o`auto`)}; }
  @media (forced-colors: active) { .en-avatar { color: CanvasText; background: Canvas; border: ${R(`--en-border-width`)} solid CanvasText; } }
`);B(o`
  :host { inline-size: max(${z(`--en-swatch-size`,R(`--en-size-swatch`))}, ${R(`--en-size-target-min`)}); min-inline-size: ${R(`--en-size-target-min`)}; }
  .en-swatch__sample { position: relative; display: block; appearance: none; inline-size: 100%; block-size: max(${z(`--en-swatch-size`,R(`--en-size-swatch`))}, ${R(`--en-size-target-min`)}); min-inline-size: ${R(`--en-size-target-min`)}; padding: 0; margin: 0; overflow: hidden; border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)}; border-radius: ${R(`--en-radius-control`)}; background: transparent; color: inherit; cursor: pointer; }
  .en-swatch__sample:not(:disabled):hover { border-color: ${R(`--en-color-action`)}; }
  .en-swatch__sample:disabled { cursor: default; }
  .en-swatch__color { display: block; inline-size: 100%; block-size: 100%; }
  ${Mn}
  @media (forced-colors: active) {
    .en-swatch__sample, .en-swatch__sample:not(:disabled):hover { border-color: ButtonText; background: Canvas; }
    .en-swatch__sample:disabled { border-color: GrayText; }
    .en-swatch__color { forced-color-adjust: none; }
  }
`);var In={check:C`<path d="m5 12 4 4L19 6" />`,plus:C`<path d="M12 5v14M5 12h14" />`,close:C`<path d="m6 6 12 12M18 6 6 18" />`,"chevron-down":C`<path d="m6 9 6 6 6-6" />`,"arrow-right":C`<path d="M4 12h16m-6-6 6 6-6 6" />`,search:C`<circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />`,info:C`<circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />`,warning:C`<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1" />`,sparkles:C`<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4m-2-2h4" />`},Ln=(e,t)=>S`
  <svg
    class="en-icon"
    part="base"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    focusable="false"
    role=${t?`img`:T}
    aria-label=${t||T}
    aria-hidden=${t?T:`true`}
  >${In[e]??T}</svg>
`;q(customElements,{tagName:`en-icon`,elementClass:class extends qt{static properties={name:{type:String},label:{type:String}};static styles=[V,an,Fn];constructor(){super(),this.name=`info`,this.label=``}render(){return Ln(this.name,this.label)}}});var Rn=new WeakMap;function zn(e,t,n,r){return new((e.ownerDocument?.defaultView?.CustomEvent)??globalThis.CustomEvent)(t,{detail:n,bubbles:!0,composed:!0,cancelable:r})}function Bn(e,t){if(Object.is(t.previous,t.proposed))return`unchanged`;let n=zn(e,`en-change`,Object.freeze({previous:t.previous,proposed:t.proposed,reason:t.reason}),!0),r={authorRevision:t.getRevision(),acceptedEpoch:Rn.get(e)?.acceptedEpoch??0},i=Rn.get(e);i||(i={acceptedEpoch:0,frames:[]},Rn.set(e,i));let a=i;a.frames.push(r);let o=!1,s=()=>a.frames[a.frames.length-1]===r&&t.getRevision()===r.authorRevision&&a.acceptedEpoch===r.acceptedEpoch,c=()=>{o=!0,t.rollback(t.previous)};try{if(t.stage(t.proposed),!s())return o=!0,`superseded`;let i=e.dispatchEvent(n);if(!s())return o=!0,`superseded`;if(!i)return c(),`canceled`;let l=t.canCommit?.(t.proposed)??!0;if(l||n.preventDefault(),!s())return o=!0,`superseded`;if(!l)return c(),`canceled`;a.acceptedEpoch+=1;let u=a.acceptedEpoch;return o=!0,t.commit?.(t.proposed),t.getRevision()!==r.authorRevision||a.acceptedEpoch!==u?`superseded`:`committed`}catch(e){if(!o&&s())try{c()}catch(t){throw AggregateError([e,t],`Change transaction and its rollback both failed.`)}throw e}finally{a.frames.pop(),a.frames.length===0&&Rn.delete(e)}}function Vn(e,t){e.dispatchEvent(zn(e,`en-input`,Object.freeze({...t}),!1))}var Hn=class{#e;#t;#n=null;#r;#i=!1;#a;#o=new WeakSet;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}hostConnected(){this.#i=!0}hostUpdated(){this.#c(),this.sync()}hostDisconnected(){this.#i=!1,this.#l(),this.#r?.abort(),this.#r=void 0,this.#n=null}sync(){let e=this.#n;if(!e||this.#t.model.isComposing.get())return;let t=this.#t.model.draft.get();e.value!==t&&(this.#a=void 0,e.value=t)}#s(e,t,n){let r=this.#t.model.view.get().revision,i=Object.freeze({value:e,isComposing:t,inputType:n});return Vn(this.#e,i),this.#t.onInput?.(i),this.#t.model.view.get().revision===r}#c(){if(!this.#i)return;let e=this.#t.control();if(e===this.#n||(this.#l(),this.#r?.abort(),this.#n=e,!e))return;let t=e.ownerDocument.defaultView?.AbortController??globalThis.AbortController;this.#r=new t;let n={signal:this.#r.signal},r=this.#t.model;if(e.addEventListener(`compositionstart`,()=>{this.#a=void 0,r.startComposition(),r.setDraft(e.value),this.#e.requestUpdate()},n),e.addEventListener(`compositionend`,()=>{let t=e.value,n=r.hasDeferredValue.get();r.endComposition(t),this.#a=t,this.#s(t,!1,`insertCompositionText`)&&!n&&t!==r.value.get()&&this.#t.onCommit?.(t,`compositionend`),this.sync(),this.#e.requestUpdate()},n),e.addEventListener(`input`,t=>{let n=t;n.isComposing&&!r.isComposing.get()&&r.startComposition();let i=e.value;r.setDraft(i);let a=r.isComposing.get(),o=this.#s(i,a,n.inputType??``),s=!a&&i===this.#a;a||(this.#a=void 0),o&&!a&&!s&&i!==r.value.get()&&this.#t.onCommit?.(i,`input`),this.sync(),this.#e.requestUpdate()},n),e.addEventListener(`change`,()=>{r.isComposing.get()||(r.setDraft(e.value),e.value!==r.value.get()&&this.#t.onCommit?.(e.value,`change`),this.sync(),this.#e.requestUpdate())},n),!this.#o.has(e)&&(this.#o.add(e),(this.#t.adoptInitialValue?.(e)??e.value!==e.defaultValue)&&e.value!==r.draft.get())){let t=e.value;r.setDraft(t),this.#s(t,!1,`hydrate`)&&t!==r.value.get()&&this.#t.onCommit?.(t,`hydrate`)}}#l(){this.#t.model.isComposing.get()&&this.#t.model.endComposition(this.#n?.value),this.#a=void 0}};function Un(e){return S`<div id="description" part="description" class="en-description"><slot name="description"><span class="en-description-fallback">${e||T}</span></slot></div>`}function Wn(e=``){let t=new L.State(Object.freeze({value:e,draft:e,isComposing:!1,dirty:!1,revision:0,deferredAuthorWrite:!1})),n=e=>{let n=t.get(),r={...n,...e};return r.value===n.value&&r.draft===n.draft&&r.isComposing===n.isComposing&&r.deferredAuthorWrite===n.deferredAuthorWrite?!1:(t.set(Object.freeze({...r,dirty:r.value!==r.draft,revision:n.revision+1})),!0)},r=e=>t.get().isComposing?n({value:e,deferredAuthorWrite:!0}):n({value:e,draft:e,deferredAuthorWrite:!1});return{value:new L.Computed(()=>t.get().value),draft:new L.Computed(()=>t.get().draft),isComposing:new L.Computed(()=>t.get().isComposing),hasDeferredValue:new L.Computed(()=>t.get().deferredAuthorWrite),view:new L.Computed(()=>{let{deferredAuthorWrite:e,...n}=t.get();return Object.freeze(n)}),setValue:r,stageValue:e=>n({value:e}),setDraft:e=>n({draft:e}),startComposition:()=>n({isComposing:!0}),endComposition:e=>{let r=t.get();return n({draft:r.deferredAuthorWrite?r.value:e??r.draft,isComposing:!1,deferredAuthorWrite:!1})},acceptDraft:()=>!t.get().isComposing&&r(t.get().draft),reset:()=>r(e)}}var Gn={active:!1,lastError:null},Kn=class{original;name=`ReactionError`;constructor(e){this.original=e}},qn=(e,t,n=Object.is)=>{let r=new L.Computed(e,{equals:n}),i=r.get(),a=async()=>{if(await 0,a===void 0)return;let e=r.get();if(!n(e,i))try{t(e,i)}catch(e){if(Gn)console.error(e),Gn.lastError=e;else throw new Kn(e)}finally{i=e}o.watch()},o=new L.subtle.Watcher(()=>a?.());return o.watch(r),()=>{o.unwatch(r),a=void 0}},Jn=class{#e;#t;#n;#r=0;#i=!1;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}get snapshot(){return this.#t()}hostConnected(){if(this.#i)return;this.#n?.();let e=++this.#r;this.#n=qn(this.#t,()=>{!this.#i&&e===this.#r&&this.#e.requestUpdate()}),this.#e.requestUpdate()}hostDisconnected(){++this.#r,this.#n?.(),this.#n=void 0}dispose(){this.#i=!0,this.hostDisconnected(),this.#e.removeController(this)}},Yn=[`badInput`,`customError`,`patternMismatch`,`rangeOverflow`,`rangeUnderflow`,`stepMismatch`,`tooLong`,`tooShort`,`typeMismatch`,`valueMissing`],Xn=class{#e;#t;#n=!1;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}get disabled(){return this.#n||(this.#t.disabled?.()??!1)}hostUpdated(){this.sync()}sync(){let{internals:e}=this.#t;if(typeof e.setFormValue!=`function`)return;let t=this.disabled?null:this.#t.value();e.setFormValue(t,this.#t.state?this.#t.state():t);let n=this.#t.control?.()??null;if(n&&(n.disabled=this.disabled),typeof e.setValidity!=`function`)return;if(this.disabled){e.setValidity({});return}let r=this.#t.validate?.();if(r){let t=Object.values(r.flags).some(Boolean);if(t&&!r.message)throw TypeError(`Invalid form state requires a localized validation message.`);e.setValidity(r.flags,t?r.message:``,r.anchor)}else if(n){let t={};for(let e of Yn)n.validity[e]&&(t[e]=!0);e.setValidity(t,n.validationMessage,n)}else e.setValidity({})}formDisabled(e){this.#n=e,this.sync(),this.#e.requestUpdate()}formReset(){this.#t.onReset(),this.sync(),this.#e.requestUpdate()}formStateRestore(e,t){this.#t.onRestore?.(e,t),this.sync(),this.#e.requestUpdate()}},J=o`clamp(0ms, ${R(`--en-duration-enter`)}, 500ms)`,Y=o`clamp(0ms, ${R(`--en-duration-exit`)}, 500ms)`,X=o`clamp(0px, ${R(`--en-motion-surface-offset`)}, 8px)`,Zn=o`clamp(.95, ${R(`--en-motion-surface-scale`)}, 1)`,Qn=o`var(--_en-surface-duration, 0ms) var(--_en-surface-ease, linear)`,$n=o`opacity var(--_en-surface-opacity-duration, 0ms) var(--_en-surface-ease, linear), translate ${Qn}, scale ${Qn}, display ${Qn} allow-discrete, overlay ${Qn} allow-discrete`;function er(e,t,n,r,i=o``){let a=o`:where(${e})${i}`,s=o`${t}${i}`,c=o`${n}${i}`;return o`
    @supports (transition-behavior: allow-discrete) and (overlay: auto) {
      ${a} {
        --_en-surface-duration: ${Y};
        --_en-surface-opacity-duration: ${Y};
        --_en-surface-ease: ${R(`--en-ease-exit`)};
        opacity: 0;
        transition: ${$n};
      }
      ${s} {
        --_en-surface-duration: ${J};
        /* Modal and menu entry keep content opaque. Fade surfaces reverse
           from their current opacity when reopened during exit. */
        --_en-surface-opacity-duration: ${r===`fade`?J:o`0ms`};
        --_en-surface-ease: ${R(`--en-ease-enter`)};
        opacity: 1;
      }
      ${c} { pointer-events: none; }
      ${r===`elevation`?o`
        /* Opaque command content and its primary focus contour are immediate.
           Elevation adds entry paint without corrupting measured iPhone geometry. */
        @keyframes en-surface-elevation { from { box-shadow: none; } }
        ${s} { animation: en-surface-elevation ${J} ${R(`--en-ease-enter`)}; }
      `:o``}
      @starting-style { ${s} { opacity: ${r===`fade`?0:1}; } }
    }
    @media (prefers-reduced-motion: reduce) {
      ${a} { transition: none !important; animation: none !important; }
    }
    @media (forced-colors: active) {
      ${a} { animation: none; }
    }
  `}var tr=o`
  ${er(o`dialog:is(.en-dialog, .en-drawer)`,o`dialog:is(.en-dialog, .en-drawer)[open]`,o`dialog:is(.en-dialog, .en-drawer):not([open])`,`move`)}
  @supports (transition-behavior: allow-discrete) and (overlay: auto) {
    dialog:is(.en-dialog, .en-drawer) {
      --_en-surface-x: 0px;
      --_en-surface-y: ${X};
      translate: var(--_en-surface-x) var(--_en-surface-y);
      scale: ${Zn};
    }
    /* Share modal travel distance; attachment selects its axis and sign.
       Keep the drawer unscaled so its attached edge stays flush. */
    dialog.en-drawer { --_en-surface-x: ${X}; --_en-surface-y: 0px; scale: 1; }
    dialog.en-drawer:is([data-placement='start'], [data-placement='left']) { --_en-surface-x: calc(-1 * ${X}); }
    dialog.en-drawer[data-placement='end']:dir(rtl) { --_en-surface-x: calc(-1 * ${X}); }
    dialog.en-drawer[data-placement='start']:dir(rtl) { --_en-surface-x: ${X}; }
    dialog.en-drawer:is([data-placement='top'], [data-placement='bottom']) { --_en-surface-x: 0px; --_en-surface-y: ${X}; }
    dialog.en-drawer[data-placement='top'] { --_en-surface-y: calc(-1 * ${X}); }
    dialog:is(.en-dialog, .en-drawer)[open] { translate: 0px 0px; scale: 1; }
    @starting-style {
      dialog:is(.en-dialog, .en-drawer)[open] {
        translate: var(--_en-surface-x) var(--_en-surface-y);
        scale: ${Zn};
      }
      dialog.en-drawer[open] { scale: 1; }
    }
    dialog:is(.en-dialog, .en-drawer)::backdrop {
      opacity: 0;
      transition: opacity ${Y} ${R(`--en-ease-exit`)}, display ${Y} allow-discrete, overlay ${Y} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer)[open]::backdrop {
      opacity: 1;
      transition: opacity ${J} ${R(`--en-ease-enter`)}, display ${J} allow-discrete, overlay ${J} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer):not([open])::backdrop { pointer-events: none; }
    @starting-style { dialog:is(.en-dialog, .en-drawer)[open]::backdrop { opacity: 0; } }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog:is(.en-dialog, .en-drawer) { translate: none !important; scale: none !important; }
    dialog:is(.en-dialog, .en-drawer)::backdrop { transition: none !important; }
  }
`,nr=o`
  .en-radio {
    flex: none;
    inline-size: ${R(`--en-size-icon`)};
    block-size: ${R(`--en-size-icon`)};
    margin: 0;
    accent-color: ${R(`--en-color-action`)};
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)};
    border-radius: ${R(`--en-radius-pill`)};
    background: ${R(`--en-color-surface`)};
    cursor: pointer;
  }
  .en-radio:checked { border-color: ${z(`--en-radio-selected-color`,R(`--en-color-action`))}; }
  .en-radio:checked::before { content: ''; inline-size: ${R(`--en-size-choice-dot`)}; block-size: ${R(`--en-size-choice-dot`)}; border-radius: ${R(`--en-radius-pill`)}; background: ${z(`--en-radio-selected-color`,R(`--en-color-action`))}; }
  .en-radio:disabled { cursor: default; background: ${R(`--en-color-surface-subtle`)}; border-color: ${R(`--en-color-boundary`)}; }
  .en-radio:disabled::before { background: ${R(`--en-color-text-muted`)}; }
  @media (forced-colors: active) {
    .en-radio { accent-color: auto; background: Canvas; border-color: CanvasText; }
    .en-radio:checked { background: Canvas; border-color: CanvasText; }
    .en-radio:checked::before { background: CanvasText; }
    .en-radio:disabled { background: Canvas; border-color: GrayText; }
    .en-radio:disabled::before { background: GrayText; }
    .en-radio:focus-visible { outline-color: CanvasText; }
  }
`;function rr(e){return o`
    ${e.base} {
      /* Reset each row's state slots: a nested option must not inherit its parent's state. */
      --_en-option-selected-background: initial;
      --_en-option-selected-color: initial;
      --_en-option-active-background: initial;
      --_en-option-active-color: initial;
      --_en-option-hover-background: initial;
      --_en-option-hover-color: initial;
      --_en-option-pressed-background: initial;
      --_en-option-pressed-color: initial;
      --_en-option-disabled-background: initial;
      --_en-option-disabled-color: initial;
      --_en-option-rest-background: var(--en-option-rest-background, var(--en-option-background));
      --_en-option-rest-color: var(--en-option-rest-color, var(--en-option-color));
      background: var(--_en-option-disabled-background, var(--_en-option-pressed-background, var(--_en-option-hover-background, var(--_en-option-active-background, var(--_en-option-selected-background, var(--_en-option-rest-background, ${e.restBackground}))))));
      color: var(--_en-option-disabled-color, var(--_en-option-pressed-color, var(--_en-option-hover-color, var(--_en-option-active-color, var(--_en-option-selected-color, var(--_en-option-rest-color, ${e.restColor}))))));
      font-weight: ${z(`--en-option-font-weight`,o`inherit`)};
    }
    ${e.selected?o`${e.selected} {
      --_en-option-selected-background: ${z(`--en-option-selected-background`,z(`--en-option-background`,R(`--en-color-selected`)))};
      --_en-option-selected-color: ${z(`--en-option-selected-color`,z(`--en-option-color`,e.selectedColor??e.restColor))};
      font-weight: ${z(`--en-option-selected-font-weight`,z(`--en-option-font-weight`,R(`--en-font-label-strong-weight`)))};
    }`:o``}
    ${e.hover} {
      --_en-option-hover-background: ${z(`--en-option-hover-background`,z(`--en-option-background`,e.hoverBackground))};
      /* With neither override set, the state slot is invalid and falls through
         to active/selected/rest paint, rather than resetting it. */
      --_en-option-hover-color: var(--en-option-hover-color, var(--en-option-color));
    }
    ${e.active?o`${e.active} {
      --_en-option-active-background: var(--en-option-active-background, var(--en-option-background));
      --_en-option-active-color: var(--en-option-active-color, var(--en-option-color));
    }`:o``}
    ${e.pressed} {
      --_en-option-pressed-background: var(--en-option-pressed-background, var(--en-option-background));
      --_en-option-pressed-color: var(--en-option-pressed-color, var(--en-option-color));
    }
    ${e.disabled} {
      --_en-option-disabled-background: var(--en-option-disabled-background, var(--en-option-background));
      --_en-option-disabled-color: ${z(`--en-option-disabled-color`,z(`--en-option-color`,R(`--en-color-text-muted`)))};
    }
  `}var ir=o`
  block-size: ${R(`--en-size-range-track`)};
  border: 0;
  border-radius: ${R(`--en-radius-pill`)};
  background: ${R(`--en-color-boundary`)};
`,ar=o`
  box-sizing: border-box;
  inline-size: ${R(`--en-size-icon`)};
  block-size: ${R(`--en-size-icon`)};
  border: ${R(`--en-border-width`)} solid ${R(`--en-color-action`)};
  border-radius: ${R(`--en-radius-pill`)};
  background: ${R(`--en-color-action`)};
`,or=o`outline: ${R(`--en-focus-width`)} solid ${R(`--en-color-focus`)}; outline-offset: ${R(`--en-focus-offset`)};`,sr=o`
  @supports selector(input::-webkit-slider-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-webkit-slider-runnable-track { ${ir} }
    .en-range::-webkit-slider-thumb { appearance: none; ${ar} margin-block-start: calc((${R(`--en-size-range-track`)} - ${R(`--en-size-icon`)}) / 2); }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-webkit-slider-thumb { ${or} }
    .en-range:disabled::-webkit-slider-thumb { background: ${R(`--en-color-text-muted`)}; border-color: ${R(`--en-color-text-muted`)}; }
    @media (forced-colors: active) {
      .en-range::-webkit-slider-runnable-track { background: ButtonText; }
      .en-range::-webkit-slider-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-webkit-slider-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-webkit-slider-thumb { outline-color: CanvasText; }
    }
  }
  @supports selector(input::-moz-range-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-moz-range-track { ${ir} }
    .en-range::-moz-range-thumb { ${ar} }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-moz-range-thumb { ${or} }
    .en-range:disabled::-moz-range-thumb { background: ${R(`--en-color-text-muted`)}; border-color: ${R(`--en-color-text-muted`)}; }
    @media (forced-colors: active) {
      .en-range::-moz-range-track { background: ButtonText; }
      .en-range::-moz-range-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-moz-range-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-moz-range-thumb { outline-color: CanvasText; }
    }
  }
  .en-range:disabled { cursor: default; }
`,cr=o`
  .en-link {
    color: ${R(`--en-color-link`)};
    text-decoration: underline;
    text-underline-offset: ${R(`--en-space-0-5`)};
    overflow-wrap: break-word;
  }
  .en-link:visited { color: ${R(`--en-color-link`)}; }
`,lr=o`.en-link[aria-disabled='true'] { color: ${R(`--en-color-text-muted`)}; cursor: default; }`,ur=o`.en-link, .en-link:visited { color: LinkText; }`,dr=z(`--en-control-inline-padding`,z(`--en-input-inline-padding`,R(`--en-space-control-inline`))),fr=z(`--en-control-radius`,R(`--en-radius-control`)),pr=o`max(0px, ${fr} - ${R(`--en-border-width`)})`,mr=o`max(
  ${R(`--en-space-control-block`)},
  calc((var(--_en-text-control-block-size) - ${R(`--en-font-input-size`)} * ${R(`--en-font-input-line-height`)}) / 2 - ${R(`--en-border-width`)})
)`,hr=B(o`
  /* Compute on each consumer so local token/part overrides retain their scope. */
  ${mn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`)}
  ${hn(o`.en-control, .en-button, .en-input, .en-textarea, .en-select`)}
  ${gn(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
  /* Field tokens customize inputs without changing action and choice surfaces.
     Existing direct control overrides retain their higher precedence. */
  .en-input, .en-textarea, .en-select {
    padding-inline: ${dr};
    background: ${z(`--en-control-background`,z(`--en-input-background`,R(`--en-color-surface`)))};
    color: ${z(`--en-control-color`,z(`--en-input-color`,R(`--en-color-text`)))};
  }
  ${cn}
  ${cr}
  ${_n(o`:is(.en-button, .en-input, .en-textarea, .en-select, .en-control):is(:disabled, [aria-disabled='true'])`)}
  ${lr}
  .en-input, .en-textarea, .en-select {
    inline-size: 100%;
    font: ${R(`--en-font-input-weight`)} ${R(`--en-font-input-size`)} / ${R(`--en-font-input-line-height`)} ${R(`--en-font-input-family`)};
  }
  /* Use the shared text-field surface and target envelope around the native
     date editor. Keep its fields, separators and calendar-picker activation. */
  .en-input[type='date'] {
    -webkit-appearance: none;
    appearance: none;
    padding-block: ${mr};
  }
  .en-input[type='date']::-webkit-datetime-edit { padding: 0; }
  .en-input[type='date']::-webkit-datetime-edit-fields-wrapper { padding-block: 0; }
  .en-input[type='date']::-webkit-datetime-edit-year-field,
  .en-input[type='date']::-webkit-datetime-edit-month-field,
  .en-input[type='date']::-webkit-datetime-edit-day-field { padding-block: 0; }
  .en-input[type='date']::-webkit-date-and-time-value {
    margin-block: 0;
    text-align: inherit;
  }
  .en-input::placeholder, .en-textarea::placeholder { color: ${R(`--en-color-text-muted`)}; opacity: 1; }
  .en-text-input, .en-textarea { padding-block: ${mr}; }
  .en-textarea { resize: block; }
  .en-input[aria-invalid='true'], .en-textarea[aria-invalid='true'], .en-select[aria-invalid='true'], .en-control[data-invalid] {
    border-color: ${R(`--en-color-danger-text`)};
  }
  .en-input:user-invalid, .en-textarea:user-invalid, .en-select:user-invalid { border-color: ${R(`--en-color-danger-text`)}; }
  /* The text-field marker keeps stronger invalid geometry out of other native controls.
     Preserve border + padding on each edge, including scoped padding/base-border tokens. */
  .en-text-input:is([aria-invalid='true'], :user-invalid) {
    border-width: ${R(`--en-border-invalid-width`)};
    padding-block: max(0px, calc(${mr} + ${R(`--en-border-width`)} - ${R(`--en-border-invalid-width`)}));
    padding-inline: max(0px, calc(${dr} + ${R(`--en-border-width`)} - ${R(`--en-border-invalid-width`)}));
  }
  .en-input-group { display: flex; align-items: stretch; gap: ${R(`--en-space-1`)}; min-inline-size: 0; }
  .en-input-group > .en-input { flex: 1 1 auto; inline-size: 0; min-inline-size: 0; }
  .en-number-group {
    gap: 0;
    padding: 0;
    border: ${R(`--en-border-width`)} solid ${z(`--en-control-border-color`,R(`--en-color-boundary`))};
    border-radius: ${fr};
    background: ${z(`--en-control-background`,z(`--en-input-background`,R(`--en-color-surface`)))};
  }
  .en-number-group[data-invalid] { border-color: ${R(`--en-color-danger-text`)}; }
  .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${R(`--en-border-width`)}), ${R(`--en-size-target-min`)}); }
  .en-number-group > .en-number-input { border: 0; border-radius: 0; background: none; appearance: textfield; }
  .en-number-input::-webkit-inner-spin-button, .en-number-input::-webkit-outer-spin-button { appearance: none; margin: 0; }
  .en-number-step {
    flex: none;
    min-inline-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
    padding-inline: ${R(`--en-space-control-block`)};
    border: 0;
    border-inline-start: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)};
    border-radius: 0;
    background: ${R(`--en-color-surface-subtle`)};
    color: ${R(`--en-color-text`)};
  }
  /* Match the frame's override as well as its token. Keep overflow visible so
     consumer-defined outward focus contours remain intact. */
  .en-number-step:last-child { border-start-end-radius: ${pr}; border-end-end-radius: ${pr}; }
  .en-number-step:first-child { border-inline-start: 0; border-inline-end: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; border-start-start-radius: ${pr}; border-end-start-radius: ${pr}; }

  .en-color-control { cursor: pointer; padding: ${R(`--en-space-control-block`)}; block-size: var(--_en-text-control-block-size); }
  .en-color-control::-webkit-color-swatch-wrapper { padding: 0; }
  .en-color-control::-webkit-color-swatch { border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)}; border-radius: max(0px, ${R(`--en-radius-control`)} - ${R(`--en-space-control-block`)}); }
  .en-color-control::-moz-color-swatch { border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)}; border-radius: max(0px, ${R(`--en-radius-control`)} - ${R(`--en-space-control-block`)}); }
  ${nr}
  .en-checkbox, .en-switch {
    flex: none;
    inline-size: ${R(`--en-size-icon`)};
    block-size: ${R(`--en-size-icon`)};
    margin: 0;
    accent-color: ${R(`--en-color-action`)};
  }
  .en-checkbox {
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)};
    background: ${R(`--en-color-surface`)};
    cursor: pointer;
  }
  .en-checkbox { border-radius: ${R(`--en-radius-choice`)}; }
  .en-checkbox:checked, .en-checkbox:indeterminate { background: ${R(`--en-color-action`)}; border-color: ${R(`--en-color-action`)}; }
  .en-checkbox:checked::before {
    content: '';
    box-sizing: border-box;
    inline-size: ${R(`--en-size-choice-mark-inline`)};
    block-size: ${R(`--en-size-choice-mark-block`)};
    /* The check is directional artwork, not an inline-layout edge; never mirror it in RTL. */
    border-right: ${R(`--en-size-choice-mark-stroke`)} solid ${R(`--en-color-on-action`)};
    border-bottom: ${R(`--en-size-choice-mark-stroke`)} solid ${R(`--en-color-on-action`)};
    transform: rotate(45deg);
  }
  .en-checkbox:indeterminate::before { content: ''; inline-size: ${R(`--en-size-choice-mark-block`)}; block-size: 0; border: 0; border-block-end: ${R(`--en-size-choice-mark-stroke`)} solid ${R(`--en-color-on-action`)}; transform: none; }
  .en-checkbox:disabled { cursor: default; background: ${R(`--en-color-surface-subtle`)}; border-color: ${R(`--en-color-boundary`)}; }
  .en-checkbox:disabled::before { border-color: ${R(`--en-color-text-muted`)}; }
  .en-switch {
    position: relative;
    appearance: none;
    box-sizing: border-box;
    inline-size: ${R(`--en-size-switch-inline`)};
    block-size: ${R(`--en-size-switch-block`)};
    border: ${R(`--en-border-width`)} solid ${R(`--en-color-boundary`)};
    border-radius: ${R(`--en-radius-pill`)};
    background: ${R(`--en-color-surface-subtle`)};
    cursor: pointer;
  }
  .en-switch::before {
    content: '';
    position: absolute;
    inset-block-start: ${R(`--en-space-switch-inset`)};
    inset-inline-start: ${R(`--en-space-switch-inset`)};
    inline-size: ${R(`--en-size-switch-thumb`)};
    block-size: ${R(`--en-size-switch-thumb`)};
    border-radius: ${R(`--en-radius-pill`)};
    background: ${R(`--en-color-text-muted`)};
    transition: inset-inline-start ${R(`--en-duration-fast`)} ${R(`--en-ease-standard`)};
  }
  .en-switch:checked { background: ${R(`--en-color-action`)}; border-color: ${R(`--en-color-action`)}; }
  .en-switch:checked::before { inset-inline-start: calc(100% - ${R(`--en-size-switch-thumb`)} - ${R(`--en-space-switch-inset`)}); background: ${R(`--en-color-on-action`)}; }
  .en-switch:disabled { cursor: default; border-color: ${R(`--en-color-boundary`)}; background: ${R(`--en-color-surface-subtle`)}; }
  .en-switch:disabled::before { background: ${R(`--en-color-text-muted`)}; }
  .en-range { inline-size: 100%; min-inline-size: ${R(`--en-size-target-min`)}; min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)}); margin: 0; accent-color: ${R(`--en-color-action`)}; }
  .en-range-row { display: flex; align-items: center; gap: ${R(`--en-space-3`)}; min-inline-size: 0; }
  .en-range-row > .en-range { flex: 1 1 auto; inline-size: 0; }
  .en-range-row[data-editable] { flex-wrap: wrap; }
  .en-range-row > .en-range-editor {
    flex: 0 1 calc(3 * ${R(`--en-size-control-min`)});
    inline-size: calc(3 * ${R(`--en-size-control-min`)});
    min-inline-size: min(100%, ${R(`--en-size-target-min`)});
    font-variant-numeric: tabular-nums;
  }
  /* The value axis alone becomes vertical. Labels, output and number editing
     retain the surrounding writing direction and normal text layout. */
  .en-range-row[data-orientation='vertical'] { flex-direction: column; flex-wrap: nowrap; }
  .en-range-row[data-orientation='vertical'] > .en-range {
    writing-mode: vertical-lr;
    direction: rtl;
    flex: none;
    inline-size: ${z(`--en-slider-length`,R(`--en-size-range-length`))};
    min-inline-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
    block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
  }
  .en-range-row[data-orientation='vertical'] > .en-range-editor {
    flex: none;
    inline-size: min(100%, calc(3 * ${R(`--en-size-control-min`)}));
  }
  .en-range-error[data-pending] { visibility: hidden; }
  .en-range-row > output { flex: none; font-variant-numeric: tabular-nums; color: ${R(`--en-color-text`)}; }
  ${Mn}
  ${Pn}
  ${G(o`.en-number-group > .en-number-input:focus-visible`,{family:`input`,inset:!0,halo:!1})}
  ${G(o`.en-number-group > .en-number-step:focus-visible`,{family:`button`,inset:!0,halo:!1})}
  ${sr}
  @media (any-pointer: coarse) {
    ${mn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`,!0)}
    ${vn(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-range`)}
    .en-range-row[data-orientation='vertical'] > .en-range { min-inline-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-touch`)}); }
    ${gn(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
    .en-color-control { block-size: var(--_en-text-control-block-size); }
    ${yn(o`.en-icon-button, .en-number-step`)}
    .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${R(`--en-border-width`)}), ${R(`--en-size-target-touch`)}); }
  }
  @media (prefers-reduced-motion: reduce) { ${bn(o`.en-button, .en-switch::before`)} }
  @media (forced-colors: active) {
    ${xn(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-number-group`)}
    ${ur}
    ${Sn(o`:is(.en-button, .en-control, .en-input, .en-textarea, .en-select):is(:disabled, [aria-disabled='true']), .en-link[aria-disabled='true']`)}
    ${dn}
    .en-checkbox, .en-switch, .en-range { accent-color: auto; }
    .en-checkbox { background: Canvas; border-color: CanvasText; }
    .en-checkbox:checked, .en-checkbox:indeterminate { background: Canvas; border-color: CanvasText; }
    .en-checkbox::before { border-color: CanvasText; }
    .en-checkbox:disabled { background: Canvas; border-color: GrayText; }
    .en-checkbox:disabled::before { border-color: GrayText; }
    .en-checkbox:focus-visible, .en-switch:focus-visible { outline-color: CanvasText; }
    .en-switch { background: Canvas; border-color: ButtonText; }
    .en-switch::before { background: ButtonText; }
    .en-switch:checked { background: Highlight; border-color: Highlight; }
    .en-switch:checked::before { background: HighlightText; }
    .en-switch:disabled { background: Canvas; border-color: GrayText; }
    .en-switch:disabled::before { background: GrayText; }
  }
`),gr=z(`--en-option-list-radius`,z(`--en-overlay-radius`,R(`--en-radius-container`))),_r=o`max(${z(`--en-option-list-padding`,z(`--en-overlay-padding`,R(`--en-space-1`)))}, ${U({family:`option`,inset:!0})})`,vr=o`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,yr=B(o`
  /* Styling the closed control does not replace its OS picker. Keep this
     fallback outside base-select; ordinary select pseudos are not portable. */
  @supports selector(:has(> .en-select)) {
    @supports not ((appearance: base-select) and selector(::picker(select))) {
      .en-select {
        -webkit-appearance: none;
        appearance: none;
        padding-inline-end: calc(${dr} + ${R(`--en-size-icon`)} + ${R(`--en-space-icon-label`)});
        min-block-size: max(var(--_en-text-control-block-size), calc(${R(`--en-size-icon`)} + 2 * ${R(`--en-space-control-block`)} + 2 * ${R(`--en-border-width`)}));
      }
      .en-field-focus-frame:has(> .en-select)::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset-inline-end: calc(${dr} + ${R(`--en-border-width`)});
        inset-block-start: 50%;
        translate: 0 -50%;
        inline-size: ${R(`--en-size-icon`)};
        block-size: ${R(`--en-size-icon`)};
        color: ${R(`--en-color-text-muted`)};
        background-color: currentColor;
        mask: ${vr} center / contain no-repeat;
        pointer-events: none;
      }
      @media (forced-colors: active) {
        .en-field-focus-frame:has(> .en-select)::before { forced-color-adjust: none; color: ButtonText; }
        .en-field-focus-frame:has(> .en-select:disabled)::before { color: GrayText; }
      }
    }
  }
  @supports (appearance: base-select) and selector(::picker(select)) {
    .en-select, .en-select::picker(select) { appearance: ${z(`--en-select-appearance`,o`base-select`)}; }
    .en-select { align-items: center; gap: ${R(`--en-space-icon-label`)}; }
    .en-select::picker(select) {
      padding: ${_r};
      border: ${R(`--en-border-width`)} solid ${z(`--en-option-list-border-color`,z(`--en-overlay-border-color`,R(`--en-color-boundary`)))};
      border-radius: ${gr};
      background: ${z(`--en-option-list-background`,z(`--en-overlay-background`,R(`--en-color-surface-raised`)))};
      color: ${z(`--en-option-list-color`,z(`--en-overlay-color`,R(`--en-color-text`)))};
      box-shadow: ${z(`--en-option-list-shadow`,R(`--en-shadow-overlay`))};
      max-block-size: min(${z(`--en-option-list-max-block-size`,z(`--en-overlay-max-block-size`,R(`--en-layout-panel-preferred`)))}, calc(100dvh - ${R(`--en-space-8`)}));
      overflow: auto;
    }
    ${er(o`.en-select`,o`.en-select:open`,o`.en-select:not(:open)`,`fade`,o`::picker(select)`)}
    .en-select option {
      position: relative;
      min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
      padding: ${z(`--en-option-block-padding`,R(`--en-space-control-block`))} ${z(`--en-option-inline-padding`,R(`--en-space-control-inline`))};
      border-radius: ${z(`--en-option-radius`,o`max(0px, ${gr} - ${_r} - ${R(`--en-border-width`)})`)};
    }
    .en-select option + option { margin-block-start: ${z(`--en-option-list-gap`,o`0px`)}; }
    ${rr({base:o`.en-select option`,selected:o`.en-select option:checked`,hover:o`.en-select option:not(:disabled):is(:hover, :focus-visible)`,pressed:o`.en-select option:not(:disabled):active`,disabled:o`.en-select option:disabled`,restBackground:o`transparent`,restColor:z(`--en-option-list-color`,z(`--en-overlay-color`,o`inherit`)),selectedColor:z(`--en-option-list-color`,z(`--en-overlay-color`,R(`--en-color-action-text`))),hoverBackground:R(`--en-color-selected`)})}
    .en-select option:not(:disabled):is(:hover, :focus-visible) { z-index: 1; }
    /* Native :active is pressed activation, not the combobox's keyboard candidate. */
    ${G(o`.en-select option:not(:disabled):is(:hover, :focus-visible)`,{family:`option`,inset:!0,restSelector:o`.en-select option`})}
    .en-select::picker-icon {
      content: '';
      inline-size: ${R(`--en-size-icon`)};
      block-size: ${R(`--en-size-icon`)};
      flex: none;
      color: ${R(`--en-color-text-muted`)};
      background-color: currentColor;
      mask: ${vr} center / contain no-repeat;
    }
    @media (any-pointer: coarse) { .en-select option { min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-touch`)}); } }
    @media (forced-colors: active) {
      .en-select::picker(select) { background: Canvas; color: CanvasText; border-color: ButtonText; box-shadow: none; }
      .en-select option { background: Canvas; color: CanvasText; }
      .en-select option:checked, .en-select option:not(:disabled):is(:hover, :focus-visible) { background: Highlight; color: HighlightText; outline-color: HighlightText; }
      .en-select option:disabled { color: GrayText; }
      /* Keep the decorative mask visible while using the user's system colors. */
      .en-select::picker-icon { forced-color-adjust: none; color: ButtonText; }
      .en-select:disabled::picker-icon { color: GrayText; }
    }
  }
`),br=B(o`
  .en-field, .en-rating-field { --_en-field-gap: ${z(`--en-field-gap`,R(`--en-space-label-control`))}; }
  .en-field { display: flex; flex-direction: column; min-inline-size: 0; gap: 0; }
  .en-field > :not(:first-child):not(.en-description),
  .en-choice-content > :not(:first-child):not(.en-description) { margin-block-start: var(--_en-field-gap); }
  /* A fieldset legend already separates its first content through its margin. */
  .en-field > .en-legend + :not(.en-description) { margin-block-start: 0; }
  .en-label { display: block; color: ${R(`--en-color-text`)}; font-weight: ${R(`--en-font-label-strong-weight`)}; overflow-wrap: break-word; }
  .en-description, .en-error { margin: 0; font-size: ${R(`--en-font-ui-size`)}; line-height: ${R(`--en-font-body-line-height`)}; overflow-wrap: break-word; }
  /* No box or gap is created by the empty fallback. An assigned root remains
     present even when its light DOM is empty: it may render its own shadow. */
  .en-description { display: flow-root; color: ${R(`--en-color-text-muted`)}; }
  .en-description-fallback,
  .en-description > slot::slotted(:not([hidden])) { display: block; margin-block-start: var(--_en-field-gap); }
  .en-description-fallback:empty { display: none; }
  .en-error { color: ${R(`--en-color-danger-text`)}; }
  .en-choice { display: flex; align-items: center; gap: ${R(`--en-space-icon-label`)}; min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)}); min-inline-size: ${R(`--en-size-target-min`)}; cursor: pointer; }
  .en-choice > :where(.en-label, .en-choice-content) { min-inline-size: 0; }
  .en-choice-content { --_en-field-gap: ${z(`--en-field-gap`,R(`--en-space-control-description`))}; display: flex; flex-direction: column; gap: 0; }
  .en-fieldset { margin: 0; padding: 0; min-inline-size: 0; border: 0; }
  .en-legend { padding: 0; margin-block-end: ${R(`--en-space-label-control`)}; font-weight: ${R(`--en-font-label-strong-weight`)}; }
  .en-form-stack { display: flex; flex-direction: column; gap: ${R(`--en-space-fields`)}; }
  .en-validation-summary { padding: ${R(`--en-space-panel`)}; border: ${R(`--en-border-width`)} solid ${R(`--en-color-danger-text`)}; border-radius: ${R(`--en-radius-container`)}; }
  .en-validation-summary :where(ul, ol) { padding-inline-start: ${R(`--en-space-6`)}; }
  @media (any-pointer: coarse) { .en-choice { min-block-size: ${R(`--en-size-target-touch`)}; } }
  @media (forced-colors: active) { .en-label, .en-description, .en-error { color: CanvasText; } .en-validation-summary { border-color: CanvasText; } }
`),Z=class extends qt{static formAssociated=!0;static styles=[V,br,hr,o`:host { display: block; }`];static properties={label:{type:String},description:{type:String},error:{type:String},value:{type:String,noAccessor:!0},name:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},placeholder:{type:String}};model=Wn();signal=new Jn(this,()=>this.model.view.get());internals;formAdapter;authorRevision=0;initialValue;showNativeError=!1;nativeErrorMessage=``;constructor(){super(),this.label=``,this.description=``,this.error=``,this.name=``,this.disabled=!1,this.required=!1,this.placeholder=``,this.internals=typeof this.attachInternals==`function`?this.attachInternals():void 0,this.internals&&(this.formAdapter=new Xn(this,{internals:this.internals,control:()=>this.controlNode,value:()=>this.submissionValue,state:()=>this.value,disabled:()=>this.disabled,validate:()=>this.validateAcceptedValue(),onReset:()=>{this.showNativeError=!1,this.value=this.initialValue??``},onRestore:e=>{typeof e==`string`&&(this.value=e)}})),this.addEventListener(`invalid`,()=>{this.showNativeError=!0,this.requestUpdate()})}get value(){return this.model.value.get()}set value(e){let t=this.value;this.authorRevision++,this.model.setValue(String(e??``)),this.reconcile(),this.syncForm(),this.requestUpdate(`value`,t)}get form(){return this.internals?.form??null}get labels(){return this.internals?.labels}get validity(){return this.internals?.validity??this.controlNode?.validity}get validationMessage(){return this.internals?.validationMessage??``}get willValidate(){return this.internals?.willValidate??!1}willUpdate(e){super.willUpdate(e),this.initialValue===void 0&&(this.initialValue=this.value)}focus(e){this.controlNode?.focus(e)}blur(){this.controlNode?.blur()}checkValidity(){return this.syncForm(),this.internals?.checkValidity?.()??this.controlNode?.checkValidity()??!0}reportValidity(){return this.syncForm(),this.internals?.reportValidity?.()??this.controlNode?.reportValidity()??!0}formResetCallback(){this.formAdapter?.formReset()}formDisabledCallback(e){this.formAdapter?.formDisabled(e)}formStateRestoreCallback(e,t){this.formAdapter?.formStateRestore(e,t)}get submissionValue(){return this.value}get isDisabled(){return this.formAdapter?.disabled??this.disabled}get defaultControlValue(){return this.initialValue??this.value}get controlNode(){return this.shadowRoot?.querySelector(`#control`)??null}get describedBy(){return this.visibleError?`description error`:`description`}get visibleError(){return this.error||(this.showNativeError?this.nativeErrorMessage:``)}get controlAriaInvalid(){return this.visibleError?`true`:T}renderControlFrame(){return S`<div class="en-field-focus-frame" part="focus-frame">${this.renderControl()}</div>`}get valueRevision(){return this.authorRevision}canCommitValue(e){return!0}stageValue(e){let t=this.value;this.model.stageValue(e),this.syncForm(),this.requestUpdate(`value`,t)}requestValue(e,t){this.isDisabled||Bn(this,{previous:this.value,proposed:e,reason:t,getRevision:()=>this.authorRevision,canCommit:e=>this.canCommitValue(e),stage:e=>this.stageValue(e),rollback:e=>this.stageValue(e),commit:e=>{this.model.setValue(e),this.reconcile(),this.syncForm(),this.requestUpdate()}})}updated(e){super.updated(e),this.reconcile(),this.syncForm()}syncForm(){let e=this.nativeErrorMessage;this.formAdapter?.sync(),this.nativeErrorMessage=this.validationMessage,this.showNativeError&&e!==this.nativeErrorMessage&&this.requestUpdate()}validateAcceptedValue(){let e=this.controlNode;if(!e)return{flags:{}};let t=e.value===this.value?e:e.cloneNode(!0);t!==e&&(t.value=this.value),t.setCustomValidity(this.error);let n=t.validity;return{flags:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing},message:n.valid?``:t.validationMessage,anchor:e}}render(){return S`<div class="en-field" part="field" data-invalid=${this.visibleError?``:T}>
      <label class="en-label" part="label" for="control"><slot name="label">${this.label}</slot></label>
      ${this.renderControlFrame()}
      ${Un(this.description)}
      ${this.visibleError?S`<div class="en-error" part="error" id="error">${this.visibleError}</div>`:T}
    </div>`}},xr=class extends Z{static properties={...Z.properties,readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},autocomplete:{type:String},inputMode:{type:String,attribute:`inputmode`}};editing=new Hn(this,{model:this.model,control:()=>this.controlNode,onCommit:(e,t)=>{this.readOnly||this.requestValue(e,t)}});constructor(){super(),this.readOnly=!1,this.autocomplete=``,this.inputMode=``}reconcile(){this.editing?.sync()}select(){this.controlNode?.select()}},Sr=class extends xr{static properties={...xr.properties,min:{type:Number},max:{type:Number},step:{type:Number},decrementLabel:{type:String,attribute:`decrement-label`},incrementLabel:{type:String,attribute:`increment-label`}};constructor(){super(),this.min=void 0,this.max=void 0,this.step=1,this.decrementLabel=`Decrease value`,this.incrementLabel=`Increase value`}stepValue(e){let t=this.controlNode;if(!t||this.isDisabled||this.readOnly||this.model.isComposing.get())return;let n=t.cloneNode();n.value=t.value,e<0?n.stepDown():n.stepUp(),this.requestValue(n.value,e<0?`decrement`:`increment`)}renderControlFrame(){return this.renderControl()}renderControl(){let e=this.model.draft.get(),t=e===``?void 0:Number(e),n=this.isDisabled||this.readOnly||t!==void 0&&this.min!==void 0&&t<=this.min,r=this.isDisabled||this.readOnly||t!==void 0&&this.max!==void 0&&t>=this.max;return S`<div class="en-input-group en-number-group en-field-focus-frame" part="stepper focus-frame" data-invalid=${this.visibleError?``:T}>
      <button class="en-button en-button--quiet en-icon-button en-number-step en-number-decrement" part="decrement" type="button"
        ?disabled=${n} @click=${()=>this.stepValue(-1)}><span class="en-sr-only"><slot name="decrement-label">${this.decrementLabel}</slot></span><span aria-hidden="true">−</span></button>
      <input id="control" class="en-input en-number-input" part="control" type="number" name=${this.name}
        value=${this.defaultControlValue} min=${this.min??T} max=${this.max??T} step=${this.step}
        placeholder=${this.placeholder||T} autocomplete=${this.autocomplete||T}
        inputmode=${this.inputMode||T} ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
        aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>
      <button class="en-button en-button--quiet en-icon-button en-number-step en-number-increment" part="increment" type="button"
        ?disabled=${r} @click=${()=>this.stepValue(1)}><span class="en-sr-only"><slot name="increment-label">${this.incrementLabel}</slot></span><span aria-hidden="true">+</span></button>
    </div>`}};q(customElements,{tagName:`en-number-field`,elementClass:Sr});var Cr=class extends xr{static properties={...xr.properties,type:{type:String},minLength:{type:Number,attribute:`minlength`},maxLength:{type:Number,attribute:`maxlength`},pattern:{type:String}};constructor(){super(),this.type=`text`,this.minLength=void 0,this.maxLength=void 0,this.pattern=``}renderControl(){return S`<input id="control" class="en-input en-text-input" part="control"
      type=${[`text`,`email`,`password`,`url`,`tel`].includes(this.type)?this.type:`text`} name=${this.name} value=${this.defaultControlValue}
      placeholder=${this.placeholder||T} autocomplete=${this.autocomplete||T}
      inputmode=${this.inputMode||T} minlength=${this.minLength??T}
      maxlength=${this.maxLength??T} pattern=${this.pattern||T}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`}};q(customElements,{tagName:`en-text-field`,elementClass:Cr});var wr=`data-en-selection-children`,Tr=`en-selection-`,Er={select:`en-select-option`,segmented:`en-segmented-item`},Dr=e=>e.replace(/[\t\n\f\r ]+/g,` `).replace(/^ | $/g,``);function Or(e){return/^en-selection-(?:ssr|client)-(?:0|[1-9]\d*)$/.test(e)}function kr(e,t){let n=new Set,r=new Set;return Object.freeze(t.map(t=>{let i=t.attributes,a=e=>Object.prototype.hasOwnProperty.call(i,e);if(t.tagName!==Er[e])throw TypeError(`Expected direct ${Er[e]} children.`);if(!t.key||r.has(t.key))throw TypeError(`Repeated or missing selection child key.`);if(r.add(t.key),!a(`value`)||e===`segmented`&&i.value===``)throw TypeError(`${Er[e]} requires an explicit ${e===`segmented`?`nonempty `:``}value.`);if(n.has(i.value))throw TypeError(`Selection child values must be unique.`);if(n.add(i.value),a(`selected`)||a(`checked`))throw TypeError(`Selection children do not own selected or checked state; set the parent value instead.`);if(a(`slot`)&&!(e===`segmented`&&Or(i.slot)))throw TypeError(`Selection child slot attributes are reserved for internal label projection.`);if(i.hidden?.toLowerCase()===`until-found`)throw TypeError(`Selection children do not support hidden=until-found.`);if(e===`segmented`&&(t.interactive||Ar(t.tagName,i)))throw TypeError(`Segmented labels must contain noninteractive content only.`);if(e===`segmented`&&(a(`inert`)||i[`aria-hidden`]?.toLowerCase()===`true`))throw TypeError(`Segmented label roots must not be inert or aria-hidden; use hidden to make a choice unavailable.`);return Object.freeze({key:t.key,value:i.value,label:e===`select`?Dr(t.text)||Dr(i.label??``):``,disabled:a(`disabled`),hidden:a(`hidden`)})}))}function Ar(e,t){let n=e=>Object.prototype.hasOwnProperty.call(t,e);return[`button`,`input`,`select`,`textarea`,`summary`,`iframe`,`embed`,`object`].includes(e)||(e===`a`||e===`area`)&&n(`href`)||(e===`audio`||e===`video`)&&n(`controls`)||n(`tabindex`)||n(`contenteditable`)&&t.contenteditable!==`false`}var jr=new WeakMap,Mr=new WeakMap,Nr=class{#e;#t;#n=new WeakMap;#r=new Map;#i=0;#a;#o={active:!1,items:[],error:``};#s=!1;#c=!1;#l;constructor(e,t){if(this.#e=e,this.#t=t,jr.has(e))throw TypeError(`Only one selection child controller can own a host.`);jr.set(e,this),e.addController(this)}get view(){return this.#o}get initialValue(){return this.#l}prepare(e){if(e.version!==1||e.kind!==this.#t||typeof e.value!=`string`||!Array.isArray(e.items))throw TypeError(`Invalid selection child SSR snapshot.`);let t=new Set,n=new Set;for(let r of e.items){if(!r||typeof r.key!=`string`||!r.key||t.has(r.key)||typeof r.value!=`string`||n.has(r.value)||this.#t===`segmented`&&!r.value||typeof r.label!=`string`||typeof r.disabled!=`boolean`||typeof r.hidden!=`boolean`)throw TypeError(`Invalid selection child SSR record.`);t.add(r.key),n.add(r.value)}this.#o={active:e.items.length>0,items:e.items.map(e=>Object.freeze({...e})),error:``},this.#s=!0,this.#c=!0,this.#l=e.value,this.#e.requestUpdate()}hostConnected(){let e=this.#e.getAttribute(wr);if(e!==null&&!this.#s){this.prepare(JSON.parse(e)),this.#c=!1;let t=this.#f();this.#o.items.forEach(e=>{let n=t.find(t=>this.#t===`segmented`?t.getAttribute(`slot`)===`en-selection-${e.key}`&&t.getAttribute(`value`)===e.value:t.getAttribute(`value`)===e.value);if(!n)return;this.#n.set(n,e.key);let r=n.getAttribute(`slot`);this.#t===`segmented`&&r===`en-selection-${e.key}`&&this.#u(n,r)})}this.#s||this.refresh();let t=this.#e.ownerDocument.defaultView?.MutationObserver;t&&(this.#a??=new t(()=>this.refresh()),this.#a.observe(this.#e,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`value`,`label`,`disabled`,`hidden`,`selected`,`checked`,`slot`,`tabindex`,`contenteditable`,`href`,`controls`,`inert`,`aria-hidden`]}))}hostUpdated(){this.#s&&(this.#s=!1,this.#e.removeAttribute(wr)),this.refresh()}hostDisconnected(){this.#a?.disconnect();for(let[e,t]of this.#r)this.#d(e,t)}#u(e,t){Mr.set(e,this),this.#r.set(e,t),e.getAttribute(`slot`)!==t&&e.setAttribute(`slot`,t)}#d(e,t){Mr.get(e)===this&&(e.getAttribute(`slot`)===t&&e.removeAttribute(`slot`),Mr.delete(e)),this.#r.delete(e)}#f(){return[...this.#e.children??[]].filter(e=>e.localName===Er[this.#t])}current(){if(this.#c)return this.#o;let e=this.#f();if(!e.length)return{active:!1,items:[],error:``};try{let t=e.map(e=>{let t=this.#n.get(e);t||(t=`client-${++this.#i}`,this.#n.set(e,t));let n=Object.fromEntries([...e.attributes].map(e=>[e.name,e.value])),r=this.#r.get(e);if(r!==void 0&&Mr.get(e)===this){if(n.slot!==r)throw TypeError(`Do not replace or remove an internally owned selection child slot.`);delete n.slot}let i=this.#t===`segmented`&&[...e.querySelectorAll(`*`)].some(e=>Ar(e.localName,Object.fromEntries([...e.attributes].map(e=>[e.name,e.value]))));return{key:t,tagName:e.localName,attributes:n,text:e.textContent??``,interactive:i}});return{active:!0,items:kr(this.#t,t),error:``}}catch(e){return{active:!0,items:[],error:e instanceof Error?e.message:String(e)}}}refresh(){if(this.#s)return;let e=this.current(),t=this.#f();for(let[e,n]of this.#r)t.includes(e)||this.#d(e,n);!e.error&&this.#t===`segmented`&&t.forEach((t,n)=>{let r=`${Tr}${e.items[n].key}`;this.#u(t,r)}),JSON.stringify(e)!==JSON.stringify(this.#o)&&(this.#o=e,this.#e.requestUpdate())}},Pr=class extends Z{static styles=[...Z.styles,yr];static properties={...Z.properties,items:{attribute:!1}};childOptions=new Nr(this,`select`);hydrationChoice=this.captureHydrationChoice();hydrationRevision=0;constructor(){super(),this.items=[]}connectedCallback(){this.hydrationRevision=this.valueRevision,super.connectedCallback()}captureHydrationChoice(){let e=this.shadowRoot?.querySelector(`#control`);if(e&&this.hasAttribute(`data-en-selection-children`))return{value:e.value,baseline:[...e.options].find(e=>e.defaultSelected)?.value??[...e.options].find(e=>!e.disabled)?.value??``}}get effectiveItems(){return this.childOptions.view.active?this.childOptions.view.items:this.items}currentItems(){let e=this.childOptions.current();return e.active?e.items:this.items}get visibleError(){return this.childOptions?.view.error||super.visibleError}get submissionValue(){return this.value===``&&this.placeholder?``:this.currentItems().some(e=>e.value===this.value&&!e.disabled&&!e.hidden)?this.value:null}canCommitValue(e){return!this.isDisabled&&(e===``&&!!this.placeholder||this.currentItems().some(t=>t.value===e&&!t.disabled&&!t.hidden))}validateAcceptedValue(){let e=super.validateAcceptedValue(),t=this.childOptions?.current().error;if(t)return{...e,flags:{...e.flags,customError:!0},message:t};if(this.required&&this.submissionValue===null){let t=this.controlNode?.cloneNode(!0);return t&&(t.selectedIndex=-1,t.setCustomValidity(``)),{...e,flags:{...e.flags,valueMissing:!0},message:this.error||t?.validationMessage||`Please select an option.`}}return e}willUpdate(e){super.willUpdate(e);let t=this.hydrationChoice;t&&(this.hydrationChoice=void 0,this.valueRevision===this.hydrationRevision&&this.value===this.childOptions.initialValue&&t.value!==t.baseline&&this.requestValue(t.value,`hydrate`))}reconcile(){let e=this.controlNode;if(this.hydrationChoice&&!this.hasUpdated)return;let t=this.model.draft.get();e&&e.value!==t&&(e.value=t)}onInput(e){let t=e.target.value;this.model.setDraft(t),Vn(this,{value:t,isComposing:!1,inputType:`insertReplacementText`})}onChange(e){let t=e.target.value;this.model.setDraft(t),this.requestValue(t,`change`),this.model.setValue(this.value),this.reconcile(),this.syncForm()}renderControl(){let e=this.effectiveItems,t=!this.hasUpdated&&this.childOptions.initialValue!==void 0?this.childOptions.initialValue:this.defaultControlValue,n=!this.placeholder&&e.length>0&&!e.some(e=>e.value===t);return S`<select id="control" class="en-select" part="control" name=${this.name}
      ?disabled=${this.isDisabled} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}
      @input=${this.onInput} @change=${this.onChange}>
      ${this.placeholder?S`<option part="option" value="" ?selected=${t===``}>${this.placeholder}</option>`:n?S`<option value="" selected disabled hidden></option>`:T}
      ${Xe(e,e=>e.key??e.value,e=>S`<option part="option" value=${e.value} ?selected=${e.value===t}
        ?disabled=${e.disabled} ?hidden=${e.hidden}>${e.label||T}</option>`)}
    </select>`}},Fr=class extends k{staticStyles=new Gt(this);static properties={value:{noAccessor:!0,reflect:!0,useDefault:!0},disabled:{type:Boolean,noAccessor:!0,reflect:!0,useDefault:!0},label:{type:String,noAccessor:!0,reflect:!0,useDefault:!0}};#e=``;get value(){return this.#e}set value(e){let t=this.#e;this.#e=String(e??``),this.getAttribute(`value`)!==this.#e&&this.setAttribute(`value`,this.#e);let n=this.getAttribute(`value`)===this.#e?void 0:Object.assign(Object.create(this.constructor.getPropertyOptions(`value`)),{hasChanged:()=>!0});this.requestUpdate(`value`,t,n)}#t=!1;get disabled(){return this.#t}set disabled(e){let t=this.#t;this.#t=!!e,this.hasAttribute(`disabled`)!==this.#t&&this.toggleAttribute(`disabled`,this.#t),this.requestUpdate(`disabled`,t)}#n=``;get label(){return this.#n}set label(e){let t=this.#n;this.#n=String(e??``),this.getAttribute(`label`)!==this.#n&&this.setAttribute(`label`,this.#n),this.requestUpdate(`label`,t)}};q(customElements,{tagName:`en-select`,elementClass:Pr,dependencies:[{tagName:`en-select-option`,elementClass:class extends Fr{render(){return T}}}]});function Q(e,t){e.inert===t&&(e.inert=!t)}function Ir(e){let t=e.currentTarget;e.target===t&&(e.newState===`open`&&Q(t,!0),queueMicrotask(()=>{if(!t.isConnected)return;let e=t.localName===`dialog`?t.open:t.matches(`:popover-open`);Q(t,e)}))}var Lr=`(width < ${Yt(`--en-layout-dialog-collapse`)})`,Rr=B(o`
  .en-dialog, .en-drawer, .en-popover, .en-tooltip {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: min(${z(`--en-overlay-max-inline-size`,R(`--en-layout-form-max`))}, calc(100% - ${R(`--en-space-8`)}));
    max-block-size: ${z(`--en-overlay-max-block-size`,o`calc(100dvh - ${R(`--en-space-8`)})`)};
    padding: ${z(`--en-overlay-padding`,R(`--en-space-panel`))};
    border: ${R(`--en-border-width`)} solid ${z(`--en-overlay-border-color`,R(`--en-color-boundary`))};
    border-radius: ${z(`--en-overlay-radius`,R(`--en-radius-dialog`))};
    background: ${z(`--en-overlay-background`,R(`--en-color-surface-raised`))};
    color: ${z(`--en-overlay-color`,R(`--en-color-text`))};
    font: inherit;
    text-align: start;
    overflow: auto;
    box-shadow: ${R(`--en-shadow-overlay`)};
  }
  ${er(o`.en-popover[popover]`,o`.en-popover:popover-open`,o`.en-popover[popover]:not(:popover-open)`,`fade`)}
  ${er(o`.en-tooltip[popover]`,o`.en-tooltip:popover-open`,o`.en-tooltip[popover]:not(:popover-open)`,`fade`)}
  ${tr}
  .en-dialog { position: fixed; inset: 0; margin: auto; box-shadow: ${R(`--en-shadow-dialog`)}; }
  dialog.en-dialog, dialog.en-drawer { flex-direction: column; gap: ${R(`--en-space-4`)}; }
  dialog.en-dialog[open], dialog.en-drawer[open] { display: flex; }
  dialog.en-dialog:not([open]), dialog.en-drawer:not([open]) { display: none; }
  .en-dialog::backdrop, .en-drawer::backdrop { background: ${R(`--en-color-scrim`)}; }
  .en-overlay-header, .en-overlay-footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${R(`--en-space-3`)}; min-inline-size: 0; }
  .en-overlay-header { justify-content: space-between; }
  .en-overlay-footer { justify-content: flex-end; gap: ${R(`--en-space-actions`)}; }
  .en-overlay-header > slot, .en-overlay-footer > slot { display: contents; }
  .en-overlay-body {
    --_en-overlay-focus-clearance: ${sn};
    min-inline-size: 0;
    min-block-size: 0;
    /* Expand the scrollport without moving content or changing the surrounding gaps. */
    margin: calc(0px - var(--_en-overlay-focus-clearance));
    padding: var(--_en-overlay-focus-clearance);
    scroll-padding: var(--_en-overlay-focus-clearance);
    overflow: auto;
  }
  .en-overlay-close { margin-inline-start: auto; }
  .en-popover { position: fixed; display: flex; flex-direction: column; margin: 0; row-gap: ${R(`--en-space-4`)}; border-radius: ${z(`--en-overlay-radius`,R(`--en-radius-container`))}; }
  [popover].en-popover:not(:popover-open), [popover].en-tooltip:not(:popover-open) { display: none; }
  .en-tooltip { position: fixed; margin: 0; row-gap: ${R(`--en-space-2`)}; padding: ${z(`--en-overlay-padding`,R(`--en-space-2`))}; border-radius: ${z(`--en-overlay-radius`,R(`--en-radius-control`))}; overflow-wrap: break-word; }
  /* An outside separator is clipped at viewport-flush edges, even for a drawer
     that fills the whole viewport. Keep it separate from the immediate focus cue. */
  :where(.en-drawer) { outline: ${R(`--en-border-width`)} solid ${z(`--en-overlay-border-color`,R(`--en-color-boundary`))}; outline-offset: 0; }
  ${W(o`:where(.en-dialog, .en-drawer)`,{family:`overlay`,baseShadow:R(`--en-shadow-dialog`),baseTransitions:$n})}
  ${W(o`.en-popover`,{family:`overlay`,baseShadow:R(`--en-shadow-overlay`),baseTransitions:$n})}
  .en-drawer {
    position: fixed;
    margin: 0;
    inset: auto;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: min(${z(`--en-overlay-max-inline-size`,R(`--en-layout-form-max`))}, 100%);
    max-inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    border-radius: 0;
    border-width: 0;
    box-shadow: ${R(`--en-shadow-dialog`)};
  }
  .en-drawer[data-placement='start'] { inset-inline-end: auto; inset-inline-start: 0; }
  .en-drawer[data-placement='left'] { inset-inline: auto; left: 0; right: auto; }
  .en-drawer[data-placement='right'] { inset-inline: auto; left: auto; right: 0; }
  .en-drawer[data-placement='top'], .en-drawer[data-placement='bottom'] { inset-inline: 0; inline-size: 100%; block-size: auto; max-block-size: ${z(`--en-overlay-max-block-size`,o`calc(100dvh - ${R(`--en-space-8`)})`)}; }
  .en-drawer[data-placement='top'] { inset-block-start: 0; inset-block-end: auto; }
  .en-drawer[data-placement='bottom'] { inset-block-start: auto; inset-block-end: 0; }
  @media (forced-colors: active) {
    .en-dialog, .en-drawer, .en-popover, .en-tooltip { color: CanvasText; background: Canvas; border-color: CanvasText; box-shadow: none; }
    :where(.en-drawer) { outline-color: CanvasText; }
    :where(.en-dialog, .en-drawer, .en-popover):focus-visible { outline-color: Highlight; }
  }
`);function zr(e){return S`
    <dialog class=${e.surfaceClass} part=${e.surfacePart??`surface`} data-placement=${e.placement}
      aria-labelledby="en-overlay-heading" closedby=${e.closedBy}
      inert @beforetoggle=${Ir} @cancel=${e.cancel} @close=${e.close}
      @pointerdown=${e.pointerDown} @pointerup=${e.pointerUp}
      @pointercancel=${e.pointerCancel} @keydown=${e.keyDown}>
      <div class="en-overlay-header" part="header">
        <h2 class="en-heading-small" id="en-overlay-heading" part="heading"><slot name="label">${e.label}</slot></h2>
        ${e.dismissible?S`<button class="en-button en-button--quiet en-icon-button en-overlay-close" part="close" type="button"
          aria-label=${e.closeLabel} @click=${e.dismiss}><span aria-hidden="true">×</span></button>`:null}
      </div>
      <div class="en-overlay-body" part="body">${e.body??S`<slot></slot>`}</div>
      ${e.footer===T?T:S`<div class="en-overlay-footer" part="footer">${e.footer??S`<slot name="footer"></slot>`}</div>`}
    </dialog>`}function Br(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function Vr(e){if(!e?.isConnected||e.matches(`:disabled, [hidden], [aria-disabled="true"]`))return;let t=e;for(;t;){if(`inert`in t&&(t.inert||t.hidden))return;t=t.parentNode??(`host`in t?t.host:null)}e.getClientRects().length&&e.focus({preventScroll:!0})}q(customElements,{tagName:`en-dialog`,elementClass:class extends qt{static properties={open:{type:Boolean,reflect:!0,noAccessor:!0},label:{type:String},closeLabel:{type:String,attribute:`close-label`},closedBy:{type:String,attribute:`closedby`,reflect:!0,noAccessor:!0},dismissible:{type:Boolean},backdropDismiss:{type:Boolean,attribute:`backdrop-dismiss`,noAccessor:!0},presentation:{type:String,reflect:!0},responsiveQuery:{type:String,attribute:`responsive-query`}};static styles=[V,tn,hr,Rr];#e=!1;#t=0;#n=0;#r=0;#i=!1;#a=null;#o=null;#s=`close-request`;#c=`closerequest`;#l=null;#u=``;#d=!1;get open(){return this.#e}set open(e){let t=this.#e;this.#e=!!e,this.#t++,this.#n++,this.#e&&!this.dialog?.open&&(this.#i=!1),this.requestUpdate(`open`,t)}get closedBy(){return this.#c}set closedBy(e){let t=this.#c;this.#c=e===`any`||e===`none`?e:`closerequest`,this.requestUpdate(`closedBy`,t),this.requestUpdate(`backdropDismiss`,t===`any`)}get backdropDismiss(){return this.closedBy===`any`}set backdropDismiss(e){this.closedBy=e?`any`:`closerequest`}constructor(){super(),this.label=``,this.closeLabel=`Close`,this.dismissible=!0,this.presentation=`dialog`,this.responsiveQuery=Lr}show(e=`programmatic`){return this.requestOpen(!0,e)}hide(e=`programmatic`){return this.requestOpen(!1,e)}requestOpen(e,t){if(e===this.open)return`unchanged`;let n=this.open,r=this.#i;this.#r++;try{return Bn(this,{previous:n,proposed:e,reason:t,getRevision:()=>this.#t,stage:e=>{this.#e=e,e&&!this.dialog?.open&&(this.#i=!1)},rollback:t=>{this.#e=t,this.#i=r,this.requestUpdate(`open`,e)},commit:()=>{this.#n++,this.requestUpdate(`open`,n)}})}finally{this.#r--,this.#r||this.requestUpdate(`open`,n)}}get openRevision(){return this.#n}get surfaceClass(){return this.#d?`en-drawer`:`en-dialog`}get placement(){return this.#d?`bottom`:``}get dialog(){return this.renderRoot?.querySelector(`dialog`)??null}get effectiveClosedBy(){return this.dismissible?this.closedBy:`none`}get supportsNativeClosedBy(){let e=this.ownerDocument?.defaultView?.HTMLDialogElement?.prototype;return e!==void 0&&`closedBy`in e}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observePresentation(),this.updateComplete.then(()=>{this.isConnected&&this.syncDialog()})}disconnectedCallback(){this.#i=!1,this.dialog?.close(),this.#a=null,this.#o=null,this.stopObservingPresentation(),super.disconnectedCallback()}updated(e){this.observePresentation(),this.syncDialog()}observePresentation(){let e=this.ownerDocument?.defaultView;if(!this.isConnected||!e?.matchMedia)return;if(this.presentation!==`responsive`){this.stopObservingPresentation(),this.setCompactPresentation(!1);return}let t=this.responsiveQuery.trim()||Lr;this.#l&&this.#u===t||(this.stopObservingPresentation(),this.#u=t,this.#l=e.matchMedia(t),this.#l.addEventListener(`change`,this.#f),this.setCompactPresentation(this.#l.matches))}stopObservingPresentation(){this.#l?.removeEventListener(`change`,this.#f),this.#l=null,this.#u=``}setCompactPresentation(e){let t=this.#d;t!==e&&(this.#d=e,this.requestUpdate(`compactPresentation`,t))}#f=e=>{this.setCompactPresentation(e.matches)};syncDialog(){let e=this.dialog;if(!(!e||!this.isConnected||this.#r)){if(this.#i&&!e.open){this.reconcileNativeClose();return}if(this.open&&!e.open){let t=Br(this.ownerDocument);this.#a=t&&`focus`in t?t:null,Q(e,!0),e.showModal(),this.#i=!0}else if(!this.open&&e.open){let t=Br(this.ownerDocument),n=t===this||t===e||t!==null&&e.contains(t);this.#i=!1,e.close(),Q(e,!1),n&&Vr(this.#a),this.#a=null}}}#p=e=>{e.preventDefault();let t=this.#s;this.#s=`close-request`,this.effectiveClosedBy!==`none`&&(t!==`backdrop`||this.effectiveClosedBy===`any`)&&this.hide(t)};#m=()=>{this.isConnected&&this.#i&&!this.dialog?.open&&this.reconcileNativeClose()};reconcileNativeClose(){this.#i=!1,this.dialog&&Q(this.dialog,!1),this.open=!1,this.#a=null}#h(e){let t=this.dialog;if(!t||e.target!==t)return!1;let n=t.getBoundingClientRect();return e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom}#g=e=>{let t=this.#h(e);this.#o=t&&e.isPrimary&&e.button===0?e.pointerId:null,this.#s=t?`backdrop`:`close-request`};#_=e=>{let t=this.#o===e.pointerId&&this.#h(e);this.#o=null,this.#s=t?`backdrop`:`close-request`,t&&this.effectiveClosedBy===`any`&&!this.supportsNativeClosedBy&&this.hide(`backdrop`),queueMicrotask(()=>{this.#s=`close-request`})};#v=()=>{this.#o=null,this.#s=`close-request`};#y=e=>{e.key===`Escape`&&!e.defaultPrevented&&(this.#s=`escape`)};get dialogView(){return{surfaceClass:this.surfaceClass,placement:this.#d?`bottom`:this.placement,label:this.label,closeLabel:this.closeLabel,dismissible:this.dismissible,closedBy:this.supportsNativeClosedBy?this.effectiveClosedBy:`closerequest`,cancel:this.#p,close:this.#m,dismiss:()=>this.hide(`close-button`),pointerDown:this.#g,pointerUp:this.#_,pointerCancel:this.#v,keyDown:this.#y}}render(){return zr(this.dialogView)}}});function Hr(e,t={}){let n=t.normalize??(e=>e),r=t.equals??Object.is,i=n(e),a=new L.State(Object.freeze({value:i,revision:0})),o=e=>{let t=n(e),i=a.get();return!r(i.value,t)&&(a.set(Object.freeze({value:t,revision:i.revision+1})),!0)};return{value:new L.Computed(()=>a.get().value),view:new L.Computed(()=>a.get()),set:o,reset:()=>o(i)}}var Ur=B(o`
  /* Recompute for both frame and item; descendant overrides stay effective. */
  .en-segmented-control, .en-segmented-item {
    --_en-text-control-block-size: ${pn()};
  }
  .en-option, .en-tab, .en-accordion-trigger {
    min-inline-size: ${R(`--en-size-target-min`)};
    min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
    padding-block: ${R(`--en-space-control-block`)};
    padding-inline: ${R(`--en-space-control-inline`)};
    color: ${z(`--en-option-color`,R(`--en-color-text`))};
    font: inherit;
    text-align: start;
    overflow-wrap: break-word;
    cursor: pointer;
  }
  .en-option {
    display: flex;
    align-items: center;
    gap: ${R(`--en-space-icon-label`)};
    border-radius: ${z(`--en-option-radius`,R(`--en-radius-control`))};
    background: ${z(`--en-option-background`,R(`--en-color-surface`))};
  }
  .en-option:hover, .en-option[data-active] { background: ${z(`--en-option-background`,R(`--en-color-surface-subtle`))}; }
  .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected] {
    background: ${z(`--en-option-background`,R(`--en-color-selected`))};
    font-weight: ${R(`--en-font-label-strong-weight`)};
  }
  .en-option[aria-disabled='true'] { color: ${R(`--en-color-text-muted`)}; cursor: default; }
  .en-listbox, .en-tree { display: flex; flex-direction: column; gap: ${R(`--en-space-1`)}; min-inline-size: 0; }
  .en-tree-group { padding-inline-start: ${R(`--en-space-4`)}; }
  .en-choice-group, .en-rating, .en-toolbar, .en-segmented { display: flex; align-items: center; flex-wrap: wrap; gap: ${R(`--en-space-actions`)}; min-inline-size: 0; }
  .en-choice-group[data-orientation='vertical'], .en-choice-group[aria-orientation='vertical'] { flex-direction: column; align-items: stretch; }
  .en-choice-group > slot, .en-rating > slot, .en-toolbar > slot, .en-segmented > slot { display: contents; }
  .en-rating-item, .en-rating-clear, .en-segmented-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-inline-size: ${R(`--en-size-target-min`)};
    min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-min`)});
    border: ${R(`--en-border-width`)} solid transparent;
    border-radius: ${R(`--en-radius-control`)};
    color: ${R(`--en-color-text`)};
    cursor: pointer;
    overflow-wrap: break-word;
  }
  .en-rating-values {
    display: flex;
    flex-wrap: wrap;
    gap: ${R(`--en-space-0-5`)};
    min-inline-size: 0;
    max-inline-size: 100%;
  }
  /* Preserve each target instead of squeezing stars to keep a row on one line. */
  .en-rating-item { flex: 0 0 auto; padding: ${R(`--en-space-control-block`)}; }
  .en-rating-clear { max-inline-size: 100%; }
  .en-rating-clear, .en-segmented-item { padding: ${R(`--en-space-control-block`)} ${R(`--en-space-control-inline`)}; }
  .en-rating-clear { color: ${R(`--en-color-text-muted`)}; }
  .en-rating-clear:has(:checked) { background: ${R(`--en-color-selected`)}; color: ${R(`--en-color-action-text`)}; border-color: ${R(`--en-color-accent-border`)}; }
  .en-rating-star { font-size: ${R(`--en-size-icon`)}; line-height: 1; color: ${R(`--en-color-text-muted`)}; }
  .en-rating-star[data-filled] { color: ${R(`--en-color-action-text`)}; }
  .en-rating-item:has(:disabled), .en-rating-clear:has(:disabled), .en-segmented-item[data-disabled] { cursor: default; color: ${R(`--en-color-text-muted`)}; }
  .en-rating-item:has(:disabled) .en-rating-star { color: ${R(`--en-color-text-muted`)}; }
  ${G(o`.en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible)`)}
  .en-segmented-control { display: flex; align-items: stretch; flex-wrap: wrap; gap: ${R(`--en-space-0-5`)}; min-inline-size: 0; min-block-size: var(--_en-text-control-block-size); padding: ${fn}; border: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; border-radius: ${z(`--en-control-radius`,R(`--en-radius-control`))}; background: ${R(`--en-color-surface-subtle`)}; }
  .en-segmented-item {
    flex: 1 1 auto;
    /* The shared control height includes the frame; each label keeps its target floor. */
    min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${K}), ${R(`--en-size-target-min`)});
    padding-block: max(0px, calc(${R(`--en-space-control-block`)} - ${K}));
    border-radius: max(0px, ${z(`--en-control-radius`,R(`--en-radius-control`))} - ${K});
    text-align: center;
  }
  .en-segmented-item[data-selected] { background: ${R(`--en-color-surface`)}; border-color: ${R(`--en-color-boundary`)}; color: ${R(`--en-color-action-text`)}; font-weight: ${R(`--en-font-label-strong-weight`)}; }
  .en-segmented-item:not([data-disabled]):hover { background: ${R(`--en-color-selected`)}; }
  .en-segmented-item[data-disabled] { color: ${R(`--en-color-text-muted`)}; }
  .en-segmented-label { min-inline-size: 0; }
  .en-tabs { min-inline-size: 0; }
  .en-tab-list { display: flex; flex-wrap: wrap; gap: ${R(`--en-space-1`)}; min-inline-size: 0; border-block-end: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; }
  .en-tab-list > slot { display: contents; }
  .en-tab-list[aria-orientation='vertical'], .en-tab-list[data-orientation='vertical'] { flex-direction: column; border-block-end: 0; border-inline-end: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; }
  .en-tab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${R(`--en-space-icon-label`)};
    border: 0;
    border-block-end: ${R(`--en-size-tab-indicator`)} solid ${R(`--en-color-line`)};
    background: ${z(`--en-tab-background`,R(`--en-color-surface`))};
    color: ${z(`--en-tab-color`,R(`--en-color-text`))};
  }
  .en-tab:hover { background: ${z(`--en-tab-background`,R(`--en-color-surface-subtle`))}; }
  .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab {
    color: ${z(`--en-tab-color`,R(`--en-color-action-text`))};
    border-block-end-color: ${R(`--en-color-action`)};
    background: ${z(`--en-tab-background`,R(`--en-color-selected`))};
    font-weight: ${R(`--en-font-label-strong-weight`)};
  }
  .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: ${R(`--en-color-text-muted`)}; cursor: default; }
  .en-tab-panel { min-inline-size: 0; padding-block: ${R(`--en-space-4`)}; }
  .en-accordion { display: flex; flex-direction: column; min-inline-size: 0; isolation: isolate; }
  .en-accordion > slot { display: contents; }
  /* Keep the focused item's outline above adjacent surfaces within this group.
     Slotted hosts are flex items, so no positioned containing block is needed. */
  .en-accordion > slot::slotted(:focus-within) { z-index: 1; }
  .en-accordion-item { border-block-end: ${R(`--en-border-width`)} solid ${R(`--en-color-line`)}; min-inline-size: 0; }
  .en-accordion-trigger { display: flex; align-items: center; justify-content: space-between; gap: ${R(`--en-space-icon-label`)}; inline-size: 100%; border: 0; background: ${R(`--en-color-surface`)}; font-weight: ${R(`--en-font-label-strong-weight`)}; }
  .en-accordion-trigger:hover { background: ${R(`--en-color-surface-subtle`)}; }
  .en-accordion-trigger[aria-disabled='true'], .en-accordion-trigger:disabled { color: ${R(`--en-color-text-muted`)}; cursor: default; }
  .en-accordion-panel { padding-block: ${R(`--en-space-3`)} ${R(`--en-space-4`)}; padding-inline: ${R(`--en-space-control-inline`)}; }
  ${Mn}
  @media (any-pointer: coarse) {
    .en-option, .en-tab, .en-accordion-trigger, .en-rating-item, .en-rating-clear { min-block-size: max(${R(`--en-size-control-min`)}, ${R(`--en-size-target-touch`)}); }
    .en-segmented-control, .en-segmented-item { --_en-text-control-block-size: ${pn(!0)}; }
    .en-segmented-item { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${K}), ${R(`--en-size-target-touch`)}); }
    .en-rating-item { min-inline-size: ${R(`--en-size-target-touch`)}; }
  }
  @media (forced-colors: active) {
    .en-option, .en-tab, .en-accordion-trigger { background: Canvas; color: CanvasText; }
    .en-option[aria-selected='true'], .en-option[aria-checked='true'], .en-option[data-selected], .en-tab[aria-selected='true'], :host([role='tab'][aria-selected='true']) .en-tab { background: Highlight; color: HighlightText; border-color: Highlight; }
    .en-option[aria-disabled='true'], .en-tab[aria-disabled='true'], :host([role='tab'][aria-disabled='true']) .en-tab { color: GrayText; }
    .en-segmented-control { background: Canvas; border-color: CanvasText; }
    .en-segmented-item { color: CanvasText; }
    .en-segmented-item[data-selected], .en-rating-clear:has(:checked) { background: Highlight; color: HighlightText; border-color: Highlight; }
    .en-segmented-item:not([data-disabled]):hover { background: Highlight; color: HighlightText; }
    /* Chromium can draw an opaque text backplate even for explicit system colors.
       Only this text span avoids that second adjustment; its inherited foreground
       and the parent surface still come entirely from the user's system palette. */
    .en-segmented-label { forced-color-adjust: none; color: inherit; background: none; }
    .en-segmented-label[data-rich] { forced-color-adjust: auto; }
    .en-rating-star { color: CanvasText; }
    .en-rating-star[data-filled] { color: Highlight; }
    .en-segmented-item[data-disabled] { background: Canvas; color: GrayText; border-color: GrayText; }
    .en-rating-item:has(:disabled) .en-rating-star, .en-rating-clear:has(:disabled) { color: GrayText; }
    .en-rating-item:has(:focus-visible), .en-rating-clear:has(:focus-visible), .en-segmented-item:has(:focus-visible) { outline-color: Highlight; }
  }
`),Wr=class extends qt{static properties={value:{type:Number,noAccessor:!0},disabled:{type:Boolean,reflect:!0},name:{},label:{},description:{}};static styles=[V,nn,hr,br,Ur];static formAssociated=!0;model=Hr(0);signals=new Jn(this,()=>this.model.view.get());internals=typeof this.attachInternals==`function`?this.attachInternals():void 0;authorRevision=0;formDisabled=!1;formController=this.internals?new Xn(this,{internals:this.internals,value:()=>String(this.value),disabled:()=>this.effectiveDisabled,control:()=>this.validationControl,validate:()=>this.validateForm(),onReset:()=>{this.value=Number(this.getAttribute(`value`)??0),this.syncControl()},onRestore:e=>{typeof e==`string`&&(this.value=Number(e)),this.syncControl()}}):void 0;constructor(){super(),this.disabled=!1,this.name=``,this.label=``,this.description=``}get value(){return this.model.value.get()}set value(e){++this.authorRevision,this.setValue(this.normalizeValue(Number(e))),this.onValueWrite(),this.formController?.sync()}setValue(e){let t=this.value;this.model.set(e),this.requestUpdate(`value`,t),this.formController?.sync()}get effectiveDisabled(){return this.disabled||this.formDisabled}onValueWrite(){}validateForm(){return{flags:{}}}get validationControl(){return null}get form(){return this.internals?.form??null}get validity(){return this.internals?.validity}get validationMessage(){return this.internals?.validationMessage??``}checkValidity(){return this.internals?.checkValidity?.()??!0}reportValidity(){return this.internals?.reportValidity?.()??!0}formDisabledCallback(e){this.formDisabled=e,this.formController?.formDisabled(e),this.requestUpdate()}formResetCallback(){this.formController?.formReset()}formStateRestoreCallback(e,t=`restore`){this.formController?.formStateRestore(e,t)}propose(e,t){let n=this.normalizeValue(e);this.effectiveDisabled||Bn(this,{previous:this.value,proposed:n,reason:t,getRevision:()=>this.authorRevision,stage:e=>{this.setValue(e),this.syncControl()},rollback:e=>{this.setValue(e),this.syncControl()},canCommit:e=>this.normalizeValue(e)===e,commit:()=>{this.onValueWrite(),this.formController?.sync()}}),this.syncControl()}updated(e){this.syncControl(),this.formController?.sync()}};function Gr(e,t,n){let r=Number.isFinite(e)?e:0;return{min:r,max:Math.max(r,Number.isFinite(t)?t:100),step:Number.isFinite(n)&&n>0?n:1}}function Kr(e){let[t=``,n=`0`]=Math.abs(e).toString().split(`e`);return Math.max(0,(t.split(`.`)[1]?.length??0)-Number(n))}function qr(e,t){let n=Number.isFinite(e)?e:t.min,r=Math.min(t.max,Math.max(t.min,n)),i=Math.round((r-t.min)/t.step),a=Math.floor(Number(((t.max-t.min)/t.step).toFixed(12))),o=t.min+Math.min(i,a)*t.step,s=Math.max(Kr(t.min),Kr(t.step));return s<=100?Number(o.toFixed(s)):o}function Jr(e,t){let n=e.editorError&&e.showEditorError?`description editor-error`:`description`;return S`<div part="field" class="en-field">
    <label id="label" part="label" class="en-label" for="control"><slot name="label"><slot>${e.label}</slot></slot></label>
    <div part="row" class="en-range-row" data-orientation=${e.orientation} data-editable=${e.editable?``:T}>
      <input id="control" part="control" class="en-range" type="range"
        value=${String(e.value)} min=${e.min} max=${e.max} step=${e.step}
        ?disabled=${e.disabled} aria-orientation=${e.orientation} aria-valuetext=${e.valueText||T}
        aria-describedby="description" @input=${t.rangeInput}>
      ${e.editable?S`
        <span id="editor-label" part="editor-label" class="en-sr-only"><slot name="editor-label">${e.editorLabel}</slot></span>
        <input id="editor" part="editor" class="en-input en-range-editor" type="number"
          value=${e.defaultEditorValue} min=${e.min} max=${e.max} step=${e.step} required
          ?disabled=${e.disabled} aria-labelledby="label editor-label"
          aria-describedby=${n} aria-invalid=${e.editorError&&e.showEditorError?`true`:T}
          @input=${t.editorInput} @change=${t.editorChange} @blur=${t.editorBlur}
          @keydown=${t.editorKeyDown} @compositionend=${t.editorCompositionEnd}>`:T}
      ${e.showValue?S`<output part="output" for="control">${e.valueText||e.value}</output>`:T}
    </div>
    ${Un(e.description)}
    ${e.editorError?S`<p id="editor-error" part="error" class="en-error en-range-error"
      data-pending=${e.showEditorError?T:``} aria-hidden=${e.showEditorError?T:`true`}>${e.editorError}</p>`:T}
  </div>`}var Yr=class extends Wr{static properties={...Wr.properties,min:{type:Number},max:{type:Number},step:{type:Number},orientation:{type:String,reflect:!0},showValue:{type:Boolean,attribute:`show-value`},valueText:{attribute:`value-text`},editable:{type:Boolean},editorLabel:{attribute:`editor-label`},validationText:{attribute:`validation-text`}};editorDraft=Wn(`0`);editing=new Hn(this,{model:this.editorDraft,control:()=>this.editorControl,onInput:()=>{++this.editGeneration,this.lastCompletion=void 0,this.syncEditorValidation()}});initialEditorValue;showEditorError=!1;editorError=``;editGeneration=0;pendingBlur=!1;lastCompletion;constructor(){super(),this.min=0,this.max=100,this.step=1,this.orientation=`horizontal`,this.showValue=!1,this.valueText=``,this.editable=!1,this.editorLabel=`Exact value`,this.validationText=``,this.addEventListener(`invalid`,()=>{this.showEditorError=!0,this.syncEditorValidation(),this.requestUpdate()})}get bounds(){return Gr(this.min,this.max,this.step)}get editorControl(){return this.editable?this.renderRoot?.querySelector(`#editor`)??null:null}get validationControl(){return this.editorControl}normalizeValue(e){return qr(e,this.bounds)}onValueWrite(){this.reconcileEditor()}reconcileEditor(){this.editorDraft?.setValue(String(this.value));let e=this.showEditorError;this.showEditorError=!1,e&&this.requestUpdate(),this.pendingBlur=!1,this.lastCompletion=void 0,this.editing?.sync(),this.syncEditorValidation()}willUpdate(e){if(e.has(`min`)||e.has(`max`)||e.has(`step`)){let e=this.normalizeValue(this.value);e!==this.value&&(this.value=e)}e.has(`editable`)&&!this.editable&&this.reconcileEditor(),this.initialEditorValue??=String(this.value)}syncControl(){let e=this.renderRoot?.querySelector(`#control`);e&&e.value!==String(this.value)&&(e.value=String(this.value)),this.editing?.sync()}validateForm(){let e=this.editorControl;if(!e)return{flags:{}};let t=this.bounds,n=e.min===String(t.min)&&e.max===String(t.max)&&e.step===String(t.step)&&e.required?e:e.cloneNode(!1);n!==e&&(n.min=String(t.min),n.max=String(t.max),n.step=String(t.step),n.required=!0,n.disabled=!1,n.value=e.value);let r=n.validity,i=e.validity.badInput,a={badInput:i,valueMissing:r.valueMissing,rangeUnderflow:r.rangeUnderflow,rangeOverflow:r.rangeOverflow,stepMismatch:r.stepMismatch};return{flags:a,message:Object.values(a).some(Boolean)?this.validationText||(i?e.validationMessage:n.validationMessage):``,anchor:e}}syncEditorValidation(){if(this.formController?.sync(),!this.hasUpdated)return;let e=!this.effectiveDisabled&&this.editable?this.validationMessage:``;e!==this.editorError&&(this.editorError=e,this.requestUpdate())}checkValidity(){return this.syncEditorValidation(),super.checkValidity()}reportValidity(){return this.syncEditorValidation(),super.reportValidity()}formResetCallback(){super.formResetCallback(),this.reconcileEditor(),this.syncControl()}formStateRestoreCallback(e,t=`restore`){super.formStateRestoreCallback(e,t),this.syncEditorValidation()}disconnectedCallback(){this.pendingBlur=!1,this.lastCompletion=void 0,super.disconnectedCallback()}focus(e){this.renderRoot?.querySelector(`#control`)?.focus(e)}finishEditor(e){let t=this.editorControl;if(!t||this.effectiveDisabled||this.editorDraft.isComposing.get())return;let n=this.lastCompletion;if(e!==`enter`&&n?.control===t&&n.generation===this.editGeneration&&n.authorRevision===this.authorRevision&&n.value===t.value&&n.badInput===t.validity.badInput)return;this.editorDraft.setDraft(t.value),this.showEditorError=!0,this.requestUpdate();let r=this.validateForm();!Object.values(r.flags).some(Boolean)&&Number.isFinite(t.valueAsNumber)&&(t.valueAsNumber===this.value?this.reconcileEditor():this.propose(t.valueAsNumber,`change`)),this.syncEditorValidation(),this.lastCompletion={control:t,generation:this.editGeneration,authorRevision:this.authorRevision,value:t.value,badInput:t.validity.badInput}}handleRangeInput=e=>{this.propose(Number(e.target.value),`input`),this.syncEditorValidation()};handleEditorInput=e=>{e.isComposing&&!this.editorDraft.isComposing.get()&&this.editorDraft.startComposition(),this.editorDraft.setDraft(e.currentTarget.value),this.syncEditorValidation()};handleEditorChange=()=>{this.finishEditor(`change`)};handleEditorBlur=()=>{if(this.editorDraft.isComposing.get()){this.pendingBlur=!0;return}this.finishEditor(`blur`)};handleEditorKeyDown=e=>{e.defaultPrevented||e.isComposing||this.editorDraft.isComposing.get()||e.altKey||e.ctrlKey||e.metaKey||this.effectiveDisabled||(e.key===`Enter`?(e.preventDefault(),this.finishEditor(`enter`)):e.key===`Escape`&&(e.preventDefault(),this.reconcileEditor()))};handleEditorCompositionEnd=e=>{let t=e.currentTarget;queueMicrotask(()=>{this.pendingBlur&&(this.pendingBlur=!1,this.isConnected&&this.editable&&!this.effectiveDisabled&&this.editorControl===t&&this.finishEditor(`blur`))})};updated(e){super.updated(e),this.syncEditorValidation()}render(){return Jr({value:this.value,...this.bounds,disabled:this.effectiveDisabled,orientation:this.orientation===`vertical`?`vertical`:`horizontal`,label:this.label,description:this.description,showValue:this.showValue,valueText:this.valueText,editable:this.editable,editorLabel:this.editorLabel,defaultEditorValue:this.initialEditorValue??String(this.value),editorError:this.editorError,showEditorError:this.showEditorError},{rangeInput:this.handleRangeInput,editorInput:this.handleEditorInput,editorChange:this.handleEditorChange,editorBlur:this.handleEditorBlur,editorKeyDown:this.handleEditorKeyDown,editorCompositionEnd:this.handleEditorCompositionEnd})}};q(customElements,{tagName:`en-slider`,elementClass:Yr});var Xr=Object.freeze([Object.freeze({id:`work`,name:`Work`,duration:40,cue:`work`}),Object.freeze({id:`rest`,name:`Rest`,duration:5,cue:`rest`})]),Zr=180,Qr=[`G4`,`D4`,`D4`,`G4`,`D4`];function $r(e){if(e.length===0)throw Error(`Add at least one interval.`);let t=new Set;return Object.freeze(e.map(e=>{if(!e.id||t.has(e.id))throw Error(`Intervals need unique IDs.`);if(!e.name.trim())throw Error(`Give each interval a name.`);if(!Number.isFinite(e.duration)||e.duration<1)throw Error(`Interval durations must be at least one second.`);if(e.cue!==`work`&&e.cue!==`rest`)throw Error(`Choose an interval sound.`);return t.add(e.id),Object.freeze({...e,name:e.name.trim()})}))}var ei=class{segments;status=new L.State(`idle`);index=new L.State(0);round=new L.State(1);remainingMs;elapsedMs=new L.State(0);muted=new L.State(!1);activeSegment;nextSegment;totalDuration;elapsedProgress;now;audio;autoTick;deadlineMs=0;runStartedMs=0;elapsedBeforeRunMs=0;interval;scheduledNotes=new Map;constructor(e={}){let t=$r(e.segments??Xr);this.segments=new L.State(t),this.remainingMs=new L.State(t[0].duration*1e3),this.now=e.now??(()=>performance.now()),this.audio=e.audio,this.autoTick=e.autoTick??!0,this.activeSegment=new L.Computed(()=>this.segments.get()[this.index.get()]),this.nextSegment=new L.Computed(()=>{let e=this.segments.get();return e[(this.index.get()+1)%e.length]}),this.totalDuration=new L.Computed(()=>this.segments.get().reduce((e,t)=>e+t.duration,0)),this.elapsedProgress=new L.Computed(()=>Math.max(0,Math.min(1,1-this.remainingMs.get()/(this.activeSegment.get().duration*1e3))))}start(){if(this.status.get()===`running`)return;let e=this.now();this.runStartedMs=e,this.elapsedBeforeRunMs=this.elapsedMs.get(),this.deadlineMs=e+this.remainingMs.get(),this.status.set(`running`),this.scheduleAudio(e),this.autoTick&&(this.interval=setInterval(()=>this.tick(),25))}pause(){this.status.get()===`running`&&(this.tick(),this.status.set(`paused`),this.stopTicker(),this.cancelAudio())}reset(){this.stopTicker(),this.cancelAudio(),this.status.set(`idle`),this.index.set(0),this.round.set(1),this.elapsedMs.set(0),this.remainingMs.set(this.segments.get()[0].duration*1e3)}skip(){let e=this.now();this.status.get()===`running`&&this.updateClock(e),this.cancelAudio();let t=(this.index.get()+1)%this.segments.get().length;this.index.set(t),t===0&&this.round.set(this.round.get()+1);let n=this.activeSegment.get().duration*1e3;this.remainingMs.set(n),this.status.get()===`running`&&(this.deadlineMs=e+n,this.scheduleAudio(e))}removeSegment(e){let t=this.segments.get(),n=t.findIndex(t=>t.id===e);if(n===-1||t.length===1)return!1;let r=this.now(),i=this.status.get()===`running`;i&&this.updateClock(r);let a=this.index.get(),o=n===a,s=Object.freeze(t.filter(t=>t.id!==e));if(this.cancelAudio(),o){let e=a===t.length-1;this.index.set(e?0:a),this.segments.set(s),e&&this.round.set(this.round.get()+1);let n=this.activeSegment.get().duration*1e3;this.remainingMs.set(n),i&&(this.deadlineMs=r+n)}else this.index.set(n<a?a-1:a),this.segments.set(s);return i&&this.scheduleAudio(r),!0}replaceSegments(e){let t=$r(e);this.stopTicker(),this.cancelAudio(),this.status.set(`idle`),this.index.set(0),this.segments.set(t),this.round.set(1),this.elapsedMs.set(0),this.remainingMs.set(t[0].duration*1e3)}setMuted(e){if(this.muted.get()!==e&&(this.muted.set(e),this.cancelAudio(),!e&&this.status.get()===`running`)){let e=this.now();this.updateClock(e),this.scheduleAudio(e)}}tick(){if(this.status.get()!==`running`)return;let e=this.now();this.updateClock(e),this.scheduleAudio(e)}dispose(){this.status.get()===`running`&&this.pause(),this.stopTicker(),this.cancelAudio()}updateClock(e){this.elapsedMs.set(this.elapsedBeforeRunMs+Math.max(0,e-this.runStartedMs));let t=this.segments.get(),n=this.index.get(),r=this.round.get();if(e>=this.deadlineMs){let i=this.totalDuration.get()*1e3,a=Math.floor((e-this.deadlineMs)/i);for(this.deadlineMs+=a*i,r+=a;e>=this.deadlineMs;)n=(n+1)%t.length,n===0&&(r+=1),this.deadlineMs+=t[n].duration*1e3}this.index.set(n),this.round.set(r),this.remainingMs.set(Math.max(0,this.deadlineMs-e))}scheduleAudio(e){if(!this.audio||this.muted.get())return;for(let[t,n]of this.scheduledNotes)n<e&&this.scheduledNotes.delete(t);let t=this.segments.get(),n=this.index.get(),r=this.deadlineMs,i=[];for(let a=0;a<t.length*2+1;a+=1){let a=t[n],o=r-a.duration*1e3,s=a.cue===`work`?Qr.map((e,t)=>({atMs:r+t*Zr,note:e,durationMs:Zr})):[2,1,0].map(e=>({atMs:r-e*1e3,note:e===0?`C5`:`C4`,durationMs:Zr}));for(let[t,a]of s.entries()){let s=`${r}:${n}:${t}`;a.atMs>=e&&a.atMs>=o&&!this.scheduledNotes.has(s)&&(i.push(a),this.scheduledNotes.set(s,a.atMs+a.durationMs))}n=(n+1)%t.length,r+=t[n].duration*1e3}i.length&&this.audio.schedule(i,e)}cancelAudio(){this.audio?.cancel(),this.scheduledNotes.clear()}stopTicker(){this.interval!==void 0&&clearInterval(this.interval),this.interval=void 0}},ti={G4:391.99543598174927,D4:293.6647679174076,C4:261.6255653005986,C5:523.2511306011972},ni=class{context;masterGain;volume=1;contextFactory;voices=new Map;failed=!1;constructor(e={}){let t=globalThis.AudioContext??globalThis.webkitAudioContext;this.contextFactory=e.contextFactory??(t?()=>new t:void 0)}get available(){return!!this.contextFactory&&!this.failed}get unlocked(){return this.context?.state===`running`}async unlock(){if(!this.available)return!1;try{return this.context||(this.context=this.contextFactory(),this.masterGain=this.context.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.context.currentTime),this.masterGain.connect(this.context.destination)),this.context.state===`suspended`&&await this.context.resume(),this.context.state===`running`}catch{return this.failed=!0,!1}}setVolume(e){Number.isFinite(e)&&(this.volume=Math.max(0,Math.min(1,e)),this.context&&this.masterGain&&this.masterGain.gain.setTargetAtTime(this.volume,this.context.currentTime,.015))}schedule(e,t){let n=this.context;if(!n||n.state!==`running`)return;let r=n.currentTime;for(let i of e){if(i.atMs<t||i.durationMs<=0)continue;let e=r+(i.atMs-t)/1e3,a=i.durationMs/1e3,o=n.createOscillator(),s=n.createGain();o.type=`sine`,o.frequency.setValueAtTime(ti[i.note],e),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.22,e+Math.min(.012,a/5)),s.gain.exponentialRampToValueAtTime(.035,e+a*.7),s.gain.linearRampToValueAtTime(0,e+a),o.connect(s),s.connect(this.masterGain),this.voices.set(o,s),o.onended=()=>{o.disconnect(),s.disconnect(),this.voices.delete(o)},o.start(e),o.stop(e+a)}}cancel(){for(let[e,t]of this.voices){t.gain.cancelScheduledValues(0),t.gain.setValueAtTime(0,this.context?.currentTime??0);try{e.stop()}catch{}e.disconnect(),t.disconnect()}this.voices.clear()}dispose(){this.cancel(),this.masterGain?.disconnect(),this.masterGain=void 0,this.context?.close(),this.context=void 0}},ri=o`
  :host { display: block; min-height: 100svh; --accent: #477a35; --accent-soft: #e8efdf; --muted: #6b7468; }
  * { box-sizing: border-box; }
  .page { --page-gutter: 40px; min-height: 100svh; display: flex; flex-direction: column; padding: 0 var(--page-gutter); }
  header { display: flex; align-items: center; justify-content: space-between; gap: 16px; height: 100px; width: 100%; max-width: 1184px; margin: 0 auto; }
  .brand { display: flex; align-items: center; gap: 10px; color: #283325; font-size: 17px; font-weight: 650; letter-spacing: -.65px; }
  .brand-mark { width: 29px; height: 29px; color: #477a35; }
  .sound { color: var(--muted); }
  .sound-controls { display: flex; align-items: center; gap: 12px; }
  .volume { position: relative; inline-size: 128px; --en-field-gap: 0px; }
  .volume::part(row) { gap: 6px; }
  .volume::part(output) { min-inline-size: 3ch; font-size: 12px; text-align: end; }
  .volume::part(label) { position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
  .sound::part(control) { font-size: 12px; font-weight: 500; gap: 8px; }
  .sound::part(label) { inline-size: 5em; white-space: nowrap; }
  svg.icon { width: 20px; height: 20px; flex-shrink: 0; display: block; }
  main { flex: 1; display: flex; align-items: center; flex-direction: column; justify-content: center; width: 100%; padding: 30px 0 70px; }
  .dial { position: relative; width: min(360px, 84vw); aspect-ratio: 1; display: grid; place-items: center; }
  .dial-svg { position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible; transform: rotate(-90deg); }
  .dial-track { stroke: #e6eadd; }
  .dial-progress { stroke: var(--accent); transition: stroke .3s; }
  .dial-ticks { stroke: #cfd6c7; stroke-width: 1; }
  .dial-content { display: flex; flex-direction: column; align-items: center; z-index: 1; }
  .segment-label { display: flex; align-items: center; gap: 8px; margin: 0 0 12px; font-size: 14px; font-weight: 550; color: var(--accent); max-width: 230px; }
  .segment-label span:last-child { white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .segment-dot { background: currentColor; width: 6px; height: 6px; border-radius: 50%; flex: 0 0 auto; }
  .digits { font-size: clamp(62px, 18vw, 92px); line-height: 1; letter-spacing: -6px; font-weight: 450; font-variant-numeric: tabular-nums; color: #243020; margin-left: -5px; }
  .digits.long { font-size: 66px; }
  .dial-caption { color: var(--muted); font-size: 12px; margin: 18px 0 0; letter-spacing: .1px; }
  .running .dial-caption { visibility: hidden; }
  .next-slot { block-size: 40px; flex-shrink: 0; display: grid; place-items: center; max-inline-size: 100%; }
  .next { color: var(--muted); margin: 0; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 20px; max-width: min(340px, 100%); }
  .next strong { font-weight: 500; color: #35412f; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .next .icon { width: 13px; height: 13px; margin-left: 3px; }
  .actions { display: flex; align-items: center; justify-content: center; gap: 15px; min-height: 56px; }
  .primary::part(control) { min-width: 190px; min-height: 68px; font-size: 18px; gap: 10px; font-weight: 550; box-shadow: rgba(36, 48, 32, 0.03) 0px 3px 4px; }
  .primary::part(label) { inline-size: 5em; white-space: nowrap; }
  .aux::part(control) { color: #687260; min-height: 44px; min-width: 44px; }
  .shortcut { font: inherit; font-size: 10px; line-height: 1; letter-spacing: .2px; white-space: nowrap; padding: 4px 5px; border: 1px solid #ffffff66; border-radius: 4px; color: #fff; background: #0000000a; }
  .sound .shortcut { color: #626c5c; border-color: #c9d2c2; background: transparent; }
  .routine { inline-size: calc(100% + 2 * var(--page-gutter)); margin-top: 43px; }
  .routine-heading { display: flex; align-items: center; justify-content: space-between; gap: 10px; inline-size: min(400px, calc(100% - 2 * var(--page-gutter))); margin: 0 auto 12px; border-top: 1px solid #dfe4d7; padding-top: 19px; }
  .routine h2 { margin: 0; color: var(--muted); font-size: 10px; letter-spacing: 1.6px; font-weight: 600; text-transform: uppercase; }
  .edit::part(control) { font-size: 11px; font-weight: 500; color: #53654a; min-height: 28px; padding: 0 8px; gap: 5px; }
  .edit .icon { width: 12px; height: 12px; }
  .segments { display: flex; flex-wrap: nowrap; gap: 6px; inline-size: max-content; min-inline-size: min(400px, 100%); max-inline-size: 100%; block-size: 64px; padding: 2px 16px 16px; margin: 0 auto; list-style: none; overflow-x: auto; overflow-y: hidden; scrollbar-width: none; overscroll-behavior-inline: contain; scroll-padding-inline: 16px; }
  .segments:focus-visible { outline: 2px solid #477a35; outline-offset: -2px; border-radius: 10px; }
  .segment { min-inline-size: clamp(112px, 30vw, 160px); block-size: 44px; flex: 1 0 auto; display: flex; justify-content: space-between; align-items: center; gap: 8px; padding: 0 14px; border: 1px solid transparent; border-radius: 9px; background: #eef1e8; font-size: 12px; color: #5c6753; }
  .segment[data-active] { border-color: #c5d4b8; color: #355128; background: #e8efdf; }
  .segment.rest { background: #f0eee5; color: #75674b; }
  .segment.rest[data-active] { border-color: #dac99d; background: #f4ebd6; }
  .segment-title { display: flex; align-items: center; gap: 4px; min-inline-size: 0; }
  .segment-name { max-inline-size: 18ch; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; display: block; }
  .segment-delete { position: relative; flex: 0 0 auto; opacity: 0; pointer-events: none; --en-icon-size: 14px; }
  .segment-delete::part(control) { inline-size: 26px; block-size: 26px; min-inline-size: 26px; min-block-size: 26px; padding: 4px; color: inherit; border-color: transparent; border-radius: 5px; }
  .segment:hover .segment-delete, .segment:focus-within .segment-delete { opacity: 1; pointer-events: auto; }
  .segment-delete:hover::part(control) { color: #ae332b; background: #ae332b0d; }
  .segment-duration { font-variant-numeric: tabular-nums; font-weight: 600; flex-shrink: 0; }
  .repeat-note { margin: 12px 0 0; display: flex; justify-content: center; align-items: center; gap: 5px; color: #626c5c; font-size: 10px; }
  .repeat-note .icon { width: 12px; height: 12px; }
  .completed-cycles { font-weight: 600; color: #596650; }
  .total-time { font-variant-numeric: tabular-nums; white-space: nowrap; }
  .resting { --accent: #967330; --accent-soft: #f4ebd6; }
  .resting .primary { --en-color-action: #896b2d; --en-color-action-hover: #725824; --en-color-action-pressed: #5e481d; }
  .audio-notice { color: #806025; font-size: 12px; max-width: 340px; text-align: center; margin: 16px 0 0; }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
  en-dialog { --en-overlay-background: #f8f9f5; --en-overlay-radius: 22px; }
  en-dialog::part(surface) { width: min(640px, calc(100vw - 32px)); max-inline-size: min(640px, calc(100vw - 32px)); }
  .editor-intro { margin: 0 0 22px; font-size: 13px; line-height: 1.6; color: #626e61; }
  .editor-rows { display: flex; flex-direction: column; gap: 16px; }
  .editor-row { display: grid; grid-template-columns: minmax(100px,1fr) 180px 120px 36px; gap: 10px; align-items: end; padding-bottom: 16px; border-bottom: 1px solid #e1e6db; }
  en-text-field, en-number-field, en-select { min-width: 0; --en-font-label-strong-weight: 500; }
  .remove { align-self: end; }
  .remove::part(control) { color: #6b7468; }
  .add { margin-top: 17px; }
  .add::part(control) { font-size: 12px; }
  .editor-footer { display: flex; align-items: center; justify-content: flex-end; gap: 9px; width: 100%; }
  .editor-footer en-button::part(control) { font-size: 13px; }
  .error { color: #ae332b; font-size: 13px; line-height: 1.5; margin: 16px 0 0; }
  .cue-notes { font-size: 11px; color: #6b7468; line-height: 1.65; margin: 19px 0 0; }
  .report-link { position: fixed; right: max(16px, env(safe-area-inset-right)); bottom: max(16px, env(safe-area-inset-bottom)); z-index: 100; color: #39592a; background: #f8f9f5; border: 1px solid #cad5bf; border-radius: 24px; padding: 10px 14px; font-size: 11px; text-decoration: none; box-shadow: 0 2px 10px #18201708; }
  .report-link:focus-visible { outline: 2px solid #477a35; outline-offset: 3px; }
  @media (max-width: 600px) {
    .page { --page-gutter: 24px; }
    header { height: 78px; }
    .volume { inline-size: clamp(64px, 24vw, 128px); }
    .brand span { position: absolute; inline-size: 1px; block-size: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
    main { padding: 28px 0 45px; }
    .routine { margin-top: 34px; }
    .editor-row { grid-template-columns: minmax(0,1fr) 180px 36px; }
    .editor-row en-select { grid-column: 1 / 3; }
    .editor-row .remove { grid-column: 3; grid-row: 1; }
  }
  @media (max-width: 420px) {
    .editor-row { grid-template-columns: minmax(0,1fr) 36px; gap: 12px; }
    .editor-row en-text-field { grid-column: 1; grid-row: 1; }
    .editor-row .remove { grid-column: 2; grid-row: 1; }
    .editor-row en-number-field { grid-column: 1 / -1; grid-row: 2; }
    .editor-row en-select { grid-column: 1 / -1; grid-row: 3; }
  }
  @media (max-width: 360px) {
    .page { --page-gutter: 16px; }
    .brand { font-size: 15px; }
    .actions { gap: 7px; }
    .primary::part(control) { min-width: 166px; }
  }
  @media (min-height: 620px) and (max-height: 950px) {
    header { height: 76px; }
    main { padding-top: 12px; padding-bottom: 28px; }
    .dial { width: min(310px, 84vw); }
    .routine { margin-top: 26px; }
  }
  @media (pointer: coarse) { .shortcut { display: none; } }
  @media (hover: none) {
    .segment-delete { opacity: 1; pointer-events: auto; }
    .segment-delete::part(control) { inline-size: 44px; block-size: 44px; min-inline-size: 44px; min-block-size: 44px; }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
`,ii={play:C`<path d="m9 5 11 7-11 7Z" fill="currentColor" stroke="none"/>`,pause:C`<path d="M8 5v14M16 5v14" stroke-width="3"/>`,reset:C`<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>`,skip:C`<path d="m5 5 10 7-10 7ZM19 5v14"/>`,sound:C`<path d="m11 4-6 5H2v6h3l6 5ZM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>`,mute:C`<path d="m11 4-6 5H2v6h3l6 5Zm5 5 6 6m0-6-6 6"/>`,edit:C`<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Z"/>`,arrow:C`<path d="M4 12h16m-5-5 5 5-5 5"/>`,repeat:C`<path d="m16 2 4 4-4 4M4 10V9a3 3 0 0 1 3-3h13M8 22l-4-4 4-4m12 0v1a3 3 0 0 1-3 3H4"/>`};function $(e,t){let n=C`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ii[e]}</svg>`;return t?S`<span slot=${t}>${n}</span>`:n}var ai=`tabata-time:v1`,oi=`http://localhost:4318`;function si(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}var ci=class extends k{static styles=ri;audio=new ni;volume=new L.State(100);timer=this.createTimer();editing=new L.State(!1);draft=new L.State([]);error=new L.State(``);audioNotice=new L.State(``);stopEffect;starting=!1;wakeLock;rowObserver;lastRowSegments;lastRowIndex=-1;lastRowRound=0;lastRowStatus;createTimer(){try{let e=JSON.parse(localStorage.getItem(ai)??`null`),t=new ei({audio:this.audio,segments:e?.segments??Xr});return t.setMuted(e?.muted===!0),typeof e?.volume==`number`&&Number.isFinite(e.volume)&&this.volume.set(Math.round(Math.max(0,Math.min(100,e.volume)))),this.audio.setVolume(this.volume.get()/100),t}catch{return new ei({audio:this.audio})}}connectedCallback(){super.connectedCallback(),this.stopEffect=Bt(()=>{this.timer.segments.get(),this.timer.status.get(),this.timer.index.get(),this.timer.round.get(),this.timer.remainingMs.get(),this.timer.elapsedMs.get(),this.timer.muted.get(),this.volume.get(),this.editing.get(),this.draft.get(),this.error.get(),this.audioNotice.get();let e=this.timer.status.get();document.title=e===`idle`?`Tabata Time`:`${si(this.timer.remainingMs.get()/1e3)} · ${this.timer.activeSegment.get().name} — Tabata Time`,this.requestUpdate()}),window.addEventListener(`keydown`,this.onKeyDown),document.addEventListener(`visibilitychange`,this.onVisibilityChange),this.hasUpdated&&this.observeIntervalRow()}firstUpdated(){this.observeIntervalRow()}updated(){let e=this.timer.segments.get(),t=this.timer.index.get(),n=this.timer.round.get(),r=this.timer.status.get(),i=r===`running`&&this.lastRowStatus!==`running`;this.lastRowStatus=r,(e!==this.lastRowSegments||t!==this.lastRowIndex||n!==this.lastRowRound||i)&&(this.lastRowSegments=e,this.lastRowIndex=t,this.lastRowRound=n,this.updateIntervalRow())}observeIntervalRow(){let e=this.renderRoot.querySelector(`.segments`);e&&(this.rowObserver?.disconnect(),this.rowObserver=new ResizeObserver(()=>this.updateIntervalRow()),this.rowObserver.observe(e))}updateIntervalRow(){let e=this.renderRoot.querySelector(`.segments`);if(!e)return;e.tabIndex=e.scrollWidth>e.clientWidth?0:-1;let t=e.querySelector(`[data-active]`);t&&this.revealInterval(e,t)}revealInterval(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();if(r.left>=n.left&&r.right<=n.right)return;let i=document.documentElement;if(n.top>=0&&n.bottom<=i.clientHeight&&n.left>=0&&n.right<=i.clientWidth&&typeof t.scrollIntoViewIfNeeded==`function`){t.scrollIntoViewIfNeeded(!1);return}r.left<n.left?e.scrollBy({left:r.left-n.left-16}):e.scrollBy({left:r.right-n.right+16})}onIntervalRowKeyDown(e){if(e.target!==e.currentTarget||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.currentTarget;[`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),e.key===`Home`||e.key===`End`?t.scrollTo({left:e.key===`Home`?0:t.scrollWidth}):t.scrollBy({left:t.clientWidth*.75*(e.key===`ArrowLeft`?-1:1)}))}disconnectedCallback(){super.disconnectedCallback(),this.stopEffect?.(),this.rowObserver?.disconnect(),this.timer.dispose(),this.audio.dispose(),this.wakeLock?.release(),window.removeEventListener(`keydown`,this.onKeyDown),document.removeEventListener(`visibilitychange`,this.onVisibilityChange)}persist(){try{localStorage.setItem(ai,JSON.stringify({segments:this.timer.segments.get(),muted:this.timer.muted.get(),volume:this.volume.get()}))}catch{}}async keepAwake(){if(`wakeLock`in navigator&&document.visibilityState===`visible`&&this.timer.status.get()===`running`)try{let e=await navigator.wakeLock.request(`screen`);this.timer.status.get()===`running`?this.wakeLock=e:await e.release()}catch{}}onVisibilityChange=()=>{this.timer.tick(),document.visibilityState===`visible`&&this.keepAwake()};onKeyDown=e=>{if(e.defaultPrevented||e.isComposing||e.repeat||e.altKey||e.ctrlKey||e.metaKey||this.editing.get())return;let t=e.composedPath();if(!t.some(e=>e instanceof HTMLElement&&(e.matches(`input, select, textarea`)||e.isContentEditable))){if(e.key.toLowerCase()===`m`){e.preventDefault(),this.toggleSound();return}e.code!==`Space`||t.some(e=>e instanceof HTMLElement&&e.matches(`button, a, en-button`))||(e.preventDefault(),this.toggleTimer())}};async toggleTimer(){if(!this.starting){if(this.timer.status.get()===`running`){this.timer.pause(),this.wakeLock?.release();return}this.starting=!0;try{!this.timer.muted.get()&&!await this.audio.unlock()&&(this.timer.setMuted(!0),this.audioNotice.set(`Sound is unavailable. The timer will keep going silently.`)),this.timer.start(),this.keepAwake()}finally{this.starting=!1}}}reset=()=>{this.timer.reset(),this.wakeLock?.release()};async toggleSound(){let e=this.timer.muted.get();if(e&&!await this.audio.unlock()){this.audioNotice.set(`Sound is unavailable in this browser.`);return}this.audioNotice.set(``),this.timer.setMuted(!e),this.persist()}changeVolume(e){let t=e.detail.proposed;Number.isFinite(t)&&(this.volume.set(Math.round(Math.max(0,Math.min(100,t)))),this.audio.setVolume(this.volume.get()/100),this.persist())}async openEditor(){this.timer.status.get()===`running`&&(this.timer.pause(),this.wakeLock?.release()),this.error.set(``),this.draft.set(this.timer.segments.get().map(e=>({...e,duration:String(e.duration)}))),this.editing.set(!0),await this.updateComplete,this.renderRoot.querySelector(`en-dialog`)?.show()}closeEditor(){this.renderRoot.querySelector(`en-dialog`)?.hide(),this.editing.set(!1)}changeDraft(e,t,n){let r=n.detail.value??n.detail.proposed;r!==void 0&&(this.draft.set(this.draft.get().map(n=>n.id===e?{...n,[t]:r}:n)),this.error.set(``))}async addSegment(){let e=crypto.randomUUID();this.draft.set([...this.draft.get(),{id:e,name:`Work`,duration:`40`,cue:`work`}]),await this.updateComplete;let t=this.renderRoot.querySelectorAll(`en-text-field`);t[t.length-1]?.focus()}async deleteSegment(e,t){let n=this.timer.segments.get().findIndex(t=>t.id===e);if(n<2)return;let r=this.shadowRoot?.activeElement===t.currentTarget;if(this.timer.removeSegment(e)&&(this.persist(),this.requestUpdate(),await this.updateComplete,r)){let e=this.renderRoot.querySelectorAll(`.segment-delete`),t=e[Math.min(n-2,e.length-1)]??this.renderRoot.querySelector(`.edit`);t?.focus({preventScroll:!0});let r=this.renderRoot.querySelector(`.segments`),i=t?.closest(`.segment`);r&&i&&this.revealInterval(r,i)}}saveSegments(){let e=this.draft.get().map(e=>({...e,name:e.name.trim(),duration:Number(e.duration)}));if(e.some(e=>!e.name||e.name.length>40)){this.error.set(`Give each interval a name, up to 40 characters.`);return}if(e.some(e=>!Number.isInteger(e.duration)||e.duration<1||e.duration>3600)){this.error.set(`Use a whole number from 1 to 3,600 seconds for each interval.`);return}this.timer.replaceSegments(e),this.persist(),this.closeEditor()}render(){let e=this.timer,t=e.status.get(),n=e.activeSegment.get(),r=e.nextSegment.get(),i=e.segments.get(),a=e.round.get()-1,o=si(e.remainingMs.get()/1e3),s=e.muted.get(),c=t===`running`?`Pause`:t===`paused`?`Resume`:`Start timer`;return S`
      <div class="page ${t} ${n.cue===`rest`?`resting`:``}">
        <header>
          <div class="brand">
            <svg class="brand-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="16" cy="18" r="10.5"/><path d="M16 18v-6m-3-9h6m-3 0v4m8 2 2-2"/></svg>
            <span>tabata time</span>
          </div>
          <div class="sound-controls">
            ${s?T:S`<en-slider class="volume" label="Volume" min="0" max="100" step="1" show-value .value=${this.volume.get()} .editable=${!1} @en-change=${this.changeVolume}></en-slider>`}
            <en-button class="sound" variant="ghost" @click=${this.toggleSound}>
            ${$(s?`mute`:`sound`,`prefix`)}
            <span slot="label">Sound ${s?`off`:`on`}</span>
            <kbd class="shortcut" slot="suffix" aria-hidden="true">m</kbd>
            </en-button>
          </div>
        </header>
        <main>
          <div class="dial">
            <svg class="dial-svg" viewBox="0 0 360 360" aria-hidden="true">
              <circle class="dial-track" cx="180" cy="180" r="173" fill="none" stroke-width="4"/>
              <circle class="dial-progress" cx="180" cy="180" r="173" fill="none" stroke-width="4" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset=${e.elapsedProgress.get()*100}/>
              <g class="dial-ticks">${Array.from({length:60},(e,t)=>C`<line x1="180" y1="23" x2="180" y2=${t%5==0?31:27} transform="rotate(${t*6} 180 180)"/>`)}</g>
            </svg>
            <div class="dial-content">
              <h1 class="segment-label"><span class="segment-dot" aria-hidden="true"></span><span>${n.name}</span></h1>
              <div class="digits ${o.length>5?`long`:``}" role="timer" aria-label=${`${n.name}, ${Math.ceil(e.remainingMs.get()/1e3)} seconds remaining`} aria-live="off">${o}</div>
              <p class="dial-caption">${t===`idle`?`Ready`:`Paused`}</p>
            </div>
          </div>
          <div class="next-slot">${i.length>2?S`<p class="next">Up next ${$(`arrow`)} <strong>${r.name}</strong><span>· ${r.duration}s</span></p>`:T}</div>
          <div class="actions">
            ${t===`idle`?T:S`<en-button class="aux" variant="ghost" icon-only @click=${this.reset}>${$(`reset`,`prefix`)}<span slot="label">Reset timer</span></en-button>`}
            <en-button class="primary" @click=${this.toggleTimer}>${$(t===`running`?`pause`:`play`,`prefix`)}<span slot="label">${c}</span><kbd class="shortcut" slot="suffix" aria-hidden="true">space</kbd></en-button>
            ${t===`idle`?T:S`<en-button class="aux" variant="ghost" icon-only @click=${()=>e.skip()}>${$(`skip`,`prefix`)}<span slot="label">Next interval</span></en-button>`}
          </div>
          <section class="routine" aria-label="Your intervals">
            <div class="routine-heading"><h2>Your intervals</h2><en-button class="edit" variant="ghost" @click=${this.openEditor}>${$(`edit`,`prefix`)}<span slot="label">Edit intervals</span></en-button></div>
            <ol class="segments" aria-label="Intervals" @keydown=${this.onIntervalRowKeyDown}>${Xe(i,e=>e.id,(t,n)=>S`
              <li class="segment ${t.cue===`rest`?`rest`:``}" ?data-active=${n===e.index.get()} aria-current=${n===e.index.get()?`step`:T}>
                <span class="segment-title">
                  <span class="segment-name" title=${t.name}>${t.name}</span>
                  ${n>=2?S`<en-button class="segment-delete" variant="ghost" icon-only title=${`Delete ${t.name}`} @click=${e=>this.deleteSegment(t.id,e)}>
                    <en-icon slot="prefix" name="close"></en-icon><span slot="label">Delete interval ${n+1}: ${t.name}</span>
                  </en-button>`:T}
                </span>
                <span class="segment-duration">${t.duration}s</span>
              </li>
            `)}</ol>
            <p class="repeat-note">${$(`repeat`)}<span>${si(e.totalDuration.get())} per cycle</span><span aria-hidden="true">·</span><span class="completed-cycles" role="status" aria-live="polite" aria-atomic="true">${a} ${a===1?`cycle`:`cycles`} complete</span><span aria-hidden="true">·</span><span class="total-time">${si(Math.floor(e.elapsedMs.get()/1e3))} total time</span></p>
          </section>
          ${this.audioNotice.get()?S`<p class="audio-notice" role="status">${this.audioNotice.get()}</p>`:T}
          <p class="sr-only" role="status" aria-live="polite">${t===`idle`?`Ready`:t===`paused`?`Paused`:n.name}.</p>
        </main>
      </div>
      ${this.renderEditor()}
      ${new URL(location.href).searchParams.has(`progress-report`)?S`<a class="report-link" href=${oi}>Progress Report ↗</a>`:T}
    `}renderEditor(){return S`<en-dialog label="Your intervals" closedby="closerequest" @en-change=${e=>{e.target===e.currentTarget&&this.editing.set(e.detail.proposed)}}>
      <p class="editor-intro">Each cycle plays these intervals in order, then repeats.</p>
      <div class="editor-rows">${Xe(this.draft.get(),e=>e.id,(e,t)=>S`
        <div class="editor-row">
          <en-text-field label=${`Interval ${t+1}`} .value=${e.name} maxlength="40" required @en-input=${t=>this.changeDraft(e.id,`name`,t)}></en-text-field>
          <en-number-field label="Seconds" min="1" max="3600" step="1" .value=${e.duration} required
            decrement-label=${`Shorten interval ${t+1}`} increment-label=${`Lengthen interval ${t+1}`}
            @en-input=${t=>this.changeDraft(e.id,`duration`,t)}
            @en-change=${t=>this.changeDraft(e.id,`duration`,t)}></en-number-field>
          <en-select label="Chime" .value=${e.cue} .items=${[{value:`work`,label:`Work`},{value:`rest`,label:`Rest`}]} @en-change=${t=>this.changeDraft(e.id,`cue`,t)}></en-select>
          <en-button class="remove" variant="ghost" icon-only ?disabled=${this.draft.get().length<=1} @click=${()=>this.draft.set(this.draft.get().filter(t=>t.id!==e.id))}>
            <en-icon slot="prefix" name="close"></en-icon><span slot="label">Remove interval ${t+1}</span>
          </en-button>
        </div>
      `)}</div>
      <en-button class="add" variant="ghost" @click=${this.addSegment}><en-icon slot="prefix" name="plus"></en-icon><span slot="label">Add interval</span></en-button>
      ${this.error.get()?S`<p class="error" role="alert">${this.error.get()}</p>`:T}
      <p class="cue-notes">Work: five notes at the end. Rest: a countdown at 2, 1, and 0 seconds.<br>Saving starts a fresh cycle. Your intervals are saved on this device.</p>
      <div class="editor-footer" slot="footer"><en-button variant="ghost" @click=${this.closeEditor}>Cancel</en-button><en-button @click=${this.saveSegments}>Save intervals</en-button></div>
    </en-dialog>`}};customElements.define(`tabata-app`,ci);
(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=globalThis,t=e.ShadowRoot&&(e.ShadyCSS===void 0||e.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap,i=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,n=this.t;if(t&&e===void 0){let t=n!==void 0&&n.length===1;t&&(e=r.get(n)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&r.set(n,e))}return e}toString(){return this.cssText}},a=e=>new i(typeof e==`string`?e:e+``,void 0,n),o=(e,...t)=>new i(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,n),s=(n,r)=>{if(t)n.adoptedStyleSheets=r.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let t of r){let r=document.createElement(`style`),i=e.litNonce;i!==void 0&&r.setAttribute(`nonce`,i),r.textContent=t.cssText,n.appendChild(r)}},c=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return a(t)})(e):e,{is:l,defineProperty:u,getOwnPropertyDescriptor:d,getOwnPropertyNames:f,getOwnPropertySymbols:p,getPrototypeOf:m}=Object,ee=globalThis,te=ee.trustedTypes,ne=te?te.emptyScript:``,re=ee.reactiveElementPolyfillSupport,h=(e,t)=>e,ie={toAttribute(e,t){switch(t){case Boolean:e=e?ne:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ae=(e,t)=>!l(e,t),oe={attribute:!0,type:String,converter:ie,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??=Symbol(`metadata`),ee.litPropertyMetadata??=new WeakMap;var g=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&u(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(h(`elementProperties`)))return;let e=m(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(h(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(h(`properties`))){let e=this.properties,t=[...f(e),...p(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(c(e))}else e!==void 0&&t.push(c(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?ie:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?ie:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??ae)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};g.elementStyles=[],g.shadowRootOptions={mode:`open`},g[h(`elementProperties`)]=new Map,g[h(`finalized`)]=new Map,re?.({ReactiveElement:g}),(ee.reactiveElementVersions??=[]).push(`2.1.2`);var se=globalThis,ce=e=>e,le=se.trustedTypes,ue=le?le.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,de=`$lit$`,_=`lit$${Math.random().toFixed(9).slice(2)}$`,fe=`?`+_,pe=`<${fe}>`,v=document,y=()=>v.createComment(``),b=e=>e===null||typeof e!=`object`&&typeof e!=`function`,me=Array.isArray,he=e=>me(e)||typeof e?.[Symbol.iterator]==`function`,ge=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_e=/-->/g,ve=/>/g,S=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),ye=/'/g,be=/"/g,xe=/^(?:script|style|textarea|title)$/i,Se=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),C=Se(1),w=Se(2),T=Symbol.for(`lit-noChange`),E=Symbol.for(`lit-nothing`),Ce=new WeakMap,D=v.createTreeWalker(v,129);function we(e,t){if(!me(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return ue===void 0?t:ue.createHTML(t)}var Te=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=x;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===x?c[1]===`!--`?o=_e:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=S):(xe.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=S):o=ve:o===S?c[0]===`>`?(o=i??x,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?S:c[3]===`"`?be:ye):o===be||o===ye?o=S:o===_e||o===ve?o=x:(o=S,i=void 0);let d=o===S&&e[t+1].startsWith(`/>`)?` `:``;a+=o===x?n+pe:l>=0?(r.push(s),n.slice(0,l)+de+n.slice(l)+_+d):n+_+(l===-2?t:d)}return[we(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},Ee=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=Te(t,n);if(this.el=e.createElement(l,r),D.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=D.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(de)){let t=u[o++],n=i.getAttribute(e).split(_),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?ke:r[1]===`?`?Ae:r[1]===`@`?je:k}),i.removeAttribute(e)}else e.startsWith(_)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(xe.test(i.tagName)){let e=i.textContent.split(_),t=e.length-1;if(t>0){i.textContent=le?le.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],y()),D.nextNode(),c.push({type:2,index:++a});i.append(e[t],y())}}}else if(i.nodeType===8){if(i.data===fe)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(_,e+1))!==-1;)c.push({type:7,index:a}),e+=_.length-1}}a++}}static createElement(e,t){let n=v.createElement(`template`);return n.innerHTML=e,n}};function O(e,t,n=e,r){if(t===T)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=b(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=O(e,i._$AS(e,t.values),i,r)),t}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??v).importNode(t,!0);D.currentNode=r;let i=D.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new Oe(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new Me(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=D.nextNode(),a++)}return D.currentNode=v,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},Oe=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=O(this,e,t),b(e)?e===E||e==null||e===``?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==T&&this._(e):e._$litType$===void 0?e.nodeType===void 0?he(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&b(this._$AH)?this._$AA.nextSibling.data=e:this.T(v.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=Ee.createElement(we(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new De(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=Ce.get(e.strings);return t===void 0&&Ce.set(e.strings,t=new Ee(e)),t}k(t){me(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(y()),this.O(y()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=O(this,e,t,0),a=!b(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=O(this,r[n+o],t,o),s===T&&(s=this._$AH[o]),a||=!b(s)||s!==this._$AH[o],s===E?e=E:e!==E&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},ke=class extends k{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},Ae=class extends k{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},je=class extends k{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??E)===T)return;let n=this._$AH,r=e===E&&n!==E||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Me=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}},Ne={M:de,P:_,A:fe,C:1,L:Te,R:De,D:he,V:O,I:Oe,H:k,N:Ae,U:je,B:ke,F:Me},Pe=se.litHtmlPolyfillSupport;Pe?.(Ee,Oe),(se.litHtmlVersions??=[]).push(`3.3.3`);var Fe=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new Oe(t.insertBefore(y(),e),e,void 0,n??{})}return i._$AI(e),i},Ie=globalThis,A=class extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Fe(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};A._$litElement$=!0,A.finalized=!0,Ie.litElementHydrateSupport?.({LitElement:A});var Le=Ie.litElementPolyfillSupport;Le?.({LitElement:A}),(Ie.litElementVersions??=[]).push(`4.2.2`);var Re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ze=e=>(...t)=>({_$litDirective$:e,values:t}),Be=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},{I:Ve}=Ne,He=e=>e,Ue=()=>document.createComment(``),j=(e,t,n)=>{let r=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0)n=new Ve(r.insertBefore(Ue(),i),r.insertBefore(Ue(),i),e,e.options);else{let t=n._$AB.nextSibling,a=n._$AM,o=a!==e;if(o){let t;n._$AQ?.(e),n._$AM=e,n._$AP!==void 0&&(t=e._$AU)!==a._$AU&&n._$AP(t)}if(t!==i||o){let e=n._$AA;for(;e!==t;){let t=He(e).nextSibling;He(r).insertBefore(e,i),e=t}}}return n},M=(e,t,n=e)=>(e._$AI(t,n),e),We={},Ge=(e,t=We)=>e._$AH=t,Ke=e=>e._$AH,qe=e=>{e._$AR(),e._$AA.remove()},Je=(e,t,n)=>{let r=new Map;for(let i=t;i<=n;i++)r.set(e[i],i);return r},Ye=ze(class extends Be{constructor(e){if(super(e),e.type!==Re.CHILD)throw Error(`repeat() can only be used in text expressions`)}dt(e,t,n){let r;n===void 0?n=t:t!==void 0&&(r=t);let i=[],a=[],o=0;for(let t of e)i[o]=r?r(t,o):o,a[o]=n(t,o),o++;return{values:a,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,r]){let i=Ke(e),{values:a,keys:o}=this.dt(t,n,r);if(!Array.isArray(i))return this.ut=o,a;let s=this.ut??=[],c=[],l,u,d=0,f=i.length-1,p=0,m=a.length-1;for(;d<=f&&p<=m;)if(i[d]===null)d++;else if(i[f]===null)f--;else if(s[d]===o[p])c[p]=M(i[d],a[p]),d++,p++;else if(s[f]===o[m])c[m]=M(i[f],a[m]),f--,m--;else if(s[d]===o[m])c[m]=M(i[d],a[m]),j(e,c[m+1],i[d]),d++,m--;else if(s[f]===o[p])c[p]=M(i[f],a[p]),j(e,i[d],i[f]),f--,p++;else if(l===void 0&&(l=Je(o,p,m),u=Je(s,d,f)),l.has(s[d])){if(l.has(s[f])){let t=u.get(o[p]),n=t===void 0?null:i[t];if(n===null){let t=j(e,i[d]);M(t,a[p]),c[p]=t}else c[p]=M(n,a[p]),j(e,i[d],n),i[t]=null;p++}else qe(i[f]),f--}else qe(i[d]),d++;for(;p<=m;){let t=j(e,c[m+1]);M(t,a[p]),c[p++]=t}for(;d<=f;){let e=i[d++];e!==null&&qe(e)}return this.ut=o,Ge(e,c),T}}),Xe=Object.defineProperty,Ze=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qe=(e,t,n)=>(Ze(e,typeof t==`symbol`?t:t+``,n),n),$e=(e,t,n)=>{if(!t.has(e))throw TypeError(`Cannot `+n)},et=(e,t)=>{if(Object(t)!==t)throw TypeError(`Cannot use the "in" operator on this value`);return e.has(t)},tt=(e,t,n)=>{if(t.has(e))throw TypeError(`Cannot add the same private member more than once`);t instanceof WeakSet?t.add(e):t.set(e,n)},nt=(e,t,n)=>($e(e,t,`access private method`),n);function rt(e,t){return Object.is(e,t)}var N=null,P=!1,it=1,at=Symbol(`SIGNAL`);function F(e){let t=N;return N=e,t}function ot(){return N}function st(){return P}var ct={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function lt(e){if(P)throw Error(typeof ngDevMode<`u`&&ngDevMode?`Assertion error: signal read during notification phase`:``);if(N===null)return;N.consumerOnSignalRead(e);let t=N.nextProducerIndex++;if(I(N),t<N.producerNode.length&&N.producerNode[t]!==e&&bt(N)){let e=N.producerNode[t];yt(e,N.producerIndexOfThis[t])}N.producerNode[t]!==e&&(N.producerNode[t]=e,N.producerIndexOfThis[t]=bt(N)?vt(e,N,t):0),N.producerLastReadVersion[t]=e.version}function ut(){it++}function dt(e){if(e.dirty||e.lastCleanEpoch!==it){if(!e.producerMustRecompute(e)&&!_t(e)){e.dirty=!1,e.lastCleanEpoch=it;return}e.producerRecomputeValue(e),e.dirty=!1,e.lastCleanEpoch=it}}function ft(e){if(e.liveConsumerNode===void 0)return;let t=P;P=!0;try{for(let t of e.liveConsumerNode)t.dirty||mt(t)}finally{P=t}}function pt(){return N?.consumerAllowSignalWrites!==!1}function mt(e){var t;e.dirty=!0,ft(e),(t=e.consumerMarkedDirty)==null||t.call(e.wrapper??e)}function ht(e){return e&&(e.nextProducerIndex=0),F(e)}function gt(e,t){if(F(t),e&&e.producerNode!==void 0&&e.producerIndexOfThis!==void 0&&e.producerLastReadVersion!==void 0){if(bt(e))for(let t=e.nextProducerIndex;t<e.producerNode.length;t++)yt(e.producerNode[t],e.producerIndexOfThis[t]);for(;e.producerNode.length>e.nextProducerIndex;)e.producerNode.pop(),e.producerLastReadVersion.pop(),e.producerIndexOfThis.pop()}}function _t(e){I(e);for(let t=0;t<e.producerNode.length;t++){let n=e.producerNode[t],r=e.producerLastReadVersion[t];if(r!==n.version||(dt(n),r!==n.version))return!0}return!1}function vt(e,t,n){var r;if(xt(e),I(e),e.liveConsumerNode.length===0){(r=e.watched)==null||r.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)e.producerIndexOfThis[t]=vt(e.producerNode[t],e,t)}return e.liveConsumerIndexOfThis.push(n),e.liveConsumerNode.push(t)-1}function yt(e,t){var n;if(xt(e),I(e),typeof ngDevMode<`u`&&ngDevMode&&t>=e.liveConsumerNode.length)throw Error(`Assertion error: active consumer index ${t} is out of bounds of ${e.liveConsumerNode.length} consumers)`);if(e.liveConsumerNode.length===1){(n=e.unwatched)==null||n.call(e.wrapper);for(let t=0;t<e.producerNode.length;t++)yt(e.producerNode[t],e.producerIndexOfThis[t])}let r=e.liveConsumerNode.length-1;if(e.liveConsumerNode[t]=e.liveConsumerNode[r],e.liveConsumerIndexOfThis[t]=e.liveConsumerIndexOfThis[r],e.liveConsumerNode.length--,e.liveConsumerIndexOfThis.length--,t<e.liveConsumerNode.length){let n=e.liveConsumerIndexOfThis[t],r=e.liveConsumerNode[t];I(r),r.producerIndexOfThis[n]=t}}function bt(e){return e.consumerIsAlwaysLive||(e?.liveConsumerNode?.length??0)>0}function I(e){e.producerNode??=[],e.producerIndexOfThis??=[],e.producerLastReadVersion??=[]}function xt(e){e.liveConsumerNode??=[],e.liveConsumerIndexOfThis??=[]}function St(e){if(dt(e),lt(e),e.value===Et)throw e.error;return e.value}function Ct(e){let t=Object.create(Dt);t.computation=e;let n=()=>St(t);return n[at]=t,n}var wt=Symbol(`UNSET`),Tt=Symbol(`COMPUTING`),Et=Symbol(`ERRORED`),Dt={...ct,value:wt,dirty:!0,error:null,equal:rt,producerMustRecompute(e){return e.value===wt||e.value===Tt},producerRecomputeValue(e){if(e.value===Tt)throw Error(`Detected cycle in computations.`);let t=e.value;e.value=Tt;let n=ht(e),r,i=!1;try{r=e.computation.call(e.wrapper),i=t!==wt&&t!==Et&&e.equal.call(e.wrapper,t,r)}catch(t){r=Et,e.error=t}finally{gt(e,n)}if(i){e.value=t;return}e.value=r,e.version++}};function Ot(){throw Error()}var kt=Ot;function At(){kt()}function jt(e){let t=Object.create(Pt);t.value=e;let n=()=>(lt(t),t.value);return n[at]=t,n}function Mt(){return lt(this),this.value}function Nt(e,t){pt()||At(),e.equal.call(e.wrapper,e.value,t)||(e.value=t,Ft(e))}var Pt={...ct,equal:rt,value:void 0};function Ft(e){e.version++,ut(),ft(e)}var L=Symbol(`node`),R;(e=>{var t,n,r,i;class a{constructor(r,i={}){tt(this,n),Qe(this,t);let a=jt(r)[at];if(this[L]=a,a.wrapper=this,i){let t=i.equals;t&&(a.equal=t),a.watched=i[e.subtle.watched],a.unwatched=i[e.subtle.unwatched]}}get(){if(!(0,e.isState)(this))throw TypeError(`Wrong receiver type for Signal.State.prototype.get`);return Mt.call(this[L])}set(t){if(!(0,e.isState)(this))throw TypeError(`Wrong receiver type for Signal.State.prototype.set`);if(st())throw Error(`Writes to signals not permitted during Watcher callback`);let n=this[L];Nt(n,t)}}t=L,n=new WeakSet,e.isState=e=>typeof e==`object`&&et(n,e),e.State=a;class o{constructor(t,n){tt(this,i),Qe(this,r);let a=Ct(t)[at];if(a.consumerAllowSignalWrites=!0,this[L]=a,a.wrapper=this,n){let t=n.equals;t&&(a.equal=t),a.watched=n[e.subtle.watched],a.unwatched=n[e.subtle.unwatched]}}get(){if(!(0,e.isComputed)(this))throw TypeError(`Wrong receiver type for Signal.Computed.prototype.get`);return St(this[L])}}r=L,i=new WeakSet,e.isComputed=e=>typeof e==`object`&&et(i,e),e.Computed=o,(t=>{var n,r,i,a;function o(e){let t,n=null;try{n=F(null),t=e()}finally{F(n)}return t}t.untrack=o;function s(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError(`Called introspectSources without a Computed or Watcher argument`);return t[L].producerNode?.map(e=>e.wrapper)??[]}t.introspectSources=s;function c(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError(`Called introspectSinks without a Signal argument`);return t[L].liveConsumerNode?.map(e=>e.wrapper)??[]}t.introspectSinks=c;function l(t){if(!(0,e.isComputed)(t)&&!(0,e.isState)(t))throw TypeError(`Called hasSinks without a Signal argument`);let n=t[L].liveConsumerNode;return n?n.length>0:!1}t.hasSinks=l;function u(t){if(!(0,e.isComputed)(t)&&!(0,e.isWatcher)(t))throw TypeError(`Called hasSources without a Computed or Watcher argument`);let n=t[L].producerNode;return n?n.length>0:!1}t.hasSources=u;class d{constructor(e){tt(this,r),tt(this,i),Qe(this,n);let t=Object.create(ct);t.wrapper=this,t.consumerMarkedDirty=e,t.consumerIsAlwaysLive=!0,t.consumerAllowSignalWrites=!1,t.producerNode=[],this[L]=t}watch(...t){if(!(0,e.isWatcher)(this))throw TypeError(`Called unwatch without Watcher receiver`);nt(this,i,a).call(this,t);let n=this[L];n.dirty=!1;let r=F(n);for(let e of t)lt(e[L]);F(r)}unwatch(...t){if(!(0,e.isWatcher)(this))throw TypeError(`Called unwatch without Watcher receiver`);nt(this,i,a).call(this,t);let n=this[L];I(n);for(let e=n.producerNode.length-1;e>=0;e--)if(t.includes(n.producerNode[e].wrapper)){yt(n.producerNode[e],n.producerIndexOfThis[e]);let t=n.producerNode.length-1;if(n.producerNode[e]=n.producerNode[t],n.producerIndexOfThis[e]=n.producerIndexOfThis[t],n.producerNode.length--,n.producerIndexOfThis.length--,n.nextProducerIndex--,e<n.producerNode.length){let t=n.producerIndexOfThis[e],r=n.producerNode[e];xt(r),r.liveConsumerIndexOfThis[t]=e}}}getPending(){if(!(0,e.isWatcher)(this))throw TypeError(`Called getPending without Watcher receiver`);return this[L].producerNode.filter(e=>e.dirty).map(e=>e.wrapper)}}n=L,r=new WeakSet,i=new WeakSet,a=function(t){for(let n of t)if(!(0,e.isComputed)(n)&&!(0,e.isState)(n))throw TypeError(`Called watch/unwatch without a Computed or State argument`)},e.isWatcher=e=>et(r,e),t.Watcher=d;function f(){return ot()?.wrapper}t.currentComputed=f,t.watched=Symbol(`watched`),t.unwatched=Symbol(`unwatched`)})(e.subtle||={})})(R||={});var It=!1,Lt=new R.subtle.Watcher(()=>{It||(It=!0,queueMicrotask(()=>{It=!1,Rt()}))});function Rt(){for(let e of Lt.getPending())e.get();Lt.watch()}function zt(e){let t=new R.Computed(()=>e());return Lt.watch(t),t.get(),()=>{Lt.unwatch(t)}}var Bt=`data-en-static-styles`,Vt=new WeakMap,Ht=new WeakMap;function Ut(e){let t=e.constructor;if(Vt.has(t))return Vt.get(t);let n=t.elementStyles,r=n.length>0&&n.every(e=>`cssText`in e&&typeof e.cssText==`string`&&!/@(?:import|namespace)\b/i.test(e.cssText))?n:null;return Vt.set(t,r),r}var Wt=class{#e;#t=!1;#n;#r;#i;#a;#o=[];#s=``;constructor(e){this.#e=e,e.addController(this)}hostConnected(){if(this.#i&&this.#i!==this.#e.ownerDocument){this.#l();return}if(this.#t)return;let e=this.#e.shadowRoot,t=e?.firstElementChild;e&&t?.localName===`style`&&t.getAttribute(`data-en-static-styles`)===`v1`&&(this.#r=e,this.#n=t)}hostUpdated(){this.#t||(this.#t=!0,this.#e.updateComplete.then(()=>this.#c(),()=>{this.#n=void 0}))}#c(){let e=this.#r,n=this.#n;if(this.#n=void 0,!t||!e||e!==this.#e.shadowRoot||!n||n.parentNode!==e||n.getAttribute(`data-en-static-styles`)!==`v1`||!(`adoptedStyleSheets`in e)||[...e.querySelectorAll(`style, link[rel~="stylesheet" i]`)].some(e=>e!==n)||n.getAttributeNames().some(e=>e!==`data-en-static-styles`&&e!==`nonce`)||!n.sheet||n.sheet.disabled)return;let r=Ut(this.#e);if(!r)return;let i=[...e.adoptedStyleSheets];try{let t=r.map(e=>e.styleSheet);if(t.some(e=>e===void 0))return;let n=t.filter(e=>!i.includes(e));e.adoptedStyleSheets=[...n,...i],this.#o=n}catch{try{e.adoptedStyleSheets=i}catch{}return}this.#i=this.#e.ownerDocument,this.#a=r,this.#s=n.nonce,n.remove()}#l(){let e=this.#r,t=this.#a;if(!e||e!==this.#e.shadowRoot||!t)return;let n=Ht.get(t);n===void 0&&(n=t.map(e=>e.cssText).join(``),Ht.set(t,n));let r=this.#e.ownerDocument.createElement(`style`);r.setAttribute(Bt,`v1`),this.#s&&(r.nonce=this.#s),r.textContent=n,e.insertBefore(r,e.firstChild);try{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>!this.#o.includes(e))}catch{}this.#i=void 0,this.#a=void 0,this.#o=[]}};function Gt(e){return e===`inherit`||e===`small`||e===`large`?e:`medium`}var Kt=class extends A{staticStyles=new Wt(this);static properties={size:{reflect:!0,useDefault:!0,noAccessor:!0,converter:{fromAttribute:Gt,toAttribute:Gt}}};#e=`medium`;get size(){return this.#e}set size(e){let t=this.#e,n=Gt(e);this.#e=n;let r=this.getAttribute(`size`)===n?void 0:Object.assign(Object.create(this.constructor.getPropertyOptions(`size`)),{hasChanged:()=>!0});this.requestUpdate(`size`,t,r)}},qt=Object.freeze({"--en-border-invalid-width":`2px`,"--en-border-width":`1px`,"--en-palette-accent":`rgb(36 87 214 / 1)`,"--en-palette-action":`rgb(36 87 214 / 1)`,"--en-color-action":`rgb(36 87 214 / 1)`,"--en-palette-surface":`rgb(255 255 255 / 1)`,"--en-color-surface":`rgb(255 255 255 / 1)`,"--en-color-accent-border":`rgb(181.65277272 203.4391786 246.40882708 / 1)`,"--en-color-accent-subtle":`rgb(227.10943415 235.68356672 252.33563096 / 1)`,"--en-palette-emphasis":`rgb(0 0 0 / 1)`,"--en-color-action-hover":`rgb(31.04856826 77.00062118 191.430243 / 1)`,"--en-color-action-pressed":`rgb(26.20372458 67.21650774 169.34637937 / 1)`,"--en-color-action-text":`rgb(36 87 214 / 1)`,"--en-palette-boundary":`rgb(123 135 152 / 1)`,"--en-color-boundary":`rgb(123 135 152 / 1)`,"--en-color-brand":`rgb(36 87 214 / 1)`,"--en-palette-canvas":`rgb(247 248 250 / 1)`,"--en-color-canvas":`rgb(247 248 250 / 1)`,"--en-palette-danger-text":`rgb(180 35 24 / 1)`,"--en-color-danger-text":`rgb(180 35 24 / 1)`,"--en-palette-focus":`rgb(36 87 214 / 1)`,"--en-color-focus":`rgb(36 87 214 / 1)`,"--en-color-focus-halo":`rgb(36 87 214 / 1)`,"--en-palette-line":`rgb(214 220 228 / 1)`,"--en-color-line":`rgb(214 220 228 / 1)`,"--en-color-link":`rgb(36 87 214 / 1)`,"--en-palette-foreground-dark":`rgb(16 27 57 / 1)`,"--en-palette-foreground-light":`rgb(255 255 255 / 1)`,"--en-color-on-action":`rgb(255 255 255 / 1)`,"--en-color-on-brand":`rgb(255 255 255 / 1)`,"--en-color-scrim":`rgb(0 0 0 / 0.45)`,"--en-palette-selected":`rgb(231 238 255 / 1)`,"--en-color-selected":`rgb(231 238 255 / 1)`,"--en-palette-success-text":`rgb(20 108 67 / 1)`,"--en-color-success-text":`rgb(20 108 67 / 1)`,"--en-palette-surface-raised":`rgb(255 255 255 / 1)`,"--en-color-surface-raised":`rgb(255 255 255 / 1)`,"--en-palette-surface-subtle":`rgb(238 241 245 / 1)`,"--en-color-surface-subtle":`rgb(238 241 245 / 1)`,"--en-palette-text":`rgb(27 31 36 / 1)`,"--en-color-text":`rgb(27 31 36 / 1)`,"--en-palette-text-muted":`rgb(86 97 113 / 1)`,"--en-color-text-muted":`rgb(86 97 113 / 1)`,"--en-palette-warning-text":`rgb(138 75 5 / 1)`,"--en-color-warning-text":`rgb(138 75 5 / 1)`,"--en-focus-halo-width":`0px`,"--en-focus-offset":`2px`,"--en-focus-width":`2px`,"--en-rhythm-base":`0.25rem`,"--en-space-3":`0.75rem`,"--en-space-control-inline":`0.75rem`,"--en-radius-control":`0.5rem`,"--en-focus-accent-width":`0px`,"--en-space-0":`0rem`,"--en-layout-panel-preferred":`20rem`,"--en-space-1":`0.25rem`,"--en-radius-container":`1rem`,"--en-shadow-overlay":`0px 4px 16px 0px rgb(0 0 0 / 0.18)`,"--en-space-1-5":`0.375rem`,"--en-space-control-block":`0.375rem`,"--en-focus-inset-offset":`-2px`,"--en-font-ui-weight":`400`,"--en-font-label-strong-weight":`600`,"--en-duration-immediate":`0ms`,"--en-duration-enter":`0ms`,"--en-duration-exit":`0ms`,"--en-duration-fast":`120ms`,"--en-duration-focus-enter":`0ms`,"--en-duration-focus-exit":`0ms`,"--en-duration-regular":`180ms`,"--en-duration-slow":`240ms`,"--en-duration-spin":`800ms`,"--en-ease-standard":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-enter":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-exit":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-focus-enter":`cubic-bezier(0.2, 0, 0, 1)`,"--en-ease-focus-exit":`cubic-bezier(0.2, 0, 0, 1)`,"--en-font-body-family":`system-ui, sans-serif`,"--en-font-body-line-height":`1.5`,"--en-font-body-size":`1rem`,"--en-size-type-scale-large":`1.125`,"--en-font-body-size-large":`1.125rem`,"--en-size-type-scale-medium":`1`,"--en-font-body-size-medium":`1rem`,"--en-size-type-scale-small":`0.9375`,"--en-font-body-size-small":`0.9375rem`,"--en-font-body-weight":`400`,"--en-font-code-family":`ui-monospace, monospace`,"--en-font-data-family":`system-ui, sans-serif`,"--en-font-data-line-height":`1.5`,"--en-font-data-size":`0.875rem`,"--en-font-data-size-large":`0.984375rem`,"--en-font-data-size-medium":`0.875rem`,"--en-font-data-size-small":`0.8203125rem`,"--en-font-data-weight":`400`,"--en-font-heading-large-family":`system-ui, sans-serif`,"--en-font-heading-large-line-height":`1.2`,"--en-font-heading-large-size":`2rem`,"--en-font-heading-large-size-large":`2.25rem`,"--en-font-heading-large-size-medium":`2rem`,"--en-font-heading-large-size-small":`1.875rem`,"--en-font-heading-large-weight":`600`,"--en-font-heading-medium-family":`system-ui, sans-serif`,"--en-font-heading-medium-line-height":`1.3`,"--en-font-heading-medium-size":`1.5rem`,"--en-font-heading-medium-size-large":`1.6875rem`,"--en-font-heading-medium-size-medium":`1.5rem`,"--en-font-heading-medium-size-small":`1.40625rem`,"--en-font-heading-medium-weight":`600`,"--en-font-heading-small-family":`system-ui, sans-serif`,"--en-font-heading-small-line-height":`1.4`,"--en-font-heading-small-size":`1.125rem`,"--en-font-heading-small-size-large":`1.265625rem`,"--en-font-heading-small-size-medium":`1.125rem`,"--en-font-heading-small-size-small":`1.0546875rem`,"--en-font-heading-small-weight":`600`,"--en-font-ui-family":`system-ui, sans-serif`,"--en-font-input-family":`system-ui, sans-serif`,"--en-font-ui-line-height":`1.5`,"--en-font-input-line-height":`1.5`,"--en-font-ui-size":`1rem`,"--en-font-input-size":`1rem`,"--en-font-input-size-large":`1.125rem`,"--en-font-input-size-medium":`1rem`,"--en-font-input-size-small":`1rem`,"--en-font-input-weight":`400`,"--en-font-label-strong-family":`system-ui, sans-serif`,"--en-font-label-strong-line-height":`1.5`,"--en-font-label-strong-size":`1rem`,"--en-font-metadata-family":`system-ui, sans-serif`,"--en-font-metadata-line-height":`1.5`,"--en-font-metadata-size":`0.8125rem`,"--en-font-metadata-size-large":`0.9140625rem`,"--en-font-metadata-size-medium":`0.8125rem`,"--en-font-metadata-size-small":`0.8125rem`,"--en-font-metadata-weight":`400`,"--en-font-ui-size-large":`1.125rem`,"--en-font-ui-size-medium":`1rem`,"--en-font-ui-size-small":`1rem`,"--en-layout-article-max":`48rem`,"--en-layout-dialog-collapse":`48rem`,"--en-layout-form-max":`28rem`,"--en-size-scale-large":`1.25`,"--en-layout-form-max-large":`35rem`,"--en-size-scale-medium":`1`,"--en-layout-form-max-medium":`28rem`,"--en-size-scale-small":`0.875`,"--en-layout-form-max-small":`24.5rem`,"--en-layout-panel-preferred-large":`25rem`,"--en-layout-panel-preferred-medium":`20rem`,"--en-layout-panel-preferred-small":`17.5rem`,"--en-layout-prose-max":`66ch`,"--en-motion-surface-offset":`0px`,"--en-motion-surface-scale":`1`,"--en-palette-on-action":`rgb(255 255 255 / 1)`,"--en-radius-choice":`2px`,"--en-radius-choice-large":`2.5px`,"--en-radius-choice-medium":`2px`,"--en-radius-choice-small":`1.75px`,"--en-radius-container-large":`1.25rem`,"--en-radius-container-medium":`1rem`,"--en-radius-container-small":`0.875rem`,"--en-radius-control-large":`0.625rem`,"--en-radius-control-medium":`0.5rem`,"--en-radius-control-small":`0.4375rem`,"--en-radius-dialog":`1.25rem`,"--en-radius-dialog-large":`1.5625rem`,"--en-radius-dialog-medium":`1.25rem`,"--en-radius-dialog-small":`1.09375rem`,"--en-radius-pill":`9999px`,"--en-shadow-dialog":`0px 12px 40px 0px rgb(0 0 0 / 0.18)`,"--en-size-avatar":`2.5rem`,"--en-size-avatar-large":`3.125rem`,"--en-size-avatar-medium":`2.5rem`,"--en-size-avatar-small":`2.1875rem`,"--en-size-choice-dot":`8px`,"--en-size-choice-dot-large":`10px`,"--en-size-choice-dot-medium":`8px`,"--en-size-choice-dot-small":`7px`,"--en-size-choice-mark-block":`10px`,"--en-size-choice-mark-block-large":`12.5px`,"--en-size-choice-mark-block-medium":`10px`,"--en-size-choice-mark-block-small":`8.75px`,"--en-size-choice-mark-inline":`6px`,"--en-size-choice-mark-inline-large":`7.5px`,"--en-size-choice-mark-inline-medium":`6px`,"--en-size-choice-mark-inline-small":`5.25px`,"--en-size-choice-mark-stroke":`2px`,"--en-size-control-min":`2.5rem`,"--en-size-control-large":`3.125rem`,"--en-size-control-medium":`2.5rem`,"--en-size-control-small":`2.1875rem`,"--en-size-icon":`1.125rem`,"--en-size-icon-large":`1.40625rem`,"--en-size-icon-medium":`1.125rem`,"--en-size-icon-small":`0.984375rem`,"--en-size-icon-stroke":`1.5px`,"--en-size-progress":`0.5rem`,"--en-size-progress-large":`0.625rem`,"--en-size-progress-medium":`0.5rem`,"--en-size-progress-small":`0.4375rem`,"--en-size-quote-border":`2px`,"--en-size-range-length":`12rem`,"--en-size-range-track":`4px`,"--en-size-range-track-large":`5px`,"--en-size-range-track-medium":`4px`,"--en-size-range-track-small":`3.5px`,"--en-size-skeleton-line":`1rem`,"--en-size-skeleton-line-large":`1.25rem`,"--en-size-skeleton-line-medium":`1rem`,"--en-size-skeleton-line-small":`0.875rem`,"--en-size-spinner":`1.25rem`,"--en-size-spinner-large":`1.5625rem`,"--en-size-spinner-medium":`1.25rem`,"--en-size-spinner-small":`1.09375rem`,"--en-size-spinner-stroke":`2px`,"--en-size-target-min":`24px`,"--en-size-splitter":`24px`,"--en-size-splitter-large":`30px`,"--en-size-splitter-medium":`24px`,"--en-size-splitter-small":`21px`,"--en-size-swatch":`4rem`,"--en-size-swatch-large":`5rem`,"--en-size-swatch-medium":`4rem`,"--en-size-swatch-small":`3.5rem`,"--en-size-switch-block":`1.5rem`,"--en-size-switch-block-large":`1.875rem`,"--en-size-switch-block-medium":`1.5rem`,"--en-size-switch-block-small":`1.3125rem`,"--en-size-switch-inline":`2.5rem`,"--en-size-switch-inline-large":`3.125rem`,"--en-size-switch-inline-medium":`2.5rem`,"--en-size-switch-inline-small":`2.1875rem`,"--en-size-switch-thumb":`1rem`,"--en-size-switch-thumb-large":`1.25rem`,"--en-size-switch-thumb-medium":`1rem`,"--en-size-switch-thumb-small":`0.875rem`,"--en-size-tab-indicator":`2px`,"--en-size-target-touch":`2.75rem`,"--en-space-0-5":`0.125rem`,"--en-space-12":`3rem`,"--en-space-16":`4rem`,"--en-space-2":`0.5rem`,"--en-space-2-5":`0.625rem`,"--en-space-4":`1rem`,"--en-space-5":`1.25rem`,"--en-space-6":`1.5rem`,"--en-space-8":`2rem`,"--en-space-actions":`0.375rem`,"--en-space-actions-large":`0.46875rem`,"--en-space-actions-medium":`0.375rem`,"--en-space-actions-small":`0.328125rem`,"--en-space-badge-block":`0.125rem`,"--en-space-badge-block-large":`0.15625rem`,"--en-space-badge-block-medium":`0.125rem`,"--en-space-badge-block-small":`0.109375rem`,"--en-space-badge-inline":`0.5rem`,"--en-space-badge-inline-large":`0.625rem`,"--en-space-badge-inline-medium":`0.5rem`,"--en-space-badge-inline-small":`0.4375rem`,"--en-space-control-block-large":`0.46875rem`,"--en-space-control-block-medium":`0.375rem`,"--en-space-control-block-small":`0.328125rem`,"--en-space-control-description":`0.375rem`,"--en-space-control-description-large":`0.46875rem`,"--en-space-control-description-medium":`0.375rem`,"--en-space-control-description-small":`0.328125rem`,"--en-space-control-inline-large":`0.9375rem`,"--en-space-control-inline-medium":`0.75rem`,"--en-space-control-inline-small":`0.65625rem`,"--en-space-fields":`1.5rem`,"--en-space-fields-large":`1.875rem`,"--en-space-fields-medium":`1.5rem`,"--en-space-fields-small":`1.3125rem`,"--en-space-icon-label":`0.5rem`,"--en-space-icon-label-large":`0.625rem`,"--en-space-icon-label-medium":`0.5rem`,"--en-space-icon-label-small":`0.4375rem`,"--en-space-label-control":`0.5rem`,"--en-space-label-control-large":`0.625rem`,"--en-space-label-control-medium":`0.5rem`,"--en-space-label-control-small":`0.4375rem`,"--en-space-panel":`1.5rem`,"--en-space-panel-large":`1.875rem`,"--en-space-panel-medium":`1.5rem`,"--en-space-panel-small":`1.3125rem`,"--en-space-rows":`0.75rem`,"--en-space-rows-large":`0.9375rem`,"--en-space-rows-medium":`0.75rem`,"--en-space-rows-small":`0.65625rem`,"--en-space-sections":`2rem`,"--en-space-sections-large":`2.5rem`,"--en-space-sections-medium":`2rem`,"--en-space-sections-small":`1.75rem`,"--en-space-switch-inset":`0.1875rem`,"--en-space-switch-inset-large":`0.234375rem`,"--en-space-switch-inset-medium":`0.1875rem`,"--en-space-switch-inset-small":`0.1640625rem`});function Jt(e){if(!Object.hasOwn(qt,e))throw RangeError(`Unknown token `+e);return qt[e]}var Yt=Object.freeze([`small`,`medium`,`large`]);Object.freeze({small:.875,medium:1,large:1.25}),Object.freeze({small:.9375,medium:1,large:1.125});var Xt=Object.freeze({"size.control":`size.control-min`,"size.icon":`size.icon`,"size.avatar":`size.avatar`,"size.swatch":`size.swatch`,"size.spinner":`size.spinner`,"size.progress":`size.progress`,"size.skeleton-line":`size.skeleton-line`,"size.splitter":`size.splitter`,"size.switch-inline":`size.switch-inline`,"size.switch-block":`size.switch-block`,"size.switch-thumb":`size.switch-thumb`,"size.choice-mark-inline":`size.choice-mark-inline`,"size.choice-mark-block":`size.choice-mark-block`,"size.choice-dot":`size.choice-dot`,"size.range-track":`size.range-track`,"space.switch-inset":`space.switch-inset`,"space.control-inline":`space.control-inline`,"space.control-block":`space.control-block`,"space.panel":`space.panel`,"space.rows":`space.rows`,"space.actions":`space.actions`,"space.fields":`space.fields`,"space.sections":`space.sections`,"space.icon-label":`space.icon-label`,"space.label-control":`space.label-control`,"space.control-description":`space.control-description`,"space.badge-inline":`space.badge-inline`,"space.badge-block":`space.badge-block`,"radius.control":`radius.control`,"radius.container":`radius.container`,"radius.dialog":`radius.dialog`,"radius.choice":`radius.choice`,"layout.form-max":`layout.form-max`,"layout.panel-preferred":`layout.panel-preferred`,"font.ui.size":`font.ui.size`,"font.input.size":`font.input.size`,"font.data.size":`font.data.size`,"font.metadata.size":`font.metadata.size`,"font.body.size":`font.body.size`,"font.heading-small.size":`font.heading-small.size`,"font.heading-medium.size":`font.heading-medium.size`,"font.heading-large.size":`font.heading-large.size`}),Zt=Object.freeze(Object.entries(Xt).map(([e,t])=>Object.freeze({role:`--en-${e.replaceAll(`.`,`-`)}`,base:`--en-${t.replaceAll(`.`,`-`)}`,variants:Object.freeze(Object.fromEntries(Yt.map(t=>[t,`--en-${e.replaceAll(`.`,`-`)}-${t}`])))})));function Qt(e){let t=Jt(e);if(!t)throw Error(`Missing stylesheet token default: ${e}`);return o`var(${a(e)}, ${a(t)})`}var $t=new Map(Zt.map(({base:e,role:t})=>[e,`--_en-sized-${t.slice(5)}`]));function z(e){let t=Qt(e),n=$t.get(e);return n?o`var(${a(n)}, ${t})`:t}function B(e,t){return o`var(${a(e)}, ${t})`}function V(e){let t=Zt.filter(({role:t})=>e.cssText.includes(`var(--_en-sized-${t.slice(5)},`)).map(({role:e,variants:t})=>`--_en-sized-${e.slice(5)}: calc(${Qt(t.small).cssText} * var(--_en-size-small, 0) + ${Qt(t.medium).cssText} * var(--_en-size-medium, 1) + ${Qt(t.large).cssText} * var(--_en-size-large, 0));`).join(`
`);return t?o`:host, .en-foundation { ${a(t)} } ${e}`:e}var en=V(o`
  .en-body, .en-prose, .en-heading-small, .en-heading-medium, .en-heading-large, .en-metadata, .en-data {
    margin: 0;
    overflow-wrap: break-word;
  }
  .en-body, .en-prose {
    color: ${z(`--en-color-text`)};
    font: ${z(`--en-font-body-weight`)} ${z(`--en-font-body-size`)} / ${z(`--en-font-body-line-height`)} ${z(`--en-font-body-family`)};
  }
  .en-prose {
    max-inline-size: ${B(`--en-prose-max-inline-size`,z(`--en-layout-prose-max`))};
  }
  .en-prose :where(p, ul, ol, dl, blockquote) { margin-block: 0 ${z(`--en-space-4`)}; }
  .en-prose :where(ul, ol) { padding-inline-start: ${z(`--en-space-6`)}; }
  .en-heading-small {
    font: ${z(`--en-font-heading-small-weight`)} ${z(`--en-font-heading-small-size`)} / ${z(`--en-font-heading-small-line-height`)} ${z(`--en-font-heading-small-family`)};
  }
  .en-heading-medium {
    font: ${z(`--en-font-heading-medium-weight`)} ${z(`--en-font-heading-medium-size`)} / ${z(`--en-font-heading-medium-line-height`)} ${z(`--en-font-heading-medium-family`)};
  }
  .en-heading-large {
    font: ${z(`--en-font-heading-large-weight`)} ${z(`--en-font-heading-large-size`)} / ${z(`--en-font-heading-large-line-height`)} ${z(`--en-font-heading-large-family`)};
  }
  .en-metadata {
    color: ${z(`--en-color-text-muted`)};
    font: ${z(`--en-font-metadata-weight`)} ${z(`--en-font-metadata-size`)} / ${z(`--en-font-metadata-line-height`)} ${z(`--en-font-metadata-family`)};
  }
  .en-data {
    font: ${z(`--en-font-data-weight`)} ${z(`--en-font-data-size`)} / ${z(`--en-font-data-line-height`)} ${z(`--en-font-data-family`)};
    font-variant-numeric: tabular-nums;
  }
`);o`:host { display: block; min-inline-size: 0; }`;var tn=o`:host { display: inline-block; vertical-align: middle; max-inline-size: 100%; }`,nn=o`:host { display: inline-flex; align-items: center; justify-content: center; color: inherit; line-height: 0; vertical-align: middle; }`,H=V(o`
  ${o`
  :host, .en-foundation { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='inherit']), .en-foundation[data-size='inherit'] { --_en-size-small: inherit; --_en-size-medium: inherit; --_en-size-large: inherit; }
  :host([size='small']), .en-foundation[data-size='small'] { --_en-size-small: 1; --_en-size-medium: 0; --_en-size-large: 0; }
  :host([size='medium']), .en-foundation[data-size='medium'] { --_en-size-small: 0; --_en-size-medium: 1; --_en-size-large: 0; }
  :host([size='large']), .en-foundation[data-size='large'] { --_en-size-small: 0; --_en-size-medium: 0; --_en-size-large: 1; }
`}
  :host, .en-foundation {
    box-sizing: border-box;
    color: ${z(`--en-color-text`)};
    font-family: ${z(`--en-font-ui-family`)};
    font-size: ${z(`--en-font-ui-size`)};
    font-weight: ${z(`--en-font-ui-weight`)};
    line-height: ${z(`--en-font-ui-line-height`)};
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
    outline: ${z(`--en-focus-width`)} solid ${z(`--en-color-focus`)};
    outline-offset: ${z(`--en-focus-offset`)};
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
`);function U(e,t,n){return e?B(`--en-${e}-focus-${t}`,n):n}function rn(e){let t=U(e.family,`width`,z(`--en-focus-width`));return{width:t,offset:U(e.family,`offset`,e.inset?o`calc(0px - ${t})`:z(`--en-focus-offset`)),color:U(e.family,`color`,z(`--en-color-focus`)),haloWidth:e.halo===!1?o`0px`:U(e.family,`halo-width`,z(`--en-focus-halo-width`)),haloColor:U(e.family,`halo-color`,z(`--en-color-focus-halo`))}}function W(e={}){let t=rn(e);return o`max(0px, calc(${t.width} + ${t.offset}), ${t.haloWidth})`}var an=o`max(${W()}, ${W({family:`button`})}, ${W({family:`input`})}, ${W({family:`option`,inset:!0})}, ${W({family:`overlay`})})`;function G(e,t={}){return on(o`${e}:focus-visible`,{...t,restSelector:t.restSelector??e})}function on(e,t={}){let n=rn(t),r=t.restSelector,i=r&&t.halo!==!1,a=t.baseShadow??o`0 0 0 0 transparent`,s=t.baseTransitions?o`${t.baseTransitions},`:o``;return o`
    ${i?o`${r} {
      box-shadow: 0 0 0 0 ${n.haloColor}, ${a};
      transition: ${s} box-shadow ${z(`--en-duration-focus-exit`)} ${z(`--en-ease-focus-exit`)};
    }`:o``}
    ${e} {
      outline: ${n.width} solid ${n.color};
      outline-offset: ${n.offset};
      box-shadow: 0 0 0 ${n.haloWidth} ${n.haloColor}, ${a};
      ${i?o`transition: ${s} box-shadow ${z(`--en-duration-focus-enter`)} ${z(`--en-ease-focus-enter`)};`:o``}
    }
    ${i?o`@media (prefers-reduced-motion: reduce) {
      ${r}, ${e} { transition: none; }
    }`:o``}
    @media (forced-colors: active) {
      ${e} { outline-color: Highlight; box-shadow: none; }
      ${i?o`${r}, ${e} { box-shadow: none; transition: none; }`:o``}
    }
  `}var sn=o`
  .en-button {
    padding-inline: ${B(`--en-control-inline-padding`,B(`--en-button-inline-padding`,z(`--en-space-control-inline`)))};
    display: inline-flex;
    min-inline-size: ${z(`--en-size-target-min`)};
    align-items: center;
    justify-content: center;
    gap: ${z(`--en-space-icon-label`)};
    border-color: ${B(`--en-button-border-color`,z(`--en-color-action`))};
    border-radius: ${B(`--en-button-radius`,z(`--en-radius-control`))};
    background: ${B(`--en-button-background`,z(`--en-color-action`))};
    color: ${B(`--en-button-color`,z(`--en-color-on-action`))};
    font-weight: ${z(`--en-font-label-strong-weight`)};
    text-align: center;
    text-decoration: none;
    white-space: normal;
    overflow-wrap: break-word;
    cursor: pointer;
    transition: background-color ${z(`--en-duration-fast`)} ${z(`--en-ease-standard`)},
      border-color ${z(`--en-duration-fast`)} ${z(`--en-ease-standard`)};
  }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):hover) { background: ${B(`--en-button-background`,z(`--en-color-action-hover`))}; }
  .en-button:where(:not(:disabled):not([aria-disabled='true']):active) { background: ${B(`--en-button-background`,z(`--en-color-action-pressed`))}; }
  .en-button--secondary, .en-button[data-variant='secondary'] {
    background: ${B(`--en-button-background`,z(`--en-color-surface-subtle`))};
    color: ${B(`--en-button-color`,z(`--en-color-text`))};
    border-color: ${B(`--en-button-border-color`,z(`--en-color-boundary`))};
  }
  .en-button--quiet, .en-button[data-variant='ghost'] {
    background: none;
    color: ${B(`--en-button-color`,z(`--en-color-action-text`))};
    border-color: ${B(`--en-button-border-color`,z(`--en-color-line`))};
  }
  :is(.en-button--secondary, .en-button--quiet, .en-button[data-variant='secondary'], .en-button[data-variant='ghost']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${B(`--en-button-background`,z(`--en-color-selected`))};
  }
  .en-button--danger, .en-button[data-variant='danger'] {
    background: ${B(`--en-button-background`,z(`--en-color-surface`))};
    color: ${B(`--en-button-color`,z(`--en-color-danger-text`))};
    border-color: ${B(`--en-button-border-color`,z(`--en-color-danger-text`))};
  }
  :is(.en-button--danger, .en-button[data-variant='danger']):not(:disabled):not([aria-disabled='true']):hover {
    background: ${B(`--en-button-background`,z(`--en-color-surface-subtle`))};
  }
  .en-button__prefix, .en-button__suffix { display: contents; }
  .en-button__label { min-inline-size: 0; }
  .en-icon-button { padding-inline: ${z(`--en-space-2`)}; min-inline-size: max(${B(`--en-control-min-size`,z(`--en-size-control-min`))}, ${z(`--en-size-target-min`)}); }
  /* Explicit button mode; existing stepper/overlay icon recipes retain their layout. */
  .en-button[data-icon-only] {
    --_en-icon-button-side: max(var(--_en-text-control-block-size), calc(max(${B(`--en-icon-size`,z(`--en-size-icon`))}, ${z(`--en-size-spinner`)}) + 2 * ${z(`--en-space-control-block`)} + 2 * ${z(`--en-border-width`)}));
    min-inline-size: var(--_en-icon-button-side);
    min-block-size: var(--_en-icon-button-side);
    inline-size: max-content;
    aspect-ratio: 1;
    padding: ${z(`--en-space-control-block`)};
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

`,cn=o`background-color ${z(`--en-duration-fast`)} ${z(`--en-ease-standard`)}, border-color ${z(`--en-duration-fast`)} ${z(`--en-ease-standard`)}`,ln=G(o`.en-button`,{family:`button`,baseTransitions:cn}),un=o`.en-button:not(:disabled):not([aria-disabled='true']):hover { background: Highlight !important; color: HighlightText !important; }`,dn=o`calc(${o`max(0px, ${B(`--en-segmented-control-frame-inset`,z(`--en-space-1`))})`} + ${z(`--en-border-width`)})`;function fn(e=!1){let t=z(e?`--en-size-target-touch`:`--en-size-target-min`),n=z(`--en-space-control-block`),r=z(`--en-border-width`),i=o`max(calc(${z(`--en-space-1`)} + ${r}), ${dn})`;return o`max(
    ${B(`--en-control-min-size`,z(`--en-size-control-min`))},
    calc(${t} + 2 * ${i}),
    calc(${z(`--en-font-input-size`)} * ${z(`--en-font-input-line-height`)} + 2 * ${n} + 2 * ${r}),
    calc(${z(`--en-font-ui-size`)} * ${z(`--en-font-ui-line-height`)} + 2 * max(${n}, ${i}) + 2 * ${r})
  )`}function pn(e,t=!1){return o`${e} { --_en-text-control-block-size: ${fn(t)}; }`}function mn(e){return o`${e} {
    box-sizing: border-box;
    min-inline-size: 0;
    min-block-size: max(${B(`--en-control-min-size`,z(`--en-size-control-min`))}, ${z(`--en-size-target-min`)});
    max-inline-size: 100%;
    padding-block: ${z(`--en-space-control-block`)};
    padding-inline: ${B(`--en-control-inline-padding`,z(`--en-space-control-inline`))};
    border: ${z(`--en-border-width`)} solid ${B(`--en-control-border-color`,z(`--en-color-boundary`))};
    border-radius: ${B(`--en-control-radius`,z(`--en-radius-control`))};
    background: ${B(`--en-control-background`,z(`--en-color-surface`))};
    color: ${B(`--en-control-color`,z(`--en-color-text`))};
    font: inherit;
    text-align: start;
  }`}function hn(e){return o`${e} { min-block-size: var(--_en-text-control-block-size); }`}function gn(e){return o`${e} {
    color: ${z(`--en-color-text-muted`)};
    background: ${z(`--en-color-surface-subtle`)};
    border-color: ${z(`--en-color-boundary`)};
    cursor: default;
  }`}function _n(e){return o`${e} { min-block-size: max(${B(`--en-control-min-size`,z(`--en-size-control-min`))}, ${z(`--en-size-target-touch`)}); }`}function vn(e){return o`${e} { min-inline-size: max(${B(`--en-control-min-size`,z(`--en-size-control-min`))}, ${z(`--en-size-target-touch`)}); }`}function yn(e){return o`${e} { transition: none; }`}function bn(e){return o`${e} { color: CanvasText !important; background: Canvas !important; border-color: ButtonText !important; }`}function xn(e){return o`${e} { color: GrayText !important; border-color: GrayText !important; }`}var Sn=V(o`
  ${pn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`)}
  ${mn(o`.en-button`)}
  ${hn(o`.en-button:not(.en-icon-button)`)}
  ${sn}
  ${gn(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
  ${ln}
  @media (any-pointer: coarse) {
    ${pn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only]`,!0)}
    ${_n(o`.en-button`)}
    ${hn(o`.en-button:not(.en-icon-button)`)}
    ${vn(o`.en-icon-button`)}
  }
  @media (prefers-reduced-motion: reduce) { ${yn(o`.en-button`)} }
  @media (forced-colors: active) {
    ${bn(o`.en-button`)}
    ${xn(o`:is(.en-button):is(:disabled, [aria-disabled='true'])`)}
    ${un}
  }
`),Cn=V(o`
  .en-spinner {
    display: inline-block;
    flex: none;
    inline-size: ${z(`--en-size-spinner`)};
    block-size: ${z(`--en-size-spinner`)};
    border: ${z(`--en-size-spinner-stroke`)} solid currentColor;
    border-inline-end-color: ${z(`--en-color-line`)};
    border-radius: ${z(`--en-radius-pill`)};
    animation: en-style-spin ${z(`--en-duration-spin`)} linear infinite;
  }
  @keyframes en-style-spin { to { transform: rotate(1turn); } }
  .en-skeleton { display: block; inline-size: 100%; block-size: ${B(`--en-skeleton-size`,z(`--en-size-skeleton-line`))}; background: ${B(`--en-skeleton-color`,z(`--en-color-surface-subtle`))}; border-radius: ${z(`--en-radius-control`)}; }
  .en-skeleton[data-shape='circle'] { inline-size: ${B(`--en-skeleton-size`,z(`--en-size-avatar`))}; block-size: ${B(`--en-skeleton-size`,z(`--en-size-avatar`))}; border-radius: ${z(`--en-radius-pill`)}; }
  .en-skeleton[data-shape='rectangle'] { block-size: ${B(`--en-skeleton-size`,z(`--en-space-16`))}; }
  @media (prefers-reduced-motion: reduce) { .en-spinner { animation: none; } }
  @media (forced-colors: active) { .en-spinner { border-color: CanvasText; border-inline-end-color: GrayText; } .en-skeleton { background: Canvas; border: ${z(`--en-border-width`)} solid GrayText; } }
`),wn=e=>e??E,Tn=e=>C`
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
    aria-haspopup=${wn(e.popupRole??void 0)}
    aria-expanded=${wn(e.popupExpanded??void 0)}
  >
    ${e.loading?C`<span class="en-spinner" part="indicator" aria-hidden="true"></span>`:null}
    <slot class="en-button__prefix" name="prefix"></slot>
    <span class="en-button__label" part="label"><slot name="label"><slot></slot></slot></span>
    <slot class="en-button__suffix" name="suffix"></slot>
  </button>
`,En=new WeakMap;function Dn(e,t){En.set(e,{write:t})}var On=class extends Kt{static properties={variant:{reflect:!0},disabled:{type:Boolean,reflect:!0},loading:{type:Boolean,reflect:!0},iconOnly:{type:Boolean,attribute:`icon-only`,reflect:!0},popupRole:{attribute:`aria-haspopup`},popupExpanded:{attribute:`aria-expanded`},descriptionIds:{attribute:`aria-describedby`,hasChanged:()=>!0}};static styles=[H,tn,Sn,Cn];tabStop=0;constructor(){super(),this.variant=`primary`,this.disabled=!1,this.loading=!1,this.iconOnly=!1,this.popupRole=null,this.popupExpanded=null,this.descriptionIds=null,Dn(this,e=>{if(this.tabStop===e)return;this.tabStop=e;let t=this.renderRoot?.querySelector(`button`);t&&(t.tabIndex=e),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.requestUpdate()}focus(e){this.renderRoot.querySelector(`button`)?.focus(e)}render(){return Tn({variant:this.variant,size:this.size,disabled:this.disabled,loading:this.loading,iconOnly:this.iconOnly,popupRole:this.popupRole,popupExpanded:this.popupExpanded,tabIndex:this.tabStop})}updated(){let e=this.renderRoot.querySelector(`button`);if(!e||!(`ariaDescribedByElements`in e))return;let t=this.ariaDescribedByElements,n=e.ariaDescribedByElements;(n?.length!==t?.length||n?.some((e,n)=>e!==t?.[n]))&&(e.ariaDescribedByElements=t)}};function kn(e){let t=new Map,n=new Map,r=[],i=new Set,a=e=>{let r=t.get(e.tagName);if(r&&r.elementClass!==e.elementClass)throw Error(`Conflicting constructors for ${e.tagName}.`);if(t.set(e.tagName,e),i.has(e))return;i.add(e);let o=n.get(e.tagName)??new Set;n.set(e.tagName,o);for(let t of e.dependencies??[])o.add(t.tagName),a(t)};for(let t of e)a(t);let o=new Set,s=new Set,c=e=>{if(!(o.has(e)||s.has(e))){s.add(e);for(let t of n.get(e)??[])c(t);s.delete(e),o.add(e),r.push(t.get(e))}};for(let e of t.keys())c(e);return Object.freeze(r)}function An(e,t){let n=kn(t),r=new Map;for(let t of n){let n=r.get(t.elementClass);if(n&&n!==t.tagName)throw Error(`One constructor cannot define both ${n} and ${t.tagName}.`);r.set(t.elementClass,t.tagName);let i=e.get(t.tagName);if(i&&i!==t.elementClass)throw Error(`A different version of ${t.tagName} is already registered.`)}for(let t of n)e.get(t.tagName)||e.define(t.tagName,t.elementClass)}function K(e,t){An(e,[t])}K(customElements,{tagName:`en-button`,elementClass:On});var jn=o`
  ${ln}
  ${G(o`.en-accordion-trigger`,{family:`button`})}
  ${G(o`:where(.en-input, .en-textarea, .en-select, .en-color-control)`,{family:`input`})}
  ${G(o`.en-option`,{family:`option`})}
  ${G(o`:where(.en-link, .en-control:not(.en-color-control), .en-checkbox, .en-radio, .en-switch,
    .en-range, .en-tab, .en-split-separator, .en-rating-item)`)}
`,Mn=rn({family:`input`}),Nn=o`
  .en-field-focus-frame {
    position: relative;
    min-inline-size: 0;
    --_en-field-focus-accent-width: ${B(`--en-input-focus-accent-width`,z(`--en-focus-accent-width`))};
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
    block-size: max(var(--_en-field-focus-accent-width), ${B(`--en-control-radius`,z(`--en-radius-control`))});
    border-end-start-radius: ${B(`--en-control-radius`,z(`--en-radius-control`))};
    border-end-end-radius: ${B(`--en-control-radius`,z(`--en-radius-control`))};
    border-block-end: var(--_en-field-focus-accent-width) solid ${B(`--en-input-focus-accent-color`,z(`--en-color-focus`))};
    clip-path: inset(calc(100% - var(--_en-field-focus-accent-width)) 0 0 0);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform ${z(`--en-duration-focus-exit`)} ${z(`--en-ease-focus-exit`)};
  }
  .en-number-group.en-field-focus-frame {
    box-shadow: 0 0 0 0 ${Mn.haloColor};
    transition: box-shadow ${z(`--en-duration-focus-exit`)} ${z(`--en-ease-focus-exit`)};
  }
  .en-number-group.en-field-focus-frame:focus-within {
    box-shadow: 0 0 0 ${Mn.haloWidth} ${Mn.haloColor};
    transition-duration: ${z(`--en-duration-focus-enter`)};
    transition-timing-function: ${z(`--en-ease-focus-enter`)};
  }
  .en-field-focus-frame:focus-within::after {
    transform: scaleX(1);
    transition-duration: ${z(`--en-duration-focus-enter`)};
    transition-timing-function: ${z(`--en-ease-focus-enter`)};
  }
  @media (prefers-reduced-motion: reduce) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after,
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { transition: none; }
  }
  @media (forced-colors: active) {
    .en-field-focus-frame::after, .en-field-focus-frame:focus-within::after { border-block-end-color: Highlight; transition: none; }
    .en-number-group.en-field-focus-frame, .en-number-group.en-field-focus-frame:focus-within { box-shadow: none; transition: none; }
  }
`;V(o`
  .en-alert { display: flex; align-items: flex-start; gap: ${z(`--en-space-3`)}; min-inline-size: 0; padding: ${z(`--en-space-4`)}; border: ${z(`--en-border-width`)} solid ${B(`--en-alert-border-color`,z(`--en-color-accent-border`))}; border-radius: ${z(`--en-radius-container`)}; background: ${B(`--en-alert-background`,z(`--en-color-surface`))}; color: ${B(`--en-alert-color`,z(`--en-color-text`))}; }
  .en-alert__icon { flex: none; color: ${z(`--en-color-action`)}; }
  .en-alert__content { min-inline-size: 0; flex: 1 1 auto; overflow-wrap: break-word; }
  .en-alert__close { flex: none; margin-inline-start: auto; }
  .en-alert[data-variant='success'] { border-color: ${B(`--en-alert-border-color`,z(`--en-color-success-text`))}; }
  .en-alert[data-variant='warning'] { border-color: ${B(`--en-alert-border-color`,z(`--en-color-warning-text`))}; }
  .en-alert[data-variant='danger'] { border-color: ${B(`--en-alert-border-color`,z(`--en-color-danger-text`))}; }
  .en-alert[data-variant='success'] .en-alert__icon { color: ${z(`--en-color-success-text`)}; }
  .en-alert[data-variant='warning'] .en-alert__icon { color: ${z(`--en-color-warning-text`)}; }
  .en-alert[data-variant='danger'] .en-alert__icon { color: ${z(`--en-color-danger-text`)}; }
  .en-badge { display: inline-flex; align-items: center; gap: ${z(`--en-space-icon-label`)}; max-inline-size: 100%; padding-block: ${z(`--en-space-badge-block`)}; padding-inline: ${z(`--en-space-badge-inline`)}; border: ${z(`--en-border-width`)} solid ${z(`--en-color-line`)}; border-radius: ${B(`--en-badge-radius`,z(`--en-radius-control`))}; background: ${B(`--en-badge-background`,z(`--en-color-surface-subtle`))}; color: ${B(`--en-badge-color`,z(`--en-color-text`))}; font-size: ${z(`--en-font-metadata-size`)}; line-height: ${z(`--en-font-metadata-line-height`)}; overflow-wrap: break-word; }
  .en-badge__prefix { display: contents; }
  .en-badge__label { min-inline-size: 0; }
  .en-badge[data-variant='accent'] { background: ${B(`--en-badge-background`,z(`--en-color-accent-subtle`))}; color: ${B(`--en-badge-color`,z(`--en-color-action-text`))}; }
  .en-badge[data-variant='success'] { color: ${B(`--en-badge-color`,z(`--en-color-success-text`))}; }
  .en-badge[data-variant='warning'] { color: ${B(`--en-badge-color`,z(`--en-color-warning-text`))}; }
  .en-badge[data-variant='danger'] { color: ${B(`--en-badge-color`,z(`--en-color-danger-text`))}; }
  .en-progress, .en-progress-track { display: block; inline-size: 100%; block-size: ${B(`--en-progress-size`,z(`--en-size-progress`))}; overflow: hidden; border: 0; border-radius: ${z(`--en-radius-pill`)}; background: ${B(`--en-progress-track-color`,z(`--en-color-surface-subtle`))}; }
  .en-progress { appearance: none; accent-color: ${B(`--en-progress-color`,z(`--en-color-action`))}; }
  .en-progress-fill { display: block; inline-size: clamp(0%, var(--en-progress-value, 0%), 100%); block-size: 100%; border-radius: inherit; background: ${B(`--en-progress-color`,z(`--en-color-action`))}; }
  .en-progress::-webkit-progress-bar { background: ${B(`--en-progress-track-color`,z(`--en-color-surface-subtle`))}; border-radius: inherit; }
  .en-progress::-webkit-progress-value { background: ${B(`--en-progress-color`,z(`--en-color-action`))}; border-radius: inherit; }
  .en-progress::-moz-progress-bar { background: ${B(`--en-progress-color`,z(`--en-color-action`))}; border-radius: inherit; }
  ${Cn}
  @media (forced-colors: active) {
    .en-alert, .en-alert[data-variant], .en-badge, .en-badge[data-variant] { color: CanvasText; background: Canvas; border-color: CanvasText; }
    .en-alert__icon, .en-alert[data-variant] .en-alert__icon { color: CanvasText; }
    .en-progress, .en-progress-track { background: Canvas; border: ${z(`--en-border-width`)} solid CanvasText; }
    .en-progress-fill { background: Highlight; }
    .en-progress::-webkit-progress-bar { background: Canvas; }
    .en-progress::-webkit-progress-value { background: Highlight; }
    .en-progress::-moz-progress-bar { background: Highlight; }
  }
`);var Pn=V(o`
  .en-icon { display: inline-flex; align-items: center; justify-content: center; flex: none; inline-size: ${B(`--en-icon-size`,z(`--en-size-icon`))}; block-size: ${B(`--en-icon-size`,z(`--en-size-icon`))}; vertical-align: middle; color: inherit; }
  .en-icon > :where(svg, img), .en-icon ::slotted(svg), .en-icon ::slotted(img) { display: block; inline-size: 100%; block-size: 100%; }
  svg.en-icon, .en-icon > svg, .en-icon ::slotted(svg) { display: block; stroke-width: ${z(`--en-size-icon-stroke`)}; }
  .en-avatar { display: inline-grid; place-items: center; vertical-align: middle; flex: none; inline-size: ${B(`--en-avatar-size`,z(`--en-size-avatar`))}; block-size: ${B(`--en-avatar-size`,z(`--en-size-avatar`))}; overflow: hidden; border-radius: ${B(`--en-avatar-radius`,z(`--en-radius-pill`))}; background: ${z(`--en-color-surface-subtle`)}; color: ${z(`--en-color-text`)}; }
  .en-avatar__image { display: block; inline-size: 100%; block-size: 100%; object-fit: cover; }
  .en-avatar__fallback { font-weight: ${z(`--en-font-label-strong-weight`)}; }
  .en-media { display: block; max-inline-size: 100%; block-size: auto; border-radius: ${B(`--en-media-radius`,z(`--en-radius-container`))}; aspect-ratio: ${B(`--en-media-aspect-ratio`,o`auto`)}; }
  @media (forced-colors: active) { .en-avatar { color: CanvasText; background: Canvas; border: ${z(`--en-border-width`)} solid CanvasText; } }
`);V(o`
  :host { inline-size: max(${B(`--en-swatch-size`,z(`--en-size-swatch`))}, ${z(`--en-size-target-min`)}); min-inline-size: ${z(`--en-size-target-min`)}; }
  .en-swatch__sample { position: relative; display: block; appearance: none; inline-size: 100%; block-size: max(${B(`--en-swatch-size`,z(`--en-size-swatch`))}, ${z(`--en-size-target-min`)}); min-inline-size: ${z(`--en-size-target-min`)}; padding: 0; margin: 0; overflow: hidden; border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)}; border-radius: ${z(`--en-radius-control`)}; background: transparent; color: inherit; cursor: pointer; }
  .en-swatch__sample:not(:disabled):hover { border-color: ${z(`--en-color-action`)}; }
  .en-swatch__sample:disabled { cursor: default; }
  .en-swatch__color { display: block; inline-size: 100%; block-size: 100%; }
  ${jn}
  @media (forced-colors: active) {
    .en-swatch__sample, .en-swatch__sample:not(:disabled):hover { border-color: ButtonText; background: Canvas; }
    .en-swatch__sample:disabled { border-color: GrayText; }
    .en-swatch__color { forced-color-adjust: none; }
  }
`);var Fn={check:w`<path d="m5 12 4 4L19 6" />`,plus:w`<path d="M12 5v14M5 12h14" />`,close:w`<path d="m6 6 12 12M18 6 6 18" />`,"chevron-down":w`<path d="m6 9 6 6 6-6" />`,"arrow-right":w`<path d="M4 12h16m-6-6 6 6-6 6" />`,search:w`<circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 4 4" />`,info:w`<circle cx="12" cy="12" r="9" /><path d="M12 11v6m0-10v1" />`,warning:w`<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1" />`,sparkles:w`<path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3ZM20 2v4m-2-2h4" />`},In=(e,t)=>C`
  <svg
    class="en-icon"
    part="base"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    focusable="false"
    role=${t?`img`:E}
    aria-label=${t||E}
    aria-hidden=${t?E:`true`}
  >${Fn[e]??E}</svg>
`;K(customElements,{tagName:`en-icon`,elementClass:class extends Kt{static properties={name:{type:String},label:{type:String}};static styles=[H,nn,Pn];constructor(){super(),this.name=`info`,this.label=``}render(){return In(this.name,this.label)}}});var Ln=new WeakMap;function Rn(e,t,n,r){return new((e.ownerDocument?.defaultView?.CustomEvent)??globalThis.CustomEvent)(t,{detail:n,bubbles:!0,composed:!0,cancelable:r})}function zn(e,t){if(Object.is(t.previous,t.proposed))return`unchanged`;let n=Rn(e,`en-change`,Object.freeze({previous:t.previous,proposed:t.proposed,reason:t.reason}),!0),r={authorRevision:t.getRevision(),acceptedEpoch:Ln.get(e)?.acceptedEpoch??0},i=Ln.get(e);i||(i={acceptedEpoch:0,frames:[]},Ln.set(e,i));let a=i;a.frames.push(r);let o=!1,s=()=>a.frames[a.frames.length-1]===r&&t.getRevision()===r.authorRevision&&a.acceptedEpoch===r.acceptedEpoch,c=()=>{o=!0,t.rollback(t.previous)};try{if(t.stage(t.proposed),!s())return o=!0,`superseded`;let i=e.dispatchEvent(n);if(!s())return o=!0,`superseded`;if(!i)return c(),`canceled`;let l=t.canCommit?.(t.proposed)??!0;if(l||n.preventDefault(),!s())return o=!0,`superseded`;if(!l)return c(),`canceled`;a.acceptedEpoch+=1;let u=a.acceptedEpoch;return o=!0,t.commit?.(t.proposed),t.getRevision()!==r.authorRevision||a.acceptedEpoch!==u?`superseded`:`committed`}catch(e){if(!o&&s())try{c()}catch(t){throw AggregateError([e,t],`Change transaction and its rollback both failed.`)}throw e}finally{a.frames.pop(),a.frames.length===0&&Ln.delete(e)}}function Bn(e,t){e.dispatchEvent(Rn(e,`en-input`,Object.freeze({...t}),!1))}var Vn=class{#e;#t;#n=null;#r;#i=!1;#a;#o=new WeakSet;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}hostConnected(){this.#i=!0}hostUpdated(){this.#c(),this.sync()}hostDisconnected(){this.#i=!1,this.#l(),this.#r?.abort(),this.#r=void 0,this.#n=null}sync(){let e=this.#n;if(!e||this.#t.model.isComposing.get())return;let t=this.#t.model.draft.get();e.value!==t&&(this.#a=void 0,e.value=t)}#s(e,t,n){let r=this.#t.model.view.get().revision,i=Object.freeze({value:e,isComposing:t,inputType:n});return Bn(this.#e,i),this.#t.onInput?.(i),this.#t.model.view.get().revision===r}#c(){if(!this.#i)return;let e=this.#t.control();if(e===this.#n||(this.#l(),this.#r?.abort(),this.#n=e,!e))return;let t=e.ownerDocument.defaultView?.AbortController??globalThis.AbortController;this.#r=new t;let n={signal:this.#r.signal},r=this.#t.model;if(e.addEventListener(`compositionstart`,()=>{this.#a=void 0,r.startComposition(),r.setDraft(e.value),this.#e.requestUpdate()},n),e.addEventListener(`compositionend`,()=>{let t=e.value,n=r.hasDeferredValue.get();r.endComposition(t),this.#a=t,this.#s(t,!1,`insertCompositionText`)&&!n&&t!==r.value.get()&&this.#t.onCommit?.(t,`compositionend`),this.sync(),this.#e.requestUpdate()},n),e.addEventListener(`input`,t=>{let n=t;n.isComposing&&!r.isComposing.get()&&r.startComposition();let i=e.value;r.setDraft(i);let a=r.isComposing.get(),o=this.#s(i,a,n.inputType??``),s=!a&&i===this.#a;a||(this.#a=void 0),o&&!a&&!s&&i!==r.value.get()&&this.#t.onCommit?.(i,`input`),this.sync(),this.#e.requestUpdate()},n),e.addEventListener(`change`,()=>{r.isComposing.get()||(r.setDraft(e.value),e.value!==r.value.get()&&this.#t.onCommit?.(e.value,`change`),this.sync(),this.#e.requestUpdate())},n),!this.#o.has(e)&&(this.#o.add(e),(this.#t.adoptInitialValue?.(e)??e.value!==e.defaultValue)&&e.value!==r.draft.get())){let t=e.value;r.setDraft(t),this.#s(t,!1,`hydrate`)&&t!==r.value.get()&&this.#t.onCommit?.(t,`hydrate`)}}#l(){this.#t.model.isComposing.get()&&this.#t.model.endComposition(this.#n?.value),this.#a=void 0}};function Hn(e){return C`<div id="description" part="description" class="en-description"><slot name="description"><span class="en-description-fallback">${e||E}</span></slot></div>`}function Un(e=``){let t=new R.State(Object.freeze({value:e,draft:e,isComposing:!1,dirty:!1,revision:0,deferredAuthorWrite:!1})),n=e=>{let n=t.get(),r={...n,...e};return r.value===n.value&&r.draft===n.draft&&r.isComposing===n.isComposing&&r.deferredAuthorWrite===n.deferredAuthorWrite?!1:(t.set(Object.freeze({...r,dirty:r.value!==r.draft,revision:n.revision+1})),!0)},r=e=>t.get().isComposing?n({value:e,deferredAuthorWrite:!0}):n({value:e,draft:e,deferredAuthorWrite:!1});return{value:new R.Computed(()=>t.get().value),draft:new R.Computed(()=>t.get().draft),isComposing:new R.Computed(()=>t.get().isComposing),hasDeferredValue:new R.Computed(()=>t.get().deferredAuthorWrite),view:new R.Computed(()=>{let{deferredAuthorWrite:e,...n}=t.get();return Object.freeze(n)}),setValue:r,stageValue:e=>n({value:e}),setDraft:e=>n({draft:e}),startComposition:()=>n({isComposing:!0}),endComposition:e=>{let r=t.get();return n({draft:r.deferredAuthorWrite?r.value:e??r.draft,isComposing:!1,deferredAuthorWrite:!1})},acceptDraft:()=>!t.get().isComposing&&r(t.get().draft),reset:()=>r(e)}}var Wn={active:!1,lastError:null},Gn=class{original;name=`ReactionError`;constructor(e){this.original=e}},Kn=(e,t,n=Object.is)=>{let r=new R.Computed(e,{equals:n}),i=r.get(),a=async()=>{if(await 0,a===void 0)return;let e=r.get();if(!n(e,i))try{t(e,i)}catch(e){if(Wn)console.error(e),Wn.lastError=e;else throw new Gn(e)}finally{i=e}o.watch()},o=new R.subtle.Watcher(()=>a?.());return o.watch(r),()=>{o.unwatch(r),a=void 0}},qn=class{#e;#t;#n;#r=0;#i=!1;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}get snapshot(){return this.#t()}hostConnected(){if(this.#i)return;this.#n?.();let e=++this.#r;this.#n=Kn(this.#t,()=>{!this.#i&&e===this.#r&&this.#e.requestUpdate()}),this.#e.requestUpdate()}hostDisconnected(){++this.#r,this.#n?.(),this.#n=void 0}dispose(){this.#i=!0,this.hostDisconnected(),this.#e.removeController(this)}},Jn=[`badInput`,`customError`,`patternMismatch`,`rangeOverflow`,`rangeUnderflow`,`stepMismatch`,`tooLong`,`tooShort`,`typeMismatch`,`valueMissing`],Yn=class{#e;#t;#n=!1;constructor(e,t){this.#e=e,this.#t=t,e.addController(this)}get disabled(){return this.#n||(this.#t.disabled?.()??!1)}hostUpdated(){this.sync()}sync(){let{internals:e}=this.#t;if(typeof e.setFormValue!=`function`)return;let t=this.disabled?null:this.#t.value();e.setFormValue(t,this.#t.state?this.#t.state():t);let n=this.#t.control?.()??null;if(n&&(n.disabled=this.disabled),typeof e.setValidity!=`function`)return;if(this.disabled){e.setValidity({});return}let r=this.#t.validate?.();if(r){let t=Object.values(r.flags).some(Boolean);if(t&&!r.message)throw TypeError(`Invalid form state requires a localized validation message.`);e.setValidity(r.flags,t?r.message:``,r.anchor)}else if(n){let t={};for(let e of Jn)n.validity[e]&&(t[e]=!0);e.setValidity(t,n.validationMessage,n)}else e.setValidity({})}formDisabled(e){this.#n=e,this.sync(),this.#e.requestUpdate()}formReset(){this.#t.onReset(),this.sync(),this.#e.requestUpdate()}formStateRestore(e,t){this.#t.onRestore?.(e,t),this.sync(),this.#e.requestUpdate()}},q=o`clamp(0ms, ${z(`--en-duration-enter`)}, 500ms)`,J=o`clamp(0ms, ${z(`--en-duration-exit`)}, 500ms)`,Y=o`clamp(0px, ${z(`--en-motion-surface-offset`)}, 8px)`,Xn=o`clamp(.95, ${z(`--en-motion-surface-scale`)}, 1)`,Zn=o`var(--_en-surface-duration, 0ms) var(--_en-surface-ease, linear)`,Qn=o`opacity var(--_en-surface-opacity-duration, 0ms) var(--_en-surface-ease, linear), translate ${Zn}, scale ${Zn}, display ${Zn} allow-discrete, overlay ${Zn} allow-discrete`;function $n(e,t,n,r,i=o``){let a=o`:where(${e})${i}`,s=o`${t}${i}`,c=o`${n}${i}`;return o`
    @supports (transition-behavior: allow-discrete) and (overlay: auto) {
      ${a} {
        --_en-surface-duration: ${J};
        --_en-surface-opacity-duration: ${J};
        --_en-surface-ease: ${z(`--en-ease-exit`)};
        opacity: 0;
        transition: ${Qn};
      }
      ${s} {
        --_en-surface-duration: ${q};
        /* Modal and menu entry keep content opaque. Fade surfaces reverse
           from their current opacity when reopened during exit. */
        --_en-surface-opacity-duration: ${r===`fade`?q:o`0ms`};
        --_en-surface-ease: ${z(`--en-ease-enter`)};
        opacity: 1;
      }
      ${c} { pointer-events: none; }
      ${r===`elevation`?o`
        /* Opaque command content and its primary focus contour are immediate.
           Elevation adds entry paint without corrupting measured iPhone geometry. */
        @keyframes en-surface-elevation { from { box-shadow: none; } }
        ${s} { animation: en-surface-elevation ${q} ${z(`--en-ease-enter`)}; }
      `:o``}
      @starting-style { ${s} { opacity: ${r===`fade`?0:1}; } }
    }
    @media (prefers-reduced-motion: reduce) {
      ${a} { transition: none !important; animation: none !important; }
    }
    @media (forced-colors: active) {
      ${a} { animation: none; }
    }
  `}var er=o`
  ${$n(o`dialog:is(.en-dialog, .en-drawer)`,o`dialog:is(.en-dialog, .en-drawer)[open]`,o`dialog:is(.en-dialog, .en-drawer):not([open])`,`move`)}
  @supports (transition-behavior: allow-discrete) and (overlay: auto) {
    dialog:is(.en-dialog, .en-drawer) {
      --_en-surface-x: 0px;
      --_en-surface-y: ${Y};
      translate: var(--_en-surface-x) var(--_en-surface-y);
      scale: ${Xn};
    }
    /* Share modal travel distance; attachment selects its axis and sign.
       Keep the drawer unscaled so its attached edge stays flush. */
    dialog.en-drawer { --_en-surface-x: ${Y}; --_en-surface-y: 0px; scale: 1; }
    dialog.en-drawer:is([data-placement='start'], [data-placement='left']) { --_en-surface-x: calc(-1 * ${Y}); }
    dialog.en-drawer[data-placement='end']:dir(rtl) { --_en-surface-x: calc(-1 * ${Y}); }
    dialog.en-drawer[data-placement='start']:dir(rtl) { --_en-surface-x: ${Y}; }
    dialog.en-drawer:is([data-placement='top'], [data-placement='bottom']) { --_en-surface-x: 0px; --_en-surface-y: ${Y}; }
    dialog.en-drawer[data-placement='top'] { --_en-surface-y: calc(-1 * ${Y}); }
    dialog:is(.en-dialog, .en-drawer)[open] { translate: 0px 0px; scale: 1; }
    @starting-style {
      dialog:is(.en-dialog, .en-drawer)[open] {
        translate: var(--_en-surface-x) var(--_en-surface-y);
        scale: ${Xn};
      }
      dialog.en-drawer[open] { scale: 1; }
    }
    dialog:is(.en-dialog, .en-drawer)::backdrop {
      opacity: 0;
      transition: opacity ${J} ${z(`--en-ease-exit`)}, display ${J} allow-discrete, overlay ${J} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer)[open]::backdrop {
      opacity: 1;
      transition: opacity ${q} ${z(`--en-ease-enter`)}, display ${q} allow-discrete, overlay ${q} allow-discrete;
    }
    dialog:is(.en-dialog, .en-drawer):not([open])::backdrop { pointer-events: none; }
    @starting-style { dialog:is(.en-dialog, .en-drawer)[open]::backdrop { opacity: 0; } }
  }
  @media (prefers-reduced-motion: reduce) {
    dialog:is(.en-dialog, .en-drawer) { translate: none !important; scale: none !important; }
    dialog:is(.en-dialog, .en-drawer)::backdrop { transition: none !important; }
  }
`,tr=o`
  .en-radio {
    flex: none;
    inline-size: ${z(`--en-size-icon`)};
    block-size: ${z(`--en-size-icon`)};
    margin: 0;
    accent-color: ${z(`--en-color-action`)};
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)};
    border-radius: ${z(`--en-radius-pill`)};
    background: ${z(`--en-color-surface`)};
    cursor: pointer;
  }
  .en-radio:checked { border-color: ${B(`--en-radio-selected-color`,z(`--en-color-action`))}; }
  .en-radio:checked::before { content: ''; inline-size: ${z(`--en-size-choice-dot`)}; block-size: ${z(`--en-size-choice-dot`)}; border-radius: ${z(`--en-radius-pill`)}; background: ${B(`--en-radio-selected-color`,z(`--en-color-action`))}; }
  .en-radio:disabled { cursor: default; background: ${z(`--en-color-surface-subtle`)}; border-color: ${z(`--en-color-boundary`)}; }
  .en-radio:disabled::before { background: ${z(`--en-color-text-muted`)}; }
  @media (forced-colors: active) {
    .en-radio { accent-color: auto; background: Canvas; border-color: CanvasText; }
    .en-radio:checked { background: Canvas; border-color: CanvasText; }
    .en-radio:checked::before { background: CanvasText; }
    .en-radio:disabled { background: Canvas; border-color: GrayText; }
    .en-radio:disabled::before { background: GrayText; }
    .en-radio:focus-visible { outline-color: CanvasText; }
  }
`;function nr(e){return o`
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
      font-weight: ${B(`--en-option-font-weight`,o`inherit`)};
    }
    ${e.selected?o`${e.selected} {
      --_en-option-selected-background: ${B(`--en-option-selected-background`,B(`--en-option-background`,z(`--en-color-selected`)))};
      --_en-option-selected-color: ${B(`--en-option-selected-color`,B(`--en-option-color`,e.selectedColor??e.restColor))};
      font-weight: ${B(`--en-option-selected-font-weight`,B(`--en-option-font-weight`,z(`--en-font-label-strong-weight`)))};
    }`:o``}
    ${e.hover} {
      --_en-option-hover-background: ${B(`--en-option-hover-background`,B(`--en-option-background`,e.hoverBackground))};
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
      --_en-option-disabled-color: ${B(`--en-option-disabled-color`,B(`--en-option-color`,z(`--en-color-text-muted`)))};
    }
  `}var rr=o`
  block-size: ${z(`--en-size-range-track`)};
  border: 0;
  border-radius: ${z(`--en-radius-pill`)};
  background: ${z(`--en-color-boundary`)};
`,ir=o`
  box-sizing: border-box;
  inline-size: ${z(`--en-size-icon`)};
  block-size: ${z(`--en-size-icon`)};
  border: ${z(`--en-border-width`)} solid ${z(`--en-color-action`)};
  border-radius: ${z(`--en-radius-pill`)};
  background: ${z(`--en-color-action`)};
`,ar=o`outline: ${z(`--en-focus-width`)} solid ${z(`--en-color-focus`)}; outline-offset: ${z(`--en-focus-offset`)};`,or=o`
  @supports selector(input::-webkit-slider-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-webkit-slider-runnable-track { ${rr} }
    .en-range::-webkit-slider-thumb { appearance: none; ${ir} margin-block-start: calc((${z(`--en-size-range-track`)} - ${z(`--en-size-icon`)}) / 2); }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-webkit-slider-thumb { ${ar} }
    .en-range:disabled::-webkit-slider-thumb { background: ${z(`--en-color-text-muted`)}; border-color: ${z(`--en-color-text-muted`)}; }
    @media (forced-colors: active) {
      .en-range::-webkit-slider-runnable-track { background: ButtonText; }
      .en-range::-webkit-slider-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-webkit-slider-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-webkit-slider-thumb { outline-color: CanvasText; }
    }
  }
  @supports selector(input::-moz-range-thumb) {
    .en-range { appearance: none; background: none; cursor: pointer; }
    .en-range::-moz-range-track { ${rr} }
    .en-range::-moz-range-thumb { ${ir} }
    /* Exposed native thumbs own focus. A global halo must not reintroduce a
       rectangular range-host ring; native unsupported fallbacks keep that route. */
    .en-range, .en-range:focus-visible { box-shadow: none; }
    .en-range:focus-visible { outline: none; }
    .en-range:focus-visible::-moz-range-thumb { ${ar} }
    .en-range:disabled::-moz-range-thumb { background: ${z(`--en-color-text-muted`)}; border-color: ${z(`--en-color-text-muted`)}; }
    @media (forced-colors: active) {
      .en-range::-moz-range-track { background: ButtonText; }
      .en-range::-moz-range-thumb { background: Highlight; border-color: Highlight; }
      .en-range:disabled::-moz-range-thumb { background: GrayText; border-color: GrayText; }
      .en-range:focus-visible::-moz-range-thumb { outline-color: CanvasText; }
    }
  }
  .en-range:disabled { cursor: default; }
`,sr=o`
  .en-link {
    color: ${z(`--en-color-link`)};
    text-decoration: underline;
    text-underline-offset: ${z(`--en-space-0-5`)};
    overflow-wrap: break-word;
  }
  .en-link:visited { color: ${z(`--en-color-link`)}; }
`,cr=o`.en-link[aria-disabled='true'] { color: ${z(`--en-color-text-muted`)}; cursor: default; }`,lr=o`.en-link, .en-link:visited { color: LinkText; }`,ur=B(`--en-control-inline-padding`,B(`--en-input-inline-padding`,z(`--en-space-control-inline`))),dr=B(`--en-control-radius`,z(`--en-radius-control`)),fr=o`max(0px, ${dr} - ${z(`--en-border-width`)})`,pr=o`max(
  ${z(`--en-space-control-block`)},
  calc((var(--_en-text-control-block-size) - ${z(`--en-font-input-size`)} * ${z(`--en-font-input-line-height`)}) / 2 - ${z(`--en-border-width`)})
)`,mr=V(o`
  /* Compute on each consumer so local token/part overrides retain their scope. */
  ${pn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`)}
  ${mn(o`.en-control, .en-button, .en-input, .en-textarea, .en-select`)}
  ${hn(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
  /* Field tokens customize inputs without changing action and choice surfaces.
     Existing direct control overrides retain their higher precedence. */
  .en-input, .en-textarea, .en-select {
    padding-inline: ${ur};
    background: ${B(`--en-control-background`,B(`--en-input-background`,z(`--en-color-surface`)))};
    color: ${B(`--en-control-color`,B(`--en-input-color`,z(`--en-color-text`)))};
  }
  ${sn}
  ${sr}
  ${gn(o`:is(.en-button, .en-input, .en-textarea, .en-select, .en-control):is(:disabled, [aria-disabled='true'])`)}
  ${cr}
  .en-input, .en-textarea, .en-select {
    inline-size: 100%;
    font: ${z(`--en-font-input-weight`)} ${z(`--en-font-input-size`)} / ${z(`--en-font-input-line-height`)} ${z(`--en-font-input-family`)};
  }
  /* Use the shared text-field surface and target envelope around the native
     date editor. Keep its fields, separators and calendar-picker activation. */
  .en-input[type='date'] {
    -webkit-appearance: none;
    appearance: none;
    padding-block: ${pr};
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
  .en-input::placeholder, .en-textarea::placeholder { color: ${z(`--en-color-text-muted`)}; opacity: 1; }
  .en-text-input, .en-textarea { padding-block: ${pr}; }
  .en-textarea { resize: block; }
  .en-input[aria-invalid='true'], .en-textarea[aria-invalid='true'], .en-select[aria-invalid='true'], .en-control[data-invalid] {
    border-color: ${z(`--en-color-danger-text`)};
  }
  .en-input:user-invalid, .en-textarea:user-invalid, .en-select:user-invalid { border-color: ${z(`--en-color-danger-text`)}; }
  /* The text-field marker keeps stronger invalid geometry out of other native controls.
     Preserve border + padding on each edge, including scoped padding/base-border tokens. */
  .en-text-input:is([aria-invalid='true'], :user-invalid) {
    border-width: ${z(`--en-border-invalid-width`)};
    padding-block: max(0px, calc(${pr} + ${z(`--en-border-width`)} - ${z(`--en-border-invalid-width`)}));
    padding-inline: max(0px, calc(${ur} + ${z(`--en-border-width`)} - ${z(`--en-border-invalid-width`)}));
  }
  .en-input-group { display: flex; align-items: stretch; gap: ${z(`--en-space-1`)}; min-inline-size: 0; }
  .en-input-group > .en-input { flex: 1 1 auto; inline-size: 0; min-inline-size: 0; }
  .en-number-group {
    gap: 0;
    padding: 0;
    border: ${z(`--en-border-width`)} solid ${B(`--en-control-border-color`,z(`--en-color-boundary`))};
    border-radius: ${dr};
    background: ${B(`--en-control-background`,B(`--en-input-background`,z(`--en-color-surface`)))};
  }
  .en-number-group[data-invalid] { border-color: ${z(`--en-color-danger-text`)}; }
  .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${z(`--en-border-width`)}), ${z(`--en-size-target-min`)}); }
  .en-number-group > .en-number-input { border: 0; border-radius: 0; background: none; appearance: textfield; }
  .en-number-input::-webkit-inner-spin-button, .en-number-input::-webkit-outer-spin-button { appearance: none; margin: 0; }
  .en-number-step {
    flex: none;
    min-inline-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)});
    padding-inline: ${z(`--en-space-control-block`)};
    border: 0;
    border-inline-start: ${z(`--en-border-width`)} solid ${z(`--en-color-line`)};
    border-radius: 0;
    background: ${z(`--en-color-surface-subtle`)};
    color: ${z(`--en-color-text`)};
  }
  /* Match the frame's override as well as its token. Keep overflow visible so
     consumer-defined outward focus contours remain intact. */
  .en-number-step:last-child { border-start-end-radius: ${fr}; border-end-end-radius: ${fr}; }
  .en-number-step:first-child { border-inline-start: 0; border-inline-end: ${z(`--en-border-width`)} solid ${z(`--en-color-line`)}; border-start-start-radius: ${fr}; border-end-start-radius: ${fr}; }

  .en-color-control { cursor: pointer; padding: ${z(`--en-space-control-block`)}; block-size: var(--_en-text-control-block-size); }
  .en-color-control::-webkit-color-swatch-wrapper { padding: 0; }
  .en-color-control::-webkit-color-swatch { border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)}; border-radius: max(0px, ${z(`--en-radius-control`)} - ${z(`--en-space-control-block`)}); }
  .en-color-control::-moz-color-swatch { border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)}; border-radius: max(0px, ${z(`--en-radius-control`)} - ${z(`--en-space-control-block`)}); }
  ${tr}
  .en-checkbox, .en-switch {
    flex: none;
    inline-size: ${z(`--en-size-icon`)};
    block-size: ${z(`--en-size-icon`)};
    margin: 0;
    accent-color: ${z(`--en-color-action`)};
  }
  .en-checkbox {
    appearance: none;
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)};
    background: ${z(`--en-color-surface`)};
    cursor: pointer;
  }
  .en-checkbox { border-radius: ${z(`--en-radius-choice`)}; }
  .en-checkbox:checked, .en-checkbox:indeterminate { background: ${z(`--en-color-action`)}; border-color: ${z(`--en-color-action`)}; }
  .en-checkbox:checked::before {
    content: '';
    box-sizing: border-box;
    inline-size: ${z(`--en-size-choice-mark-inline`)};
    block-size: ${z(`--en-size-choice-mark-block`)};
    /* The check is directional artwork, not an inline-layout edge; never mirror it in RTL. */
    border-right: ${z(`--en-size-choice-mark-stroke`)} solid ${z(`--en-color-on-action`)};
    border-bottom: ${z(`--en-size-choice-mark-stroke`)} solid ${z(`--en-color-on-action`)};
    transform: rotate(45deg);
  }
  .en-checkbox:indeterminate::before { content: ''; inline-size: ${z(`--en-size-choice-mark-block`)}; block-size: 0; border: 0; border-block-end: ${z(`--en-size-choice-mark-stroke`)} solid ${z(`--en-color-on-action`)}; transform: none; }
  .en-checkbox:disabled { cursor: default; background: ${z(`--en-color-surface-subtle`)}; border-color: ${z(`--en-color-boundary`)}; }
  .en-checkbox:disabled::before { border-color: ${z(`--en-color-text-muted`)}; }
  .en-switch {
    position: relative;
    appearance: none;
    box-sizing: border-box;
    inline-size: ${z(`--en-size-switch-inline`)};
    block-size: ${z(`--en-size-switch-block`)};
    border: ${z(`--en-border-width`)} solid ${z(`--en-color-boundary`)};
    border-radius: ${z(`--en-radius-pill`)};
    background: ${z(`--en-color-surface-subtle`)};
    cursor: pointer;
  }
  .en-switch::before {
    content: '';
    position: absolute;
    inset-block-start: ${z(`--en-space-switch-inset`)};
    inset-inline-start: ${z(`--en-space-switch-inset`)};
    inline-size: ${z(`--en-size-switch-thumb`)};
    block-size: ${z(`--en-size-switch-thumb`)};
    border-radius: ${z(`--en-radius-pill`)};
    background: ${z(`--en-color-text-muted`)};
    transition: inset-inline-start ${z(`--en-duration-fast`)} ${z(`--en-ease-standard`)};
  }
  .en-switch:checked { background: ${z(`--en-color-action`)}; border-color: ${z(`--en-color-action`)}; }
  .en-switch:checked::before { inset-inline-start: calc(100% - ${z(`--en-size-switch-thumb`)} - ${z(`--en-space-switch-inset`)}); background: ${z(`--en-color-on-action`)}; }
  .en-switch:disabled { cursor: default; border-color: ${z(`--en-color-boundary`)}; background: ${z(`--en-color-surface-subtle`)}; }
  .en-switch:disabled::before { background: ${z(`--en-color-text-muted`)}; }
  .en-range { inline-size: 100%; min-inline-size: ${z(`--en-size-target-min`)}; min-block-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)}); margin: 0; accent-color: ${z(`--en-color-action`)}; }
  .en-range-row { display: flex; align-items: center; gap: ${z(`--en-space-3`)}; min-inline-size: 0; }
  .en-range-row > .en-range { flex: 1 1 auto; inline-size: 0; }
  .en-range-row[data-editable] { flex-wrap: wrap; }
  .en-range-row > .en-range-editor {
    flex: 0 1 calc(3 * ${z(`--en-size-control-min`)});
    inline-size: calc(3 * ${z(`--en-size-control-min`)});
    min-inline-size: min(100%, ${z(`--en-size-target-min`)});
    font-variant-numeric: tabular-nums;
  }
  /* The value axis alone becomes vertical. Labels, output and number editing
     retain the surrounding writing direction and normal text layout. */
  .en-range-row[data-orientation='vertical'] { flex-direction: column; flex-wrap: nowrap; }
  .en-range-row[data-orientation='vertical'] > .en-range {
    writing-mode: vertical-lr;
    direction: rtl;
    flex: none;
    inline-size: ${B(`--en-slider-length`,z(`--en-size-range-length`))};
    min-inline-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)});
    block-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)});
  }
  .en-range-row[data-orientation='vertical'] > .en-range-editor {
    flex: none;
    inline-size: min(100%, calc(3 * ${z(`--en-size-control-min`)}));
  }
  .en-range-error[data-pending] { visibility: hidden; }
  .en-range-row > output { flex: none; font-variant-numeric: tabular-nums; color: ${z(`--en-color-text`)}; }
  ${jn}
  ${Nn}
  ${on(o`.en-number-group > .en-number-input:focus-visible`,{family:`input`,inset:!0,halo:!1})}
  ${on(o`.en-number-group > .en-number-step:focus-visible`,{family:`button`,inset:!0,halo:!1})}
  ${or}
  @media (any-pointer: coarse) {
    ${pn(o`.en-button:not(.en-icon-button), .en-button[data-icon-only], .en-input, .en-textarea, .en-select, .en-number-input, .en-number-step, .en-color-control`,!0)}
    ${_n(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-range`)}
    .en-range-row[data-orientation='vertical'] > .en-range { min-inline-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-touch`)}); }
    ${hn(o`.en-button:not(.en-icon-button), .en-input, .en-textarea, .en-select`)}
    .en-color-control { block-size: var(--_en-text-control-block-size); }
    ${vn(o`.en-icon-button, .en-number-step`)}
    .en-number-group > :is(.en-number-input, .en-number-step) { min-block-size: max(calc(var(--_en-text-control-block-size) - 2 * ${z(`--en-border-width`)}), ${z(`--en-size-target-touch`)}); }
  }
  @media (prefers-reduced-motion: reduce) { ${yn(o`.en-button, .en-switch::before`)} }
  @media (forced-colors: active) {
    ${bn(o`.en-button, .en-control, .en-input, .en-textarea, .en-select, .en-number-group`)}
    ${lr}
    ${xn(o`:is(.en-button, .en-control, .en-input, .en-textarea, .en-select):is(:disabled, [aria-disabled='true']), .en-link[aria-disabled='true']`)}
    ${un}
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
`),hr=B(`--en-option-list-radius`,B(`--en-overlay-radius`,z(`--en-radius-container`))),gr=o`max(${B(`--en-option-list-padding`,B(`--en-overlay-padding`,z(`--en-space-1`)))}, ${W({family:`option`,inset:!0})})`,_r=o`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,vr=V(o`
  /* Styling the closed control does not replace its OS picker. Keep this
     fallback outside base-select; ordinary select pseudos are not portable. */
  @supports selector(:has(> .en-select)) {
    @supports not ((appearance: base-select) and selector(::picker(select))) {
      .en-select {
        -webkit-appearance: none;
        appearance: none;
        padding-inline-end: calc(${ur} + ${z(`--en-size-icon`)} + ${z(`--en-space-icon-label`)});
        min-block-size: max(var(--_en-text-control-block-size), calc(${z(`--en-size-icon`)} + 2 * ${z(`--en-space-control-block`)} + 2 * ${z(`--en-border-width`)}));
      }
      .en-field-focus-frame:has(> .en-select)::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset-inline-end: calc(${ur} + ${z(`--en-border-width`)});
        inset-block-start: 50%;
        translate: 0 -50%;
        inline-size: ${z(`--en-size-icon`)};
        block-size: ${z(`--en-size-icon`)};
        color: ${z(`--en-color-text-muted`)};
        background-color: currentColor;
        mask: ${_r} center / contain no-repeat;
        pointer-events: none;
      }
      @media (forced-colors: active) {
        .en-field-focus-frame:has(> .en-select)::before { forced-color-adjust: none; color: ButtonText; }
        .en-field-focus-frame:has(> .en-select:disabled)::before { color: GrayText; }
      }
    }
  }
  @supports (appearance: base-select) and selector(::picker(select)) {
    .en-select, .en-select::picker(select) { appearance: ${B(`--en-select-appearance`,o`base-select`)}; }
    .en-select { align-items: center; gap: ${z(`--en-space-icon-label`)}; }
    .en-select::picker(select) {
      padding: ${gr};
      border: ${z(`--en-border-width`)} solid ${B(`--en-option-list-border-color`,B(`--en-overlay-border-color`,z(`--en-color-boundary`)))};
      border-radius: ${hr};
      background: ${B(`--en-option-list-background`,B(`--en-overlay-background`,z(`--en-color-surface-raised`)))};
      color: ${B(`--en-option-list-color`,B(`--en-overlay-color`,z(`--en-color-text`)))};
      box-shadow: ${B(`--en-option-list-shadow`,z(`--en-shadow-overlay`))};
      max-block-size: min(${B(`--en-option-list-max-block-size`,B(`--en-overlay-max-block-size`,z(`--en-layout-panel-preferred`)))}, calc(100dvh - ${z(`--en-space-8`)}));
      overflow: auto;
    }
    ${$n(o`.en-select`,o`.en-select:open`,o`.en-select:not(:open)`,`fade`,o`::picker(select)`)}
    .en-select option {
      position: relative;
      min-block-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)});
      padding: ${B(`--en-option-block-padding`,z(`--en-space-control-block`))} ${B(`--en-option-inline-padding`,z(`--en-space-control-inline`))};
      border-radius: ${B(`--en-option-radius`,o`max(0px, ${hr} - ${gr} - ${z(`--en-border-width`)})`)};
    }
    .en-select option + option { margin-block-start: ${B(`--en-option-list-gap`,o`0px`)}; }
    ${nr({base:o`.en-select option`,selected:o`.en-select option:checked`,hover:o`.en-select option:not(:disabled):is(:hover, :focus-visible)`,pressed:o`.en-select option:not(:disabled):active`,disabled:o`.en-select option:disabled`,restBackground:o`transparent`,restColor:B(`--en-option-list-color`,B(`--en-overlay-color`,o`inherit`)),selectedColor:B(`--en-option-list-color`,B(`--en-overlay-color`,z(`--en-color-action-text`))),hoverBackground:z(`--en-color-selected`)})}
    .en-select option:not(:disabled):is(:hover, :focus-visible) { z-index: 1; }
    /* Native :active is pressed activation, not the combobox's keyboard candidate. */
    ${on(o`.en-select option:not(:disabled):is(:hover, :focus-visible)`,{family:`option`,inset:!0,restSelector:o`.en-select option`})}
    .en-select::picker-icon {
      content: '';
      inline-size: ${z(`--en-size-icon`)};
      block-size: ${z(`--en-size-icon`)};
      flex: none;
      color: ${z(`--en-color-text-muted`)};
      background-color: currentColor;
      mask: ${_r} center / contain no-repeat;
    }
    @media (any-pointer: coarse) { .en-select option { min-block-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-touch`)}); } }
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
`),yr=V(o`
  .en-field, .en-rating-field { --_en-field-gap: ${B(`--en-field-gap`,z(`--en-space-label-control`))}; }
  .en-field { display: flex; flex-direction: column; min-inline-size: 0; gap: 0; }
  .en-field > :not(:first-child):not(.en-description),
  .en-choice-content > :not(:first-child):not(.en-description) { margin-block-start: var(--_en-field-gap); }
  /* A fieldset legend already separates its first content through its margin. */
  .en-field > .en-legend + :not(.en-description) { margin-block-start: 0; }
  .en-label { display: block; color: ${z(`--en-color-text`)}; font-weight: ${z(`--en-font-label-strong-weight`)}; overflow-wrap: break-word; }
  .en-description, .en-error { margin: 0; font-size: ${z(`--en-font-ui-size`)}; line-height: ${z(`--en-font-body-line-height`)}; overflow-wrap: break-word; }
  /* No box or gap is created by the empty fallback. An assigned root remains
     present even when its light DOM is empty: it may render its own shadow. */
  .en-description { display: flow-root; color: ${z(`--en-color-text-muted`)}; }
  .en-description-fallback,
  .en-description > slot::slotted(:not([hidden])) { display: block; margin-block-start: var(--_en-field-gap); }
  .en-description-fallback:empty { display: none; }
  .en-error { color: ${z(`--en-color-danger-text`)}; }
  .en-choice { display: flex; align-items: center; gap: ${z(`--en-space-icon-label`)}; min-block-size: max(${z(`--en-size-control-min`)}, ${z(`--en-size-target-min`)}); min-inline-size: ${z(`--en-size-target-min`)}; cursor: pointer; }
  .en-choice > :where(.en-label, .en-choice-content) { min-inline-size: 0; }
  .en-choice-content { --_en-field-gap: ${B(`--en-field-gap`,z(`--en-space-control-description`))}; display: flex; flex-direction: column; gap: 0; }
  .en-fieldset { margin: 0; padding: 0; min-inline-size: 0; border: 0; }
  .en-legend { padding: 0; margin-block-end: ${z(`--en-space-label-control`)}; font-weight: ${z(`--en-font-label-strong-weight`)}; }
  .en-form-stack { display: flex; flex-direction: column; gap: ${z(`--en-space-fields`)}; }
  .en-validation-summary { padding: ${z(`--en-space-panel`)}; border: ${z(`--en-border-width`)} solid ${z(`--en-color-danger-text`)}; border-radius: ${z(`--en-radius-container`)}; }
  .en-validation-summary :where(ul, ol) { padding-inline-start: ${z(`--en-space-6`)}; }
  @media (any-pointer: coarse) { .en-choice { min-block-size: ${z(`--en-size-target-touch`)}; } }
  @media (forced-colors: active) { .en-label, .en-description, .en-error { color: CanvasText; } .en-validation-summary { border-color: CanvasText; } }
`),X=class extends Kt{static formAssociated=!0;static styles=[H,yr,mr,o`:host { display: block; }`];static properties={label:{type:String},description:{type:String},error:{type:String},value:{type:String,noAccessor:!0},name:{type:String,reflect:!0},disabled:{type:Boolean,reflect:!0},required:{type:Boolean,reflect:!0},placeholder:{type:String}};model=Un();signal=new qn(this,()=>this.model.view.get());internals;formAdapter;authorRevision=0;initialValue;showNativeError=!1;nativeErrorMessage=``;constructor(){super(),this.label=``,this.description=``,this.error=``,this.name=``,this.disabled=!1,this.required=!1,this.placeholder=``,this.internals=typeof this.attachInternals==`function`?this.attachInternals():void 0,this.internals&&(this.formAdapter=new Yn(this,{internals:this.internals,control:()=>this.controlNode,value:()=>this.submissionValue,state:()=>this.value,disabled:()=>this.disabled,validate:()=>this.validateAcceptedValue(),onReset:()=>{this.showNativeError=!1,this.value=this.initialValue??``},onRestore:e=>{typeof e==`string`&&(this.value=e)}})),this.addEventListener(`invalid`,()=>{this.showNativeError=!0,this.requestUpdate()})}get value(){return this.model.value.get()}set value(e){let t=this.value;this.authorRevision++,this.model.setValue(String(e??``)),this.reconcile(),this.syncForm(),this.requestUpdate(`value`,t)}get form(){return this.internals?.form??null}get labels(){return this.internals?.labels}get validity(){return this.internals?.validity??this.controlNode?.validity}get validationMessage(){return this.internals?.validationMessage??``}get willValidate(){return this.internals?.willValidate??!1}willUpdate(e){super.willUpdate(e),this.initialValue===void 0&&(this.initialValue=this.value)}focus(e){this.controlNode?.focus(e)}blur(){this.controlNode?.blur()}checkValidity(){return this.syncForm(),this.internals?.checkValidity?.()??this.controlNode?.checkValidity()??!0}reportValidity(){return this.syncForm(),this.internals?.reportValidity?.()??this.controlNode?.reportValidity()??!0}formResetCallback(){this.formAdapter?.formReset()}formDisabledCallback(e){this.formAdapter?.formDisabled(e)}formStateRestoreCallback(e,t){this.formAdapter?.formStateRestore(e,t)}get submissionValue(){return this.value}get isDisabled(){return this.formAdapter?.disabled??this.disabled}get defaultControlValue(){return this.initialValue??this.value}get controlNode(){return this.shadowRoot?.querySelector(`#control`)??null}get describedBy(){return this.visibleError?`description error`:`description`}get visibleError(){return this.error||(this.showNativeError?this.nativeErrorMessage:``)}get controlAriaInvalid(){return this.visibleError?`true`:E}renderControlFrame(){return C`<div class="en-field-focus-frame" part="focus-frame">${this.renderControl()}</div>`}get valueRevision(){return this.authorRevision}canCommitValue(e){return!0}stageValue(e){let t=this.value;this.model.stageValue(e),this.syncForm(),this.requestUpdate(`value`,t)}requestValue(e,t){this.isDisabled||zn(this,{previous:this.value,proposed:e,reason:t,getRevision:()=>this.authorRevision,canCommit:e=>this.canCommitValue(e),stage:e=>this.stageValue(e),rollback:e=>this.stageValue(e),commit:e=>{this.model.setValue(e),this.reconcile(),this.syncForm(),this.requestUpdate()}})}updated(e){super.updated(e),this.reconcile(),this.syncForm()}syncForm(){let e=this.nativeErrorMessage;this.formAdapter?.sync(),this.nativeErrorMessage=this.validationMessage,this.showNativeError&&e!==this.nativeErrorMessage&&this.requestUpdate()}validateAcceptedValue(){let e=this.controlNode;if(!e)return{flags:{}};let t=e.value===this.value?e:e.cloneNode(!0);t!==e&&(t.value=this.value),t.setCustomValidity(this.error);let n=t.validity;return{flags:{badInput:n.badInput,customError:n.customError,patternMismatch:n.patternMismatch,rangeOverflow:n.rangeOverflow,rangeUnderflow:n.rangeUnderflow,stepMismatch:n.stepMismatch,tooLong:n.tooLong,tooShort:n.tooShort,typeMismatch:n.typeMismatch,valueMissing:n.valueMissing},message:n.valid?``:t.validationMessage,anchor:e}}render(){return C`<div class="en-field" part="field" data-invalid=${this.visibleError?``:E}>
      <label class="en-label" part="label" for="control"><slot name="label">${this.label}</slot></label>
      ${this.renderControlFrame()}
      ${Hn(this.description)}
      ${this.visibleError?C`<div class="en-error" part="error" id="error">${this.visibleError}</div>`:E}
    </div>`}},Z=class extends X{static properties={...X.properties,readOnly:{type:Boolean,attribute:`readonly`,reflect:!0},autocomplete:{type:String},inputMode:{type:String,attribute:`inputmode`}};editing=new Vn(this,{model:this.model,control:()=>this.controlNode,onCommit:(e,t)=>{this.readOnly||this.requestValue(e,t)}});constructor(){super(),this.readOnly=!1,this.autocomplete=``,this.inputMode=``}reconcile(){this.editing?.sync()}select(){this.controlNode?.select()}},br=class extends Z{static properties={...Z.properties,min:{type:Number},max:{type:Number},step:{type:Number},decrementLabel:{type:String,attribute:`decrement-label`},incrementLabel:{type:String,attribute:`increment-label`}};constructor(){super(),this.min=void 0,this.max=void 0,this.step=1,this.decrementLabel=`Decrease value`,this.incrementLabel=`Increase value`}stepValue(e){let t=this.controlNode;if(!t||this.isDisabled||this.readOnly||this.model.isComposing.get())return;let n=t.cloneNode();n.value=t.value,e<0?n.stepDown():n.stepUp(),this.requestValue(n.value,e<0?`decrement`:`increment`)}renderControlFrame(){return this.renderControl()}renderControl(){let e=this.model.draft.get(),t=e===``?void 0:Number(e),n=this.isDisabled||this.readOnly||t!==void 0&&this.min!==void 0&&t<=this.min,r=this.isDisabled||this.readOnly||t!==void 0&&this.max!==void 0&&t>=this.max;return C`<div class="en-input-group en-number-group en-field-focus-frame" part="stepper focus-frame" data-invalid=${this.visibleError?``:E}>
      <button class="en-button en-button--quiet en-icon-button en-number-step en-number-decrement" part="decrement" type="button"
        ?disabled=${n} @click=${()=>this.stepValue(-1)}><span class="en-sr-only"><slot name="decrement-label">${this.decrementLabel}</slot></span><span aria-hidden="true">−</span></button>
      <input id="control" class="en-input en-number-input" part="control" type="number" name=${this.name}
        value=${this.defaultControlValue} min=${this.min??E} max=${this.max??E} step=${this.step}
        placeholder=${this.placeholder||E} autocomplete=${this.autocomplete||E}
        inputmode=${this.inputMode||E} ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
        aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>
      <button class="en-button en-button--quiet en-icon-button en-number-step en-number-increment" part="increment" type="button"
        ?disabled=${r} @click=${()=>this.stepValue(1)}><span class="en-sr-only"><slot name="increment-label">${this.incrementLabel}</slot></span><span aria-hidden="true">+</span></button>
    </div>`}};K(customElements,{tagName:`en-number-field`,elementClass:br});var xr=class extends Z{static properties={...Z.properties,type:{type:String},minLength:{type:Number,attribute:`minlength`},maxLength:{type:Number,attribute:`maxlength`},pattern:{type:String}};constructor(){super(),this.type=`text`,this.minLength=void 0,this.maxLength=void 0,this.pattern=``}renderControl(){return C`<input id="control" class="en-input en-text-input" part="control"
      type=${[`text`,`email`,`password`,`url`,`tel`].includes(this.type)?this.type:`text`} name=${this.name} value=${this.defaultControlValue}
      placeholder=${this.placeholder||E} autocomplete=${this.autocomplete||E}
      inputmode=${this.inputMode||E} minlength=${this.minLength??E}
      maxlength=${this.maxLength??E} pattern=${this.pattern||E}
      ?disabled=${this.isDisabled} ?readonly=${this.readOnly} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}>`}};K(customElements,{tagName:`en-text-field`,elementClass:xr});var Sr=`data-en-selection-children`,Cr=`en-selection-`,wr={select:`en-select-option`,segmented:`en-segmented-item`},Tr=e=>e.replace(/[\t\n\f\r ]+/g,` `).replace(/^ | $/g,``);function Er(e){return/^en-selection-(?:ssr|client)-(?:0|[1-9]\d*)$/.test(e)}function Dr(e,t){let n=new Set,r=new Set;return Object.freeze(t.map(t=>{let i=t.attributes,a=e=>Object.prototype.hasOwnProperty.call(i,e);if(t.tagName!==wr[e])throw TypeError(`Expected direct ${wr[e]} children.`);if(!t.key||r.has(t.key))throw TypeError(`Repeated or missing selection child key.`);if(r.add(t.key),!a(`value`)||e===`segmented`&&i.value===``)throw TypeError(`${wr[e]} requires an explicit ${e===`segmented`?`nonempty `:``}value.`);if(n.has(i.value))throw TypeError(`Selection child values must be unique.`);if(n.add(i.value),a(`selected`)||a(`checked`))throw TypeError(`Selection children do not own selected or checked state; set the parent value instead.`);if(a(`slot`)&&!(e===`segmented`&&Er(i.slot)))throw TypeError(`Selection child slot attributes are reserved for internal label projection.`);if(i.hidden?.toLowerCase()===`until-found`)throw TypeError(`Selection children do not support hidden=until-found.`);if(e===`segmented`&&(t.interactive||Or(t.tagName,i)))throw TypeError(`Segmented labels must contain noninteractive content only.`);if(e===`segmented`&&(a(`inert`)||i[`aria-hidden`]?.toLowerCase()===`true`))throw TypeError(`Segmented label roots must not be inert or aria-hidden; use hidden to make a choice unavailable.`);return Object.freeze({key:t.key,value:i.value,label:e===`select`?Tr(t.text)||Tr(i.label??``):``,disabled:a(`disabled`),hidden:a(`hidden`)})}))}function Or(e,t){let n=e=>Object.prototype.hasOwnProperty.call(t,e);return[`button`,`input`,`select`,`textarea`,`summary`,`iframe`,`embed`,`object`].includes(e)||(e===`a`||e===`area`)&&n(`href`)||(e===`audio`||e===`video`)&&n(`controls`)||n(`tabindex`)||n(`contenteditable`)&&t.contenteditable!==`false`}var kr=new WeakMap,Ar=new WeakMap,jr=class{#e;#t;#n=new WeakMap;#r=new Map;#i=0;#a;#o={active:!1,items:[],error:``};#s=!1;#c=!1;#l;constructor(e,t){if(this.#e=e,this.#t=t,kr.has(e))throw TypeError(`Only one selection child controller can own a host.`);kr.set(e,this),e.addController(this)}get view(){return this.#o}get initialValue(){return this.#l}prepare(e){if(e.version!==1||e.kind!==this.#t||typeof e.value!=`string`||!Array.isArray(e.items))throw TypeError(`Invalid selection child SSR snapshot.`);let t=new Set,n=new Set;for(let r of e.items){if(!r||typeof r.key!=`string`||!r.key||t.has(r.key)||typeof r.value!=`string`||n.has(r.value)||this.#t===`segmented`&&!r.value||typeof r.label!=`string`||typeof r.disabled!=`boolean`||typeof r.hidden!=`boolean`)throw TypeError(`Invalid selection child SSR record.`);t.add(r.key),n.add(r.value)}this.#o={active:e.items.length>0,items:e.items.map(e=>Object.freeze({...e})),error:``},this.#s=!0,this.#c=!0,this.#l=e.value,this.#e.requestUpdate()}hostConnected(){let e=this.#e.getAttribute(Sr);if(e!==null&&!this.#s){this.prepare(JSON.parse(e)),this.#c=!1;let t=this.#f();this.#o.items.forEach(e=>{let n=t.find(t=>this.#t===`segmented`?t.getAttribute(`slot`)===`en-selection-${e.key}`&&t.getAttribute(`value`)===e.value:t.getAttribute(`value`)===e.value);if(!n)return;this.#n.set(n,e.key);let r=n.getAttribute(`slot`);this.#t===`segmented`&&r===`en-selection-${e.key}`&&this.#u(n,r)})}this.#s||this.refresh();let t=this.#e.ownerDocument.defaultView?.MutationObserver;t&&(this.#a??=new t(()=>this.refresh()),this.#a.observe(this.#e,{subtree:!0,childList:!0,characterData:!0,attributes:!0,attributeFilter:[`value`,`label`,`disabled`,`hidden`,`selected`,`checked`,`slot`,`tabindex`,`contenteditable`,`href`,`controls`,`inert`,`aria-hidden`]}))}hostUpdated(){this.#s&&(this.#s=!1,this.#e.removeAttribute(Sr)),this.refresh()}hostDisconnected(){this.#a?.disconnect();for(let[e,t]of this.#r)this.#d(e,t)}#u(e,t){Ar.set(e,this),this.#r.set(e,t),e.getAttribute(`slot`)!==t&&e.setAttribute(`slot`,t)}#d(e,t){Ar.get(e)===this&&(e.getAttribute(`slot`)===t&&e.removeAttribute(`slot`),Ar.delete(e)),this.#r.delete(e)}#f(){return[...this.#e.children??[]].filter(e=>e.localName===wr[this.#t])}current(){if(this.#c)return this.#o;let e=this.#f();if(!e.length)return{active:!1,items:[],error:``};try{let t=e.map(e=>{let t=this.#n.get(e);t||(t=`client-${++this.#i}`,this.#n.set(e,t));let n=Object.fromEntries([...e.attributes].map(e=>[e.name,e.value])),r=this.#r.get(e);if(r!==void 0&&Ar.get(e)===this){if(n.slot!==r)throw TypeError(`Do not replace or remove an internally owned selection child slot.`);delete n.slot}let i=this.#t===`segmented`&&[...e.querySelectorAll(`*`)].some(e=>Or(e.localName,Object.fromEntries([...e.attributes].map(e=>[e.name,e.value]))));return{key:t,tagName:e.localName,attributes:n,text:e.textContent??``,interactive:i}});return{active:!0,items:Dr(this.#t,t),error:``}}catch(e){return{active:!0,items:[],error:e instanceof Error?e.message:String(e)}}}refresh(){if(this.#s)return;let e=this.current(),t=this.#f();for(let[e,n]of this.#r)t.includes(e)||this.#d(e,n);!e.error&&this.#t===`segmented`&&t.forEach((t,n)=>{let r=`${Cr}${e.items[n].key}`;this.#u(t,r)}),JSON.stringify(e)!==JSON.stringify(this.#o)&&(this.#o=e,this.#e.requestUpdate())}},Mr=class extends X{static styles=[...X.styles,vr];static properties={...X.properties,items:{attribute:!1}};childOptions=new jr(this,`select`);hydrationChoice=this.captureHydrationChoice();hydrationRevision=0;constructor(){super(),this.items=[]}connectedCallback(){this.hydrationRevision=this.valueRevision,super.connectedCallback()}captureHydrationChoice(){let e=this.shadowRoot?.querySelector(`#control`);if(e&&this.hasAttribute(`data-en-selection-children`))return{value:e.value,baseline:[...e.options].find(e=>e.defaultSelected)?.value??[...e.options].find(e=>!e.disabled)?.value??``}}get effectiveItems(){return this.childOptions.view.active?this.childOptions.view.items:this.items}currentItems(){let e=this.childOptions.current();return e.active?e.items:this.items}get visibleError(){return this.childOptions?.view.error||super.visibleError}get submissionValue(){return this.value===``&&this.placeholder?``:this.currentItems().some(e=>e.value===this.value&&!e.disabled&&!e.hidden)?this.value:null}canCommitValue(e){return!this.isDisabled&&(e===``&&!!this.placeholder||this.currentItems().some(t=>t.value===e&&!t.disabled&&!t.hidden))}validateAcceptedValue(){let e=super.validateAcceptedValue(),t=this.childOptions?.current().error;if(t)return{...e,flags:{...e.flags,customError:!0},message:t};if(this.required&&this.submissionValue===null){let t=this.controlNode?.cloneNode(!0);return t&&(t.selectedIndex=-1,t.setCustomValidity(``)),{...e,flags:{...e.flags,valueMissing:!0},message:this.error||t?.validationMessage||`Please select an option.`}}return e}willUpdate(e){super.willUpdate(e);let t=this.hydrationChoice;t&&(this.hydrationChoice=void 0,this.valueRevision===this.hydrationRevision&&this.value===this.childOptions.initialValue&&t.value!==t.baseline&&this.requestValue(t.value,`hydrate`))}reconcile(){let e=this.controlNode;if(this.hydrationChoice&&!this.hasUpdated)return;let t=this.model.draft.get();e&&e.value!==t&&(e.value=t)}onInput(e){let t=e.target.value;this.model.setDraft(t),Bn(this,{value:t,isComposing:!1,inputType:`insertReplacementText`})}onChange(e){let t=e.target.value;this.model.setDraft(t),this.requestValue(t,`change`),this.model.setValue(this.value),this.reconcile(),this.syncForm()}renderControl(){let e=this.effectiveItems,t=!this.hasUpdated&&this.childOptions.initialValue!==void 0?this.childOptions.initialValue:this.defaultControlValue,n=!this.placeholder&&e.length>0&&!e.some(e=>e.value===t);return C`<select id="control" class="en-select" part="control" name=${this.name}
      ?disabled=${this.isDisabled} ?required=${this.required}
      aria-describedby=${this.describedBy} aria-invalid=${this.controlAriaInvalid}
      @input=${this.onInput} @change=${this.onChange}>
      ${this.placeholder?C`<option part="option" value="" ?selected=${t===``}>${this.placeholder}</option>`:n?C`<option value="" selected disabled hidden></option>`:E}
      ${Ye(e,e=>e.key??e.value,e=>C`<option part="option" value=${e.value} ?selected=${e.value===t}
        ?disabled=${e.disabled} ?hidden=${e.hidden}>${e.label||E}</option>`)}
    </select>`}},Nr=class extends A{staticStyles=new Wt(this);static properties={value:{noAccessor:!0,reflect:!0,useDefault:!0},disabled:{type:Boolean,noAccessor:!0,reflect:!0,useDefault:!0},label:{type:String,noAccessor:!0,reflect:!0,useDefault:!0}};#e=``;get value(){return this.#e}set value(e){let t=this.#e;this.#e=String(e??``),this.getAttribute(`value`)!==this.#e&&this.setAttribute(`value`,this.#e);let n=this.getAttribute(`value`)===this.#e?void 0:Object.assign(Object.create(this.constructor.getPropertyOptions(`value`)),{hasChanged:()=>!0});this.requestUpdate(`value`,t,n)}#t=!1;get disabled(){return this.#t}set disabled(e){let t=this.#t;this.#t=!!e,this.hasAttribute(`disabled`)!==this.#t&&this.toggleAttribute(`disabled`,this.#t),this.requestUpdate(`disabled`,t)}#n=``;get label(){return this.#n}set label(e){let t=this.#n;this.#n=String(e??``),this.getAttribute(`label`)!==this.#n&&this.setAttribute(`label`,this.#n),this.requestUpdate(`label`,t)}};K(customElements,{tagName:`en-select`,elementClass:Mr,dependencies:[{tagName:`en-select-option`,elementClass:class extends Nr{render(){return E}}}]});function Q(e,t){e.inert===t&&(e.inert=!t)}function Pr(e){let t=e.currentTarget;e.target===t&&(e.newState===`open`&&Q(t,!0),queueMicrotask(()=>{if(!t.isConnected)return;let e=t.localName===`dialog`?t.open:t.matches(`:popover-open`);Q(t,e)}))}var Fr=`(width < ${Jt(`--en-layout-dialog-collapse`)})`,Ir=V(o`
  .en-dialog, .en-drawer, .en-popover, .en-tooltip {
    box-sizing: border-box;
    min-inline-size: 0;
    max-inline-size: min(${B(`--en-overlay-max-inline-size`,z(`--en-layout-form-max`))}, calc(100% - ${z(`--en-space-8`)}));
    max-block-size: ${B(`--en-overlay-max-block-size`,o`calc(100dvh - ${z(`--en-space-8`)})`)};
    padding: ${B(`--en-overlay-padding`,z(`--en-space-panel`))};
    border: ${z(`--en-border-width`)} solid ${B(`--en-overlay-border-color`,z(`--en-color-boundary`))};
    border-radius: ${B(`--en-overlay-radius`,z(`--en-radius-dialog`))};
    background: ${B(`--en-overlay-background`,z(`--en-color-surface-raised`))};
    color: ${B(`--en-overlay-color`,z(`--en-color-text`))};
    font: inherit;
    text-align: start;
    overflow: auto;
    box-shadow: ${z(`--en-shadow-overlay`)};
  }
  ${$n(o`.en-popover[popover]`,o`.en-popover:popover-open`,o`.en-popover[popover]:not(:popover-open)`,`fade`)}
  ${$n(o`.en-tooltip[popover]`,o`.en-tooltip:popover-open`,o`.en-tooltip[popover]:not(:popover-open)`,`fade`)}
  ${er}
  .en-dialog { position: fixed; inset: 0; margin: auto; box-shadow: ${z(`--en-shadow-dialog`)}; }
  dialog.en-dialog, dialog.en-drawer { flex-direction: column; gap: ${z(`--en-space-4`)}; }
  dialog.en-dialog[open], dialog.en-drawer[open] { display: flex; }
  dialog.en-dialog:not([open]), dialog.en-drawer:not([open]) { display: none; }
  .en-dialog::backdrop, .en-drawer::backdrop { background: ${z(`--en-color-scrim`)}; }
  .en-overlay-header, .en-overlay-footer { display: flex; align-items: center; flex-wrap: wrap; gap: ${z(`--en-space-3`)}; min-inline-size: 0; }
  .en-overlay-header { justify-content: space-between; }
  .en-overlay-footer { justify-content: flex-end; gap: ${z(`--en-space-actions`)}; }
  .en-overlay-header > slot, .en-overlay-footer > slot { display: contents; }
  .en-overlay-body {
    --_en-overlay-focus-clearance: ${an};
    min-inline-size: 0;
    min-block-size: 0;
    /* Expand the scrollport without moving content or changing the surrounding gaps. */
    margin: calc(0px - var(--_en-overlay-focus-clearance));
    padding: var(--_en-overlay-focus-clearance);
    scroll-padding: var(--_en-overlay-focus-clearance);
    overflow: auto;
  }
  .en-overlay-close { margin-inline-start: auto; }
  .en-popover { position: fixed; display: flex; flex-direction: column; margin: 0; row-gap: ${z(`--en-space-4`)}; border-radius: ${B(`--en-overlay-radius`,z(`--en-radius-container`))}; }
  [popover].en-popover:not(:popover-open), [popover].en-tooltip:not(:popover-open) { display: none; }
  .en-tooltip { position: fixed; margin: 0; row-gap: ${z(`--en-space-2`)}; padding: ${B(`--en-overlay-padding`,z(`--en-space-2`))}; border-radius: ${B(`--en-overlay-radius`,z(`--en-radius-control`))}; overflow-wrap: break-word; }
  /* An outside separator is clipped at viewport-flush edges, even for a drawer
     that fills the whole viewport. Keep it separate from the immediate focus cue. */
  :where(.en-drawer) { outline: ${z(`--en-border-width`)} solid ${B(`--en-overlay-border-color`,z(`--en-color-boundary`))}; outline-offset: 0; }
  ${G(o`:where(.en-dialog, .en-drawer)`,{family:`overlay`,baseShadow:z(`--en-shadow-dialog`),baseTransitions:Qn})}
  ${G(o`.en-popover`,{family:`overlay`,baseShadow:z(`--en-shadow-overlay`),baseTransitions:Qn})}
  .en-drawer {
    position: fixed;
    margin: 0;
    inset: auto;
    inset-block: 0;
    inset-inline-end: 0;
    inline-size: min(${B(`--en-overlay-max-inline-size`,z(`--en-layout-form-max`))}, 100%);
    max-inline-size: 100%;
    block-size: 100%;
    max-block-size: 100%;
    border-radius: 0;
    border-width: 0;
    box-shadow: ${z(`--en-shadow-dialog`)};
  }
  .en-drawer[data-placement='start'] { inset-inline-end: auto; inset-inline-start: 0; }
  .en-drawer[data-placement='left'] { inset-inline: auto; left: 0; right: auto; }
  .en-drawer[data-placement='right'] { inset-inline: auto; left: auto; right: 0; }
  .en-drawer[data-placement='top'], .en-drawer[data-placement='bottom'] { inset-inline: 0; inline-size: 100%; block-size: auto; max-block-size: ${B(`--en-overlay-max-block-size`,o`calc(100dvh - ${z(`--en-space-8`)})`)}; }
  .en-drawer[data-placement='top'] { inset-block-start: 0; inset-block-end: auto; }
  .en-drawer[data-placement='bottom'] { inset-block-start: auto; inset-block-end: 0; }
  @media (forced-colors: active) {
    .en-dialog, .en-drawer, .en-popover, .en-tooltip { color: CanvasText; background: Canvas; border-color: CanvasText; box-shadow: none; }
    :where(.en-drawer) { outline-color: CanvasText; }
    :where(.en-dialog, .en-drawer, .en-popover):focus-visible { outline-color: Highlight; }
  }
`);function Lr(e){return C`
    <dialog class=${e.surfaceClass} part=${e.surfacePart??`surface`} data-placement=${e.placement}
      aria-labelledby="en-overlay-heading" closedby=${e.closedBy}
      inert @beforetoggle=${Pr} @cancel=${e.cancel} @close=${e.close}
      @pointerdown=${e.pointerDown} @pointerup=${e.pointerUp}
      @pointercancel=${e.pointerCancel} @keydown=${e.keyDown}>
      <div class="en-overlay-header" part="header">
        <h2 class="en-heading-small" id="en-overlay-heading" part="heading"><slot name="label">${e.label}</slot></h2>
        ${e.dismissible?C`<button class="en-button en-button--quiet en-icon-button en-overlay-close" part="close" type="button"
          aria-label=${e.closeLabel} @click=${e.dismiss}><span aria-hidden="true">×</span></button>`:null}
      </div>
      <div class="en-overlay-body" part="body">${e.body??C`<slot></slot>`}</div>
      ${e.footer===E?E:C`<div class="en-overlay-footer" part="footer">${e.footer??C`<slot name="footer"></slot>`}</div>`}
    </dialog>`}function Rr(e){let t=e.activeElement;for(;t?.shadowRoot?.activeElement;)t=t.shadowRoot.activeElement;return t}function zr(e){if(!e?.isConnected||e.matches(`:disabled, [hidden], [aria-disabled="true"]`))return;let t=e;for(;t;){if(`inert`in t&&(t.inert||t.hidden))return;t=t.parentNode??(`host`in t?t.host:null)}e.getClientRects().length&&e.focus({preventScroll:!0})}K(customElements,{tagName:`en-dialog`,elementClass:class extends Kt{static properties={open:{type:Boolean,reflect:!0,noAccessor:!0},label:{type:String},closeLabel:{type:String,attribute:`close-label`},closedBy:{type:String,attribute:`closedby`,reflect:!0,noAccessor:!0},dismissible:{type:Boolean},backdropDismiss:{type:Boolean,attribute:`backdrop-dismiss`,noAccessor:!0},presentation:{type:String,reflect:!0},responsiveQuery:{type:String,attribute:`responsive-query`}};static styles=[H,en,mr,Ir];#e=!1;#t=0;#n=0;#r=0;#i=!1;#a=null;#o=null;#s=`close-request`;#c=`closerequest`;#l=null;#u=``;#d=!1;get open(){return this.#e}set open(e){let t=this.#e;this.#e=!!e,this.#t++,this.#n++,this.#e&&!this.dialog?.open&&(this.#i=!1),this.requestUpdate(`open`,t)}get closedBy(){return this.#c}set closedBy(e){let t=this.#c;this.#c=e===`any`||e===`none`?e:`closerequest`,this.requestUpdate(`closedBy`,t),this.requestUpdate(`backdropDismiss`,t===`any`)}get backdropDismiss(){return this.closedBy===`any`}set backdropDismiss(e){this.closedBy=e?`any`:`closerequest`}constructor(){super(),this.label=``,this.closeLabel=`Close`,this.dismissible=!0,this.presentation=`dialog`,this.responsiveQuery=Fr}show(e=`programmatic`){return this.requestOpen(!0,e)}hide(e=`programmatic`){return this.requestOpen(!1,e)}requestOpen(e,t){if(e===this.open)return`unchanged`;let n=this.open,r=this.#i;this.#r++;try{return zn(this,{previous:n,proposed:e,reason:t,getRevision:()=>this.#t,stage:e=>{this.#e=e,e&&!this.dialog?.open&&(this.#i=!1)},rollback:t=>{this.#e=t,this.#i=r,this.requestUpdate(`open`,e)},commit:()=>{this.#n++,this.requestUpdate(`open`,n)}})}finally{this.#r--,this.#r||this.requestUpdate(`open`,n)}}get openRevision(){return this.#n}get surfaceClass(){return this.#d?`en-drawer`:`en-dialog`}get placement(){return this.#d?`bottom`:``}get dialog(){return this.renderRoot?.querySelector(`dialog`)??null}get effectiveClosedBy(){return this.dismissible?this.closedBy:`none`}get supportsNativeClosedBy(){let e=this.ownerDocument?.defaultView?.HTMLDialogElement?.prototype;return e!==void 0&&`closedBy`in e}connectedCallback(){super.connectedCallback(),this.hasUpdated&&this.observePresentation(),this.updateComplete.then(()=>{this.isConnected&&this.syncDialog()})}disconnectedCallback(){this.#i=!1,this.dialog?.close(),this.#a=null,this.#o=null,this.stopObservingPresentation(),super.disconnectedCallback()}updated(e){this.observePresentation(),this.syncDialog()}observePresentation(){let e=this.ownerDocument?.defaultView;if(!this.isConnected||!e?.matchMedia)return;if(this.presentation!==`responsive`){this.stopObservingPresentation(),this.setCompactPresentation(!1);return}let t=this.responsiveQuery.trim()||Fr;this.#l&&this.#u===t||(this.stopObservingPresentation(),this.#u=t,this.#l=e.matchMedia(t),this.#l.addEventListener(`change`,this.#f),this.setCompactPresentation(this.#l.matches))}stopObservingPresentation(){this.#l?.removeEventListener(`change`,this.#f),this.#l=null,this.#u=``}setCompactPresentation(e){let t=this.#d;t!==e&&(this.#d=e,this.requestUpdate(`compactPresentation`,t))}#f=e=>{this.setCompactPresentation(e.matches)};syncDialog(){let e=this.dialog;if(!(!e||!this.isConnected||this.#r)){if(this.#i&&!e.open){this.reconcileNativeClose();return}if(this.open&&!e.open){let t=Rr(this.ownerDocument);this.#a=t&&`focus`in t?t:null,Q(e,!0),e.showModal(),this.#i=!0}else if(!this.open&&e.open){let t=Rr(this.ownerDocument),n=t===this||t===e||t!==null&&e.contains(t);this.#i=!1,e.close(),Q(e,!1),n&&zr(this.#a),this.#a=null}}}#p=e=>{e.preventDefault();let t=this.#s;this.#s=`close-request`,this.effectiveClosedBy!==`none`&&(t!==`backdrop`||this.effectiveClosedBy===`any`)&&this.hide(t)};#m=()=>{this.isConnected&&this.#i&&!this.dialog?.open&&this.reconcileNativeClose()};reconcileNativeClose(){this.#i=!1,this.dialog&&Q(this.dialog,!1),this.open=!1,this.#a=null}#h(e){let t=this.dialog;if(!t||e.target!==t)return!1;let n=t.getBoundingClientRect();return e.clientX<n.left||e.clientX>n.right||e.clientY<n.top||e.clientY>n.bottom}#g=e=>{let t=this.#h(e);this.#o=t&&e.isPrimary&&e.button===0?e.pointerId:null,this.#s=t?`backdrop`:`close-request`};#_=e=>{let t=this.#o===e.pointerId&&this.#h(e);this.#o=null,this.#s=t?`backdrop`:`close-request`,t&&this.effectiveClosedBy===`any`&&!this.supportsNativeClosedBy&&this.hide(`backdrop`),queueMicrotask(()=>{this.#s=`close-request`})};#v=()=>{this.#o=null,this.#s=`close-request`};#y=e=>{e.key===`Escape`&&!e.defaultPrevented&&(this.#s=`escape`)};get dialogView(){return{surfaceClass:this.surfaceClass,placement:this.#d?`bottom`:this.placement,label:this.label,closeLabel:this.closeLabel,dismissible:this.dismissible,closedBy:this.supportsNativeClosedBy?this.effectiveClosedBy:`closerequest`,cancel:this.#p,close:this.#m,dismiss:()=>this.hide(`close-button`),pointerDown:this.#g,pointerUp:this.#_,pointerCancel:this.#v,keyDown:this.#y}}render(){return Lr(this.dialogView)}}});var Br=Object.freeze([Object.freeze({id:`work`,name:`Work`,duration:40,cue:`work`}),Object.freeze({id:`rest`,name:`Rest`,duration:5,cue:`rest`})]),Vr=180,Hr=[`G4`,`D4`,`D4`,`G4`,`D4`];function Ur(e){if(e.length===0)throw Error(`Add at least one interval.`);let t=new Set;return Object.freeze(e.map(e=>{if(!e.id||t.has(e.id))throw Error(`Intervals need unique IDs.`);if(!e.name.trim())throw Error(`Give each interval a name.`);if(!Number.isFinite(e.duration)||e.duration<1)throw Error(`Interval durations must be at least one second.`);if(e.cue!==`work`&&e.cue!==`rest`)throw Error(`Choose an interval sound.`);return t.add(e.id),Object.freeze({...e,name:e.name.trim()})}))}var Wr=class{segments;status=new R.State(`idle`);index=new R.State(0);round=new R.State(1);remainingMs;muted=new R.State(!1);activeSegment;nextSegment;totalDuration;elapsedProgress;now;audio;autoTick;deadlineMs=0;interval;scheduledNotes=new Map;constructor(e={}){let t=Ur(e.segments??Br);this.segments=new R.State(t),this.remainingMs=new R.State(t[0].duration*1e3),this.now=e.now??(()=>performance.now()),this.audio=e.audio,this.autoTick=e.autoTick??!0,this.activeSegment=new R.Computed(()=>this.segments.get()[this.index.get()]),this.nextSegment=new R.Computed(()=>{let e=this.segments.get();return e[(this.index.get()+1)%e.length]}),this.totalDuration=new R.Computed(()=>this.segments.get().reduce((e,t)=>e+t.duration,0)),this.elapsedProgress=new R.Computed(()=>Math.max(0,Math.min(1,1-this.remainingMs.get()/(this.activeSegment.get().duration*1e3))))}start(){if(this.status.get()===`running`)return;let e=this.now();this.deadlineMs=e+this.remainingMs.get(),this.status.set(`running`),this.scheduleAudio(e),this.autoTick&&(this.interval=setInterval(()=>this.tick(),25))}pause(){this.status.get()===`running`&&(this.tick(),this.status.set(`paused`),this.stopTicker(),this.cancelAudio())}reset(){this.stopTicker(),this.cancelAudio(),this.status.set(`idle`),this.index.set(0),this.round.set(1),this.remainingMs.set(this.segments.get()[0].duration*1e3)}skip(){let e=this.now();this.status.get()===`running`&&this.updateClock(e),this.cancelAudio();let t=(this.index.get()+1)%this.segments.get().length;this.index.set(t),t===0&&this.round.set(this.round.get()+1);let n=this.activeSegment.get().duration*1e3;this.remainingMs.set(n),this.status.get()===`running`&&(this.deadlineMs=e+n,this.scheduleAudio(e))}removeSegment(e){let t=this.segments.get(),n=t.findIndex(t=>t.id===e);if(n===-1||t.length===1)return!1;let r=this.now(),i=this.status.get()===`running`;i&&this.updateClock(r);let a=this.index.get(),o=n===a,s=Object.freeze(t.filter(t=>t.id!==e));if(this.cancelAudio(),o){let e=a===t.length-1;this.index.set(e?0:a),this.segments.set(s),e&&this.round.set(this.round.get()+1);let n=this.activeSegment.get().duration*1e3;this.remainingMs.set(n),i&&(this.deadlineMs=r+n)}else this.index.set(n<a?a-1:a),this.segments.set(s);return i&&this.scheduleAudio(r),!0}replaceSegments(e){let t=Ur(e);this.stopTicker(),this.cancelAudio(),this.status.set(`idle`),this.index.set(0),this.segments.set(t),this.round.set(1),this.remainingMs.set(t[0].duration*1e3)}setMuted(e){if(this.muted.get()!==e&&(this.muted.set(e),this.cancelAudio(),!e&&this.status.get()===`running`)){let e=this.now();this.updateClock(e),this.scheduleAudio(e)}}tick(){if(this.status.get()!==`running`)return;let e=this.now();this.updateClock(e),this.scheduleAudio(e)}dispose(){this.status.get()===`running`&&this.pause(),this.stopTicker(),this.cancelAudio()}updateClock(e){let t=this.segments.get(),n=this.index.get(),r=this.round.get();if(e>=this.deadlineMs){let i=this.totalDuration.get()*1e3,a=Math.floor((e-this.deadlineMs)/i);for(this.deadlineMs+=a*i,r+=a;e>=this.deadlineMs;)n=(n+1)%t.length,n===0&&(r+=1),this.deadlineMs+=t[n].duration*1e3}this.index.set(n),this.round.set(r),this.remainingMs.set(Math.max(0,this.deadlineMs-e))}scheduleAudio(e){if(!this.audio||this.muted.get())return;for(let[t,n]of this.scheduledNotes)n<e&&this.scheduledNotes.delete(t);let t=this.segments.get(),n=this.index.get(),r=this.deadlineMs,i=[];for(let a=0;a<t.length*2+1;a+=1){let a=t[n],o=r-a.duration*1e3,s=a.cue===`work`?Hr.map((e,t)=>({atMs:r+t*Vr,note:e,durationMs:Vr})):[2,1,0].map(e=>({atMs:r-e*1e3,note:e===0?`C5`:`C4`,durationMs:Vr}));for(let[t,a]of s.entries()){let s=`${r}:${n}:${t}`;a.atMs>=e&&a.atMs>=o&&!this.scheduledNotes.has(s)&&(i.push(a),this.scheduledNotes.set(s,a.atMs+a.durationMs))}n=(n+1)%t.length,r+=t[n].duration*1e3}i.length&&this.audio.schedule(i,e)}cancelAudio(){this.audio?.cancel(),this.scheduledNotes.clear()}stopTicker(){this.interval!==void 0&&clearInterval(this.interval),this.interval=void 0}},Gr={G4:391.99543598174927,D4:293.6647679174076,C4:261.6255653005986,C5:523.2511306011972},Kr=class{context;contextFactory;voices=new Map;failed=!1;constructor(e={}){let t=globalThis.AudioContext??globalThis.webkitAudioContext;this.contextFactory=e.contextFactory??(t?()=>new t:void 0)}get available(){return!!this.contextFactory&&!this.failed}get unlocked(){return this.context?.state===`running`}async unlock(){if(!this.available)return!1;try{return this.context??=this.contextFactory(),this.context.state===`suspended`&&await this.context.resume(),this.context.state===`running`}catch{return this.failed=!0,!1}}schedule(e,t){let n=this.context;if(!n||n.state!==`running`)return;let r=n.currentTime;for(let i of e){if(i.atMs<t||i.durationMs<=0)continue;let e=r+(i.atMs-t)/1e3,a=i.durationMs/1e3,o=n.createOscillator(),s=n.createGain();o.type=`sine`,o.frequency.setValueAtTime(Gr[i.note],e),s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.22,e+Math.min(.012,a/5)),s.gain.exponentialRampToValueAtTime(.035,e+a*.7),s.gain.linearRampToValueAtTime(0,e+a),o.connect(s),s.connect(n.destination),this.voices.set(o,s),o.onended=()=>{o.disconnect(),s.disconnect(),this.voices.delete(o)},o.start(e),o.stop(e+a)}}cancel(){for(let[e,t]of this.voices){t.gain.cancelScheduledValues(0),t.gain.setValueAtTime(0,this.context?.currentTime??0);try{e.stop()}catch{}e.disconnect(),t.disconnect()}this.voices.clear()}dispose(){this.cancel(),this.context?.close(),this.context=void 0}},qr=o`
  :host { display: block; min-height: 100svh; --accent: #477a35; --accent-soft: #e8efdf; --muted: #6b7468; }
  * { box-sizing: border-box; }
  .page { --page-gutter: 40px; min-height: 100svh; display: flex; flex-direction: column; padding: 0 var(--page-gutter); }
  header { display: flex; align-items: center; justify-content: space-between; height: 100px; width: 100%; max-width: 1184px; margin: 0 auto; }
  .brand { display: flex; align-items: center; gap: 10px; color: #283325; font-size: 17px; font-weight: 650; letter-spacing: -.65px; }
  .brand-mark { width: 29px; height: 29px; color: #477a35; }
  .sound { color: var(--muted); }
  .sound::part(control) { font-size: 12px; font-weight: 500; gap: 8px; }
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
  .next-slot { block-size: 40px; flex-shrink: 0; display: grid; place-items: center; max-inline-size: 100%; }
  .next { color: var(--muted); margin: 0; font-size: 12px; display: flex; align-items: center; justify-content: center; gap: 7px; min-height: 20px; max-width: min(340px, 100%); }
  .next strong { font-weight: 500; color: #35412f; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
  .next .icon { width: 13px; height: 13px; margin-left: 3px; }
  .actions { display: flex; align-items: center; justify-content: center; gap: 15px; min-height: 56px; }
  .primary::part(control) { min-width: 190px; min-height: 54px; font-size: 14px; gap: 10px; font-weight: 550; box-shadow: 0 3px 4px #24302008; }
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
  .remove::part(control) { min-width: 36px; min-height: 40px; color: #6b7468; }
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
`,Jr={play:w`<path d="m9 5 11 7-11 7Z" fill="currentColor" stroke="none"/>`,pause:w`<path d="M8 5v14M16 5v14" stroke-width="3"/>`,reset:w`<path d="M3 10a9 9 0 1 1 1 7M3 4v6h6"/>`,skip:w`<path d="m5 5 10 7-10 7ZM19 5v14"/>`,sound:w`<path d="m11 4-6 5H2v6h3l6 5ZM16 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>`,mute:w`<path d="m11 4-6 5H2v6h3l6 5Zm5 5 6 6m0-6-6 6"/>`,edit:w`<path d="m15 4 5 5M4 20l5-1L21 7a2 2 0 0 0-4-4L5 15Z"/>`,arrow:w`<path d="M4 12h16m-5-5 5 5-5 5"/>`,repeat:w`<path d="m16 2 4 4-4 4M4 10V9a3 3 0 0 1 3-3h13M8 22l-4-4 4-4m12 0v1a3 3 0 0 1-3 3H4"/>`};function $(e,t){let n=w`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${Jr[e]}</svg>`;return t?C`<span slot=${t}>${n}</span>`:n}var Yr=`tabata-time:v1`,Xr=`http://localhost:4318`;function Zr(e){let t=Math.max(0,Math.ceil(e));return`${Math.floor(t/60).toString().padStart(2,`0`)}:${(t%60).toString().padStart(2,`0`)}`}var Qr=class extends A{static styles=qr;audio=new Kr;timer=this.createTimer();editing=new R.State(!1);draft=new R.State([]);error=new R.State(``);audioNotice=new R.State(``);stopEffect;starting=!1;wakeLock;rowObserver;lastRowSegments;lastRowIndex=-1;lastRowRound=0;lastRowStatus;createTimer(){try{let e=JSON.parse(localStorage.getItem(Yr)??`null`),t=new Wr({audio:this.audio,segments:e?.segments??Br});return t.setMuted(e?.muted===!0),t}catch{return new Wr({audio:this.audio})}}connectedCallback(){super.connectedCallback(),this.stopEffect=zt(()=>{this.timer.segments.get(),this.timer.status.get(),this.timer.index.get(),this.timer.round.get(),this.timer.remainingMs.get(),this.timer.muted.get(),this.editing.get(),this.draft.get(),this.error.get(),this.audioNotice.get();let e=this.timer.status.get();document.title=e===`idle`?`Tabata Time`:`${Zr(this.timer.remainingMs.get()/1e3)} · ${this.timer.activeSegment.get().name} — Tabata Time`,this.requestUpdate()}),window.addEventListener(`keydown`,this.onKeyDown),document.addEventListener(`visibilitychange`,this.onVisibilityChange),this.hasUpdated&&this.observeIntervalRow()}firstUpdated(){this.observeIntervalRow()}updated(){let e=this.timer.segments.get(),t=this.timer.index.get(),n=this.timer.round.get(),r=this.timer.status.get(),i=r===`running`&&this.lastRowStatus!==`running`;this.lastRowStatus=r,(e!==this.lastRowSegments||t!==this.lastRowIndex||n!==this.lastRowRound||i)&&(this.lastRowSegments=e,this.lastRowIndex=t,this.lastRowRound=n,this.updateIntervalRow())}observeIntervalRow(){let e=this.renderRoot.querySelector(`.segments`);e&&(this.rowObserver?.disconnect(),this.rowObserver=new ResizeObserver(()=>this.updateIntervalRow()),this.rowObserver.observe(e))}updateIntervalRow(){let e=this.renderRoot.querySelector(`.segments`);if(!e)return;e.tabIndex=e.scrollWidth>e.clientWidth?0:-1;let t=e.querySelector(`[data-active]`);t&&this.revealInterval(e,t)}revealInterval(e,t){let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();if(r.left>=n.left&&r.right<=n.right)return;let i=document.documentElement;if(n.top>=0&&n.bottom<=i.clientHeight&&n.left>=0&&n.right<=i.clientWidth&&typeof t.scrollIntoViewIfNeeded==`function`){t.scrollIntoViewIfNeeded(!1);return}r.left<n.left?e.scrollBy({left:r.left-n.left-16}):e.scrollBy({left:r.right-n.right+16})}onIntervalRowKeyDown(e){if(e.target!==e.currentTarget||e.altKey||e.ctrlKey||e.metaKey)return;let t=e.currentTarget;[`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),e.key===`Home`||e.key===`End`?t.scrollTo({left:e.key===`Home`?0:t.scrollWidth}):t.scrollBy({left:t.clientWidth*.75*(e.key===`ArrowLeft`?-1:1)}))}disconnectedCallback(){super.disconnectedCallback(),this.stopEffect?.(),this.rowObserver?.disconnect(),this.timer.dispose(),this.audio.dispose(),this.wakeLock?.release(),window.removeEventListener(`keydown`,this.onKeyDown),document.removeEventListener(`visibilitychange`,this.onVisibilityChange)}persist(){try{localStorage.setItem(Yr,JSON.stringify({segments:this.timer.segments.get(),muted:this.timer.muted.get()}))}catch{}}async keepAwake(){if(`wakeLock`in navigator&&document.visibilityState===`visible`&&this.timer.status.get()===`running`)try{let e=await navigator.wakeLock.request(`screen`);this.timer.status.get()===`running`?this.wakeLock=e:await e.release()}catch{}}onVisibilityChange=()=>{this.timer.tick(),document.visibilityState===`visible`&&this.keepAwake()};onKeyDown=e=>{if(e.defaultPrevented||e.isComposing||e.repeat||e.altKey||e.ctrlKey||e.metaKey||this.editing.get())return;let t=e.composedPath();if(!t.some(e=>e instanceof HTMLElement&&(e.matches(`input, select, textarea`)||e.isContentEditable))){if(e.key.toLowerCase()===`m`){e.preventDefault(),this.toggleSound();return}e.code!==`Space`||t.some(e=>e instanceof HTMLElement&&e.matches(`button, a, en-button`))||(e.preventDefault(),this.toggleTimer())}};async toggleTimer(){if(!this.starting){if(this.timer.status.get()===`running`){this.timer.pause(),this.wakeLock?.release();return}this.starting=!0;try{!this.timer.muted.get()&&!await this.audio.unlock()&&(this.timer.setMuted(!0),this.audioNotice.set(`Sound is unavailable. The timer will keep going silently.`)),this.timer.start(),this.keepAwake()}finally{this.starting=!1}}}reset=()=>{this.timer.reset(),this.wakeLock?.release()};async toggleSound(){let e=this.timer.muted.get();if(e&&!await this.audio.unlock()){this.audioNotice.set(`Sound is unavailable in this browser.`);return}this.audioNotice.set(``),this.timer.setMuted(!e),this.persist()}async openEditor(){this.timer.status.get()===`running`&&(this.timer.pause(),this.wakeLock?.release()),this.error.set(``),this.draft.set(this.timer.segments.get().map(e=>({...e,duration:String(e.duration)}))),this.editing.set(!0),await this.updateComplete,this.renderRoot.querySelector(`en-dialog`)?.show()}closeEditor(){this.renderRoot.querySelector(`en-dialog`)?.hide(),this.editing.set(!1)}changeDraft(e,t,n){let r=n.detail.value??n.detail.proposed;r!==void 0&&(this.draft.set(this.draft.get().map(n=>n.id===e?{...n,[t]:r}:n)),this.error.set(``))}async addSegment(){let e=crypto.randomUUID();this.draft.set([...this.draft.get(),{id:e,name:`Work`,duration:`40`,cue:`work`}]),await this.updateComplete;let t=this.renderRoot.querySelectorAll(`en-text-field`);t[t.length-1]?.focus()}async deleteSegment(e,t){let n=this.timer.segments.get().findIndex(t=>t.id===e);if(n<2)return;let r=this.shadowRoot?.activeElement===t.currentTarget;if(this.timer.removeSegment(e)&&(this.persist(),this.requestUpdate(),await this.updateComplete,r)){let e=this.renderRoot.querySelectorAll(`.segment-delete`),t=e[Math.min(n-2,e.length-1)]??this.renderRoot.querySelector(`.edit`);t?.focus({preventScroll:!0});let r=this.renderRoot.querySelector(`.segments`),i=t?.closest(`.segment`);r&&i&&this.revealInterval(r,i)}}saveSegments(){let e=this.draft.get().map(e=>({...e,name:e.name.trim(),duration:Number(e.duration)}));if(e.some(e=>!e.name||e.name.length>40)){this.error.set(`Give each interval a name, up to 40 characters.`);return}if(e.some(e=>!Number.isInteger(e.duration)||e.duration<1||e.duration>3600)){this.error.set(`Use a whole number from 1 to 3,600 seconds for each interval.`);return}this.timer.replaceSegments(e),this.persist(),this.closeEditor()}render(){let e=this.timer,t=e.status.get(),n=e.activeSegment.get(),r=e.nextSegment.get(),i=e.segments.get(),a=e.round.get()-1,o=Zr(e.remainingMs.get()/1e3),s=e.muted.get(),c=t===`running`?`Pause`:t===`paused`?`Resume`:`Start timer`;return C`
      <div class="page ${t} ${n.cue===`rest`?`resting`:``}">
        <header>
          <div class="brand">
            <svg class="brand-mark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" aria-hidden="true"><circle cx="16" cy="18" r="10.5"/><path d="M16 18v-6m-3-9h6m-3 0v4m8 2 2-2"/></svg>
            <span>tabata time</span>
          </div>
          <en-button class="sound" variant="ghost" @click=${this.toggleSound}>
            ${$(s?`mute`:`sound`,`prefix`)}
            <span slot="label">Sound ${s?`off`:`on`}</span>
            <kbd class="shortcut" slot="suffix" aria-hidden="true">m</kbd>
          </en-button>
        </header>
        <main>
          <div class="dial">
            <svg class="dial-svg" viewBox="0 0 360 360" aria-hidden="true">
              <circle class="dial-track" cx="180" cy="180" r="173" fill="none" stroke-width="4"/>
              <circle class="dial-progress" cx="180" cy="180" r="173" fill="none" stroke-width="4" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset=${e.elapsedProgress.get()*100}/>
              <g class="dial-ticks">${Array.from({length:60},(e,t)=>w`<line x1="180" y1="23" x2="180" y2=${t%5==0?31:27} transform="rotate(${t*6} 180 180)"/>`)}</g>
            </svg>
            <div class="dial-content">
              <h1 class="segment-label"><span class="segment-dot" aria-hidden="true"></span><span>${n.name}</span></h1>
              <div class="digits ${o.length>5?`long`:``}" role="timer" aria-label=${`${n.name}, ${Math.ceil(e.remainingMs.get()/1e3)} seconds remaining`} aria-live="off">${o}</div>
              ${t===`running`?E:C`<p class="dial-caption">${t===`idle`?`Ready`:`Paused`}</p>`}
            </div>
          </div>
          <div class="next-slot">${i.length>2?C`<p class="next">Up next ${$(`arrow`)} <strong>${r.name}</strong><span>· ${r.duration}s</span></p>`:E}</div>
          <div class="actions">
            ${t===`idle`?E:C`<en-button class="aux" variant="ghost" icon-only @click=${this.reset}>${$(`reset`,`prefix`)}<span slot="label">Reset timer</span></en-button>`}
            <en-button class="primary" @click=${this.toggleTimer}>${$(t===`running`?`pause`:`play`,`prefix`)}<span slot="label">${c}</span><kbd class="shortcut" slot="suffix" aria-hidden="true">space</kbd></en-button>
            ${t===`idle`?E:C`<en-button class="aux" variant="ghost" icon-only @click=${()=>e.skip()}>${$(`skip`,`prefix`)}<span slot="label">Next interval</span></en-button>`}
          </div>
          <section class="routine" aria-label="Your intervals">
            <div class="routine-heading"><h2>Your intervals</h2><en-button class="edit" variant="ghost" @click=${this.openEditor}>${$(`edit`,`prefix`)}<span slot="label">Edit intervals</span></en-button></div>
            <ol class="segments" aria-label="Intervals" @keydown=${this.onIntervalRowKeyDown}>${Ye(i,e=>e.id,(t,n)=>C`
              <li class="segment ${t.cue===`rest`?`rest`:``}" ?data-active=${n===e.index.get()} aria-current=${n===e.index.get()?`step`:E}>
                <span class="segment-title">
                  <span class="segment-name" title=${t.name}>${t.name}</span>
                  ${n>=2?C`<en-button class="segment-delete" variant="ghost" icon-only title=${`Delete ${t.name}`} @click=${e=>this.deleteSegment(t.id,e)}>
                    <en-icon slot="prefix" name="close"></en-icon><span slot="label">Delete interval ${n+1}: ${t.name}</span>
                  </en-button>`:E}
                </span>
                <span class="segment-duration">${t.duration}s</span>
              </li>
            `)}</ol>
            <p class="repeat-note">${$(`repeat`)}<span>${Zr(e.totalDuration.get())} per cycle</span><span aria-hidden="true">·</span><span class="completed-cycles" role="status" aria-live="polite" aria-atomic="true">${a} ${a===1?`cycle`:`cycles`} complete</span></p>
          </section>
          ${this.audioNotice.get()?C`<p class="audio-notice" role="status">${this.audioNotice.get()}</p>`:E}
          <p class="sr-only" role="status" aria-live="polite">${t===`idle`?`Ready`:t===`paused`?`Paused`:n.name}.</p>
        </main>
      </div>
      ${this.renderEditor()}
      ${new URL(location.href).searchParams.has(`progress-report`)?C`<a class="report-link" href=${Xr}>Progress Report ↗</a>`:E}
    `}renderEditor(){return C`<en-dialog label="Your intervals" closedby="closerequest" @en-change=${e=>{e.target===e.currentTarget&&this.editing.set(e.detail.proposed)}}>
      <p class="editor-intro">Each cycle plays these intervals in order, then repeats.</p>
      <div class="editor-rows">${Ye(this.draft.get(),e=>e.id,(e,t)=>C`
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
      ${this.error.get()?C`<p class="error" role="alert">${this.error.get()}</p>`:E}
      <p class="cue-notes">Work: five notes at the end. Rest: a countdown at 2, 1, and 0 seconds.<br>Saving starts a fresh cycle. Your intervals are saved on this device.</p>
      <div class="editor-footer" slot="footer"><en-button variant="ghost" @click=${this.closeEditor}>Cancel</en-button><en-button @click=${this.saveSegments}>Save intervals</en-button></div>
    </en-dialog>`}};customElements.define(`tabata-app`,Qr);
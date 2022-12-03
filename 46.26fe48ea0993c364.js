"use strict";(self.webpackChunkangular_advanced_forms=self.webpackChunkangular_advanced_forms||[]).push([[46],{5046:(Vo,Qt,q)=>{q.r(Qt),q.d(Qt,{RatingPickerPageComponent:()=>zo});var et=q(6895);const xe=!(window.ShadyDOM&&window.ShadyDOM.inUse);let Ee,te;function ei(e){Ee=(!e||!e.shimcssproperties)&&(xe||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(te=window.ShadyCSS.cssBuild);const ti=Boolean(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Ee=window.ShadyCSS.nativeCss:window.ShadyCSS?(ei(window.ShadyCSS),window.ShadyCSS=void 0):ei(window.WebComponents&&window.WebComponents.flags);const tt=Ee;class ii{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function ni(e){return ri(function Cr(e){let t=new ii;t.start=0,t.end=e.length;let i=t;for(let r=0,n=e.length;r<n;r++)if(e[r]===ai){i.rules||(i.rules=[]);let s=i,o=s.rules[s.rules.length-1]||null;i=new ii,i.start=r+1,i.parent=s,i.previous=o,s.rules.push(i)}else e[r]===oi&&(i.end=r+1,i=i.parent||t);return t}(e=function wr(e){return e.replace(I.comments,"").replace(I.port,"")}(e)),e)}function ri(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){i=t.substring(e.previous?e.previous.end:e.parent.start,e.start-1),i=function Sr(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],i=6-t.length;for(;i--;)t="0"+t;return"\\"+t})}(i),i=i.replace(I.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let s=e.parsedSelector=e.selector=i.trim();e.atRule=0===s.indexOf(Or),e.atRule?0===s.indexOf(Ar)?e.type=M.MEDIA_RULE:s.match(I.keyframesRule)&&(e.type=M.KEYFRAMES_RULE,e.keyframesName=e.selector.split(I.multipleSpaces).pop()):e.type=0===s.indexOf(li)?M.MIXIN_RULE:M.STYLE_RULE}let r=e.rules;if(r)for(let o,n=0,s=r.length;n<s&&(o=r[n]);n++)ri(o,t);return e}function si(e,t,i=""){let r="";if(e.cssText||e.rules){let n=e.rules;if(n&&!function Pr(e){let t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(li)}(n))for(let a,s=0,o=n.length;s<o&&(a=n[s]);s++)r=si(a,t,r);else r=t?e.cssText:function xr(e){return function Tr(e){return e.replace(I.mixinApply,"").replace(I.varApply,"")}(e=function Er(e){return e.replace(I.customProp,"").replace(I.mixinProp,"")}(e))}(e.cssText),r=r.trim(),r&&(r="  "+r+"\n")}return r&&(e.selector&&(i+=e.selector+" "+ai+"\n"),i+=r,e.selector&&(i+=oi+"\n\n")),i}const M={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},ai="{",oi="}",I={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},li="--",Ar="@media",Or="@",it=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Te=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Nr=/@media\s(.*)/,pi=new Set;function kr(e){const t=e.textContent;if(!pi.has(t)){pi.add(t);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=t,document.head.appendChild(i)}}function Dr(e){return e.hasAttribute("shady-unscoped")}function nt(e,t){return e?("string"==typeof e&&(e=ni(e)),t&&ie(e,t),si(e,tt)):""}function ci(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=ni(e.textContent)),e.__cssRules||null}function ie(e,t,i,r){if(!e)return;let n=!1,s=e.type;if(r&&s===M.MEDIA_RULE){let a=e.selector.match(Nr);a&&(window.matchMedia(a[1]).matches||(n=!0))}s===M.STYLE_RULE?t(e):i&&s===M.KEYFRAMES_RULE?i(e):s===M.MIXIN_RULE&&(n=!0);let o=e.rules;if(o&&!n)for(let p,a=0,l=o.length;a<l&&(p=o[a]);a++)ie(p,t,i,r)}function di(e,t){let i=e.indexOf("var(");if(-1===i)return t(e,"","","");let r=function ui(e,t){let i=0;for(let r=t,n=e.length;r<n;r++)if("("===e[r])i++;else if(")"===e[r]&&0==--i)return r;return-1}(e,i+3),n=e.substring(i+4,r),s=e.substring(0,i),o=di(e.substring(r+1),t),a=n.indexOf(",");return-1===a?t(s,n.trim(),"",o):t(s,n.substring(0,a).trim(),n.substring(a+1).trim(),o)}window.ShadyDOM&&window;const hi="css-build";function fi(e){return""!==function Fr(e){if(void 0!==te)return te;if(void 0===e.__cssBuild){const t=e.getAttribute(hi);if(t)e.__cssBuild=t;else{const i=function Hr(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){const i=t.textContent.trim().split(":");if(i[0]===hi)return i[1]}return""}(e);""!==i&&function zr(e){const t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=i}}return e.__cssBuild||""}(e)}function rt(e,t){for(let i in t)null===i?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function _i(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}const $r=/;\s*/m,Ur=/^\s*(initial)|(inherit)\s*$/,mi=/\s*!important/;class jr{constructor(){this._map={}}set(t,i){t=t.trim(),this._map[t]={properties:i,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let Ae=null;class w{constructor(){this._currentElement=null,this._measureElement=null,this._map=new jr}detectMixin(t){return function Vr(e){const t=Te.test(e)||it.test(e);return Te.lastIndex=0,it.lastIndex=0,t}(t)}gatherStyles(t){const i=function Br(e){const t=[],i=e.querySelectorAll("style");for(let r=0;r<i.length;r++){const n=i[r];Dr(n)?xe||(kr(n),n.parentNode.removeChild(n)):(t.push(n.textContent),n.parentNode.removeChild(n))}return t.join("").trim()}(t.content);if(i){const r=document.createElement("style");return r.textContent=i,t.content.insertBefore(r,t.content.firstChild),r}return null}transformTemplate(t,i){void 0===t._gatheredStyle&&(t._gatheredStyle=this.gatherStyles(t));const r=t._gatheredStyle;return r?this.transformStyle(r,i):null}transformStyle(t,i=""){let r=ci(t);return this.transformRules(r,i),t.textContent=nt(r),r}transformCustomStyle(t){let i=ci(t);return ie(i,r=>{":root"===r.selector&&(r.selector="html"),this.transformRule(r)}),t.textContent=nt(i),i}transformRules(t,i){this._currentElement=i,ie(t,r=>{this.transformRule(r)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),":root"===t.selector&&(t.selector=":host > *")}transformCssText(t,i){return t=t.replace(it,(r,n,s,o)=>this._produceCssProperties(r,n,s,o,i)),this._consumeCssProperties(t,i)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let i=t;for(;i.parent;)i=i.parent;const r={};let n=!1;return ie(i,s=>{n=n||s===t,!n&&s.selector===t.selector&&Object.assign(r,this._cssTextToMap(s.parsedCssText))}),r}_consumeCssProperties(t,i){let r=null;for(;r=Te.exec(t);){let n=r[0],s=r[1],o=r.index,a=o+n.indexOf("@apply"),l=o+n.length,p=t.slice(0,a),c=t.slice(l),u=i?this._fallbacksFromPreviousRules(i):{};Object.assign(u,this._cssTextToMap(p));let d=this._atApplyToCssProperties(s,u);t=`${p}${d}${c}`,Te.lastIndex=o+d.length}return t}_atApplyToCssProperties(t,i){t=t.replace($r,"");let r=[],n=this._map.get(t);if(n||(this._map.set(t,{}),n=this._map.get(t)),n){let s,o,a;this._currentElement&&(n.dependants[this._currentElement]=!0);const l=n.properties;for(s in l)a=i&&i[s],o=[s,": var(",t,"_-_",s],a&&o.push(",",a.replace(mi,"")),o.push(")"),mi.test(l[s])&&o.push(" !important"),r.push(o.join(""))}return r.join("; ")}_replaceInitialOrInherit(t,i){let r=Ur.exec(i);return r&&(i=r[1]?this._getInitialValueForProperty(t):"apply-shim-inherit"),i}_cssTextToMap(t,i=!1){let n,s,r=t.split(";"),o={};for(let l,p,a=0;a<r.length;a++)l=r[a],l&&(p=l.split(":"),p.length>1&&(n=p[0].trim(),s=p.slice(1).join(":"),i&&(s=this._replaceInitialOrInherit(n,s)),o[n]=s));return o}_invalidateMixinEntry(t){if(Ae)for(let i in t.dependants)i!==this._currentElement&&Ae(i)}_produceCssProperties(t,i,r,n,s){if(r&&di(r,(A,v)=>{v&&this._map.get(v)&&(n=`@apply ${v};`)}),!n)return t;let o=this._consumeCssProperties(""+n,s),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),p=l,c=this._map.get(i),u=c&&c.properties;u?p=Object.assign(Object.create(u),l):this._map.set(i,p);let _,g,d=[],S=!1;for(_ in p)g=l[_],void 0===g&&(g="initial"),u&&!(_ in u)&&(S=!0),d.push(`${i}_-_${_}: ${g}`);return S&&this._invalidateMixinEntry(c),c&&(c.properties=p),r&&(a=`${t};${a}`),`${a}${d.join("; ")};`}}w.prototype.detectMixin=w.prototype.detectMixin,w.prototype.transformStyle=w.prototype.transformStyle,w.prototype.transformCustomStyle=w.prototype.transformCustomStyle,w.prototype.transformRules=w.prototype.transformRules,w.prototype.transformRule=w.prototype.transformRule,w.prototype.transformTemplate=w.prototype.transformTemplate,w.prototype._separator="_-_",Object.defineProperty(w.prototype,"invalidCallback",{get:()=>Ae,set(e){Ae=e}});const qr=w,at={},Oe="_applyShimCurrentVersion",K="_applyShimNextVersion",Ne="_applyShimValidatingVersion",Kr=Promise.resolve();function Yr(e){let t=at[e];t&&function Jr(e){e[Oe]=e[Oe]||0,e[Ne]=e[Ne]||0,e[K]=(e[K]||0)+1}(t)}function Ie(e){return e[Oe]===e[K]}let lt,ot=null,bi=window.HTMLImports&&window.HTMLImports.whenReady||null;function vi(e){requestAnimationFrame(function(){bi?bi(e):(ot||(ot=new Promise(t=>{lt=t}),"complete"===document.readyState?lt():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&lt()})),ot.then(function(){e&&e()}))})}const wi="__seenByShadyCSS",ke="__shadyCSSCachedStyle";let De=null,ne=null;class R{constructor(){this.customStyles=[],this.enqueued=!1,vi(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!ne||(this.enqueued=!0,vi(ne))}addCustomStyle(t){t[wi]||(t[wi]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[ke])return t[ke];let i;return i=t.getStyle?t.getStyle():t,i}processStyles(){const t=this.customStyles;for(let i=0;i<t.length;i++){const r=t[i];if(r[ke])continue;const n=this.getStyleForCustomStyle(r);if(n){const s=n.__appliedElement||n;De&&De(s),r[ke]=s}}return t}}R.prototype.addCustomStyle=R.prototype.addCustomStyle,R.prototype.getStyleForCustomStyle=R.prototype.getStyleForCustomStyle,R.prototype.processStyles=R.prototype.processStyles,Object.defineProperties(R.prototype,{transformCallback:{get:()=>De,set(e){De=e}},validateCallback:{get:()=>ne,set(e){let t=!1;ne||(t=!0),ne=e,t&&this.enqueueDocumentValidation()}}});const re=new qr;class Gr{constructor(){this.customStyleInterface=null,re.invalidCallback=Yr}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{re.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,i){if(this.ensure(),fi(t))return;at[i]=t;let r=re.transformTemplate(t,i);t._styleAst=r}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<t.length;i++){let n=this.customStyleInterface.getStyleForCustomStyle(t[i]);n&&re.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,i){if(this.ensure(),i&&rt(t,i),t.shadowRoot){this.styleElement(t);let r=t.shadowRoot.children||t.shadowRoot.childNodes;for(let n=0;n<r.length;n++)this.styleSubtree(r[n])}else{let r=t.children||t.childNodes;for(let n=0;n<r.length;n++)this.styleSubtree(r[n])}}styleElement(t){this.ensure();let{is:i}=function Lr(e){let t=e.localName,i="",r="";return t?t.indexOf("-")>-1?i=t:(r=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,r=e.extends),{is:i,typeExtension:r}}(t),r=at[i];if((!r||!fi(r))&&r&&!Ie(r)){(function yi(e){return!Ie(e)&&e[Ne]===e[K]})(r)||(this.prepareTemplate(r,i),function gi(e){e[Ne]=e[K],e._validating||(e._validating=!0,Kr.then(function(){e[Oe]=e[K],e._validating=!1}))}(r));let n=t.shadowRoot;if(n){let s=n.querySelector("style");s&&(s.__cssRules=r._styleAst,s.textContent=nt(r._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Gr;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,r,n){e.flushCustomStyles(),e.prepareTemplate(i,r)},prepareTemplateStyles(i,r,n){window.ShadyCSS.prepareTemplate(i,r,n)},prepareTemplateDom(i,r){},styleSubtree(i,r){e.flushCustomStyles(),e.styleSubtree(i,r)},styleElement(i){e.flushCustomStyles(),e.styleElement(i)},styleDocument(i){e.flushCustomStyles(),e.styleDocument(i)},getComputedStyleValue:(i,r)=>_i(i,r),flushCustomStyles(){e.flushCustomStyles()},nativeCss:tt,nativeShadow:xe,cssBuild:te,disableRuntime:ti},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=re,window.JSCompiler_renameProperty=function(e,t){return e};let Me,P,Wr=/(url\()([^)]*)(\))/g,Xr=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/;function se(e,t){if(e&&Xr.test(e)||"//"===e)return e;if(void 0===Me){Me=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Me="http://a/c%20d"===i.href}catch{}}if(t||(t=document.baseURI||window.location.href),Me)try{return new URL(e,t).href}catch{return e}return P||(P=document.implementation.createHTMLDocument("temp"),P.base=P.createElement("base"),P.head.appendChild(P.base),P.anchor=P.createElement("a"),P.body.appendChild(P.anchor)),P.base.href=t,P.anchor.href=e,P.anchor.href||e}function pt(e,t){return e.replace(Wr,function(i,r,n,s){return r+"'"+se(n.replace(/["']/g,""),t)+"'"+s})}function ct(e){return e.substring(0,e.lastIndexOf("/")+1)}const Ci=!window.ShadyDOM||!window.ShadyDOM.inUse,Zr=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window,Ci&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})());let Si=window.Polymer&&window.Polymer.rootPath||ct(document.baseURI||window.location.href),Y=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Pi=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,V=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,xi=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,J=window.Polymer&&window.Polymer.legacyOptimizations||!1,ut=window.Polymer&&window.Polymer.legacyWarnings||!1,Ei=window.Polymer&&window.Polymer.syncInitialRender||!1,Re=window.Polymer&&window.Polymer.legacyUndefined||!1,Ti=window.Polymer&&window.Polymer.orderedComputed||!1,ht=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ft=window.Polymer&&window.Polymer.fastDomIf||!1,Le=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ae=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Ai=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1,Qr=0;const x=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Qr++;return function r(n){let s=n.__mixinSet;if(s&&s[i])return n;let o=t,a=o.get(n);if(!a){a=e(n),o.set(n,a);let l=Object.create(a.__mixinSet||s||null);l[i]=!0,a.__mixinSet=l}return a}};let _t={},Ni={};function Ii(e,t){_t[e]=Ni[e.toLowerCase()]=t}function ki(e){return _t[e]||Ni[e.toLowerCase()]}class oe extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let r=ki(t);return r&&i?r.querySelector(i):r}return null}attributeChangedCallback(t,i,r,n){i!==r&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=se(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=ct(i)}return this.__assetpath}register(t){if(t=t||this.id){if(V&&void 0!==ki(t))throw Ii(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,Ii(t,this),function es(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}(this)}}}oe.prototype.modules=_t,customElements.define("dom-module",oe);const Di="shady-unscoped";function Be(e){return oe.import(e)}function Mi(e){const i=pt((e.body?e.body:e).textContent,e.baseURI),r=document.createElement("style");return r.textContent=i,r}function ns(e){const t=e.trim().split(/\s+/),i=[];for(let r=0;r<t.length;r++)i.push(...rs(t[r]));return i}function rs(e){const t=Be(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const i=[];i.push(...yt(t));const r=t.querySelector("template");r&&i.push(...mt(r,t.assetpath)),t._styles=i}return t._styles}function mt(e,t){if(!e._styles){const i=[],r=e.content.querySelectorAll("style");for(let n=0;n<r.length;n++){let s=r[n],o=s.getAttribute("include");o&&i.push(...ns(o).filter(function(a,l,p){return p.indexOf(a)===l})),t&&(s.textContent=pt(s.textContent,t)),i.push(s)}e._styles=i}return e._styles}function yt(e){const t=[],i=e.querySelectorAll("link[rel=import][type~=css]");for(let r=0;r<i.length;r++){let n=i[r];if(n.import){const s=n.import,o=n.hasAttribute(Di);if(o&&!s._unscopedStyle){const a=Mi(s);a.setAttribute(Di,""),s._unscopedStyle=a}else s._style||(s._style=Mi(s));t.push(o?s._unscopedStyle:s._style)}}return t}function os(e){let t=Be(e);if(t&&void 0===t._cssText){let i=function Ri(e){let t="",i=yt(e);for(let r=0;r<i.length;r++)t+=i[r].textContent;return t}(t),r=t.querySelector("template");r&&(i+=function ls(e,t){let i="";const r=mt(e,t);for(let n=0;n<r.length;n++){let s=r[n];s.parentNode&&s.parentNode.removeChild(s),i+=s.textContent}return i}(r,t.assetpath)),t._cssText=i||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}const f=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function gt(e){return e.indexOf(".")>=0}function k(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function Li(e,t){return 0===e.indexOf(t+".")}function le(e,t){return 0===t.indexOf(e+".")}function pe(e,t,i){return t+i.slice(e.length)}function ce(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let r=e[i].toString().split(".");for(let n=0;n<r.length;n++)t.push(r[n])}return t.join(".")}return e}function Bi(e){return Array.isArray(e)?ce(e).split("."):e.toString().split(".")}function C(e,t,i){let r=e,n=Bi(t);for(let s=0;s<n.length;s++){if(!r)return;r=r[n[s]]}return i&&(i.path=n.join(".")),r}function Fi(e,t,i){let r=e,n=Bi(t),s=n[n.length-1];if(n.length>1){for(let o=0;o<n.length-1;o++)if(r=r[n[o]],!r)return;r[s]=i}else r[t]=i;return n.join(".")}const Fe={},cs=/-[a-z]/g,us=/([A-Z])/g;function bt(e){return Fe[e]||(Fe[e]=e.indexOf("-")<0?e:e.replace(cs,t=>t[1].toUpperCase()))}function He(e){return Fe[e]||(Fe[e]=e.replace(us,"-$1").toLowerCase())}let ds=0,Hi=0,G=[],hs=0,vt=!1,zi=document.createTextNode("");new window.MutationObserver(function fs(){vt=!1;const e=G.length;for(let t=0;t<e;t++){let i=G[t];if(i)try{i()}catch(r){setTimeout(()=>{throw r})}}G.splice(0,e),Hi+=e}).observe(zi,{characterData:!0});const ue={after:e=>({run:t=>window.setTimeout(t,e),cancel(t){window.clearTimeout(t)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},L={run:e=>(vt||(vt=!0,zi.textContent=hs++),G.push(e),ds++),cancel(e){const t=e-Hi;if(t>=0){if(!G[t])throw new Error("invalid async handle: "+e);G[t]=null}}},_s=L,Vi=x(e=>class t extends e{static createProperties(r){const n=this.prototype;for(let s in r)s in n||n._createPropertyAccessor(s)}static attributeNameForProperty(r){return r.toLowerCase()}static typeForProperty(r){}_createPropertyAccessor(r,n){this._addPropertyToAttributeMap(r),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[r]||(this.__dataHasAccessor[r]=!0,this._definePropertyAccessor(r,n))}_addPropertyToAttributeMap(r){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let n=this.__dataAttributes[r];return n||(n=this.constructor.attributeNameForProperty(r),this.__dataAttributes[n]=r),n}_definePropertyAccessor(r,n){Object.defineProperty(this,r,{get(){return this.__data[r]},set:n?function(){}:function(s){this._setPendingProperty(r,s,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let r in this.__dataHasAccessor)this.hasOwnProperty(r)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[r]=this[r],delete this[r])}_initializeInstanceProperties(r){Object.assign(this,r)}_setProperty(r,n){this._setPendingProperty(r,n)&&this._invalidateProperties()}_getProperty(r){return this.__data[r]}_setPendingProperty(r,n,s){let o=this.__data[r],a=this._shouldPropertyChange(r,n,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(r in this.__dataOld)&&(this.__dataOld[r]=o),this.__data[r]=n,this.__dataPending[r]=n),a}_isPropertyPending(r){return!(!this.__dataPending||!this.__dataPending.hasOwnProperty(r))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,_s.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const r=this.__data,n=this.__dataPending,s=this.__dataOld;this._shouldPropertiesChange(r,n,s)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(r,n,s)),this.__dataCounter--}_shouldPropertiesChange(r,n,s){return Boolean(n)}_propertiesChanged(r,n,s){}_shouldPropertyChange(r,n,s){return s!==n&&(s==s||n==n)}attributeChangedCallback(r,n,s,o){n!==s&&this._attributeToProperty(r,s),super.attributeChangedCallback&&super.attributeChangedCallback(r,n,s,o)}_attributeToProperty(r,n,s){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[r]||r;this[a]=this._deserializeValue(n,s||this.constructor.typeForProperty(a))}}_propertyToAttribute(r,n,s){this.__serializing=!0,this._valueToNodeAttribute(this,s=arguments.length<3?this[r]:s,n||this.constructor.attributeNameForProperty(r)),this.__serializing=!1}_valueToNodeAttribute(r,n,s){const o=this._serializeValue(n);("class"===s||"name"===s||"slot"===s)&&(r=f(r)),void 0===o?r.removeAttribute(s):r.setAttribute(s,""===o&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(r){return"boolean"==typeof r?r?"":void 0:r?.toString()}_deserializeValue(r,n){switch(n){case Boolean:return null!==r;case Number:return Number(r);default:return r}}}),$i={};let ze=HTMLElement.prototype;for(;ze;){let e=Object.getOwnPropertyNames(ze);for(let t=0;t<e.length;t++)$i[e[t]]=!0;ze=Object.getPrototypeOf(ze)}const ms=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,Ui=x(e=>{const t=Vi(e);return class i extends t{static createPropertiesForAttributes(){let n=this.observedAttributes;for(let s=0;s<n.length;s++)this.prototype._createPropertyAccessor(bt(n[s]))}static attributeNameForProperty(n){return He(n)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(n){for(let s in n)this._setProperty(s,n[s])}_ensureAttribute(n,s){this.hasAttribute(n)||this._valueToNodeAttribute(this,s,n)}_serializeValue(n){if("object"==typeof n){if(n instanceof Date)return n.toString();if(n){if(ms(n))return n;try{return JSON.stringify(n)}catch{return""}}}return super._serializeValue(n)}_deserializeValue(n,s){let o;switch(s){case Object:try{o=JSON.parse(n)}catch{o=n}break;case Array:try{o=JSON.parse(n)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${n}`)}break;case Date:o=isNaN(n)?String(n):Number(n),o=new Date(o);break;default:o=super._deserializeValue(n,s)}return o}_definePropertyAccessor(n,s){(function ys(e,t){if(!$i[t]){let i=e[t];void 0!==i&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}})(this,n),super._definePropertyAccessor(n,s)}_hasAccessor(n){return this.__dataHasAccessor&&this.__dataHasAccessor[n]}_isPropertyPending(n){return Boolean(this.__dataPending&&n in this.__dataPending)}}}),gs={"dom-if":!0,"dom-repeat":!0};let ji=!1,qi=!1;const ws=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,r)=>{const n=i.getAttribute(r);e&&r.startsWith("on-")?t.setAttribute(r,e.createScript(n,r)):t.setAttribute(r,n)}})();function Cs(e){let t=e.getAttribute("is");if(t&&gs[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:r}=i.attributes[0];ws(e,i,r),i.removeAttribute(r)}}return e}function Ki(e,t){let i=t.parentInfo&&Ki(e,t.parentInfo);if(!i)return e;for(let r=i.firstChild,n=0;r;r=r.nextSibling)if(t.parentIndex===n++)return r}function Ss(e,t,i,r){r.id&&(t[r.id]=i)}function Ps(e,t,i){if(i.events&&i.events.length)for(let s,r=0,n=i.events;r<n.length&&(s=n[r]);r++)e._addMethodEventListenerToNode(t,s.name,s.value,e)}function xs(e,t,i,r){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=r)}const Ts=x(e=>class t extends e{static _parseTemplate(r,n){if(!r._templateInfo){let s=r._templateInfo={};s.nodeInfoList=[],s.nestedTemplate=Boolean(n),s.stripWhiteSpace=n&&n.stripWhiteSpace||r.hasAttribute&&r.hasAttribute("strip-whitespace"),this._parseTemplateContent(r,s,{parent:null})}return r._templateInfo}static _parseTemplateContent(r,n,s){return this._parseTemplateNode(r.content,n,s)}static _parseTemplateNode(r,n,s){let o=!1,a=r;return"template"!=a.localName||a.hasAttribute("preserve-content")?"slot"===a.localName&&(n.hasInsertionPoint=!0):o=this._parseTemplateNestedTemplate(a,n,s)||o,function vs(e){(function bs(){if(!ji){ji=!0;const e=document.createElement("textarea");e.placeholder="a",qi=e.placeholder===e.textContent}return qi})()&&"textarea"===e.localName&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}(a),a.firstChild&&this._parseTemplateChildNodes(a,n,s),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,n,s)||o),o||s.noted}static _parseTemplateChildNodes(r,n,s){if("script"!==r.localName&&"style"!==r.localName)for(let l,o=r.firstChild,a=0;o;o=l){if("template"==o.localName&&(o=Cs(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)o.textContent+=c.textContent,l=c.nextSibling,r.removeChild(c),c=l;if(n.stripWhiteSpace&&!o.textContent.trim()){r.removeChild(o);continue}}let p={parentIndex:a,parentInfo:s};this._parseTemplateNode(o,n,p)&&(p.infoIndex=n.nodeInfoList.push(p)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(r,n,s){let o=r,a=this._parseTemplate(o,n);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),s.templateInfo=a,!0}static _parseTemplateNodeAttributes(r,n,s){let o=!1,a=Array.from(r.attributes);for(let p,l=a.length-1;p=a[l];l--)o=this._parseTemplateNodeAttribute(r,n,s,p.name,p.value)||o;return o}static _parseTemplateNodeAttribute(r,n,s,o,a){return"on-"===o.slice(0,3)?(r.removeAttribute(o),s.events=s.events||[],s.events.push({name:o.slice(3),value:a}),!0):"id"===o&&(s.id=a,!0)}static _contentForTemplate(r){let n=r._templateInfo;return n&&n.content||r.content}_stampTemplate(r,n){r&&!r.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(r);let s=(n=n||this.constructor._parseTemplate(r)).nodeInfoList,a=document.importNode(n.content||r.content,!0);a.__noInsertionPoint=!n.hasInsertionPoint;let l=a.nodeList=new Array(s.length);a.$={};for(let u,p=0,c=s.length;p<c&&(u=s[p]);p++){let d=l[p]=Ki(a,u);Ss(0,a.$,d,u),xs(0,d,u,n),Ps(this,d,u)}return a}_addMethodEventListenerToNode(r,n,s,o){let a=function Es(e,t,i){return e=e._methodHost||e,function(n){e[i]?e[i](n,n.detail):console.warn("listener method `"+i+"` not defined")}}(o=o||r,0,s);return this._addEventListenerToNode(r,n,a),a}_addEventListenerToNode(r,n,s){r.addEventListener(n,s)}_removeEventListenerFromNode(r,n,s){r.removeEventListener(n,s)}});let de=0;const he=[],m={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Yi="__computeInfo",As=/[A-Z]/;function wt(e,t,i){let r=e[t];if(r){if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),i))for(let n in r){let s=r[n],o=r[n]=Array(s.length);for(let a=0;a<s.length;a++)o[a]=s[a]}}else r=e[t]={};return r}function fe(e,t,i,r,n,s){if(t){let o=!1;const a=de++;for(let l in i){let c=t[n?k(l):l];if(c)for(let _,u=0,d=c.length;u<d&&(_=c[u]);u++)(!_.info||_.info.lastRun!==a)&&(!n||Ct(l,_.trigger))&&(_.info&&(_.info.lastRun=a),_.fn(e,l,i,r,_.info,n,s),o=!0)}return o}return!1}function Os(e,t,i,r,n,s,o,a){let l=!1,c=t[o?k(r):r];if(c)for(let _,u=0,d=c.length;u<d&&(_=c[u]);u++)(!_.info||_.info.lastRun!==i)&&(!o||Ct(r,_.trigger))&&(_.info&&(_.info.lastRun=i),_.fn(e,r,n,s,_.info,o,a),l=!0);return l}function Ct(e,t){if(t){let i=t.name;return i==e||!(!t.structured||!Li(i,e))||!(!t.wildcard||!le(i,e))}return!0}function Ji(e,t,i,r,n){let s="string"==typeof n.method?e[n.method]:n.method,o=n.property;s?s.call(e,e.__data[o],r[o]):n.dynamicFn||console.warn("observer method `"+n.method+"` not defined")}function Is(e,t,i){let r=k(t);return r!==t&&(Gi(e,He(r)+"-changed",i[t],t),!0)}function Gi(e,t,i,r){let n={value:i,queueProperty:!0};r&&(n.path=r),f(e).dispatchEvent(new CustomEvent(t,{detail:n}))}function ks(e,t,i,r,n,s){let a=(s?k(t):t)!=t?t:null,l=a?C(e,a):e.__data[t];a&&void 0===l&&(l=i[t]),Gi(e,n.eventName,l,a)}function Ms(e,t,i,r,n){let s=e.__data[t];Y&&(s=Y(s,n.attrName,"attribute",e)),e._propertyToAttribute(t,n.attrName,s)}const Ls=(e,t,i)=>{let r=0,n=t.length-1,s=-1;for(;r<=n;){const o=r+n>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)r=o+1;else{if(!(a>0)){s=o;break}n=o-1}}s<0&&(s=n+1),t.splice(s,0,e)},Wi=(e,t,i,r,n)=>{const o=t[n?k(e):e];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==de&&(!n||Ct(e,l.trigger))&&(l.info.lastRun=de,Ls(l.info,i,r))}};function Xi(e,t,i,r,n){let s=Pt(e,t,i,0,n);if(s===he)return!1;let o=n.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,s,!0):(e[o]=s,!1)}function St(e,t,i,r,n,s,o){i.bindings=i.bindings||[];let a={kind:r,target:n,parts:s,literal:o,isCompound:1!==s.length};if(i.bindings.push(a),function js(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(a)){let{event:p,negate:c}=a.parts[0];a.listenerEvent=p||He(n)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let p=0;p<a.parts.length;p++){let c=a.parts[p];c.compoundIndex=p,zs(e,t,a,c,l)}}function zs(e,t,i,r,n){if(!r.literal)if("attribute"===i.kind&&"-"===i.target[0])console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let s=r.dependencies,o={index:n,binding:i,part:r,evaluator:e};for(let a=0;a<s.length;a++){let l=s[a];"string"==typeof l&&(l=rn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:Vs,info:o,trigger:l})}}}function Vs(e,t,i,r,n,s,o){let a=o[n.index],l=n.binding,p=n.part;if(s&&p.source&&t.length>p.source.length&&"property"==l.kind&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=i[t];t=pe(p.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&e._enqueueClient(a)}else{let c=n.evaluator._evaluateBinding(e,p,t,i,r,s);c!==he&&function $s(e,t,i,r,n){if(n=function Us(e,t,i,r){if(i.isCompound){let n=e.__dataCompoundStorage[i.target];n[r.compoundIndex]=t,t=n.join("")}return"attribute"!==i.kind&&("textContent"===i.target||"value"===i.target&&("input"===e.localName||"textarea"===e.localName))&&(t=t??""),t}(t,n,i,r),Y&&(n=Y(n,i.target,i.kind,t)),"attribute"==i.kind)e._valueToNodeAttribute(t,n,i.target);else{let s=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[s]?(!t[m.READ_ONLY]||!t[m.READ_ONLY][s])&&t._setPendingProperty(s,n)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,s,n)}}(e,a,l,p,c)}}function Ks(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,n=new Array(r.length);for(let o=0;o<r.length;o++)n[o]=r[o].literal;let s=t.target;i[s]=n,t.literal&&"property"==t.kind&&("className"===s&&(e=f(e)),e[s]=t.literal)}}function Ys(e,t,i){if(i.listenerEvent){let r=i.parts[0];e.addEventListener(i.listenerEvent,function(n){!function Ds(e,t,i,r,n){let s,o=e.detail,a=o&&o.path;a?(r=pe(i,r,a),s=o&&o.value):s=e.currentTarget[i],s=n?!s:s,(!t[m.READ_ONLY]||!t[m.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,s,!0,Boolean(a))&&(!o||!o.queueProperty)&&t._invalidateProperties()}(n,t,i.target,r.source,r.negate)})}}function Zi(e,t,i,r,n,s){let o={methodName:t.methodName,args:t.args,methodInfo:n,dynamicFn:s=t.static||s&&("object"!=typeof s||s[t.methodName])};for(let l,a=0;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:r,info:o,trigger:l});return s&&e._addPropertyEffect(t.methodName,i,{fn:r,info:o}),o}function Pt(e,t,i,r,n){let s=e._methodHost||e,o=s[n.methodName];if(o){let a=e._marshalArgs(n.args,t,i);return a===he?he:o.apply(s,a)}n.dynamicFn||console.warn("method `"+n.methodName+"` not defined")}const Js=[],tn=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function nn(e){let t="";for(let i=0;i<e.length;i++)t+=e[i].literal||"";return t}function xt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let r={methodName:t[1],static:!0,args:Js};return t[2].trim()?function sa(e,t){return t.args=e.map(function(i){let r=rn(i);return r.literal||(t.static=!1),r},this),t}(t[2].replace(/\\,/g,"&comma;").split(","),r):r}return null}function rn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},r=t[0];switch("-"===r&&(r=t[1]),r>="0"&&r<="9"&&(r="#"),r){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0}return i.literal||(i.rootProperty=k(t),i.structured=gt(t),i.structured&&(i.wildcard=".*"==t.slice(-2),i.wildcard&&(i.name=t.slice(0,-2)))),i}function sn(e,t,i){let r=C(e,i);return void 0===r&&(r=t[i]),r}function an(e,t,i,r){const n={indexSplices:r};Re&&!e._overrideLegacyUndefined&&(t.splices=n),e.notifyPath(i+".splices",n),e.notifyPath(i+".length",t.length),Re&&!e._overrideLegacyUndefined&&(n.indexSplices=[])}function _e(e,t,i,r,n,s){an(e,t,i,[{index:r,addedCount:n,removed:s,object:t,type:"splice"}])}const Ve=x(e=>{const t=Ts(Ui(e));return class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0}get PROPERTY_EFFECT_TYPES(){return m}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(me.length){let n=me[me.length-1];n._enqueueClient(this),this.__dataHost=n}}_initializeProtoProperties(n){this.__data=Object.create(n),this.__dataPending=Object.create(n),this.__dataOld={}}_initializeInstanceProperties(n){let s=this[m.READ_ONLY];for(let o in n)(!s||!s[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=n[o])}_addPropertyEffect(n,s,o){this._createPropertyAccessor(n,s==m.READ_ONLY);let a=wt(this,s,!0)[n];a||(a=this[s][n]=[]),a.push(o)}_removePropertyEffect(n,s,o){let a=wt(this,s,!0)[n],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(n,s){let o=this[s];return Boolean(o&&o[n])}_hasReadOnlyEffect(n){return this._hasPropertyEffect(n,m.READ_ONLY)}_hasNotifyEffect(n){return this._hasPropertyEffect(n,m.NOTIFY)}_hasReflectEffect(n){return this._hasPropertyEffect(n,m.REFLECT)}_hasComputedEffect(n){return this._hasPropertyEffect(n,m.COMPUTE)}_setPendingPropertyOrPath(n,s,o,a){if(a||k(Array.isArray(n)?n[0]:n)!==n){if(!a){let l=C(this,n);if(!(n=Fi(this,n,s))||!super._shouldPropertyChange(n,s,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(n,s,o))return function Hs(e,t,i){let r=e.__dataLinkedPaths;if(r){let n;for(let s in r){let o=r[s];le(s,t)?(n=pe(s,o,t),e._setPendingPropertyOrPath(n,i,!0,!0)):le(o,t)&&(n=pe(o,s,t),e._setPendingPropertyOrPath(n,i,!0,!0))}}}(this,n,s),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[n])return this._setPendingProperty(n,s,o);this[n]=s}return!1}_setUnmanagedPropertyToNode(n,s,o){(o!==n[s]||"object"==typeof o)&&("className"===s&&(n=f(n)),n[s]=o)}_setPendingProperty(n,s,o){let a=this.__dataHasPaths&&gt(n);return!!this._shouldPropertyChange(n,s,(a?this.__dataTemp:this.__data)[n])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),n in this.__dataOld||(this.__dataOld[n]=this.__data[n]),a?this.__dataTemp[n]=s:this.__data[n]=s,this.__dataPending[n]=s,(a||this[m.NOTIFY]&&this[m.NOTIFY][n])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[n]=o),!0)}_setProperty(n,s){this._setPendingProperty(n,s,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(n){this.__dataPendingClients=this.__dataPendingClients||[],n!==this&&this.__dataPendingClients.push(n)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let n=this.__dataPendingClients;if(n){this.__dataPendingClients=null;for(let s=0;s<n.length;s++){let o=n[s];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(n,s){for(let o in n)(s||!this[m.READ_ONLY]||!this[m.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,n[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(n,s,o){let l,a=this.__dataHasPaths;this.__dataHasPaths=!1,function Rs(e,t,i,r){let n=e[m.COMPUTE];if(n)if(Ti){de++;const s=function Bs(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[m.COMPUTE];let o,{counts:r,ready:n,total:s}=function Fs(e){const t=e[Yi],i={},r=e[m.COMPUTE],n=[];let s=0;for(let o in t){const a=t[o];s+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in r)t[o]||n.push(o);return{counts:i,ready:n,total:s}}(e);for(;o=n.shift();){t.set(o,t.size);const a=i[o];a&&a.forEach(l=>{const p=l.info.methodInfo;--s,0==--r[p]&&n.push(p)})}0!==s&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}(e),o=[];for(let l in t)Wi(l,n,o,s,r);let a;for(;a=o.shift();)Xi(e,"",t,0,a)&&Wi(a.methodInfo,n,o,s,r);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let s=t;for(;fe(e,n,s,i,r);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),s=e.__dataPending,e.__dataPending=null}}(this,s,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(s,o,a),this._flushClients(),fe(this,this[m.REFLECT],s,o,a),fe(this,this[m.OBSERVE],s,o,a),l&&function Ns(e,t,i,r,n){let o,l,s=e[m.NOTIFY],a=de++;for(let p in t)t[p]&&(s&&Os(e,s,a,p,i,r,n)||n&&Is(e,p,i))&&(o=!0);o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}(this,l,s,o,a),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(n,s,o){this[m.PROPAGATE]&&fe(this,this[m.PROPAGATE],n,s,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,n,s,o)}_runEffectsForTemplate(n,s,o,a){const l=(p,c)=>{fe(this,n.propertyEffects,p,o,c,n.nodeList);for(let u=n.firstChild;u;u=u.nextSibling)this._runEffectsForTemplate(u,p,o,c)};n.runEffects?n.runEffects(l,s,a):l(s,a)}linkPaths(n,s){n=ce(n),s=ce(s),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[n]=s}unlinkPaths(n){n=ce(n),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[n]}notifySplices(n,s){let o={path:""};an(this,C(this,n,o),o.path,s)}get(n,s){return C(s||this,n)}set(n,s,o){o?Fi(o,n,s):(!this[m.READ_ONLY]||!this[m.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,s,!0)&&this._invalidateProperties()}push(n,...s){let o={path:""},a=C(this,n,o),l=a.length,p=a.push(...s);return s.length&&_e(this,a,o.path,l,s.length,[]),p}pop(n){let s={path:""},o=C(this,n,s),a=Boolean(o.length),l=o.pop();return a&&_e(this,o,s.path,o.length,0,[l]),l}splice(n,s,o,...a){let c,l={path:""},p=C(this,n,l);return s<0?s=p.length-Math.floor(-s):s&&(s=Math.floor(s)),c=2===arguments.length?p.splice(s):p.splice(s,o,...a),(a.length||c.length)&&_e(this,p,l.path,s,a.length,c),c}shift(n){let s={path:""},o=C(this,n,s),a=Boolean(o.length),l=o.shift();return a&&_e(this,o,s.path,0,0,[l]),l}unshift(n,...s){let o={path:""},a=C(this,n,o),l=a.unshift(...s);return s.length&&_e(this,a,o.path,0,s.length,[]),l}notifyPath(n,s){let o;if(1==arguments.length){let a={path:""};s=C(this,n,a),o=a.path}else o=Array.isArray(n)?ce(n):n;this._setPendingPropertyOrPath(o,s,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(n,s){this._addPropertyEffect(n,m.READ_ONLY),s&&(this["_set"+function aa(e){return e[0].toUpperCase()+e.substring(1)}(n)]=function(o){this._setProperty(n,o)})}_createPropertyObserver(n,s,o){let a={property:n,method:s,dynamicFn:Boolean(o)};this._addPropertyEffect(n,m.OBSERVE,{fn:Ji,info:a,trigger:{name:n}}),o&&this._addPropertyEffect(s,m.OBSERVE,{fn:Ji,info:a,trigger:{name:s}})}_createMethodObserver(n,s){let o=xt(n);if(!o)throw new Error("Malformed observer expression '"+n+"'");Zi(this,o,m.OBSERVE,Pt,null,s)}_createNotifyingProperty(n){this._addPropertyEffect(n,m.NOTIFY,{fn:ks,info:{eventName:He(n)+"-changed",property:n}})}_createReflectedProperty(n){let s=this.constructor.attributeNameForProperty(n);"-"===s[0]?console.warn("Property "+n+" cannot be reflected to attribute "+s+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(n,m.REFLECT,{fn:Ms,info:{attrName:s}})}_createComputedProperty(n,s,o){let a=xt(s);if(!a)throw new Error("Malformed computed expression '"+s+"'");const l=Zi(this,a,m.COMPUTE,Xi,n,o);wt(this,Yi)[n]=l}_marshalArgs(n,s,o){const a=this.__data,l=[];for(let p=0,c=n.length;p<c;p++){let{name:u,structured:d,wildcard:_,value:g,literal:S}=n[p];if(!S)if(_){const A=le(u,s),v=sn(a,o,A?s:u);g={path:A?s:u,value:v,base:A?C(a,u):v}}else g=d?sn(a,o,u):a[u];if(Re&&!this._overrideLegacyUndefined&&void 0===g&&n.length>1)return he;l[p]=g}return l}static addPropertyEffect(n,s,o){this.prototype._addPropertyEffect(n,s,o)}static createPropertyObserver(n,s,o){this.prototype._createPropertyObserver(n,s,o)}static createMethodObserver(n,s){this.prototype._createMethodObserver(n,s)}static createNotifyingProperty(n){this.prototype._createNotifyingProperty(n)}static createReadOnlyProperty(n,s){this.prototype._createReadOnlyProperty(n,s)}static createReflectedProperty(n){this.prototype._createReflectedProperty(n)}static createComputedProperty(n,s,o){this.prototype._createComputedProperty(n,s,o)}static bindTemplate(n){return this.prototype._bindTemplate(n)}_bindTemplate(n,s){let o=this.constructor._parseTemplate(n),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(s)if(o=Object.create(o),o.wasPreBound=a,this.__templateInfo){const l=n._parentTemplateInfo||this.__templateInfo,p=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=p,p?p.nextSibling=o:l.firstChild=o}else this.__templateInfo=o;else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(n,s,o){(n.hostProps=n.hostProps||{})[s]=!0;let l=n.propertyEffects=n.propertyEffects||{};(l[s]=l[s]||[]).push(o)}_stampTemplate(n,s){s=s||this._bindTemplate(n,!0),me.push(this);let o=super._stampTemplate(n,s);if(me.pop(),s.nodeList=o.nodeList,!s.wasPreBound){let a=s.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=s,function qs(e,t){let{nodeList:i,nodeInfoList:r}=t;if(r.length)for(let n=0;n<r.length;n++){let o=i[n],a=r[n].bindings;if(a)for(let l=0;l<a.length;l++){let p=a[l];Ks(o,p),Ys(o,e,p)}o.__dataHost=e}}(this,s),this.__dataClientsReady&&(this._runEffectsForTemplate(s,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(n){const s=n.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=s;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),s.nextSibling=s.previousSibling=null;let p=s.childNodes;for(let c=0;c<p.length;c++){let u=p[c];f(f(u).parentNode).removeChild(u)}}static _parseTemplateNode(n,s,o){let a=t._parseTemplateNode.call(this,n,s,o);if(n.nodeType===Node.TEXT_NODE){let l=this._parseBindings(n.textContent,s);l&&(n.textContent=nn(l)||" ",St(this,s,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(n,s,o,a,l){let p=this._parseBindings(l,s);if(p){let c=a,u="property";As.test(a)?u="attribute":"$"==a[a.length-1]&&(a=a.slice(0,-1),u="attribute");let d=nn(p);return d&&"attribute"==u&&("class"==a&&n.hasAttribute("class")&&(d+=" "+n.getAttribute(a)),n.setAttribute(a,d)),"attribute"==u&&"disable-upgrade$"==c&&n.setAttribute(a,""),"input"===n.localName&&"value"===c&&n.setAttribute(c,""),n.removeAttribute(c),"property"===u&&(a=bt(a)),St(this,s,o,u,a,p,d),!0}return t._parseTemplateNodeAttribute.call(this,n,s,o,a,l)}static _parseTemplateNestedTemplate(n,s,o){let a=t._parseTemplateNestedTemplate.call(this,n,s,o);const l=n.parentNode,p=o.templateInfo,c="dom-if"===l.localName;ht&&(c||"dom-repeat"===l.localName)&&(l.removeChild(n),(o=o.parentInfo).templateInfo=p,o.noted=!0,a=!1);let d=p.hostProps;if(ft&&c)d&&(s.hostProps=Object.assign(s.hostProps||{},d),ht||(o.parentInfo.noted=!0));else{let _="{";for(let g in d)St(this,s,o,"property","_host_"+g,[{mode:_,source:g,dependencies:[g],hostProp:!0}])}return a}static _parseBindings(n,s){let l,o=[],a=0;for(;null!==(l=tn.exec(n));){l.index>a&&o.push({literal:n.slice(a,l.index)});let p=l[1][0],c=Boolean(l[2]),u=l[3].trim(),d=!1,_="",g=-1;"{"==p&&(g=u.indexOf("::"))>0&&(_=u.substring(g+2),u=u.substring(0,g),d=!0);let S=xt(u),A=[];if(S){let{args:v,methodName:T}=S;for(let Zt=0;Zt<v.length;Zt++){let vr=v[Zt];vr.literal||A.push(vr)}let ee=s.dynamicFns;(ee&&ee[T]||S.static)&&(A.push(T),S.dynamicFn=!0)}else A.push(u);o.push({source:u,mode:p,negate:c,customEvent:d,signature:S,dependencies:A,event:_}),a=tn.lastIndex}if(a&&a<n.length){let p=n.substring(a);p&&o.push({literal:p})}return o.length?o:null}static _evaluateBinding(n,s,o,a,l,p){let c;return c=s.signature?Pt(n,o,a,0,s.signature):o!=s.source?C(n,s.source):p&&gt(o)?C(n,o):n.__data[o],s.negate&&(c=!c),c}}}),me=[],on=[];function ln(e){on.push(e)}const ua=x(e=>{const t=Vi(e);function i(s){const o=Object.getPrototypeOf(s);return o.prototype instanceof n?o:null}function r(s){if(!s.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",s))){let o=null;if(s.hasOwnProperty(JSCompiler_renameProperty("properties",s))){const a=s.properties;a&&(o=function ca(e){const t={};for(let i in e){const r=e[i];t[i]="function"==typeof r?{type:r}:r}return t}(a))}s.__ownProperties=o}return s.__ownProperties}class n extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){ln(this.prototype);const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=r(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,r(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return n}),Et=window.ShadyCSS&&window.ShadyCSS.cssBuild,$e=x(e=>{const t=ua(Ve(e));function n(l,p,c,u){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(p)?console.warn(`Cannot redefine computed property '${p}'.`):l._createComputedProperty(p,c.computed,u)),c.readOnly&&!l._hasReadOnlyEffect(p)?l._createReadOnlyProperty(p,!c.computed):!1===c.readOnly&&l._hasReadOnlyEffect(p)&&console.warn(`Cannot make readOnly property '${p}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(p)?l._createReflectedProperty(p):!1===c.reflectToAttribute&&l._hasReflectEffect(p)&&console.warn(`Cannot make reflected property '${p}' non-reflected.`),c.notify&&!l._hasNotifyEffect(p)?l._createNotifyingProperty(p):!1===c.notify&&l._hasNotifyEffect(p)&&console.warn(`Cannot make notify property '${p}' non-notify.`),c.observer&&l._createPropertyObserver(p,c.observer,u[c.observer]),l._addPropertyToAttributeMap(p)}return class a extends t{static get polymerElementVersion(){return"3.5.1"}static _finalizeClass(){t._finalizeClass.call(this);const p=function r(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}(this);p&&this.createObservers(p,this._properties),this._prepareTemplate()}static _prepareTemplate(){let p=this.template;p&&("string"==typeof p?(console.error("template getter must return HTMLTemplateElement"),p=null):J||(p=p.cloneNode(!0))),this.prototype._template=p}static createProperties(p){for(let c in p)n(this.prototype,c,p[c],p)}static createObservers(p,c){const u=this.prototype;for(let d=0;d<p.length;d++)u._createMethodObserver(p[d],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let p=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;"function"==typeof p&&(p=p()),this._template=void 0!==p?p:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&function o(l){let p=null;if(l&&(!V||xi)&&(p=oe.import(l,"template"),V&&!p))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return p}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(p){this._template=p}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const p=this.importMeta;if(p)this._importPath=ct(p.url);else{const c=oe.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super()}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Si,this.importPath=this.constructor.importPath;let p=function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let p=l._properties;for(let c in p){let u=p[c];"value"in u&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=u)}}return l.__propertyDefaults}(this.constructor);if(p)for(let c in p){let u=p[c];if(this._canApplyPropertyDefault(c)){let d="function"==typeof u.value?u.value.call(this):u.value;this._hasAccessor(c)?this._setPendingProperty(c,d,!0):this[c]=d}}}_canApplyPropertyDefault(p){return!this.hasOwnProperty(p)}static _processStyleText(p,c){return pt(p,c)}static _finalizeTemplate(p){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const u=this.importPath;(function s(l,p,c,u){if(!Et){const d=p.content.querySelectorAll("style"),_=mt(p),g=function ss(e){let t=Be(e);return t?yt(t):[]}(c),S=p.content.firstElementChild;for(let v=0;v<g.length;v++){let T=g[v];T.textContent=l._processStyleText(T.textContent,u),p.content.insertBefore(T,S)}let A=0;for(let v=0;v<_.length;v++){let T=_[v],ee=d[A];ee!==T?(T=T.cloneNode(!0),ee.parentNode.insertBefore(T,ee)):A++,T.textContent=l._processStyleText(T.textContent,u)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(p,c),Ai&&Et&&Zr){const d=p.content.querySelectorAll("style");if(d){let _="";Array.from(d).forEach(g=>{_+=g.textContent,g.parentNode.removeChild(g)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(_)}}})(this,c,p,u?se(u):""),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(p){const c=f(this);if(c.attachShadow)return p?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:p}),c.shadowRoot.appendChild(p),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Ei&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(p){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,p)}resolveUrl(p,c){return!c&&this.importPath&&(c=se(this.importPath)),se(p,c)}static _parseTemplateContent(p,c,u){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,p,c,u)}static _addTemplatePropertyEffect(p,c,u){return ut&&!(c in this._properties)&&!(u.info.part.signature&&u.info.part.signature.static)&&!u.info.part.hostProp&&!p.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,p,c,u)}}});class ${constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,i){this._asyncModule=t,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,ye.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),ye.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(t,i,r){return t instanceof $?t._cancelAsync():t=new $,t.setConfig(i,r),t}}let ye=new Set;const pn=function(e){ye.add(e)},ha=function(){const e=Boolean(ye.size);return ye.forEach(t=>{try{t.flush()}catch(i){setTimeout(()=>{throw i})}}),e};let Tt="string"==typeof document.head.style.touchAction,Ue="__polymerGestures",je="__polymerGesturesHandled",At="__polymerGesturesTouchAction",dn=["mousedown","mousemove","mouseup","click"],ma=[0,1,4,2],ya=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch{return!1}}();function Ot(e){return dn.indexOf(e)>-1}let Nt=!1;function hn(e){if(!Ot(e)&&"touchend"!==e&&Tt&&Nt&&Pi)return{passive:!0}}!function(){try{let e=Object.defineProperty({},"passive",{get(){Nt=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}}();let fn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const It=[],ga={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ba={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function va(e){return ga[e.localName]||!1}function wa(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let i=e.getRootNode();if(e.id){let r=i.querySelectorAll(`label[for = '${e.id}']`);for(let n=0;n<r.length;n++)t.push(r[n])}}catch{}}return t}let _n=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e[je]={skip:!0},"click"===e.type)){let i=!1,r=qe(e);for(let n=0;n<r.length;n++){if(r[n].nodeType===Node.ELEMENT_NODE)if("label"===r[n].localName)It.push(r[n]);else if(va(r[n])){let s=wa(r[n]);for(let o=0;o<s.length;o++)i=i||It.indexOf(s[o])>-1}if(r[n]===b.mouse.target)return}if(i)return;e.preventDefault(),e.stopPropagation()}};function mn(e){let t=fn?["click"]:dn;for(let r,i=0;i<t.length;i++)r=t[i],e?(It.length=0,document.addEventListener(r,_n,!0)):document.removeEventListener(r,_n,!0)}function U(e){let t=e.type;if(!Ot(t))return!1;if("mousemove"===t){let i=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!ya&&(i=ma[e.which]||0),Boolean(1&i)}return 0===(void 0===e.button?0:e.button)}let b={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function yn(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function W(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",function Ca(e){b.mouse.mouseIgnoreJob||mn(!0),b.mouse.target=qe(e)[0],b.mouse.mouseIgnoreJob=$.debounce(b.mouse.mouseIgnoreJob,ue.after(2500),function(){mn(),b.mouse.target=null,b.mouse.mouseIgnoreJob=null})},!!Nt&&{passive:!0});const qe=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],ge={},j=[];function B(e){const t=qe(e);return t.length>0?t[0]:e.target}function gn(e){let t,i=e.type,n=e.currentTarget[Ue];if(!n)return;let s=n[i];if(s){if(!e[je]&&(e[je]={},"touch"===i.slice(0,5))){let o=e.changedTouches[0];if("touchstart"===i&&1===e.touches.length&&(b.touch.id=o.identifier),b.touch.id!==o.identifier)return;Tt||("touchstart"===i||"touchmove"===i)&&function Ea(e){let t=e.changedTouches[0],i=e.type;if("touchstart"===i)b.touch.x=t.clientX,b.touch.y=t.clientY,b.touch.scrollDecided=!1;else if("touchmove"===i){if(b.touch.scrollDecided)return;b.touch.scrollDecided=!0;let r=function Pa(e){let t="auto",i=qe(e);for(let n,r=0;r<i.length;r++)if(n=i[r],n[At]){t=n[At];break}return t}(e),n=!1,s=Math.abs(b.touch.x-t.clientX),o=Math.abs(b.touch.y-t.clientY);e.cancelable&&("none"===r?n=!0:"pan-x"===r?n=o>s:"pan-y"===r&&(n=s>o)),n?e.preventDefault():Ke("track")}}(e)}if(t=e[je],!t.skip){for(let a,o=0;o<j.length;o++)a=j[o],s[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let a,o=0;o<j.length;o++)a=j[o],s[a.name]&&!t[a.name]&&(t[a.name]=!0,a[i](e))}}}function kt(e){j.push(e);for(let t=0;t<e.emits.length;t++)ge[e.emits[t]]=e}function bn(e,t){Tt&&e instanceof HTMLElement&&L.run(()=>{e.style.touchAction=t}),e[At]=t}function Dt(e,t,i){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=i,f(e).dispatchEvent(r),r.defaultPrevented){let n=i.preventer||i.sourceEvent;n&&n.preventDefault&&n.preventDefault()}}function Ke(e){let t=function Ia(e){for(let i,t=0;t<j.length;t++){i=j[t];for(let n,r=0;r<i.emits.length;r++)if(n=i.emits[r],n===e)return i}return null}(e);t.info&&(t.info.prevent=!0)}function be(e,t,i,r){!t||Dt(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:r,prevent:function(n){return Ke(n)}})}function vn(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),n=Math.abs(e.y-i);return r>=5||n>=5}function Mt(e,t,i){if(!t)return;let a,r=e.moves[e.moves.length-2],n=e.moves[e.moves.length-1],l=0;r&&(a=n.x-r.x,l=n.y-r.y),Dt(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:n.x-e.x,dy:n.y-e.y,ddx:a,ddy:l,sourceEvent:i,hover:function(){return function xa(e,t){let i=document.elementFromPoint(e,t),r=i;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let n=r;if(r=r.shadowRoot.elementFromPoint(e,t),n===r)break;r&&(i=r)}return i}(i.clientX,i.clientY)}})}function wn(e,t,i){let r=Math.abs(t.clientX-e.x),n=Math.abs(t.clientY-e.y),s=B(i||t);!s||ba[s.localName]&&s.hasAttribute("disabled")||(isNaN(r)||isNaN(n)||r<=25&&n<=25||function Sa(e){if("click"===e.type){if(0===e.detail)return!0;let t=B(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),r=e.pageX,n=e.pageY;return!(r>=i.left&&r<=i.right&&n>=i.top&&n<=i.bottom)}return!1}(t))&&(e.prevent||Dt(s,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}kt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){W(this.info)},mousedown:function(e){if(!U(e))return;let t=B(e),i=this;yn(this.info,function(o){U(o)||(be("up",t,o),W(i.info))},function(o){U(o)&&be("up",t,o),W(i.info)}),be("down",t,e)},touchstart:function(e){be("down",B(e),e.changedTouches[0],e)},touchend:function(e){be("up",B(e),e.changedTouches[0],e)}}),kt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,W(this.info)},mousedown:function(e){if(!U(e))return;let t=B(e),i=this,r=function(o){let a=o.clientX,l=o.clientY;vn(i.info,a,l)&&(i.info.state=i.info.started?"mouseup"===o.type?"end":"track":"start","start"===i.info.state&&Ke("tap"),i.info.addMove({x:a,y:l}),U(o)||(i.info.state="end",W(i.info)),t&&Mt(i.info,t,o),i.info.started=!0)};yn(this.info,r,function(o){i.info.started&&r(o),W(i.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=B(e),i=e.changedTouches[0],r=i.clientX,n=i.clientY;vn(this.info,r,n)&&("start"===this.info.state&&Ke("tap"),this.info.addMove({x:r,y:n}),Mt(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=B(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Mt(this.info,t,i))}}),kt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){U(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){U(e)&&wn(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){wn(this.info,e.changedTouches[0],e)}});const Cn=x(e=>class t extends e{_addEventListenerToNode(r,n,s){(function Ta(e,t,i){return!!ge[t]&&(function Oa(e,t,i){let r=ge[t],n=r.deps,s=r.name,o=e[Ue];o||(e[Ue]=o={});for(let l,p,a=0;a<n.length;a++)l=n[a],(!fn||!Ot(l)||"click"===l)&&(p=o[l],p||(o[l]=p={_count:0}),0===p._count&&e.addEventListener(l,gn,hn(l)),p[s]=(p[s]||0)+1,p._count=(p._count||0)+1);e.addEventListener(t,i),r.touchAction&&bn(e,r.touchAction)}(e,t,i),!0)})(r,n,s)||super._addEventListenerToNode(r,n,s)}_removeEventListenerFromNode(r,n,s){(function Aa(e,t,i){return!!ge[t]&&(function Na(e,t,i){let r=ge[t],n=r.deps,s=r.name,o=e[Ue];if(o)for(let l,p,a=0;a<n.length;a++)l=n[a],p=o[l],p&&p[s]&&(p[s]=(p[s]||1)-1,p._count=(p._count||1)-1,0===p._count&&e.removeEventListener(l,gn,hn(l)));e.removeEventListener(t,i)}(e,t,i),!0)})(r,n,s)||super._removeEventListenerFromNode(r,n,s)}}),ka=/:host\(:dir\((ltr|rtl)\)\)/g,Ma=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,La=/:dir\((?:ltr|rtl)\)/,Sn=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),ve=[];let we=null,Rt="";function Pn(){Rt=document.documentElement.getAttribute("dir")}function xn(e){e.__autoDirOptOut||e.setAttribute("dir",Rt)}function En(){Pn(),Rt=document.documentElement.getAttribute("dir");for(let e=0;e<ve.length;e++)xn(ve[e])}const Fa=x(e=>{Sn||we||(Pn(),we=new MutationObserver(En),we.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Ui(e);return(()=>{class r extends t{static _processStyleText(s,o){return s=t._processStyleText.call(this,s,o),!Sn&&La.test(s)&&(s=this._replaceDirInCssText(s),this.__activateDir=!0),s}static _replaceDirInCssText(s){let o=s;return o=o.replace(ka,':host([dir="$1"])'),o=o.replace(Ma,':host([dir="$2"]) $1'),o}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(function Ba(){we&&we.takeRecords().length&&En()}(),ve.push(this),xn(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const s=ve.indexOf(this);s>-1&&ve.splice(s,1)}}}return r.__activateDir=!1,r})()});function On(){document.body.removeAttribute("unresolved")}function Se(e,t,i){return{index:e,removed:t,addedCount:i}}function kn(e,t){return function $a(e,t,i,r,n,s){let l,o=0,a=0,p=Math.min(i-t,s-n);if(0==t&&0==n&&(o=function Ua(e,t,i){for(let r=0;r<i;r++)if(!Ht(e[r],t[r]))return r;return i}(e,r,p)),i==e.length&&s==r.length&&(a=function ja(e,t,i){let r=e.length,n=t.length,s=0;for(;s<i&&Ht(e[--r],t[--n]);)s++;return s}(e,r,p-o)),n+=o,s-=a,(i-=a)-(t+=o)==0&&s-n==0)return[];if(t==i){for(l=Se(t,[],0);n<s;)l.removed.push(r[n++]);return[l]}if(n==s)return[Se(t,[],i-t)];let c=function Va(e){let t=e.length-1,i=e[0].length-1,r=e[t][i],n=[];for(;t>0||i>0;){if(0==t){n.push(2),i--;continue}if(0==i){n.push(3),t--;continue}let l,s=e[t-1][i-1],o=e[t-1][i],a=e[t][i-1];l=o<a?o<s?o:s:a<s?a:s,l==s?(s==r?n.push(0):(n.push(1),r=s),t--,i--):l==o?(n.push(3),t--,r=o):(n.push(2),i--,r=a)}return n.reverse(),n}(function za(e,t,i,r,n,s){let o=s-n+1,a=i-t+1,l=new Array(o);for(let p=0;p<o;p++)l[p]=new Array(a),l[p][0]=p;for(let p=0;p<a;p++)l[0][p]=p;for(let p=1;p<o;p++)for(let c=1;c<a;c++)if(Ht(e[t+c-1],r[n+p-1]))l[p][c]=l[p-1][c-1];else{let u=l[p-1][c]+1,d=l[p][c-1]+1;l[p][c]=u<d?u:d}return l}(e,t,i,r,n,s));l=void 0;let u=[],d=t,_=n;for(let g=0;g<c.length;g++)switch(c[g]){case 0:l&&(u.push(l),l=void 0),d++,_++;break;case 1:l||(l=Se(d,[],0)),l.addedCount++,d++,l.removed.push(r[_]),_++;break;case 2:l||(l=Se(d,[],0)),l.addedCount++,d++;break;case 3:l||(l=Se(d,[],0)),l.removed.push(r[_]),_++}return l&&u.push(l),u}(e,0,e.length,t,0,t.length)}function Ht(e,t){return e===t}function X(e){return"slot"===e.localName}"interactive"===document.readyState||"complete"===document.readyState?On():window.addEventListener("DOMContentLoaded",On);let Dn=class{static getFlattenedNodes(e){const t=f(e);return X(e)?t.assignedNodes({flatten:!0}):Array.from(t.childNodes).map(i=>X(i)?f(i).assignedNodes({flatten:!0}):[i]).reduce((i,r)=>i.concat(r),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){X(this._target)?this._listenSlots([this._target]):f(this._target).children&&(this._listenSlots(f(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){X(this._target)?this._unlistenSlots([this._target]):f(this._target).children&&(this._unlistenSlots(f(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,L.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=kn(t,this._effectiveNodes);for(let s,n=0;n<i.length&&(s=i[n]);n++)for(let a,o=0;o<s.removed.length&&(a=s.removed[o]);o++)e.removedNodes.push(a);for(let s,n=0;n<i.length&&(s=i[n]);n++)for(let o=s.index;o<s.index+s.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];X(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];X(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const Mn=function(){let e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ha()}while(e||t)},Z=Element.prototype,qa=Z.matches||Z.matchesSelector||Z.mozMatchesSelector||Z.msMatchesSelector||Z.oMatchesSelector||Z.webkitMatchesSelector,Rn=function(e,t){return qa.call(e,t)};class y{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Dn(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(f(this.node).contains(t))return!0;let i=t,r=t.ownerDocument;for(;i&&i!==r&&i!==this.node;)i=f(i).parentNode||f(i).host;return i===this.node}getOwnerRoot(){return f(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?f(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],i=f(this.node).assignedSlot;for(;i;)t.push(i),i=f(i).assignedSlot;return t}importNode(t,i){let r=this.node instanceof Document?this.node:this.node.ownerDocument;return f(r).importNode(t,i)}getEffectiveChildNodes(){return Dn.getFlattenedNodes(this.node)}queryDistributedElements(t){let i=this.getEffectiveChildNodes(),r=[];for(let o,n=0,s=i.length;n<s&&(o=i[n]);n++)o.nodeType===Node.ELEMENT_NODE&&Rn(o,t)&&r.push(o);return r}get activeElement(){let t=this.node;return void 0!==t._activeElement?t._activeElement:t.activeElement}}function Ln(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}class zt{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}let Vt=y;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(y.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=y.prototype[t])}),Ln(e.prototype,["classList"]),Vt=e,Object.defineProperties(zt.prototype,{localTarget:{get(){const t=this.event.currentTarget,i=t&&O(t).getOwnerRoot(),r=this.path;for(let n=0;n<r.length;n++){const s=r[n];if(O(s).getOwnerRoot()===i)return s}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else(function Ka(e,t){for(let i=0;i<t.length;i++){let r=t[i];e[r]=function(){return this.node[r].apply(this.node,arguments)}}})(y.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Ln(y.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),function Ya(e,t){for(let i=0;i<t.length;i++){let r=t[i];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(n){this.node[r]=n},configurable:!0})}}(y.prototype,["textContent","innerHTML","className"]);const O=function(e){if((e=e||document)instanceof Vt||e instanceof zt)return e;let t=e.__domApi;return t||(t=e instanceof Event?new zt(e):new Vt(e),e.__domApi=t),t},$t=window.ShadyDOM,Bn=window.ShadyCSS;function Fn(e,t){return f(e).getRootNode()===t}const Ut="disable-upgrade",Hn=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},Ge=(x(e=>{const t=$e(e);let i=Hn(t);return class r extends t{constructor(){super()}static get observedAttributes(){return i.call(this).concat(Ut)}_initializeProperties(){this.hasAttribute(Ut)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(s){return super._canApplyPropertyDefault(s)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(s))}attributeChangedCallback(s,o,a,l){s==Ut?this.__isUpgradeDisabled&&null==a&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,f(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(s,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}}),"disable-upgrade");let Ga=window.ShadyCSS;const zn=x(e=>{const t=Cn($e(e)),i=Et?t:Fa(t),r=Hn(i),n={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class s extends i{constructor(){super()}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,p){(this.__dataAttributes&&this.__dataAttributes[a]||a===Ge)&&this.attributeChangedCallback(a,l,p,null)}setAttribute(a,l){if(ae&&!this._legacyForceObservedAttributes){const p=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,p,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(ae&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return ae&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],ln(this.prototype)),this.__observedAttributes):r.call(this).concat(Ge)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,p,c){l!==p&&(a==Ge?this.__isUpgradeDisabled&&null==p&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,f(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,p,c),this.attributeChanged(a,l,p)))}attributeChanged(a,l,p){}_initializeProperties(){if(J&&this.hasAttribute(Ge))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ae&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,p=a.length;l<p;l++){const c=a[l];this.__attributeReaction(c.name,null,c.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,p){this._propertyToAttribute(a,l,p)}serializeValueToAttribute(a,l,p){this._valueToNodeAttribute(p||this,a,l)}extend(a,l){if(!a||!l)return a||l;let p=Object.getOwnPropertyNames(l);for(let u,c=0;c<p.length&&(u=p[c]);c++){let d=Object.getOwnPropertyDescriptor(l,u);d&&Object.defineProperty(a,u,d)}return a}mixin(a,l){for(let p in l)a[p]=l[p];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,p){p=p||{},l=l??{};let c=new Event(a,{bubbles:void 0===p.bubbles||p.bubbles,cancelable:Boolean(p.cancelable),composed:void 0===p.composed||p.composed});return c.detail=l,f(p.node||this).dispatchEvent(c),c}listen(a,l,p){a=a||this;let c=this.__boundListeners||(this.__boundListeners=new WeakMap),u=c.get(a);u||(u={},c.set(a,u));let d=l+p;u[d]||(u[d]=this._addMethodEventListenerToNode(a,l,p,this))}unlisten(a,l,p){a=a||this;let c=this.__boundListeners&&this.__boundListeners.get(a),u=l+p,d=c&&c[u];d&&(this._removeEventListenerFromNode(a,l,d),c[u]=null)}setScrollDirection(a,l){bn(l||this,n[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=f(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=O(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return O(this).getEffectiveChildNodes()}queryDistributedElements(a){return O(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c,p=0;c=a[p];p++)c.nodeType!==Node.COMMENT_NODE&&l.push(c.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?O(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(p){return p.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&f(l).contains(a)&&f(l).getRootNode()===f(a).getRootNode()}isLocalDescendant(a){return this.root===f(a).getRootNode()}scopeSubtree(a,l=!1){return function Ja(e,t=!1){if(!$t||!Bn||!$t.handlesDynamicScoping)return null;const i=Bn.ScopingShim;if(!i)return null;const r=i.scopeForNode(e),n=f(e).getRootNode(),s=o=>{if(!Fn(o,n))return;const a=Array.from($t.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const p=a[l];if(!Fn(p,n))continue;const c=i.currentScopeForNode(p);c!==r&&(""!==c&&i.unscopeNode(p,c),i.scopeNode(p,r))}};if(s(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const p=a[l];for(let c=0;c<p.addedNodes.length;c++){const u=p.addedNodes[c];u.nodeType===Node.ELEMENT_NODE&&s(u)}}});return o.observe(e,{childList:!0,subtree:!0}),o}return null}(a,l)}getComputedStyleValue(a){return Ga.getComputedStyleValue(this,a)}debounce(a,l,p){return this._debouncers=this._debouncers||{},this._debouncers[a]=$.debounce(this._debouncers[a],p>0?ue.after(p):L,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!(!l||!l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?ue.run(a.bind(this),l):~L.run(a.bind(this))}cancelAsync(a){a<0?L.cancel(~a):ue.cancel(a)}create(a,l){let p=document.createElement(a);if(l)if(p.setProperties)p.setProperties(l);else for(let c in l)p[c]=l[c];return p}elementMatches(a,l){return Rn(l||this,a)}toggleAttribute(a,l){let p=this;return 3===arguments.length&&(p=arguments[2]),1==arguments.length&&(l=!p.hasAttribute(a)),l?(f(p).setAttribute(a,""),!0):(f(p).removeAttribute(a),!1)}toggleClass(a,l,p){p=p||this,1==arguments.length&&(l=!p.classList.contains(a)),l?p.classList.add(a):p.classList.remove(a)}transform(a,l){(l=l||this).style.webkitTransform=a,l.style.transform=a}translate3d(a,l,p,c){this.transform("translate3d("+a+","+l+","+p+")",c=c||this)}arrayDelete(a,l){let p;if(Array.isArray(a)){if(p=a.indexOf(l),p>=0)return a.splice(p,1)}else if(p=C(this,a).indexOf(l),p>=0)return this.splice(a,p,1);return null}_logger(a,l){switch(Array.isArray(l)&&1===l.length&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return s.prototype.is="",s}),Wa={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Vn={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Xa=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Vn);function $n(e,t,i,r){!function Za(e,t,i){const r=e._noAccessors,n=Object.getOwnPropertyNames(e);for(let s=0;s<n.length;s++){let o=n[s];if(!(o in i))if(r)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}(t,e,r);for(let n in Wa)t[n]&&(i[n]=i[n]||[],i[n].push(t[n]))}function Un(e,t,i){t=t||[];for(let r=e.length-1;r>=0;r--){let n=e[r];n?Array.isArray(n)?Un(n,t):t.indexOf(n)<0&&(!i||i.indexOf(n)<0)&&t.unshift(n):console.warn("behavior is null, check for missing or 404 import")}return t}function jn(e,t){for(const i in t){const r=e[i],n=t[i];e[i]=!("value"in n)&&r&&"value"in r?Object.assign({value:r.value},n):n}}const qn=zn(HTMLElement);function Kn(e,t,i){let r;const n={};class s extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(r)for(let p,l=0;l<r.length;l++)p=r[l],p.properties&&this.createProperties(p.properties),p.observers&&this.createObservers(p.observers,p.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else t._finalizeClass.call(this)}static get properties(){const l={};if(r)for(let p=0;p<r.length;p++)jn(l,r[p].properties);return jn(l,e.properties),l}static get observers(){let l=[];if(r)for(let c,p=0;p<r.length;p++)c=r[p],c.observers&&(l=l.concat(c.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=n.created;if(l)for(let p=0;p<l.length;p++)l[p].call(this)}_registered(){const l=s.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),J&&o(l);const p=Object.getPrototypeOf(this);let c=n.beforeRegister;if(c)for(let u=0;u<c.length;u++)c[u].call(p);if(c=n.registered,c)for(let u=0;u<c.length;u++)c[u].call(p)}}_applyListeners(){super._applyListeners();const l=n.listeners;if(l)for(let p=0;p<l.length;p++){const c=l[p];if(c)for(let u in c)this._addMethodEventListenerToNode(this,u,c[u])}}_ensureAttributes(){const l=n.hostAttributes;if(l)for(let p=l.length-1;p>=0;p--){const c=l[p];for(let u in c)this._ensureAttribute(u,c[u])}super._ensureAttributes()}ready(){super.ready();let l=n.ready;if(l)for(let p=0;p<l.length;p++)l[p].call(this)}attached(){super.attached();let l=n.attached;if(l)for(let p=0;p<l.length;p++)l[p].call(this)}detached(){super.detached();let l=n.detached;if(l)for(let p=0;p<l.length;p++)l[p].call(this)}attributeChanged(l,p,c){super.attributeChanged();let u=n.attributeChanged;if(u)for(let d=0;d<u.length;d++)u[d].call(this,l,p,c)}}if(i){Array.isArray(i)||(i=[i]);let a=t.prototype.behaviors;r=Un(i,null,a),s.prototype.behaviors=a?a.concat(i):r}const o=a=>{r&&function Qa(e,t,i){for(let r=0;r<t.length;r++)$n(e,t[r],i,Xa)}(a,r,n),$n(a,e,n,Vn)};return J||o(s.prototype),s.generatedFrom=e,s}const F=function(e){let t;return t="function"==typeof e?e:F.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};function jt(e,t,i,r,n){let s;n&&(s="object"==typeof i&&null!==i,s&&(r=e.__dataTemp[t]));let o=r!==i&&(r==r||i==i);return s&&o&&(e.__dataTemp[t]=i),o}F.Class=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(qn):qn;return i=Kn(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const We=x(e=>class t extends e{_shouldPropertyChange(r,n,s){return jt(this,r,n,s,!0)}}),Yn=x(e=>class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(r,n,s){return jt(this,r,n,s,this.mutableData)}});We._mutablePropertyChange=jt;let qt=null;function Kt(){return qt}Kt.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Kt,writable:!0}});const Jn=Ve(Kt),to=We(Jn),no=Ve(class{});function Gn(e,t){for(let i=0;i<t.length;i++){let r=t[i];if(Boolean(e)!=Boolean(r.__hideTemplateChildren__))if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"===r.localName)if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),f(f(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{const n=r.__polymerReplaced__;n&&f(f(n).parentNode).replaceChild(r,n)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}class H extends no{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let n=this.root.firstChild;n;n=n.nextSibling)i.push(n),n.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let r=this.__templatizeOptions;(t&&r.instanceProps||!r.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let r in this.__hostProps)this._setPendingProperty(r,this.__dataHost["_host_"+r]);for(let r in t)this._setPendingProperty(r,t[r])}forwardHostProp(t,i){this._setPendingPropertyOrPath(t,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,i,r){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,i,n=>{n.model=this,r(n)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(t,i,r)}}_showHideChildren(t){Gn(t,this.children)}_setUnmanagedPropertyToNode(t,i,r){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&"textContent"==i?t.__polymerTextContent__=r:super._setUnmanagedPropertyToNode(t,i,r)}get parentModel(){let t=this.__parentModel;if(!t){let i;t=this;do{t=t.__dataHost.__dataHost}while((i=t.__templatizeOptions)&&!i.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}const ro=We(H);function Wn(e){let t=e.__dataHost;return t&&t._methodHost||t}function oo(e,t){return function(r,n,s){t.call(r.__templatizeOwner,n.substring(6),s[n])}}function po(e,t){return function(r,n,s){t.call(r.__templatizeOwner,r,n,s[n])}}function Pe(e,t,i){if(V&&!Wn(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let n=(t?t.constructor:H)._parseTemplate(e),s=n.templatizeInstanceClass;s||(s=function so(e,t,i){let r=i.mutableData?ro:H;Pe.mixin&&(r=Pe.mixin(r));let n=class extends r{};return n.prototype.__templatizeOptions=i,n.prototype._bindTemplate(e),function lo(e,t,i,r){let n=i.hostProps||{};for(let s in r.instanceProps){delete n[s];let o=r.notifyInstanceProp;o&&e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:po(0,o)})}if(r.forwardHostProp&&t.__dataHost)for(let s in n)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(t,i,r){t.__dataHost._setPendingPropertyOrPath("_host_"+i,r[i],!0,!0)}})}(n,e,t,i),n}(e,n,i),n.templatizeInstanceClass=s);const o=Wn(e);!function ao(e,t,i,r){let n=i.forwardHostProp;if(n&&t.hasHostProps){const s="template"==e.localName;let o=t.templatizeTemplateClass;if(!o){if(s){let l=i.mutableData?to:Jn;class p extends l{}o=t.templatizeTemplateClass=p}else{const l=e.constructor;class p extends l{}o=t.templatizeTemplateClass=p}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:oo(0,n)}),o.prototype._createNotifyingProperty("_host_"+l);ut&&r&&function uo(e,t,i){const r=i.constructor._properties,{propertyEffects:n}=e,{instanceProps:s}=t;for(let o in n)if(!(r[o]||s&&s[o])){const a=n[o];for(let l=0;l<a.length;l++){const{part:p}=a[l].info;if(!p.signature||!p.signature.static){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}(t,i,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),s)(function io(e,t){qt=e,Object.setPrototypeOf(e,t.prototype),new t,qt=null})(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const p=e[l];delete e[l],e.__data[l]=p}}}}(e,n,i,o);let a=class extends s{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=n.hostProps,a}let Zn=!1;function Yt(){if(J&&!Ci){if(!Zn){Zn=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const ho=Cn(Yn(Ve(HTMLElement)));customElements.define("dom-bind",class fo extends ho{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),V)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,i,r,n){this.mutableData=!0}connectedCallback(){Yt()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){f(f(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let i=new MutationObserver(()=>{if(t=this.querySelector("template"),!t)throw new Error("dom-bind requires a <template> child");i.disconnect(),this.render()});return void i.observe(this,{childList:!0})}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});const Qn=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class Jt{constructor(t,i){tr(t,i);const r=i.reduce((n,s,o)=>n+er(s)+t[o+1],t[0]);this.value=r.toString()}toString(){return this.value}}function er(e){if(e instanceof Jt)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}const N=function(t,...i){tr(t,i);const r=document.createElement("template");let n=i.reduce((s,o,a)=>s+function _o(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Jt)return er(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}(o)+t[a+1],t[0]);return Qn&&(n=Qn.createHTML(n)),r.innerHTML=n,r},tr=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")},Xe=$e(HTMLElement),mo=Yn(Xe);class ir extends mo{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!Le,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Yt()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=f(f(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let i=this.template=t._templateInfo?t:this.querySelector("template");if(!i){let n=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");n.disconnect(),this.__render()});return n.observe(this,{childList:!0}),!1}let r={};r[this.as]=!0,r[this.indexAs]=!0,r[this.itemsIndexAs]=!0,this.__ctor=Pe(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:r,forwardHostProp:function(n,s){let o=this.__instances;for(let l,a=0;a<o.length&&(l=o[a]);a++)l.forwardHostProp(n,s)},notifyInstanceProp:function(n,s,o){if(function ps(e,t){return e===t||Li(e,t)||le(e,t)}(this.as,s)){let a=n[this.itemsIndexAs];s==this.as&&(this.items[a]=o);let l=pe(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,s);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if("string"==typeof t){let i=t,r=this.__getMethodHost();return function(){return r[i].apply(r,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn)if(t){if(this.__observePaths){let i=this.__observePaths;for(let r=0;r<i.length;r++)0===t.indexOf(i[r])&&this.__debounceRender(this.__render,this.delay)}}else this.__debounceRender(this.__render,this.delay)}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||("items"===t.path&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,i=0){this.__renderDebouncer=$.debounce(this.__renderDebouncer,i>0?ue.after(i):L,t.bind(this)),pn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Mn()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const i=this.__sortAndFilterItems(t),r=this.__calculateLimit(i.length);this.__updateInstances(t,r,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!Le||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=r;return this.__filterFn&&(i=i.filter((r,n,s)=>this.__filterFn(t[r],n,s))),this.__sortFn&&i.sort((r,n)=>this.__sortFn(t[r],t[n])),i}__calculateLimit(t){let i=t;const r=this.__instances.length;if(this.initialCount){let n;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(t,this.initialCount),n=Math.max(i-r,0),this.__chunkCount=n||1):(n=Math.min(Math.max(t-r,0),this.__chunkCount),i=Math.min(r+n,t)),this.__shouldMeasureChunk=n===this.__chunkCount,this.__shouldContinueChunking=i<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime;this.__chunkCount=Math.round(this.__chunkCount*(this._targetFrameTime/t))||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,i,r){const n=this.__itemsIdxToInstIdx={};let s;for(s=0;s<i;s++){let o=this.__instances[s],a=r[s],l=t[a];n[a]=s,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,s),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,s,a)}for(let o=this.__instances.length-1;o>=s;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let i=this.__instances[t];const r=f(i.root);for(let n=0;n<i.children.length;n++)r.appendChild(i.children[n]);return i}__attachInstance(t,i){i.insertBefore(this.__instances[t].root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,i,r){let n={};return n[this.as]=t,n[this.indexAs]=i,n[this.itemsIndexAs]=r,new this.__ctor(n)}__insertInstance(t,i,r){const n=this.__stampInstance(t,i,r);let s=this.__instances[i+1],o=s?s.children[0]:this;return f(f(this).parentNode).insertBefore(n.root,o),this.__instances[i]=n,n}_showHideChildren(t){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(t)}__handleItemPath(t,i){let r=t.slice(6),n=r.indexOf("."),s=n<0?r:r.substring(0,n);if(s==parseInt(s,10)){let o=n<0?"":r.substring(n+1);this.__handleObservedPaths(o);let l=this.__instances[this.__itemsIdxToInstIdx[s]];return l&&(l._setPendingPropertyOrPath(this.as+(o?"."+o:""),i,!1,!0),l._flushProperties()),!0}}itemForElement(t){let i=this.modelForElement(t);return i&&i[this.as]}indexForElement(t){let i=this.modelForElement(t);return i&&i[this.indexAs]}modelForElement(t){return function Xn(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance){if(i.__dataHost==e)return i;t=i.__dataHost}else t=f(t).parentNode;return null}(this.template,t)}}customElements.define(ir.is,ir);class nr extends Xe{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=$.debounce(this.__renderDebouncer,L,()=>this.__render()),pn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=f(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!f(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Yt()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let i=t._templateInfo?t:f(t).querySelector("template");if(!i){let r=new MutationObserver(()=>{if(!f(this).querySelector("template"))throw new Error("dom-if requires a <template> child");r.disconnect(),this.__render()});return r.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let t=f(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&f(this).previousSibling!==i[i.length-1])for(let s,n=0;n<i.length&&(s=i[n]);n++)f(t).insertBefore(s,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){Mn()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!Le||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}const rr=ft?class yo extends nr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const i=this.__dataHost||this;if(V&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const r=i._bindTemplate(this.__template,!0);r.runEffects=(n,s,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),s=Object.assign(a.changedProps,s)),n(s,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:n,changedProps:{}}),o)for(const l in s){const p=k(l);a.changedProps[p]=this.__dataHost[p]}else Object.assign(a.changedProps,s)},this.__instance=i._stampTemplate(this.__template,r),f(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){this.__instance&&((this.__dataHost||this)._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,Gn(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}:class go extends nr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return Boolean(this.__instance)}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Pe(this.__template,this,{mutableData:!0,forwardHostProp:function(i,r){this.__instance&&(this.if?this.__instance.forwardHostProp(i,r):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[k(i)]=!0))}})),this.__instance=new this.__ctor,f(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let i=f(t[0]).parentNode;if(i){i=f(i);for(let n,r=0;r<t.length&&(n=t[r]);r++)i.removeChild(n)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let i in t)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&Boolean(this.__instance.__hidden)!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}};customElements.define(rr.is,rr);let bo=x(e=>{let t=$e(e);return class i extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(n,s){let o=s.path;if(o==JSCompiler_renameProperty("items",this)){let a=s.base||[],l=this.__lastItems;if(n!==this.__lastMulti&&this.clearSelection(),l){let c=kn(a,l);this.__applySplices(c)}this.__lastItems=a,this.__lastMulti=n}else if(s.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(s.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(n){let s=this.__selectedMap;for(let a=0;a<n.length;a++){let l=n[a];s.forEach((p,c)=>{p<l.index||s.set(c,p>=l.index+l.removed.length?p+l.addedCount-l.removed.length:-1)});for(let p=0;p<l.addedCount;p++){let c=l.index+p;s.has(this.items[c])&&s.set(this.items[c],c)}}this.__updateLinks();let o=0;s.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,s.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let n=0;this.__selectedMap.forEach(s=>{s>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${s}`,`${JSCompiler_renameProperty("selected",this)}.${n++}`)})}else this.__selectedMap.forEach(n=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${n}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${n}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(n){return this.__selectedMap.has(n)}isIndexSelected(n){return this.isSelected(this.items[n])}__deselectChangedIdx(n){let s=this.__selectedIndexForItemIndex(n);if(s>=0){let o=0;this.__selectedMap.forEach((a,l)=>{s==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(n){let s=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${n}`];if(s)return parseInt(s.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(n){let s=this.__selectedMap.get(n);if(s>=0){let o;this.__selectedMap.delete(n),this.multi&&(o=this.__selectedIndexForItemIndex(s)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(n){this.deselect(this.items[n])}select(n){this.selectIndex(this.items.indexOf(n))}selectIndex(n){let s=this.items[n];this.isSelected(s)?this.toggle&&this.deselectIndex(n):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(s,n),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),s):this.selected=this.selectedItem=s)}}})(Xe);class sr extends bo{static get is(){return"array-selector"}static get template(){return null}}customElements.define(sr.is,sr);const Ze=new R;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){Ze.processStyles(),rt(e,t)},styleElement(e){Ze.processStyles()},styleDocument(e){Ze.processStyles(),rt(document.body,e)},getComputedStyleValue:(e,t)=>_i(e,t),flushCustomStyles(){},nativeCss:tt,nativeShadow:xe,cssBuild:te,disableRuntime:ti}),window.ShadyCSS.CustomStyleInterface=Ze;const ar="include",vo=window.ShadyCSS.CustomStyleInterface;class wo extends HTMLElement{constructor(){super(),this._style=null,vo.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const i=t.getAttribute(ar);return i&&(t.removeAttribute(ar),t.textContent=function as(e){let t=e.trim().split(/\s+/),i="";for(let r=0;r<t.length;r++)i+=os(t[r]);return i}(i)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}let Gt;window.customElements.define("custom-style",wo),Gt=We._mutablePropertyChange,Boolean,zn(HTMLElement);const or=N`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;or.setAttribute("style","display: none;"),document.head.appendChild(or.content);var lr=document.createElement("style");lr.textContent="[hidden] { display: none !important; }",document.head.appendChild(lr);const Wt={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused("focus"===e.type)},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):void 0!==this._oldTabIndex&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};class E{constructor(t){E[" "](t),this.type=t&&t.type||"default",this.key=t&&t.key,t&&"value"in t&&(this.value=t.value)}get value(){var t=this.type,i=this.key;if(t&&i)return E.types[t]&&E.types[t][i]}set value(t){var i=this.type,r=this.key;i&&r&&(i=E.types[i]=E.types[i]||{},null==t?delete i[r]:i[r]=t)}get list(){if(this.type){var i=E.types[this.type];return i?Object.keys(i).map(function(r){return Co[this.type][r]},this):[]}}byKey(t){return this.key=t,this.value}}E[" "]=function(){},E.types={};var Co=E.types;F({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,i){var r=new E({type:e,key:t});return void 0!==i&&i!==r.value?r.value=i:this.value!==r.value&&(this.value=r.value),r},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new E({type:this.type,key:e}).value}});let Xt=null;const pr={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){Xt=new E({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Xt&&Xt.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return this.invalid=void 0===e&&void 0!==this.value?!this._getValidity(this.value):!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};if(F({_template:N`
    <style>
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        border: 1px solid;
        padding: 2px;
        -moz-appearance: textarea;
        -webkit-appearance: textarea;
        overflow: hidden;
      }

      .mirror-text {
        visibility: hidden;
        word-wrap: break-word;
        @apply --iron-autogrow-textarea;
      }

      .fit {
        @apply --layout-fit;
      }

      textarea {
        position: relative;
        outline: none;
        border: none;
        resize: none;
        background: inherit;
        color: inherit;
        /* see comments in template */
        width: 100%;
        height: 100%;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit;
        text-align: inherit;
        @apply --iron-autogrow-textarea;
      }

      textarea::-webkit-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea::-moz-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }

      textarea:-ms-input-placeholder {
        @apply --iron-autogrow-textarea-placeholder;
      }
    </style>

    <!-- the mirror sizes the input/textarea so it grows with typing -->
    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->
    <div id="mirror" class="mirror-text" aria-hidden="true">&nbsp;</div>

    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->
    <div class="textarea-container fit">
      <textarea id="textarea" name$="[[name]]" aria-label$="[[label]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" autocapitalize$="[[autocapitalize]]" inputmode$="[[inputmode]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" disabled$="[[disabled]]" rows$="[[rows]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]"></textarea>
    </div>
`,is:"iron-autogrow-textarea",behaviors:[pr,Wt],properties:{value:{observer:"_valueChanged",type:String,notify:!0},bindValue:{observer:"_bindValueChanged",type:String,notify:!0},rows:{type:Number,value:1,observer:"_updateCached"},maxRows:{type:Number,value:0,observer:"_updateCached"},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,value:!1},autocapitalize:{type:String,value:"none"},inputmode:{type:String},placeholder:{type:String},readonly:{type:String},required:{type:Boolean},minlength:{type:Number},maxlength:{type:Number},label:{type:String}},listeners:{input:"_onInput"},get textarea(){return this.$.textarea},get selectionStart(){return this.$.textarea.selectionStart},get selectionEnd(){return this.$.textarea.selectionEnd},set selectionStart(e){this.$.textarea.selectionStart=e},set selectionEnd(e){this.$.textarea.selectionEnd=e},attached:function(){navigator.userAgent.match(/iP(?:[oa]d|hone)/)&&!navigator.userAgent.match(/OS 1[3456789]/)&&(this.$.textarea.style.marginLeft="-3px")},validate:function(){var e=this.$.textarea.validity.valid;return e&&(this.required&&""===this.value?e=!1:this.hasValidator()&&(e=pr.validate.call(this,this.value))),this.invalid=!e,this.fire("iron-input-validate"),e},_bindValueChanged:function(e){this.value=e},_valueChanged:function(e){var t=this.textarea;!t||(t.value!==e&&(t.value=e||0===e?e:""),this.bindValue=e,this.$.mirror.innerHTML=this._valueForMirror(),this.fire("bind-value-changed",{value:this.bindValue}))},_onInput:function(e){var t=O(e).path;this.value=t?t[0].value:e.target.value},_constrain:function(e){var t;for(e=e||[""],t=this.maxRows>0&&e.length>this.maxRows?e.slice(0,this.maxRows):e.slice(0);this.rows>0&&t.length<this.rows;)t.push("");return t.join("<br/>")+"&#160;"},_valueForMirror:function(){var e=this.textarea;if(e)return this.tokens=e&&e.value?e.value.replace(/&/gm,"&amp;").replace(/"/gm,"&quot;").replace(/'/gm,"&#39;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").split("\n"):[""],this._constrain(this.tokens)},_updateCached:function(){this.$.mirror.innerHTML=this._constrain(this.tokens)}}),!window.polymerSkipLoadingFontRoboto){const e=document.createElement("link");e.rel="stylesheet",e.type="text/css",e.crossOrigin="anonymous",e.href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic",document.head.appendChild(e)}const cr=N`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`;cr.setAttribute("style","display: none;"),document.head.appendChild(cr.content);const ur={attached:function(){this.fire("addon-attached")},update:function(e){}};F({_template:N`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[ur],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const dr=N`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;dr.setAttribute("style","display: none;"),document.head.appendChild(dr.content);const hr=N`
<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.js for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`;hr.setAttribute("style","display: none;"),document.head.appendChild(hr.content);const fr=N`
<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        margin: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: var(--paper-input-container-input-align, bottom);

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>
`;fr.setAttribute("style","display: none;"),document.head.appendChild(fr.content),F({_template:N`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }


      .input-content ::slotted(label):before,
      .input-content ::slotted(.paper-input-label):before {
        @apply --paper-input-container-label-before;
      }

      .input-content ::slotted(label):after,
      .input-content ::slotted(.paper-input-label):after {
        @apply --paper-input-container-label-after;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(iron-input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        /* The apply shim doesn't apply the nested color custom property,
          so we have to re-apply it here. */
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(iron-input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(iron-input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return bt(this.attrForValue)},get _inputElement(){return O(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value||""===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;this._inputHasContent=!(!t&&0!==t&&("number"!==e.type||e.checkValidity())),this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){var t;this.autoValidate&&e&&(t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t),this._handleValue(e)},_onIronInputValidate:function(e){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t,i=0;t=this._addons[i];i++)t.update(e)},_computeInputContentClass:function(e,t,i,r,n){var s="input-content";if(e)n&&(s+=" label-is-hidden"),r&&(s+=" is-invalid");else{var o=this.querySelector("label");t||n?(s+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",r?s+=" is-invalid":i&&(s+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),r&&(s+=" is-invalid"))}return i&&(s+=" focused"),s},_computeUnderlineClass:function(e,t){var i="underline";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i},_computeAddOnContentClass:function(e,t){var i="add-on-content";return t?i+=" is-invalid":e&&(i+=" is-highlighted"),i}}),F({_template:N`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      }

      #a11yWrapper {
        visibility: hidden;
      }

      :host([invalid]) #a11yWrapper {
        visibility: visible;
      }
    </style>

    <!--
    If the paper-input-error element is directly referenced by an
    \`aria-describedby\` attribute, such as when used as a paper-input add-on,
    then applying \`visibility: hidden;\` to the paper-input-error element itself
    does not hide the error.

    For more information, see:
    https://www.w3.org/TR/accname-1.1/#mapping_additional_nd_description
    -->
    <div id="a11yWrapper">
      <slot></slot>
    </div>
`,is:"paper-input-error",behaviors:[ur],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const So={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1}},attached:function(){},detached:function(){}};var _r={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Po={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},mr={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},xo=/[a-z0-9*]/,Eo=/U\+/,To=/^arrow/,Ao=/^space(bar)?/,Oo=/^escape$/;function yr(e,t){var i="";if(e){var r=e.toLowerCase();" "===r||Ao.test(r)?i="space":Oo.test(r)?i="esc":1==r.length?(!t||xo.test(r))&&(i=r):i=To.test(r)?r.replace("arrow",""):"multiply"==r?"*":r}return i}function gr(e,t){return function ko(e,t){return e.key?yr(e.key,t):e.detail&&e.detail.key?yr(e.detail.key,t):function No(e){var t="";return e&&(e in _r?t=_r[e]:Eo.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}(e.keyIdentifier)||function Io(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):Po[e]),t}(e.keyCode)||""}(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function br(e){return e.trim().split(" ").map(function(t){return function Do(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(t,i){var r=i.split(":"),n=r[0],s=r[1];return n in mr?(t[mr[n]]=!0,t.hasModifiers=!0):(t.key=n,t.event=s||"keydown"),t},{combo:e.split(":").shift()})}(t)})}const Mo={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=br(t),r=0;r<i.length;++r)if(gr(i[r],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(t){return t.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var r in i)this._addKeyBinding(r,i[r])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(i,r){var n=i[0].hasModifiers;return n===r[0].hasModifiers?0:n?-1:1})},_addKeyBinding:function(e,t){br(e).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){!this.keyEventTarget||Object.keys(this._keyBindings).forEach(function(e){var i=this._onKeyBindingEvent.bind(this,this._keyBindings[e]);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e;this._boundKeyHandlers.length;)(e=this._boundKeyHandlers.pop())[0].removeEventListener(e[1],e[2])},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var r=e[i][0],n=e[i][1];if(gr(r,t)&&(this._triggerKeyHandler(r,n,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var r=Object.create(e);r.keyboardEvent=i;var n=new CustomEvent(e.event,{detail:r,cancelable:!0});this[t].call(this,n),n.defaultPrevented&&i.preventDefault()}},Q={NextLabelID:1,NextAddonID:1,NextInputID:1},Ro=[Wt,Mo,{properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!Xe&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e?e+" "+t:t},_onAddonAttached:function(e){var t=O(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var i="paper-input-add-on-"+Q.NextAddonID++;t.id=i,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,i)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Wt._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(e){var t=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",t),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(e){try{var t=this.inputElement.selectionStart;this.value=e,this.inputElement.selectionStart=t,this.inputElement.selectionEnd=t}catch{this.value=e}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var t,e=O(this.root).querySelector("label");e?(e.id?t=e.id:(t="paper-input-label-"+Q.NextLabelID++,e.id=t),this._ariaLabelledBy=t):this._ariaLabelledBy=""},_generateInputId:function(){(!this._inputId||""===this._inputId)&&(this._inputId="input-"+Q.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement;e instanceof HTMLElement&&e!==document.body&&e!==document.documentElement||this._focusableElement.focus()}}}];F({_template:N`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container no-label-float$="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate$="[[autoValidate]]" disabled$="[[disabled]]" invalid="[[invalid]]">

      <label hidden$="[[!label]]" aria-hidden="true" for$="[[_inputId]]" slot="label">[[label]]</label>

      <iron-autogrow-textarea class="paper-input-input" slot="input" id$="[[_inputId]]" aria-labelledby$="[[_ariaLabelledBy]]" aria-describedby$="[[_ariaDescribedBy]]" bind-value="{{value}}" invalid="{{invalid}}" validator$="[[validator]]" disabled$="[[disabled]]" autocomplete$="[[autocomplete]]" autofocus$="[[autofocus]]" inputmode$="[[inputmode]]" name$="[[name]]" placeholder$="[[placeholder]]" readonly$="[[readonly]]" required$="[[required]]" minlength$="[[minlength]]" maxlength$="[[maxlength]]" autocapitalize$="[[autocapitalize]]" rows$="[[rows]]" max-rows$="[[maxRows]]" on-change="_onChange"></iron-autogrow-textarea>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
`,is:"paper-textarea",behaviors:[Ro,So],properties:{_ariaLabelledBy:{observer:"_ariaLabelledByChanged",type:String},_ariaDescribedBy:{observer:"_ariaDescribedByChanged",type:String},value:{type:String},rows:{type:Number,value:1},maxRows:{type:Number,value:0}},get selectionStart(){return this.$.input.textarea.selectionStart},set selectionStart(e){this.$.input.textarea.selectionStart=e},get selectionEnd(){return this.$.input.textarea.selectionEnd},set selectionEnd(e){this.$.input.textarea.selectionEnd=e},_ariaLabelledByChanged:function(e){this._focusableElement.setAttribute("aria-labelledby",e)},_ariaDescribedByChanged:function(e){this._focusableElement.setAttribute("aria-describedby",e)},get _focusableElement(){return this.inputElement.textarea}});var D=q(433),h=q(1571),Lo=q(1481);let Bo=(()=>{class e{constructor(i,r,n){this.renderer=i,this.elementRef=r,this.sanitizer=n}onInput(i){this.onChange(i.target.innerHTML)}onBlur(){this.onTouch()}writeValue(i){this.renderer.setProperty(this.elementRef.nativeElement,"innerHTML",this.sanitizer.sanitize(h.q3G.HTML,i)||'<h4 data-placeholder="Title..."></h4>  <p data-placeholder="Describe Your Experiance..."></p>')}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouch=i}setDisabledState(i){this.renderer.setProperty(this.elementRef.nativeElement,"contentEditable",!i)}}return e.\u0275fac=function(i){return new(i||e)(h.Y36(h.Qsj),h.Y36(h.SBq),h.Y36(Lo.H7))},e.\u0275dir=h.lG2({type:e,selectors:[["","formControlName","","contenteditable",""],["","formControl","","contenteditable",""],["","ngModel","","contenteditable",""]],hostBindings:function(i,r){1&i&&h.NdJ("input",function(s){return r.onInput(s)})("blur",function(){return r.onBlur()})},standalone:!0,features:[h._Bn([{provide:D.JU,useExisting:e,multi:!0}])]}),e})();const Fo=function(e){return{disabled:e}},Qe=function(e){return{active:e}};let Ho=(()=>{class e{constructor(i){this.cd=i,this.value=null,this.disabled=!1,this.change=new h.vpe,this.tabIndex=0,this.onChange=()=>{},this.onTouch=()=>{}}onBlur(){this.onTouch()}ngOnChanges(i){i.value&&this.onChange(i.value.currentValue)}writeValue(i){this.value=i,this.cd.markForCheck()}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouch=i}setDisabledState(i){this.disabled=i,this.cd.markForCheck()}setValue(i){this.disabled||(this.value=i,this.onChange(this.value),this.onTouch(),this.change.emit(this.value))}}return e.\u0275fac=function(i){return new(i||e)(h.Y36(h.sBO))},e.\u0275cmp=h.Xpm({type:e,selectors:[["cfc-rating-picker"]],hostVars:1,hostBindings:function(i,r){1&i&&h.NdJ("blur",function(){return r.onBlur()}),2&i&&h.uIk("tabIndex",r.tabIndex)},inputs:{value:"value",disabled:"disabled",tabIndex:"tabIndex"},outputs:{change:"change"},standalone:!0,features:[h._Bn([{provide:D.JU,useExisting:e,multi:!0}]),h.TTD,h.jDz],decls:9,vars:15,consts:[[1,"rating-options",3,"ngClass"],[3,"ngClass","click"]],template:function(i,r){1&i&&(h.TgZ(0,"ul",0)(1,"li",1),h.NdJ("click",function(){return r.setValue("great")}),h._uU(2,"\u{1f44c}"),h.qZA(),h.TgZ(3,"li",1),h.NdJ("click",function(){return r.setValue("good")}),h._uU(4,"\u{1f60a}"),h.qZA(),h.TgZ(5,"li",1),h.NdJ("click",function(){return r.setValue("neutral")}),h._uU(6,"\u{1f610}"),h.qZA(),h.TgZ(7,"li",1),h.NdJ("click",function(){return r.setValue("bad")}),h._uU(8,"\u{1f97a}"),h.qZA()()),2&i&&(h.Q6J("ngClass",h.VKq(5,Fo,r.disabled)),h.xp6(1),h.Q6J("ngClass",h.VKq(7,Qe,"great"===r.value)),h.xp6(2),h.Q6J("ngClass",h.VKq(9,Qe,"good"===r.value)),h.xp6(2),h.Q6J("ngClass",h.VKq(11,Qe,"neutral"===r.value)),h.xp6(2),h.Q6J("ngClass",h.VKq(13,Qe,"bad"===r.value)))},dependencies:[et.ez,et.mk],styles:["[_nghost-%COMP%]{display:block;width:100%;border-radius:var(--border-radius, 8px)}.rating-options[_ngcontent-%COMP%]{display:flex;justify-content:space-between;box-sizing:border-box;min-width:200px;margin:0;padding:var(--spacing-step, 4px);list-style:none;background-color:var(--color-picker-background, #ffffff);border-radius:var(--border-radius, 8px)}.rating-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{box-sizing:border-box;padding:5px 13px;font-size:var(--font-size-picker-option, 26px);border-radius:var(--border-radius, 8px);cursor:pointer}.rating-options[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, .rating-options[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:var(--color-picker-bg-active, #daeefa)}.rating-options.disabled[_ngcontent-%COMP%]{opacity:.5;pointer-events:none}"],changeDetection:0}),e})(),zo=(()=>{class e{constructor(i){this.fb=i,this.form=this.fb.group({reviewText:"",reviewRating:null})}ngOnInit(){this.sub=this.form.valueChanges.subscribe(console.log)}ngOnDestroy(){this.sub.unsubscribe()}onSubmit(){console.log(this.form.value),this.form.reset()}}return e.\u0275fac=function(i){return new(i||e)(h.Y36(D.qu))},e.\u0275cmp=h.Xpm({type:e,selectors:[["app-rating-picker-page"]],standalone:!0,features:[h.jDz],decls:7,vars:1,consts:[[1,"review",3,"formGroup","ngSubmit"],["formControlName","reviewRating"],["contenteditable","","formControlName","reviewText",1,"review-textarea"]],template:function(i,r){1&i&&(h.TgZ(0,"form",0),h.NdJ("ngSubmit",function(){return r.onSubmit()}),h.TgZ(1,"h3"),h._uU(2,"Course Review"),h.qZA(),h._UZ(3,"cfc-rating-picker",1)(4,"div",2),h.TgZ(5,"button"),h._uU(6,"Save"),h.qZA()()),2&i&&h.Q6J("formGroup",r.form)},dependencies:[et.ez,D.UX,D._Y,D.JJ,D.JL,D.sg,D.u,Bo,Ho],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;justify-content:center;align-items:center;width:100%}",".review[_ngcontent-%COMP%]{width:100%;max-width:450px}"],changeDetection:0}),e})()}}]);
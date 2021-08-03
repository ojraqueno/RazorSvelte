var login=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function r(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function c(t){return document.createElement(t)}function u(){return t=" ",document.createTextNode(t);var t}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let d;function g(t){d=t}const h=[],p=[],m=[],b=[],v=Promise.resolve();let y=!1;function _(t){m.push(t)}let $=!1;const E=new Set;function A(){if(!$){$=!0;do{for(let t=0;t<h.length;t+=1){const e=h[t];g(e),L(e.$$)}for(g(null),h.length=0;p.length;)p.pop()();for(let t=0;t<m.length;t+=1){const e=m[t];E.has(e)||(E.add(e),e())}m.length=0}while(h.length);for(;b.length;)b.pop()();y=!1,$=!1,E.clear()}}function L(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const w=new Set;function T(t,e){t&&t.i&&(w.delete(t),t.i(e))}function x(t,e,n,s){if(t&&t.o){if(w.has(t))return;w.add(t),undefined.c.push((()=>{w.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function C(t){t&&t.c()}function k(t,n,o,i){const{fragment:a,on_mount:l,on_destroy:c,after_update:u}=t.$$;a&&a.m(n,o),i||_((()=>{const n=l.map(e).filter(r);c?c.push(...n):s(n),t.$$.on_mount=[]})),u.forEach(_)}function N(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function O(t,e){-1===t.$$.dirty[0]&&(h.push(t),y||(y=!0,v.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function S(e,r,o,i,a,c,u,f=[-1]){const h=d;g(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:r.context||[]),callbacks:n(),dirty:f,skip_bound:!1,root:r.target||h.$$.root};u&&u(p.root);let m=!1;if(p.ctx=o?o(e,r.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),m&&O(e,t)),n})):[],p.update(),m=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();r.intro&&T(e.$$.fragment),k(e,r.target,r.anchor,r.customElement),A()}g(h)}class j{$destroy(){N(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function D(e){let n;return{c(){n=c("a"),n.textContent="Login",f(n,"class","btn btn-outline-success"),f(n,"href","/login")},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function M(e){let n,s,r,o;return{c(){n=c("div"),s=c("div"),s.textContent=`${e[0].email}`,r=u(),o=c("a"),o.textContent="Logout",f(s,"class","nav-item p-2"),f(o,"class","btn btn-outline-success"),f(o,"href","/logout"),f(n,"class","navbar-nav")},m(t,e){a(t,n,e),i(n,s),i(n,r),i(n,o)},p:t,d(t){t&&l(n)}}}function I(e){let n,s,r,o,d,g,h,p,m,b,v,y;let _=function(t,e){return t[0].isSigned?M:D}(e)(e);return{c(){n=u(),s=c("header"),r=c("nav"),o=c("div"),d=c("a"),d.textContent="RazorSvelte",g=u(),h=c("button"),h.innerHTML='<span class="navbar-toggler-icon"></span>',p=u(),m=c("div"),b=c("ul"),b.innerHTML='<li class="nav-item"><a class="nav-link active" href="/">Home</a></li> \n                    <li class="nav-item"><a class="nav-link" href="/privacy">Privacy</a></li>',v=u(),y=c("div"),_.c(),f(d,"class","navbar-brand"),f(d,"href","/"),f(h,"class","navbar-toggler"),f(h,"type","button"),f(h,"data-bs-toggle","collapse"),f(h,"data-bs-target","#navbarCollapse"),f(h,"aria-controls","navbarCollapse"),f(h,"aria-expanded","false"),f(h,"aria-label","Toggle navigation"),f(b,"class","navbar-nav me-auto mb-2 mb-md-0"),f(y,"class","d-flex"),f(m,"class","collapse navbar-collapse"),f(m,"id","navbarCollapse"),f(o,"class","container-fluid"),f(r,"class","navbar navbar-expand-md navbar-light fixed-top bg-light")},m(t,e){a(t,n,e),a(t,s,e),i(s,r),i(r,o),i(o,d),i(o,g),i(o,h),i(o,p),i(o,m),i(m,b),i(m,v),i(m,y),_.m(y,null)},p(t,[e]){_.p(t,e)},i:t,o:t,d(t){t&&l(n),t&&l(s),_.d()}}}function P(t){return[(()=>{const t={},e=[];for(let n of document.getElementsByTagName("input"))"hidden"==n.type&&(n.id.startsWith("is")?t[n.id]="true"==n.value.toLowerCase():t[n.id]=n.value,e.push(n));for(let t of e)t.remove();return t})()]}class q extends j{constructor(t){super(),S(this,t,P,I,o,{})}}function H(e){let n,s;return{c(){n=u(),s=c("footer"),s.innerHTML='<div class="container py-5"><span class="text-muted">© 2021 - RazorSvelte - <a href="/privacy">Privacy</a></span></div>',f(s,"class","footer mt-auto py-3 bg-light")},m(t,e){a(t,n,e),a(t,s,e)},p:t,i:t,o:t,d(t){t&&l(n),t&&l(s)}}}class B extends j{constructor(t){super(),S(this,t,null,H,o,{})}}function W(e){let n,s,r,o,i,f;return n=new q({}),i=new B({}),{c(){C(n.$$.fragment),s=u(),r=c("main"),r.innerHTML='<div class="container text-center m-5"><ul class="list-group"><li class="list-group-item svelte-16yx68j"><a class="btn btn-primary btn-lg" href="/signin-google">Login With Google</a></li> \n            <li class="list-group-item svelte-16yx68j"><a class="btn btn-primary btn-lg" href="/signin-linkedin">Login With LinkedIn</a></li> \n            <li class="list-group-item svelte-16yx68j"><a class="btn btn-primary btn-lg" href="/signin-github">Login With GitHub</a></li></ul></div>',o=u(),C(i.$$.fragment)},m(t,e){k(n,t,e),a(t,s,e),a(t,r,e),a(t,o,e),k(i,t,e),f=!0},p:t,i(t){f||(T(n.$$.fragment,t),T(i.$$.fragment,t),f=!0)},o(t){x(n.$$.fragment,t),x(i.$$.fragment,t),f=!1},d(t){N(n,t),t&&l(s),t&&l(r),t&&l(o),N(i,t)}}}const Y={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const n=[];let s=t.parentNode;for(;s&&s.nodeType===Node.ELEMENT_NODE&&3!==s.nodeType;)s.matches(e)&&n.push(s),s=s.parentNode;return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]}},K="transitionend",z=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&"#"!==n?n.trim():null}return e},R=t=>{const e=z(t);return e&&document.querySelector(e)?e:null},F=t=>{const e=z(t);return e?document.querySelector(e):null},Q=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),V=t=>Q(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?Y.findOne(t):null,G=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},U=[],Z=t=>{"function"==typeof t&&t()},J=(t,e,n=!0)=>{if(!n)return void Z(t);const s=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),r=Number.parseFloat(n);return s||r?(e=e.split(",")[0],n=n.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(n))):0})(e)+5;let r=!1;const o=({target:n})=>{n===e&&(r=!0,e.removeEventListener(K,o),Z(t))};e.addEventListener(K,o),setTimeout((()=>{r||(t=>{t.dispatchEvent(new Event(K))})(e)}),s)},X=new Map;var tt={set(t,e,n){X.has(t)||X.set(t,new Map);const s=X.get(t);s.has(e)||0===s.size?s.set(e,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(t,e)=>X.has(t)&&X.get(t).get(e)||null,remove(t,e){if(!X.has(t))return;const n=X.get(t);n.delete(e),0===n.size&&X.delete(t)}};const et=/[^.]*(?=\..*)\.|.*/,nt=/\..*/,st=/::\d+$/,rt={};let ot=1;const it={mouseenter:"mouseover",mouseleave:"mouseout"},at=/^(mouseenter|mouseleave)/i,lt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function ct(t,e){return e&&`${e}::${ot++}`||t.uidEvent||ot++}function ut(t){const e=ct(t);return t.uidEvent=e,rt[e]=rt[e]||{},rt[e]}function ft(t,e,n=null){const s=Object.keys(t);for(let r=0,o=s.length;r<o;r++){const o=t[s[r]];if(o.originalHandler===e&&o.delegationSelector===n)return o}return null}function dt(t,e,n){const s="string"==typeof e,r=s?n:e;let o=pt(t);return lt.has(o)||(o=t),[s,r,o]}function gt(t,e,n,s,r){if("string"!=typeof e||!t)return;if(n||(n=s,s=null),at.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};s?s=t(s):n=t(n)}const[o,i,a]=dt(e,n,s),l=ut(t),c=l[a]||(l[a]={}),u=ft(c,i,o?n:null);if(u)return void(u.oneOff=u.oneOff&&r);const f=ct(i,e.replace(et,"")),d=o?function(t,e,n){return function s(r){const o=t.querySelectorAll(e);for(let{target:i}=r;i&&i!==this;i=i.parentNode)for(let a=o.length;a--;)if(o[a]===i)return r.delegateTarget=i,s.oneOff&&mt.off(t,r.type,e,n),n.apply(i,[r]);return null}}(t,n,s):function(t,e){return function n(s){return s.delegateTarget=t,n.oneOff&&mt.off(t,s.type,e),e.apply(t,[s])}}(t,n);d.delegationSelector=o?n:null,d.originalHandler=i,d.oneOff=r,d.uidEvent=f,c[f]=d,t.addEventListener(a,d,o)}function ht(t,e,n,s,r){const o=ft(e[n],s,r);o&&(t.removeEventListener(n,o,Boolean(r)),delete e[n][o.uidEvent])}function pt(t){return t=t.replace(nt,""),it[t]||t}const mt={on(t,e,n,s){gt(t,e,n,s,!1)},one(t,e,n,s){gt(t,e,n,s,!0)},off(t,e,n,s){if("string"!=typeof e||!t)return;const[r,o,i]=dt(e,n,s),a=i!==e,l=ut(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[i])return;return void ht(t,l,i,o,r?n:null)}c&&Object.keys(l).forEach((n=>{!function(t,e,n,s){const r=e[n]||{};Object.keys(r).forEach((o=>{if(o.includes(s)){const s=r[o];ht(t,e,n,s.originalHandler,s.delegationSelector)}}))}(t,l,n,e.slice(1))}));const u=l[i]||{};Object.keys(u).forEach((n=>{const s=n.replace(st,"");if(!a||e.includes(s)){const e=u[n];ht(t,l,i,e.originalHandler,e.delegationSelector)}}))},trigger(t,e,n){if("string"!=typeof e||!t)return null;const s=G(),r=pt(e),o=e!==r,i=lt.has(r);let a,l=!0,c=!0,u=!1,f=null;return o&&s&&(a=s.Event(e,n),s(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),u=a.isDefaultPrevented()),i?(f=document.createEvent("HTMLEvents"),f.initEvent(r,l,!0)):f=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==n&&Object.keys(n).forEach((t=>{Object.defineProperty(f,t,{get:()=>n[t]})})),u&&f.preventDefault(),c&&t.dispatchEvent(f),f.defaultPrevented&&void 0!==a&&a.preventDefault(),f}};function bt(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function vt(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const yt={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${vt(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${vt(e)}`)},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter((t=>t.startsWith("bs"))).forEach((n=>{let s=n.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),e[s]=bt(t.dataset[n])})),e},getDataAttribute:(t,e)=>bt(t.getAttribute(`data-bs-${vt(e)}`)),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})};const _t="collapse",$t="bs.collapse",Et={toggle:!0,parent:""},At={toggle:"boolean",parent:"(string|element)"},Lt="show",wt="collapse",Tt="collapsing",xt="collapsed",Ct="width",kt='[data-bs-toggle="collapse"]';class Nt extends class{constructor(t){(t=V(t))&&(this._element=t,tt.set(this._element,this.constructor.DATA_KEY,this))}dispose(){tt.remove(this._element,this.constructor.DATA_KEY),mt.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((t=>{this[t]=null}))}_queueCallback(t,e,n=!0){J(t,e,n)}static getInstance(t){return tt.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}{constructor(t,e){super(t),this._isTransitioning=!1,this._config=this._getConfig(e),this._triggerArray=Y.find(`${kt}[href="#${this._element.id}"],${kt}[data-bs-target="#${this._element.id}"]`);const n=Y.find(kt);for(let t=0,e=n.length;t<e;t++){const e=n[t],s=R(e),r=Y.find(s).filter((t=>t===this._element));null!==s&&r.length&&(this._selector=s,this._triggerArray.push(e))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return Et}static get NAME(){return _t}toggle(){this._element.classList.contains(Lt)?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains(Lt))return;let t,e;this._parent&&(t=Y.find(".show, .collapsing",this._parent).filter((t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains(wt))),0===t.length&&(t=null));const n=Y.findOne(this._selector);if(t){const s=t.find((t=>n!==t));if(e=s?Nt.getInstance(s):null,e&&e._isTransitioning)return}if(mt.trigger(this._element,"show.bs.collapse").defaultPrevented)return;t&&t.forEach((t=>{n!==t&&Nt.collapseInterface(t,"hide"),e||tt.set(t,$t,null)}));const s=this._getDimension();this._element.classList.remove(wt),this._element.classList.add(Tt),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach((t=>{t.classList.remove(xt),t.setAttribute("aria-expanded",!0)})),this.setTransitioning(!0);const r=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback((()=>{this._element.classList.remove(Tt),this._element.classList.add(wt,Lt),this._element.style[s]="",this.setTransitioning(!1),mt.trigger(this._element,"shown.bs.collapse")}),this._element,!0),this._element.style[s]=`${this._element[r]}px`}hide(){if(this._isTransitioning||!this._element.classList.contains(Lt))return;if(mt.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,(t=>{t.offsetHeight})(this._element),this._element.classList.add(Tt),this._element.classList.remove(wt,Lt);const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],n=F(e);n&&!n.classList.contains(Lt)&&(e.classList.add(xt),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0);this._element.style[t]="",this._queueCallback((()=>{this.setTransitioning(!1),this._element.classList.remove(Tt),this._element.classList.add(wt),mt.trigger(this._element,"hidden.bs.collapse")}),this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...Et,...t}).toggle=Boolean(t.toggle),((t,e,n)=>{Object.keys(n).forEach((s=>{const r=n[s],o=e[s],i=o&&Q(o)?"element":null==(a=o)?`${a}`:{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();var a;if(!new RegExp(r).test(i))throw new TypeError(`${t.toUpperCase()}: Option "${s}" provided type "${i}" but expected type "${r}".`)}))})(_t,t,At),t}_getDimension(){return this._element.classList.contains(Ct)?Ct:"height"}_getParent(){let{parent:t}=this._config;t=V(t);const e=`${kt}[data-bs-parent="${t}"]`;return Y.find(e,t).forEach((t=>{const e=F(t);this._addAriaAndCollapsedClass(e,[t])})),t}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const n=t.classList.contains(Lt);e.forEach((t=>{n?t.classList.remove(xt):t.classList.add(xt),t.setAttribute("aria-expanded",n)}))}static collapseInterface(t,e){let n=Nt.getInstance(t);const s={...Et,...yt.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!n&&s.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(s.toggle=!1),n||(n=new Nt(t,s)),"string"==typeof e){if(void 0===n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}static jQueryInterface(t){return this.each((function(){Nt.collapseInterface(this,t)}))}}var Ot,St;return mt.on(document,"click.bs.collapse.data-api",kt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();const e=yt.getDataAttributes(this),n=R(this);Y.find(n).forEach((t=>{const n=Nt.getInstance(t);let s;n?(null===n._parent&&"string"==typeof e.parent&&(n._config.parent=e.parent,n._parent=n._getParent()),s="toggle"):s=e,Nt.collapseInterface(t,s)}))})),Ot=Nt,St=()=>{const t=G();if(t){const e=Ot.NAME,n=t.fn[e];t.fn[e]=Ot.jQueryInterface,t.fn[e].Constructor=Ot,t.fn[e].noConflict=()=>(t.fn[e]=n,Ot.jQueryInterface)}},"loading"===document.readyState?(U.length||document.addEventListener("DOMContentLoaded",(()=>{U.forEach((t=>t()))})),U.push(St)):St(),new class extends j{constructor(t){super(),S(this,t,null,W,o,{})}}({target:document.body})}();

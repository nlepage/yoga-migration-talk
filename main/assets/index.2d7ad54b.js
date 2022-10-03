(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();function Vo(t,n){const s=Object.create(null),o=t.split(",");for(let l=0;l<o.length;l++)s[o[l]]=!0;return n?l=>!!s[l.toLowerCase()]:l=>!!s[l]}const Vd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Yd=Vo(Vd);function Ni(t){return!!t||t===""}function ct(t){if(oe(t)){const n={};for(let s=0;s<t.length;s++){const o=t[s],l=qe(o)?Ud(o):ct(o);if(l)for(const r in l)n[r]=l[r]}return n}else{if(qe(t))return t;if(Re(t))return t}}const zd=/;(?![^(]*\))/g,Gd=/:(.+)/;function Ud(t){const n={};return t.split(zd).forEach(s=>{if(s){const o=s.split(Gd);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function je(t){let n="";if(qe(t))n=t;else if(oe(t))for(let s=0;s<t.length;s++){const o=je(t[s]);o&&(n+=o+" ")}else if(Re(t))for(const s in t)t[s]&&(n+=s+" ");return n.trim()}function ne(t){if(!t)return null;let{class:n,style:s}=t;return n&&!qe(n)&&(t.class=je(n)),s&&(t.style=ct(s)),t}const Qd="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Kd=Vo(Qd),In=t=>qe(t)?t:t==null?"":oe(t)||Re(t)&&(t.toString===Vi||!ce(t.toString))?JSON.stringify(t,ji,2):String(t),ji=(t,n)=>n&&n.__v_isRef?ji(t,n.value):es(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,l])=>(s[`${o} =>`]=l,s),{})}:qi(n)?{[`Set(${n.size})`]:[...n.values()]}:Re(n)&&!oe(n)&&!Yi(n)?String(n):n,Pe={},Xn=[],Pt=()=>{},Wd=()=>!1,Jd=/^on[^a-z]/,Yo=t=>Jd.test(t),wr=t=>t.startsWith("onUpdate:"),it=Object.assign,kr=(t,n)=>{const s=t.indexOf(n);s>-1&&t.splice(s,1)},Zd=Object.prototype.hasOwnProperty,ge=(t,n)=>Zd.call(t,n),oe=Array.isArray,es=t=>zo(t)==="[object Map]",qi=t=>zo(t)==="[object Set]",ce=t=>typeof t=="function",qe=t=>typeof t=="string",Sr=t=>typeof t=="symbol",Re=t=>t!==null&&typeof t=="object",Hi=t=>Re(t)&&ce(t.then)&&ce(t.catch),Vi=Object.prototype.toString,zo=t=>Vi.call(t),Xd=t=>zo(t).slice(8,-1),Yi=t=>zo(t)==="[object Object]",Fr=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ao=Vo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Go=t=>{const n=Object.create(null);return s=>n[s]||(n[s]=t(s))},ef=/-(\w)/g,Ut=Go(t=>t.replace(ef,(n,s)=>s?s.toUpperCase():"")),tf=/\B([A-Z])/g,Rn=Go(t=>t.replace(tf,"-$1").toLowerCase()),Uo=Go(t=>t.charAt(0).toUpperCase()+t.slice(1)),ul=Go(t=>t?`on${Uo(t)}`:""),Vs=(t,n)=>!Object.is(t,n),ts=(t,n)=>{for(let s=0;s<t.length;s++)t[s](n)},wo=(t,n,s)=>{Object.defineProperty(t,n,{configurable:!0,enumerable:!1,value:s})},Ml=t=>{const n=parseFloat(t);return isNaN(n)?t:n};let Pa;const nf=()=>Pa||(Pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ht;class zi{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&ht&&(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1)}run(n){if(this.active){const s=ht;try{return ht=this,n()}finally{ht=s}}}on(){ht=this}off(){ht=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function sf(t){return new zi(t)}function of(t,n=ht){n&&n.active&&n.effects.push(t)}function Gi(){return ht}function Ui(t){ht&&ht.cleanups.push(t)}const $r=t=>{const n=new Set(t);return n.w=0,n.n=0,n},Qi=t=>(t.w&hn)>0,Ki=t=>(t.n&hn)>0,lf=({deps:t})=>{if(t.length)for(let n=0;n<t.length;n++)t[n].w|=hn},rf=t=>{const{deps:n}=t;if(n.length){let s=0;for(let o=0;o<n.length;o++){const l=n[o];Qi(l)&&!Ki(l)?l.delete(t):n[s++]=l,l.w&=~hn,l.n&=~hn}n.length=s}},Rl=new WeakMap;let Ss=0,hn=1;const Nl=30;let St;const $n=Symbol(""),jl=Symbol("");class Pr{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,of(this,o)}run(){if(!this.active)return this.fn();let n=St,s=pn;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=St,St=this,pn=!0,hn=1<<++Ss,Ss<=Nl?lf(this):Oa(this),this.fn()}finally{Ss<=Nl&&rf(this),hn=1<<--Ss,St=this.parent,pn=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){St===this?this.deferStop=!0:this.active&&(Oa(this),this.onStop&&this.onStop(),this.active=!1)}}function Oa(t){const{deps:n}=t;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(t);n.length=0}}let pn=!0;const Wi=[];function fs(){Wi.push(pn),pn=!1}function ys(){const t=Wi.pop();pn=t===void 0?!0:t}function Bt(t,n,s){if(pn&&St){let o=Rl.get(t);o||Rl.set(t,o=new Map);let l=o.get(s);l||o.set(s,l=$r()),Ji(l)}}function Ji(t,n){let s=!1;Ss<=Nl?Ki(t)||(t.n|=hn,s=!Qi(t)):s=!t.has(St),s&&(t.add(St),St.deps.push(t))}function Xt(t,n,s,o,l,r){const a=Rl.get(t);if(!a)return;let c=[];if(n==="clear")c=[...a.values()];else if(s==="length"&&oe(t))a.forEach((i,u)=>{(u==="length"||u>=o)&&c.push(i)});else switch(s!==void 0&&c.push(a.get(s)),n){case"add":oe(t)?Fr(s)&&c.push(a.get("length")):(c.push(a.get($n)),es(t)&&c.push(a.get(jl)));break;case"delete":oe(t)||(c.push(a.get($n)),es(t)&&c.push(a.get(jl)));break;case"set":es(t)&&c.push(a.get($n));break}if(c.length===1)c[0]&&ql(c[0]);else{const i=[];for(const u of c)u&&i.push(...u);ql($r(i))}}function ql(t,n){const s=oe(t)?t:[...t];for(const o of s)o.computed&&Ta(o);for(const o of s)o.computed||Ta(o)}function Ta(t,n){(t!==St||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const af=Vo("__proto__,__v_isRef,__isVue"),Zi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Sr)),cf=Or(),pf=Or(!1,!0),uf=Or(!0),La=df();function df(){const t={};return["includes","indexOf","lastIndexOf"].forEach(n=>{t[n]=function(...s){const o=De(this);for(let r=0,a=this.length;r<a;r++)Bt(o,"get",r+"");const l=o[n](...s);return l===-1||l===!1?o[n](...s.map(De)):l}}),["push","pop","shift","unshift","splice"].forEach(n=>{t[n]=function(...s){fs();const o=De(this)[n].apply(this,s);return ys(),o}}),t}function Or(t=!1,n=!1){return function(o,l,r){if(l==="__v_isReactive")return!t;if(l==="__v_isReadonly")return t;if(l==="__v_isShallow")return n;if(l==="__v_raw"&&r===(t?n?kf:sp:n?np:tp).get(o))return o;const a=oe(o);if(!t&&a&&ge(La,l))return Reflect.get(La,l,r);const c=Reflect.get(o,l,r);return(Sr(l)?Zi.has(l):af(l))||(t||Bt(o,"get",l),n)?c:xe(c)?a&&Fr(l)?c:c.value:Re(c)?t?Jn(c):Me(c):c}}const ff=Xi(),yf=Xi(!0);function Xi(t=!1){return function(s,o,l,r){let a=s[o];if(as(a)&&xe(a)&&!xe(l))return!1;if(!t&&(!ko(l)&&!as(l)&&(a=De(a),l=De(l)),!oe(s)&&xe(a)&&!xe(l)))return a.value=l,!0;const c=oe(s)&&Fr(o)?Number(o)<s.length:ge(s,o),i=Reflect.set(s,o,l,r);return s===De(r)&&(c?Vs(l,a)&&Xt(s,"set",o,l):Xt(s,"add",o,l)),i}}function hf(t,n){const s=ge(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Xt(t,"delete",n,void 0),o}function mf(t,n){const s=Reflect.has(t,n);return(!Sr(n)||!Zi.has(n))&&Bt(t,"has",n),s}function gf(t){return Bt(t,"iterate",oe(t)?"length":$n),Reflect.ownKeys(t)}const ep={get:cf,set:ff,deleteProperty:hf,has:mf,ownKeys:gf},vf={get:uf,set(t,n){return!0},deleteProperty(t,n){return!0}},_f=it({},ep,{get:pf,set:yf}),Tr=t=>t,Qo=t=>Reflect.getPrototypeOf(t);function io(t,n,s=!1,o=!1){t=t.__v_raw;const l=De(t),r=De(n);s||(n!==r&&Bt(l,"get",n),Bt(l,"get",r));const{has:a}=Qo(l),c=o?Tr:s?Mr:Ys;if(a.call(l,n))return c(t.get(n));if(a.call(l,r))return c(t.get(r));t!==l&&t.get(n)}function po(t,n=!1){const s=this.__v_raw,o=De(s),l=De(t);return n||(t!==l&&Bt(o,"has",t),Bt(o,"has",l)),t===l?s.has(t):s.has(t)||s.has(l)}function uo(t,n=!1){return t=t.__v_raw,!n&&Bt(De(t),"iterate",$n),Reflect.get(t,"size",t)}function Ia(t){t=De(t);const n=De(this);return Qo(n).has.call(n,t)||(n.add(t),Xt(n,"add",t,t)),this}function Ma(t,n){n=De(n);const s=De(this),{has:o,get:l}=Qo(s);let r=o.call(s,t);r||(t=De(t),r=o.call(s,t));const a=l.call(s,t);return s.set(t,n),r?Vs(n,a)&&Xt(s,"set",t,n):Xt(s,"add",t,n),this}function Ra(t){const n=De(this),{has:s,get:o}=Qo(n);let l=s.call(n,t);l||(t=De(t),l=s.call(n,t)),o&&o.call(n,t);const r=n.delete(t);return l&&Xt(n,"delete",t,void 0),r}function Na(){const t=De(this),n=t.size!==0,s=t.clear();return n&&Xt(t,"clear",void 0,void 0),s}function fo(t,n){return function(o,l){const r=this,a=r.__v_raw,c=De(a),i=n?Tr:t?Mr:Ys;return!t&&Bt(c,"iterate",$n),a.forEach((u,d)=>o.call(l,i(u),i(d),r))}}function yo(t,n,s){return function(...o){const l=this.__v_raw,r=De(l),a=es(r),c=t==="entries"||t===Symbol.iterator&&a,i=t==="keys"&&a,u=l[t](...o),d=s?Tr:n?Mr:Ys;return!n&&Bt(r,"iterate",i?jl:$n),{next(){const{value:f,done:y}=u.next();return y?{value:f,done:y}:{value:c?[d(f[0]),d(f[1])]:d(f),done:y}},[Symbol.iterator](){return this}}}}function on(t){return function(...n){return t==="delete"?!1:this}}function Af(){const t={get(r){return io(this,r)},get size(){return uo(this)},has:po,add:Ia,set:Ma,delete:Ra,clear:Na,forEach:fo(!1,!1)},n={get(r){return io(this,r,!1,!0)},get size(){return uo(this)},has:po,add:Ia,set:Ma,delete:Ra,clear:Na,forEach:fo(!1,!0)},s={get(r){return io(this,r,!0)},get size(){return uo(this,!0)},has(r){return po.call(this,r,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:fo(!0,!1)},o={get(r){return io(this,r,!0,!0)},get size(){return uo(this,!0)},has(r){return po.call(this,r,!0)},add:on("add"),set:on("set"),delete:on("delete"),clear:on("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=yo(r,!1,!1),s[r]=yo(r,!0,!1),n[r]=yo(r,!1,!0),o[r]=yo(r,!0,!0)}),[t,s,n,o]}const[Bf,bf,Df,Cf]=Af();function Lr(t,n){const s=n?t?Cf:Df:t?bf:Bf;return(o,l,r)=>l==="__v_isReactive"?!t:l==="__v_isReadonly"?t:l==="__v_raw"?o:Reflect.get(ge(s,l)&&l in o?s:o,l,r)}const Ef={get:Lr(!1,!1)},xf={get:Lr(!1,!0)},wf={get:Lr(!0,!1)},tp=new WeakMap,np=new WeakMap,sp=new WeakMap,kf=new WeakMap;function Sf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ff(t){return t.__v_skip||!Object.isExtensible(t)?0:Sf(Xd(t))}function Me(t){return as(t)?t:Ir(t,!1,ep,Ef,tp)}function $f(t){return Ir(t,!1,_f,xf,np)}function Jn(t){return Ir(t,!0,vf,wf,sp)}function Ir(t,n,s,o,l){if(!Re(t)||t.__v_raw&&!(n&&t.__v_isReactive))return t;const r=l.get(t);if(r)return r;const a=Ff(t);if(a===0)return t;const c=new Proxy(t,a===2?o:s);return l.set(t,c),c}function ns(t){return as(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function as(t){return!!(t&&t.__v_isReadonly)}function ko(t){return!!(t&&t.__v_isShallow)}function op(t){return ns(t)||as(t)}function De(t){const n=t&&t.__v_raw;return n?De(n):t}function Ko(t){return wo(t,"__v_skip",!0),t}const Ys=t=>Re(t)?Me(t):t,Mr=t=>Re(t)?Jn(t):t;function Rr(t){pn&&St&&(t=De(t),Ji(t.dep||(t.dep=$r())))}function Nr(t,n){t=De(t),t.dep&&ql(t.dep)}function xe(t){return!!(t&&t.__v_isRef===!0)}function G(t){return lp(t,!1)}function Lt(t){return lp(t,!0)}function lp(t,n){return xe(t)?t:new Pf(t,n)}class Pf{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:De(n),this._value=s?n:Ys(n)}get value(){return Rr(this),this._value}set value(n){const s=this.__v_isShallow||ko(n)||as(n);n=s?n:De(n),Vs(n,this._rawValue)&&(this._rawValue=n,this._value=s?n:Ys(n),Nr(this))}}function b(t){return xe(t)?t.value:t}const Of={get:(t,n,s)=>b(Reflect.get(t,n,s)),set:(t,n,s,o)=>{const l=t[n];return xe(l)&&!xe(s)?(l.value=s,!0):Reflect.set(t,n,s,o)}};function rp(t){return ns(t)?t:new Proxy(t,Of)}class Tf{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Rr(this),()=>Nr(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function ap(t){return new Tf(t)}function Lf(t){const n=oe(t)?new Array(t.length):{};for(const s in t)n[s]=Mf(t,s);return n}class If{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Mf(t,n,s){const o=t[n];return xe(o)?o:new If(t,n,s)}var cp;class Rf{constructor(n,s,o,l){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[cp]=!1,this._dirty=!0,this.effect=new Pr(n,()=>{this._dirty||(this._dirty=!0,Nr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const n=De(this);return Rr(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}cp="__v_isReadonly";function Nf(t,n,s=!1){let o,l;const r=ce(t);return r?(o=t,l=Pt):(o=t.get,l=t.set),new Rf(o,l,r||!l,s)}function un(t,n,s,o){let l;try{l=o?t(...o):t()}catch(r){Wo(r,n,s)}return l}function Ot(t,n,s,o){if(ce(t)){const r=un(t,n,s,o);return r&&Hi(r)&&r.catch(a=>{Wo(a,n,s)}),r}const l=[];for(let r=0;r<t.length;r++)l.push(Ot(t[r],n,s,o));return l}function Wo(t,n,s,o=!0){const l=n?n.vnode:null;if(n){let r=n.parent;const a=n.proxy,c=s;for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,a,c)===!1)return}r=r.parent}const i=n.appContext.config.errorHandler;if(i){un(i,null,10,[t,a,c]);return}}jf(t,s,l,o)}function jf(t,n,s,o=!0){console.error(t)}let zs=!1,Hl=!1;const Ze=[];let Ht=0;const ss=[];let Wt=null,Dn=0;const ip=Promise.resolve();let jr=null;function rt(t){const n=jr||ip;return t?n.then(this?t.bind(this):t):n}function qf(t){let n=Ht+1,s=Ze.length;for(;n<s;){const o=n+s>>>1;Gs(Ze[o])<t?n=o+1:s=o}return n}function qr(t){(!Ze.length||!Ze.includes(t,zs&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?Ze.push(t):Ze.splice(qf(t.id),0,t),pp())}function pp(){!zs&&!Hl&&(Hl=!0,jr=ip.then(dp))}function Hf(t){const n=Ze.indexOf(t);n>Ht&&Ze.splice(n,1)}function Vf(t){oe(t)?ss.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Dn+1:Dn))&&ss.push(t),pp()}function ja(t,n=zs?Ht+1:0){for(;n<Ze.length;n++){const s=Ze[n];s&&s.pre&&(Ze.splice(n,1),n--,s())}}function up(t){if(ss.length){const n=[...new Set(ss)];if(ss.length=0,Wt){Wt.push(...n);return}for(Wt=n,Wt.sort((s,o)=>Gs(s)-Gs(o)),Dn=0;Dn<Wt.length;Dn++)Wt[Dn]();Wt=null,Dn=0}}const Gs=t=>t.id==null?1/0:t.id,Yf=(t,n)=>{const s=Gs(t)-Gs(n);if(s===0){if(t.pre&&!n.pre)return-1;if(n.pre&&!t.pre)return 1}return s};function dp(t){Hl=!1,zs=!0,Ze.sort(Yf);const n=Pt;try{for(Ht=0;Ht<Ze.length;Ht++){const s=Ze[Ht];s&&s.active!==!1&&un(s,null,14)}}finally{Ht=0,Ze.length=0,up(),zs=!1,jr=null,(Ze.length||ss.length)&&dp()}}function zf(t,n,...s){if(t.isUnmounted)return;const o=t.vnode.props||Pe;let l=s;const r=n.startsWith("update:"),a=r&&n.slice(7);if(a&&a in o){const d=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:y}=o[d]||Pe;y&&(l=s.map(h=>h.trim())),f&&(l=s.map(Ml))}let c,i=o[c=ul(n)]||o[c=ul(Ut(n))];!i&&r&&(i=o[c=ul(Rn(n))]),i&&Ot(i,t,6,l);const u=o[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ot(u,t,6,l)}}function fp(t,n,s=!1){const o=n.emitsCache,l=o.get(t);if(l!==void 0)return l;const r=t.emits;let a={},c=!1;if(!ce(t)){const i=u=>{const d=fp(u,n,!0);d&&(c=!0,it(a,d))};!s&&n.mixins.length&&n.mixins.forEach(i),t.extends&&i(t.extends),t.mixins&&t.mixins.forEach(i)}return!r&&!c?(Re(t)&&o.set(t,null),null):(oe(r)?r.forEach(i=>a[i]=null):it(a,r),Re(t)&&o.set(t,a),a)}function Jo(t,n){return!t||!Yo(n)?!1:(n=n.slice(2).replace(/Once$/,""),ge(t,n[0].toLowerCase()+n.slice(1))||ge(t,Rn(n))||ge(t,n))}let Xe=null,Zo=null;function So(t){const n=Xe;return Xe=t,Zo=t&&t.type.__scopeId||null,n}function Ce(t){Zo=t}function Ee(){Zo=null}function I(t,n=Xe,s){if(!n||t._n)return t;const o=(...l)=>{o._d&&Ja(-1);const r=So(n),a=t(...l);return So(r),o._d&&Ja(1),a};return o._n=!0,o._c=!0,o._d=!0,o}function dl(t){const{type:n,vnode:s,proxy:o,withProxy:l,props:r,propsOptions:[a],slots:c,attrs:i,emit:u,render:d,renderCache:f,data:y,setupState:h,ctx:m,inheritAttrs:_}=t;let A,E;const C=So(t);try{if(s.shapeFlag&4){const k=l||o;A=qt(d.call(k,k,f,r,h,y,m)),E=i}else{const k=n;A=qt(k.length>1?k(r,{attrs:i,slots:c,emit:u}):k(r,null)),E=n.props?i:Gf(i)}}catch(k){Ps.length=0,Wo(k,t,1),A=q(mn)}let D=A;if(E&&_!==!1){const k=Object.keys(E),{shapeFlag:M}=D;k.length&&M&7&&(a&&k.some(wr)&&(E=Uf(E,a)),D=Mn(D,E))}return s.dirs&&(D=Mn(D),D.dirs=D.dirs?D.dirs.concat(s.dirs):s.dirs),s.transition&&(D.transition=s.transition),A=D,So(C),A}const Gf=t=>{let n;for(const s in t)(s==="class"||s==="style"||Yo(s))&&((n||(n={}))[s]=t[s]);return n},Uf=(t,n)=>{const s={};for(const o in t)(!wr(o)||!(o.slice(9)in n))&&(s[o]=t[o]);return s};function Qf(t,n,s){const{props:o,children:l,component:r}=t,{props:a,children:c,patchFlag:i}=n,u=r.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&i>=0){if(i&1024)return!0;if(i&16)return o?qa(o,a,u):!!a;if(i&8){const d=n.dynamicProps;for(let f=0;f<d.length;f++){const y=d[f];if(a[y]!==o[y]&&!Jo(u,y))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===a?!1:o?a?qa(o,a,u):!0:!!a;return!1}function qa(t,n,s){const o=Object.keys(n);if(o.length!==Object.keys(t).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(n[r]!==t[r]&&!Jo(s,r))return!0}return!1}function Kf({vnode:t,parent:n},s){for(;n&&n.subTree===t;)(t=n.vnode).el=s,n=n.parent}const yp=t=>t.__isSuspense;function Wf(t,n){n&&n.pendingBranch?oe(t)?n.effects.push(...t):n.effects.push(t):Vf(t)}function gt(t,n){if(We){let s=We.provides;const o=We.parent&&We.parent.provides;o===s&&(s=We.provides=Object.create(o)),s[t]=n}}function O(t,n,s=!1){const o=We||Xe;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&t in l)return l[t];if(arguments.length>1)return s&&ce(n)?n.call(o.proxy):n}}function hs(t,n){return Hr(t,null,n)}const Ha={};function ue(t,n,s){return Hr(t,n,s)}function Hr(t,n,{immediate:s,deep:o,flush:l,onTrack:r,onTrigger:a}=Pe){const c=We;let i,u=!1,d=!1;if(xe(t)?(i=()=>t.value,u=ko(t)):ns(t)?(i=()=>t,o=!0):oe(t)?(d=!0,u=t.some(E=>ns(E)||ko(E)),i=()=>t.map(E=>{if(xe(E))return E.value;if(ns(E))return wn(E);if(ce(E))return un(E,c,2)})):ce(t)?n?i=()=>un(t,c,2):i=()=>{if(!(c&&c.isUnmounted))return f&&f(),Ot(t,c,3,[y])}:i=Pt,n&&o){const E=i;i=()=>wn(E())}let f,y=E=>{f=A.onStop=()=>{un(E,c,4)}};if(Qs)return y=Pt,n?s&&Ot(n,c,3,[i(),d?[]:void 0,y]):i(),Pt;let h=d?[]:Ha;const m=()=>{if(!!A.active)if(n){const E=A.run();(o||u||(d?E.some((C,D)=>Vs(C,h[D])):Vs(E,h)))&&(f&&f(),Ot(n,c,3,[E,h===Ha?void 0:h,y]),h=E)}else A.run()};m.allowRecurse=!!n;let _;l==="sync"?_=m:l==="post"?_=()=>Je(m,c&&c.suspense):(m.pre=!0,c&&(m.id=c.uid),_=()=>qr(m));const A=new Pr(i,_);return n?s?m():h=A.run():l==="post"?Je(A.run.bind(A),c&&c.suspense):A.run(),()=>{A.stop(),c&&c.scope&&kr(c.scope.effects,A)}}function Jf(t,n,s){const o=this.proxy,l=qe(t)?t.includes(".")?hp(o,t):()=>o[t]:t.bind(o,o);let r;ce(n)?r=n:(r=n.handler,s=n);const a=We;is(this);const c=Hr(l,r.bind(o),s);return a?is(a):Pn(),c}function hp(t,n){const s=n.split(".");return()=>{let o=t;for(let l=0;l<s.length&&o;l++)o=o[s[l]];return o}}function wn(t,n){if(!Re(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),xe(t))wn(t.value,n);else if(oe(t))for(let s=0;s<t.length;s++)wn(t[s],n);else if(qi(t)||es(t))t.forEach(s=>{wn(s,n)});else if(Yi(t))for(const s in t)wn(t[s],n);return t}function mp(t,n){t.shapeFlag&6&&t.component?mp(t.component.subTree,n):t.shapeFlag&128?(t.ssContent.transition=n.clone(t.ssContent),t.ssFallback.transition=n.clone(t.ssFallback)):t.transition=n}function Fe(t){return ce(t)?{setup:t,name:t.name}:t}const os=t=>!!t.type.__asyncLoader,gp=t=>t.type.__isKeepAlive,Zf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:n}){const s=Nn(),o=s.ctx;if(!o.renderer)return()=>{const C=n.default&&n.default();return C&&C.length===1?C[0]:C};const l=new Map,r=new Set;let a=null;const c=s.suspense,{renderer:{p:i,m:u,um:d,o:{createElement:f}}}=o,y=f("div");o.activate=(C,D,k,M,T)=>{const N=C.component;u(C,D,k,0,c),i(N.vnode,C,D,k,N,c,M,C.slotScopeIds,T),Je(()=>{N.isDeactivated=!1,N.a&&ts(N.a);const Z=C.props&&C.props.onVnodeMounted;Z&&bt(Z,N.parent,C)},c)},o.deactivate=C=>{const D=C.component;u(C,y,null,1,c),Je(()=>{D.da&&ts(D.da);const k=C.props&&C.props.onVnodeUnmounted;k&&bt(k,D.parent,C),D.isDeactivated=!0},c)};function h(C){fl(C),d(C,s,c,!0)}function m(C){l.forEach((D,k)=>{const M=Kl(D.type);M&&(!C||!C(M))&&_(k)})}function _(C){const D=l.get(C);!a||D.type!==a.type?h(D):a&&fl(a),l.delete(C),r.delete(C)}ue(()=>[t.include,t.exclude],([C,D])=>{C&&m(k=>Fs(C,k)),D&&m(k=>!Fs(D,k))},{flush:"post",deep:!0});let A=null;const E=()=>{A!=null&&l.set(A,yl(s.subTree))};return ms(E),Vr(E),el(()=>{l.forEach(C=>{const{subTree:D,suspense:k}=s,M=yl(D);if(C.type===M.type){fl(M);const T=M.component.da;T&&Je(T,k);return}h(C)})}),()=>{if(A=null,!n.default)return null;const C=n.default(),D=C[0];if(C.length>1)return a=null,C;if(!cs(D)||!(D.shapeFlag&4)&&!(D.shapeFlag&128))return a=null,D;let k=yl(D);const M=k.type,T=Kl(os(k)?k.type.__asyncResolved||{}:M),{include:N,exclude:Z,max:pe}=t;if(N&&(!T||!Fs(N,T))||Z&&T&&Fs(Z,T))return a=k,D;const de=k.key==null?M:k.key,_e=l.get(de);return k.el&&(k=Mn(k),D.shapeFlag&128&&(D.ssContent=k)),A=de,_e?(k.el=_e.el,k.component=_e.component,k.transition&&mp(k,k.transition),k.shapeFlag|=512,r.delete(de),r.add(de)):(r.add(de),pe&&r.size>parseInt(pe,10)&&_(r.values().next().value)),k.shapeFlag|=256,a=k,yp(D.type)?D:k}}},vp=Zf;function Fs(t,n){return oe(t)?t.some(s=>Fs(s,n)):qe(t)?t.split(",").includes(n):t.test?t.test(n):!1}function Xf(t,n){_p(t,"a",n)}function ey(t,n){_p(t,"da",n)}function _p(t,n,s=We){const o=t.__wdc||(t.__wdc=()=>{let l=s;for(;l;){if(l.isDeactivated)return;l=l.parent}return t()});if(Xo(n,o,s),s){let l=s.parent;for(;l&&l.parent;)gp(l.parent.vnode)&&ty(o,n,s,l),l=l.parent}}function ty(t,n,s,o){const l=Xo(n,t,o,!0);tl(()=>{kr(o[n],l)},s)}function fl(t){let n=t.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),t.shapeFlag=n}function yl(t){return t.shapeFlag&128?t.ssContent:t}function Xo(t,n,s=We,o=!1){if(s){const l=s[t]||(s[t]=[]),r=n.__weh||(n.__weh=(...a)=>{if(s.isUnmounted)return;fs(),is(s);const c=Ot(n,s,t,a);return Pn(),ys(),c});return o?l.unshift(r):l.push(r),r}}const tn=t=>(n,s=We)=>(!Qs||t==="sp")&&Xo(t,(...o)=>n(...o),s),ny=tn("bm"),ms=tn("m"),sy=tn("bu"),Vr=tn("u"),el=tn("bum"),tl=tn("um"),oy=tn("sp"),ly=tn("rtg"),ry=tn("rtc");function ay(t,n=We){Xo("ec",t,n)}function vt(t,n){const s=Xe;if(s===null)return t;const o=sl(s)||s.proxy,l=t.dirs||(t.dirs=[]);for(let r=0;r<n.length;r++){let[a,c,i,u=Pe]=n[r];ce(a)&&(a={mounted:a,updated:a}),a.deep&&wn(c),l.push({dir:a,instance:o,value:c,oldValue:void 0,arg:i,modifiers:u})}return t}function gn(t,n,s,o){const l=t.dirs,r=n&&n.dirs;for(let a=0;a<l.length;a++){const c=l[a];r&&(c.oldValue=r[a].value);let i=c.dir[o];i&&(fs(),Ot(i,s,8,[t.el,c,t,n]),ys())}}const Ap="components",cy="directives";function Fo(t,n){return Bp(Ap,t,!0,n)||t}const iy=Symbol();function Gt(t){return Bp(cy,t)}function Bp(t,n,s=!0,o=!1){const l=Xe||We;if(l){const r=l.type;if(t===Ap){const c=Kl(r,!1);if(c&&(c===n||c===Ut(n)||c===Uo(Ut(n))))return r}const a=Va(l[t]||r[t],n)||Va(l.appContext[t],n);return!a&&o?r:a}}function Va(t,n){return t&&(t[n]||t[Ut(n)]||t[Uo(Ut(n))])}function so(t,n,s,o){let l;const r=s&&s[o];if(oe(t)||qe(t)){l=new Array(t.length);for(let a=0,c=t.length;a<c;a++)l[a]=n(t[a],a,void 0,r&&r[a])}else if(typeof t=="number"){l=new Array(t);for(let a=0;a<t;a++)l[a]=n(a+1,a,void 0,r&&r[a])}else if(Re(t))if(t[Symbol.iterator])l=Array.from(t,(a,c)=>n(a,c,void 0,r&&r[c]));else{const a=Object.keys(t);l=new Array(a.length);for(let c=0,i=a.length;c<i;c++){const u=a[c];l[c]=n(t[u],u,c,r&&r[c])}}else l=[];return s&&(s[o]=l),l}function It(t,n,s={},o,l){if(Xe.isCE||Xe.parent&&os(Xe.parent)&&Xe.parent.isCE)return q("slot",n==="default"?null:{name:n},o&&o());let r=t[n];r&&r._c&&(r._d=!1),B();const a=r&&bp(r(s)),c=V(Se,{key:s.key||a&&a.key||`_${n}`},a||(o?o():[]),a&&t._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function bp(t){return t.some(n=>cs(n)?!(n.type===mn||n.type===Se&&!bp(n.children)):!0)?t:null}const Vl=t=>t?Pp(t)?sl(t)||t.proxy:Vl(t.parent):null,$o=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Vl(t.parent),$root:t=>Vl(t.root),$emit:t=>t.emit,$options:t=>Yr(t),$forceUpdate:t=>t.f||(t.f=()=>qr(t.update)),$nextTick:t=>t.n||(t.n=rt.bind(t.proxy)),$watch:t=>Jf.bind(t)}),py={get({_:t},n){const{ctx:s,setupState:o,data:l,props:r,accessCache:a,type:c,appContext:i}=t;let u;if(n[0]!=="$"){const h=a[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return l[n];case 4:return s[n];case 3:return r[n]}else{if(o!==Pe&&ge(o,n))return a[n]=1,o[n];if(l!==Pe&&ge(l,n))return a[n]=2,l[n];if((u=t.propsOptions[0])&&ge(u,n))return a[n]=3,r[n];if(s!==Pe&&ge(s,n))return a[n]=4,s[n];Yl&&(a[n]=0)}}const d=$o[n];let f,y;if(d)return n==="$attrs"&&Bt(t,"get",n),d(t);if((f=c.__cssModules)&&(f=f[n]))return f;if(s!==Pe&&ge(s,n))return a[n]=4,s[n];if(y=i.config.globalProperties,ge(y,n))return y[n]},set({_:t},n,s){const{data:o,setupState:l,ctx:r}=t;return l!==Pe&&ge(l,n)?(l[n]=s,!0):o!==Pe&&ge(o,n)?(o[n]=s,!0):ge(t.props,n)||n[0]==="$"&&n.slice(1)in t?!1:(r[n]=s,!0)},has({_:{data:t,setupState:n,accessCache:s,ctx:o,appContext:l,propsOptions:r}},a){let c;return!!s[a]||t!==Pe&&ge(t,a)||n!==Pe&&ge(n,a)||(c=r[0])&&ge(c,a)||ge(o,a)||ge($o,a)||ge(l.config.globalProperties,a)},defineProperty(t,n,s){return s.get!=null?t._.accessCache[n]=0:ge(s,"value")&&this.set(t,n,s.value,null),Reflect.defineProperty(t,n,s)}};let Yl=!0;function uy(t){const n=Yr(t),s=t.proxy,o=t.ctx;Yl=!1,n.beforeCreate&&Ya(n.beforeCreate,t,"bc");const{data:l,computed:r,methods:a,watch:c,provide:i,inject:u,created:d,beforeMount:f,mounted:y,beforeUpdate:h,updated:m,activated:_,deactivated:A,beforeDestroy:E,beforeUnmount:C,destroyed:D,unmounted:k,render:M,renderTracked:T,renderTriggered:N,errorCaptured:Z,serverPrefetch:pe,expose:de,inheritAttrs:_e,components:Ke,directives:Ye,filters:Ne}=n;if(u&&dy(u,o,null,t.appContext.config.unwrapInjectedRef),a)for(const K in a){const se=a[K];ce(se)&&(o[K]=se.bind(s))}if(l){const K=l.call(s,s);Re(K)&&(t.data=Me(K))}if(Yl=!0,r)for(const K in r){const se=r[K],fe=ce(se)?se.bind(s,s):ce(se.get)?se.get.bind(s,s):Pt,we=!ce(se)&&ce(se.set)?se.set.bind(s):Pt,nt=S({get:fe,set:we});Object.defineProperty(o,K,{enumerable:!0,configurable:!0,get:()=>nt.value,set:He=>nt.value=He})}if(c)for(const K in c)Dp(c[K],o,s,K);if(i){const K=ce(i)?i.call(s):i;Reflect.ownKeys(K).forEach(se=>{gt(se,K[se])})}d&&Ya(d,t,"c");function Ie(K,se){oe(se)?se.forEach(fe=>K(fe.bind(s))):se&&K(se.bind(s))}if(Ie(ny,f),Ie(ms,y),Ie(sy,h),Ie(Vr,m),Ie(Xf,_),Ie(ey,A),Ie(ay,Z),Ie(ry,T),Ie(ly,N),Ie(el,C),Ie(tl,k),Ie(oy,pe),oe(de))if(de.length){const K=t.exposed||(t.exposed={});de.forEach(se=>{Object.defineProperty(K,se,{get:()=>s[se],set:fe=>s[se]=fe})})}else t.exposed||(t.exposed={});M&&t.render===Pt&&(t.render=M),_e!=null&&(t.inheritAttrs=_e),Ke&&(t.components=Ke),Ye&&(t.directives=Ye)}function dy(t,n,s=Pt,o=!1){oe(t)&&(t=zl(t));for(const l in t){const r=t[l];let a;Re(r)?"default"in r?a=O(r.from||l,r.default,!0):a=O(r.from||l):a=O(r),xe(a)&&o?Object.defineProperty(n,l,{enumerable:!0,configurable:!0,get:()=>a.value,set:c=>a.value=c}):n[l]=a}}function Ya(t,n,s){Ot(oe(t)?t.map(o=>o.bind(n.proxy)):t.bind(n.proxy),n,s)}function Dp(t,n,s,o){const l=o.includes(".")?hp(s,o):()=>s[o];if(qe(t)){const r=n[t];ce(r)&&ue(l,r)}else if(ce(t))ue(l,t.bind(s));else if(Re(t))if(oe(t))t.forEach(r=>Dp(r,n,s,o));else{const r=ce(t.handler)?t.handler.bind(s):n[t.handler];ce(r)&&ue(l,r,t)}}function Yr(t){const n=t.type,{mixins:s,extends:o}=n,{mixins:l,optionsCache:r,config:{optionMergeStrategies:a}}=t.appContext,c=r.get(n);let i;return c?i=c:!l.length&&!s&&!o?i=n:(i={},l.length&&l.forEach(u=>Po(i,u,a,!0)),Po(i,n,a)),Re(n)&&r.set(n,i),i}function Po(t,n,s,o=!1){const{mixins:l,extends:r}=n;r&&Po(t,r,s,!0),l&&l.forEach(a=>Po(t,a,s,!0));for(const a in n)if(!(o&&a==="expose")){const c=fy[a]||s&&s[a];t[a]=c?c(t[a],n[a]):n[a]}return t}const fy={data:za,props:Bn,emits:Bn,methods:Bn,computed:Bn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Bn,directives:Bn,watch:hy,provide:za,inject:yy};function za(t,n){return n?t?function(){return it(ce(t)?t.call(this,this):t,ce(n)?n.call(this,this):n)}:n:t}function yy(t,n){return Bn(zl(t),zl(n))}function zl(t){if(oe(t)){const n={};for(let s=0;s<t.length;s++)n[t[s]]=t[s];return n}return t}function st(t,n){return t?[...new Set([].concat(t,n))]:n}function Bn(t,n){return t?it(it(Object.create(null),t),n):n}function hy(t,n){if(!t)return n;if(!n)return t;const s=it(Object.create(null),t);for(const o in n)s[o]=st(t[o],n[o]);return s}function my(t,n,s,o=!1){const l={},r={};wo(r,nl,1),t.propsDefaults=Object.create(null),Cp(t,n,l,r);for(const a in t.propsOptions[0])a in l||(l[a]=void 0);s?t.props=o?l:$f(l):t.type.props?t.props=l:t.props=r,t.attrs=r}function gy(t,n,s,o){const{props:l,attrs:r,vnode:{patchFlag:a}}=t,c=De(l),[i]=t.propsOptions;let u=!1;if((o||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let f=0;f<d.length;f++){let y=d[f];if(Jo(t.emitsOptions,y))continue;const h=n[y];if(i)if(ge(r,y))h!==r[y]&&(r[y]=h,u=!0);else{const m=Ut(y);l[m]=Gl(i,c,m,h,t,!1)}else h!==r[y]&&(r[y]=h,u=!0)}}}else{Cp(t,n,l,r)&&(u=!0);let d;for(const f in c)(!n||!ge(n,f)&&((d=Rn(f))===f||!ge(n,d)))&&(i?s&&(s[f]!==void 0||s[d]!==void 0)&&(l[f]=Gl(i,c,f,void 0,t,!0)):delete l[f]);if(r!==c)for(const f in r)(!n||!ge(n,f)&&!0)&&(delete r[f],u=!0)}u&&Xt(t,"set","$attrs")}function Cp(t,n,s,o){const[l,r]=t.propsOptions;let a=!1,c;if(n)for(let i in n){if(Ao(i))continue;const u=n[i];let d;l&&ge(l,d=Ut(i))?!r||!r.includes(d)?s[d]=u:(c||(c={}))[d]=u:Jo(t.emitsOptions,i)||(!(i in o)||u!==o[i])&&(o[i]=u,a=!0)}if(r){const i=De(s),u=c||Pe;for(let d=0;d<r.length;d++){const f=r[d];s[f]=Gl(l,i,f,u[f],t,!ge(u,f))}}return a}function Gl(t,n,s,o,l,r){const a=t[s];if(a!=null){const c=ge(a,"default");if(c&&o===void 0){const i=a.default;if(a.type!==Function&&ce(i)){const{propsDefaults:u}=l;s in u?o=u[s]:(is(l),o=u[s]=i.call(null,n),Pn())}else o=i}a[0]&&(r&&!c?o=!1:a[1]&&(o===""||o===Rn(s))&&(o=!0))}return o}function Ep(t,n,s=!1){const o=n.propsCache,l=o.get(t);if(l)return l;const r=t.props,a={},c=[];let i=!1;if(!ce(t)){const d=f=>{i=!0;const[y,h]=Ep(f,n,!0);it(a,y),h&&c.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!r&&!i)return Re(t)&&o.set(t,Xn),Xn;if(oe(r))for(let d=0;d<r.length;d++){const f=Ut(r[d]);Ga(f)&&(a[f]=Pe)}else if(r)for(const d in r){const f=Ut(d);if(Ga(f)){const y=r[d],h=a[f]=oe(y)||ce(y)?{type:y}:y;if(h){const m=Ka(Boolean,h.type),_=Ka(String,h.type);h[0]=m>-1,h[1]=_<0||m<_,(m>-1||ge(h,"default"))&&c.push(f)}}}const u=[a,c];return Re(t)&&o.set(t,u),u}function Ga(t){return t[0]!=="$"}function Ua(t){const n=t&&t.toString().match(/^\s*function (\w+)/);return n?n[1]:t===null?"null":""}function Qa(t,n){return Ua(t)===Ua(n)}function Ka(t,n){return oe(n)?n.findIndex(s=>Qa(s,t)):ce(n)&&Qa(n,t)?0:-1}const xp=t=>t[0]==="_"||t==="$stable",zr=t=>oe(t)?t.map(qt):[qt(t)],vy=(t,n,s)=>{if(n._n)return n;const o=I((...l)=>zr(n(...l)),s);return o._c=!1,o},wp=(t,n,s)=>{const o=t._ctx;for(const l in t){if(xp(l))continue;const r=t[l];if(ce(r))n[l]=vy(l,r,o);else if(r!=null){const a=zr(r);n[l]=()=>a}}},kp=(t,n)=>{const s=zr(n);t.slots.default=()=>s},_y=(t,n)=>{if(t.vnode.shapeFlag&32){const s=n._;s?(t.slots=De(n),wo(n,"_",s)):wp(n,t.slots={})}else t.slots={},n&&kp(t,n);wo(t.slots,nl,1)},Ay=(t,n,s)=>{const{vnode:o,slots:l}=t;let r=!0,a=Pe;if(o.shapeFlag&32){const c=n._;c?s&&c===1?r=!1:(it(l,n),!s&&c===1&&delete l._):(r=!n.$stable,wp(n,l)),a=n}else n&&(kp(t,n),a={default:1});if(r)for(const c in l)!xp(c)&&!(c in a)&&delete l[c]};function Sp(){return{app:null,config:{isNativeTag:Wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let By=0;function by(t,n){return function(o,l=null){ce(o)||(o=Object.assign({},o)),l!=null&&!Re(l)&&(l=null);const r=Sp(),a=new Set;let c=!1;const i=r.app={_uid:By++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:qy,get config(){return r.config},set config(u){},use(u,...d){return a.has(u)||(u&&ce(u.install)?(a.add(u),u.install(i,...d)):ce(u)&&(a.add(u),u(i,...d))),i},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),i},component(u,d){return d?(r.components[u]=d,i):r.components[u]},directive(u,d){return d?(r.directives[u]=d,i):r.directives[u]},mount(u,d,f){if(!c){const y=q(o,l);return y.appContext=r,d&&n?n(y,u):t(y,u,f),c=!0,i._container=u,u.__vue_app__=i,sl(y.component)||y.component.proxy}},unmount(){c&&(t(null,i._container),delete i._container.__vue_app__)},provide(u,d){return r.provides[u]=d,i}};return i}}function Ul(t,n,s,o,l=!1){if(oe(t)){t.forEach((y,h)=>Ul(y,n&&(oe(n)?n[h]:n),s,o,l));return}if(os(o)&&!l)return;const r=o.shapeFlag&4?sl(o.component)||o.component.proxy:o.el,a=l?null:r,{i:c,r:i}=t,u=n&&n.r,d=c.refs===Pe?c.refs={}:c.refs,f=c.setupState;if(u!=null&&u!==i&&(qe(u)?(d[u]=null,ge(f,u)&&(f[u]=null)):xe(u)&&(u.value=null)),ce(i))un(i,c,12,[a,d]);else{const y=qe(i),h=xe(i);if(y||h){const m=()=>{if(t.f){const _=y?d[i]:i.value;l?oe(_)&&kr(_,r):oe(_)?_.includes(r)||_.push(r):y?(d[i]=[r],ge(f,i)&&(f[i]=d[i])):(i.value=[r],t.k&&(d[t.k]=i.value))}else y?(d[i]=a,ge(f,i)&&(f[i]=a)):h&&(i.value=a,t.k&&(d[t.k]=a))};a?(m.id=-1,Je(m,s)):m()}}}const Je=Wf;function Dy(t){return Cy(t)}function Cy(t,n){const s=nf();s.__VUE__=!0;const{insert:o,remove:l,patchProp:r,createElement:a,createText:c,createComment:i,setText:u,setElementText:d,parentNode:f,nextSibling:y,setScopeId:h=Pt,insertStaticContent:m}=t,_=(g,v,x,w=null,$=null,R=null,Q=!1,L=null,j=!!v.dynamicChildren)=>{if(g===v)return;g&&!Bs(g,v)&&(w=z(g),He(g,$,R,!0),g=null),v.patchFlag===-2&&(j=!1,v.dynamicChildren=null);const{type:P,ref:X,shapeFlag:W}=v;switch(P){case Ur:A(g,v,x,w);break;case mn:E(g,v,x,w);break;case hl:g==null&&C(v,x,w,Q);break;case Se:Ke(g,v,x,w,$,R,Q,L,j);break;default:W&1?M(g,v,x,w,$,R,Q,L,j):W&6?Ye(g,v,x,w,$,R,Q,L,j):(W&64||W&128)&&P.process(g,v,x,w,$,R,Q,L,j,ye)}X!=null&&$&&Ul(X,g&&g.ref,R,v||g,!v)},A=(g,v,x,w)=>{if(g==null)o(v.el=c(v.children),x,w);else{const $=v.el=g.el;v.children!==g.children&&u($,v.children)}},E=(g,v,x,w)=>{g==null?o(v.el=i(v.children||""),x,w):v.el=g.el},C=(g,v,x,w)=>{[g.el,g.anchor]=m(g.children,v,x,w,g.el,g.anchor)},D=({el:g,anchor:v},x,w)=>{let $;for(;g&&g!==v;)$=y(g),o(g,x,w),g=$;o(v,x,w)},k=({el:g,anchor:v})=>{let x;for(;g&&g!==v;)x=y(g),l(g),g=x;l(v)},M=(g,v,x,w,$,R,Q,L,j)=>{Q=Q||v.type==="svg",g==null?T(v,x,w,$,R,Q,L,j):pe(g,v,$,R,Q,L,j)},T=(g,v,x,w,$,R,Q,L)=>{let j,P;const{type:X,props:W,shapeFlag:ee,transition:le,dirs:he}=g;if(j=g.el=a(g.type,R,W&&W.is,W),ee&8?d(j,g.children):ee&16&&Z(g.children,j,null,w,$,R&&X!=="foreignObject",Q,L),he&&gn(g,null,w,"created"),W){for(const $e in W)$e!=="value"&&!Ao($e)&&r(j,$e,null,W[$e],R,g.children,w,$,U);"value"in W&&r(j,"value",null,W.value),(P=W.onVnodeBeforeMount)&&bt(P,w,g)}N(j,g,g.scopeId,Q,w),he&&gn(g,null,w,"beforeMount");const Oe=(!$||$&&!$.pendingBranch)&&le&&!le.persisted;Oe&&le.beforeEnter(j),o(j,v,x),((P=W&&W.onVnodeMounted)||Oe||he)&&Je(()=>{P&&bt(P,w,g),Oe&&le.enter(j),he&&gn(g,null,w,"mounted")},$)},N=(g,v,x,w,$)=>{if(x&&h(g,x),w)for(let R=0;R<w.length;R++)h(g,w[R]);if($){let R=$.subTree;if(v===R){const Q=$.vnode;N(g,Q,Q.scopeId,Q.slotScopeIds,$.parent)}}},Z=(g,v,x,w,$,R,Q,L,j=0)=>{for(let P=j;P<g.length;P++){const X=g[P]=L?rn(g[P]):qt(g[P]);_(null,X,v,x,w,$,R,Q,L)}},pe=(g,v,x,w,$,R,Q)=>{const L=v.el=g.el;let{patchFlag:j,dynamicChildren:P,dirs:X}=v;j|=g.patchFlag&16;const W=g.props||Pe,ee=v.props||Pe;let le;x&&vn(x,!1),(le=ee.onVnodeBeforeUpdate)&&bt(le,x,v,g),X&&gn(v,g,x,"beforeUpdate"),x&&vn(x,!0);const he=$&&v.type!=="foreignObject";if(P?de(g.dynamicChildren,P,L,x,w,he,R):Q||se(g,v,L,null,x,w,he,R,!1),j>0){if(j&16)_e(L,v,W,ee,x,w,$);else if(j&2&&W.class!==ee.class&&r(L,"class",null,ee.class,$),j&4&&r(L,"style",W.style,ee.style,$),j&8){const Oe=v.dynamicProps;for(let $e=0;$e<Oe.length;$e++){const Ve=Oe[$e],xt=W[Ve],Yn=ee[Ve];(Yn!==xt||Ve==="value")&&r(L,Ve,xt,Yn,$,g.children,x,w,U)}}j&1&&g.children!==v.children&&d(L,v.children)}else!Q&&P==null&&_e(L,v,W,ee,x,w,$);((le=ee.onVnodeUpdated)||X)&&Je(()=>{le&&bt(le,x,v,g),X&&gn(v,g,x,"updated")},w)},de=(g,v,x,w,$,R,Q)=>{for(let L=0;L<v.length;L++){const j=g[L],P=v[L],X=j.el&&(j.type===Se||!Bs(j,P)||j.shapeFlag&70)?f(j.el):x;_(j,P,X,null,w,$,R,Q,!0)}},_e=(g,v,x,w,$,R,Q)=>{if(x!==w){if(x!==Pe)for(const L in x)!Ao(L)&&!(L in w)&&r(g,L,x[L],null,Q,v.children,$,R,U);for(const L in w){if(Ao(L))continue;const j=w[L],P=x[L];j!==P&&L!=="value"&&r(g,L,P,j,Q,v.children,$,R,U)}"value"in w&&r(g,"value",x.value,w.value)}},Ke=(g,v,x,w,$,R,Q,L,j)=>{const P=v.el=g?g.el:c(""),X=v.anchor=g?g.anchor:c("");let{patchFlag:W,dynamicChildren:ee,slotScopeIds:le}=v;le&&(L=L?L.concat(le):le),g==null?(o(P,x,w),o(X,x,w),Z(v.children,x,X,$,R,Q,L,j)):W>0&&W&64&&ee&&g.dynamicChildren?(de(g.dynamicChildren,ee,x,$,R,Q,L),(v.key!=null||$&&v===$.subTree)&&Gr(g,v,!0)):se(g,v,x,X,$,R,Q,L,j)},Ye=(g,v,x,w,$,R,Q,L,j)=>{v.slotScopeIds=L,g==null?v.shapeFlag&512?$.ctx.activate(v,x,w,Q,j):Ne(v,x,w,$,R,Q,j):Le(g,v,j)},Ne=(g,v,x,w,$,R,Q)=>{const L=g.component=Ty(g,w,$);if(gp(g)&&(L.ctx.renderer=ye),Ly(L),L.asyncDep){if($&&$.registerDep(L,Ie),!g.el){const j=L.subTree=q(mn);E(null,j,v,x)}return}Ie(L,g,v,x,$,R,Q)},Le=(g,v,x)=>{const w=v.component=g.component;if(Qf(g,v,x))if(w.asyncDep&&!w.asyncResolved){K(w,v,x);return}else w.next=v,Hf(w.update),w.update();else v.el=g.el,w.vnode=v},Ie=(g,v,x,w,$,R,Q)=>{const L=()=>{if(g.isMounted){let{next:X,bu:W,u:ee,parent:le,vnode:he}=g,Oe=X,$e;vn(g,!1),X?(X.el=he.el,K(g,X,Q)):X=he,W&&ts(W),($e=X.props&&X.props.onVnodeBeforeUpdate)&&bt($e,le,X,he),vn(g,!0);const Ve=dl(g),xt=g.subTree;g.subTree=Ve,_(xt,Ve,f(xt.el),z(xt),g,$,R),X.el=Ve.el,Oe===null&&Kf(g,Ve.el),ee&&Je(ee,$),($e=X.props&&X.props.onVnodeUpdated)&&Je(()=>bt($e,le,X,he),$)}else{let X;const{el:W,props:ee}=v,{bm:le,m:he,parent:Oe}=g,$e=os(v);if(vn(g,!1),le&&ts(le),!$e&&(X=ee&&ee.onVnodeBeforeMount)&&bt(X,Oe,v),vn(g,!0),W&&re){const Ve=()=>{g.subTree=dl(g),re(W,g.subTree,g,$,null)};$e?v.type.__asyncLoader().then(()=>!g.isUnmounted&&Ve()):Ve()}else{const Ve=g.subTree=dl(g);_(null,Ve,x,w,g,$,R),v.el=Ve.el}if(he&&Je(he,$),!$e&&(X=ee&&ee.onVnodeMounted)){const Ve=v;Je(()=>bt(X,Oe,Ve),$)}(v.shapeFlag&256||Oe&&os(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&g.a&&Je(g.a,$),g.isMounted=!0,v=x=w=null}},j=g.effect=new Pr(L,()=>qr(P),g.scope),P=g.update=()=>j.run();P.id=g.uid,vn(g,!0),P()},K=(g,v,x)=>{v.component=g;const w=g.vnode.props;g.vnode=v,g.next=null,gy(g,v.props,w,x),Ay(g,v.children,x),fs(),ja(),ys()},se=(g,v,x,w,$,R,Q,L,j=!1)=>{const P=g&&g.children,X=g?g.shapeFlag:0,W=v.children,{patchFlag:ee,shapeFlag:le}=v;if(ee>0){if(ee&128){we(P,W,x,w,$,R,Q,L,j);return}else if(ee&256){fe(P,W,x,w,$,R,Q,L,j);return}}le&8?(X&16&&U(P,$,R),W!==P&&d(x,W)):X&16?le&16?we(P,W,x,w,$,R,Q,L,j):U(P,$,R,!0):(X&8&&d(x,""),le&16&&Z(W,x,w,$,R,Q,L,j))},fe=(g,v,x,w,$,R,Q,L,j)=>{g=g||Xn,v=v||Xn;const P=g.length,X=v.length,W=Math.min(P,X);let ee;for(ee=0;ee<W;ee++){const le=v[ee]=j?rn(v[ee]):qt(v[ee]);_(g[ee],le,x,null,$,R,Q,L,j)}P>X?U(g,$,R,!0,!1,W):Z(v,x,w,$,R,Q,L,j,W)},we=(g,v,x,w,$,R,Q,L,j)=>{let P=0;const X=v.length;let W=g.length-1,ee=X-1;for(;P<=W&&P<=ee;){const le=g[P],he=v[P]=j?rn(v[P]):qt(v[P]);if(Bs(le,he))_(le,he,x,null,$,R,Q,L,j);else break;P++}for(;P<=W&&P<=ee;){const le=g[W],he=v[ee]=j?rn(v[ee]):qt(v[ee]);if(Bs(le,he))_(le,he,x,null,$,R,Q,L,j);else break;W--,ee--}if(P>W){if(P<=ee){const le=ee+1,he=le<X?v[le].el:w;for(;P<=ee;)_(null,v[P]=j?rn(v[P]):qt(v[P]),x,he,$,R,Q,L,j),P++}}else if(P>ee)for(;P<=W;)He(g[P],$,R,!0),P++;else{const le=P,he=P,Oe=new Map;for(P=he;P<=ee;P++){const dt=v[P]=j?rn(v[P]):qt(v[P]);dt.key!=null&&Oe.set(dt.key,P)}let $e,Ve=0;const xt=ee-he+1;let Yn=!1,Sa=0;const As=new Array(xt);for(P=0;P<xt;P++)As[P]=0;for(P=le;P<=W;P++){const dt=g[P];if(Ve>=xt){He(dt,$,R,!0);continue}let jt;if(dt.key!=null)jt=Oe.get(dt.key);else for($e=he;$e<=ee;$e++)if(As[$e-he]===0&&Bs(dt,v[$e])){jt=$e;break}jt===void 0?He(dt,$,R,!0):(As[jt-he]=P+1,jt>=Sa?Sa=jt:Yn=!0,_(dt,v[jt],x,null,$,R,Q,L,j),Ve++)}const Fa=Yn?Ey(As):Xn;for($e=Fa.length-1,P=xt-1;P>=0;P--){const dt=he+P,jt=v[dt],$a=dt+1<X?v[dt+1].el:w;As[P]===0?_(null,jt,x,$a,$,R,Q,L,j):Yn&&($e<0||P!==Fa[$e]?nt(jt,x,$a,2):$e--)}}},nt=(g,v,x,w,$=null)=>{const{el:R,type:Q,transition:L,children:j,shapeFlag:P}=g;if(P&6){nt(g.component.subTree,v,x,w);return}if(P&128){g.suspense.move(v,x,w);return}if(P&64){Q.move(g,v,x,ye);return}if(Q===Se){o(R,v,x);for(let W=0;W<j.length;W++)nt(j[W],v,x,w);o(g.anchor,v,x);return}if(Q===hl){D(g,v,x);return}if(w!==2&&P&1&&L)if(w===0)L.beforeEnter(R),o(R,v,x),Je(()=>L.enter(R),$);else{const{leave:W,delayLeave:ee,afterLeave:le}=L,he=()=>o(R,v,x),Oe=()=>{W(R,()=>{he(),le&&le()})};ee?ee(R,he,Oe):Oe()}else o(R,v,x)},He=(g,v,x,w=!1,$=!1)=>{const{type:R,props:Q,ref:L,children:j,dynamicChildren:P,shapeFlag:X,patchFlag:W,dirs:ee}=g;if(L!=null&&Ul(L,null,x,g,!0),X&256){v.ctx.deactivate(g);return}const le=X&1&&ee,he=!os(g);let Oe;if(he&&(Oe=Q&&Q.onVnodeBeforeUnmount)&&bt(Oe,v,g),X&6)F(g.component,x,w);else{if(X&128){g.suspense.unmount(x,w);return}le&&gn(g,null,v,"beforeUnmount"),X&64?g.type.remove(g,v,x,$,ye,w):P&&(R!==Se||W>0&&W&64)?U(P,v,x,!1,!0):(R===Se&&W&384||!$&&X&16)&&U(j,v,x),w&&sn(g)}(he&&(Oe=Q&&Q.onVnodeUnmounted)||le)&&Je(()=>{Oe&&bt(Oe,v,g),le&&gn(g,null,v,"unmounted")},x)},sn=g=>{const{type:v,el:x,anchor:w,transition:$}=g;if(v===Se){Vn(x,w);return}if(v===hl){k(g);return}const R=()=>{l(x),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(g.shapeFlag&1&&$&&!$.persisted){const{leave:Q,delayLeave:L}=$,j=()=>Q(x,R);L?L(g.el,R,j):j()}else R()},Vn=(g,v)=>{let x;for(;g!==v;)x=y(g),l(g),g=x;l(v)},F=(g,v,x)=>{const{bum:w,scope:$,update:R,subTree:Q,um:L}=g;w&&ts(w),$.stop(),R&&(R.active=!1,He(Q,g,v,x)),L&&Je(L,v),Je(()=>{g.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},U=(g,v,x,w=!1,$=!1,R=0)=>{for(let Q=R;Q<g.length;Q++)He(g[Q],v,x,w,$)},z=g=>g.shapeFlag&6?z(g.component.subTree):g.shapeFlag&128?g.suspense.next():y(g.anchor||g.el),J=(g,v,x)=>{g==null?v._vnode&&He(v._vnode,null,null,!0):_(v._vnode||null,g,v,null,null,null,x),ja(),up(),v._vnode=g},ye={p:_,um:He,m:nt,r:sn,mt:Ne,mc:Z,pc:se,pbc:de,n:z,o:t};let Ae,re;return n&&([Ae,re]=n(ye)),{render:J,hydrate:Ae,createApp:by(J,Ae)}}function vn({effect:t,update:n},s){t.allowRecurse=n.allowRecurse=s}function Gr(t,n,s=!1){const o=t.children,l=n.children;if(oe(o)&&oe(l))for(let r=0;r<o.length;r++){const a=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=rn(l[r]),c.el=a.el),s||Gr(a,c))}}function Ey(t){const n=t.slice(),s=[0];let o,l,r,a,c;const i=t.length;for(o=0;o<i;o++){const u=t[o];if(u!==0){if(l=s[s.length-1],t[l]<u){n[o]=l,s.push(o);continue}for(r=0,a=s.length-1;r<a;)c=r+a>>1,t[s[c]]<u?r=c+1:a=c;u<t[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,a=s[r-1];r-- >0;)s[r]=a,a=n[a];return s}const xy=t=>t.__isTeleport,$s=t=>t&&(t.disabled||t.disabled===""),Wa=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Ql=(t,n)=>{const s=t&&t.to;return qe(s)?n?n(s):null:s},wy={__isTeleport:!0,process(t,n,s,o,l,r,a,c,i,u){const{mc:d,pc:f,pbc:y,o:{insert:h,querySelector:m,createText:_,createComment:A}}=u,E=$s(n.props);let{shapeFlag:C,children:D,dynamicChildren:k}=n;if(t==null){const M=n.el=_(""),T=n.anchor=_("");h(M,s,o),h(T,s,o);const N=n.target=Ql(n.props,m),Z=n.targetAnchor=_("");N&&(h(Z,N),a=a||Wa(N));const pe=(de,_e)=>{C&16&&d(D,de,_e,l,r,a,c,i)};E?pe(s,T):N&&pe(N,Z)}else{n.el=t.el;const M=n.anchor=t.anchor,T=n.target=t.target,N=n.targetAnchor=t.targetAnchor,Z=$s(t.props),pe=Z?s:T,de=Z?M:N;if(a=a||Wa(T),k?(y(t.dynamicChildren,k,pe,l,r,a,c),Gr(t,n,!0)):i||f(t,n,pe,de,l,r,a,c,!1),E)Z||ho(n,s,M,u,1);else if((n.props&&n.props.to)!==(t.props&&t.props.to)){const _e=n.target=Ql(n.props,m);_e&&ho(n,_e,null,u,0)}else Z&&ho(n,T,N,u,1)}},remove(t,n,s,o,{um:l,o:{remove:r}},a){const{shapeFlag:c,children:i,anchor:u,targetAnchor:d,target:f,props:y}=t;if(f&&r(d),(a||!$s(y))&&(r(u),c&16))for(let h=0;h<i.length;h++){const m=i[h];l(m,n,s,!0,!!m.dynamicChildren)}},move:ho,hydrate:ky};function ho(t,n,s,{o:{insert:o},m:l},r=2){r===0&&o(t.targetAnchor,n,s);const{el:a,anchor:c,shapeFlag:i,children:u,props:d}=t,f=r===2;if(f&&o(a,n,s),(!f||$s(d))&&i&16)for(let y=0;y<u.length;y++)l(u[y],n,s,2);f&&o(c,n,s)}function ky(t,n,s,o,l,r,{o:{nextSibling:a,parentNode:c,querySelector:i}},u){const d=n.target=Ql(n.props,i);if(d){const f=d._lpa||d.firstChild;if(n.shapeFlag&16)if($s(n.props))n.anchor=u(a(t),n,c(t),s,o,l,r),n.targetAnchor=f;else{n.anchor=a(t);let y=f;for(;y;)if(y=a(y),y&&y.nodeType===8&&y.data==="teleport anchor"){n.targetAnchor=y,d._lpa=n.targetAnchor&&a(n.targetAnchor);break}u(f,n,d,s,o,l,r)}}return n.anchor&&a(n.anchor)}const Sy=wy,Se=Symbol(void 0),Ur=Symbol(void 0),mn=Symbol(void 0),hl=Symbol(void 0),Ps=[];let Ft=null;function B(t=!1){Ps.push(Ft=t?null:[])}function Fy(){Ps.pop(),Ft=Ps[Ps.length-1]||null}let Us=1;function Ja(t){Us+=t}function Fp(t){return t.dynamicChildren=Us>0?Ft||Xn:null,Fy(),Us>0&&Ft&&Ft.push(t),t}function H(t,n,s,o,l,r){return Fp(e(t,n,s,o,l,r,!0))}function V(t,n,s,o,l){return Fp(q(t,n,s,o,l,!0))}function cs(t){return t?t.__v_isVNode===!0:!1}function Bs(t,n){return t.type===n.type&&t.key===n.key}const nl="__vInternal",$p=({key:t})=>t!=null?t:null,Bo=({ref:t,ref_key:n,ref_for:s})=>t!=null?qe(t)||xe(t)||ce(t)?{i:Xe,r:t,k:n,f:!!s}:t:null;function e(t,n=null,s=null,o=0,l=null,r=t===Se?0:1,a=!1,c=!1){const i={__v_isVNode:!0,__v_skip:!0,type:t,props:n,key:n&&$p(n),ref:n&&Bo(n),scopeId:Zo,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null};return c?(Qr(i,s),r&128&&t.normalize(i)):s&&(i.shapeFlag|=qe(s)?8:16),Us>0&&!a&&Ft&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&Ft.push(i),i}const q=$y;function $y(t,n=null,s=null,o=0,l=null,r=!1){if((!t||t===iy)&&(t=mn),cs(t)){const c=Mn(t,n,!0);return s&&Qr(c,s),Us>0&&!r&&Ft&&(c.shapeFlag&6?Ft[Ft.indexOf(t)]=c:Ft.push(c)),c.patchFlag|=-2,c}if(Ry(t)&&(t=t.__vccOpts),n){n=te(n);let{class:c,style:i}=n;c&&!qe(c)&&(n.class=je(c)),Re(i)&&(op(i)&&!oe(i)&&(i=it({},i)),n.style=ct(i))}const a=qe(t)?1:yp(t)?128:xy(t)?64:Re(t)?4:ce(t)?2:0;return e(t,n,s,o,l,a,r,!0)}function te(t){return t?op(t)||nl in t?it({},t):t:null}function Mn(t,n,s=!1){const{props:o,ref:l,patchFlag:r,children:a}=t,c=n?Te(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&$p(c),ref:n&&n.ref?s&&l?oe(l)?l.concat(Bo(n)):[l,Bo(n)]:Bo(n):l,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:n&&t.type!==Se?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Mn(t.ssContent),ssFallback:t.ssFallback&&Mn(t.ssFallback),el:t.el,anchor:t.anchor}}function p(t=" ",n=0){return q(Ur,null,t,n)}function me(t="",n=!1){return n?(B(),V(mn,null,t)):q(mn,null,t)}function qt(t){return t==null||typeof t=="boolean"?q(mn):oe(t)?q(Se,null,t.slice()):typeof t=="object"?rn(t):q(Ur,null,String(t))}function rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Mn(t)}function Qr(t,n){let s=0;const{shapeFlag:o}=t;if(n==null)n=null;else if(oe(n))s=16;else if(typeof n=="object")if(o&65){const l=n.default;l&&(l._c&&(l._d=!1),Qr(t,l()),l._c&&(l._d=!0));return}else{s=32;const l=n._;!l&&!(nl in n)?n._ctx=Xe:l===3&&Xe&&(Xe.slots._===1?n._=1:(n._=2,t.patchFlag|=1024))}else ce(n)?(n={default:n,_ctx:Xe},s=32):(n=String(n),o&64?(s=16,n=[p(n)]):s=8);t.children=n,t.shapeFlag|=s}function Te(...t){const n={};for(let s=0;s<t.length;s++){const o=t[s];for(const l in o)if(l==="class")n.class!==o.class&&(n.class=je([n.class,o.class]));else if(l==="style")n.style=ct([n.style,o.style]);else if(Yo(l)){const r=n[l],a=o[l];a&&r!==a&&!(oe(r)&&r.includes(a))&&(n[l]=r?[].concat(r,a):a)}else l!==""&&(n[l]=o[l])}return n}function bt(t,n,s,o=null){Ot(t,n,7,[s,o])}const Py=Sp();let Oy=0;function Ty(t,n,s){const o=t.type,l=(n?n.appContext:t.appContext)||Py,r={uid:Oy++,vnode:t,type:o,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new zi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ep(o,l),emitsOptions:fp(o,l),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:o.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=zf.bind(null,r),t.ce&&t.ce(r),r}let We=null;const Nn=()=>We||Xe,is=t=>{We=t,t.scope.on()},Pn=()=>{We&&We.scope.off(),We=null};function Pp(t){return t.vnode.shapeFlag&4}let Qs=!1;function Ly(t,n=!1){Qs=n;const{props:s,children:o}=t.vnode,l=Pp(t);my(t,s,l,n),_y(t,o);const r=l?Iy(t,n):void 0;return Qs=!1,r}function Iy(t,n){const s=t.type;t.accessCache=Object.create(null),t.proxy=Ko(new Proxy(t.ctx,py));const{setup:o}=s;if(o){const l=t.setupContext=o.length>1?Tp(t):null;is(t),fs();const r=un(o,t,0,[t.props,l]);if(ys(),Pn(),Hi(r)){if(r.then(Pn,Pn),n)return r.then(a=>{Za(t,a,n)}).catch(a=>{Wo(a,t,0)});t.asyncDep=r}else Za(t,r,n)}else Op(t,n)}function Za(t,n,s){ce(n)?t.type.__ssrInlineRender?t.ssrRender=n:t.render=n:Re(n)&&(t.setupState=rp(n)),Op(t,s)}let Xa;function Op(t,n,s){const o=t.type;if(!t.render){if(!n&&Xa&&!o.render){const l=o.template||Yr(t).template;if(l){const{isCustomElement:r,compilerOptions:a}=t.appContext.config,{delimiters:c,compilerOptions:i}=o,u=it(it({isCustomElement:r,delimiters:c},a),i);o.render=Xa(l,u)}}t.render=o.render||Pt}is(t),fs(),uy(t),ys(),Pn()}function My(t){return new Proxy(t.attrs,{get(n,s){return Bt(t,"get","$attrs"),n[s]}})}function Tp(t){const n=o=>{t.exposed=o||{}};let s;return{get attrs(){return s||(s=My(t))},slots:t.slots,emit:t.emit,expose:n}}function sl(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rp(Ko(t.exposed)),{get(n,s){if(s in n)return n[s];if(s in $o)return $o[s](t)}}))}function Kl(t,n=!0){return ce(t)?t.displayName||t.name:t.name||n&&t.__name}function Ry(t){return ce(t)&&"__vccOpts"in t}const S=(t,n)=>Nf(t,n,Qs);function Ny(){return jy().slots}function jy(){const t=Nn();return t.setupContext||(t.setupContext=Tp(t))}function ut(t,n,s){const o=arguments.length;return o===2?Re(n)&&!oe(n)?cs(n)?q(t,null,[n]):q(t,n):q(t,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&cs(s)&&(s=[s]),q(t,n,s))}const qy="3.2.40",Hy="http://www.w3.org/2000/svg",Cn=typeof document<"u"?document:null,ec=Cn&&Cn.createElement("template"),Vy={insert:(t,n,s)=>{n.insertBefore(t,s||null)},remove:t=>{const n=t.parentNode;n&&n.removeChild(t)},createElement:(t,n,s,o)=>{const l=n?Cn.createElementNS(Hy,t):Cn.createElement(t,s?{is:s}:void 0);return t==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,n)=>{t.nodeValue=n},setElementText:(t,n)=>{t.textContent=n},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,n){t.setAttribute(n,"")},insertStaticContent(t,n,s,o,l,r){const a=s?s.previousSibling:n.lastChild;if(l&&(l===r||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),s),!(l===r||!(l=l.nextSibling)););else{ec.innerHTML=o?`<svg>${t}</svg>`:t;const c=ec.content;if(o){const i=c.firstChild;for(;i.firstChild;)c.appendChild(i.firstChild);c.removeChild(i)}n.insertBefore(c,s)}return[a?a.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Yy(t,n,s){const o=t._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?t.removeAttribute("class"):s?t.setAttribute("class",n):t.className=n}function zy(t,n,s){const o=t.style,l=qe(s);if(s&&!l){for(const r in s)Wl(o,r,s[r]);if(n&&!qe(n))for(const r in n)s[r]==null&&Wl(o,r,"")}else{const r=o.display;l?n!==s&&(o.cssText=s):n&&t.removeAttribute("style"),"_vod"in t&&(o.display=r)}}const tc=/\s*!important$/;function Wl(t,n,s){if(oe(s))s.forEach(o=>Wl(t,n,o));else if(s==null&&(s=""),n.startsWith("--"))t.setProperty(n,s);else{const o=Gy(t,n);tc.test(s)?t.setProperty(Rn(o),s.replace(tc,""),"important"):t[o]=s}}const nc=["Webkit","Moz","ms"],ml={};function Gy(t,n){const s=ml[n];if(s)return s;let o=Ut(n);if(o!=="filter"&&o in t)return ml[n]=o;o=Uo(o);for(let l=0;l<nc.length;l++){const r=nc[l]+o;if(r in t)return ml[n]=r}return n}const sc="http://www.w3.org/1999/xlink";function Uy(t,n,s,o,l){if(o&&n.startsWith("xlink:"))s==null?t.removeAttributeNS(sc,n.slice(6,n.length)):t.setAttributeNS(sc,n,s);else{const r=Yd(n);s==null||r&&!Ni(s)?t.removeAttribute(n):t.setAttribute(n,r?"":s)}}function Qy(t,n,s,o,l,r,a){if(n==="innerHTML"||n==="textContent"){o&&a(o,l,r),t[n]=s==null?"":s;return}if(n==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=s;const i=s==null?"":s;(t.value!==i||t.tagName==="OPTION")&&(t.value=i),s==null&&t.removeAttribute(n);return}let c=!1;if(s===""||s==null){const i=typeof t[n];i==="boolean"?s=Ni(s):s==null&&i==="string"?(s="",c=!0):i==="number"&&(s=0,c=!0)}try{t[n]=s}catch{}c&&t.removeAttribute(n)}const[Lp,Ky]=(()=>{let t=Date.now,n=!1;if(typeof window<"u"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(s&&Number(s[1])<=53)}return[t,n]})();let Jl=0;const Wy=Promise.resolve(),Jy=()=>{Jl=0},Zy=()=>Jl||(Wy.then(Jy),Jl=Lp());function Qn(t,n,s,o){t.addEventListener(n,s,o)}function Xy(t,n,s,o){t.removeEventListener(n,s,o)}function eh(t,n,s,o,l=null){const r=t._vei||(t._vei={}),a=r[n];if(o&&a)a.value=o;else{const[c,i]=th(n);if(o){const u=r[n]=nh(o,l);Qn(t,c,u,i)}else a&&(Xy(t,c,a,i),r[n]=void 0)}}const oc=/(?:Once|Passive|Capture)$/;function th(t){let n;if(oc.test(t)){n={};let o;for(;o=t.match(oc);)t=t.slice(0,t.length-o[0].length),n[o[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rn(t.slice(2)),n]}function nh(t,n){const s=o=>{const l=o.timeStamp||Lp();(Ky||l>=s.attached-1)&&Ot(sh(o,s.value),n,5,[o])};return s.value=t,s.attached=Zy(),s}function sh(t,n){if(oe(n)){const s=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{s.call(t),t._stopped=!0},n.map(o=>l=>!l._stopped&&o&&o(l))}else return n}const lc=/^on[a-z]/,oh=(t,n,s,o,l=!1,r,a,c,i)=>{n==="class"?Yy(t,o,l):n==="style"?zy(t,s,o):Yo(n)?wr(n)||eh(t,n,s,o,a):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):lh(t,n,o,l))?Qy(t,n,o,r,a,c,i):(n==="true-value"?t._trueValue=o:n==="false-value"&&(t._falseValue=o),Uy(t,n,o,l))};function lh(t,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in t&&lc.test(n)&&ce(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&t.tagName==="INPUT"||n==="type"&&t.tagName==="TEXTAREA"||lc.test(n)&&qe(s)?!1:n in t}const rc=t=>{const n=t.props["onUpdate:modelValue"]||!1;return oe(n)?s=>ts(n,s):n};function rh(t){t.target.composing=!0}function ac(t){const n=t.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const ah={created(t,{modifiers:{lazy:n,trim:s,number:o}},l){t._assign=rc(l);const r=o||l.props&&l.props.type==="number";Qn(t,n?"change":"input",a=>{if(a.target.composing)return;let c=t.value;s&&(c=c.trim()),r&&(c=Ml(c)),t._assign(c)}),s&&Qn(t,"change",()=>{t.value=t.value.trim()}),n||(Qn(t,"compositionstart",rh),Qn(t,"compositionend",ac),Qn(t,"change",ac))},mounted(t,{value:n}){t.value=n==null?"":n},beforeUpdate(t,{value:n,modifiers:{lazy:s,trim:o,number:l}},r){if(t._assign=rc(r),t.composing||document.activeElement===t&&t.type!=="range"&&(s||o&&t.value.trim()===n||(l||t.type==="number")&&Ml(t.value)===n))return;const a=n==null?"":n;t.value!==a&&(t.value=a)}},ch={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},cc=(t,n)=>s=>{if(!("key"in s))return;const o=Rn(s.key);if(n.some(l=>l===o||ch[l]===o))return t(s)},Ip={beforeMount(t,{value:n},{transition:s}){t._vod=t.style.display==="none"?"":t.style.display,s&&n?s.beforeEnter(t):bs(t,n)},mounted(t,{value:n},{transition:s}){s&&n&&s.enter(t)},updated(t,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(t),bs(t,!0),o.enter(t)):o.leave(t,()=>{bs(t,!1)}):bs(t,n))},beforeUnmount(t,{value:n}){bs(t,n)}};function bs(t,n){t.style.display=n?t._vod:"none"}const ih=it({patchProp:oh},Vy);let ic;function ph(){return ic||(ic=Dy(ih))}const uh=(...t)=>{const n=ph().createApp(...t),{mount:s}=n;return n.mount=o=>{const l=dh(o);if(!l)return;const r=n._component;!ce(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const a=s(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),a},n};function dh(t){return qe(t)?document.querySelector(t):t}var Mp="usehead",pc="head:count",gl="data-head-attrs",Rp="data-meta-body",fh=(t,n,s)=>{const o=s.createElement(t);for(const l of Object.keys(n))if(l==="body"&&n.body===!0)o.setAttribute(Rp,"true");else{let r=n[l];if(l==="renderPriority"||l==="key"||r===!1)continue;l==="children"?o.textContent=r:o.setAttribute(l,r)}return o};function uc(t,n){if(t instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!t.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===t.nonce&&t.isEqualNode(o)}}return t.isEqualNode(n)}var yh=t=>{if(!["meta","base","script","link"].includes(t.tag))return!1;const{props:n,tag:s}=t;if(s==="base")return"base";if(s==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const o=["key","id","name","property","http-equiv"];for(const l of o){let r;if(typeof n.getAttribute=="function"&&n.hasAttribute(l)?r=n.getAttribute(l):r=n[l],r!==void 0)return`${s}-${l}-${r}`}return!1},hh=()=>{const t=O(Mp);if(!t)throw new Error("You may forget to apply app.use(head)");return t},mh=["title","meta","link","base","style","script","noscript","htmlAttrs","bodyAttrs"],gh=(t,n)=>t==null?"":typeof t=="string"?t.replace("%s",n!=null?n:""):t(b(n)),vh=t=>{const n=[],s=Object.keys(t);for(const o of s)if(t[o]!=null)switch(o){case"title":n.push({tag:o,props:{children:t[o]}});break;case"titleTemplate":break;case"base":n.push({tag:o,props:{key:"default",...t[o]}});break;default:if(mh.includes(o)){const l=t[o];Array.isArray(l)?l.forEach(r=>{n.push({tag:o,props:b(r)})}):l&&n.push({tag:o,props:l})}break}return n},dc=(t,n)=>{const s=t.getAttribute(gl);if(s)for(const l of s.split(","))l in n||t.removeAttribute(l);const o=[];for(const l in n){const r=n[l];r!=null&&(r===!1?t.removeAttribute(l):t.setAttribute(l,r),o.push(l))}o.length?t.setAttribute(gl,o.join(",")):t.removeAttribute(gl)},_h=(t=window.document,n,s)=>{var o,l;const r=t.head,a=t.body;let c=r.querySelector(`meta[name="${pc}"]`),i=a.querySelectorAll(`[${Rp}]`);const u=c?Number(c.getAttribute("content")):0,d=[],f=[];if(i)for(let h=0;h<i.length;h++)i[h]&&((o=i[h].tagName)==null?void 0:o.toLowerCase())===n&&f.push(i[h]);if(c)for(let h=0,m=c.previousElementSibling;h<u;h++,m=(m==null?void 0:m.previousElementSibling)||null)((l=m==null?void 0:m.tagName)==null?void 0:l.toLowerCase())===n&&d.push(m);else c=t.createElement("meta"),c.setAttribute("name",pc),c.setAttribute("content","0"),r.append(c);let y=s.map(h=>{var m;return{element:fh(h.tag,h.props,t),body:(m=h.props.body)!=null?m:!1}});y=y.filter(h=>{for(let m=0;m<d.length;m++){const _=d[m];if(uc(_,h.element))return d.splice(m,1),!1}for(let m=0;m<f.length;m++){const _=f[m];if(uc(_,h.element))return f.splice(m,1),!1}return!0}),f.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),d.forEach(h=>{var m;return(m=h.parentNode)==null?void 0:m.removeChild(h)}),y.forEach(h=>{h.body===!0?a.insertAdjacentElement("beforeend",h.element):r.insertBefore(h.element,c)}),c.setAttribute("content",""+(u-d.length+y.filter(h=>!h.body).length))},Ah=t=>{let n=[],s=new Set;t&&n.push(Lt(t));const o={install(l){l.config.globalProperties.$head=o,l.provide(Mp,o)},get headTags(){const l=[],r={},a=n.map(c=>b(c).titleTemplate).reverse().find(c=>c!=null);return n.forEach((c,i)=>{vh(b(c)).forEach((d,f)=>{d._position=i*1e4+f,a&&d.tag==="title"&&(d.props.children=gh(a,d.props.children));const y=yh(d);y?r[y]=d:l.push(d)})}),l.push(...Object.values(r)),l.sort((c,i)=>c._position-i._position)},addHeadObjs(l){n.push(l)},removeHeadObjs(l){n=n.filter(r=>r!==l)},updateDOM(l=window.document){let r,a={},c={};const i={};for(const d of o.headTags.sort(Dh)){if(d.tag==="title"){r=d.props.children;continue}if(d.tag==="htmlAttrs"){Object.assign(a,d.props);continue}if(d.tag==="bodyAttrs"){Object.assign(c,d.props);continue}i[d.tag]=i[d.tag]||[],i[d.tag].push(d)}r!==void 0&&(l.title=r),dc(l.documentElement,a),dc(l.body,c);const u=new Set([...Object.keys(i),...s]);for(const d of u)_h(l,d,i[d]||[]);s.clear(),Object.keys(i).forEach(d=>s.add(d))}};return o},Bh=typeof window<"u",bh=t=>{const n=hh(),s=G(t);n.addHeadObjs(s),Bh&&(hs(()=>{n.updateDOM()}),el(()=>{n.removeHeadObjs(s),n.updateDOM()}))},Dh=(t,n)=>{const s=o=>{if(o.props.renderPriority)return o.props.renderPriority;switch(o.tag){case"base":return-1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}};return s(t)-s(n)};const Os=Symbol("v-click-clicks"),En=Symbol("v-click-clicks-elements"),Zl=Symbol("v-click-clicks-order-map"),Ts=Symbol("v-click-clicks-disabled"),Np=Symbol("slidev-slide-scale"),Y=Symbol("slidev-slidev-context"),Ch=Symbol("slidev-route"),Eh=Symbol("slidev-slide-context"),bn="slidev-vclick-target",vl="slidev-vclick-hidden",xh="slidev-vclick-fade",_l="slidev-vclick-hidden-explicitly",Ds="slidev-vclick-current",mo="slidev-vclick-prior";function wh(t){return t=t||[],Array.isArray(t)?t:[t]}function Xl(t,n){if(!t)return!1;const s=t.indexOf(n);return s>=0?(t.splice(s,1),!0):!1}function kh(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function Sh(t){return t!=null}function Fh(t,n){return Object.fromEntries(Object.entries(t).map(([s,o])=>n(s,o)).filter(Sh))}const kn={theme:"apple-basic",title:"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:`<h2>Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga</h2>
<p><a href="https://github.com/nlepage/yoga-migration-talk" target="_blank" rel="noopener">Sources</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"hash",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"Helvetica Neue"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto","Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:["ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:["ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["Helvetica Neue"],provider:"google",local:["Helvetica Neue"],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",layout:"intro",class:"background-leafs"},be=kn;var Mi;const dn=(Mi=be.aspectRatio)!=null?Mi:16/9;var Ri;const On=(Ri=be.canvasWidth)!=null?Ri:980,jp=Math.round(On/dn),qp=S(()=>Fh(be.themeConfig||{},(t,n)=>[`--slidev-theme-${t}`,n]));function Ct(t,n,s){Object.defineProperty(t,n,{value:s,writable:!0,enumerable:!1})}const jn=Me({page:0,clicks:0});let $h=[],Ph=[];Ct(jn,"$syncUp",!0);Ct(jn,"$syncDown",!0);Ct(jn,"$paused",!1);Ct(jn,"$onSet",t=>$h.push(t));Ct(jn,"$onPatch",t=>Ph.push(t));Ct(jn,"$patch",async()=>!1);function Hp(t,n,s=!1){const o=[];let l=!1,r=!1,a,c;const i=Me(n);function u(h){o.push(h)}function d(h,m){clearTimeout(a),l=!0,i[h]=m,a=setTimeout(()=>l=!1,0)}function f(h){l||(clearTimeout(c),r=!0,Object.entries(h).forEach(([m,_])=>{i[m]=_}),c=setTimeout(()=>r=!1,0))}function y(h){let m;s?s&&window.addEventListener("storage",A=>{A&&A.key===h&&A.newValue&&f(JSON.parse(A.newValue))}):(m=new BroadcastChannel(h),m.addEventListener("message",A=>f(A.data)));function _(){!s&&m&&!r?m.postMessage(De(i)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(i)),l||o.forEach(A=>A(i))}if(ue(i,_,{deep:!0}),s){const A=window.localStorage.getItem(h);A&&f(JSON.parse(A))}}return{init:y,onPatch:u,patch:d,state:i}}const{init:Oh,onPatch:Th,patch:fc,state:Al}=Hp(jn,{page:1,clicks:0}),qn=Me({});let Lh=[],Ih=[];Ct(qn,"$syncUp",!0);Ct(qn,"$syncDown",!0);Ct(qn,"$paused",!1);Ct(qn,"$onSet",t=>Lh.push(t));Ct(qn,"$onPatch",t=>Ih.push(t));Ct(qn,"$patch",async()=>!1);const{init:Mh,onPatch:Rh,patch:Vp,state:Oo}=Hp(qn,{},!1),Nh="modulepreload",jh=function(t){return"/yoga-migration-talk/main/"+t},yc={},gs=function(n,s,o){return!s||s.length===0?n():Promise.all(s.map(l=>{if(l=jh(l),l in yc)return;yc[l]=!0;const r=l.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${a}`))return;const c=document.createElement("link");if(c.rel=r?"stylesheet":Nh,r||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),r)return new Promise((i,u)=>{c.addEventListener("load",i),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>n())};var hc;const Mt=typeof window<"u",qh=t=>typeof t<"u",Hh=Object.prototype.toString,To=t=>typeof t=="function",Vh=t=>typeof t=="number",Yp=t=>typeof t=="string",er=t=>Hh.call(t)==="[object Object]",tr=()=>+Date.now(),Tn=()=>{};Mt&&((hc=window==null?void 0:window.navigator)==null?void 0:hc.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function lt(t){return typeof t=="function"?t():b(t)}function Yh(t,n){function s(...o){t(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const zp=t=>t();function zh(t=zp){const n=G(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...r)=>{n.value&&t(...r)}}}function Gh(t){return t}function Uh(t,n){var s;if(typeof t=="number")return t+n;const o=((s=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",l=t.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?t:r+l}function Qh(t,n){let s,o,l;const r=G(!0),a=()=>{r.value=!0,l()};ue(t,a,{flush:"sync"});const c=To(n)?n:n.get,i=To(n)?void 0:n.set,u=ap((d,f)=>(o=d,l=f,{get(){return r.value&&(s=c(),r.value=!1),o(),s},set(y){i==null||i(y)}}));return Object.isExtensible(u)&&(u.trigger=a),u}function en(t){return Gi()?(Ui(t),!0):!1}function Kh(t){if(!xe(t))return Me(t);const n=new Proxy({},{get(s,o,l){return b(Reflect.get(t.value,o,l))},set(s,o,l){return xe(t.value[o])&&!xe(l)?t.value[o].value=l:t.value[o]=l,!0},deleteProperty(s,o){return Reflect.deleteProperty(t.value,o)},has(s,o){return Reflect.has(t.value,o)},ownKeys(){return Object.keys(t.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return Me(n)}function Gp(t){return typeof t=="function"?S(t):G(t)}var Wh=Object.defineProperty,Jh=Object.defineProperties,Zh=Object.getOwnPropertyDescriptors,mc=Object.getOwnPropertySymbols,Xh=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,gc=(t,n,s)=>n in t?Wh(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,tm=(t,n)=>{for(var s in n||(n={}))Xh.call(n,s)&&gc(t,s,n[s]);if(mc)for(var s of mc(n))em.call(n,s)&&gc(t,s,n[s]);return t},nm=(t,n)=>Jh(t,Zh(n));function sm(t){if(!xe(t))return Lf(t);const n=Array.isArray(t.value)?new Array(t.value.length):{};for(const s in t.value)n[s]=ap(()=>({get(){return t.value[s]},set(o){if(Array.isArray(t.value)){const l=[...t.value];l[s]=o,t.value=l}else{const l=nm(tm({},t.value),{[s]:o});Object.setPrototypeOf(l,t.value),t.value=l}}}));return n}function Up(t,n=!0){Nn()?ms(t):n?t():rt(t)}function om(t){Nn()&&tl(t)}function lm(t,n=1e3,s={}){const{immediate:o=!0,immediateCallback:l=!1}=s;let r=null;const a=G(!1);function c(){r&&(clearInterval(r),r=null)}function i(){a.value=!1,c()}function u(){b(n)<=0||(a.value=!0,l&&t(),c(),r=setInterval(t,lt(n)))}if(o&&Mt&&u(),xe(n)){const d=ue(n,()=>{a.value&&Mt&&u()});en(d)}return en(i),{isActive:a,pause:i,resume:u}}function rm(t,n,s={}){const{immediate:o=!0}=s,l=G(!1);let r=null;function a(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,a()}function i(...u){a(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,t(...u)},lt(n))}return o&&(l.value=!0,Mt&&i()),en(c),{isPending:l,start:i,stop:c}}function Qp(t=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,l=xe(t),r=G(t);function a(c){if(arguments.length)return r.value=c,r.value;{const i=lt(s);return r.value=r.value===i?lt(o):i,r.value}}return l?a:[r,a]}var vc=Object.getOwnPropertySymbols,am=Object.prototype.hasOwnProperty,cm=Object.prototype.propertyIsEnumerable,im=(t,n)=>{var s={};for(var o in t)am.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&vc)for(var o of vc(t))n.indexOf(o)<0&&cm.call(t,o)&&(s[o]=t[o]);return s};function pm(t,n,s={}){const o=s,{eventFilter:l=zp}=o,r=im(o,["eventFilter"]);return ue(t,Yh(l,n),r)}var um=Object.defineProperty,dm=Object.defineProperties,fm=Object.getOwnPropertyDescriptors,Lo=Object.getOwnPropertySymbols,Kp=Object.prototype.hasOwnProperty,Wp=Object.prototype.propertyIsEnumerable,_c=(t,n,s)=>n in t?um(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,ym=(t,n)=>{for(var s in n||(n={}))Kp.call(n,s)&&_c(t,s,n[s]);if(Lo)for(var s of Lo(n))Wp.call(n,s)&&_c(t,s,n[s]);return t},hm=(t,n)=>dm(t,fm(n)),mm=(t,n)=>{var s={};for(var o in t)Kp.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Lo)for(var o of Lo(t))n.indexOf(o)<0&&Wp.call(t,o)&&(s[o]=t[o]);return s};function gm(t,n,s={}){const o=s,{eventFilter:l}=o,r=mm(o,["eventFilter"]),{eventFilter:a,pause:c,resume:i,isActive:u}=zh(l);return{stop:pm(t,n,hm(ym({},r),{eventFilter:a})),pause:c,resume:i,isActive:u}}function $t(t){var n;const s=lt(t);return(n=s==null?void 0:s.$el)!=null?n:s}const tt=Mt?window:void 0,vm=Mt?window.document:void 0,_m=Mt?window.navigator:void 0;function ie(...t){let n,s,o,l;if(Yp(t[0])?([s,o,l]=t,n=tt):[n,s,o,l]=t,!n)return Tn;let r=Tn;const a=ue(()=>$t(n),i=>{r(),i&&(i.addEventListener(s,o,l),r=()=>{i.removeEventListener(s,o,l),r=Tn})},{immediate:!0,flush:"post"}),c=()=>{a(),r()};return en(c),c}function Am(t,n,s={}){const{window:o=tt,ignore:l,capture:r=!0,detectIframe:a=!1}=s;if(!o)return;const c=G(!0);let i;const u=h=>{o.clearTimeout(i);const m=$t(t);!m||m===h.target||h.composedPath().includes(m)||!c.value||n(h)},d=h=>l&&l.some(m=>{const _=$t(m);return _&&(h.target===_||h.composedPath().includes(_))}),f=[ie(o,"click",u,{passive:!0,capture:r}),ie(o,"pointerdown",h=>{const m=$t(t);c.value=!!m&&!h.composedPath().includes(m)&&!d(h)},{passive:!0}),ie(o,"pointerup",h=>{if(h.button===0){const m=h.composedPath();h.composedPath=()=>m,i=o.setTimeout(()=>u(h),50)}},{passive:!0}),a&&ie(o,"blur",h=>{var m;const _=$t(t);((m=document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(_!=null&&_.contains(document.activeElement))&&n(h)})].filter(Boolean);return()=>f.forEach(h=>h())}const Bm=t=>typeof t=="function"?t:typeof t=="string"?n=>n.key===t:Array.isArray(t)?n=>t.includes(n.key):()=>!0;function bm(...t){let n,s,o={};t.length===3?(n=t[0],s=t[1],o=t[2]):t.length===2?typeof t[1]=="object"?(n=!0,s=t[0],o=t[1]):(n=t[0],s=t[1]):(n=!0,s=t[0]);const{target:l=tt,eventName:r="keydown",passive:a=!1}=o,c=Bm(n);return ie(l,r,u=>{c(u)&&s(u)},a)}function Dm(t={}){const{window:n=tt}=t,s=Qh(()=>null,()=>n==null?void 0:n.document.activeElement);return n&&(ie(n,"blur",s.trigger,!0),ie(n,"focus",s.trigger,!0)),s}function oo(t,n=!1){const s=G(),o=()=>s.value=Boolean(t());return o(),Up(o,n),s}function Kn(t,n={}){const{window:s=tt}=n,o=oo(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let l;const r=G(!1),a=()=>{!l||("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{!o.value||(a(),l=s.matchMedia(Gp(t).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return hs(c),en(()=>a()),r}const Cm={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Em=Object.defineProperty,Ac=Object.getOwnPropertySymbols,xm=Object.prototype.hasOwnProperty,wm=Object.prototype.propertyIsEnumerable,Bc=(t,n,s)=>n in t?Em(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,km=(t,n)=>{for(var s in n||(n={}))xm.call(n,s)&&Bc(t,s,n[s]);if(Ac)for(var s of Ac(n))wm.call(n,s)&&Bc(t,s,n[s]);return t};function Sm(t,n={}){function s(c,i){let u=t[c];return i!=null&&(u=Uh(u,i)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=tt}=n;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>Kn(`(min-width: ${s(c)})`,n),a=Object.keys(t).reduce((c,i)=>(Object.defineProperty(c,i,{get:()=>r(i),enumerable:!0,configurable:!0}),c),{});return km({greater(c){return Kn(`(min-width: ${s(c,.1)})`,n)},greaterOrEqual:r,smaller(c){return Kn(`(max-width: ${s(c,-.1)})`,n)},smallerOrEqual(c){return Kn(`(max-width: ${s(c)})`,n)},between(c,i){return Kn(`(min-width: ${s(c)}) and (max-width: ${s(i,-.1)})`,n)},isGreater(c){return l(`(min-width: ${s(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${s(c)})`)},isSmaller(c){return l(`(max-width: ${s(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${s(c)})`)},isInBetween(c,i){return l(`(min-width: ${s(c)}) and (max-width: ${s(i,-.1)})`)}},a)}function Fm(t={}){const{navigator:n=_m,read:s=!1,source:o,copiedDuring:l=1500}=t,r=["copy","cut"],a=oo(()=>n&&"clipboard"in n),c=G(""),i=G(!1),u=rm(()=>i.value=!1,l);function d(){n.clipboard.readText().then(y=>{c.value=y})}if(a.value&&s)for(const y of r)ie(y,d);async function f(y=lt(o)){a.value&&y!=null&&(await n.clipboard.writeText(y),c.value=y,i.value=!0,u.start())}return{isSupported:a,text:c,copied:i,copy:f}}function $m(t){return JSON.parse(JSON.stringify(t))}const nr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},sr="__vueuse_ssr_handlers__";nr[sr]=nr[sr]||{};const Pm=nr[sr];function Om(t,n){return Pm[t]||n}function Tm(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"||Array.isArray(t)?"object":Number.isNaN(t)?"any":"number"}var Lm=Object.defineProperty,bc=Object.getOwnPropertySymbols,Im=Object.prototype.hasOwnProperty,Mm=Object.prototype.propertyIsEnumerable,Dc=(t,n,s)=>n in t?Lm(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Cc=(t,n)=>{for(var s in n||(n={}))Im.call(n,s)&&Dc(t,s,n[s]);if(bc)for(var s of bc(n))Mm.call(n,s)&&Dc(t,s,n[s]);return t};const Rm={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}};function Nt(t,n,s,o={}){var l;const{flush:r="pre",deep:a=!0,listenToStorageChanges:c=!0,writeDefaults:i=!0,mergeDefaults:u=!1,shallow:d,window:f=tt,eventFilter:y,onError:h=N=>{console.error(N)}}=o,m=(d?Lt:G)(n);if(!s)try{s=Om("getDefaultStorage",()=>{var N;return(N=tt)==null?void 0:N.localStorage})()}catch(N){h(N)}if(!s)return m;const _=lt(n),A=Tm(_),E=(l=o.serializer)!=null?l:Rm[A],{pause:C,resume:D}=gm(m,()=>k(m.value),{flush:r,deep:a,eventFilter:y});return f&&c&&ie(f,"storage",T),T(),m;function k(N){try{N==null?s.removeItem(t):s.setItem(t,E.write(N))}catch(Z){h(Z)}}function M(N){if(!(N&&N.key!==t)){C();try{const Z=N?N.newValue:s.getItem(t);if(Z==null)return i&&_!==null&&s.setItem(t,E.write(_)),_;if(!N&&u){const pe=E.read(Z);return To(u)?u(pe,_):A==="object"&&!Array.isArray(pe)?Cc(Cc({},_),pe):pe}else return typeof Z!="string"?Z:E.read(Z)}catch(Z){h(Z)}finally{D()}}}function T(N){N&&N.key!==t||(m.value=M(N))}}function Nm(t){return Kn("(prefers-color-scheme: dark)",t)}var jm=Object.defineProperty,qm=Object.defineProperties,Hm=Object.getOwnPropertyDescriptors,Ec=Object.getOwnPropertySymbols,Vm=Object.prototype.hasOwnProperty,Ym=Object.prototype.propertyIsEnumerable,xc=(t,n,s)=>n in t?jm(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,zm=(t,n)=>{for(var s in n||(n={}))Vm.call(n,s)&&xc(t,s,n[s]);if(Ec)for(var s of Ec(n))Ym.call(n,s)&&xc(t,s,n[s]);return t},Gm=(t,n)=>qm(t,Hm(n));function s6(t,n={}){var s,o,l;const r=(s=n.draggingElement)!=null?s:tt,a=(o=n.handle)!=null?o:t,c=G((l=lt(n.initialValue))!=null?l:{x:0,y:0}),i=G(),u=m=>n.pointerTypes?n.pointerTypes.includes(m.pointerType):!0,d=m=>{lt(n.preventDefault)&&m.preventDefault(),lt(n.stopPropagation)&&m.stopPropagation()},f=m=>{var _;if(!u(m)||lt(n.exact)&&m.target!==lt(t))return;const A=lt(t).getBoundingClientRect(),E={x:m.pageX-A.left,y:m.pageY-A.top};((_=n.onStart)==null?void 0:_.call(n,E,m))!==!1&&(i.value=E,d(m))},y=m=>{var _;!u(m)||!i.value||(c.value={x:m.pageX-i.value.x,y:m.pageY-i.value.y},(_=n.onMove)==null||_.call(n,c.value,m),d(m))},h=m=>{var _;!u(m)||!i.value||(i.value=void 0,(_=n.onEnd)==null||_.call(n,c.value,m),d(m))};return Mt&&(ie(a,"pointerdown",f,!0),ie(r,"pointermove",y,!0),ie(r,"pointerup",h,!0)),Gm(zm({},sm(c)),{position:c,isDragging:S(()=>!!i.value),style:S(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var wc=Object.getOwnPropertySymbols,Um=Object.prototype.hasOwnProperty,Qm=Object.prototype.propertyIsEnumerable,Km=(t,n)=>{var s={};for(var o in t)Um.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&wc)for(var o of wc(t))n.indexOf(o)<0&&Qm.call(t,o)&&(s[o]=t[o]);return s};function Wm(t,n,s={}){const o=s,{window:l=tt}=o,r=Km(o,["window"]);let a;const c=oo(()=>l&&"ResizeObserver"in l),i=()=>{a&&(a.disconnect(),a=void 0)},u=ue(()=>$t(t),f=>{i(),c.value&&l&&f&&(a=new ResizeObserver(n),a.observe(f,r))},{immediate:!0,flush:"post"}),d=()=>{i(),u()};return en(d),{isSupported:c,stop:d}}function Jm(t,n={}){const{immediate:s=!0,window:o=tt}=n,l=G(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function i(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),en(i),{isActive:l,pause:i,resume:c}}function Zm(t,n={width:0,height:0},s={}){const{box:o="content-box"}=s,l=G(n.width),r=G(n.height);return Wm(t,([a])=>{const c=o==="border-box"?a.borderBoxSize:o==="content-box"?a.contentBoxSize:a.devicePixelContentBoxSize;c?(l.value=c.reduce((i,{inlineSize:u})=>i+u,0),r.value=c.reduce((i,{blockSize:u})=>i+u,0)):(l.value=a.contentRect.width,r.value=a.contentRect.height)},s),ue(()=>$t(t),a=>{l.value=a?n.width:0,r.value=a?n.height:0}),{width:l,height:r}}const kc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Xm(t,n={}){const{document:s=vm,autoExit:o=!1}=n,l=t||(s==null?void 0:s.querySelector("html")),r=G(!1);let a=kc[0];const c=oo(()=>{if(s){for(const _ of kc)if(_[1]in s)return a=_,!0}else return!1;return!1}),[i,u,d,,f]=a;async function y(){!c.value||(s!=null&&s[d]&&await s[u](),r.value=!1)}async function h(){if(!c.value)return;await y();const _=$t(l);_&&(await _[i](),r.value=!0)}async function m(){r.value?await y():await h()}return s&&ie(s,f,()=>{r.value=!!(s!=null&&s[d])},!1),o&&en(y),{isSupported:c,isFullscreen:r,enter:h,exit:y,toggle:m}}function e8(t,n,s={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:a=tt}=s,c=oo(()=>a&&"IntersectionObserver"in a);let i=Tn;const u=c.value?ue(()=>({el:$t(t),root:$t(o)}),({el:f,root:y})=>{if(i(),!f)return;const h=new IntersectionObserver(n,{root:y,rootMargin:l,threshold:r});h.observe(f),i=()=>{h.disconnect(),i=Tn}},{immediate:!0,flush:"post"}):Tn,d=()=>{i(),u()};return en(d),{isSupported:c,stop:d}}const t8={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function n8(t={}){const{reactive:n=!1,target:s=tt,aliasMap:o=t8,passive:l=!0,onEventFired:r=Tn}=t,a=Me(new Set),c={toJSON(){return{}},current:a},i=n?Me(c):c,u=new Set,d=new Set;function f(_,A){_ in i&&(n?i[_]=A:i[_].value=A)}function y(){for(const _ of d)f(_,!1)}function h(_,A){var E,C;const D=(E=_.key)==null?void 0:E.toLowerCase(),M=[(C=_.code)==null?void 0:C.toLowerCase(),D].filter(Boolean);D&&(A?a.add(D):a.delete(D));for(const T of M)d.add(T),f(T,A);D==="meta"&&!A?(u.forEach(T=>{a.delete(T),f(T,!1)}),u.clear()):typeof _.getModifierState=="function"&&_.getModifierState("Meta")&&A&&[...a,...M].forEach(T=>u.add(T))}ie(s,"keydown",_=>(h(_,!0),r(_)),{passive:l}),ie(s,"keyup",_=>(h(_,!1),r(_)),{passive:l}),ie("blur",y,{passive:!0}),ie("focus",y,{passive:!0});const m=new Proxy(i,{get(_,A,E){if(typeof A!="string")return Reflect.get(_,A,E);if(A=A.toLowerCase(),A in o&&(A=o[A]),!(A in i))if(/[+_-]/.test(A)){const D=A.split(/[+_-]/g).map(k=>k.trim());i[A]=S(()=>D.every(k=>b(m[k])))}else i[A]=G(!1);const C=Reflect.get(_,A,E);return n?b(C):C}});return m}function o6(t={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=tt,eventFilter:a}=t,c=G(l.x),i=G(l.y),u=G(null),d=_=>{n==="page"?(c.value=_.pageX,i.value=_.pageY):n==="client"&&(c.value=_.clientX,i.value=_.clientY),u.value="mouse"},f=()=>{c.value=l.x,i.value=l.y},y=_=>{if(_.touches.length>0){const A=_.touches[0];n==="page"?(c.value=A.pageX,i.value=A.pageY):n==="client"&&(c.value=A.clientX,i.value=A.clientY),u.value="touch"}},h=_=>a===void 0?d(_):a(()=>d(_),{}),m=_=>a===void 0?y(_):a(()=>y(_),{});return r&&(ie(r,"mousemove",h,{passive:!0}),ie(r,"dragover",h,{passive:!0}),s&&(ie(r,"touchstart",m,{passive:!0}),ie(r,"touchmove",m,{passive:!0}),o&&ie(r,"touchend",f,{passive:!0}))),{x:c,y:i,sourceType:u}}var Zt;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(Zt||(Zt={}));function s8(t,n={}){const s=Gp(t),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:a}=n,c=Me({x:0,y:0}),i=(T,N)=>{c.x=T,c.y=N},u=Me({x:0,y:0}),d=(T,N)=>{u.x=T,u.y=N},f=S(()=>c.x-u.x),y=S(()=>c.y-u.y),{max:h,abs:m}=Math,_=S(()=>h(m(f.value),m(y.value))>=o),A=G(!1),E=G(!1),C=S(()=>_.value?m(f.value)>m(y.value)?f.value>0?Zt.LEFT:Zt.RIGHT:y.value>0?Zt.UP:Zt.DOWN:Zt.NONE),D=T=>n.pointerTypes?n.pointerTypes.includes(T.pointerType):!0,k=[ie(t,"pointerdown",T=>{var N,Z;if(!D(T))return;E.value=!0,(Z=(N=s.value)==null?void 0:N.style)==null||Z.setProperty("touch-action","none");const pe=T.target;pe==null||pe.setPointerCapture(T.pointerId);const{clientX:de,clientY:_e}=T;i(de,_e),d(de,_e),a==null||a(T)}),ie(t,"pointermove",T=>{if(!D(T)||!E.value)return;const{clientX:N,clientY:Z}=T;d(N,Z),!A.value&&_.value&&(A.value=!0),A.value&&(l==null||l(T))}),ie(t,"pointerup",T=>{var N,Z;!D(T)||(A.value&&(r==null||r(T,C.value)),E.value=!1,A.value=!1,(Z=(N=s.value)==null?void 0:N.style)==null||Z.setProperty("touch-action","initial"))})],M=()=>k.forEach(T=>T());return{isSwiping:Jn(A),direction:Jn(C),posStart:Jn(c),posEnd:Jn(u),distanceX:f,distanceY:y,stop:M}}var o8=Object.defineProperty,Sc=Object.getOwnPropertySymbols,l8=Object.prototype.hasOwnProperty,r8=Object.prototype.propertyIsEnumerable,Fc=(t,n,s)=>n in t?o8(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,a8=(t,n)=>{for(var s in n||(n={}))l8.call(n,s)&&Fc(t,s,n[s]);if(Sc)for(var s of Sc(n))r8.call(n,s)&&Fc(t,s,n[s]);return t};function l6(t={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=t,a=G(tr()+s),c=()=>a.value=tr()+s,i=r?()=>{c(),r(a.value)}:c,u=l==="requestAnimationFrame"?Jm(i,{immediate:o}):lm(i,l,{immediate:o});return n?a8({timestamp:a},u):a}var c8=Object.defineProperty,$c=Object.getOwnPropertySymbols,i8=Object.prototype.hasOwnProperty,p8=Object.prototype.propertyIsEnumerable,Pc=(t,n,s)=>n in t?c8(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,u8=(t,n)=>{for(var s in n||(n={}))i8.call(n,s)&&Pc(t,s,n[s]);if($c)for(var s of $c(n))p8.call(n,s)&&Pc(t,s,n[s]);return t};const d8={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};u8({linear:Gh},d8);function Yt(t,n,s,o={}){var l,r,a;const{clone:c=!1,passive:i=!1,eventName:u,deep:d=!1,defaultValue:f}=o,y=Nn(),h=s||(y==null?void 0:y.emit)||((l=y==null?void 0:y.$emit)==null?void 0:l.bind(y))||((a=(r=y==null?void 0:y.proxy)==null?void 0:r.$emit)==null?void 0:a.bind(y==null?void 0:y.proxy));let m=u;n||(n="modelValue"),m=u||m||`update:${n.toString()}`;const _=E=>c?To(c)?c(E):$m(E):E,A=()=>qh(t[n])?_(t[n]):f;if(i){const E=A(),C=G(E);return ue(()=>t[n],D=>C.value=_(D)),ue(C,D=>{(D!==t[n]||d)&&h(m,D)},{deep:d}),C}else return S({get(){return A()},set(E){h(m,E)}})}function r6({window:t=tt}={}){if(!t)return G(!1);const n=G(t.document.hasFocus());return ie(t,"blur",()=>{n.value=!1}),ie(t,"focus",()=>{n.value=!0}),n}function f8(t={}){const{window:n=tt,initialWidth:s=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=t,a=G(s),c=G(o),i=()=>{n&&(r?(a.value=n.innerWidth,c.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,c.value=n.document.documentElement.clientHeight))};return i(),Up(i),ie("resize",i,{passive:!0}),l&&ie("orientationchange",i,{passive:!0}),{width:a,height:c}}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Wn=typeof window<"u";function y8(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ke=Object.assign;function Bl(t,n){const s={};for(const o in n){const l=n[o];s[o]=Rt(l)?l.map(t):t(l)}return s}const Ls=()=>{},Rt=Array.isArray,h8=/\/$/,m8=t=>t.replace(h8,"");function bl(t,n,s="/"){let o,l={},r="",a="";const c=n.indexOf("#");let i=n.indexOf("?");return c<i&&c>=0&&(i=-1),i>-1&&(o=n.slice(0,i),r=n.slice(i+1,c>-1?c:n.length),l=t(r)),c>-1&&(o=o||n.slice(0,c),a=n.slice(c,n.length)),o=A8(o!=null?o:n,s),{fullPath:o+(r&&"?")+r+a,path:o,query:l,hash:a}}function g8(t,n){const s=n.query?t(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Oc(t,n){return!n||!t.toLowerCase().startsWith(n.toLowerCase())?t:t.slice(n.length)||"/"}function v8(t,n,s){const o=n.matched.length-1,l=s.matched.length-1;return o>-1&&o===l&&ps(n.matched[o],s.matched[l])&&Jp(n.params,s.params)&&t(n.query)===t(s.query)&&n.hash===s.hash}function ps(t,n){return(t.aliasOf||t)===(n.aliasOf||n)}function Jp(t,n){if(Object.keys(t).length!==Object.keys(n).length)return!1;for(const s in t)if(!_8(t[s],n[s]))return!1;return!0}function _8(t,n){return Rt(t)?Tc(t,n):Rt(n)?Tc(n,t):t===n}function Tc(t,n){return Rt(n)?t.length===n.length&&t.every((s,o)=>s===n[o]):t.length===1&&t[0]===n}function A8(t,n){if(t.startsWith("/"))return t;if(!t)return n;const s=n.split("/"),o=t.split("/");let l=s.length-1,r,a;for(r=0;r<o.length;r++)if(a=o[r],a!==".")if(a==="..")l>1&&l--;else break;return s.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Ks;(function(t){t.pop="pop",t.push="push"})(Ks||(Ks={}));var Is;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Is||(Is={}));function B8(t){if(!t)if(Wn){const n=document.querySelector("base");t=n&&n.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),m8(t)}const b8=/^[^#]+#/;function D8(t,n){return t.replace(b8,"#")+n}function C8(t,n){const s=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const ol=()=>({left:window.pageXOffset,top:window.pageYOffset});function E8(t){let n;if("el"in t){const s=t.el,o=typeof s=="string"&&s.startsWith("#"),l=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!l)return;n=C8(l,t)}else n=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Lc(t,n){return(history.state?history.state.position-n:-1)+t}const or=new Map;function x8(t,n){or.set(t,n)}function w8(t){const n=or.get(t);return or.delete(t),n}let k8=()=>location.protocol+"//"+location.host;function Zp(t,n){const{pathname:s,search:o,hash:l}=n,r=t.indexOf("#");if(r>-1){let c=l.includes(t.slice(r))?t.slice(r).length:1,i=l.slice(c);return i[0]!=="/"&&(i="/"+i),Oc(i,"")}return Oc(s,t)+o+l}function S8(t,n,s,o){let l=[],r=[],a=null;const c=({state:y})=>{const h=Zp(t,location),m=s.value,_=n.value;let A=0;if(y){if(s.value=h,n.value=y,a&&a===m){a=null;return}A=_?y.position-_.position:0}else o(h);l.forEach(E=>{E(s.value,m,{delta:A,type:Ks.pop,direction:A?A>0?Is.forward:Is.back:Is.unknown})})};function i(){a=s.value}function u(y){l.push(y);const h=()=>{const m=l.indexOf(y);m>-1&&l.splice(m,1)};return r.push(h),h}function d(){const{history:y}=window;!y.state||y.replaceState(ke({},y.state,{scroll:ol()}),"")}function f(){for(const y of r)y();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:i,listen:u,destroy:f}}function Ic(t,n,s,o=!1,l=!1){return{back:t,current:n,forward:s,replaced:o,position:window.history.length,scroll:l?ol():null}}function F8(t){const{history:n,location:s}=window,o={value:Zp(t,s)},l={value:n.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(i,u,d){const f=t.indexOf("#"),y=f>-1?(s.host&&document.querySelector("base")?t:t.slice(f))+i:k8()+t+i;try{n[d?"replaceState":"pushState"](u,"",y),l.value=u}catch(h){console.error(h),s[d?"replace":"assign"](y)}}function a(i,u){const d=ke({},n.state,Ic(l.value.back,i,l.value.forward,!0),u,{position:l.value.position});r(i,d,!0),o.value=i}function c(i,u){const d=ke({},l.value,n.state,{forward:i,scroll:ol()});r(d.current,d,!0);const f=ke({},Ic(o.value,i,null),{position:d.position+1},u);r(i,f,!1),o.value=i}return{location:o,state:l,push:c,replace:a}}function $8(t){t=B8(t);const n=F8(t),s=S8(t,n.state,n.location,n.replace);function o(r,a=!0){a||s.pauseListeners(),history.go(r)}const l=ke({location:"",base:t,go:o,createHref:D8.bind(null,t)},n,s);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>n.state.value}),l}function P8(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),$8(t)}function O8(t){return typeof t=="string"||t&&typeof t=="object"}function Xp(t){return typeof t=="string"||typeof t=="symbol"}const ln={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},eu=Symbol("");var Mc;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Mc||(Mc={}));function us(t,n){return ke(new Error,{type:t,[eu]:!0},n)}function Qt(t,n){return t instanceof Error&&eu in t&&(n==null||!!(t.type&n))}const Rc="[^/]+?",T8={sensitive:!1,strict:!1,start:!0,end:!0},L8=/[.+*?^${}()[\]/\\]/g;function I8(t,n){const s=ke({},T8,n),o=[];let l=s.start?"^":"";const r=[];for(const u of t){const d=u.length?[]:[90];s.strict&&!u.length&&(l+="/");for(let f=0;f<u.length;f++){const y=u[f];let h=40+(s.sensitive?.25:0);if(y.type===0)f||(l+="/"),l+=y.value.replace(L8,"\\$&"),h+=40;else if(y.type===1){const{value:m,repeatable:_,optional:A,regexp:E}=y;r.push({name:m,repeatable:_,optional:A});const C=E||Rc;if(C!==Rc){h+=10;try{new RegExp(`(${C})`)}catch(k){throw new Error(`Invalid custom RegExp for param "${m}" (${C}): `+k.message)}}let D=_?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;f||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),l+=D,h+=20,A&&(h+=-8),_&&(h+=-20),C===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}s.strict||(l+="/?"),s.end?l+="$":s.strict&&(l+="(?:/|$)");const a=new RegExp(l,s.sensitive?"":"i");function c(u){const d=u.match(a),f={};if(!d)return null;for(let y=1;y<d.length;y++){const h=d[y]||"",m=r[y-1];f[m.name]=h&&m.repeatable?h.split("/"):h}return f}function i(u){let d="",f=!1;for(const y of t){(!f||!d.endsWith("/"))&&(d+="/"),f=!1;for(const h of y)if(h.type===0)d+=h.value;else if(h.type===1){const{value:m,repeatable:_,optional:A}=h,E=m in u?u[m]:"";if(Rt(E)&&!_)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const C=Rt(E)?E.join("/"):E;if(!C)if(A)y.length<2&&(d.endsWith("/")?d=d.slice(0,-1):f=!0);else throw new Error(`Missing required param "${m}"`);d+=C}}return d||"/"}return{re:a,score:o,keys:r,parse:c,stringify:i}}function M8(t,n){let s=0;for(;s<t.length&&s<n.length;){const o=n[s]-t[s];if(o)return o;s++}return t.length<n.length?t.length===1&&t[0]===40+40?-1:1:t.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function R8(t,n){let s=0;const o=t.score,l=n.score;for(;s<o.length&&s<l.length;){const r=M8(o[s],l[s]);if(r)return r;s++}if(Math.abs(l.length-o.length)===1){if(Nc(o))return 1;if(Nc(l))return-1}return l.length-o.length}function Nc(t){const n=t[t.length-1];return t.length>0&&n[n.length-1]<0}const N8={type:0,value:""},j8=/[a-zA-Z0-9_]/;function q8(t){if(!t)return[[]];if(t==="/")return[[N8]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function n(h){throw new Error(`ERR (${s})/"${u}": ${h}`)}let s=0,o=s;const l=[];let r;function a(){r&&l.push(r),r=[]}let c=0,i,u="",d="";function f(){!u||(s===0?r.push({type:0,value:u}):s===1||s===2||s===3?(r.length>1&&(i==="*"||i==="+")&&n(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):n("Invalid state to consume buffer"),u="")}function y(){u+=i}for(;c<t.length;){if(i=t[c++],i==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:i==="/"?(u&&f(),a()):i===":"?(f(),s=1):y();break;case 4:y(),s=o;break;case 1:i==="("?s=2:j8.test(i)?y():(f(),s=0,i!=="*"&&i!=="?"&&i!=="+"&&c--);break;case 2:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:s=3:d+=i;break;case 3:f(),s=0,i!=="*"&&i!=="?"&&i!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${u}"`),f(),a(),l}function H8(t,n,s){const o=I8(q8(t.path),s),l=ke(o,{record:t,parent:n,children:[],alias:[]});return n&&!l.record.aliasOf==!n.record.aliasOf&&n.children.push(l),l}function V8(t,n){const s=[],o=new Map;n=Hc({strict:!1,end:!0,sensitive:!1},n);function l(d){return o.get(d)}function r(d,f,y){const h=!y,m=Y8(d);m.aliasOf=y&&y.record;const _=Hc(n,d),A=[m];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const k of D)A.push(ke({},m,{components:y?y.record.components:m.components,path:k,aliasOf:y?y.record:m}))}let E,C;for(const D of A){const{path:k}=D;if(f&&k[0]!=="/"){const M=f.record.path,T=M[M.length-1]==="/"?"":"/";D.path=f.record.path+(k&&T+k)}if(E=H8(D,f,_),y?y.alias.push(E):(C=C||E,C!==E&&C.alias.push(E),h&&d.name&&!qc(E)&&a(d.name)),m.children){const M=m.children;for(let T=0;T<M.length;T++)r(M[T],E,y&&y.children[T])}y=y||E,i(E)}return C?()=>{a(C)}:Ls}function a(d){if(Xp(d)){const f=o.get(d);f&&(o.delete(d),s.splice(s.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=s.indexOf(d);f>-1&&(s.splice(f,1),d.record.name&&o.delete(d.record.name),d.children.forEach(a),d.alias.forEach(a))}}function c(){return s}function i(d){let f=0;for(;f<s.length&&R8(d,s[f])>=0&&(d.record.path!==s[f].record.path||!tu(d,s[f]));)f++;s.splice(f,0,d),d.record.name&&!qc(d)&&o.set(d.record.name,d)}function u(d,f){let y,h={},m,_;if("name"in d&&d.name){if(y=o.get(d.name),!y)throw us(1,{location:d});_=y.record.name,h=ke(jc(f.params,y.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&jc(d.params,y.keys.map(C=>C.name))),m=y.stringify(h)}else if("path"in d)m=d.path,y=s.find(C=>C.re.test(m)),y&&(h=y.parse(m),_=y.record.name);else{if(y=f.name?o.get(f.name):s.find(C=>C.re.test(f.path)),!y)throw us(1,{location:d,currentLocation:f});_=y.record.name,h=ke({},f.params,d.params),m=y.stringify(h)}const A=[];let E=y;for(;E;)A.unshift(E.record),E=E.parent;return{name:_,path:m,params:h,matched:A,meta:G8(A)}}return t.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:a,getRoutes:c,getRecordMatcher:l}}function jc(t,n){const s={};for(const o of n)o in t&&(s[o]=t[o]);return s}function Y8(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:z8(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function z8(t){const n={},s=t.props||!1;if("component"in t)n.default=s;else for(const o in t.components)n[o]=typeof s=="boolean"?s:s[o];return n}function qc(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function G8(t){return t.reduce((n,s)=>ke(n,s.meta),{})}function Hc(t,n){const s={};for(const o in t)s[o]=o in n?n[o]:t[o];return s}function tu(t,n){return n.children.some(s=>s===t||tu(t,s))}const nu=/#/g,U8=/&/g,Q8=/\//g,K8=/=/g,W8=/\?/g,su=/\+/g,J8=/%5B/g,Z8=/%5D/g,ou=/%5E/g,X8=/%60/g,lu=/%7B/g,eg=/%7C/g,ru=/%7D/g,tg=/%20/g;function Kr(t){return encodeURI(""+t).replace(eg,"|").replace(J8,"[").replace(Z8,"]")}function ng(t){return Kr(t).replace(lu,"{").replace(ru,"}").replace(ou,"^")}function lr(t){return Kr(t).replace(su,"%2B").replace(tg,"+").replace(nu,"%23").replace(U8,"%26").replace(X8,"`").replace(lu,"{").replace(ru,"}").replace(ou,"^")}function sg(t){return lr(t).replace(K8,"%3D")}function og(t){return Kr(t).replace(nu,"%23").replace(W8,"%3F")}function lg(t){return t==null?"":og(t).replace(Q8,"%2F")}function Io(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function rg(t){const n={};if(t===""||t==="?")return n;const o=(t[0]==="?"?t.slice(1):t).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(su," "),a=r.indexOf("="),c=Io(a<0?r:r.slice(0,a)),i=a<0?null:Io(r.slice(a+1));if(c in n){let u=n[c];Rt(u)||(u=n[c]=[u]),u.push(i)}else n[c]=i}return n}function Vc(t){let n="";for(let s in t){const o=t[s];if(s=sg(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Rt(o)?o.map(r=>r&&lr(r)):[o&&lr(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function ag(t){const n={};for(const s in t){const o=t[s];o!==void 0&&(n[s]=Rt(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return n}const cg=Symbol(""),Yc=Symbol(""),Wr=Symbol(""),au=Symbol(""),rr=Symbol("");function Cs(){let t=[];function n(o){return t.push(o),()=>{const l=t.indexOf(o);l>-1&&t.splice(l,1)}}function s(){t=[]}return{add:n,list:()=>t,reset:s}}function an(t,n,s,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((a,c)=>{const i=f=>{f===!1?c(us(4,{from:s,to:n})):f instanceof Error?c(f):O8(f)?c(us(2,{from:n,to:f})):(r&&o.enterCallbacks[l]===r&&typeof f=="function"&&r.push(f),a())},u=t.call(o&&o.instances[l],n,s,i);let d=Promise.resolve(u);t.length<3&&(d=d.then(i)),d.catch(f=>c(f))})}function Dl(t,n,s,o){const l=[];for(const r of t)for(const a in r.components){let c=r.components[a];if(!(n!=="beforeRouteEnter"&&!r.instances[a]))if(ig(c)){const u=(c.__vccOpts||c)[n];u&&l.push(an(u,s,o,r,a))}else{let i=c();l.push(()=>i.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${r.path}"`));const d=y8(u)?u.default:u;r.components[a]=d;const y=(d.__vccOpts||d)[n];return y&&an(y,s,o,r,a)()}))}}return l}function ig(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function zc(t){const n=O(Wr),s=O(au),o=S(()=>n.resolve(b(t.to))),l=S(()=>{const{matched:i}=o.value,{length:u}=i,d=i[u-1],f=s.matched;if(!d||!f.length)return-1;const y=f.findIndex(ps.bind(null,d));if(y>-1)return y;const h=Gc(i[u-2]);return u>1&&Gc(d)===h&&f[f.length-1].path!==h?f.findIndex(ps.bind(null,i[u-2])):y}),r=S(()=>l.value>-1&&fg(s.params,o.value.params)),a=S(()=>l.value>-1&&l.value===s.matched.length-1&&Jp(s.params,o.value.params));function c(i={}){return dg(i)?n[b(t.replace)?"replace":"push"](b(t.to)).catch(Ls):Promise.resolve()}return{route:o,href:S(()=>o.value.href),isActive:r,isExactActive:a,navigate:c}}const pg=Fe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zc,setup(t,{slots:n}){const s=Me(zc(t)),{options:o}=O(Wr),l=S(()=>({[Uc(t.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[Uc(t.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return t.custom?r:ut("a",{"aria-current":s.isExactActive?t.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:l.value},r)}}}),ug=pg;function dg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const n=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return t.preventDefault&&t.preventDefault(),!0}}function fg(t,n){for(const s in n){const o=n[s],l=t[s];if(typeof o=="string"){if(o!==l)return!1}else if(!Rt(l)||l.length!==o.length||o.some((r,a)=>r!==l[a]))return!1}return!0}function Gc(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Uc=(t,n,s)=>t!=null?t:n!=null?n:s,yg=Fe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:n,slots:s}){const o=O(rr),l=S(()=>t.route||o.value),r=O(Yc,0),a=S(()=>{let u=b(r);const{matched:d}=l.value;let f;for(;(f=d[u])&&!f.components;)u++;return u}),c=S(()=>l.value.matched[a.value]);gt(Yc,S(()=>a.value+1)),gt(cg,c),gt(rr,l);const i=G();return ue(()=>[i.value,c.value,t.name],([u,d,f],[y,h,m])=>{d&&(d.instances[f]=u,h&&h!==d&&u&&u===y&&(d.leaveGuards.size||(d.leaveGuards=h.leaveGuards),d.updateGuards.size||(d.updateGuards=h.updateGuards))),u&&d&&(!h||!ps(d,h)||!y)&&(d.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=l.value,d=t.name,f=c.value,y=f&&f.components[d];if(!y)return Qc(s.default,{Component:y,route:u});const h=f.props[d],m=h?h===!0?u.params:typeof h=="function"?h(u):h:null,A=ut(y,ke({},m,n,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(f.instances[d]=null)},ref:i}));return Qc(s.default,{Component:A,route:u})||A}}});function Qc(t,n){if(!t)return null;const s=t(n);return s.length===1?s[0]:s}const hg=yg;function mg(t){const n=V8(t.routes,t),s=t.parseQuery||rg,o=t.stringifyQuery||Vc,l=t.history,r=Cs(),a=Cs(),c=Cs(),i=Lt(ln);let u=ln;Wn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Bl.bind(null,F=>""+F),f=Bl.bind(null,lg),y=Bl.bind(null,Io);function h(F,U){let z,J;return Xp(F)?(z=n.getRecordMatcher(F),J=U):J=F,n.addRoute(J,z)}function m(F){const U=n.getRecordMatcher(F);U&&n.removeRoute(U)}function _(){return n.getRoutes().map(F=>F.record)}function A(F){return!!n.getRecordMatcher(F)}function E(F,U){if(U=ke({},U||i.value),typeof F=="string"){const g=bl(s,F,U.path),v=n.resolve({path:g.path},U),x=l.createHref(g.fullPath);return ke(g,v,{params:y(v.params),hash:Io(g.hash),redirectedFrom:void 0,href:x})}let z;if("path"in F)z=ke({},F,{path:bl(s,F.path,U.path).path});else{const g=ke({},F.params);for(const v in g)g[v]==null&&delete g[v];z=ke({},F,{params:f(F.params)}),U.params=f(U.params)}const J=n.resolve(z,U),ye=F.hash||"";J.params=d(y(J.params));const Ae=g8(o,ke({},F,{hash:ng(ye),path:J.path})),re=l.createHref(Ae);return ke({fullPath:Ae,hash:ye,query:o===Vc?ag(F.query):F.query||{}},J,{redirectedFrom:void 0,href:re})}function C(F){return typeof F=="string"?bl(s,F,i.value.path):ke({},F)}function D(F,U){if(u!==F)return us(8,{from:U,to:F})}function k(F){return N(F)}function M(F){return k(ke(C(F),{replace:!0}))}function T(F){const U=F.matched[F.matched.length-1];if(U&&U.redirect){const{redirect:z}=U;let J=typeof z=="function"?z(F):z;return typeof J=="string"&&(J=J.includes("?")||J.includes("#")?J=C(J):{path:J},J.params={}),ke({query:F.query,hash:F.hash,params:"path"in J?{}:F.params},J)}}function N(F,U){const z=u=E(F),J=i.value,ye=F.state,Ae=F.force,re=F.replace===!0,g=T(z);if(g)return N(ke(C(g),{state:typeof g=="object"?ke({},ye,g.state):ye,force:Ae,replace:re}),U||z);const v=z;v.redirectedFrom=U;let x;return!Ae&&v8(o,J,z)&&(x=us(16,{to:v,from:J}),we(J,J,!0,!1)),(x?Promise.resolve(x):pe(v,J)).catch(w=>Qt(w)?Qt(w,2)?w:fe(w):K(w,v,J)).then(w=>{if(w){if(Qt(w,2))return N(ke({replace:re},C(w.to),{state:typeof w.to=="object"?ke({},ye,w.to.state):ye,force:Ae}),U||v)}else w=_e(v,J,!0,re,ye);return de(v,J,w),w})}function Z(F,U){const z=D(F,U);return z?Promise.reject(z):Promise.resolve()}function pe(F,U){let z;const[J,ye,Ae]=gg(F,U);z=Dl(J.reverse(),"beforeRouteLeave",F,U);for(const g of J)g.leaveGuards.forEach(v=>{z.push(an(v,F,U))});const re=Z.bind(null,F,U);return z.push(re),zn(z).then(()=>{z=[];for(const g of r.list())z.push(an(g,F,U));return z.push(re),zn(z)}).then(()=>{z=Dl(ye,"beforeRouteUpdate",F,U);for(const g of ye)g.updateGuards.forEach(v=>{z.push(an(v,F,U))});return z.push(re),zn(z)}).then(()=>{z=[];for(const g of F.matched)if(g.beforeEnter&&!U.matched.includes(g))if(Rt(g.beforeEnter))for(const v of g.beforeEnter)z.push(an(v,F,U));else z.push(an(g.beforeEnter,F,U));return z.push(re),zn(z)}).then(()=>(F.matched.forEach(g=>g.enterCallbacks={}),z=Dl(Ae,"beforeRouteEnter",F,U),z.push(re),zn(z))).then(()=>{z=[];for(const g of a.list())z.push(an(g,F,U));return z.push(re),zn(z)}).catch(g=>Qt(g,8)?g:Promise.reject(g))}function de(F,U,z){for(const J of c.list())J(F,U,z)}function _e(F,U,z,J,ye){const Ae=D(F,U);if(Ae)return Ae;const re=U===ln,g=Wn?history.state:{};z&&(J||re?l.replace(F.fullPath,ke({scroll:re&&g&&g.scroll},ye)):l.push(F.fullPath,ye)),i.value=F,we(F,U,z,re),fe()}let Ke;function Ye(){Ke||(Ke=l.listen((F,U,z)=>{if(!Vn.listening)return;const J=E(F),ye=T(J);if(ye){N(ke(ye,{replace:!0}),J).catch(Ls);return}u=J;const Ae=i.value;Wn&&x8(Lc(Ae.fullPath,z.delta),ol()),pe(J,Ae).catch(re=>Qt(re,12)?re:Qt(re,2)?(N(re.to,J).then(g=>{Qt(g,20)&&!z.delta&&z.type===Ks.pop&&l.go(-1,!1)}).catch(Ls),Promise.reject()):(z.delta&&l.go(-z.delta,!1),K(re,J,Ae))).then(re=>{re=re||_e(J,Ae,!1),re&&(z.delta&&!Qt(re,8)?l.go(-z.delta,!1):z.type===Ks.pop&&Qt(re,20)&&l.go(-1,!1)),de(J,Ae,re)}).catch(Ls)}))}let Ne=Cs(),Le=Cs(),Ie;function K(F,U,z){fe(F);const J=Le.list();return J.length?J.forEach(ye=>ye(F,U,z)):console.error(F),Promise.reject(F)}function se(){return Ie&&i.value!==ln?Promise.resolve():new Promise((F,U)=>{Ne.add([F,U])})}function fe(F){return Ie||(Ie=!F,Ye(),Ne.list().forEach(([U,z])=>F?z(F):U()),Ne.reset()),F}function we(F,U,z,J){const{scrollBehavior:ye}=t;if(!Wn||!ye)return Promise.resolve();const Ae=!z&&w8(Lc(F.fullPath,0))||(J||!z)&&history.state&&history.state.scroll||null;return rt().then(()=>ye(F,U,Ae)).then(re=>re&&E8(re)).catch(re=>K(re,F,U))}const nt=F=>l.go(F);let He;const sn=new Set,Vn={currentRoute:i,listening:!0,addRoute:h,removeRoute:m,hasRoute:A,getRoutes:_,resolve:E,options:t,push:k,replace:M,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:r.add,beforeResolve:a.add,afterEach:c.add,onError:Le.add,isReady:se,install(F){const U=this;F.component("RouterLink",ug),F.component("RouterView",hg),F.config.globalProperties.$router=U,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>b(i)}),Wn&&!He&&i.value===ln&&(He=!0,k(l.location).catch(ye=>{}));const z={};for(const ye in ln)z[ye]=S(()=>i.value[ye]);F.provide(Wr,U),F.provide(au,Me(z)),F.provide(rr,i);const J=F.unmount;sn.add(F),F.unmount=function(){sn.delete(F),sn.size<1&&(u=ln,Ke&&Ke(),Ke=null,i.value=ln,He=!1,Ie=!1),J()}}};return Vn}function zn(t){return t.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function gg(t,n){const s=[],o=[],l=[],r=Math.max(n.matched.length,t.matched.length);for(let a=0;a<r;a++){const c=n.matched[a];c&&(t.matched.find(u=>ps(u,c))?o.push(c):s.push(c));const i=t.matched[a];i&&(n.matched.find(u=>ps(u,i))||l.push(i))}return[s,o,l]}const Cl=G(!1),Ms=G(!1),Zn=G(!1),vg=G(!0),ar=Sm({xs:460,...Cm}),Ln=f8(),cu=n8(),_g=S(()=>Ln.height.value-Ln.width.value/dn>180),iu=Xm(Mt?document.body:null),ls=Dm(),Ag=S(()=>{var t,n;return["INPUT","TEXTAREA"].includes(((t=ls.value)==null?void 0:t.tagName)||"")||((n=ls.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),Bg=S(()=>{var t;return["BUTTON","A"].includes(((t=ls.value)==null?void 0:t.tagName)||"")});Nt("slidev-camera","default");Nt("slidev-mic","default");const bo=Nt("slidev-scale",0),ot=Nt("slidev-show-overview",!1),El=Nt("slidev-presenter-cursor",!0),Kc=Nt("slidev-show-editor",!1);Nt("slidev-editor-width",Mt?window.innerWidth*.4:100);const pu=Qp(ot);function Wc(t,n,s,o=l=>l){return t*o(.5-n*(.5-s))}function bg(t){return[-t[0],-t[1]]}function kt(t,n){return[t[0]+n[0],t[1]+n[1]]}function Dt(t,n){return[t[0]-n[0],t[1]-n[1]]}function wt(t,n){return[t[0]*n,t[1]*n]}function Dg(t,n){return[t[0]/n,t[1]/n]}function Es(t){return[t[1],-t[0]]}function Jc(t,n){return t[0]*n[0]+t[1]*n[1]}function Cg(t,n){return t[0]===n[0]&&t[1]===n[1]}function Eg(t){return Math.hypot(t[0],t[1])}function xg(t){return t[0]*t[0]+t[1]*t[1]}function Zc(t,n){return xg(Dt(t,n))}function uu(t){return Dg(t,Eg(t))}function wg(t,n){return Math.hypot(t[1]-n[1],t[0]-n[0])}function xs(t,n,s){let o=Math.sin(s),l=Math.cos(s),r=t[0]-n[0],a=t[1]-n[1],c=r*l-a*o,i=r*o+a*l;return[c+n[0],i+n[1]]}function cr(t,n,s){return kt(t,wt(Dt(n,t),s))}function Xc(t,n,s){return kt(t,wt(n,s))}var{min:Gn,PI:kg}=Math,ei=.275,ws=kg+1e-4;function Sg(t,n={}){let{size:s=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:a=K=>K,start:c={},end:i={},last:u=!1}=n,{cap:d=!0,easing:f=K=>K*(2-K)}=c,{cap:y=!0,easing:h=K=>--K*K*K+1}=i;if(t.length===0||s<=0)return[];let m=t[t.length-1].runningLength,_=c.taper===!1?0:c.taper===!0?Math.max(s,m):c.taper,A=i.taper===!1?0:i.taper===!0?Math.max(s,m):i.taper,E=Math.pow(s*o,2),C=[],D=[],k=t.slice(0,10).reduce((K,se)=>{let fe=se.pressure;if(r){let we=Gn(1,se.distance/s),nt=Gn(1,1-we);fe=Gn(1,K+(nt-K)*(we*ei))}return(K+fe)/2},t[0].pressure),M=Wc(s,l,t[t.length-1].pressure,a),T,N=t[0].vector,Z=t[0].point,pe=Z,de=Z,_e=pe,Ke=!1;for(let K=0;K<t.length;K++){let{pressure:se}=t[K],{point:fe,vector:we,distance:nt,runningLength:He}=t[K];if(K<t.length-1&&m-He<3)continue;if(l){if(r){let Ae=Gn(1,nt/s),re=Gn(1,1-Ae);se=Gn(1,k+(re-k)*(Ae*ei))}M=Wc(s,l,se,a)}else M=s/2;T===void 0&&(T=M);let sn=He<_?f(He/_):1,Vn=m-He<A?h((m-He)/A):1;M=Math.max(.01,M*Math.min(sn,Vn));let F=(K<t.length-1?t[K+1]:t[K]).vector,U=K<t.length-1?Jc(we,F):1,z=Jc(we,N)<0&&!Ke,J=U!==null&&U<0;if(z||J){let Ae=wt(Es(N),M);for(let re=1/13,g=0;g<=1;g+=re)de=xs(Dt(fe,Ae),fe,ws*g),C.push(de),_e=xs(kt(fe,Ae),fe,ws*-g),D.push(_e);Z=de,pe=_e,J&&(Ke=!0);continue}if(Ke=!1,K===t.length-1){let Ae=wt(Es(we),M);C.push(Dt(fe,Ae)),D.push(kt(fe,Ae));continue}let ye=wt(Es(cr(F,we,U)),M);de=Dt(fe,ye),(K<=1||Zc(Z,de)>E)&&(C.push(de),Z=de),_e=kt(fe,ye),(K<=1||Zc(pe,_e)>E)&&(D.push(_e),pe=_e),k=se,N=we}let Ye=t[0].point.slice(0,2),Ne=t.length>1?t[t.length-1].point.slice(0,2):kt(t[0].point,[1,1]),Le=[],Ie=[];if(t.length===1){if(!(_||A)||u){let K=Xc(Ye,uu(Es(Dt(Ye,Ne))),-(T||M)),se=[];for(let fe=1/13,we=fe;we<=1;we+=fe)se.push(xs(K,Ye,ws*2*we));return se}}else{if(!(_||A&&t.length===1))if(d)for(let se=1/13,fe=se;fe<=1;fe+=se){let we=xs(D[0],Ye,ws*fe);Le.push(we)}else{let se=Dt(C[0],D[0]),fe=wt(se,.5),we=wt(se,.51);Le.push(Dt(Ye,fe),Dt(Ye,we),kt(Ye,we),kt(Ye,fe))}let K=Es(bg(t[t.length-1].vector));if(A||_&&t.length===1)Ie.push(Ne);else if(y){let se=Xc(Ne,K,M);for(let fe=1/29,we=fe;we<1;we+=fe)Ie.push(xs(se,Ne,ws*3*we))}else Ie.push(kt(Ne,wt(K,M)),kt(Ne,wt(K,M*.99)),Dt(Ne,wt(K,M*.99)),Dt(Ne,wt(K,M)))}return C.concat(Ie,D.reverse(),Le)}function Fg(t,n={}){var s;let{streamline:o=.5,size:l=16,last:r=!1}=n;if(t.length===0)return[];let a=.15+(1-o)*.85,c=Array.isArray(t[0])?t:t.map(({x:h,y:m,pressure:_=.5})=>[h,m,_]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let m=1;m<5;m++)c.push(cr(c[0],h,m/4))}c.length===1&&(c=[...c,[...kt(c[0],[1,1]),...c[0].slice(2)]]);let i=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,f=i[0],y=c.length-1;for(let h=1;h<c.length;h++){let m=r&&h===y?c[h].slice(0,2):cr(f.point,c[h],a);if(Cg(f.point,m))continue;let _=wg(m,f.point);if(d+=_,h<y&&!u){if(d<l)continue;u=!0}f={point:m,pressure:c[h][2]>=0?c[h][2]:.5,vector:uu(Dt(f.point,m)),distance:_,runningLength:d},i.push(f)}return i[0].vector=((s=i[1])==null?void 0:s.vector)||[0,0],i}function $g(t,n={}){return Sg(Fg(t,n),n)}var Pg=()=>({events:{},emit(t,...n){let s=this.events[t]||[];for(let o=0,l=s.length;o<l;o++)s[o](...n)},on(t,n){var s;return(s=this.events[t])!=null&&s.push(n)||(this.events[t]=[n]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(l=>n!==l)}}});function Mo(t,n){return t-n}function Og(t){return t<0?-1:1}function Ro(t){return[Math.abs(t),Og(t)]}function du(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var Tg=2,Jt=Tg,vs=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var l;var n;const s=this.drauu.el,o=(l=this.drauu.options.coordinateScale)!=null?l:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-r.left)*o,y:(t.pageY-r.top)*o,pressure:t.pressure}}else{const r=this.drauu.svgPoint;r.x=t.clientX,r.y=t.clientY;const a=r.matrixTransform((n=s.getScreenCTM())==null?void 0:n.inverse());return{x:a.x*o,y:a.y*o,pressure:t.pressure}}}createElement(t,n){var l;const s=document.createElementNS("http://www.w3.org/2000/svg",t),o=n?{...this.brush,...n}:this.brush;return s.setAttribute("fill",(l=o.fill)!=null?l:"transparent"),s.setAttribute("stroke",o.color),s.setAttribute("stroke-width",o.size.toString()),s.setAttribute("stroke-linecap","round"),o.dasharray&&s.setAttribute("stroke-dasharray",o.dasharray),s}attr(t,n){this.el.setAttribute(t,typeof n=="string"?n:n.toFixed(Jt))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Lg=class extends vs{constructor(){super(...arguments),this.points=[]}onStart(t){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[t],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&this.points.push(t),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!!t}getSvgData(t){const n=$g(t,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!n.length)return"";const s=n.reduce((o,[l,r],a,c)=>{const[i,u]=c[(a+1)%c.length];return o.push(l,r,(l+i)/2,(r+u)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},Ig=class extends vs{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Ro(t.x-this.start.x),[o,l]=Ro(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Mo),[c,i]=[this.start.y,this.start.y+o*l].sort(Mo);this.attr("cx",(r+a)/2),this.attr("cy",(c+i)/2),this.attr("rx",(a-r)/2),this.attr("ry",(i-c)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function fu(t,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",n),o.setAttribute("id",t),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),s.appendChild(o),s}var Mg=class extends vs{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const n=du(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(fu(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:n,y:s}=t;if(this.shiftPressed){const o=t.x-this.start.x,l=t.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+l*r,s=this.start.y+l):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Rg=class extends vs{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[n,s]=Ro(t.x-this.start.x),[o,l]=Ro(t.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,a]=[this.start.x,this.start.x+n*s].sort(Mo),[c,i]=[this.start.y,this.start.y+o*l].sort(Mo);this.attr("x",r),this.attr("y",c),this.attr("width",a-r),this.attr("height",i-c)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ng(t,n){const s=t.x-n.x,o=t.y-n.y;return s*s+o*o}function jg(t,n,s){let o=n.x,l=n.y,r=s.x-o,a=s.y-l;if(r!==0||a!==0){const c=((t.x-o)*r+(t.y-l)*a)/(r*r+a*a);c>1?(o=s.x,l=s.y):c>0&&(o+=r*c,l+=a*c)}return r=t.x-o,a=t.y-l,r*r+a*a}function qg(t,n){let s=t[0];const o=[s];let l;for(let r=1,a=t.length;r<a;r++)l=t[r],Ng(l,s)>n&&(o.push(l),s=l);return s!==l&&l&&o.push(l),o}function ir(t,n,s,o,l){let r=o,a=0;for(let c=n+1;c<s;c++){const i=jg(t[c],t[n],t[s]);i>r&&(a=c,r=i)}r>o&&(a-n>1&&ir(t,n,a,o,l),l.push(t[a]),s-a>1&&ir(t,a,s,o,l))}function Hg(t,n){const s=t.length-1,o=[t[0]];return ir(t,0,s,n,o),o.push(t[s]),o}function ti(t,n,s=!1){if(t.length<=2)return t;const o=n!==void 0?n*n:1;return t=s?t:qg(t,o),t=Hg(t,o),t}var Vg=class extends vs{constructor(){super(...arguments),this.points=[],this.count=0}onStart(t){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[t],this.brush.arrowEnd){this.arrowId=du();const n=fu(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(t){return this.el||this.onStart(t),this.points[this.points.length-1]!==t&&(this.points.push(t),this.count+=1),this.count>5&&(this.points=ti(this.points,1,!0),this.count=0),this.attr("d",si(this.points)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||(t.setAttribute("d",si(ti(this.points,1,!0))),!t.getTotalLength()))}};function Yg(t,n){const s=n.x-t.x,o=n.y-t.y;return{length:Math.sqrt(s**2+o**2),angle:Math.atan2(o,s)}}function ni(t,n,s,o){const l=n||t,r=s||t,a=.2,c=Yg(l,r),i=c.angle+(o?Math.PI:0),u=c.length*a,d=t.x+Math.cos(i)*u,f=t.y+Math.sin(i)*u;return{x:d,y:f}}function zg(t,n,s){const o=ni(s[n-1],s[n-2],t),l=ni(t,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(Jt)},${o.y.toFixed(Jt)} ${l.x.toFixed(Jt)},${l.y.toFixed(Jt)} ${t.x.toFixed(Jt)},${t.y.toFixed(Jt)}`}function si(t){return t.reduce((n,s,o,l)=>o===0?`M ${s.x.toFixed(Jt)},${s.y.toFixed(Jt)}`:`${n} ${zg(s,o,l)}`,"")}var Gg=class extends vs{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(t){const n=(s,o)=>{if(s&&s.length)for(let l=0;l<s.length;l++){const r=s[l];if(r.getTotalLength){const a=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const i=r.getPointAtLength(a*c/this.pathSubFactor),u=r.getPointAtLength(a*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:i.x,x2:u.x,y1:i.y,y2:u.y,segment:c,element:o||r})}}else r.children&&n(r.children,r)}};t&&n(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const t=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),t.push(n))}return t.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!t.includes(s))),t.length>0}lineLineIntersect(t,n){const s=t.x1,o=t.x2,l=n.x1,r=n.x2,a=t.y1,c=t.y2,i=n.y1,u=n.y2,d=(s-o)*(i-u)-(a-c)*(l-r),f=(s*c-a*o)*(l-r)-(s-o)*(l*u-i*r),y=(s*c-a*o)*(i-u)-(a-c)*(l*u-i*r),h=(m,_,A)=>m>=_&&m<=A?!0:m>=A&&m<=_;if(d===0)return!1;{const m={x:f/d,y:y/d};return h(m.x,s,o)&&h(m.y,a,c)&&h(m.x,l,r)&&h(m.y,i,u)}}};function Ug(t){return{draw:new Vg(t),stylus:new Lg(t),line:new Mg(t),rectangle:new Rg(t),ellipse:new Ig(t),eraseLine:new Gg(t)}}var Qg=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Pg(),this._models=Ug(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",a,!1),window.addEventListener("keyup",a,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",a,!1),window.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,n){return this._emitter.on(t,n)}undo(){const t=this.el;return t.lastElementChild?(this._undoStack.push(t.lastElementChild.cloneNode(!0)),t.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var t;return!!((t=this.el)!=null&&t.lastElementChild)}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){!this.acceptsInput(t)||(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const n=this.model._eventUp(t);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(t){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const t=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",t)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}};function Kg(t){return new Qg(t)}const pr=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],zt=Nt("slidev-drawing-enabled",!1),a6=Nt("slidev-drawing-pinned",!1),Wg=G(!1),Jg=G(!1),Zg=G(!1),Ws=G(!1),Sn=Kh(Nt("slidev-drawing-brush",{color:pr[0],size:4,mode:"stylus"})),oi=G("stylus"),yu=S(()=>be.drawings.syncAll||Vt.value);let Js=!1;const ks=S({get(){return oi.value},set(t){oi.value=t,t==="arrow"?(Sn.mode="line",Sn.arrowEnd=!0):(Sn.mode=t,Sn.arrowEnd=!1)}}),Xg=Me({brush:Sn,acceptsInputTypes:S(()=>zt.value?void 0:["pen"]),coordinateTransform:!1}),at=Ko(Kg(Xg));function ev(){at.clear(),yu.value&&Vp(Ue.value,"")}function hu(){var t;Jg.value=at.canRedo(),Wg.value=at.canUndo(),Zg.value=!!((t=at.el)!=null&&t.children.length)}function tv(t){Js=!0;const n=Oo[t||Ue.value];n!=null?at.load(n):at.clear(),Js=!1}at.on("changed",()=>{if(hu(),!Js){const t=at.dump(),n=Ue.value;(Oo[n]||"")!==t&&yu.value&&Vp(n,at.dump())}});Rh(t=>{Js=!0,t[Ue.value]!=null&&at.load(t[Ue.value]||""),Js=!1,hu()});rt(()=>{ue(Ue,()=>{!at.mounted||tv()},{immediate:!0})});at.on("start",()=>Ws.value=!0);at.on("end",()=>Ws.value=!1);window.addEventListener("keydown",t=>{if(!zt.value)return;const n=!t.ctrlKey&&!t.altKey&&!t.shiftKey&&!t.metaKey;let s=!0;t.code==="KeyZ"&&(t.ctrlKey||t.metaKey)?t.shiftKey?at.redo():at.undo():t.code==="Escape"?zt.value=!1:t.code==="KeyL"&&n?ks.value="line":t.code==="KeyA"&&n?ks.value="arrow":t.code==="KeyS"&&n?ks.value="stylus":t.code==="KeyR"&&n?ks.value="rectangle":t.code==="KeyE"&&n?ks.value="ellipse":t.code==="KeyC"&&n?ev():t.code.startsWith("Digit")&&n&&+t.code[5]<=pr.length?Sn.color=pr[+t.code[5]-1]:s=!1,s&&(t.preventDefault(),t.stopPropagation())},!1);function ze(...t){return S(()=>t.every(n=>lt(n)))}function yt(t){return S(()=>!lt(t))}const li=Nm(),xl=Nt("slidev-color-schema","auto"),ur=S(()=>be.colorSchema!=="auto"),Jr=S({get(){return ur.value?be.colorSchema==="dark":xl.value==="auto"?li.value:xl.value==="dark"},set(t){ur.value||(xl.value=t===li.value?"auto":t?"dark":"light")}}),mu=Qp(Jr);Mt&&ue(Jr,t=>{const n=document.querySelector("html");n.classList.toggle("dark",t),n.classList.toggle("light",!t)},{immediate:!0});const Do=G(1),Co=S(()=>Ge.length-1),_t=G(0),Zr=G(0);function nv(){_t.value>Do.value&&(_t.value-=1)}function sv(){_t.value<Co.value&&(_t.value+=1)}function ov(){if(_t.value>Do.value){let t=_t.value-Zr.value;t<Do.value&&(t=Do.value),_t.value=t}}function lv(){if(_t.value<Co.value){let t=_t.value+Zr.value;t>Co.value&&(t=Co.value),_t.value=t}}function rv(){const{escape:t,space:n,shift:s,left:o,right:l,up:r,down:a,enter:c,d:i,g:u,o:d}=cu;let f=[{name:"next_space",key:ze(n,yt(s)),fn,autoRepeat:!0},{name:"prev_space",key:ze(n,s),fn:yn,autoRepeat:!0},{name:"next_right",key:ze(l,yt(s),yt(ot)),fn,autoRepeat:!0},{name:"prev_left",key:ze(o,yt(s),yt(ot)),fn:yn,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:yn,autoRepeat:!0},{name:"next_down",key:ze(a,yt(ot)),fn:Xs,autoRepeat:!0},{name:"prev_up",key:ze(r,yt(ot)),fn:()=>eo(!1),autoRepeat:!0},{name:"next_shift",key:ze(l,s),fn:Xs,autoRepeat:!0},{name:"prev_shift",key:ze(o,s),fn:()=>eo(!1),autoRepeat:!0},{name:"toggle_dark",key:ze(i,yt(zt)),fn:mu},{name:"toggle_overview",key:ze(d,yt(zt)),fn:pu},{name:"hide_overview",key:ze(t,yt(zt)),fn:()=>ot.value=!1},{name:"goto",key:ze(u,yt(zt)),fn:()=>Zn.value=!Zn.value},{name:"next_overview",key:ze(l,ot),fn:sv},{name:"prev_overview",key:ze(o,ot),fn:nv},{name:"up_overview",key:ze(r,ot),fn:ov},{name:"down_overview",key:ze(a,ot),fn:lv},{name:"goto_from_overview",key:ze(c,ot),fn:()=>{ds(_t.value),ot.value=!1}}];const y=new Set(f.map(m=>m.name));if(f.filter(m=>m.name&&y.has(m.name)).length===0){const m=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(m),console.warn(m)}return f}const gu=ze(yt(Ag),yt(Bg),vg);function av(t,n,s=!1){typeof t=="string"&&(t=cu[t]);const o=ze(t,gu);let l=0,r;const a=()=>{if(clearTimeout(r),!o.value){l=0;return}s&&(r=setTimeout(a,Math.max(1e3-l*250,150)),l++),n()};return ue(o,a,{flush:"sync"})}function cv(t,n){return bm(t,s=>{!gu.value||s.repeat||n()})}function iv(){const t=rv();new Map(t.map(s=>[s.key,s])).forEach(s=>{s.fn&&av(s.key,s.fn,s.autoRepeat)}),cv("f",()=>iu.toggle())}const pv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},uv=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),dv=[uv];function fv(t,n){return B(),H("svg",pv,dv)}const yv={name:"carbon-close",render:fv};function Xr(t){var s,o;const n=(o=(s=t==null?void 0:t.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const vu=Fe({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(t){const n=t;O(Y);const s=G(),o=Zm(s),l=S(()=>n.width?n.width:o.width.value),r=S(()=>n.width?n.width/dn:o.height.value);n.width&&hs(()=>{s.value&&(s.value.style.width=`${l.value}px`,s.value.style.height=`${r.value}px`)});const a=S(()=>l.value/r.value),c=S(()=>n.scale?n.scale:a.value<dn?l.value/On:r.value*dn/On),i=S(()=>({height:`${jp}px`,width:`${On}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=S(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return gt(Np,c),(d,f)=>(B(),H("div",{id:"slide-container",ref_key:"root",ref:s,class:je(b(u))},[e("div",{id:"slide-content",style:ct(b(i))},[It(d.$slots,"default")],4),It(d.$slots,"controls")],2))}});const ea=Fe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(t,{emit:n}){const s=Yt(t,"clicks",n),o=Yt(t,"clicksElements",n),l=Yt(t,"clicksDisabled",n),r=Yt(t,"clicksOrderMap",n);o.value.length=0,gt(Ch,t.route),gt(Eh,t.context),gt(Os,s),gt(Ts,l),gt(En,o),gt(Zl,r)},render(){var t,n;return this.$props.is?ut(this.$props.is):(n=(t=this.$slots)==null?void 0:t.default)==null?void 0:n.call(t)}}),hv=["innerHTML"],mv=Fe({__name:"DrawingPreview",props:{page:null},setup(t){return O(Y),(n,s)=>b(Oo)[t.page]?(B(),H("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:b(Oo)[t.page]},null,8,hv)):me("v-if",!0)}}),gv={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},vv=["onClick"],_v=Fe({__name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(t,{emit:n}){const s=t;O(Y);const o=Yt(s,"modelValue",n);function l(){o.value=!1}function r(h){ds(h),l()}function a(h){return h===_t.value}const c=ar.smaller("xs"),i=ar.smaller("sm"),u=4*16*2,d=2*16,f=S(()=>c.value?Ln.width.value-u:i.value?(Ln.width.value-u-d)/2:300),y=S(()=>Math.floor((Ln.width.value-u)/(f.value+d)));return hs(()=>{_t.value=Ue.value,Zr.value=y.value}),(h,m)=>{const _=yv;return B(),H(Se,null,[vt(e("div",gv,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:ct(`grid-template-columns: repeat(auto-fit,minmax(${b(f)}px,1fr))`)},[(B(!0),H(Se,null,so(b(Ge).slice(0,-1),(A,E)=>(B(),H("div",{key:A.path,class:"relative"},[e("div",{class:je(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":a(E+1)}]),onClick:C=>r(+A.path)},[(B(),V(vu,{key:A.path,width:b(f),"clicks-disabled":!0,class:"pointer-events-none"},{default:I(()=>[q(b(ea),{is:A==null?void 0:A.component,"clicks-disabled":!0,class:je(b(Xr)(A)),route:A,context:"overview"},null,8,["is","class","route"]),q(mv,{page:+A.path},null,8,["page"])]),_:2},1032,["width"]))],10,vv),e("div",{class:"absolute top-0 opacity-50",style:ct(`left: ${b(f)+5}px`)},In(E+1),5)]))),128))],4)],512),[[Ip,b(o)]]),b(o)?(B(),H("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:l},[q(_)])):me("v-if",!0)],64)}}});const Av="/yoga-migration-talk/main/assets/logo.b72bde5d.png",Bv={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},bv=Fe({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(t,{emit:n}){const s=t;O(Y);const o=Yt(s,"modelValue",n);function l(){o.value=!1}return(r,a)=>(B(),V(vp,null,[b(o)?(B(),H("div",Bv,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:a[0]||(a[0]=c=>l())}),e("div",{class:je(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[It(r.$slots,"default")],2)])):me("v-if",!0)],1024))}}),Dv={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},Cv=["innerHTML"],Ev=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Av,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),p("dev ")])])],-1),xv=Fe({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(t,{emit:n}){const s=t;O(Y);const o=Yt(s,"modelValue",n),l=S(()=>typeof be.info=="string");return(r,a)=>(B(),V(bv,{modelValue:b(o),"onUpdate:modelValue":a[0]||(a[0]=c=>xe(o)?o.value=c:null),class:"px-6 py-4"},{default:I(()=>[e("div",Dv,[b(l)?(B(),H("div",{key:0,class:"mb-4",innerHTML:b(be).info},null,8,Cv)):me("v-if",!0),Ev])]),_:1},8,["modelValue"]))}});const wv=["disabled","onKeydown"],kv=Fe({__name:"Goto",setup(t){O(Y);const n=G(),s=G(""),o=S(()=>{if(s.value.startsWith("/"))return!!Ge.find(a=>a.path===s.value.substring(1));{const a=+s.value;return!isNaN(a)&&a>0&&a<=Ju.value}});function l(){o.value&&(s.value.startsWith("/")?ds(s.value.substring(1)):ds(+s.value)),r()}function r(){Zn.value=!1}return ue(Zn,async a=>{var c,i;a?(await rt(),s.value="",(c=n.value)==null||c.focus()):(i=n.value)==null||i.blur()}),ue(s,a=>{a.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(a,c)=>(B(),H("div",{id:"slidev-goto-dialog",class:je(["fixed right-5 bg-main transform transition-all",b(Zn)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[vt(e("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=i=>s.value=i),type:"text",disabled:!b(Zn),class:je(["outline-none bg-transparent",{"text-red-400":!b(o)&&s.value}]),placeholder:"Goto...",onKeydown:[cc(l,["enter"]),cc(r,["escape"])],onBlur:r},null,42,wv),[[ah,s.value]])],2))}}),Sv=Fe({__name:"Controls",setup(t){O(Y);const n=Lt(),s=Lt();return(o,l)=>(B(),H(Se,null,[q(_v,{modelValue:b(ot),"onUpdate:modelValue":l[0]||(l[0]=r=>xe(ot)?ot.value=r:null)},null,8,["modelValue"]),q(kv),b(n)?(B(),V(b(n),{key:0})):me("v-if",!0),b(s)?(B(),V(b(s),{key:1,modelValue:b(Cl),"onUpdate:modelValue":l[1]||(l[1]=r=>xe(Cl)?Cl.value=r:null)},null,8,["modelValue"])):me("v-if",!0),b(be).info?(B(),V(xv,{key:2,modelValue:b(Ms),"onUpdate:modelValue":l[2]||(l[2]=r=>xe(Ms)?Ms.value=r:null)},null,8,["modelValue"])):me("v-if",!0)],64))}}),Fv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$v=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),Pv=[$v];function Ov(t,n){return B(),H("svg",Fv,Pv)}const Tv={name:"carbon-settings-adjust",render:Ov},Lv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Iv=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Mv=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Rv=[Iv,Mv];function Nv(t,n){return B(),H("svg",Lv,Rv)}const jv={name:"carbon-information",render:Nv},qv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Hv=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Vv=[Hv];function Yv(t,n){return B(),H("svg",qv,Vv)}const zv={name:"carbon-download",render:Yv},Gv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Uv=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Qv=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Kv=[Uv,Qv];function Wv(t,n){return B(),H("svg",Gv,Kv)}const Jv={name:"carbon-user-speaker",render:Wv},Zv={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Xv=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),e_=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),t_=[Xv,e_];function n_(t,n){return B(),H("svg",Zv,t_)}const s_={name:"carbon-presentation-file",render:n_},o_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},l_=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),r_=[l_];function a_(t,n){return B(),H("svg",o_,r_)}const c_={name:"carbon-pen",render:a_},i_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},p_=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),u_=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),d_=[p_,u_];function f_(t,n){return B(),H("svg",i_,d_)}const y_={name:"ph-cursor-duotone",render:f_},h_={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},m_=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),g_=[m_];function v_(t,n){return B(),H("svg",h_,g_)}const _u={name:"ph-cursor-fill",render:v_},__={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},A_=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),B_=[A_];function b_(t,n){return B(),H("svg",__,B_)}const D_={name:"carbon-sun",render:b_},C_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E_=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),x_=[E_];function w_(t,n){return B(),H("svg",C_,x_)}const k_={name:"carbon-moon",render:w_},S_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F_=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),$_=[F_];function P_(t,n){return B(),H("svg",S_,$_)}const O_={name:"carbon-apps",render:P_},T_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L_=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),I_=[L_];function M_(t,n){return B(),H("svg",T_,I_)}const R_={name:"carbon-arrow-right",render:M_},N_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},j_=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),q_=[j_];function H_(t,n){return B(),H("svg",N_,q_)}const V_={name:"carbon-arrow-left",render:H_},Y_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},z_=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),G_=[z_];function U_(t,n){return B(),H("svg",Y_,G_)}const Q_={name:"carbon-maximize",render:U_},K_={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},W_=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),J_=[W_];function Z_(t,n){return B(),H("svg",K_,J_)}const X_={name:"carbon-minimize",render:Z_},e5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},t5=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),n5=[t5];function s5(t,n){return B(),H("svg",e5,n5)}const o5={name:"carbon-checkmark",render:s5},l5={class:"select-list"},r5={class:"title"},a5={class:"items"},c5=["onClick"],i5=Fe({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(t,{emit:n}){const s=t;O(Y);const o=Yt(s,"modelValue",n,{passive:!0});return(l,r)=>{const a=o5;return B(),H("div",l5,[e("div",r5,In(t.title),1),e("div",a5,[(B(!0),H(Se,null,so(t.items,c=>(B(),H("div",{key:c.value,class:je(["item",{active:b(o)===c.value}]),onClick:()=>{var i;o.value=c.value,(i=c.onClick)==null||i.call(c)}},[q(a,{class:je(["text-green-500",{"opacity-0":b(o)!==c.value}])},null,8,["class"]),p(" "+In(c.display||c.value),1)],10,c5))),128))])])}}});const ve=(t,n)=>{const s=t.__vccOpts||t;for(const[o,l]of n)s[o]=l;return s},p5=ve(i5,[["__scopeId","data-v-7dd0eaca"]]),u5={class:"text-sm"},d5=Fe({__name:"Settings",setup(t){O(Y);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(B(),H("div",u5,[q(p5,{modelValue:b(bo),"onUpdate:modelValue":o[0]||(o[0]=l=>xe(bo)?bo.value=l:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),f5={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},y5=Fe({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(t,{emit:n}){const s=t;O(Y);const o=Yt(s,"modelValue",n,{passive:!0}),l=G();return Am(l,()=>{o.value=!1}),(r,a)=>(B(),H("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:je({disabled:t.disabled}),onClick:a[0]||(a[0]=c=>o.value=!b(o))},[It(r.$slots,"button",{class:je({disabled:t.disabled})})],2),(B(),V(vp,null,[b(o)?(B(),H("div",f5,[It(r.$slots,"menu")])):me("v-if",!0)],1024))],512))}}),h5={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},go={__name:"VerticalDivider",setup(t){return O(Y),(n,s)=>(B(),H("div",h5))}},m5={render(){return[]}},g5={class:"icon-btn"},v5={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},_5={class:"my-auto"},A5={class:"opacity-50"},B5=Fe({__name:"NavControls",props:{persist:{default:!1}},setup(t){const n=t;O(Y);const s=ar.smaller("md"),{isFullscreen:o,toggle:l}=iu,r=S(()=>fr.value?`?password=${fr.value}`:""),a=S(()=>`/presenter/${Ue.value}${r.value}`),c=S(()=>`/${Ue.value}${r.value}`),i=G(),u=()=>{i.value&&ls.value&&i.value.contains(ls.value)&&ls.value.blur()},d=S(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),f=Lt(),y=Lt();return gs(()=>import("./DrawingControls.7b34eac0.js"),["assets/DrawingControls.7b34eac0.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c074b90e.js"]).then(h=>y.value=h.default),(h,m)=>{const _=X_,A=Q_,E=V_,C=R_,D=O_,k=k_,M=D_,T=_u,N=y_,Z=c_,pe=s_,de=Fo("RouterLink"),_e=Jv,Ke=zv,Ye=jv,Ne=Tv;return B(),H("nav",{ref_key:"root",ref:i,class:"flex flex-col"},[e("div",{class:je(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",b(d)]),onMouseleave:u},[b(Kt)?me("v-if",!0):(B(),H("button",{key:0,class:"icon-btn",onClick:m[0]||(m[0]=(...Le)=>b(l)&&b(l)(...Le))},[b(o)?(B(),V(_,{key:0})):(B(),V(A,{key:1}))])),e("button",{class:je(["icon-btn",{disabled:!b(Fb)}]),onClick:m[1]||(m[1]=(...Le)=>b(yn)&&b(yn)(...Le))},[q(E)],2),e("button",{class:je(["icon-btn",{disabled:!b(Sb)}]),title:"Next",onClick:m[2]||(m[2]=(...Le)=>b(fn)&&b(fn)(...Le))},[q(C)],2),b(Kt)?me("v-if",!0):(B(),H("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:m[3]||(m[3]=Le=>b(pu)())},[q(D)])),b(ur)?me("v-if",!0):(B(),H("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:m[4]||(m[4]=Le=>b(mu)())},[b(Jr)?(B(),V(k,{key:0})):(B(),V(M,{key:1}))])),q(go),b(Kt)?me("v-if",!0):(B(),H(Se,{key:3},[!b(Vt)&&!b(s)&&b(f)?(B(),H(Se,{key:0},[q(b(f)),q(go)],64)):me("v-if",!0),b(Vt)?(B(),H("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:m[5]||(m[5]=Le=>El.value=!b(El))},[b(El)?(B(),V(T,{key:0})):(B(),V(N,{key:1,class:"opacity-50"}))])):me("v-if",!0)],64)),!b(be).drawings.presenterOnly&&!b(Kt)?(B(),H(Se,{key:4},[e("button",{class:"icon-btn relative",title:"Drawing",onClick:m[6]||(m[6]=Le=>zt.value=!b(zt))},[q(Z),b(zt)?(B(),H("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:ct({background:b(Sn).color})},null,4)):me("v-if",!0)]),q(go)],64)):me("v-if",!0),b(Kt)?me("v-if",!0):(B(),H(Se,{key:5},[b(Vt)?(B(),V(de,{key:0,to:b(c),class:"icon-btn",title:"Play Mode"},{default:I(()=>[q(pe)]),_:1},8,["to"])):me("v-if",!0),b(xb)?(B(),V(de,{key:1,to:b(a),class:"icon-btn",title:"Presenter Mode"},{default:I(()=>[q(_e)]),_:1},8,["to"])):me("v-if",!0),me("v-if",!0)],64)),(B(),H(Se,{key:6},[b(be).download?(B(),H("button",{key:0,class:"icon-btn",onClick:m[8]||(m[8]=(...Le)=>b(yr)&&b(yr)(...Le))},[q(Ke)])):me("v-if",!0)],64)),!b(Vt)&&b(be).info&&!b(Kt)?(B(),H("button",{key:7,class:"icon-btn",onClick:m[9]||(m[9]=Le=>Ms.value=!b(Ms))},[q(Ye)])):me("v-if",!0),!b(Vt)&&!b(Kt)?(B(),V(y5,{key:8},{button:I(()=>[e("button",g5,[q(Ne)])]),menu:I(()=>[q(d5)]),_:1})):me("v-if",!0),b(Kt)?me("v-if",!0):(B(),V(go,{key:9})),e("div",v5,[e("div",_5,[p(In(b(Ue))+" ",1),e("span",A5,"/ "+In(b(Ju)),1)])]),q(b(m5))],34)],512)}}}),Au={render(){return[]}},Bu={render(){return[]}},b5={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},D5=Fe({__name:"PresenterMouse",setup(t){return O(Y),(n,s)=>{const o=_u;return b(Al).cursor?(B(),H("div",b5,[q(o,{class:"absolute",style:ct({left:`${b(Al).cursor.x}%`,top:`${b(Al).cursor.y}%`})},null,8,["style"])])):me("v-if",!0)}}}),C5=Fe({__name:"SlidesShow",props:{context:null},setup(t){O(Y),ue(mt,()=>{var s,o;((s=mt.value)==null?void 0:s.meta)&&mt.value.meta.preload!==!1&&(mt.value.meta.__preloaded=!0),((o=wl.value)==null?void 0:o.meta)&&wl.value.meta.preload!==!1&&(wl.value.meta.__preloaded=!0)},{immediate:!0});const n=Lt();return gs(()=>import("./DrawingLayer.2c1328aa.js"),[]).then(s=>n.value=s.default),(s,o)=>(B(),H(Se,null,[me(" Global Bottom "),q(b(Bu)),me(" Slides "),(B(!0),H(Se,null,so(b(Ge),l=>{var r,a;return B(),H(Se,{key:l.path},[((r=l.meta)==null?void 0:r.__preloaded)||l===b(mt)?vt((B(),V(b(ea),{key:0,is:l==null?void 0:l.component,clicks:l===b(mt)?b(Tt):0,"clicks-elements":((a=l.meta)==null?void 0:a.__clicksElements)||[],"clicks-disabled":!1,class:je(b(Xr)(l)),route:l,context:t.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ip,l===b(mt)]]):me("v-if",!0)],64)}),128)),me(" Global Top "),q(b(Au)),b(n)?(B(),V(b(n),{key:0})):me("v-if",!0),b(Vt)?me("v-if",!0):(B(),V(D5,{key:1}))],64))}}),E5=Fe({__name:"Play",setup(t){O(Y),iv();const n=G();function s(r){var a;Kc.value||((a=r.target)==null?void 0:a.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?fn():yn())}Ob(n);const o=S(()=>_g.value||Kc.value);Lt();const l=Lt();return gs(()=>import("./DrawingControls.7b34eac0.js"),["assets/DrawingControls.7b34eac0.js","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c074b90e.js"]).then(r=>l.value=r.default),(r,a)=>(B(),H(Se,null,[e("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr_max-content]",style:ct(b(qp))},[q(vu,{class:"w-full h-full",style:ct({background:"var(--slidev-slide-container-background, black)"}),width:b(fa)?b(Ln).width.value:void 0,scale:b(bo),onPointerdown:s},{default:I(()=>[q(C5,{context:"slide"})]),controls:I(()=>[e("div",{class:je(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[b(o)?"opacity-100 right-0":"opacity-0 p-2",b(Ws)?"pointer-events-none":""]])},[q(B5,{class:"m-auto",persist:b(o)},null,8,["persist"])],2),!b(be).drawings.presenterOnly&&!b(Kt)&&b(l)?(B(),V(b(l),{key:0,class:"ml-0"})):me("v-if",!0)]),_:1},8,["style","width","scale"]),me("v-if",!0)],4),q(Sv)],64))}});function bu(t){const n=S(()=>t.value.path),s=S(()=>Ge.length-1),o=S(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),l=S(()=>cl(o.value)),r=S(()=>Ge.find(y=>y.path===`${o.value}`)),a=S(()=>{var y,h,m;return(m=(h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.slide)==null?void 0:m.id}),c=S(()=>{var y,h;return(h=(y=r.value)==null?void 0:y.meta)==null?void 0:h.layout}),i=S(()=>Ge.find(y=>y.path===`${Math.min(Ge.length,o.value+1)}`)),u=S(()=>Ge.filter(y=>{var h,m;return(m=(h=y.meta)==null?void 0:h.slide)==null?void 0:m.title}).reduce((y,h)=>(ya(y,h),y),[])),d=S(()=>ha(u.value,r.value)),f=S(()=>ma(d.value));return{route:t,path:n,total:s,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:a,currentLayout:c,nextRoute:i,rawTree:u,treeWithActiveStatuses:d,tree:f}}function Du(t,n,s){const o=G(0);rt(()=>{At.afterEach(async()=>{await rt(),o.value+=1})});const l=S(()=>{var i,u;return o.value,((u=(i=n.value)==null?void 0:i.meta)==null?void 0:u.__clicksElements)||[]}),r=S(()=>{var i,u,d;return+((d=(u=(i=n.value)==null?void 0:i.meta)==null?void 0:u.clicks)!=null?d:l.value.length)}),a=S(()=>s.value<Ge.length-1||t.value<r.value),c=S(()=>s.value>1||t.value>0);return{clicks:t,clicksElements:l,clicksTotal:r,hasNext:a,hasPrev:c}}const x5=["id"],ri=Fe({__name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(t,{emit:n}){const s=t,o=Yt(s,"clicksElements",n),l=S(()=>({height:`${jp}px`,width:`${On}px`})),r=Lt();gs(()=>import("./DrawingPreview.2c1c05e9.js"),[]).then(u=>r.value=u.default);const a=S(()=>s.clicks),c=Du(a,s.nav.currentRoute,s.nav.currentPage),i=S(()=>`${s.route.path.toString().padStart(3,"0")}-${(a.value+1).toString().padStart(2,"0")}`);return gt(Y,Me({nav:{...s.nav,...c},configs:be,themeConfigs:S(()=>be.themeConfig)})),(u,d)=>{var f;return B(),H("div",{id:b(i),class:"slide-container",style:ct(b(l))},[q(b(Bu)),q(b(ea),{is:(f=t.route)==null?void 0:f.component,"clicks-elements":b(o),"onUpdate:clicks-elements":d[0]||(d[0]=y=>xe(o)?o.value=y:null),clicks:b(a),"clicks-disabled":!1,class:je(b(Xr)(t.route)),route:t.route},null,8,["is","clicks-elements","clicks","class","route"]),b(r)?(B(),V(b(r),{key:0,page:+t.route.path},null,8,["page"])):me("v-if",!0),q(b(Au))],12,x5)}}}),w5=Fe({__name:"PrintSlide",props:{route:null},setup(t){var r;const n=t;O(Y);const s=Me(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=S(()=>n.route),l=bu(o);return(a,c)=>(B(),H(Se,null,[q(ri,{"clicks-elements":s,"onUpdate:clicks-elements":c[0]||(c[0]=i=>xe(s)?s.value=i:null),clicks:0,nav:b(l),route:b(o)},null,8,["clicks-elements","nav","route"]),b(Rs)?me("v-if",!0):(B(!0),H(Se,{key:0},so(s.length,i=>(B(),V(ri,{key:i,clicks:i,nav:b(l),route:b(o)},null,8,["clicks","nav","route"]))),128))],64))}}),k5={id:"print-content"},S5=Fe({__name:"PrintContainer",props:{width:null},setup(t){const n=t;O(Y);const s=S(()=>n.width),o=S(()=>n.width/dn),l=S(()=>s.value/o.value),r=S(()=>l.value<dn?s.value/On:o.value*dn/On),a=Ge.slice(0,-1),c=S(()=>({"select-none":!be.selectable,"slidev-code-line-numbers":be.lineNumbers}));return gt(Np,r),(i,u)=>(B(),H("div",{id:"print-container",class:je(b(c))},[e("div",k5,[(B(!0),H(Se,null,so(b(a),d=>(B(),V(w5,{key:d.path,route:d},null,8,["route"]))),128))]),It(i.$slots,"controls")],2))}});const F5=Fe({__name:"Print",setup(t){O(Y);const n=kn.canvasWidth,s=Math.round(n/kn.aspectRatio)+1;function o(l,{slots:r}){if(r.default)return ut("style",r.default())}return hs(()=>{fa?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(l,r)=>(B(),H(Se,null,[q(o,null,{default:I(()=>[p(" @page { size: "+In(b(n))+"px "+In(s)+"px; margin: 0px; } ",1)]),_:1}),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:ct(b(qp))},[q(S5,{class:"w-full h-full",style:ct({background:"var(--slidev-slide-container-background, black)"}),width:b(Ln).width.value},null,8,["style","width"])],4)],64))}});const $5={class:"slidev-layout end"},P5={__name:"end",setup(t){return O(Y),(n,s)=>(B(),H("div",$5," END "))}},O5=ve(P5,[["__scopeId","data-v-ab32435f"]]),T5="/yoga-migration-talk/main/assets/nicolas-lepage.ca76405b.jpg",L5="/yoga-migration-talk/main/assets/devfest.2725d40a.png",I5="/yoga-migration-talk/main/assets/zenika.52e9efc6.png",M5={class:"slidev-layout intro"},R5={class:"my-auto"},Cu={__name:"intro",setup(t){return O(Y),(n,s)=>(B(),H("div",M5,[e("div",R5,[It(n.$slots,"default")])]))}},N5=e("h1",{class:"text-center font-devfest"},[p(" Comment j'ai largu\xE9"),e("br"),p("Apollo Server"),e("br"),p("pour GraphQL Yoga ")],-1),j5=e("p",{class:"!mt-4 text-center"},[e("img",{src:T5,class:"rounded-full shadow-md inline w-25 mr-4"}),p(" Nicolas Lepage - "),e("a",{href:"https://twitter.com/njblepage"},"@njblepage")],-1),q5=e("p",{class:"!mt-8 text-center"},[e("img",{src:L5,class:"inline w-60 mr-10"}),e("img",{src:I5,class:"inline w-60"})],-1),H5={__name:"1",setup(t){const n={theme:"apple-basic",highlighter:"shiki",lineNumbers:!1,colorSchema:"light",info:`## Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga

[Sources](https://github.com/nlepage/yoga-migration-talk)
`,css:"unocss",routerMode:"hash",download:!0,layout:"intro",class:"background-leafs"};return O(Y),(s,o)=>(B(),V(Cu,ne(te(n)),{default:I(()=>[N5,j5,q5]),_:1},16))}},V5={class:"slidev-layout h-full grid bullets"},Y5={class:"pt-18"},Et={__name:"bullets",setup(t){return O(Y),(n,s)=>(B(),H("div",V5,[e("div",Y5,[It(n.$slots,"default")])]))}};const Eu=t=>(Ce("data-v-df43391c"),t=t(),Ee(),t),z5=Eu(()=>e("h1",null,"Le projet",-1)),G5=Eu(()=>e("ul",null,[e("li",null,"D\xE9velopp\xE9 par Zenika Nantes"),e("li",null,"Pour l\u2019Institut Catholique de Vend\xE9e"),e("li",null,"Application de gestion")],-1)),U5={__name:"2",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[z5,G5]),_:1},16))}},Q5=ve(U5,[["__scopeId","data-v-df43391c"]]),K5="/yoga-migration-talk/main/assets/schema-projet.24665d7b.png",W5={class:"slidev-layout default"},Be={__name:"default",setup(t){return O(Y),(n,s)=>(B(),H("div",W5,[It(n.$slots,"default")]))}},J5=e("h1",null,"Le projet",-1),Z5=e("p",{class:"text-center"},[e("img",{src:K5,width:"500",class:"inline w-130"})],-1),X5={__name:"3",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[J5,Z5]),_:1},16))}},e1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},t1=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),n1=[t1];function s1(t,n){return B(),H("svg",e1,n1)}const o1={name:"ph-clipboard",render:s1},l1={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},r1=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),a1=[r1];function c1(t,n){return B(),H("svg",l1,a1)}const i1={name:"ph-check-circle",render:c1};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function xu(t){return typeof t>"u"||t===null}function p1(t){return typeof t=="object"&&t!==null}function u1(t){return Array.isArray(t)?t:xu(t)?[]:[t]}function d1(t,n){var s,o,l,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)l=r[s],t[l]=n[l];return t}function f1(t,n){var s="",o;for(o=0;o<n;o+=1)s+=t;return s}function y1(t){return t===0&&Number.NEGATIVE_INFINITY===1/t}var h1=xu,m1=p1,g1=u1,v1=f1,_1=y1,A1=d1,ta={isNothing:h1,isObject:m1,toArray:g1,repeat:v1,isNegativeZero:_1,extend:A1};function wu(t,n){var s="",o=t.reason||"(unknown reason)";return t.mark?(t.mark.name&&(s+='in "'+t.mark.name+'" '),s+="("+(t.mark.line+1)+":"+(t.mark.column+1)+")",!n&&t.mark.snippet&&(s+=`

`+t.mark.snippet),o+" "+s):o}function Zs(t,n){Error.call(this),this.name="YAMLException",this.reason=t,this.mark=n,this.message=wu(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Zs.prototype=Object.create(Error.prototype);Zs.prototype.constructor=Zs;Zs.prototype.toString=function(n){return this.name+": "+wu(this,n)};var xn=Zs,B1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],b1=["scalar","sequence","mapping"];function D1(t){var n={};return t!==null&&Object.keys(t).forEach(function(s){t[s].forEach(function(o){n[String(o)]=s})}),n}function C1(t,n){if(n=n||{},Object.keys(n).forEach(function(s){if(B1.indexOf(s)===-1)throw new xn('Unknown option "'+s+'" is met in definition of "'+t+'" YAML type.')}),this.options=n,this.tag=t,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=D1(n.styleAliases||null),b1.indexOf(this.kind)===-1)throw new xn('Unknown kind "'+this.kind+'" is specified for "'+t+'" YAML type.')}var et=C1;function ai(t,n){var s=[];return t[n].forEach(function(o){var l=s.length;s.forEach(function(r,a){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=a)}),s[l]=o}),s}function E1(){var t={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(l){l.multi?(t.multi[l.kind].push(l),t.multi.fallback.push(l)):t[l.kind][l.tag]=t.fallback[l.tag]=l}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return t}function dr(t){return this.extend(t)}dr.prototype.extend=function(n){var s=[],o=[];if(n instanceof et)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new xn("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof et))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new xn("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new xn("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof et))throw new xn("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(dr.prototype);return l.implicit=(this.implicit||[]).concat(s),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=ai(l,"implicit"),l.compiledExplicit=ai(l,"explicit"),l.compiledTypeMap=E1(l.compiledImplicit,l.compiledExplicit),l};var x1=dr,w1=new et("tag:yaml.org,2002:str",{kind:"scalar",construct:function(t){return t!==null?t:""}}),k1=new et("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(t){return t!==null?t:[]}}),S1=new et("tag:yaml.org,2002:map",{kind:"mapping",construct:function(t){return t!==null?t:{}}}),F1=new x1({explicit:[w1,k1,S1]});function $1(t){if(t===null)return!0;var n=t.length;return n===1&&t==="~"||n===4&&(t==="null"||t==="Null"||t==="NULL")}function P1(){return null}function O1(t){return t===null}var T1=new et("tag:yaml.org,2002:null",{kind:"scalar",resolve:$1,construct:P1,predicate:O1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function L1(t){if(t===null)return!1;var n=t.length;return n===4&&(t==="true"||t==="True"||t==="TRUE")||n===5&&(t==="false"||t==="False"||t==="FALSE")}function I1(t){return t==="true"||t==="True"||t==="TRUE"}function M1(t){return Object.prototype.toString.call(t)==="[object Boolean]"}var R1=new et("tag:yaml.org,2002:bool",{kind:"scalar",resolve:L1,construct:I1,predicate:M1,represent:{lowercase:function(t){return t?"true":"false"},uppercase:function(t){return t?"TRUE":"FALSE"},camelcase:function(t){return t?"True":"False"}},defaultStyle:"lowercase"});function N1(t){return 48<=t&&t<=57||65<=t&&t<=70||97<=t&&t<=102}function j1(t){return 48<=t&&t<=55}function q1(t){return 48<=t&&t<=57}function H1(t){if(t===null)return!1;var n=t.length,s=0,o=!1,l;if(!n)return!1;if(l=t[s],(l==="-"||l==="+")&&(l=t[++s]),l==="0"){if(s+1===n)return!0;if(l=t[++s],l==="b"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!N1(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(s++;s<n;s++)if(l=t[s],l!=="_"){if(!j1(t.charCodeAt(s)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;s<n;s++)if(l=t[s],l!=="_"){if(!q1(t.charCodeAt(s)))return!1;o=!0}return!(!o||l==="_")}function V1(t){var n=t,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function Y1(t){return Object.prototype.toString.call(t)==="[object Number]"&&t%1===0&&!ta.isNegativeZero(t)}var z1=new et("tag:yaml.org,2002:int",{kind:"scalar",resolve:H1,construct:V1,predicate:Y1,represent:{binary:function(t){return t>=0?"0b"+t.toString(2):"-0b"+t.toString(2).slice(1)},octal:function(t){return t>=0?"0o"+t.toString(8):"-0o"+t.toString(8).slice(1)},decimal:function(t){return t.toString(10)},hexadecimal:function(t){return t>=0?"0x"+t.toString(16).toUpperCase():"-0x"+t.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),G1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function U1(t){return!(t===null||!G1.test(t)||t[t.length-1]==="_")}function Q1(t){var n,s;return n=t.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var K1=/^[-+]?[0-9]+e/;function W1(t,n){var s;if(isNaN(t))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===t)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===t)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ta.isNegativeZero(t))return"-0.0";return s=t.toString(10),K1.test(s)?s.replace("e",".e"):s}function J1(t){return Object.prototype.toString.call(t)==="[object Number]"&&(t%1!==0||ta.isNegativeZero(t))}var Z1=new et("tag:yaml.org,2002:float",{kind:"scalar",resolve:U1,construct:Q1,predicate:J1,represent:W1,defaultStyle:"lowercase"}),X1=F1.extend({implicit:[T1,R1,z1,Z1]}),e0=X1,ku=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Su=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function t0(t){return t===null?!1:ku.exec(t)!==null||Su.exec(t)!==null}function n0(t){var n,s,o,l,r,a,c,i=0,u=null,d,f,y;if(n=ku.exec(t),n===null&&(n=Su.exec(t)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,l=+n[3],!n[4])return new Date(Date.UTC(s,o,l));if(r=+n[4],a=+n[5],c=+n[6],n[7]){for(i=n[7].slice(0,3);i.length<3;)i+="0";i=+i}return n[9]&&(d=+n[10],f=+(n[11]||0),u=(d*60+f)*6e4,n[9]==="-"&&(u=-u)),y=new Date(Date.UTC(s,o,l,r,a,c,i)),u&&y.setTime(y.getTime()-u),y}function s0(t){return t.toISOString()}var o0=new et("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:t0,construct:n0,instanceOf:Date,represent:s0});function l0(t){return t==="<<"||t===null}var r0=new et("tag:yaml.org,2002:merge",{kind:"scalar",resolve:l0}),na=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function a0(t){if(t===null)return!1;var n,s,o=0,l=t.length,r=na;for(s=0;s<l;s++)if(n=r.indexOf(t.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function c0(t){var n,s,o=t.replace(/[\r\n=]/g,""),l=o.length,r=na,a=0,c=[];for(n=0;n<l;n++)n%4===0&&n&&(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)),a=a<<6|r.indexOf(o.charAt(n));return s=l%4*6,s===0?(c.push(a>>16&255),c.push(a>>8&255),c.push(a&255)):s===18?(c.push(a>>10&255),c.push(a>>2&255)):s===12&&c.push(a>>4&255),new Uint8Array(c)}function i0(t){var n="",s=0,o,l,r=t.length,a=na;for(o=0;o<r;o++)o%3===0&&o&&(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]),s=(s<<8)+t[o];return l=r%3,l===0?(n+=a[s>>18&63],n+=a[s>>12&63],n+=a[s>>6&63],n+=a[s&63]):l===2?(n+=a[s>>10&63],n+=a[s>>4&63],n+=a[s<<2&63],n+=a[64]):l===1&&(n+=a[s>>2&63],n+=a[s<<4&63],n+=a[64],n+=a[64]),n}function p0(t){return Object.prototype.toString.call(t)==="[object Uint8Array]"}var u0=new et("tag:yaml.org,2002:binary",{kind:"scalar",resolve:a0,construct:c0,predicate:p0,represent:i0}),d0=Object.prototype.hasOwnProperty,f0=Object.prototype.toString;function y0(t){if(t===null)return!0;var n=[],s,o,l,r,a,c=t;for(s=0,o=c.length;s<o;s+=1){if(l=c[s],a=!1,f0.call(l)!=="[object Object]")return!1;for(r in l)if(d0.call(l,r))if(!a)a=!0;else return!1;if(!a)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function h0(t){return t!==null?t:[]}var m0=new et("tag:yaml.org,2002:omap",{kind:"sequence",resolve:y0,construct:h0}),g0=Object.prototype.toString;function v0(t){if(t===null)return!0;var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1){if(o=a[n],g0.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[n]=[l[0],o[l[0]]]}return!0}function _0(t){if(t===null)return[];var n,s,o,l,r,a=t;for(r=new Array(a.length),n=0,s=a.length;n<s;n+=1)o=a[n],l=Object.keys(o),r[n]=[l[0],o[l[0]]];return r}var A0=new et("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:v0,construct:_0}),B0=Object.prototype.hasOwnProperty;function b0(t){if(t===null)return!0;var n,s=t;for(n in s)if(B0.call(s,n)&&s[n]!==null)return!1;return!0}function D0(t){return t!==null?t:{}}var C0=new et("tag:yaml.org,2002:set",{kind:"mapping",resolve:b0,construct:D0});e0.extend({implicit:[o0,r0],explicit:[u0,m0,A0,C0]});function ci(t){return t===48?"\0":t===97?"\x07":t===98?"\b":t===116||t===9?"	":t===110?`
`:t===118?"\v":t===102?"\f":t===114?"\r":t===101?"\x1B":t===32?" ":t===34?'"':t===47?"/":t===92?"\\":t===78?"\x85":t===95?"\xA0":t===76?"\u2028":t===80?"\u2029":""}var E0=new Array(256),x0=new Array(256);for(var Un=0;Un<256;Un++)E0[Un]=ci(Un)?1:0,x0[Un]=ci(Un);function w0(t){return Array.from(new Set(t))}function ii(...t){let n,s,o;t.length===1?(n=0,o=1,[s]=t):[n,s,o=1]=t;const l=[];let r=n;for(;r<s;)l.push(r),r+=o||1;return l}function k0(t,n){if(!n||n==="all"||n==="*")return ii(1,t+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[l,r]=o.split("-",2);s.push(...ii(+l,r?+r+1:t+1))}return w0(s).filter(o=>o<=t).sort((o,l)=>o-l)}const S0=["title"],Qe=Fe({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(t){const n=t;O(Y);const s=O(Os),o=O(En),l=O(Ts);function r(f=5){const y=[],h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=h.length;for(let _=0;_<f;_++)y.push(h.charAt(Math.floor(Math.random()*m)));return y.join("")}const a=G(),c=Nn();ms(()=>{const f=n.at==null?o==null?void 0:o.value.length:n.at,y=S(()=>l!=null&&l.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(f||0)),n.ranges.length-1)),h=S(()=>n.ranges[y.value]||"");if(n.ranges.length>=2&&!(l!=null&&l.value)){const m=r(),_=kh(n.ranges.length-1).map(A=>m+A);o!=null&&o.value&&(o.value.push(..._),tl(()=>_.forEach(A=>Xl(o.value,A)),c))}hs(()=>{if(!a.value)return;const _=a.value.querySelector(".shiki-dark")?Array.from(a.value.querySelectorAll(".shiki")):[a.value];for(const A of _){const E=Array.from(A.querySelectorAll(".line")),C=k0(E.length,h.value);if(E.forEach((D,k)=>{const M=C.includes(k+1);D.classList.toggle(bn,!0),D.classList.toggle("highlighted",M),D.classList.toggle("dishonored",!M)}),n.maxHeight){const D=A.querySelector(".line.highlighted");D&&D.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:i,copy:u}=Fm();function d(){var y,h;const f=(h=(y=a.value)==null?void 0:y.querySelector(".slidev-code"))==null?void 0:h.textContent;f&&u(f)}return(f,y)=>{const h=i1,m=o1;return B(),H("div",{ref_key:"el",ref:a,class:"slidev-code-wrapper relative group",style:ct({"max-height":n.maxHeight,"overflow-y":n.maxHeight?"scroll":void 0})},[It(f.$slots,"default"),b(be).codeCopy?(B(),H("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:b(i)?"Copied":"Copy",onClick:y[0]||(y[0]=_=>d())},[b(i)?(B(),V(h,{key:0,class:"p-2 w-8 h-8"})):(B(),V(m,{key:1,class:"p-2 w-8 h-8"}))],8,S0)):me("v-if",!0)],4)}}}),F0="/yoga-migration-talk/main/assets/graphql.5f897504.png";const ll=t=>(Ce("data-v-f4ba0d86"),t=t(),Ee(),t),$0=ll(()=>e("h1",null,[e("img",{src:F0,class:"inline w-12 mr-2"}),p(" GraphQL")],-1)),P0={class:"flex gap-10"},O0=ll(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"query"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getStudents"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"students"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"firstName"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"lastName")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"grades"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"grade")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#B8A965"}},"subject"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"name")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"query"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getStudents"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"students"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"firstName"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"lastName")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"grades"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"grade")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8C862B"}},"subject"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"name")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),T0=ll(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Query"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"students"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"Students"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Student"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ID"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"firstName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"lastName"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"grades"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"Grade"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"# ...")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Query"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"students"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"Students"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Student"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ID"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"firstName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"lastName"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"grades"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"Grade"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"# ...")])])])],-1)),L0=ll(()=>e("ul",null,[e("li",null,"Langage de requ\xEAtage + Sch\xE9ma"),e("li",null,"Environnement d\u2019ex\xE9cution"),e("li",null,"Sp\xE9cification opensource")],-1)),I0={__name:"4",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[$0,e("div",P0,[q(l,Te({},{ranges:[""]}),{default:I(()=>[O0]),_:1},16),q(l,Te({},{ranges:[""]}),{default:I(()=>[T0]),_:1},16)]),L0]),_:1},16)}}},M0=ve(I0,[["__scopeId","data-v-f4ba0d86"]]);const Fu=t=>(Ce("data-v-c1fa3e23"),t=t(),Ee(),t),R0=Fu(()=>e("h1",null,"L\u2019API GraphQL du projet",-1)),N0=Fu(()=>e("ul",null,[e("li",null,"+100 queries, +100 mutations, +250 types"),e("li",null,"Quelques subscriptions"),e("li",null,"Uploads de fichiers"),e("li",null,"D\u2019abord Apollo Server v1 puis v2")],-1)),j0={__name:"5",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[R0,N0]),_:1},16))}},q0=ve(j0,[["__scopeId","data-v-c1fa3e23"]]),H0="/yoga-migration-talk/main/assets/frise.fa329a1f.png",V0=e("h1",null,"Historique de l\u2019\xE9cosyst\xE8me",-1),Y0=e("p",{class:"text-center !mt-15"},[e("img",{src:H0,class:"inline"})],-1),z0={__name:"6",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[V0,Y0]),_:1},16))}},Hn="/yoga-migration-talk/main/assets/envelop.b6665814.svg";const $u=t=>(Ce("data-v-350122ca"),t=t(),Ee(),t),G0=$u(()=>e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop")],-1)),U0=$u(()=>e("ul",null,[e("li",null,"D\xE9marr\xE9 d\xE9but 2021"),e("li",null,"Syst\xE8me de plugins pour GraphQL"),e("li",null,[e("em",null,"Framework agnostic")])],-1)),Q0={__name:"7",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[G0,U0]),_:1},16))}},K0=ve(Q0,[["__scopeId","data-v-350122ca"]]),W0="/yoga-migration-talk/main/assets/schema-envelop.d9614bf9.png",J0=e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop")],-1),Z0=e("p",{class:"text-center"},[e("img",{src:W0,class:"inline w-130"})],-1),X0={__name:"8",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[J0,Z0]),_:1},16))}},e3="/yoga-migration-talk/main/assets/envelop-hub.66fc1df3.png",t3=e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop - Plugins")],-1),n3=e("p",{class:"text-center"},[e("img",{src:e3,class:"inline w-180 shadow-lg"})],-1),s3={__name:"9",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[t3,n3]),_:1},16))}},o3="/yoga-migration-talk/main/assets/envelop-lifecycle.89e1f5b4.png",l3=e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop - Plugins")],-1),r3=e("p",{class:"text-center"},[e("img",{src:o3,class:"inline w-200"})],-1),a3={__name:"10",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[l3,r3]),_:1},16))}};const Pu=t=>(Ce("data-v-c181d043"),t=t(),Ee(),t),c3=Pu(()=>e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop - Construire un serveur")],-1)),i3=Pu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"as"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"GraphQLJS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'graphql'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"envelop"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useEngine"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useSchema"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@envelop/core'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useParserCache"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@envelop/parser-cache'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useValidationCache"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@envelop/validation-cache'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'./schem"),e("span",{style:{color:"#FDAEB7"}},"a")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"getEnveloped"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"envelop"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useEngine"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"GraphQLJS"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useSchema"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useParserCache"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useValidationCache"),e("span",{style:{color:"#858585"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"as"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"GraphQLJS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'graphql'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"envelop"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useEngine"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useSchema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@envelop/core'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useParserCache"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@envelop/parser-cache'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useValidationCache"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@envelop/validation-cache'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'./schem"),e("span",{style:{color:"#B31D28"}},"a")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"getEnveloped"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"envelop"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useEngine"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"GraphQLJS"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useSchema"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useParserCache"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useValidationCache"),e("span",{style:{color:"#8E8F8B"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),p3={__name:"11",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[c3,q(l,Te({},{ranges:[""]}),{default:I(()=>[i3]),_:1},16)]),_:1},16)}}},u3=ve(p3,[["__scopeId","data-v-c181d043"]]);const Ou=t=>(Ce("data-v-47da8ac3"),t=t(),Ee(),t),d3=Ou(()=>e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop - Construire un serveur")],-1)),f3=Ou(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"createServer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"GraphQLError"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'graphql'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"getEnveloped"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'./envelop'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"httpServer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createServer"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"req"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"res"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"initialContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"req"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"parse"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"validate"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"contextFactory"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"execute"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#D4976C"}},"schema"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getEnveloped"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"initialContext"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"createServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"GraphQLError"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'graphql'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"getEnveloped"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'./envelop'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"httpServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createServer"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"req"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"res"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"initialContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"req"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"parse"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"validate"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"contextFactory"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"execute"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#A65E2B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getEnveloped"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"initialContext"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),y3={__name:"12",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[d3,q(l,Te({},{ranges:[""]}),{default:I(()=>[f3]),_:1},16)]),_:1},16)}}},h3=ve(y3,[["__scopeId","data-v-47da8ac3"]]);const Tu=t=>(Ce("data-v-4529e944"),t=t(),Ee(),t),m3=Tu(()=>e("h1",null,[e("img",{src:Hn,class:"inline mr-2 w-12"}),p(" GraphQL Envelop - Construire un serveur")],-1)),g3=Tu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"query"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"variables"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"JSON"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"parse"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"req"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"body"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"document"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"parse"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"query"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"validationErrors"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"validate"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"validationErrors"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#429988"}},"length"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},">"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"res"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"end"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"JSON"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"stringify"),e("span",{style:{color:"#858585"}},"({"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"errors"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"validationErrors"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"contextValue"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"contextFactory"),e("span",{style:{color:"#858585"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"result"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"await"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"execute"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"document"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"variableValues"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"variables"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"contextValue"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"res"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"end"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"JSON"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"stringify"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"result"),e("span",{style:{color:"#858585"}},"))")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"query"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"variables"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"JSON"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"parse"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"req"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"body"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"document"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"parse"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"query"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"validationErrors"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"validate"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"validationErrors"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#2F8A89"}},"length"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},">"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"res"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"end"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"JSON"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"stringify"),e("span",{style:{color:"#8E8F8B"}},"({"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"errors"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"validationErrors"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}))")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"contextValue"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"contextFactory"),e("span",{style:{color:"#8E8F8B"}},"()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"result"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"await"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"execute"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"document"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"variableValues"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"variables"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"contextValue"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"res"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"end"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"JSON"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"stringify"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"result"),e("span",{style:{color:"#8E8F8B"}},"))")])])])],-1)),v3={__name:"13",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[m3,q(l,Te({},{ranges:[""]}),{default:I(()=>[g3]),_:1},16)]),_:1},16)}}},_3=ve(v3,[["__scopeId","data-v-4529e944"]]),Lu="/yoga-migration-talk/main/assets/yoga.429b5348.svg";const Iu=t=>(Ce("data-v-f4a3a52a"),t=t(),Ee(),t),A3=Iu(()=>e("h1",null,[e("img",{src:Lu,class:"inline mr-2 w-12"}),p(" GraphQL Yoga")],-1)),B3=Iu(()=>e("ul",null,[e("li",null,"D\xE9marr\xE9 d\xE9but 2022"),e("li",null,[p("Serveur GraphQL "),e("em",null,"fully featured")]),e("li",null,"Extensible"),e("li",null,"Facile \xE0 mettre en place")],-1)),b3={__name:"14",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[A3,B3]),_:1},16))}},D3=ve(b3,[["__scopeId","data-v-f4a3a52a"]]);const Mu=t=>(Ce("data-v-aa783483"),t=t(),Ee(),t),C3=Mu(()=>e("h1",null,[e("img",{src:Lu,class:"inline mr-2 w-12"}),p(" GraphQL Yoga")],-1)),E3=Mu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"createServer"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"createYoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'graphql-yoga'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"useGraphQlJit"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'@envelop/graphql-jit'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"import"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"from"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'./schema'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"useGraphQlJit"),e("span",{style:{color:"#858585"}},"()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"server"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createServer"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"yoga"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B8A965"}},"server"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"listen"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#6394BF"}},"4000"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"console"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"info"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Server is running on http://localhost:4000/graphql'"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"createServer"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"createYoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'graphql-yoga'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"useGraphQlJit"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'@envelop/graphql-jit'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"import"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"from"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'./schema'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"useGraphQlJit"),e("span",{style:{color:"#8E8F8B"}},"()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"server"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createServer"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"yoga"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8C862B"}},"server"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"listen"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#296AA3"}},"4000"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"console"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"info"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Server is running on http://localhost:4000/graphql'"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),x3={__name:"15",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[C3,q(l,Te({},{ranges:[""]}),{default:I(()=>[E3]),_:1},16)]),_:1},16)}}},w3=ve(x3,[["__scopeId","data-v-aa783483"]]),k3={class:"slidev-layout center h-full grid place-content-center fact"},S3={class:"my-auto"},Ru={__name:"fact",setup(t){return O(Y),(n,s)=>(B(),H("div",k3,[e("div",S3,[It(n.$slots,"default")])]))}},F3=e("h1",null,[p("Je largue"),e("br"),p("Apollo Server !")],-1),$3={__name:"16",setup(t){const n={layout:"fact",class:"background-clouds"};return O(Y),(s,o)=>(B(),V(Ru,ne(te(n)),{default:I(()=>[F3]),_:1},16))}};const Nu=t=>(Ce("data-v-c33c25f7"),t=t(),Ee(),t),P3=Nu(()=>e("h1",null,"La migration (sur le papier)",-1)),O3=Nu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- import { ApolloServer } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ import { createServer } from 'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ import { createYoga } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ import { useApolloServerErrors } from '@envelop/apollo-server-errors'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  import { schema } from './schema'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- const server = new ApolloServer({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ const yoga = createYoga({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    schema,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+   plugins: [useApolloServerErrors()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ const server = createServer(yoga)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  server.listen(4000)")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- import { ApolloServer } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ import { createServer } from 'node:http'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ import { createYoga } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ import { useApolloServerErrors } from '@envelop/apollo-server-errors'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  import { schema } from './schema'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- const server = new ApolloServer({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ const yoga = createYoga({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    schema,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+   plugins: [useApolloServerErrors()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  })")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ const server = createServer(yoga)")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}}," ")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  server.listen(4000)")])])])],-1)),T3={__name:"17",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[P3,q(l,Te({},{ranges:[""]}),{default:I(()=>[O3]),_:1},16)]),_:1},16)}}},L3=ve(T3,[["__scopeId","data-v-c33c25f7"]]),rl=Fe({render(){var o,l;const t=Gt("after");function n(r,a){return vt(r,[[a]])}let s=(l=(o=this.$slots).default)==null?void 0:l.call(o);if(!!s)return s=wh(s),s.map(r=>n(ut(r),t))}});const sa=t=>(Ce("data-v-b3e135a7"),t=t(),Ee(),t),I3=sa(()=>e("h1",null,"La vraie migration",-1)),M3=sa(()=>e("ul",null,[e("li",null,"Directives customs ?"),e("li",null,"Subscriptions ?"),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),R3=[M3],N3=sa(()=>e("ul",null,[e("li",null,[e("strong",null,"Directives customs ?")]),e("li",null,"Subscriptions ?"),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),j3={__name:"18",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>{const l=rl,r=Gt("click-hide");return B(),V(Et,ne(te(n)),{default:I(()=>[I3,vt((B(),H("div",null,R3)),[[r]]),q(l,null,{default:I(()=>[N3]),_:1})]),_:1},16)}}},q3=ve(j3,[["__scopeId","data-v-b3e135a7"]]);const ju=t=>(Ce("data-v-a6418912"),t=t(),Ee(),t),H3=ju(()=>e("h1",null,"Directives customs - Authentification",-1)),V3=ju(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Query"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@permission"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"permissions"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"base"'),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"users"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"filter"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"UserFilter"),e("span",{style:{color:"#858585"}},"):"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"User"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@permission"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"permissions"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"admin"'),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"version"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@public")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@permission"),e("span",{style:{color:"#858585"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"permissions"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"on"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"OBJECT"),e("span",{style:{color:"#DBD7CA"}}," | "),e("span",{style:{color:"#E0A569"}},"FIELD_DEFINITION")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"on"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FIELD_DEFINITION")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Query"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@permission"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"permissions"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"base"'),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"users"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"filter"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"UserFilter"),e("span",{style:{color:"#8E8F8B"}},"):"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"User"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@permission"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"permissions"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"admin"'),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"version"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@public")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@permission"),e("span",{style:{color:"#8E8F8B"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"permissions"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"on"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"OBJECT"),e("span",{style:{color:"#393A34"}}," | "),e("span",{style:{color:"#B58451"}},"FIELD_DEFINITION")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"on"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FIELD_DEFINITION")])])])],-1)),Y3={__name:"19",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[H3,q(l,Te({},{ranges:["","1","3","4"]}),{default:I(()=>[V3]),_:1},16)]),_:1},16)}}},z3=ve(Y3,[["__scopeId","data-v-a6418912"]]);const oa=t=>(Ce("data-v-230c60a9"),t=t(),Ee(),t),G3=oa(()=>e("h1",null,"Directives customs - Authentification",-1)),U3=oa(()=>e("p",null,[p("Impl\xE9ment\xE9es gr\xE2ce \xE0 "),e("code",null,"mapSchema"),p(" (anciennement "),e("code",null,"SchemaDirectiveVisitor"),p(") de "),e("strong",null,"GraphQL Tools")],-1)),Q3=oa(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"mapSchema"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"MapperKind"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#D4976C"}},"OBJECT_TYPE"),e("span",{style:{color:"#858585"}},"]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDirective"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'permission'"),e("span",{style:{color:"#858585"}},")?.["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"MapperKind"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#D4976C"}},"FIELD"),e("span",{style:{color:"#858585"}},"]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"fieldName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDirective"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'permissions'"),e("span",{style:{color:"#858585"}},")?.["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"directive"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"permissions"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"directive")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"resolve"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"parent"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"info"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"user"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"user")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"      "),e("span",{style:{color:"#758575"}},"// V\xE9rification des permissions...")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"resolve"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"parent"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"info"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"mapSchema"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"MapperKind"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#A65E2B"}},"OBJECT_TYPE"),e("span",{style:{color:"#8E8F8B"}},"]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDirective"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'permission'"),e("span",{style:{color:"#8E8F8B"}},")?.["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"MapperKind"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#A65E2B"}},"FIELD"),e("span",{style:{color:"#8E8F8B"}},"]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"fieldName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDirective"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'permissions'"),e("span",{style:{color:"#8E8F8B"}},")?.["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"directive"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"permissions"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"directive")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"resolve"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"parent"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"info"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"user"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"user")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// V\xE9rification des permissions...")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"resolve"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"parent"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"info"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),K3={__name:"20",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[G3,U3,q(l,Te({},{ranges:["","12-18"]}),{default:I(()=>[Q3]),_:1},16)]),_:1},16)}}},W3=ve(K3,[["__scopeId","data-v-230c60a9"]]),J3="/yoga-migration-talk/main/assets/useGenericAuth.05ef9965.png";const la=t=>(Ce("data-v-899bce0f"),t=t(),Ee(),t),Z3=la(()=>e("h1",null,[p("Plugin envelop "),e("code",null,"useGenericAuth")],-1)),X3=la(()=>e("p",{class:"text-center"},[e("img",{src:J3,class:"inline w-180"})],-1)),eA=la(()=>e("ul",null,[e("li",null,[e("code",null,"resolveUserFn"),p(" : Fonction de r\xE9solution de l\u2019utilisateur")]),e("li",null,[e("code",null,"validateUser"),p(" : Fonction de validation "),e("em",null,"custom")])],-1)),tA={__name:"21",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[Z3,X3,eA]),_:1},16))}},nA=ve(tA,[["__scopeId","data-v-899bce0f"]]),sA=e("h1",null,[p("Plugin envelop "),e("code",null,"useGenericAuth")],-1),oA=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mapSchema"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"MapperKind"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#D4976C"}},"OBJECT_TYPE"),e("span",{style:{color:"#858585"}},"]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"type"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"      "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"MapperKind"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#D4976C"}},"OBJECT_FIELD"),e("span",{style:{color:"#858585"}},"]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"fieldName"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"typeName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDirective"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'permission'"),e("span",{style:{color:"#858585"}},")?.["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"publicDirective"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDirective"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'public'"),e("span",{style:{color:"#858585"}},")?.["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"publicDirective"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"publicDirective"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"permissions"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#D4976C"}},"extensions"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"extensions")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"extensions"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"extensions"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"extensions"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"permissions"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"directive"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"permissions"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mapSchema"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"MapperKind"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#A65E2B"}},"OBJECT_TYPE"),e("span",{style:{color:"#8E8F8B"}},"]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"type"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"      "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"MapperKind"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#A65E2B"}},"OBJECT_FIELD"),e("span",{style:{color:"#8E8F8B"}},"]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"fieldName"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"typeName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDirective"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'permission'"),e("span",{style:{color:"#8E8F8B"}},")?.["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"publicDirective"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDirective"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'public'"),e("span",{style:{color:"#8E8F8B"}},")?.["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"publicDirective"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"publicDirective"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"permissions"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#A65E2B"}},"extensions"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"extensions")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"extensions"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"extensions"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"extensions"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"permissions"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"directive"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"permissions"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),lA={__name:"22",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[sA,q(l,Te({},{ranges:["","11-14","16-19"]}),{default:I(()=>[oA]),_:1},16)]),_:1},16)}}},rA="/yoga-migration-talk/main/assets/useCustomAuth-1.d9b56982.png",aA="/yoga-migration-talk/main/assets/useCustomAuth-2.8ffc44a5.png";const al=t=>(Ce("data-v-c23bd3b6"),t=t(),Ee(),t),cA=al(()=>e("h1",null,[p("Plugin envelop "),e("code",null,"useGenericAuth")],-1)),iA={class:"text-center !mt-0"},pA=al(()=>e("img",{src:rA,class:"inline w-180"},null,-1)),uA=[pA],dA={class:"text-center !mt-0"},fA=al(()=>e("img",{src:aA,class:"inline w-180"},null,-1)),yA=[fA],hA=al(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"schema"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#A1B567"}},"useCustomAuth"),e("span",{style:{color:"#858585"}},"()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"schema"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},"),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#6C7834"}},"useCustomAuth"),e("span",{style:{color:"#8E8F8B"}},"()],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),mA={__name:"23",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe,r=Gt("click-hide"),a=Gt("after"),c=Gt("click");return B(),V(Be,ne(te(n)),{default:I(()=>[cA,vt((B(),H("p",iA,uA)),[[r]]),vt((B(),H("p",dA,yA)),[[a]]),vt((B(),H("div",null,[q(l,Te({},{ranges:[""]}),{default:I(()=>[hA]),_:1},16)])),[[c]])]),_:1},16)}}},gA=ve(mA,[["__scopeId","data-v-c23bd3b6"]]);const qu=t=>(Ce("data-v-1b463c84"),t=t(),Ee(),t),vA=qu(()=>e("h1",null,"La vraie migration",-1)),_A=qu(()=>e("ul",null,[e("li",null,[e("strong",null,"Directives customs ?")]),e("li",null,"Subscriptions ?"),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),AA={__name:"24",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[vA,_A]),_:1},16))}},BA=ve(AA,[["__scopeId","data-v-1b463c84"]]);const Hu=t=>(Ce("data-v-2e076162"),t=t(),Ee(),t),bA=Hu(()=>e("h1",null,"Directives customs - CRUD",-1)),DA=Hu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Query"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"# ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"pathway"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Int"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"):"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Pathway"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@crud"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"pathways"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"get"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'":id"'),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Pathway"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"# ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"units"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"Unit"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"]"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@crud"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"units"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"find"'),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},`"{ pathwayId: ':parent.id' }"`),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@crud"),e("span",{style:{color:"#858585"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"operation"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#E0A569"}},"String"),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"on"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"FIELD_DEFINITION")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Query"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"pathway"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Int"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"):"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Pathway"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@crud"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"pathways"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"get"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'":id"'),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Pathway"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"# ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"units"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"Unit"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"]"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@crud"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"units"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"find"'),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},`"{ pathwayId: ':parent.id' }"`),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"#...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@crud"),e("span",{style:{color:"#8E8F8B"}},"(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#B58451"}},"String"),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"on"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"FIELD_DEFINITION")])])])],-1)),CA={__name:"25",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[bA,q(l,Te({},{ranges:[""]}),{default:I(()=>[DA]),_:1},16)]),_:1},16)}}},EA=ve(CA,[["__scopeId","data-v-2e076162"]]);const ra=t=>(Ce("data-v-9678d720"),t=t(),Ee(),t),xA=ra(()=>e("h1",null,"Directives customs - CRUD",-1)),wA=ra(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addCrudResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"mapSchema"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#B8A965"}},"MapperKind"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#D4976C"}},"OBJECT_FIELD"),e("span",{style:{color:"#858585"}},"]:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"fieldName"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"directive"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"getDirective"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'crud'"),e("span",{style:{color:"#858585"}},")?.["),e("span",{style:{color:"#6394BF"}},"0"),e("span",{style:{color:"#858585"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"!"),e("span",{style:{color:"#B8A965"}},"directive"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"name"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"operation"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"crudArgs"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"directive")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#B8A965"}},"field"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"resolve"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"parent"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"args"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"=>"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// impl\xE9mentation...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"      "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addCrudResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"mapSchema"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#8C862B"}},"MapperKind"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#A65E2B"}},"OBJECT_FIELD"),e("span",{style:{color:"#8E8F8B"}},"]:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"fieldName"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"directive"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"getDirective"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'crud'"),e("span",{style:{color:"#8E8F8B"}},")?.["),e("span",{style:{color:"#296AA3"}},"0"),e("span",{style:{color:"#8E8F8B"}},"]")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"!"),e("span",{style:{color:"#8C862B"}},"directive"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"undefined")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"name"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"operation"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"crudArgs"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"directive")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8C862B"}},"field"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"resolve"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"parent"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"args"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"=>"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// impl\xE9mentation...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"      "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),kA={class:"mt-6"},SA=ra(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"schema"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addCrudResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},")),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useCustomAuth"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"schema"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addCrudResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},")),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useCustomAuth"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),FA={__name:"26",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe,r=Gt("click");return B(),V(Be,ne(te(n)),{default:I(()=>[xA,q(l,Te({},{ranges:[""]}),{default:I(()=>[wA]),_:1},16),vt((B(),H("div",kA,[q(l,Te({},{ranges:[""]}),{default:I(()=>[SA]),_:1},16)])),[[r]])]),_:1},16)}}},$A=ve(FA,[["__scopeId","data-v-9678d720"]]);const aa=t=>(Ce("data-v-716a072b"),t=t(),Ee(),t),PA=aa(()=>e("h1",null,"La vraie migration",-1)),OA=aa(()=>e("ul",null,[e("li",null,[e("strong",null,"Directives customs \u{1F5F8}")]),e("li",null,"Subscriptions ?"),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),TA=[OA],LA=aa(()=>e("ul",null,[e("li",null,"Directives customs \u{1F5F8}"),e("li",null,[e("strong",null,"Subscriptions ?")]),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),IA={__name:"27",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>{const l=rl,r=Gt("click-hide");return B(),V(Et,ne(te(n)),{default:I(()=>[PA,vt((B(),H("div",null,TA)),[[r]]),q(l,null,{default:I(()=>[LA]),_:1})]),_:1},16)}}},MA=ve(IA,[["__scopeId","data-v-716a072b"]]);const Vu=t=>(Ce("data-v-974d16d5"),t=t(),Ee(),t),RA=Vu(()=>e("h1",null,"Subscriptions - Quel protocole ?",-1)),NA=Vu(()=>e("ul",null,[e("li",null,"WebSockets"),e("li",null,"Server-Sent Events (SSE)")],-1)),jA={__name:"28",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[RA,NA]),_:1},16))}},qA=ve(jA,[["__scopeId","data-v-974d16d5"]]);const Yu=t=>(Ce("data-v-a5312f4a"),t=t(),Ee(),t),HA=Yu(()=>e("h1",null,"Subscriptions - Yoga",-1)),VA=Yu(()=>e("ul",null,[e("li",null,"Uniquement SSE par d\xE9faut (http/2 recommand\xE9)"),e("li",null,[p("Web Sockets possible avec "),e("code",null,"graphql-ws")])],-1)),YA={__name:"29",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[HA,VA]),_:1},16))}},zA=ve(YA,[["__scopeId","data-v-a5312f4a"]]),GA="/yoga-migration-talk/main/assets/pubSub.07f26a45.png",UA=e("h1",null,"Subscriptions - PubSub",-1),QA=e("p",{class:"text-center"},[e("img",{src:GA,class:"inline w-180"})],-1),KA={__name:"30",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[UA,QA]),_:1},16))}};const ca=t=>(Ce("data-v-e6cbb654"),t=t(),Ee(),t),WA=ca(()=>e("h1",null,"Subscriptions - PubSub",-1)),JA=ca(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- import { PubSub } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ import { createPubSub } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- export const pubSub = new PubSub()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ export const pubSub = createPubSub()")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- import { PubSub } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ import { createPubSub } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- export const pubSub = new PubSub()")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ export const pubSub = createPubSub()")])])])],-1)),ZA={class:"mt-6"},XA=ca(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Mutation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"//...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#CB7676"}},"async"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"generateBill"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"parent"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"},"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"context"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// \xC7a prend du temps...")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#B8A965"}},"pubSub"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"publish"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'GENERATED_BILL'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"generatedBill"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"}"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"//...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Mutation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"//...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#AB5959"}},"async"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"generateBill"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"parent"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"},"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"context"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// \xC7a prend du temps...")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8C862B"}},"pubSub"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"publish"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'GENERATED_BILL'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"generatedBill"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"}"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"},")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"//...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),eB={__name:"31",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[WA,q(l,Te({},{ranges:[""]}),{default:I(()=>[JA]),_:1},16),e("div",ZA,[q(l,Te({},{ranges:[""]}),{default:I(()=>[XA]),_:1},16)])]),_:1},16)}}},tB=ve(eB,[["__scopeId","data-v-e6cbb654"]]);const zu=t=>(Ce("data-v-a5218185"),t=t(),Ee(),t),nB=zu(()=>e("h1",null,"Subscriptions - PubSub",-1)),sB=zu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"- import { withFilter } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+ import { pipe, filter } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  const Subscription = {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    generatedBill: {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-     subscribe: withFilter(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-       () => pubSub.asyncIterator('GENERATED_BILL'),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-       (payload, variables) => payload.generatedBill.id === variables.id,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#FDAEB7"}},"-     ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+     subscribe: pipe(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+       pubSub.subscribe('GENERATED_BILL'),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+       filter(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+         (payload, variables) => payload.generatedBill.id === variables.id,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+       ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#85E89D"}},"+     ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  }")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"- import { withFilter } from 'apollo-server'")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+ import { pipe, filter } from 'graphql-yoga'")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  const Subscription = {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    generatedBill: {")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-     subscribe: withFilter(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-       () => pubSub.asyncIterator('GENERATED_BILL'),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-       (payload, variables) => payload.generatedBill.id === variables.id,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#B31D28"}},"-     ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+     subscribe: pipe(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+       pubSub.subscribe('GENERATED_BILL'),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+       filter(")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+         (payload, variables) => payload.generatedBill.id === variables.id,")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+       ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#22863A"}},"+     ),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    },")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  }")])])])],-1)),oB={__name:"32",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[nB,q(l,Te({},{ranges:[""]}),{default:I(()=>[sB]),_:1},16)]),_:1},16)}}},lB=ve(oB,[["__scopeId","data-v-a5218185"]]);const ia=t=>(Ce("data-v-0989ebe1"),t=t(),Ee(),t),rB=ia(()=>e("h1",null,"La vraie migration",-1)),aB=ia(()=>e("ul",null,[e("li",null,"Directives customs \u{1F5F8}"),e("li",null,[e("strong",null,"Subscriptions \u{1F5F8}")]),e("li",null,"Batching HTTP ?"),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),cB=[aB],iB=ia(()=>e("ul",null,[e("li",null,"Directives customs \u{1F5F8}"),e("li",null,"Subscriptions \u{1F5F8}"),e("li",null,[e("strong",null,"Batching HTTP ?")]),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),pB={__name:"33",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>{const l=rl,r=Gt("click-hide");return B(),V(Et,ne(te(n)),{default:I(()=>[rB,vt((B(),H("div",null,cB)),[[r]]),q(l,null,{default:I(()=>[iB]),_:1})]),_:1},16)}}},uB=ve(pB,[["__scopeId","data-v-0989ebe1"]]),dB="/yoga-migration-talk/main/assets/batch-1.6b782c1c.png",fB=e("h1",null,"Batching HTTP",-1),yB=e("p",{class:"text-center"},[e("img",{src:dB,class:"inline w-100"})],-1),hB={__name:"34",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[fB,yB]),_:1},16))}},mB="/yoga-migration-talk/main/assets/batch-2.83509608.png",gB=e("h1",null,"Batching HTTP",-1),vB=e("p",{class:"text-center"},[e("img",{src:mB,class:"inline w-100"})],-1),_B={__name:"35",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[gB,vB]),_:1},16))}};const pa=t=>(Ce("data-v-1d32cbcc"),t=t(),Ee(),t),AB=pa(()=>e("h1",null,"Batching HTTP Yoga",-1)),BB=pa(()=>e("ul",null,[e("li",null,[e("strong",null,"\xC0 partir de Yoga v3")]),e("li",null,"Compatible avec le Batching HTTP Link de Apollo Client")],-1)),bB={class:"mt-6"},DB=pa(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"schema"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"addCrudResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},")),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useCustomAuth"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"batching"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"schema"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"addCrudResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},")),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useCustomAuth"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"batching"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),CB={__name:"36",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[AB,BB,e("div",bB,[q(l,Te({},{ranges:[""]}),{default:I(()=>[DB]),_:1},16)])]),_:1},16)}}},EB=ve(CB,[["__scopeId","data-v-1d32cbcc"]]);const ua=t=>(Ce("data-v-9db12866"),t=t(),Ee(),t),xB=ua(()=>e("h1",null,"La vraie migration",-1)),wB=ua(()=>e("ul",null,[e("li",null,"Directives customs \u{1F5F8}"),e("li",null,"Subscriptions \u{1F5F8}"),e("li",null,[e("strong",null,"Batching HTTP \u{1F5F8}")]),e("li",null,"Resolvers g\xE9n\xE9ratrices ?!")],-1)),kB=[wB],SB=ua(()=>e("ul",null,[e("li",null,"Directives customs \u{1F5F8}"),e("li",null,"Subscriptions \u{1F5F8}"),e("li",null,"Batching HTTP \u{1F5F8}"),e("li",null,[e("strong",null,"Resolvers g\xE9n\xE9ratrices ?!")])],-1)),FB={__name:"37",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>{const l=rl,r=Gt("click-hide");return B(),V(Et,ne(te(n)),{default:I(()=>[xB,vt((B(),H("div",null,kB)),[[r]]),q(l,null,{default:I(()=>[SB]),_:1})]),_:1},16)}}},$B=ve(FB,[["__scopeId","data-v-9db12866"]]);const Gu=t=>(Ce("data-v-2db9dd8a"),t=t(),Ee(),t),PB=Gu(()=>e("h1",null,"Resolvers g\xE9n\xE9ratrices ?!",-1)),OB=Gu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Query"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"student"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"_"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"crud"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"students"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"get"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"id"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"Mutation"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#4D9375"}},"*"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"updateStudent"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"_"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"studentInput"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"})"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"return"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"yield"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#B8A965"}},"crud"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#B8A965"}},"students"),e("span",{style:{color:"#858585"}},"."),e("span",{style:{color:"#A1B567"}},"update"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"studentInput"),e("span",{style:{color:"#858585"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"  "),e("span",{style:{color:"#758575"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Query"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"student"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"_"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"yield"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"crud"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"students"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"get"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"id"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"Mutation"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#1C6B48"}},"*"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"updateStudent"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"_"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"studentInput"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"})"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"return"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"yield"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8C862B"}},"crud"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#8C862B"}},"students"),e("span",{style:{color:"#8E8F8B"}},"."),e("span",{style:{color:"#6C7834"}},"update"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"studentInput"),e("span",{style:{color:"#8E8F8B"}},")")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"}")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"  "),e("span",{style:{color:"#A0ADA0"}},"// ...")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),TB={__name:"38",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[PB,q(l,Te({},{ranges:[""]}),{default:I(()=>[OB]),_:1},16)]),_:1},16)}}},LB=ve(TB,[["__scopeId","data-v-2db9dd8a"]]);const da=t=>(Ce("data-v-b878e763"),t=t(),Ee(),t),IB=da(()=>e("h1",null,"Resolvers g\xE9n\xE9ratrices ?!",-1)),MB=da(()=>e("ul",null,[e("li",null,"D\xE9duplication"),e("li",null,"Batching"),e("li",null,"Gestion du pool et des transactions Postgres")],-1)),RB={class:"mt-6"},NB=da(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"schema"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"wrapGeneratorResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addCrudResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},"))),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useCustomAuth"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"batching"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"schema"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"wrapGeneratorResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addCrudResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},"))),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useCustomAuth"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"batching"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),jB={__name:"39",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe,r=Gt("click");return B(),V(Be,ne(te(n)),{default:I(()=>[IB,MB,vt((B(),H("div",RB,[q(l,Te({},{ranges:[""]}),{default:I(()=>[NB]),_:1},16)])),[[r]])]),_:1},16)}}},qB=ve(jB,[["__scopeId","data-v-b878e763"]]),HB="/yoga-migration-talk/main/assets/postgres-1.5f4e6889.png",VB=e("h1",null,"Gestion du pool et des transactions Postgres",-1),YB=e("p",{class:"text-center"},[e("img",{src:HB,class:"inline w-150"})],-1),zB={__name:"40",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[VB,YB]),_:1},16))}},GB="/yoga-migration-talk/main/assets/postgres-2.f3993e6c.png",UB=e("h1",null,"Gestion du pool et des transactions Postgres",-1),QB=e("p",{class:"text-center"},[e("img",{src:GB,class:"inline w-150"})],-1),KB={__name:"41",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[UB,QB]),_:1},16))}};const Uu=t=>(Ce("data-v-ffbfb31f"),t=t(),Ee(),t),WB=Uu(()=>e("h1",null,"Plugins Yoga",-1)),JB=Uu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"export"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"type"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Plugin"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"EnvelopPlugin"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"&"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"/**")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   * Use this hook with your own risk. It is still experimental and may change in the future.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   * "),e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#CB7676"}},"internal")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"onRequest"),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnRequestHook"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"TServerContext"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#758575"}},"/**")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   * Use this hook with your own risk. It is still experimental and may change in the future.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   * "),e("span",{style:{color:"#858585"}},"@"),e("span",{style:{color:"#CB7676"}},"internal")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"   */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#B8A965"}},"onResponse"),e("span",{style:{color:"#CB7676"}},"?:"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"OnResponseHook"),e("span",{style:{color:"#858585"}},"<"),e("span",{style:{color:"#A1B567"}},"TServerContext"),e("span",{style:{color:"#858585"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"export"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"type"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Plugin"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"EnvelopPlugin"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"&"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"/**")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   * Use this hook with your own risk. It is still experimental and may change in the future.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   * "),e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#AB5959"}},"internal")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"onRequest"),e("span",{style:{color:"#AB5959"}},"?:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnRequestHook"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"TServerContext"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"}),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#A0ADA0"}},"/**")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   * Use this hook with your own risk. It is still experimental and may change in the future.")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   * "),e("span",{style:{color:"#8E8F8B"}},"@"),e("span",{style:{color:"#AB5959"}},"internal")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"   */")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8C862B"}},"onResponse"),e("span",{style:{color:"#AB5959"}},"?:"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"OnResponseHook"),e("span",{style:{color:"#8E8F8B"}},"<"),e("span",{style:{color:"#6C7834"}},"TServerContext"),e("span",{style:{color:"#8E8F8B"}},">")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1)),ZB={__name:"42",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[WB,q(l,Te({},{ranges:[""]}),{default:I(()=>[JB]),_:1},16)]),_:1},16)}}},XB=ve(ZB,[["__scopeId","data-v-ffbfb31f"]]),eb="/yoga-migration-talk/main/assets/usePostgres.e69bbaf3.png",tb=e("h1",null,"Gestion du pool et des transactions Postgres",-1),nb=e("p",{class:"text-center"},[e("img",{src:eb,class:"inline w-200"})],-1),sb={__name:"43",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[tb,nb]),_:1},16))}};const Qu=t=>(Ce("data-v-2a14a0bf"),t=t(),Ee(),t),ob=Qu(()=>e("h1",null,"Gestion du pool et des transactions Postgres",-1)),lb=Qu(()=>e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark",style:{"background-color":"#121212"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"yoga"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"createYoga"),e("span",{style:{color:"#858585"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"schema"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"wrapGeneratorResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addCrudResolvers"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#A1B567"}},"addAuthExtension"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#B8A965"}},"schema"),e("span",{style:{color:"#858585"}},"))),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"plugins"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"useCustomAuth"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"usePostgres"),e("span",{style:{color:"#858585"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#858585"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"  "),e("span",{style:{color:"#E0A569"}},"batching"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"true"),e("span",{style:{color:"#858585"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"})")])])]),e("pre",{class:"slidev-code shiki shiki-light",style:{"background-color":"#ffffff"}},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"yoga"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"createYoga"),e("span",{style:{color:"#8E8F8B"}},"({")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"schema"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"wrapGeneratorResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addCrudResolvers"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#6C7834"}},"addAuthExtension"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#8C862B"}},"schema"),e("span",{style:{color:"#8E8F8B"}},"))),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"plugins"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"[")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"useCustomAuth"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"usePostgres"),e("span",{style:{color:"#8E8F8B"}},"(),")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#8E8F8B"}},"],")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"  "),e("span",{style:{color:"#B58451"}},"batching"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"true"),e("span",{style:{color:"#8E8F8B"}},",")]),p(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"})")])])])],-1)),rb={__name:"44",setup(t){const n={};return O(Y),(s,o)=>{const l=Qe;return B(),V(Be,ne(te(n)),{default:I(()=>[ob,q(l,Te({},{ranges:[""]}),{default:I(()=>[lb]),_:1},16)]),_:1},16)}}},ab=ve(rb,[["__scopeId","data-v-2a14a0bf"]]),cb=e("h1",null,"Migration r\xE9ussie ?",-1),ib={__name:"45",setup(t){const n={layout:"fact",class:"background-clouds"};return O(Y),(s,o)=>(B(),V(Ru,ne(te(n)),{default:I(()=>[cb]),_:1},16))}};const Ku=t=>(Ce("data-v-571ba95d"),t=t(),Ee(),t),pb=Ku(()=>e("h1",null,"What\u2019s next ?",-1)),ub=Ku(()=>e("ul",null,[e("li",null,[p("Support de "),e("code",null,"@defer"),p(" et "),e("code",null,"@stream")]),e("li",null,"Support officiel de Bun !")],-1)),db={__name:"46",setup(t){const n={layout:"bullets"};return O(Y),(s,o)=>(B(),V(Et,ne(te(n)),{default:I(()=>[pb,ub]),_:1},16))}},fb=ve(db,[["__scopeId","data-v-571ba95d"]]),yb="/yoga-migration-talk/main/assets/guild.ed679314.png",hb=e("h1",null,"The Guild",-1),mb=e("p",{class:"text-center"},[e("img",{src:yb,class:"inline w-150"})],-1),gb={__name:"47",setup(t){const n={};return O(Y),(s,o)=>(B(),V(Be,ne(te(n)),{default:I(()=>[hb,mb]),_:1},16))}},vb="/yoga-migration-talk/main/assets/qrcode.f8971e6e.png",_b=e("h1",{class:"text-center"}," Merci ! ",-1),Ab=e("p",{class:"text-center !mt-10"},[e("img",{class:"inline",src:vb})],-1),Bb={__name:"48",setup(t){const n={layout:"intro",class:"background-clouds"};return O(Y),(s,o)=>(B(),V(Cu,ne(te(n)),{default:I(()=>[_b,Ab]),_:1},16))}},bb=[{path:"1",name:"page-1",component:H5,meta:{theme:"apple-basic",highlighter:"shiki",lineNumbers:!1,title:"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga",colorSchema:"light",info:`## Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga

[Sources](https://github.com/nlepage/yoga-migration-talk)
`,css:"unocss",routerMode:"hash",download:!0,layout:"intro",class:"background-leafs",slide:{raw:`---
theme: apple-basic
highlighter: shiki
lineNumbers: false
title: Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga
colorSchema: light
info: |
  ## Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga

  [Sources](https://github.com/nlepage/yoga-migration-talk)
css: unocss
routerMode: hash
download: true

layout: intro
class: background-leafs
---

<h1 class="text-center font-devfest">
  Comment j'ai largu\xE9<br>Apollo Server<br>pour GraphQL Yoga
</h1>

<p class="!mt-4 text-center">
  <img src="/nicolas-lepage.jpg" class="rounded-full shadow-md inline w-25 mr-4" />
  Nicolas Lepage - <a href="https://twitter.com/njblepage">@njblepage</a>
</p>

<p class="!mt-8 text-center">
  <img src="/devfest.png" class="inline w-60 mr-10" />
  <img src="/zenika.png" class="inline w-60" />
</p>

<!--
Bonjour \xE0 tous, Namaste,

Rassurez-vous, je n'ai pas pr\xE9par\xE9 une pr\xE9sentation sur le yoga.

D'ailleurs l\xE0 \xE7a se sent peut-\xEAtre mais je ne suis pas du tout d\xE9tendu.

"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga"

Dans cette pr\xE9sentation, j'aimerais vous faire un retour d'exp\xE9rience sur une migration de Apollo Server vers GraphQL Yoga.

- Est-ce que Yoga est une alternative s\xE9rieuse \xE0 Apollo Server ?
- Est-ce simple de migrer de l'un \xE0 l'autre ?
- Yoga nous fait de belles promesses, ces promesses sont-elles tenues ?

On va essayer de r\xE9pondre \xE0 ces questions.

*Se pr\xE9senter*

Cette migration de Apollo Server vers GraphQL Yoga, c'est un POC que j'ai r\xE9alis\xE9 sur un projet \u25B6
-->
`,title:"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga",level:1,content:`<h1 class="text-center font-devfest">
  Comment j'ai largu\xE9<br>Apollo Server<br>pour GraphQL Yoga
</h1>

<p class="!mt-4 text-center">
  <img src="/nicolas-lepage.jpg" class="rounded-full shadow-md inline w-25 mr-4" />
  Nicolas Lepage - <a href="https://twitter.com/njblepage">@njblepage</a>
</p>

<p class="!mt-8 text-center">
  <img src="/devfest.png" class="inline w-60 mr-10" />
  <img src="/zenika.png" class="inline w-60" />
</p>`,frontmatter:{theme:"apple-basic",highlighter:"shiki",lineNumbers:!1,title:"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga",colorSchema:"light",info:`## Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga

[Sources](https://github.com/nlepage/yoga-migration-talk)
`,css:"unocss",routerMode:"hash",download:!0,layout:"intro",class:"background-leafs"},note:`Bonjour \xE0 tous, Namaste,

Rassurez-vous, je n'ai pas pr\xE9par\xE9 une pr\xE9sentation sur le yoga.

D'ailleurs l\xE0 \xE7a se sent peut-\xEAtre mais je ne suis pas du tout d\xE9tendu.

"Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga"

Dans cette pr\xE9sentation, j'aimerais vous faire un retour d'exp\xE9rience sur une migration de Apollo Server vers GraphQL Yoga.

- Est-ce que Yoga est une alternative s\xE9rieuse \xE0 Apollo Server ?
- Est-ce simple de migrer de l'un \xE0 l'autre ?
- Yoga nous fait de belles promesses, ces promesses sont-elles tenues ?

On va essayer de r\xE9pondre \xE0 ces questions.

*Se pr\xE9senter*

Cette migration de Apollo Server vers GraphQL Yoga, c'est un POC que j'ai r\xE9alis\xE9 sur un projet \u25B6`,index:0,start:0,end:54,notesHTML:`<p>Bonjour \xE0 tous, Namaste,</p>
<p>Rassurez-vous, je n'ai pas pr\xE9par\xE9 une pr\xE9sentation sur le yoga.</p>
<p>D'ailleurs l\xE0 \xE7a se sent peut-\xEAtre mais je ne suis pas du tout d\xE9tendu.</p>
<p>&quot;Comment j'ai largu\xE9 Apollo Server pour GraphQL Yoga&quot;</p>
<p>Dans cette pr\xE9sentation, j'aimerais vous faire un retour d'exp\xE9rience sur une migration de Apollo Server vers GraphQL Yoga.</p>
<ul>
<li>Est-ce que Yoga est une alternative s\xE9rieuse \xE0 Apollo Server ?</li>
<li>Est-ce simple de migrer de l'un \xE0 l'autre ?</li>
<li>Yoga nous fait de belles promesses, ces promesses sont-elles tenues ?</li>
</ul>
<p>On va essayer de r\xE9pondre \xE0 ces questions.</p>
<p><em>Se pr\xE9senter</em></p>
<p>Cette migration de Apollo Server vers GraphQL Yoga, c'est un POC que j'ai r\xE9alis\xE9 sur un projet \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Q5,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# Le projet

 - D\xE9velopp\xE9 par Zenika Nantes
 - Pour l'Institut Catholique de Vend\xE9e
 - Application de gestion

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - Depuis 2017
 - Petite \xE9quipe (2 \xE0 4 d\xE9veloppeurs)
 - \xC0 destination \xE9quipes support de l'\xE9cole (compta...)

L'architecture technique du projet \u25B6
-->
`,title:"Le projet",level:1,content:`# Le projet

 - D\xE9velopp\xE9 par Zenika Nantes
 - Pour l'Institut Catholique de Vend\xE9e
 - Application de gestion

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},note:`- Depuis 2017
 - Petite \xE9quipe (2 \xE0 4 d\xE9veloppeurs)
 - \xC0 destination \xE9quipes support de l'\xE9cole (compta...)

L'architecture technique du projet \u25B6`,index:1,start:54,end:78,notesHTML:`<ul>
<li>Depuis 2017</li>
<li>Petite \xE9quipe (2 \xE0 4 d\xE9veloppeurs)</li>
<li>\xC0 destination \xE9quipes support de l'\xE9cole (compta...)</li>
</ul>
<p>L'architecture technique du projet \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:X5,meta:{slide:{raw:`
# Le projet

<p class="text-center">
  <img src="/schema-projet.png" width="500" class="inline w-130">
</p>

<!--
- Frontends react (apollo client)
- Interrogent API GraphQL
- s'appuyait sur microservices au d\xE9part
- inadapt\xE9 pour petite \xE9quipe (overhead)
- revenu \xE0...
- API monolithique, r\xE9pond besoins tous frontends
- stocke ses donn\xE9es Bdd postgres
- pr\xE9cise, d\xE9ploit sur kubernetes manag\xE9 chez G cloud, sauf pg manag\xE9

Petit rappel GraphQL \u25B6
-->
`,title:"Le projet",level:1,content:`# Le projet

<p class="text-center">
  <img src="/schema-projet.png" width="500" class="inline w-130">
</p>`,frontmatter:{},note:`- Frontends react (apollo client)
- Interrogent API GraphQL
- s'appuyait sur microservices au d\xE9part
- inadapt\xE9 pour petite \xE9quipe (overhead)
- revenu \xE0...
- API monolithique, r\xE9pond besoins tous frontends
- stocke ses donn\xE9es Bdd postgres
- pr\xE9cise, d\xE9ploit sur kubernetes manag\xE9 chez G cloud, sauf pg manag\xE9

Petit rappel GraphQL \u25B6`,index:2,start:79,end:99,notesHTML:`<ul>
<li>Frontends react (apollo client)</li>
<li>Interrogent API GraphQL</li>
<li>s'appuyait sur microservices au d\xE9part</li>
<li>inadapt\xE9 pour petite \xE9quipe (overhead)</li>
<li>revenu \xE0...</li>
<li>API monolithique, r\xE9pond besoins tous frontends</li>
<li>stocke ses donn\xE9es Bdd postgres</li>
<li>pr\xE9cise, d\xE9ploit sur kubernetes manag\xE9 chez G cloud, sauf pg manag\xE9</li>
</ul>
<p>Petit rappel GraphQL \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:M0,meta:{slide:{raw:`
# <img src="/graphql.png" class="inline w-12 mr-2"> GraphQL

<div class="flex gap-10">

\`\`\`graphql
query getStudents {
  students {
    id, firstName, lastName
    grades {
      id, grade
      subject {
        id, name
      }
    }
  }
}
\`\`\`

\`\`\`graphql
type Query {
  students: [Students]!
}

type Student {
  id: ID!
  firstName: String!
  lastName: String!
  grades: [Grade!]!
}

# ...
\`\`\`

</div>

 - Langage de requ\xEAtage + Sch\xE9ma
 - Environnement d'ex\xE9cution
 - Sp\xE9cification opensource

<style>
.slidev-code-wrapper {
  flex: 1;
}

ul {
  font-size: 140%;
}
</style>

<!--
 - langage req : permet client d\xE9crire...
 - sch\xE9ma : serveur d\xE9crire op\xE9rations possibles sur API
 - diff\xE9rents type op\xE9rations
 - permet validation requ\xEAte
 - env exec : cot\xE9 serveur, s'appuie sur moteur graphql
 - faire tout tas chose pour nous
 - impl\xE9menter r\xE9cup\xE9ration donn\xE9e, sous forme fonctions, resolvers
 - tout cela...

Revenons \xE0 notre projet \u25B6
-->
`,title:'<img src="/graphql.png" class="inline w-12 mr-2"> GraphQL',level:1,content:`# <img src="/graphql.png" class="inline w-12 mr-2"> GraphQL

<div class="flex gap-10">

\`\`\`graphql
query getStudents {
  students {
    id, firstName, lastName
    grades {
      id, grade
      subject {
        id, name
      }
    }
  }
}
\`\`\`

\`\`\`graphql
type Query {
  students: [Students]!
}

type Student {
  id: ID!
  firstName: String!
  lastName: String!
  grades: [Grade!]!
}

# ...
\`\`\`

</div>

 - Langage de requ\xEAtage + Sch\xE9ma
 - Environnement d'ex\xE9cution
 - Sp\xE9cification opensource

<style>
.slidev-code-wrapper {
  flex: 1;
}

ul {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`- langage req : permet client d\xE9crire...
 - sch\xE9ma : serveur d\xE9crire op\xE9rations possibles sur API
 - diff\xE9rents type op\xE9rations
 - permet validation requ\xEAte
 - env exec : cot\xE9 serveur, s'appuie sur moteur graphql
 - faire tout tas chose pour nous
 - impl\xE9menter r\xE9cup\xE9ration donn\xE9e, sous forme fonctions, resolvers
 - tout cela...

Revenons \xE0 notre projet \u25B6`,index:3,start:100,end:163,notesHTML:`<ul>
<li>langage req : permet client d\xE9crire...</li>
<li>sch\xE9ma : serveur d\xE9crire op\xE9rations possibles sur API</li>
<li>diff\xE9rents type op\xE9rations</li>
<li>permet validation requ\xEAte</li>
<li>env exec : cot\xE9 serveur, s'appuie sur moteur graphql</li>
<li>faire tout tas chose pour nous</li>
<li>impl\xE9menter r\xE9cup\xE9ration donn\xE9e, sous forme fonctions, resolvers</li>
<li>tout cela...</li>
</ul>
<p>Revenons \xE0 notre projet \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:q0,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# L'API GraphQL du projet

 - +100 queries, +100 mutations, +250 types
 - Quelques subscriptions
 - Uploads de fichiers
 - D'abord Apollo Server v1 puis v2

<style>
ul {
  font-size: 140%;
}
</style>

<!--
- Notre API Graphql, vue de l'ext\xE9rieur
- API taille moyenne
- sch\xE9ma comporte
- \xE9galement uploads, petite contrainte technique suppl\xE9mentaire
- ...migr\xE9e sur ApolloServer V2, sur lequel rest\xE9e depuis

si on replace dans historique des versions de apollo et de Yoga \u25B6
-->
`,title:"L'API GraphQL du projet",level:1,content:`# L'API GraphQL du projet

 - +100 queries, +100 mutations, +250 types
 - Quelques subscriptions
 - Uploads de fichiers
 - D'abord Apollo Server v1 puis v2

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},note:`- Notre API Graphql, vue de l'ext\xE9rieur
- API taille moyenne
- sch\xE9ma comporte
- \xE9galement uploads, petite contrainte technique suppl\xE9mentaire
- ...migr\xE9e sur ApolloServer V2, sur lequel rest\xE9e depuis

si on replace dans historique des versions de apollo et de Yoga \u25B6`,index:4,start:163,end:190,notesHTML:`<ul>
<li>Notre API Graphql, vue de l'ext\xE9rieur</li>
<li>API taille moyenne</li>
<li>sch\xE9ma comporte</li>
<li>\xE9galement uploads, petite contrainte technique suppl\xE9mentaire</li>
<li>...migr\xE9e sur ApolloServer V2, sur lequel rest\xE9e depuis</li>
</ul>
<p>si on replace dans historique des versions de apollo et de Yoga \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:z0,meta:{slide:{raw:`
# Historique de l'\xE9cosyst\xE8me

<p class="text-center !mt-15">
  <img src="/frise.png" class="inline">
</p>

<!--
 - Yoga v1, petit projet oss (file upload, subscriptions, playground)
 - h\xE9sit\xE9, mais Apollo v2 arriv\xE9, migr\xE9 dessus
 - Yoga v1 maintenu pendant un temps, fini par mourir...
 - 2020...
 - Apollo v3, pas migr\xE9, manque temps, feature en moins...
 - d\xE9but 2022 arriv\xE9 yoga v2, nouvelle alternative Apollo...
 - pour les derni\xE8res actus

Envelop \u25B6
-->
`,title:"Historique de l'\xE9cosyst\xE8me",level:1,content:`# Historique de l'\xE9cosyst\xE8me

<p class="text-center !mt-15">
  <img src="/frise.png" class="inline">
</p>`,frontmatter:{},note:`- Yoga v1, petit projet oss (file upload, subscriptions, playground)
 - h\xE9sit\xE9, mais Apollo v2 arriv\xE9, migr\xE9 dessus
 - Yoga v1 maintenu pendant un temps, fini par mourir...
 - 2020...
 - Apollo v3, pas migr\xE9, manque temps, feature en moins...
 - d\xE9but 2022 arriv\xE9 yoga v2, nouvelle alternative Apollo...
 - pour les derni\xE8res actus

Envelop \u25B6`,index:5,start:191,end:210,notesHTML:`<ul>
<li>Yoga v1, petit projet oss (file upload, subscriptions, playground)</li>
<li>h\xE9sit\xE9, mais Apollo v2 arriv\xE9, migr\xE9 dessus</li>
<li>Yoga v1 maintenu pendant un temps, fini par mourir...</li>
<li>2020...</li>
<li>Apollo v3, pas migr\xE9, manque temps, feature en moins...</li>
<li>d\xE9but 2022 arriv\xE9 yoga v2, nouvelle alternative Apollo...</li>
<li>pour les derni\xE8res actus</li>
</ul>
<p>Envelop \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:K0,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

 - D\xE9marr\xE9 d\xE9but 2021
 - Syst\xE8me de plugins pour GraphQL
 - *Framework agnostic*

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - envelop yoga m\xEAme cr\xE9ateurs
 - 1\xE8re release majeur en juillet m\xEAme ann\xE9e
 - plugins utilisables avec nimp quel fmk gql
 - n'imp quel sch\xE9ma, qque soit mani\xE8re \xE9crire (schema first...)
 - m'imp quel fmk http, ne conna\xEEt pas http
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

 - D\xE9marr\xE9 d\xE9but 2021
 - Syst\xE8me de plugins pour GraphQL
 - *Framework agnostic*

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},note:`- envelop yoga m\xEAme cr\xE9ateurs
 - 1\xE8re release majeur en juillet m\xEAme ann\xE9e
 - plugins utilisables avec nimp quel fmk gql
 - n'imp quel sch\xE9ma, qque soit mani\xE8re \xE9crire (schema first...)
 - m'imp quel fmk http, ne conna\xEEt pas http`,index:6,start:210,end:234,notesHTML:`<ul>
<li>envelop yoga m\xEAme cr\xE9ateurs</li>
<li>1\xE8re release majeur en juillet m\xEAme ann\xE9e</li>
<li>plugins utilisables avec nimp quel fmk gql</li>
<li>n'imp quel sch\xE9ma, qque soit mani\xE8re \xE9crire (schema first...)</li>
<li>m'imp quel fmk http, ne conna\xEEt pas http</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:X0,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

<p class="text-center">
  <img src="/schema-envelop.png" class="inline w-130">
</p>

<!--
 - pas un moteur graphql
 - wrap pipeline execution
 - permet plugins hook diff\xE9rentes phases
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop

<p class="text-center">
  <img src="/schema-envelop.png" class="inline w-130">
</p>`,frontmatter:{},note:`- pas un moteur graphql
 - wrap pipeline execution
 - permet plugins hook diff\xE9rentes phases`,index:7,start:235,end:248,notesHTML:`<ul>
<li>pas un moteur graphql</li>
<li>wrap pipeline execution</li>
<li>permet plugins hook diff\xE9rentes phases</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:s3,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-hub.png" class="inline w-180 shadow-lg">
</p>

<!--
On peut \xE9galement nous m\xEAme construire plugins \u25B6
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-hub.png" class="inline w-180 shadow-lg">
</p>`,frontmatter:{},note:"On peut \xE9galement nous m\xEAme construire plugins \u25B6",index:8,start:249,end:260,notesHTML:`<p>On peut \xE9galement nous m\xEAme construire plugins \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:a3,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-lifecycle.png" class="inline w-200">
</p>

<!--
 - onPluginInit : Cr\xE9er plugins \xE0 partir autres plugins
 - onSchemaChange : pr\xE9venu si change de sch\xE9ma
 - trio onParse, onValidate, onExecute/onSubscribe
 - onEnveloped : initialisation du pipeline
 - onContext : Construction du contexte
 - useExtendedValidation : validation plus pouss\xE9e appuyant sur contexte

comment construire serveur avec envelop?

exemple volontairement sans fmk avec node http \u25B6
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Plugins

<p class="text-center">
  <img src="/envelop-lifecycle.png" class="inline w-200">
</p>`,frontmatter:{},note:`- onPluginInit : Cr\xE9er plugins \xE0 partir autres plugins
 - onSchemaChange : pr\xE9venu si change de sch\xE9ma
 - trio onParse, onValidate, onExecute/onSubscribe
 - onEnveloped : initialisation du pipeline
 - onContext : Construction du contexte
 - useExtendedValidation : validation plus pouss\xE9e appuyant sur contexte

comment construire serveur avec envelop?

exemple volontairement sans fmk avec node http \u25B6`,index:9,start:261,end:281,notesHTML:`<ul>
<li>onPluginInit : Cr\xE9er plugins \xE0 partir autres plugins</li>
<li>onSchemaChange : pr\xE9venu si change de sch\xE9ma</li>
<li>trio onParse, onValidate, onExecute/onSubscribe</li>
<li>onEnveloped : initialisation du pipeline</li>
<li>onContext : Construction du contexte</li>
<li>useExtendedValidation : validation plus pouss\xE9e appuyant sur contexte</li>
</ul>
<p>comment construire serveur avec envelop?</p>
<p>exemple volontairement sans fmk avec node http \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:u3,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
import * as GraphQLJS from 'graphql'
import { envelop, useEngine, useSchema } from '@envelop/core'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { schema } from './schema
 
export const getEnveloped = envelop({
  plugins: [
    useEngine(GraphQLJS),
    useSchema(schema),
    useParserCache(),
    useValidationCache()
  ]
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
d\xE9but relativement simple

getEnveloped permet cr\xE9er pipeline ex\xE9cution \u25B6
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
import * as GraphQLJS from 'graphql'
import { envelop, useEngine, useSchema } from '@envelop/core'
import { useParserCache } from '@envelop/parser-cache'
import { useValidationCache } from '@envelop/validation-cache'
import { schema } from './schema
 
export const getEnveloped = envelop({
  plugins: [
    useEngine(GraphQLJS),
    useSchema(schema),
    useParserCache(),
    useValidationCache()
  ]
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`d\xE9but relativement simple

getEnveloped permet cr\xE9er pipeline ex\xE9cution \u25B6`,index:10,start:282,end:314,notesHTML:`<p>d\xE9but relativement simple</p>
<p>getEnveloped permet cr\xE9er pipeline ex\xE9cution \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:h3,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
import { createServer } from 'node:http'
import { GraphQLError } from 'graphql'
import { getEnveloped } from './envelop'
 
const httpServer = createServer(async (req, res) => {
  const initialContext = { req }

  const {
    parse,
    validate,
    contextFactory,
    execute,
    schema,
  } = getEnveloped(initialContext)

  // ...
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
 - Renvoie 4 fonctions d\xE9rouler ex\xE9cution pipeline
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
import { createServer } from 'node:http'
import { GraphQLError } from 'graphql'
import { getEnveloped } from './envelop'
 
const httpServer = createServer(async (req, res) => {
  const initialContext = { req }

  const {
    parse,
    validate,
    contextFactory,
    execute,
    schema,
  } = getEnveloped(initialContext)

  // ...
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:"- Renvoie 4 fonctions d\xE9rouler ex\xE9cution pipeline",index:11,start:315,end:348,notesHTML:`<ul>
<li>Renvoie 4 fonctions d\xE9rouler ex\xE9cution pipeline</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:_3,meta:{slide:{raw:`
# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
const { query, variables } = JSON.parse(req.body)
const document = parse(query)
const validationErrors = validate(schema, document)

if (validationErrors.length > 0) {
  return res.end(JSON.stringify({ errors: validationErrors }))
}

const contextValue = await contextFactory()
const result = await execute({
  document,
  schema,
  variableValues: variables,
  contextValue,
})

res.end(JSON.stringify(result))
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
Et encore j'ai enlev\xE9 du code...

Trop bas niveau -> enter Yoga \u25B6
-->
`,title:'<img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur',level:1,content:`# <img src="/envelop.svg" class="inline mr-2 w-12"> GraphQL Envelop - Construire un serveur

\`\`\`js
const { query, variables } = JSON.parse(req.body)
const document = parse(query)
const validationErrors = validate(schema, document)

if (validationErrors.length > 0) {
  return res.end(JSON.stringify({ errors: validationErrors }))
}

const contextValue = await contextFactory()
const result = await execute({
  document,
  schema,
  variableValues: variables,
  contextValue,
})

res.end(JSON.stringify(result))
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`Et encore j'ai enlev\xE9 du code...

Trop bas niveau -> enter Yoga \u25B6`,index:12,start:349,end:384,notesHTML:`<p>Et encore j'ai enlev\xE9 du code...</p>
<p>Trop bas niveau -&gt; enter Yoga \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:D3,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

 - D\xE9marr\xE9 d\xE9but 2022
 - Serveur GraphQL *fully featured*
 - Extensible
 - Facile \xE0 mettre en place

<style>
ul {
  font-size: 140%;
}
</style>

<!--
 - Lien Yoga v1
 - 1\xE8re majeure fin mars
 - actuellement v3 en beta
 - Fully featured
 - Subscriptions out of the box
 - Upload de fichier (sans ajout d\xE9pendance)
 - Playground
 - Facile \xE0 mettre en place
 - Extensible (envelop)
 - pas adh\xE9rence fmk http
 - tt type env (Deno, lambdas aws, workers cloudfare, SSR Next.js)
-->
`,title:'<img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga',level:1,content:`# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

 - D\xE9marr\xE9 d\xE9but 2022
 - Serveur GraphQL *fully featured*
 - Extensible
 - Facile \xE0 mettre en place

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},note:`- Lien Yoga v1
 - 1\xE8re majeure fin mars
 - actuellement v3 en beta
 - Fully featured
 - Subscriptions out of the box
 - Upload de fichier (sans ajout d\xE9pendance)
 - Playground
 - Facile \xE0 mettre en place
 - Extensible (envelop)
 - pas adh\xE9rence fmk http
 - tt type env (Deno, lambdas aws, workers cloudfare, SSR Next.js)`,index:13,start:384,end:415,notesHTML:`<ul>
<li>Lien Yoga v1</li>
<li>1\xE8re majeure fin mars</li>
<li>actuellement v3 en beta</li>
<li>Fully featured</li>
<li>Subscriptions out of the box</li>
<li>Upload de fichier (sans ajout d\xE9pendance)</li>
<li>Playground</li>
<li>Facile \xE0 mettre en place</li>
<li>Extensible (envelop)</li>
<li>pas adh\xE9rence fmk http</li>
<li>tt type env (Deno, lambdas aws, workers cloudfare, SSR Next.js)</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:w3,meta:{slide:{raw:`
# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

\`\`\`js
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { useGraphQlJit } from '@envelop/graphql-jit'
import { schema } from './schema'

const yoga = createYoga({
  schema,
  plugins: [useGraphQlJit()],
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
Alors on en revient \xE0 mon projet.

Bien gentil de d\xE9marrer un petit serveur Yoga pour faire mumuse.

J'ai eu envie de voir si je pouvais utiliser Yoga sur un vrai projet.

Alors je me suis dit c'est d\xE9cid\xE9 \u25B6
-->
`,title:'<img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga',level:1,content:`# <img src="/yoga.svg" class="inline mr-2 w-12"> GraphQL Yoga

\`\`\`js
import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { useGraphQlJit } from '@envelop/graphql-jit'
import { schema } from './schema'

const yoga = createYoga({
  schema,
  plugins: [useGraphQlJit()],
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`Alors on en revient \xE0 mon projet.

Bien gentil de d\xE9marrer un petit serveur Yoga pour faire mumuse.

J'ai eu envie de voir si je pouvais utiliser Yoga sur un vrai projet.

Alors je me suis dit c'est d\xE9cid\xE9 \u25B6`,index:14,start:416,end:453,notesHTML:`<p>Alors on en revient \xE0 mon projet.</p>
<p>Bien gentil de d\xE9marrer un petit serveur Yoga pour faire mumuse.</p>
<p>J'ai eu envie de voir si je pouvais utiliser Yoga sur un vrai projet.</p>
<p>Alors je me suis dit c'est d\xE9cid\xE9 \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:$3,meta:{layout:"fact",class:"background-clouds",slide:{raw:`---
layout: fact
class: background-clouds
---

# Je largue<br>Apollo Server !

<!--
Alors tr\xE8s bien, je vais dans la doc... je cherche...

Oui il y a une page migration depuis Apollo Server.

On me montre comment remplacer ApolloServer par Yoga.
-->
`,title:"Je largue<br>Apollo Server !",level:1,content:"# Je largue<br>Apollo Server !",frontmatter:{layout:"fact",class:"background-clouds"},note:`Alors tr\xE8s bien, je vais dans la doc... je cherche...

Oui il y a une page migration depuis Apollo Server.

On me montre comment remplacer ApolloServer par Yoga.`,index:15,start:453,end:468,notesHTML:`<p>Alors tr\xE8s bien, je vais dans la doc... je cherche...</p>
<p>Oui il y a une page migration depuis Apollo Server.</p>
<p>On me montre comment remplacer ApolloServer par Yoga.</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:L3,meta:{slide:{raw:`
# La migration (sur le papier)

\`\`\`diff
- import { ApolloServer } from 'apollo-server'
+ import { createServer } from 'node:http'
+ import { createYoga } from 'graphql-yoga'
+ import { useApolloServerErrors } from '@envelop/apollo-server-errors'
  import { schema } from './schema'
 
- const server = new ApolloServer({
+ const yoga = createYoga({
    schema,
+   plugins: [useApolloServerErrors()],
  })
 
+ const server = createServer(yoga)
 
  server.listen(4000)
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
Pr\xE9sent\xE9 comme \xE7a, semble pas compliqu\xE9

...

On me propose \xE9galement des solutions, si j'ai une int\xE9gration...

Tombe bien, on utilise du Koa...

D'accord, mais moi avec mon projet qui a 5 ans d'existence...
-->
`,title:"La migration (sur le papier)",level:1,content:`# La migration (sur le papier)

\`\`\`diff
- import { ApolloServer } from 'apollo-server'
+ import { createServer } from 'node:http'
+ import { createYoga } from 'graphql-yoga'
+ import { useApolloServerErrors } from '@envelop/apollo-server-errors'
  import { schema } from './schema'
 
- const server = new ApolloServer({
+ const yoga = createYoga({
    schema,
+   plugins: [useApolloServerErrors()],
  })
 
+ const server = createServer(yoga)
 
  server.listen(4000)
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`Pr\xE9sent\xE9 comme \xE7a, semble pas compliqu\xE9

...

On me propose \xE9galement des solutions, si j'ai une int\xE9gration...

Tombe bien, on utilise du Koa...

D'accord, mais moi avec mon projet qui a 5 ans d'existence...`,index:16,start:469,end:508,notesHTML:`<p>Pr\xE9sent\xE9 comme \xE7a, semble pas compliqu\xE9</p>
<p>...</p>
<p>On me propose \xE9galement des solutions, si j'ai une int\xE9gration...</p>
<p>Tombe bien, on utilise du Koa...</p>
<p>D'accord, mais moi avec mon projet qui a 5 ans d'existence...</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:q3,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs ?
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"La vraie migration",level:1,content:`# La vraie migration

<div v-click-hide>

 - Directives customs ?
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:17,start:508,end:538,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:z3,meta:{slide:{raw:`
# Directives customs - Authentification

\`\`\`graphql {|1|3|4}
type Query @permission(permissions: "base") {
  #...
  users(filter: UserFilter): [User!]! @permission(permissions: "admin")
  version: String! @public
  #...
}

directive @permission(
  permissions: [String!]!
) on OBJECT | FIELD_DEFINITION

directive @public on FIELD_DEFINITION
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
\u25B6\u25B6\u25B6

Pour faire fonctionner ces directives s'appuit sur graphql tools \u25B6
-->
`,title:"Directives customs - Authentification",level:1,content:`# Directives customs - Authentification

\`\`\`graphql {|1|3|4}
type Query @permission(permissions: "base") {
  #...
  users(filter: UserFilter): [User!]! @permission(permissions: "admin")
  version: String! @public
  #...
}

directive @permission(
  permissions: [String!]!
) on OBJECT | FIELD_DEFINITION

directive @public on FIELD_DEFINITION
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`\u25B6\u25B6\u25B6

Pour faire fonctionner ces directives s'appuit sur graphql tools \u25B6`,index:18,start:539,end:569,notesHTML:`<p>\u25B6\u25B6\u25B6</p>
<p>Pour faire fonctionner ces directives s'appuit sur graphql tools \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:W3,meta:{slide:{raw:`
# Directives customs - Authentification

Impl\xE9ment\xE9es gr\xE2ce \xE0 \`mapSchema\` (anciennement \`SchemaDirectiveVisitor\`) de **GraphQL Tools**

\`\`\`js {|12-18}
mapSchema(schema, {
  [MapperKind.OBJECT_TYPE]: (type) => {
    const directive = getDirective(schema, type, 'permission')?.[0]
    // ...
  },
  [MapperKind.FIELD]: (field, fieldName) => {
    const directive = getDirective(schema, field, 'permissions')?.[0]
    if (!directive) return undefined

    const { permissions } = directive

    return { ...field, resolve: (parent, args, context, info) => {
      const user = context.user

      // V\xE9rification des permissions...

      return field.resolve(parent, args, context, info)
    } }
  },
})
\`\`\`

<style>
.slidev-code code {
  font-size: 130%;
}
</style>

<!--
 - User r\xE9solu au pr\xE9alable dans fonction de contexte
 - Mal ais\xE9
 - D\xE9faut : V\xE9rification au moment de l'ex\xE9cution du resolver
-->
`,title:"Directives customs - Authentification",level:1,content:`# Directives customs - Authentification

Impl\xE9ment\xE9es gr\xE2ce \xE0 \`mapSchema\` (anciennement \`SchemaDirectiveVisitor\`) de **GraphQL Tools**

\`\`\`js {|12-18}
mapSchema(schema, {
  [MapperKind.OBJECT_TYPE]: (type) => {
    const directive = getDirective(schema, type, 'permission')?.[0]
    // ...
  },
  [MapperKind.FIELD]: (field, fieldName) => {
    const directive = getDirective(schema, field, 'permissions')?.[0]
    if (!directive) return undefined

    const { permissions } = directive

    return { ...field, resolve: (parent, args, context, info) => {
      const user = context.user

      // V\xE9rification des permissions...

      return field.resolve(parent, args, context, info)
    } }
  },
})
\`\`\`

<style>
.slidev-code code {
  font-size: 130%;
}
</style>`,frontmatter:{},note:`- User r\xE9solu au pr\xE9alable dans fonction de contexte
 - Mal ais\xE9
 - D\xE9faut : V\xE9rification au moment de l'ex\xE9cution du resolver`,index:19,start:570,end:610,notesHTML:`<ul>
<li>User r\xE9solu au pr\xE9alable dans fonction de contexte</li>
<li>Mal ais\xE9</li>
<li>D\xE9faut : V\xE9rification au moment de l'ex\xE9cution du resolver</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:nA,meta:{slide:{raw:`
# Plugin envelop \`useGenericAuth\`

<p class="text-center">
  <img src="/useGenericAuth.png" class="inline w-180">
</p>

 - \`resolveUserFn\` : Fonction de r\xE9solution de l'utilisateur
 - \`validateUser\` : Fonction de validation *custom*

<style>
ul {
  font-size: 120%;
}
</style>

<!--
 - diff\xE9rents mode fonctionnement
 - protect-granular
-->
`,title:"Plugin envelop `useGenericAuth`",level:1,content:`# Plugin envelop \`useGenericAuth\`

<p class="text-center">
  <img src="/useGenericAuth.png" class="inline w-180">
</p>

 - \`resolveUserFn\` : Fonction de r\xE9solution de l'utilisateur
 - \`validateUser\` : Fonction de validation *custom*

<style>
ul {
  font-size: 120%;
}
</style>`,frontmatter:{},note:`- diff\xE9rents mode fonctionnement
 - protect-granular`,index:20,start:611,end:632,notesHTML:`<ul>
<li>diff\xE9rents mode fonctionnement</li>
<li>protect-granular</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:lA,meta:{slide:{raw:`
# Plugin envelop \`useGenericAuth\`

\`\`\`js {|11-14|16-19}
export function addAuthExtension(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_TYPE]: (type) => {
      // ...
    },
    [MapperKind.OBJECT_FIELD]: (field, fieldName, typeName) => {
      const directive = getDirective(schema, field, 'permission')?.[0]
      const publicDirective = getDirective(schema, field, 'public')?.[0]
      if (!directive && !publicDirective) return undefined

      if (publicDirective) {
        const { permissions, ...extensions } = field.extensions
        return { ...field, extensions }
      }

      return {
        ...field,
        extensions: { ...field.extensions, permissions: directive.permissions },
      }
    },
  })
}
\`\`\`

<!--
Configurer le plugin useGenericAuth \u25B6
-->
`,title:"Plugin envelop `useGenericAuth`",level:1,content:`# Plugin envelop \`useGenericAuth\`

\`\`\`js {|11-14|16-19}
export function addAuthExtension(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_TYPE]: (type) => {
      // ...
    },
    [MapperKind.OBJECT_FIELD]: (field, fieldName, typeName) => {
      const directive = getDirective(schema, field, 'permission')?.[0]
      const publicDirective = getDirective(schema, field, 'public')?.[0]
      if (!directive && !publicDirective) return undefined

      if (publicDirective) {
        const { permissions, ...extensions } = field.extensions
        return { ...field, extensions }
      }

      return {
        ...field,
        extensions: { ...field.extensions, permissions: directive.permissions },
      }
    },
  })
}
\`\`\``,frontmatter:{},note:"Configurer le plugin useGenericAuth \u25B6",index:21,start:633,end:665,notesHTML:`<p>Configurer le plugin useGenericAuth \u25B6</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:gA,meta:{slide:{raw:`
# Plugin envelop \`useGenericAuth\`

<p class="text-center !mt-0" v-click-hide>
  <img src="/useCustomAuth-1.png" class="inline w-180">
</p>

<p class="text-center !mt-0" v-after>
  <img src="/useCustomAuth-2.png" class="inline w-180">
</p>

<div v-click>

\`\`\`js
const yoga = createYoga({
  schema: addAuthExtension(schema),
  plugins: [useCustomAuth()],
})
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>

<!--
fais une erreur

...

et voil\xE0 j'ai maintenant la v\xE9rif mon authent qui se fait au moment validation \xE9tentue
-->
`,title:"Plugin envelop `useGenericAuth`",level:1,content:`# Plugin envelop \`useGenericAuth\`

<p class="text-center !mt-0" v-click-hide>
  <img src="/useCustomAuth-1.png" class="inline w-180">
</p>

<p class="text-center !mt-0" v-after>
  <img src="/useCustomAuth-2.png" class="inline w-180">
</p>

<div v-click>

\`\`\`js
const yoga = createYoga({
  schema: addAuthExtension(schema),
  plugins: [useCustomAuth()],
})
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},note:`fais une erreur

...

et voil\xE0 j'ai maintenant la v\xE9rif mon authent qui se fait au moment validation \xE9tentue`,index:22,start:666,end:702,notesHTML:`<p>fais une erreur</p>
<p>...</p>
<p>et voil\xE0 j'ai maintenant la v\xE9rif mon authent qui se fait au moment validation \xE9tentue</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:BA,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# La vraie migration

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"La vraie migration",level:1,content:`# La vraie migration

 - **Directives customs ?**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:23,start:702,end:719,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:EA,meta:{slide:{raw:`
# Directives customs - CRUD

\`\`\`graphql
type Query {
  # ...
  pathway(id: Int!): Pathway @crud(name: "pathways", operation: "get", args: ":id")
  #...
}

type Pathway {
  # ...
  units: [Unit!]! @crud(name: "units", operation: "find", args: "{ pathwayId: ':parent.id' }")
  #...
}

directive @crud(
  name: String!
  operation: String!
  args: [String!]
) on FIELD_DEFINITION
\`\`\`

<style>
.slidev-code code {
  font-size: 120%;
}
</style>
`,title:"Directives customs - CRUD",level:1,content:`# Directives customs - CRUD

\`\`\`graphql
type Query {
  # ...
  pathway(id: Int!): Pathway @crud(name: "pathways", operation: "get", args: ":id")
  #...
}

type Pathway {
  # ...
  units: [Unit!]! @crud(name: "units", operation: "find", args: "{ pathwayId: ':parent.id' }")
  #...
}

directive @crud(
  name: String!
  operation: String!
  args: [String!]
) on FIELD_DEFINITION
\`\`\`

<style>
.slidev-code code {
  font-size: 120%;
}
</style>`,frontmatter:{},index:24,start:720,end:749,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:$A,meta:{slide:{raw:`
# Directives customs - CRUD

\`\`\`js
export function addCrudResolvers(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (field, fieldName) => {
      const directive = getDirective(schema, field, 'crud')?.[0]
      if (!directive) return undefined

      const { name, operation, args: crudArgs } = directive
      return { ...field, resolve: (parent, args, context) => {
        // impl\xE9mentation...
      } }
    },
  })
}
\`\`\`

<div class="mt-6" v-click>

\`\`\`js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
})
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 130%;
}
</style>
`,title:"Directives customs - CRUD",level:1,content:`# Directives customs - CRUD

\`\`\`js
export function addCrudResolvers(schema) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (field, fieldName) => {
      const directive = getDirective(schema, field, 'crud')?.[0]
      if (!directive) return undefined

      const { name, operation, args: crudArgs } = directive
      return { ...field, resolve: (parent, args, context) => {
        // impl\xE9mentation...
      } }
    },
  })
}
\`\`\`

<div class="mt-6" v-click>

\`\`\`js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
})
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 130%;
}
</style>`,frontmatter:{},index:25,start:750,end:788,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:MA,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - **Directives customs \u{1F5F8}**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - **Subscriptions ?**
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"La vraie migration",level:1,content:`# La vraie migration

<div v-click-hide>

 - **Directives customs \u{1F5F8}**
 - Subscriptions ?
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - **Subscriptions ?**
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:26,start:788,end:818,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:qA,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# Subscriptions - Quel protocole ?

 - WebSockets
 - Server-Sent Events (SSE)

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"Subscriptions - Quel protocole ?",level:1,content:`# Subscriptions - Quel protocole ?

 - WebSockets
 - Server-Sent Events (SSE)

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:27,start:818,end:833,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:zA,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# Subscriptions - Yoga

 - Uniquement SSE par d\xE9faut (http/2 recommand\xE9)
 - Web Sockets possible avec \`graphql-ws\`

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"Subscriptions - Yoga",level:1,content:`# Subscriptions - Yoga

 - Uniquement SSE par d\xE9faut (http/2 recommand\xE9)
 - Web Sockets possible avec \`graphql-ws\`

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:28,start:833,end:848,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:KA,meta:{slide:{raw:`
# Subscriptions - PubSub

<p class="text-center">
  <img src="/pubSub.png" class="inline w-180">
</p>
`,title:"Subscriptions - PubSub",level:1,content:`# Subscriptions - PubSub

<p class="text-center">
  <img src="/pubSub.png" class="inline w-180">
</p>`,frontmatter:{},index:29,start:849,end:856,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:tB,meta:{slide:{raw:`
# Subscriptions - PubSub

\`\`\`diff
- import { PubSub } from 'apollo-server'
+ import { createPubSub } from 'graphql-yoga'

- export const pubSub = new PubSub()
+ export const pubSub = createPubSub()
\`\`\`

<div class="mt-6">

\`\`\`js
const Mutation = {
  //...
  async generateBill(parent, { id }, context) {
    // \xC7a prend du temps...

    pubSub.publish('GENERATED_BILL', { generatedBill: { id } })
  },
  //...
}
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>
`,title:"Subscriptions - PubSub",level:1,content:`# Subscriptions - PubSub

\`\`\`diff
- import { PubSub } from 'apollo-server'
+ import { createPubSub } from 'graphql-yoga'

- export const pubSub = new PubSub()
+ export const pubSub = createPubSub()
\`\`\`

<div class="mt-6">

\`\`\`js
const Mutation = {
  //...
  async generateBill(parent, { id }, context) {
    // \xC7a prend du temps...

    pubSub.publish('GENERATED_BILL', { generatedBill: { id } })
  },
  //...
}
\`\`\`

</div>

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},index:30,start:857,end:890,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:lB,meta:{slide:{raw:`
# Subscriptions - PubSub

\`\`\`diff
- import { withFilter } from 'apollo-server'
+ import { pipe, filter } from 'graphql-yoga'

  const Subscription = {
    generatedBill: {
-     subscribe: withFilter(
-       () => pubSub.asyncIterator('GENERATED_BILL'),
-       (payload, variables) => payload.generatedBill.id === variables.id,
-     ),
+     subscribe: pipe(
+       pubSub.subscribe('GENERATED_BILL'),
+       filter(
+         (payload, variables) => payload.generatedBill.id === variables.id,
+       ),
+     ),
    },
  }
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>
`,title:"Subscriptions - PubSub",level:1,content:`# Subscriptions - PubSub

\`\`\`diff
- import { withFilter } from 'apollo-server'
+ import { pipe, filter } from 'graphql-yoga'

  const Subscription = {
    generatedBill: {
-     subscribe: withFilter(
-       () => pubSub.asyncIterator('GENERATED_BILL'),
-       (payload, variables) => payload.generatedBill.id === variables.id,
-     ),
+     subscribe: pipe(
+       pubSub.subscribe('GENERATED_BILL'),
+       filter(
+         (payload, variables) => payload.generatedBill.id === variables.id,
+       ),
+     ),
    },
  }
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},index:31,start:891,end:920,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:uB,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs \u{1F5F8}
 - **Subscriptions \u{1F5F8}**
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - **Batching HTTP ?**
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"La vraie migration",level:1,content:`# La vraie migration

<div v-click-hide>

 - Directives customs \u{1F5F8}
 - **Subscriptions \u{1F5F8}**
 - Batching HTTP ?
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - **Batching HTTP ?**
 - Resolvers g\xE9n\xE9ratrices ?!

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:32,start:920,end:950,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:hB,meta:{slide:{raw:`
# Batching HTTP

<p class="text-center">
  <img src="/batch-1.png" class="inline w-100">
</p>
`,title:"Batching HTTP",level:1,content:`# Batching HTTP

<p class="text-center">
  <img src="/batch-1.png" class="inline w-100">
</p>`,frontmatter:{},index:33,start:951,end:958,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:_B,meta:{slide:{raw:`
# Batching HTTP

<p class="text-center">
  <img src="/batch-2.png" class="inline w-100">
</p>
`,title:"Batching HTTP",level:1,content:`# Batching HTTP

<p class="text-center">
  <img src="/batch-2.png" class="inline w-100">
</p>`,frontmatter:{},index:34,start:959,end:966,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:EB,meta:{slide:{raw:`
# Batching HTTP Yoga

 - **\xC0 partir de Yoga v3**
 - Compatible avec le Batching HTTP Link de Apollo Client

<div class="mt-6">

\`\`\`js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
\`\`\`

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>
`,title:"Batching HTTP Yoga",level:1,content:`# Batching HTTP Yoga

 - **\xC0 partir de Yoga v3**
 - Compatible avec le Batching HTTP Link de Apollo Client

<div class="mt-6">

\`\`\`js
const yoga = createYoga({
  schema: addCrudResolvers(addAuthExtension(schema)),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
\`\`\`

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>`,frontmatter:{},index:35,start:967,end:993,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:$B,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# La vraie migration

<div v-click-hide>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - **Batching HTTP \u{1F5F8}**
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - Batching HTTP \u{1F5F8}
 - **Resolvers g\xE9n\xE9ratrices ?!**

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"La vraie migration",level:1,content:`# La vraie migration

<div v-click-hide>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - **Batching HTTP \u{1F5F8}**
 - Resolvers g\xE9n\xE9ratrices ?!

</div>

<v-after>

 - Directives customs \u{1F5F8}
 - Subscriptions \u{1F5F8}
 - Batching HTTP \u{1F5F8}
 - **Resolvers g\xE9n\xE9ratrices ?!**

</v-after>

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:36,start:993,end:1023,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:LB,meta:{slide:{raw:`
# Resolvers g\xE9n\xE9ratrices ?!

\`\`\`js
const Query = {
  // ...
  * student(_, { id }) {
    return yield crud.students.get(id)
  }
  // ...
}

const Mutation = {
  // ...
  * updateStudent(_, { studentInput }) {
    return yield crud.students.update(studentInput)
  }
  // ...
}
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>
`,title:"Resolvers g\xE9n\xE9ratrices ?!",level:1,content:`# Resolvers g\xE9n\xE9ratrices ?!

\`\`\`js
const Query = {
  // ...
  * student(_, { id }) {
    return yield crud.students.get(id)
  }
  // ...
}

const Mutation = {
  // ...
  * updateStudent(_, { studentInput }) {
    return yield crud.students.update(studentInput)
  }
  // ...
}
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},index:37,start:1024,end:1051,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:qB,meta:{slide:{raw:`
# Resolvers g\xE9n\xE9ratrices ?!

 - D\xE9duplication
 - Batching
 - Gestion du pool et des transactions Postgres

<div v-click class="mt-6">

\`\`\`js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
\`\`\`

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>

<!--
 - Zoom sur postgres
-->
`,title:"Resolvers g\xE9n\xE9ratrices ?!",level:1,content:`# Resolvers g\xE9n\xE9ratrices ?!

 - D\xE9duplication
 - Batching
 - Gestion du pool et des transactions Postgres

<div v-click class="mt-6">

\`\`\`js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
  ],
  batching: true,
})
\`\`\`

</div>

<style>
.slidev-code code, ul {
  font-size: 140%;
}
</style>`,frontmatter:{},note:"- Zoom sur postgres",index:38,start:1052,end:1083,notesHTML:`<ul>
<li>Zoom sur postgres</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:zB,meta:{slide:{raw:`
# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-1.png" class="inline w-150">
</p>
`,title:"Gestion du pool et des transactions Postgres",level:1,content:`# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-1.png" class="inline w-150">
</p>`,frontmatter:{},index:39,start:1084,end:1091,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:KB,meta:{slide:{raw:`
# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-2.png" class="inline w-150">
</p>
`,title:"Gestion du pool et des transactions Postgres",level:1,content:`# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/postgres-2.png" class="inline w-150">
</p>`,frontmatter:{},index:40,start:1092,end:1099,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:XB,meta:{slide:{raw:`
# Plugins Yoga

\`\`\`ts
export type Plugin = EnvelopPlugin & {
  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onRequest?: OnRequestHook<TServerContext>

  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onResponse?: OnResponseHook<TServerContext>
}
\`\`\`

<style>
.slidev-code code {
  font-size: 120%;
}
</style>
`,title:"Plugins Yoga",level:1,content:`# Plugins Yoga

\`\`\`ts
export type Plugin = EnvelopPlugin & {
  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onRequest?: OnRequestHook<TServerContext>

  /**
   * Use this hook with your own risk. It is still experimental and may change in the future.
   * @internal
   */
  onResponse?: OnResponseHook<TServerContext>
}
\`\`\`

<style>
.slidev-code code {
  font-size: 120%;
}
</style>`,frontmatter:{},index:41,start:1100,end:1125,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:sb,meta:{slide:{raw:`
# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/usePostgres.png" class="inline w-200">
</p>
`,title:"Gestion du pool et des transactions Postgres",level:1,content:`# Gestion du pool et des transactions Postgres

<p class="text-center">
  <img src="/usePostgres.png" class="inline w-200">
</p>`,frontmatter:{},index:42,start:1126,end:1133,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:ab,meta:{slide:{raw:`
# Gestion du pool et des transactions Postgres

\`\`\`js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
    usePostgres(),
  ],
  batching: true,
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>
`,title:"Gestion du pool et des transactions Postgres",level:1,content:`# Gestion du pool et des transactions Postgres

\`\`\`js
const yoga = createYoga({
  schema: wrapGeneratorResolvers(addCrudResolvers(addAuthExtension(schema))),
  plugins: [
    useCustomAuth(),
    usePostgres(),
  ],
  batching: true,
})
\`\`\`

<style>
.slidev-code code {
  font-size: 140%;
}
</style>`,frontmatter:{},index:43,start:1134,end:1154,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:ib,meta:{layout:"fact",class:"background-clouds",slide:{raw:`---
layout: fact
class: background-clouds
---

# Migration r\xE9ussie ?

<!--
 - Dans cadre projet, migration r\xE9ussie
 - encore un WIP, pas parfait
   - subscriptions, sse pour cloud
   - pour le reste OK
   - m\xEAme niveau fonctionnalit\xE9
   - transparent frontend
 - appr\xE9ci\xE9 appuyer plugins et cycle de vie (authent, )
 - b\xE9mol: m'attendais \xE0 extension sch\xE9ma
 - Pas encore viable pour un gros projet ayant besoin de stabilit\xE9
 - Yoga et Envelop vont encore \xE9voluer \xE9norm\xE9ment, PROMETTEUR
 - Bien pour un projet de taille petite/moyenne ou on veut essayer des choses
-->
`,title:"Migration r\xE9ussie ?",level:1,content:"# Migration r\xE9ussie ?",frontmatter:{layout:"fact",class:"background-clouds"},note:`- Dans cadre projet, migration r\xE9ussie
 - encore un WIP, pas parfait
   - subscriptions, sse pour cloud
   - pour le reste OK
   - m\xEAme niveau fonctionnalit\xE9
   - transparent frontend
 - appr\xE9ci\xE9 appuyer plugins et cycle de vie (authent, )
 - b\xE9mol: m'attendais \xE0 extension sch\xE9ma
 - Pas encore viable pour un gros projet ayant besoin de stabilit\xE9
 - Yoga et Envelop vont encore \xE9voluer \xE9norm\xE9ment, PROMETTEUR
 - Bien pour un projet de taille petite/moyenne ou on veut essayer des choses`,index:44,start:1154,end:1175,notesHTML:`<ul>
<li>Dans cadre projet, migration r\xE9ussie</li>
<li>encore un WIP, pas parfait
<ul>
<li>subscriptions, sse pour cloud</li>
<li>pour le reste OK</li>
<li>m\xEAme niveau fonctionnalit\xE9</li>
<li>transparent frontend</li>
</ul>
</li>
<li>appr\xE9ci\xE9 appuyer plugins et cycle de vie (authent, )</li>
<li>b\xE9mol: m'attendais \xE0 extension sch\xE9ma</li>
<li>Pas encore viable pour un gros projet ayant besoin de stabilit\xE9</li>
<li>Yoga et Envelop vont encore \xE9voluer \xE9norm\xE9ment, PROMETTEUR</li>
<li>Bien pour un projet de taille petite/moyenne ou on veut essayer des choses</li>
</ul>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:fb,meta:{layout:"bullets",slide:{raw:`---
layout: bullets
---

# What's next ?

 - Support de \`@defer\` et \`@stream\`
 - Support officiel de Bun !

<style>
ul {
  font-size: 140%;
}
</style>
`,title:"What's next ?",level:1,content:`# What's next ?

 - Support de \`@defer\` et \`@stream\`
 - Support officiel de Bun !

<style>
ul {
  font-size: 140%;
}
</style>`,frontmatter:{layout:"bullets"},index:45,start:1175,end:1190,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:gb,meta:{slide:{raw:`
# The Guild

<p class="text-center">
  <img src="/guild.png" class="inline w-150">
</p>

<!--
groupe de d\xE9veloppeurs opensource
ne construit pas de produit
projets restent la propri\xE9t\xE9 de leur cr\xE9ateur

tire l'\xE9cosyst\xE8me vers le haut
-->
`,title:"The Guild",level:1,content:`# The Guild

<p class="text-center">
  <img src="/guild.png" class="inline w-150">
</p>`,frontmatter:{},note:`groupe de d\xE9veloppeurs opensource
ne construit pas de produit
projets restent la propri\xE9t\xE9 de leur cr\xE9ateur

tire l'\xE9cosyst\xE8me vers le haut`,index:46,start:1191,end:1206,notesHTML:`<p>groupe de d\xE9veloppeurs opensource
ne construit pas de produit
projets restent la propri\xE9t\xE9 de leur cr\xE9ateur</p>
<p>tire l'\xE9cosyst\xE8me vers le haut</p>
`,filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:Bb,meta:{layout:"intro",class:"background-clouds",slide:{raw:`---
layout: intro
class: background-clouds
---

<h1 class="text-center">
  Merci !
</h1>

<p class="text-center !mt-10">
  <img class="inline" src="/qrcode.png">
</p>
`,content:`<h1 class="text-center">
  Merci !
</h1>

<p class="text-center !mt-10">
  <img class="inline" src="/qrcode.png">
</p>`,frontmatter:{layout:"intro",class:"background-clouds"},index:47,start:1206,end:1219,notesHTML:"",filepath:"/home/runner/work/yoga-migration-talk/yoga-migration-talk/ref/slides.md",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",component:O5,meta:{layout:"end"}}],Ge=bb,Db=[{name:"play",path:"/",component:E5,children:[...Ge]},{name:"print",path:"/print",component:F5},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>gs(()=>import("./Presenter.75caf17b.js"),["assets/Presenter.75caf17b.js","assets/Presenter.e29290d2.css","assets/DrawingControls.vue_vue_type_script_setup_true_lang.c074b90e.js"]),beforeEnter:t=>{if(!kn.remote||kn.remote===t.query.password)return!0;if(kn.remote&&t.query.password===void 0){const n=prompt("Enter password");if(kn.remote===n)return!0}return t.params.no?{path:`/${t.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],At=mg({history:P8("/yoga-migration-talk/main/"),routes:Db});function Cb(t,n,{mode:s="replace"}={}){return S({get(){const o=At.currentRoute.value.query[t];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){rt(()=>{At[b(s)]({query:{...At.currentRoute.value.query,[t]:o}})})}})}const Wu=G(0);rt(()=>{At.afterEach(async()=>{await rt(),Wu.value+=1})});const nn=S(()=>At.currentRoute.value),fa=S(()=>nn.value.query.print!==void 0),Eb=S(()=>nn.value.query.print==="clicks"),Kt=S(()=>nn.value.query.embedded!==void 0),Vt=S(()=>nn.value.path.startsWith("/presenter")),Rs=S(()=>fa.value&&!Eb.value),fr=S(()=>nn.value.query.password),xb=S(()=>!Vt.value&&(!be.remote||fr.value===be.remote)),pi=Cb("clicks","0"),Ju=S(()=>Ge.length-1),wb=S(()=>nn.value.path),Ue=S(()=>parseInt(wb.value.split(/\//g).slice(-1)[0])||1);S(()=>cl(Ue.value));const mt=S(()=>Ge.find(t=>t.path===`${Ue.value}`));S(()=>{var t,n,s;return(s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.slide)==null?void 0:s.id});S(()=>{var t,n;return(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.layout});const wl=S(()=>Ge.find(t=>t.path===`${Math.min(Ge.length,Ue.value+1)}`)),kb=S(()=>{var t,n;return Wu.value,((n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.__clicksElements)||[]}),Tt=S({get(){if(Rs.value)return 99999;let t=+(pi.value||0);return isNaN(t)&&(t=0),t},set(t){pi.value=t.toString()}}),No=S(()=>{var t,n,s;return+((s=(n=(t=mt.value)==null?void 0:t.meta)==null?void 0:n.clicks)!=null?s:kb.value.length)}),Sb=S(()=>Ue.value<Ge.length-1||Tt.value<No.value),Fb=S(()=>Ue.value>1||Tt.value>0),$b=S(()=>Ge.filter(t=>{var n,s;return(s=(n=t.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((t,n)=>(ya(t,n),t),[])),Pb=S(()=>ha($b.value,mt.value));S(()=>ma(Pb.value));function fn(){No.value<=Tt.value?Xs():Tt.value+=1}async function yn(){Tt.value<=0?await eo():Tt.value-=1}function cl(t){return Vt.value?`/presenter/${t}`:`/${t}`}function Xs(){const t=Math.min(Ge.length,Ue.value+1);return ds(t)}async function eo(t=!0){const n=Math.max(1,Ue.value-1);await ds(n),t&&No.value&&At.replace({query:{...nn.value.query,clicks:No.value}})}function ds(t,n){return At.push({path:cl(t),query:{...nn.value.query,clicks:n}})}function Ob(t){const n=G(0),{direction:s,distanceX:o,distanceY:l}=s8(t,{onSwipeStart(r){r.pointerType==="touch"&&(Ws.value||(n.value=tr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Ws.value)return;const a=Math.abs(o.value),c=Math.abs(l.value);a/window.innerWidth>.3||a>100?s.value===Zt.LEFT?fn():yn():(c/window.innerHeight>.4||c>200)&&(s.value===Zt.DOWN?eo():Xs())}})}async function yr(){const{saveAs:t}=await gs(()=>import("./FileSaver.min.7f56e709.js").then(n=>n.F),[]);t(Yp(be.download)?be.download:be.exportFilename?`${be.exportFilename}.pdf`:"/yoga-migration-talk/main/slidev-exported.pdf",`${be.title}.pdf`)}async function Tb(t){var n,s;if(t==null){const o=(s=(n=mt.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;t=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(t)}`),!0}function ya(t,n,s=1){var l,r,a,c,i;const o=(r=(l=n.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>s&&t.length>0?ya(t[t.length-1].children,n,s+1):t.push({children:[],level:s,path:n.path,hideInToc:Boolean((a=n.meta)==null?void 0:a.hideInToc),title:(i=(c=n.meta)==null?void 0:c.slide)==null?void 0:i.title})}function ha(t,n,s=!1,o){return t.map(l=>{const r={...l,active:l.path===(n==null?void 0:n.path),hasActiveParent:s};return r.children.length>0&&(r.children=ha(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ma(t,n=1){return t.filter(s=>!s.hideInToc).map(s=>({...s,children:ma(s.children,n+1)}))}function Lb(){const t=be.titleTemplate.replace("%s",be.title||"Slidev");bh({title:t}),Oh(`${t} - shared`),Mh(`${t} - drawings`);function n(){Vt.value&&(fc("page",+Ue.value),fc("clicks",Tt.value))}At.afterEach(n),ue(Tt,n),Th(s=>{(+s.page!=+Ue.value||Tt.value!==s.clicks)&&At.replace({path:cl(s.page),query:{...At.currentRoute.value.query,clicks:s.clicks||0}})})}const Ib=Fe({__name:"App",setup(t){return O(Y),Lb(),(n,s)=>{const o=Fo("RouterView"),l=Fo("StarportCarrier");return B(),H(Se,null,[q(o),q(l)],64)}}});function kl(t){return t!==null&&typeof t=="object"}function hr(t,n,s=".",o){if(!kl(n))return hr(t,{},s,o);const l=Object.assign({},n);for(const r in t){if(r==="__proto__"||r==="constructor")continue;const a=t[r];a!=null&&(o&&o(l,r,a,s)||(Array.isArray(a)&&Array.isArray(l[r])?l[r]=a.concat(l[r]):kl(a)&&kl(l[r])?l[r]=hr(a,l[r],(s?`${s}.`:"")+r.toString(),o):l[r]=a))}return l}function Mb(t){return(...n)=>n.reduce((s,o)=>hr(s,o,"",t),{})}const Rb=Mb(),Zu=1/60*1e3,Nb=typeof performance<"u"?()=>performance.now():()=>Date.now(),Xu=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Nb()),Zu);function jb(t){let n=[],s=[],o=0,l=!1,r=!1;const a=new WeakSet,c={schedule:(i,u=!1,d=!1)=>{const f=d&&l,y=f?n:s;return u&&a.add(i),y.indexOf(i)===-1&&(y.push(i),f&&l&&(o=n.length)),i},cancel:i=>{const u=s.indexOf(i);u!==-1&&s.splice(u,1),a.delete(i)},process:i=>{if(l){r=!0;return}if(l=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let u=0;u<o;u++){const d=n[u];d(i),a.has(d)&&(c.schedule(d),t())}l=!1,r&&(r=!1,c.process(i))}};return c}const qb=40;let mr=!0,to=!1,gr=!1;const rs={delta:0,timestamp:0},lo=["read","update","preRender","render","postRender"],il=lo.reduce((t,n)=>(t[n]=jb(()=>to=!0),t),{}),vr=lo.reduce((t,n)=>{const s=il[n];return t[n]=(o,l=!1,r=!1)=>(to||Yb(),s.schedule(o,l,r)),t},{}),Hb=lo.reduce((t,n)=>(t[n]=il[n].cancel,t),{});lo.reduce((t,n)=>(t[n]=()=>il[n].process(rs),t),{});const Vb=t=>il[t].process(rs),ed=t=>{to=!1,rs.delta=mr?Zu:Math.max(Math.min(t-rs.timestamp,qb),1),rs.timestamp=t,gr=!0,lo.forEach(Vb),gr=!1,to&&(mr=!1,Xu(ed))},Yb=()=>{to=!0,mr=!0,gr||Xu(ed)},td=()=>rs;function nd(t,n){var s={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(t);l<o.length;l++)n.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(t,o[l])&&(s[o[l]]=t[o[l]]);return s}var zb=function(){},ui=function(){};const _r=(t,n,s)=>Math.min(Math.max(s,t),n),Sl=.001,Gb=.01,di=10,Ub=.05,Qb=1;function Kb({duration:t=800,bounce:n=.25,velocity:s=0,mass:o=1}){let l,r;zb(t<=di*1e3);let a=1-n;a=_r(Ub,Qb,a),t=_r(Gb,di,t/1e3),a<1?(l=u=>{const d=u*a,f=d*t,y=d-s,h=Ar(u,a),m=Math.exp(-f);return Sl-y/h*m},r=u=>{const f=u*a*t,y=f*s+s,h=Math.pow(a,2)*Math.pow(u,2)*t,m=Math.exp(-f),_=Ar(Math.pow(u,2),a);return(-l(u)+Sl>0?-1:1)*((y-h)*m)/_}):(l=u=>{const d=Math.exp(-u*t),f=(u-s)*t+1;return-Sl+d*f},r=u=>{const d=Math.exp(-u*t),f=(s-u)*(t*t);return d*f});const c=5/t,i=Jb(l,r,c);if(t=t*1e3,isNaN(i))return{stiffness:100,damping:10,duration:t};{const u=Math.pow(i,2)*o;return{stiffness:u,damping:a*2*Math.sqrt(o*u),duration:t}}}const Wb=12;function Jb(t,n,s){let o=s;for(let l=1;l<Wb;l++)o=o-t(o)/n(o);return o}function Ar(t,n){return t*Math.sqrt(1-n*n)}const Zb=["duration","bounce"],Xb=["stiffness","damping","mass"];function fi(t,n){return n.some(s=>t[s]!==void 0)}function eD(t){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!fi(t,Xb)&&fi(t,Zb)){const s=Kb(t);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function ga(t){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:l}=t,r=nd(t,["from","to","restSpeed","restDelta"]);const a={done:!1,value:n};let{stiffness:c,damping:i,mass:u,velocity:d,duration:f,isResolvedFromDuration:y}=eD(r),h=yi,m=yi;function _(){const A=d?-(d/1e3):0,E=s-n,C=i/(2*Math.sqrt(c*u)),D=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(s-n)/100,.4)),C<1){const k=Ar(D,C);h=M=>{const T=Math.exp(-C*D*M);return s-T*((A+C*D*E)/k*Math.sin(k*M)+E*Math.cos(k*M))},m=M=>{const T=Math.exp(-C*D*M);return C*D*T*(Math.sin(k*M)*(A+C*D*E)/k+E*Math.cos(k*M))-T*(Math.cos(k*M)*(A+C*D*E)-k*E*Math.sin(k*M))}}else if(C===1)h=k=>s-Math.exp(-D*k)*(E+(A+D*E)*k);else{const k=D*Math.sqrt(C*C-1);h=M=>{const T=Math.exp(-C*D*M),N=Math.min(k*M,300);return s-T*((A+C*D*E)*Math.sinh(N)+k*E*Math.cosh(N))/k}}}return _(),{next:A=>{const E=h(A);if(y)a.done=A>=f;else{const C=m(A)*1e3,D=Math.abs(C)<=o,k=Math.abs(s-E)<=l;a.done=D&&k}return a.value=a.done?s:E,a},flipTarget:()=>{d=-d,[n,s]=[s,n],_()}}}ga.needsInterpolation=(t,n)=>typeof t=="string"||typeof n=="string";const yi=t=>0,sd=(t,n,s)=>{const o=n-t;return o===0?1:(s-t)/o},va=(t,n,s)=>-s*t+s*n+t,od=(t,n)=>s=>Math.max(Math.min(s,n),t),Ns=t=>t%1?Number(t.toFixed(5)):t,no=/(-)?([\d]*\.?[\d])+/g,Br=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,tD=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function ro(t){return typeof t=="string"}const ao={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},js=Object.assign(Object.assign({},ao),{transform:od(0,1)}),vo=Object.assign(Object.assign({},ao),{default:1}),_a=t=>({test:n=>ro(n)&&n.endsWith(t)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${t}`}),_n=_a("deg"),qs=_a("%"),ae=_a("px"),hi=Object.assign(Object.assign({},qs),{parse:t=>qs.parse(t)/100,transform:t=>qs.transform(t*100)}),Aa=(t,n)=>s=>Boolean(ro(s)&&tD.test(s)&&s.startsWith(t)||n&&Object.prototype.hasOwnProperty.call(s,n)),ld=(t,n,s)=>o=>{if(!ro(o))return o;const[l,r,a,c]=o.match(no);return{[t]:parseFloat(l),[n]:parseFloat(r),[s]:parseFloat(a),alpha:c!==void 0?parseFloat(c):1}},Fn={test:Aa("hsl","hue"),parse:ld("hue","saturation","lightness"),transform:({hue:t,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(t)+", "+qs.transform(Ns(n))+", "+qs.transform(Ns(s))+", "+Ns(js.transform(o))+")"},nD=od(0,255),Fl=Object.assign(Object.assign({},ao),{transform:t=>Math.round(nD(t))}),cn={test:Aa("rgb","red"),parse:ld("red","green","blue"),transform:({red:t,green:n,blue:s,alpha:o=1})=>"rgba("+Fl.transform(t)+", "+Fl.transform(n)+", "+Fl.transform(s)+", "+Ns(js.transform(o))+")"};function sD(t){let n="",s="",o="",l="";return t.length>5?(n=t.substr(1,2),s=t.substr(3,2),o=t.substr(5,2),l=t.substr(7,2)):(n=t.substr(1,1),s=t.substr(2,1),o=t.substr(3,1),l=t.substr(4,1),n+=n,s+=s,o+=o,l+=l),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const br={test:Aa("#"),parse:sD,transform:cn.transform},pt={test:t=>cn.test(t)||br.test(t)||Fn.test(t),parse:t=>cn.test(t)?cn.parse(t):Fn.test(t)?Fn.parse(t):br.parse(t),transform:t=>ro(t)?t:t.hasOwnProperty("red")?cn.transform(t):Fn.transform(t)},rd="${c}",ad="${n}";function oD(t){var n,s,o,l;return isNaN(t)&&ro(t)&&((s=(n=t.match(no))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((l=(o=t.match(Br))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function cd(t){typeof t=="number"&&(t=`${t}`);const n=[];let s=0;const o=t.match(Br);o&&(s=o.length,t=t.replace(Br,rd),n.push(...o.map(pt.parse)));const l=t.match(no);return l&&(t=t.replace(no,ad),n.push(...l.map(ao.parse))),{values:n,numColors:s,tokenised:t}}function id(t){return cd(t).values}function pd(t){const{values:n,numColors:s,tokenised:o}=cd(t),l=n.length;return r=>{let a=o;for(let c=0;c<l;c++)a=a.replace(c<s?rd:ad,c<s?pt.transform(r[c]):Ns(r[c]));return a}}const lD=t=>typeof t=="number"?0:t;function rD(t){const n=id(t);return pd(t)(n.map(lD))}const co={test:oD,parse:id,createTransformer:pd,getAnimatableNone:rD},aD=new Set(["brightness","contrast","saturate","opacity"]);function cD(t){let[n,s]=t.slice(0,-1).split("(");if(n==="drop-shadow")return t;const[o]=s.match(no)||[];if(!o)return t;const l=s.replace(o,"");let r=aD.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+l+")"}const iD=/([a-z-]*)\(.*?\)/g,Dr=Object.assign(Object.assign({},co),{getAnimatableNone:t=>{const n=t.match(iD);return n?n.map(cD).join(" "):t}});function $l(t,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?t+(n-t)*6*s:s<1/2?n:s<2/3?t+(n-t)*(2/3-s)*6:t}function mi({hue:t,saturation:n,lightness:s,alpha:o}){t/=360,n/=100,s/=100;let l=0,r=0,a=0;if(!n)l=r=a=s;else{const c=s<.5?s*(1+n):s+n-s*n,i=2*s-c;l=$l(i,c,t+1/3),r=$l(i,c,t),a=$l(i,c,t-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(a*255),alpha:o}}const pD=(t,n,s)=>{const o=t*t,l=n*n;return Math.sqrt(Math.max(0,s*(l-o)+o))},uD=[br,cn,Fn],gi=t=>uD.find(n=>n.test(t)),ud=(t,n)=>{let s=gi(t),o=gi(n),l=s.parse(t),r=o.parse(n);s===Fn&&(l=mi(l),s=cn),o===Fn&&(r=mi(r),o=cn);const a=Object.assign({},l);return c=>{for(const i in a)i!=="alpha"&&(a[i]=pD(l[i],r[i],c));return a.alpha=va(l.alpha,r.alpha,c),s.transform(a)}},dD=t=>typeof t=="number",fD=(t,n)=>s=>n(t(s)),dd=(...t)=>t.reduce(fD);function fd(t,n){return dD(t)?s=>va(t,n,s):pt.test(t)?ud(t,n):hd(t,n)}const yd=(t,n)=>{const s=[...t],o=s.length,l=t.map((r,a)=>fd(r,n[a]));return r=>{for(let a=0;a<o;a++)s[a]=l[a](r);return s}},yD=(t,n)=>{const s=Object.assign(Object.assign({},t),n),o={};for(const l in s)t[l]!==void 0&&n[l]!==void 0&&(o[l]=fd(t[l],n[l]));return l=>{for(const r in o)s[r]=o[r](l);return s}};function vi(t){const n=co.parse(t),s=n.length;let o=0,l=0,r=0;for(let a=0;a<s;a++)o||typeof n[a]=="number"?o++:n[a].hue!==void 0?r++:l++;return{parsed:n,numNumbers:o,numRGB:l,numHSL:r}}const hd=(t,n)=>{const s=co.createTransformer(n),o=vi(t),l=vi(n);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?dd(yd(o.parsed,l.parsed),s):a=>`${a>0?n:t}`},hD=(t,n)=>s=>va(t,n,s);function mD(t){if(typeof t=="number")return hD;if(typeof t=="string")return pt.test(t)?ud:hd;if(Array.isArray(t))return yd;if(typeof t=="object")return yD}function gD(t,n,s){const o=[],l=s||mD(t[0]),r=t.length-1;for(let a=0;a<r;a++){let c=l(t[a],t[a+1]);if(n){const i=Array.isArray(n)?n[a]:n;c=dd(i,c)}o.push(c)}return o}function vD([t,n],[s]){return o=>s(sd(t,n,o))}function _D(t,n){const s=t.length,o=s-1;return l=>{let r=0,a=!1;if(l<=t[0]?a=!0:l>=t[o]&&(r=o-1,a=!0),!a){let i=1;for(;i<s&&!(t[i]>l||i===o);i++);r=i-1}const c=sd(t[r],t[r+1],l);return n[r](c)}}function md(t,n,{clamp:s=!0,ease:o,mixer:l}={}){const r=t.length;ui(r===n.length),ui(!o||!Array.isArray(o)||o.length===r-1),t[0]>t[r-1]&&(t=[].concat(t),n=[].concat(n),t.reverse(),n.reverse());const a=gD(n,o,l),c=r===2?vD(t,a):_D(t,a);return s?i=>c(_r(t[0],t[r-1],i)):c}const pl=t=>n=>1-t(1-n),Ba=t=>n=>n<=.5?t(2*n)/2:(2-t(2*(1-n)))/2,AD=t=>n=>Math.pow(n,t),gd=t=>n=>n*n*((t+1)*n-t),BD=t=>{const n=gd(t);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},vd=1.525,bD=4/11,DD=8/11,CD=9/10,_d=t=>t,ba=AD(2),ED=pl(ba),Ad=Ba(ba),Bd=t=>1-Math.sin(Math.acos(t)),bd=pl(Bd),xD=Ba(bd),Da=gd(vd),wD=pl(Da),kD=Ba(Da),SD=BD(vd),FD=4356/361,$D=35442/1805,PD=16061/1805,jo=t=>{if(t===1||t===0)return t;const n=t*t;return t<bD?7.5625*n:t<DD?9.075*n-9.9*t+3.4:t<CD?FD*n-$D*t+PD:10.8*t*t-20.52*t+10.72},OD=pl(jo),TD=t=>t<.5?.5*(1-jo(1-t*2)):.5*jo(t*2-1)+.5;function LD(t,n){return t.map(()=>n||Ad).splice(0,t.length-1)}function ID(t){const n=t.length;return t.map((s,o)=>o!==0?o/(n-1):0)}function MD(t,n){return t.map(s=>s*n)}function Eo({from:t=0,to:n=1,ease:s,offset:o,duration:l=300}){const r={done:!1,value:t},a=Array.isArray(n)?n:[t,n],c=MD(o&&o.length===a.length?o:ID(a),l);function i(){return md(c,a,{ease:Array.isArray(s)?s:LD(a,s)})}let u=i();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{a.reverse(),u=i()}}}function RD({velocity:t=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const a={done:!1,value:n};let c=s*t;const i=n+c,u=r===void 0?i:r(i);return u!==i&&(c=u-n),{next:d=>{const f=-c*Math.exp(-d/o);return a.done=!(f>l||f<-l),a.value=a.done?u:u+f,a},flipTarget:()=>{}}}const _i={keyframes:Eo,spring:ga,decay:RD};function ND(t){if(Array.isArray(t.to))return Eo;if(_i[t.type])return _i[t.type];const n=new Set(Object.keys(t));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?Eo:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?ga:Eo}function Dd(t,n,s=0){return t-n-s}function jD(t,n,s=0,o=!0){return o?Dd(n+-t,n,s):n-(t-n)+s}function qD(t,n,s,o){return o?t>=n+s:t<=-s}const HD=t=>{const n=({delta:s})=>t(s);return{start:()=>vr.update(n,!0),stop:()=>Hb.update(n)}};function Cd(t){var n,s,{from:o,autoplay:l=!0,driver:r=HD,elapsed:a=0,repeat:c=0,repeatType:i="loop",repeatDelay:u=0,onPlay:d,onStop:f,onComplete:y,onRepeat:h,onUpdate:m}=t,_=nd(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:A}=_,E,C=0,D=_.duration,k,M=!1,T=!0,N;const Z=ND(_);!((s=(n=Z).needsInterpolation)===null||s===void 0)&&s.call(n,o,A)&&(N=md([0,100],[o,A],{clamp:!1}),o=0,A=100);const pe=Z(Object.assign(Object.assign({},_),{from:o,to:A}));function de(){C++,i==="reverse"?(T=C%2===0,a=jD(a,D,u,T)):(a=Dd(a,D,u),i==="mirror"&&pe.flipTarget()),M=!1,h&&h()}function _e(){E.stop(),y&&y()}function Ke(Ne){if(T||(Ne=-Ne),a+=Ne,!M){const Le=pe.next(Math.max(0,a));k=Le.value,N&&(k=N(k)),M=T?Le.done:a<=0}m==null||m(k),M&&(C===0&&(D!=null||(D=a)),C<c?qD(a,D,u,T)&&de():_e())}function Ye(){d==null||d(),E=r(Ke),E.start()}return l&&Ye(),{stop:()=>{f==null||f(),E.stop()}}}function Ed(t,n){return n?t*(1e3/n):0}function VD({from:t=0,velocity:n=0,min:s,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:a=500,bounceDamping:c=10,restDelta:i=1,modifyTarget:u,driver:d,onUpdate:f,onComplete:y,onStop:h}){let m;function _(D){return s!==void 0&&D<s||o!==void 0&&D>o}function A(D){return s===void 0?o:o===void 0||Math.abs(s-D)<Math.abs(o-D)?s:o}function E(D){m==null||m.stop(),m=Cd(Object.assign(Object.assign({},D),{driver:d,onUpdate:k=>{var M;f==null||f(k),(M=D.onUpdate)===null||M===void 0||M.call(D,k)},onComplete:y,onStop:h}))}function C(D){E(Object.assign({type:"spring",stiffness:a,damping:c,restDelta:i},D))}if(_(t))C({from:t,velocity:n,to:A(t)});else{let D=l*n+t;typeof u<"u"&&(D=u(D));const k=A(D),M=k===s?-1:1;let T,N;const Z=pe=>{T=N,N=pe,n=Ed(pe-T,td().delta),(M===1&&pe>k||M===-1&&pe<k)&&C({from:pe,to:k,velocity:n})};E({type:"decay",from:t,velocity:n,timeConstant:r,power:l,restDelta:i,modifyTarget:u,onUpdate:_(D)?Z:void 0})}return{stop:()=>m==null?void 0:m.stop()}}const xd=(t,n)=>1-3*n+3*t,wd=(t,n)=>3*n-6*t,kd=t=>3*t,qo=(t,n,s)=>((xd(n,s)*t+wd(n,s))*t+kd(n))*t,Sd=(t,n,s)=>3*xd(n,s)*t*t+2*wd(n,s)*t+kd(n),YD=1e-7,zD=10;function GD(t,n,s,o,l){let r,a,c=0;do a=n+(s-n)/2,r=qo(a,o,l)-t,r>0?s=a:n=a;while(Math.abs(r)>YD&&++c<zD);return a}const UD=8,QD=.001;function KD(t,n,s,o){for(let l=0;l<UD;++l){const r=Sd(n,s,o);if(r===0)return n;n-=(qo(n,s,o)-t)/r}return n}const xo=11,_o=1/(xo-1);function WD(t,n,s,o){if(t===n&&s===o)return _d;const l=new Float32Array(xo);for(let a=0;a<xo;++a)l[a]=qo(a*_o,t,s);function r(a){let c=0,i=1;const u=xo-1;for(;i!==u&&l[i]<=a;++i)c+=_o;--i;const d=(a-l[i])/(l[i+1]-l[i]),f=c+d*_o,y=Sd(f,t,s);return y>=QD?KD(a,f,t,s):y===0?f:GD(a,c,c+_o,t,s)}return a=>a===0||a===1?a:qo(r(a),n,o)}const Pl={};class JD{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const l of this.subscriptions)l(n,s,o)}clear(){this.subscriptions.clear()}}const Ai=t=>!isNaN(parseFloat(t));class ZD{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new JD,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:l}=td();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),vr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>vr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=Ai(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=Ai(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Ed(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function XD(t){return new ZD(t)}const{isArray:eC}=Array;function tC(){const t=G({}),n=o=>{const l=r=>{!t.value[r]||(t.value[r].stop(),t.value[r].destroy(),delete t.value[r])};o?eC(o)?o.forEach(l):l(o):Object.keys(t.value).forEach(l)},s=(o,l,r)=>{if(t.value[o])return t.value[o];const a=XD(l);return a.onChange(c=>r[o]=c),t.value[o]=a,a};return om(n),{motionValues:t,get:s,stop:n}}const nC=t=>Array.isArray(t),An=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Ol=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),sC=t=>({type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}),Tl=()=>({type:"keyframes",ease:"linear",duration:300}),oC=t=>({type:"keyframes",duration:800,values:t}),Bi={default:sC,x:An,y:An,z:An,rotate:An,rotateX:An,rotateY:An,rotateZ:An,scaleX:Ol,scaleY:Ol,scale:Ol,backgroundColor:Tl,color:Tl,opacity:Tl},Fd=(t,n)=>{let s;return nC(n)?s=oC:s=Bi[t]||Bi.default,{to:n,...s(n)}},bi={...ao,transform:Math.round},$d={color:pt,backgroundColor:pt,outlineColor:pt,fill:pt,stroke:pt,borderColor:pt,borderTopColor:pt,borderRightColor:pt,borderBottomColor:pt,borderLeftColor:pt,borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,size:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,rotate:_n,rotateX:_n,rotateY:_n,rotateZ:_n,scale:vo,scaleX:vo,scaleY:vo,scaleZ:vo,skew:_n,skewX:_n,skewY:_n,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:js,originX:hi,originY:hi,originZ:ae,zIndex:bi,filter:Dr,WebkitFilter:Dr,fillOpacity:js,strokeOpacity:js,numOctaves:bi},Ca=t=>$d[t],Pd=(t,n)=>n&&typeof t=="number"&&n.transform?n.transform(t):t;function lC(t,n){let s=Ca(t);return s!==Dr&&(s=co),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const rC={linear:_d,easeIn:ba,easeInOut:Ad,easeOut:ED,circIn:Bd,circInOut:xD,circOut:bd,backIn:Da,backInOut:kD,backOut:wD,anticipate:SD,bounceIn:OD,bounceInOut:TD,bounceOut:jo},Di=t=>{if(Array.isArray(t)){const[n,s,o,l]=t;return WD(n,s,o,l)}else if(typeof t=="string")return rC[t];return t},aC=t=>Array.isArray(t)&&typeof t[0]!="number",Ci=(t,n)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&co.test(n)&&!n.startsWith("url("));function cC(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function iC({ease:t,times:n,delay:s,...o}){const l={...o};return n&&(l.offset=n),t&&(l.ease=aC(t)?t.map(Di):Di(t)),s&&(l.elapsed=-s),l}function pC(t,n,s){return Array.isArray(n.to)&&(t.duration||(t.duration=800)),cC(n),uC(t)||(t={...t,...Fd(s,n.to)}),{...n,...iC(t)}}function uC({delay:t,repeat:n,repeatType:s,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function dC(t,n){return t[n]||t.default||t}function fC(t,n,s,o,l){const r=dC(o,t);let a=r.from===null||r.from===void 0?n.get():r.from;const c=Ci(t,s);a==="none"&&c&&typeof s=="string"&&(a=lC(t,s));const i=Ci(t,a);function u(f){const y={from:a,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?VD({...y,...r}):Cd({...pC(r,y,t),onUpdate:h=>{y.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),f&&f()}})}function d(f){return n.set(s),o.onComplete&&o.onComplete(),l&&l(),f&&f(),{stop:()=>{}}}return!i||!c||r.type===!1?d:u}function yC(){const{motionValues:t,stop:n,get:s}=tC();return{motionValues:t,stop:n,push:(l,r,a,c={},i)=>{const u=a[l],d=s(l,u,a);if(c&&c.immediate){d.set(r);return}const f=fC(l,d,r,c,i);d.start(f)}}}function hC(t,n={},{motionValues:s,push:o,stop:l}=yC()){const r=b(n),a=G(!1);ue(s,f=>{a.value=Object.values(f).filter(y=>y.isAnimating()).length>0},{immediate:!0,deep:!0});const c=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},i=f=>(typeof f=="string"&&(f=c(f)),Promise.all(Object.entries(f).map(([y,h])=>{if(y!=="transition")return new Promise(m=>{o(y,h,t,f.transition||Fd(y,f[y]),m)})}).filter(Boolean)));return{isAnimating:a,apply:i,set:f=>{const y=er(f)?f:c(f);Object.entries(y).forEach(([h,m])=>{h!=="transition"&&o(h,m,t,{immediate:!0})})},leave:async f=>{let y;if(r&&(r.leave&&(y=r.leave),!r.leave&&r.initial&&(y=r.initial)),!y){f();return}await i(y),f()},stop:l}}const Ea=typeof window<"u",mC=()=>Ea&&window.onpointerdown===null,gC=()=>Ea&&window.ontouchstart===null,vC=()=>Ea&&window.onmousedown===null;function _C({target:t,state:n,variants:s,apply:o}){const l=b(s),r=G(!1),a=G(!1),c=G(!1),i=S(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=S(()=>{const d={};Object.assign(d,n.value),r.value&&l.hovered&&Object.assign(d,l.hovered),a.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const f in d)i.value.includes(f)||delete d[f];return d});l.hovered&&(ie(t,"mouseenter",()=>r.value=!0),ie(t,"mouseleave",()=>{r.value=!1,a.value=!1}),ie(t,"mouseout",()=>{r.value=!1,a.value=!1})),l.tapped&&(vC()&&(ie(t,"mousedown",()=>a.value=!0),ie(t,"mouseup",()=>a.value=!1)),mC()&&(ie(t,"pointerdown",()=>a.value=!0),ie(t,"pointerup",()=>a.value=!1)),gC()&&(ie(t,"touchstart",()=>a.value=!0),ie(t,"touchend",()=>a.value=!1))),l.focused&&(ie(t,"focus",()=>c.value=!0),ie(t,"blur",()=>c.value=!1)),ue(u,o)}function AC({set:t,target:n,apply:s,variants:o,variant:l}){const r=b(o);ue(()=>n,()=>{!r||(r.initial&&t("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function BC({state:t,apply:n}){ue(t,s=>{s&&n(s)},{immediate:!0})}function bC({target:t,variants:n,variant:s}){const o=b(n);o&&(o.visible||o.visibleOnce)&&e8(t,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l&&s.value!=="visibleOnce"?s.value="visibleOnce":s.value||(s.value="initial"))})}function DC(t,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){n.lifeCycleHooks&&AC(t),n.syncVariants&&BC(t),n.visibilityHooks&&bC(t),n.eventListeners&&_C(t)}function Od(t={}){const n=Me({...t}),s=G({});return ue(n,()=>{const o={};for(const[l,r]of Object.entries(n)){const a=Ca(l),c=Pd(r,a);o[l]=c}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}function xa(t,n){ue(()=>$t(t),s=>{!s||n(s)},{immediate:!0})}const CC={x:"translateX",y:"translateY",z:"translateZ"};function Td(t={},n=!0){const s=Me({...t}),o=G("");return ue(s,l=>{let r="",a=!1;n&&(l.x||l.y||l.z)&&(r+=`translate3d(${[l.x||0,l.y||0,l.z||0].map(ae.transform).join(",")}) `,a=!0);for(const[c,i]of Object.entries(l)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const u=Ca(c),d=Pd(i,u);r+=`${CC[c]||c}(${d}) `}n&&!a&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}const EC=["","X","Y","Z"],xC=["perspective","translate","scale","rotate","skew"],Ld=["transformPerspective","x","y","z"];xC.forEach(t=>{EC.forEach(n=>{const s=t+n;Ld.push(s)})});const wC=new Set(Ld);function wa(t){return wC.has(t)}const kC=new Set(["originX","originY","originZ"]);function Id(t){return kC.has(t)}function SC(t){const n={},s={};return Object.entries(t).forEach(([o,l])=>{wa(o)||Id(o)?n[o]=l:s[o]=l}),{transform:n,style:s}}function Md(t){const{transform:n,style:s}=SC(t),{transform:o}=Td(n),{style:l}=Od(s);return o.value&&(l.value.transform=o.value),l.value}function FC(t,n){let s,o;const{state:l,style:r}=Od();return xa(t,a=>{o=a;for(const c of Object.keys($d))a.style[c]===null||a.style[c]===""||wa(c)||Id(c)||(l[c]=a.style[c]);s&&Object.entries(s).forEach(([c,i])=>a.style[c]=i),n&&n(l)}),ue(r,a=>{if(!o){s=a;return}for(const c in a)o.style[c]=a[c]},{immediate:!0}),{style:l}}function $C(t){const n=t.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,l)=>{if(!l)return o;const[r,a]=l.split("("),i=a.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),u=i.length===1?i[0]:i;return{...o,[r]:u}},{})}function PC(t,n){Object.entries($C(n)).forEach(([s,o])=>{const l=["x","y","z"];if(s==="translate3d"){if(o===0){l.forEach(r=>t[r]=0);return}o.forEach((r,a)=>t[l[a]]=r);return}if(o=parseFloat(o),s==="translateX"){t.x=o;return}if(s==="translateY"){t.y=o;return}if(s==="translateZ"){t.z=o;return}t[s]=o})}function OC(t,n){let s,o;const{state:l,transform:r}=Td();return xa(t,a=>{o=a,a.style.transform&&PC(l,a.style.transform),s&&(a.style.transform=s),n&&n(l)}),ue(r,a=>{if(!o){s=a;return}o.style.transform=a},{immediate:!0}),{transform:l}}function TC(t,n){const s=Me({}),o=a=>Object.entries(a).forEach(([c,i])=>s[c]=i),{style:l}=FC(t,o),{transform:r}=OC(t,o);return ue(s,a=>{Object.entries(a).forEach(([c,i])=>{const u=wa(c)?r:l;u[c]&&u[c]===i||(u[c]=i)})},{immediate:!0,deep:!0}),xa(t,()=>n&&o(n)),{motionProperties:s,style:l,transform:r}}function LC(t={}){const n=b(t),s=G();return{state:S(()=>{if(!!s.value)return n[s.value]}),variant:s}}function Rd(t,n={},s){const{motionProperties:o}=TC(t),{variant:l,state:r}=LC(n),a=hC(o,n),c={target:t,variant:l,variants:n,state:r,motionProperties:o,...a};return DC(c,s),c}const IC=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],MC=(t,n)=>{const s=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};s&&(s.variants&&er(s.variants)&&(n.value={...n.value,...s.variants}),IC.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Vh(s[o])){const l=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition={delay:l,...n.value.enter.transition}),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition={delay:l,...n.value.visible.transition}),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition={delay:l,...n.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&er(s[o])&&(n.value[o]=s[o])}))},Ll=t=>({created:(o,l,r)=>{const a=l.value&&typeof l.value=="string"?l.value:r.key;a&&Pl[a]&&Pl[a].stop();const c=G(t||{});typeof l.value=="object"&&(c.value=l.value),MC(r,c);const i=Rd(o,c);o.motionInstance=i,a&&(Pl[a]=i)},unmounted:o=>{o.motionInstance&&o.motionInstance.stop()},getSSRProps(o,l){let{initial:r}=o.value||l&&(l==null?void 0:l.props)||{};r=b(r);const a=Rb((t==null?void 0:t.initial)||{},r||{});return!a||Object.keys(a).length===0?void 0:{style:Md(a)}}}),RC={initial:{opacity:0},enter:{opacity:1}},NC={initial:{opacity:0},visible:{opacity:1}},jC={initial:{opacity:0},visibleOnce:{opacity:1}},qC={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},HC={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},VC={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},YC={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},zC={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},GC={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},UC={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},QC={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},KC={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},WC={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},JC={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ZC={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},XC={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},eE={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},tE={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},nE={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},sE={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},oE={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},lE={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},rE={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},aE={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},cE={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},iE={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},pE={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},uE={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},dE={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},fE={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Cr={__proto__:null,fade:RC,fadeVisible:NC,fadeVisibleOnce:jC,pop:qC,popVisible:HC,popVisibleOnce:VC,rollBottom:XC,rollLeft:YC,rollRight:UC,rollTop:WC,rollVisibleBottom:eE,rollVisibleLeft:zC,rollVisibleRight:QC,rollVisibleTop:JC,rollVisibleOnceBottom:tE,rollVisibleOnceLeft:GC,rollVisibleOnceRight:KC,rollVisibleOnceTop:ZC,slideBottom:uE,slideLeft:nE,slideRight:lE,slideTop:cE,slideVisibleBottom:dE,slideVisibleLeft:sE,slideVisibleRight:rE,slideVisibleTop:iE,slideVisibleOnceBottom:fE,slideVisibleOnceLeft:oE,slideVisibleOnceRight:aE,slideVisibleOnceTop:pE},yE=Fe({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var c;const n=Ny(),s=Me({});if(!t.is&&!n.default)return()=>ut("div",{});const o=S(()=>{let i;return t.preset&&(i=Cr[t.preset]),i}),l=S(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),r=S(()=>{const i={...l.value,...o.value||{},...t.variants||{}};return t.delay&&(i.enter.transition={...i.enter.transition},i.enter.transition.delay=parseInt(t.delay)),i}),a=S(()=>{if(!t.is)return;let i=t.is;return typeof a.value=="string"&&!Kd(i)&&(i=Fo(i)),i});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||(process==null?void 0:process.dev)){const i=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var f,y,h;(f=u.variants)!=null&&f.enter&&u.apply("enter"),(y=u.variants)!=null&&y.visible&&u.apply("visible"),(h=u.variants)!=null&&h.visibleOnce&&u.apply("visibleOnce")},10)};Vr(()=>Object.entries(s).forEach(([u,d])=>i(d)))}return{slots:n,component:a,motionConfig:r,instances:s}},render({slots:t,motionConfig:n,instances:s,component:o}){var c;const l=Md(n.initial||{}),r=(i,u)=>(i.props||(i.props={}),i.props.style=l,i.props.onVnodeMounted=({el:d})=>{const f=Rd(d,n);s[u]=f},i);if(o){const i=ut(o,void 0,t);return r(i,0),i}return(((c=t.default)==null?void 0:c.call(t))||[]).map((i,u)=>r(i,u))}});function hE(t){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>s.charAt(n.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const mE={install(t,n){if(t.directive("motion",Ll()),t.component("Motion",yE),!n||n&&!n.excludePresets)for(const s in Cr){const o=Cr[s];t.directive(`motion-${hE(s)}`,Ll(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,t.directive(`motion-${s}`,Ll(o))}}};var Ei;const Hs=typeof window<"u",gE=Object.prototype.toString,vE=t=>gE.call(t)==="[object Object]";Hs&&((Ei=window==null?void 0:window.navigator)==null?void 0:Ei.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function _E(t){return Gi()?(Ui(t),!0):!1}function AE(t){var n;const s=b(t);return(n=s==null?void 0:s.$el)!=null?n:s}const BE=Hs?window:void 0,Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xr="__vueuse_ssr_handlers__";Er[xr]=Er[xr]||{};Er[xr];function bE(t,n={}){const{immediate:s=!0,window:o=BE}=n,l=G(!1);let r=null;function a(){!l.value||!o||(t(),r=o.requestAnimationFrame(a))}function c(){!l.value&&o&&(l.value=!0,a())}function i(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),_E(i),{isActive:l,pause:i,resume:c}}var xi;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(xi||(xi={}));const ka="vue-starport-injection",Nd="vue-starport-options",DE={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},jd={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var CE=Object.defineProperty,Ho=Object.getOwnPropertySymbols,qd=Object.prototype.hasOwnProperty,Hd=Object.prototype.propertyIsEnumerable,wi=(t,n,s)=>n in t?CE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,EE=(t,n)=>{for(var s in n||(n={}))qd.call(n,s)&&wi(t,s,n[s]);if(Ho)for(var s of Ho(n))Hd.call(n,s)&&wi(t,s,n[s]);return t},ki=(t,n)=>{var s={};for(var o in t)qd.call(t,o)&&n.indexOf(o)<0&&(s[o]=t[o]);if(t!=null&&Ho)for(var o of Ho(t))n.indexOf(o)<0&&Hd.call(t,o)&&(s[o]=t[o]);return s};const xE=Fe({name:"StarportProxy",props:EE({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},jd),setup(t,n){const s=O(ka),o=S(()=>s.getInstance(t.port,t.component)),l=G(),r=o.value.generateId(),a=G(!1);return o.value.isVisible||(o.value.land(),a.value=!0),ms(async()=>{o.value.el||(o.value.el=l.value,await rt(),a.value=!0,o.value.rect.update())}),el(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,a.value=!1,!o.value.options.keepAlive&&(await rt(),await rt(),!o.value.el&&s.dispose(o.value.port))}),ue(()=>t,async()=>{o.value.props&&await rt();const c=t,{props:i}=c,u=ki(c,["props"]);o.value.props=i||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=t,{initialProps:i,mountedProps:u}=c,d=ki(c,["initialProps","mountedProps"]),f=Te(d,(a.value?u:i)||{});return ut("div",Te(f,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?ut(n.slots.default):void 0)}}});var wE=Object.defineProperty,kE=Object.defineProperties,SE=Object.getOwnPropertyDescriptors,Si=Object.getOwnPropertySymbols,FE=Object.prototype.hasOwnProperty,$E=Object.prototype.propertyIsEnumerable,Fi=(t,n,s)=>n in t?wE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,PE=(t,n)=>{for(var s in n||(n={}))FE.call(n,s)&&Fi(t,s,n[s]);if(Si)for(var s of Si(n))$E.call(n,s)&&Fi(t,s,n[s]);return t},OE=(t,n)=>kE(t,SE(n));const TE=Fe({name:"Starport",inheritAttrs:!0,props:jd,setup(t,n){const s=G(!1);return ms(()=>{s.value=!0}),()=>{var a,c;const o=(c=(a=n.slots).default)==null?void 0:c.call(a);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!vE(r)||cs(r))&&(r={render(){return o}}),ut(xE,OE(PE({},t),{key:t.port,component:Ko(r),props:l.props}))}}});function LE(t){const n=Me({height:0,width:0,left:0,top:0,update:o,listen:r,pause:a,margin:"0px",padding:"0px"}),s=Hs?document.documentElement||document.body:void 0;function o(){if(!Hs)return;const c=AE(t);if(!c)return;const{height:i,width:u,left:d,top:f}=c.getBoundingClientRect(),y=window.getComputedStyle(c),h=y.margin,m=y.padding;Object.assign(n,{height:i,width:u,left:d,top:s.scrollTop+f,margin:h,padding:m})}const l=bE(o,{immediate:!1});function r(){!Hs||(o(),l.resume())}function a(){l.pause()}return n}let IE=(t,n=21)=>(s=n)=>{let o="",l=s;for(;l--;)o+=t[Math.random()*t.length|0];return o};const $i=IE("abcdefghijklmnopqrstuvwxyz",5);function Pi(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function ME(t){var n;return t.name||((n=t.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var RE=Object.defineProperty,Oi=Object.getOwnPropertySymbols,NE=Object.prototype.hasOwnProperty,jE=Object.prototype.propertyIsEnumerable,Ti=(t,n,s)=>n in t?RE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,Il=(t,n)=>{for(var s in n||(n={}))NE.call(n,s)&&Ti(t,s,n[s]);if(Oi)for(var s of Oi(n))jE.call(n,s)&&Ti(t,s,n[s]);return t};function qE(t,n,s={}){const o=ME(n),l=Pi(o)||$i(),r=G(),a=G(null),c=G(!1),i=G(!1),u=sf(!0),d=G({}),f=S(()=>Il(Il(Il({},DE),s),d.value)),y=G(0);let h;u.run(()=>{h=LE(r),ue(r,async E=>{E&&(i.value=!0),await rt(),r.value||(i.value=!1)})});const m=Pi(t);function _(){return`starport-${l}-${m}-${$i()}`}const A=_();return Me({el:r,id:A,port:t,props:a,rect:h,scope:u,isLanded:c,isVisible:i,options:f,liftOffTime:y,component:n,componentName:o,componentId:l,generateId:_,setLocalOptions(E={}){d.value=JSON.parse(JSON.stringify(E))},elRef(){return r},liftOff(){!c.value||(c.value=!1,y.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function HE(t){const n=Me(new Map);function s(l,r){let a=n.get(l);return a||(a=qE(l,r,t),n.set(l,a)),a.component=r,a}function o(l){var r;(r=n.get(l))==null||r.scope.stop(),n.delete(l)}return{portMap:n,dispose:o,getInstance:s}}var VE=Object.defineProperty,YE=Object.defineProperties,zE=Object.getOwnPropertyDescriptors,Li=Object.getOwnPropertySymbols,GE=Object.prototype.hasOwnProperty,UE=Object.prototype.propertyIsEnumerable,Ii=(t,n,s)=>n in t?VE(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,QE=(t,n)=>{for(var s in n||(n={}))GE.call(n,s)&&Ii(t,s,n[s]);if(Li)for(var s of Li(n))UE.call(n,s)&&Ii(t,s,n[s]);return t},KE=(t,n)=>YE(t,zE(n));const WE=Fe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(t){const n=O(ka);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=S(()=>n.getInstance(t.port,t.component)),o=S(()=>{var a;return((a=s.value.el)==null?void 0:a.id)||s.value.id}),l=S(()=>{const a=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-a),i=s.value.rect,u={position:"absolute",left:0,top:0,width:`${i.width}px`,height:`${i.height}px`,margin:i.margin,padding:i.padding,transform:`translate3d(${i.left}px,${i.top}px,0px)`};return!s.value.isVisible||!s.value.el?KE(QE({},u),{zIndex:-1,display:"none"}):(s.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),u)}),r={};return()=>{const a=!!(s.value.isLanded&&s.value.el);return ut("div",{style:l.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},ut(Sy,{to:a?`#${o.value}`:"body",disabled:!a},ut(s.value.component,Te(r,s.value.props))))}}}),JE=Fe({name:"StarportCarrier",setup(t,{slots:n}){const s=HE(O(Nd,{}));return Nn().appContext.app.provide(ka,s),()=>{var l;return[(l=n.default)==null?void 0:l.call(n),Array.from(s.portMap.entries()).map(([r,{component:a}])=>ut(WE,{key:r,port:r,component:a}))]}}});function ZE(t={}){return{install(n){n.provide(Nd,t),n.component("Starport",TE),n.component("StarportCarrier",JE)}}}function XE(t){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),t.app.use(mE),t.app.use(ZE({keepAlive:!0}))}function ft(t,n,s){var o,l;return(l=((o=t.instance)==null?void 0:o.$).provides[n])!=null?l:s}function e6(){return{install(t){t.directive("click",{name:"v-click",mounted(n,s){var d,f,y,h;if(Rs.value||((d=ft(s,Ts))==null?void 0:d.value))return;const o=ft(s,En),l=ft(s,Os),r=ft(s,Zl),a=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,i=((f=o==null?void 0:o.value)==null?void 0:f.length)||0,u=c?xh:vl;if(o&&!((y=o==null?void 0:o.value)!=null&&y.includes(n))&&o.value.push(n),s.value===null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(n))){const m=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(m))}n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var E;const m=(E=l==null?void 0:l.value)!=null?E:0,_=s.value!=null?m>=s.value:m>i;n.classList.contains(_l)||n.classList.toggle(u,!_),a!==!1&&a!==void 0&&n.classList.toggle(u,_),n.classList.toggle(Ds,!1);const A=r==null?void 0:r.value.get(m);A==null||A.forEach((C,D)=>{C.classList.toggle(mo,!1),D===A.length-1?C.classList.toggle(Ds,!0):C.classList.toggle(mo,!0)}),n.classList.contains(Ds)||n.classList.toggle(mo,_)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(bn,!1);const o=ft(s,En);o!=null&&o.value&&Xl(o.value,n)}}),t.directive("after",{name:"v-after",mounted(n,s){var c,i;if(Rs.value||((c=ft(s,Ts))==null?void 0:c.value))return;const o=ft(s,En),l=ft(s,Os),r=ft(s,Zl),a=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(i=r==null?void 0:r.value.get(s.value))==null||i.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var d,f,y;const u=((d=l.value)!=null?d:0)>=((y=(f=s.value)!=null?f:a)!=null?y:0);n.classList.contains(_l)||n.classList.toggle(vl,!u),n.classList.toggle(Ds,!1),n.classList.contains(Ds)||n.classList.toggle(mo,u)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(bn,!0)}}),t.directive("click-hide",{name:"v-click-hide",mounted(n,s){var a,c,i;if(Rs.value||((a=ft(s,Ts))==null?void 0:a.value))return;const o=ft(s,En),l=ft(s,Os),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((i=o==null?void 0:o.value)!=null&&i.includes(n))&&o.value.push(n),n==null||n.classList.toggle(bn,!0),l&&ue(l,()=>{var f;const u=(f=l==null?void 0:l.value)!=null?f:0,d=s.value!=null?u>=s.value:u>r;n.classList.toggle(vl,d),n.classList.toggle(_l,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(bn,!1);const o=ft(s,En);o!=null&&o.value&&Xl(o.value,n)}})}}}function t6(t,n){const s=bu(t),o=Du(n,s.currentRoute,s.currentPage);return{nav:{...s,...o,downloadPDF:yr,next:fn,nextSlide:Xs,openInEditor:Tb,prev:yn,prevSlide:eo},configs:be,themeConfigs:S(()=>be.themeConfig)}}function n6(){return{install(t){const n=t6(nn,Tt);t.provide(Y,Me(n))}}}const _s=uh(Ib);_s.use(At);_s.use(Ah());_s.use(e6());_s.use(n6());XE({app:_s,router:At});_s.mount("#app");export{ks as $,me as A,xe as B,ot as C,_v as D,Ce as E,Se as F,Ee as G,Tt as H,No as I,Sb as J,wl as K,Al as L,Ws as M,El as N,qp as O,C5 as P,Xr as Q,B5 as R,ea as S,Ue as T,Ju as U,kv as V,ve as W,Nt as X,s6 as Y,It as Z,vu as _,e as a,go as a0,so as a1,Sn as a2,zt as a3,pr as a4,Wg as a5,Jg as a6,Zg as a7,ev as a8,vt as a9,Ip as aa,a6 as ab,at as ac,c_ as ad,Np as ae,tv as af,el as ag,mv as ah,S as b,H as c,Fe as d,Y as e,mt as f,V as g,b as h,O as i,iv as j,Ob as k,be as l,bh as m,je as n,B as o,ms as p,Me as q,G as r,o6 as s,In as t,l6 as u,r6 as v,ue as w,q as x,ct as y,I as z};

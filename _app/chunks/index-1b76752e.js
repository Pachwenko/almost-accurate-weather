function k(){}const Q=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function G(){return Object.create(null)}function x(t){t.forEach(U)}function z(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function Ot(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function at(t){return Object.keys(t).length===0}function Pt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Lt(t,e,n,i,r,u){if(r){const s=V(e,n,i,u);t.p(s,r)}}function Tt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const W=typeof window!="undefined";let X=W?()=>window.performance.now():()=>Date.now(),B=W?t=>requestAnimationFrame(t):k;const g=new Set;function Y(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&B(Y)}function Z(t){let e;return g.size===0&&B(Y),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let O=!1;function ft(){O=!0}function _t(){O=!1}function dt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let o=0;o<e.length;o++){const f=e[o];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const o=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=o?r+1:dt(1,r,_=>e[n[_]].claim_order,o))-1;i[c]=n[f]+1;const a=f+1;n[a]=c,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);l>=c;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((c,o)=>c.claim_order-o.claim_order);for(let c=0,o=0;c<s.length;c++){for(;o<u.length&&s[c].claim_order>=u[o].claim_order;)o++;const f=o<u.length?u[o]:null;t.insertBefore(s[c],f)}}function mt(t,e){t.appendChild(e)}function tt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=et("style");return yt(tt(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function zt(t,e,n){O&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function xt(t){t.parentNode.removeChild(t)}function Bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function et(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Ft(){return F(" ")}function Ht(){return F("")}function It(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Gt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function bt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){bt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const c=n(l);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function wt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Jt(t,e,n){return wt(t,e,n,et)}function vt(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function Kt(t){return vt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e){t.value=e==null?"":e}function Vt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Wt(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Xt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const q=new Map;let M=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:pt(e),rules:{}};return q.set(t,n),n}function it(t,e,n,i,r,u,s,l=0){const c=16.666/i;let o=`{
`;for(let m=0;m<=1;m+=c){const A=e+(n-e)*u(m);o+=m*100+`%{${s(A,1-A)}}
`}const f=o+`100% {${s(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${l}`,_=tt(t),{stylesheet:d,rules:h}=q.get(_)||At(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,M+=1,a}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),M-=r,M||Nt())}function Nt(){B(()=>{M||(q.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),q.clear())})}let v;function w(t){v=t}function H(){if(!v)throw new Error("Function called outside component initialization");return v}function Yt(t){H().$$.on_mount.push(t)}function Zt(t){H().$$.after_update.push(t)}function te(t,e){return H().$$.context.set(t,e),e}const b=[],J=[],C=[],K=[],rt=Promise.resolve();let T=!1;function ct(){T||(T=!0,rt.then(st))}function ee(){return ct(),rt}function E(t){C.push(t)}const D=new Set;let j=0;function st(){const t=v;do{for(;j<b.length;){const e=b[j];j++,w(e),jt(e.$$)}for(w(null),b.length=0,j=0;J.length;)J.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];D.has(n)||(D.add(n),n())}C.length=0}while(b.length);for(;K.length;)K.pop()();T=!1,D.clear(),w(t)}function jt(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}let $;function lt(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function R(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const S=new Set;let y;function ne(){y={r:0,c:[],p:y}}function ie(){y.r||x(y.c),y=y.p}function Ct(t,e){t&&t.i&&(S.delete(t),t.i(e))}function re(t,e,n,i){if(t&&t.o){if(S.has(t))return;S.add(t),y.c.push(()=>{S.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const ot={duration:0};function ce(t,e,n){let i=e(t,n),r=!1,u,s,l=0;function c(){u&&L(t,u)}function o(){const{delay:a=0,duration:_=300,easing:d=Q,tick:h=k,css:p}=i||ot;p&&(u=it(t,0,1,_,a,d,p,l++)),h(0,1);const m=X()+a,A=m+_;s&&s.abort(),r=!0,E(()=>R(t,!0,"start")),s=Z(P=>{if(r){if(P>=A)return h(1,0),R(t,!0,"end"),c(),r=!1;if(P>=m){const I=d((P-m)/_);h(I,1-I)}}return r})}let f=!1;return{start(){f||(f=!0,L(t),z(i)?(i=i(),lt().then(o)):o())},invalidate(){f=!1},end(){r&&(c(),r=!1)}}}function se(t,e,n){let i=e(t,n),r=!0,u;const s=y;s.r+=1;function l(){const{delay:c=0,duration:o=300,easing:f=Q,tick:a=k,css:_}=i||ot;_&&(u=it(t,1,0,o,c,f,_));const d=X()+c,h=d+o;E(()=>R(t,!1,"start")),Z(p=>{if(r){if(p>=h)return a(0,1),R(t,!1,"end"),--s.r||x(s.c),!1;if(p>=d){const m=f((p-d)/o);a(1-m,m)}}return r})}return z(i)?lt().then(()=>{i=i(),l()}):l(),{end(c){c&&i.tick&&i.tick(1,0),r&&(u&&L(t,u),r=!1)}}}function le(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const c in s)c in l||(i[c]=1);for(const c in l)r[c]||(n[c]=l[c],r[c]=1);t[u]=l}else for(const c in s)r[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function oe(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function St(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||E(()=>{const c=u.map(U).filter(z);s?s.push(...c):x(c),t.$$.on_mount=[]}),l.forEach(E)}function qt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(b.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,i,r,u,s,l=[-1]){const c=v;w(t);const o=t.$$={fragment:null,ctx:null,props:u,update:k,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:l,skip_bound:!1,root:e.target||c.$$.root};s&&s(o.root);let f=!1;if(o.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return o.ctx&&r(o.ctx[a],o.ctx[a]=h)&&(!o.skip_bound&&o.bound[a]&&o.bound[a](h),f&&Mt(t,a)),_}):[],o.update(),f=!0,x(o.before_update),o.fragment=i?i(o.ctx):!1,e.target){if(e.hydrate){ft();const a=$t(e.target);o.fragment&&o.fragment.l(a),a.forEach(xt)}else o.fragment&&o.fragment.c();e.intro&&Ct(t.$$.fragment),St(t,e.target,e.anchor,e.customElement),_t(),st()}w(c)}class _e{$destroy(){qt(this,1),this.$destroy=k}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{le as A,oe as B,qt as C,ut as D,ee as E,Pt as F,Lt as G,Tt as H,Dt as I,gt as J,Q as K,Ot as L,Wt as M,E as N,ce as O,se as P,Bt as Q,Xt as R,_e as S,Ut as T,It as U,x as V,$t as a,Gt as b,Jt as c,xt as d,et as e,Vt as f,zt as g,vt as h,fe as i,Qt as j,Ft as k,Ht as l,Kt as m,k as n,ne as o,re as p,ie as q,Ct as r,Rt as s,F as t,te as u,Zt as v,Yt as w,ue as x,ae as y,St as z};
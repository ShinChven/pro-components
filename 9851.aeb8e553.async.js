"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[9851],{62940:function(w,m,i){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var P=N(i(6651));function N(y){return y&&y.__esModule?y:{default:y}}var S=P;m.default=S,w.exports=S},15237:function(w,m,i){Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var P=N(i(51931));function N(y){return y&&y.__esModule?y:{default:y}}var S=P;m.default=S,w.exports=S},6651:function(w,m,i){var P=i(23524),N=i(30782);Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var S=P(i(30341)),y=$(i(50959)),f=P(i(49348)),A=P(i(46346));function E(l){if(typeof WeakMap!="function")return null;var C=new WeakMap,p=new WeakMap;return(E=function(T){return T?p:C})(l)}function $(l,C){if(!C&&l&&l.__esModule)return l;if(l===null||N(l)!=="object"&&typeof l!="function")return{default:l};var p=E(C);if(p&&p.has(l))return p.get(l);var O={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in l)if(x!=="default"&&Object.prototype.hasOwnProperty.call(l,x)){var R=T?Object.getOwnPropertyDescriptor(l,x):null;R&&(R.get||R.set)?Object.defineProperty(O,x,R):O[x]=l[x]}return O.default=l,p&&p.set(l,O),O}var b=function(C,p){return y.createElement(A.default,(0,S.default)({},C,{ref:p,icon:f.default}))},M=y.forwardRef(b);m.default=M},51931:function(w,m,i){var P=i(23524),N=i(30782);Object.defineProperty(m,"__esModule",{value:!0}),m.default=void 0;var S=P(i(30341)),y=$(i(50959)),f=P(i(71631)),A=P(i(46346));function E(l){if(typeof WeakMap!="function")return null;var C=new WeakMap,p=new WeakMap;return(E=function(T){return T?p:C})(l)}function $(l,C){if(!C&&l&&l.__esModule)return l;if(l===null||N(l)!=="object"&&typeof l!="function")return{default:l};var p=E(C);if(p&&p.has(l))return p.get(l);var O={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in l)if(x!=="default"&&Object.prototype.hasOwnProperty.call(l,x)){var R=T?Object.getOwnPropertyDescriptor(l,x):null;R&&(R.get||R.set)?Object.defineProperty(O,x,R):O[x]=l[x]}return O.default=l,p&&p.set(l,O),O}var b=function(C,p){return y.createElement(A.default,(0,S.default)({},C,{ref:p,icon:f.default}))},M=y.forwardRef(b);m.default=M},49348:function(w,m){Object.defineProperty(m,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};m.default=i},71631:function(w,m){Object.defineProperty(m,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};m.default=i},18294:function(w,m,i){i.d(m,{Z:function(){return oe}});var P=i(86305),N=i(15671),S=i(65895),y=i(68469),f=i(84875),A=i.n(f),E=i(87040),$=i(92976),b=i(50959),M=i(12922),l=i(4202);function C(u){let v;const h=s=>()=>{v=null,u.apply(void 0,(0,M.Z)(s))},n=function(){if(v==null){for(var s=arguments.length,e=new Array(s),r=0;r<s;r++)e[r]=arguments[r];v=(0,l.Z)(h(e))}};return n.cancel=()=>{l.Z.cancel(v),v=null},n}var p=C,O=i(18256),T=i(51145),x=i(30825);const R=u=>{const{componentCls:v}=u;return{[v]:{position:"fixed",zIndex:u.zIndexPopup}}};var Y=(0,T.Z)("Affix",u=>{const v=(0,x.TS)(u,{zIndexPopup:u.zIndexBase+10});return[R(v)]});function W(u){return u!==window?u.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function X(u,v,h){if(h!==void 0&&v.top>u.top-h)return h+v.top}function q(u,v,h){if(h!==void 0&&v.bottom<u.bottom+h){const n=window.innerHeight-v.bottom;return h+n}}const k=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"];function ne(){return typeof window!="undefined"?window:null}var j;(function(u){u[u.None=0]="None",u[u.Prepare=1]="Prepare"})(j||(j={}));let U=function(u){(0,S.Z)(h,u);var v=(0,y.Z)(h);function h(){var n;return(0,P.Z)(this,h),n=v.apply(this,arguments),n.state={status:j.None,lastAffix:!1,prevTarget:null},n.placeholderNodeRef=(0,b.createRef)(),n.fixedNodeRef=(0,b.createRef)(),n.addListeners=()=>{const s=n.getTargetFunc(),e=s==null?void 0:s(),{prevTarget:r}=n.state;r!==e&&(k.forEach(o=>{r==null||r.removeEventListener(o,n.lazyUpdatePosition),e==null||e.addEventListener(o,n.lazyUpdatePosition)}),n.updatePosition(),n.setState({prevTarget:e}))},n.removeListeners=()=>{n.timer&&(clearTimeout(n.timer),n.timer=null);const{prevTarget:s}=n.state,e=n.getTargetFunc(),r=e==null?void 0:e();k.forEach(o=>{r==null||r.removeEventListener(o,n.lazyUpdatePosition),s==null||s.removeEventListener(o,n.lazyUpdatePosition)}),n.updatePosition.cancel(),n.lazyUpdatePosition.cancel()},n.getOffsetTop=()=>{const{offsetBottom:s,offsetTop:e}=n.props;return s===void 0&&e===void 0?0:e},n.getOffsetBottom=()=>n.props.offsetBottom,n.measure=()=>{const{status:s,lastAffix:e}=n.state,{onChange:r}=n.props,o=n.getTargetFunc();if(s!==j.Prepare||!n.fixedNodeRef.current||!n.placeholderNodeRef.current||!o)return;const t=n.getOffsetTop(),a=n.getOffsetBottom(),g=o();if(g){const d={status:j.None},c=W(n.placeholderNodeRef.current);if(c.top===0&&c.left===0&&c.width===0&&c.height===0)return;const I=W(g),z=X(c,I,t),D=q(c,I,a);z!==void 0?(d.affixStyle={position:"fixed",top:z,width:c.width,height:c.height},d.placeholderStyle={width:c.width,height:c.height}):D!==void 0&&(d.affixStyle={position:"fixed",bottom:D,width:c.width,height:c.height},d.placeholderStyle={width:c.width,height:c.height}),d.lastAffix=!!d.affixStyle,r&&e!==d.lastAffix&&r(d.lastAffix),n.setState(d)}},n.prepareMeasure=()=>{n.setState({status:j.Prepare,affixStyle:void 0,placeholderStyle:void 0})},n.updatePosition=p(()=>{n.prepareMeasure()}),n.lazyUpdatePosition=p(()=>{const s=n.getTargetFunc(),{affixStyle:e}=n.state;if(s&&e){const r=n.getOffsetTop(),o=n.getOffsetBottom(),t=s();if(t&&n.placeholderNodeRef.current){const a=W(t),g=W(n.placeholderNodeRef.current),d=X(g,a,r),c=q(g,a,o);if(d!==void 0&&e.top===d||c!==void 0&&e.bottom===c)return}}n.prepareMeasure()}),n}return(0,N.Z)(h,[{key:"getTargetFunc",value:function(){const{getTargetContainer:s}=this.context,{target:e}=this.props;return e!==void 0?e:s!=null?s:ne}},{key:"componentDidMount",value:function(){this.timer=setTimeout(this.addListeners)}},{key:"componentDidUpdate",value:function(s){this.addListeners(),(s.offsetTop!==this.props.offsetTop||s.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"render",value:function(){const{affixStyle:s,placeholderStyle:e}=this.state,{affixPrefixCls:r,rootClassName:o,children:t}=this.props,a=A()(s&&o,{[r]:!!s});let g=(0,$.Z)(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange","affixPrefixCls","rootClassName"]);return b.createElement(E.Z,{onResize:this.updatePosition},b.createElement("div",Object.assign({},g,{ref:this.placeholderNodeRef}),s&&b.createElement("div",{style:e,"aria-hidden":"true"}),b.createElement("div",{className:a,ref:this.fixedNodeRef,style:s},b.createElement(E.Z,{onResize:this.updatePosition},t))))}}]),h}(b.Component);U.contextType=O.E_;var oe=(0,b.forwardRef)((u,v)=>{const{prefixCls:h,rootClassName:n}=u,{getPrefixCls:s}=(0,b.useContext)(O.E_),e=s("affix",h),[r,o]=Y(e),t=Object.assign(Object.assign({},u),{affixPrefixCls:e,rootClassName:A()(n,o)});return r(b.createElement(U,Object.assign({},t,{ref:v})))})},40430:function(w,m,i){i.d(m,{Z:function(){return s}});var P=i(84875),N=i.n(P),S=i(52604),y=i(43595),f=i(50959),A=i(51),E=i(18256),$=i(31805),b=i(8940);const M=e=>{let{children:r}=e;const{getPrefixCls:o}=f.useContext(E.E_),t=o("breadcrumb");return f.createElement("li",{className:`${t}-separator`,"aria-hidden":"true"},r===""?r:r||"/")};M.__ANT_BREADCRUMB_SEPARATOR=!0;var l=M,C=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};function p(e,r){if(e.title===void 0)return null;const o=Object.keys(r).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${o})`,"g"),(t,a)=>r[a]||t)}function O(e,r,o,t){if(o==null)return null;const{className:a,onClick:g}=r,d=C(r,["className","onClick"]),c=Object.assign(Object.assign({},(0,y.Z)(d,{data:!0,aria:!0})),{onClick:g});return t!==void 0?f.createElement("a",Object.assign({},c,{className:N()(`${e}-link`,a),href:t}),o):f.createElement("span",Object.assign({},c,{className:N()(`${e}-link`,a)}),o)}function T(e,r){return(t,a,g,d,c)=>{if(r)return r(t,a,g,d);const I=p(t,a);return O(e,t,I,c)}}var x=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const R=e=>{const{prefixCls:r,separator:o="/",children:t,menu:a,overlay:g,dropdownProps:d,href:c}=e,z=(D=>{if(a||g){const G=Object.assign({},d);if(a){const _=a||{},{items:K}=_,Q=x(_,["items"]);G.menu=Object.assign(Object.assign({},Q),{items:K==null?void 0:K.map((L,ae)=>{var{key:V,title:H,label:J,path:ee}=L,Z=x(L,["key","title","label","path"]);let B=J!=null?J:H;return ee&&(B=f.createElement("a",{href:`${c}${ee}`},B)),Object.assign(Object.assign({},Z),{key:V!=null?V:ae,label:B})})})}else g&&(G.overlay=g);return f.createElement(b.Z,Object.assign({placement:"bottom"},G),f.createElement("span",{className:`${r}-overlay-link`},D,f.createElement($.Z,null)))}return D})(t);return z!=null?f.createElement(f.Fragment,null,f.createElement("li",null,z),o&&f.createElement(l,null,o)):null},Y=e=>{const{prefixCls:r,children:o,href:t}=e,a=x(e,["prefixCls","children","href"]),{getPrefixCls:g}=f.useContext(E.E_),d=g("breadcrumb",r);return f.createElement(R,Object.assign({},a,{prefixCls:d}),O(d,a,o,t))};Y.__ANT_BREADCRUMB_ITEM=!0;var W=Y,X=i(83112),q=i(51145),k=i(30825);const ne=e=>{const{componentCls:r,iconCls:o}=e;return{[r]:Object.assign(Object.assign({},(0,X.Wf)(e)),{color:e.itemColor,fontSize:e.fontSize,[o]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},a:Object.assign({color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${e.paddingXXS}px`,borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",marginInline:-e.marginXXS,"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover}},(0,X.Qy)(e)),["li:last-child"]:{color:e.lastItemColor},[`${r}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${r}-link`]:{[`
          > ${o} + span,
          > ${o} + a
        `]:{marginInlineStart:e.marginXXS}},[`${r}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.lineHeight*e.fontSize,display:"inline-block",padding:`0 ${e.paddingXXS}px`,marginInline:-e.marginXXS,[`> ${o}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}})}};var j=(0,q.Z)("Breadcrumb",e=>{const r=(0,k.TS)(e,{});return[ne(r)]},e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS})),U=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};function ce(e){const{breadcrumbName:r,children:o}=e,t=U(e,["breadcrumbName","children"]),a=Object.assign({title:r},t);return o&&(a.menu={items:o.map(g=>{var{breadcrumbName:d}=g,c=U(g,["breadcrumbName"]);return Object.assign(Object.assign({},c),{title:d})})}),a}function oe(e,r){return(0,f.useMemo)(()=>e||(r?r.map(ce):null),[e,r])}var u=function(e,r){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(o[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)r.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(o[t[a]]=e[t[a]]);return o};const v=(e,r)=>{if(r===void 0)return r;let o=(r||"").replace(/^\//,"");return Object.keys(e).forEach(t=>{o=o.replace(`:${t}`,e[t])}),o},h=e=>{const{prefixCls:r,separator:o="/",style:t,className:a,rootClassName:g,routes:d,items:c,children:I,itemRender:z,params:D={}}=e,G=u(e,["prefixCls","separator","style","className","rootClassName","routes","items","children","itemRender","params"]),{getPrefixCls:_,direction:K}=f.useContext(E.E_);let Q;const L=_("breadcrumb",r),[ae,V]=j(L),H=oe(c,d),J=T(L,z);if(H&&H.length>0){const Z=[],B=c||d;Q=H.map((F,te)=>{const{path:pe,key:ie,type:ge,menu:fe,overlay:ue,onClick:ve,className:de,separator:he}=F,le=v(D,pe);le!==void 0&&Z.push(le);const me=ie!=null?ie:te;if(ge==="separator")return f.createElement(l,{key:me},he);const re={},ye=te===H.length-1;fe?re.menu=fe:ue&&(re.overlay=ue),de&&(re.className=de);let{href:se}=F;return Z.length&&le!==void 0&&(se=`#/${Z.join("/")}`),f.createElement(R,Object.assign({key:me},re,(0,y.Z)(F,{data:!0,aria:!0}),{href:se,separator:ye?"":o,onClick:ve,prefixCls:L}),J(F,D,B,Z,se))})}else if(I){const Z=(0,S.Z)(I).length;Q=(0,S.Z)(I).map((B,F)=>{if(!B)return B;const te=F===Z-1;return(0,A.Tm)(B,{separator:te?"":o,key:F})})}const ee=N()(L,{[`${L}-rtl`]:K==="rtl"},a,g,V);return ae(f.createElement("nav",Object.assign({className:ee,style:t},G),f.createElement("ol",null,Q)))};h.Item=W,h.Separator=l;var n=h,s=n}}]);

"use strict";(self.webpackChunkpro_components=self.webpackChunkpro_components||[]).push([[6559],{66825:function(He,Y,a){a.d(Y,{D:function(){return se},Z:function(){return he}});var j=a(24456),i=a(50959),Z={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"},ee=Z,p=a(53942),R=function($,m){return i.createElement(p.Z,(0,j.Z)({},$,{ref:m,icon:ee}))},w=i.forwardRef(R),I=a(58522),O=a(88953),ae=a(84875),ce=a.n(ae),X=a(92976),te=a(18256),oe=s=>!isNaN(parseFloat(s))&&isFinite(s),V=a(35799),ue=function(s,$){var m={};for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&$.indexOf(g)<0&&(m[g]=s[g]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,g=Object.getOwnPropertySymbols(s);u<g.length;u++)$.indexOf(g[u])<0&&Object.prototype.propertyIsEnumerable.call(s,g[u])&&(m[g[u]]=s[g[u]]);return m};const ne={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},se=i.createContext({}),ve=(()=>{let s=0;return function(){let $=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return s+=1,`${$}${s}`}})();var he=i.forwardRef((s,$)=>{var{prefixCls:m,className:g,trigger:u,children:H,defaultCollapsed:z=!1,theme:N="dark",style:M={},collapsible:L=!1,reverseArrow:D=!1,width:K=200,collapsedWidth:k=80,zeroWidthTriggerStyle:F,breakpoint:P,onCollapse:W,onBreakpoint:J}=s,T=ue(s,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]);const{siderHook:re}=(0,i.useContext)(V.Gs),[A,U]=(0,i.useState)("collapsed"in T?T.collapsed:z),[ie,xe]=(0,i.useState)(!1);(0,i.useEffect)(()=>{"collapsed"in T&&U(T.collapsed)},[T.collapsed]);const Ce=(b,n)=>{"collapsed"in T||U(b),W==null||W(b,n)},Se=(0,i.useRef)();Se.current=b=>{xe(b.matches),J==null||J(b.matches),A!==b.matches&&Ce(b.matches,"responsive")},(0,i.useEffect)(()=>{function b(t){return Se.current(t)}let n;if(typeof window!="undefined"){const{matchMedia:t}=window;if(t&&P&&P in ne){n=t(`(max-width: ${ne[P]})`);try{n.addEventListener("change",b)}catch(e){n.addListener(b)}b(n)}}return()=>{try{n==null||n.removeEventListener("change",b)}catch(t){n==null||n.removeListener(b)}}},[P]),(0,i.useEffect)(()=>{const b=ve("ant-sider-");return re.addSider(b),()=>re.removeSider(b)},[]);const ye=()=>{Ce(!A,"clickTrigger")},{getPrefixCls:Me}=(0,i.useContext)(te.E_),Ee=()=>{const b=Me("layout-sider",m),n=(0,X.Z)(T,["collapsed"]),t=A?k:K,e=oe(t)?`${t}px`:String(t),o=parseFloat(String(k||0))===0?i.createElement("span",{onClick:ye,className:ce()(`${b}-zero-width-trigger`,`${b}-zero-width-trigger-${D?"right":"left"}`),style:F},u||i.createElement(w,null)):null,d={expanded:D?i.createElement(O.Z,null):i.createElement(I.Z,null),collapsed:D?i.createElement(I.Z,null):i.createElement(O.Z,null)}[A?"collapsed":"expanded"],c=u!==null?o||i.createElement("div",{className:`${b}-trigger`,onClick:ye,style:{width:e}},u||d):null,f=Object.assign(Object.assign({},M),{flex:`0 0 ${e}`,maxWidth:e,minWidth:e,width:e}),v=ce()(b,`${b}-${N}`,{[`${b}-collapsed`]:!!A,[`${b}-has-trigger`]:L&&u!==null&&!o,[`${b}-below`]:!!ie,[`${b}-zero-width`]:parseFloat(e)===0},g);return i.createElement("aside",Object.assign({className:v},n,{style:f,ref:$}),i.createElement("div",{className:`${b}-children`},H),L||ie&&o?c:null)},le=i.useMemo(()=>({siderCollapsed:A}),[A]);return i.createElement(se.Provider,{value:le},Ee())})},35799:function(He,Y,a){a.d(Y,{VY:function(){return ge},$_:function(){return ve},h4:function(){return se},Gs:function(){return me},ZP:function(){return he}});var j=a(12922),i=a(84875),Z=a.n(i),ee=a(92976),p=a(50959),R=a(18256),w=a(51145),I=a(30825),ae=s=>{const{componentCls:$,colorBgContainer:m,colorBgBody:g,colorText:u}=s;return{[`${$}-sider-light`]:{background:m,[`${$}-sider-trigger`]:{color:u,background:m},[`${$}-sider-zero-width-trigger`]:{color:u,background:m,border:`1px solid ${g}`,borderInlineStart:0}}}};const ce=s=>{const{antCls:$,componentCls:m,colorText:g,colorTextLightSolid:u,colorBgHeader:H,colorBgBody:z,colorBgTrigger:N,layoutHeaderHeight:M,layoutHeaderPaddingInline:L,layoutHeaderColor:D,layoutFooterPadding:K,layoutTriggerHeight:k,layoutZeroTriggerSize:F,motionDurationMid:P,motionDurationSlow:W,fontSize:J,borderRadius:T}=s;return{[m]:Object.assign(Object.assign({display:"flex",flex:"auto",flexDirection:"column",minHeight:0,background:z,"&, *":{boxSizing:"border-box"},[`&${m}-has-sider`]:{flexDirection:"row",[`> ${m}, > ${m}-content`]:{width:0}},[`${m}-header, &${m}-footer`]:{flex:"0 0 auto"},[`${m}-sider`]:{position:"relative",minWidth:0,background:H,transition:`all ${P}, background 0s`,"&-children":{height:"100%",marginTop:-.1,paddingTop:.1,[`${$}-menu${$}-menu-inline-collapsed`]:{width:"auto"}},"&-has-trigger":{paddingBottom:k},"&-right":{order:1},"&-trigger":{position:"fixed",bottom:0,zIndex:1,height:k,color:u,lineHeight:`${k}px`,textAlign:"center",background:N,cursor:"pointer",transition:`all ${P}`},"&-zero-width":{"> *":{overflow:"hidden"},"&-trigger":{position:"absolute",top:M,insetInlineEnd:-F,zIndex:1,width:F,height:F,color:u,fontSize:s.fontSizeXL,display:"flex",alignItems:"center",justifyContent:"center",background:H,borderStartStartRadius:0,borderStartEndRadius:T,borderEndEndRadius:T,borderEndStartRadius:0,cursor:"pointer",transition:`background ${W} ease`,"&::after":{position:"absolute",inset:0,background:"transparent",transition:`all ${W}`,content:'""'},"&:hover::after":{background:"rgba(255, 255, 255, 0.2)"},"&-right":{insetInlineStart:-F,borderStartStartRadius:T,borderStartEndRadius:0,borderEndEndRadius:0,borderEndStartRadius:T}}}}},ae(s)),{"&-rtl":{direction:"rtl"}}),[`${m}-header`]:{height:M,paddingInline:L,color:D,lineHeight:`${M}px`,background:H,[`${$}-menu`]:{lineHeight:"inherit"}},[`${m}-footer`]:{padding:K,color:g,fontSize:J,background:z},[`${m}-content`]:{flex:"auto",minHeight:0}}};var X=(0,w.Z)("Layout",s=>{const{colorText:$,controlHeightSM:m,controlHeight:g,controlHeightLG:u,marginXXS:H}=s,z=u*1.25,N=(0,I.TS)(s,{layoutHeaderHeight:g*2,layoutHeaderPaddingInline:z,layoutHeaderColor:$,layoutFooterPadding:`${m}px ${z}px`,layoutTriggerHeight:u+H*2,layoutZeroTriggerSize:u});return[ce(N)]},s=>{const{colorBgLayout:$}=s;return{colorBgHeader:"#001529",colorBgBody:$,colorBgTrigger:"#002140"}}),te=function(s,$){var m={};for(var g in s)Object.prototype.hasOwnProperty.call(s,g)&&$.indexOf(g)<0&&(m[g]=s[g]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,g=Object.getOwnPropertySymbols(s);u<g.length;u++)$.indexOf(g[u])<0&&Object.prototype.propertyIsEnumerable.call(s,g[u])&&(m[g[u]]=s[g[u]]);return m};const me=p.createContext({siderHook:{addSider:()=>null,removeSider:()=>null}});function oe(s){let{suffixCls:$,tagName:m,displayName:g}=s;return u=>p.forwardRef((z,N)=>p.createElement(u,Object.assign({ref:N,suffixCls:$,tagName:m},z)))}const V=p.forwardRef((s,$)=>{const{prefixCls:m,suffixCls:g,className:u,tagName:H}=s,z=te(s,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:N}=p.useContext(R.E_),M=N("layout",m),[L,D]=X(M),K=g?`${M}-${g}`:M;return L(p.createElement(H,Object.assign({className:Z()(m||K,u,D),ref:$},z)))}),ue=p.forwardRef((s,$)=>{const{direction:m}=p.useContext(R.E_),[g,u]=p.useState([]),{prefixCls:H,className:z,rootClassName:N,children:M,hasSider:L,tagName:D}=s,K=te(s,["prefixCls","className","rootClassName","children","hasSider","tagName"]),k=(0,ee.Z)(K,["suffixCls"]),{getPrefixCls:F}=p.useContext(R.E_),P=F("layout",H),[W,J]=X(P),T=Z()(P,{[`${P}-has-sider`]:typeof L=="boolean"?L:g.length>0,[`${P}-rtl`]:m==="rtl"},z,N,J),re=p.useMemo(()=>({siderHook:{addSider:A=>{u(U=>[].concat((0,j.Z)(U),[A]))},removeSider:A=>{u(U=>U.filter(ie=>ie!==A))}}}),[]);return W(p.createElement(me.Provider,{value:re},p.createElement(D,Object.assign({ref:$,className:T},k),M)))}),ne=oe({tagName:"section",displayName:"Layout"})(ue),se=oe({suffixCls:"header",tagName:"header",displayName:"Header"})(V),ve=oe({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(V),ge=oe({suffixCls:"content",tagName:"main",displayName:"Content"})(V);var he=ne},90811:function(He,Y,a){a.d(Y,{J:function(){return ee}});var j=a(50959),i=function(p,R){var w={};for(var I in p)Object.prototype.hasOwnProperty.call(p,I)&&R.indexOf(I)<0&&(w[I]=p[I]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,I=Object.getOwnPropertySymbols(p);O<I.length;O++)R.indexOf(I[O])<0&&Object.prototype.propertyIsEnumerable.call(p,I[O])&&(w[I[O]]=p[I[O]]);return w};const Z=j.createContext(null),ee=p=>{const{children:R}=p,w=i(p,["children"]),I=j.useContext(Z),O=j.useMemo(()=>Object.assign(Object.assign({},I),w),[I,w.prefixCls,w.mode,w.selectable]);return j.createElement(Z.Provider,{value:O},R)};Y.Z=Z},26559:function(He,Y,a){a.d(Y,{Z:function(){return b}});var j=a(45937),i=a(50959),Z=a(99178),ee=a(84875),p=a.n(ee),R=a(71264),w=a(92976),I=a(47314),O=a(51),ae=a(18256),X=(0,i.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),te=a(90811),me=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e},V=n=>{const{prefixCls:t,className:e,dashed:o}=n,r=me(n,["prefixCls","className","dashed"]),{getPrefixCls:l}=i.useContext(ae.E_),d=l("menu",t),c=p()({[`${d}-item-divider-dashed`]:!!o},e);return i.createElement(j.Divider,Object.assign({className:c},r))},ue=a(52604),ne=a(66825),se=a(31691),ge=n=>{var t;const{className:e,children:o,icon:r,title:l,danger:d}=n,{prefixCls:c,firstLevel:f,direction:v,disableMenuItemTitleTooltip:C,inlineCollapsed:h}=i.useContext(X),B=Q=>{const pe=i.createElement("span",{className:`${c}-title-content`},o);return(!r||(0,O.l$)(o)&&o.type==="span")&&o&&Q&&f&&typeof o=="string"?i.createElement("div",{className:`${c}-inline-collapsed-noicon`},o.charAt(0)):pe},{siderCollapsed:S}=i.useContext(ne.D);let x=l;typeof l=="undefined"?x=f?o:"":l===!1&&(x="");const E={title:x};!S&&!h&&(E.title=null,E.open=!1);const y=(0,ue.Z)(o).length;let G=i.createElement(j.Item,Object.assign({},(0,w.Z)(n,["title","icon","danger"]),{className:p()({[`${c}-item-danger`]:d,[`${c}-item-only-child`]:(r?y+1:y)===1},e),title:typeof l=="string"?l:void 0}),(0,O.Tm)(r,{className:p()((0,O.l$)(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${c}-item-icon`)}),B(h));return C||(G=i.createElement(se.Z,Object.assign({},E,{placement:v==="rtl"?"left":"right",overlayClassName:`${c}-inline-collapsed-tooltip`}),G)),G},s=n=>{var t;const{popupClassName:e,icon:o,title:r,theme:l}=n,d=i.useContext(X),{prefixCls:c,inlineCollapsed:f,theme:v}=d,C=(0,j.useFullPath)();let h;if(!o)h=f&&!C.length&&r&&typeof r=="string"?i.createElement("div",{className:`${c}-inline-collapsed-noicon`},r.charAt(0)):i.createElement("span",{className:`${c}-title-content`},r);else{const S=(0,O.l$)(r)&&r.type==="span";h=i.createElement(i.Fragment,null,(0,O.Tm)(o,{className:p()((0,O.l$)(o)?(t=o.props)===null||t===void 0?void 0:t.className:"",`${c}-item-icon`)}),S?r:i.createElement("span",{className:`${c}-title-content`},r))}const B=i.useMemo(()=>Object.assign(Object.assign({},d),{firstLevel:!1}),[d]);return i.createElement(X.Provider,{value:B},i.createElement(j.SubMenu,Object.assign({},(0,w.Z)(n,["icon"]),{title:h,popupClassName:p()(c,e,`${c}-${l||v}`)})))},$=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e};function m(n){return(n||[]).map((t,e)=>{if(t&&typeof t=="object"){const o=t,{label:r,children:l,key:d,type:c}=o,f=$(o,["label","children","key","type"]),v=d!=null?d:`tmp-${e}`;return l||c==="group"?c==="group"?i.createElement(j.ItemGroup,Object.assign({key:v},f,{title:r}),m(l)):i.createElement(s,Object.assign({key:v},f,{title:r}),m(l)):c==="divider"?i.createElement(V,Object.assign({key:v},f)):i.createElement(ge,Object.assign({key:v},f),r)}return null}).filter(t=>t)}function g(n){return i.useMemo(()=>n&&m(n),[n])}var u=a(99590),H=a(83112),z=a(8522),N=a(22001),M=a(73014),L=a(51145),D=a(30825),k=n=>{const{componentCls:t,motionDurationSlow:e,menuHorizontalHeight:o,colorSplit:r,lineWidth:l,lineType:d,menuItemPaddingInline:c}=n;return{[`${t}-horizontal`]:{lineHeight:`${o}px`,border:0,borderBottom:`${l}px ${d} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:c},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},P=n=>{let{componentCls:t,menuArrowOffset:e}=n;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(-${e})`},"&::after":{transform:`rotate(45deg) translateY(${e})`}}}}};const W=n=>Object.assign({},(0,H.oN)(n));var T=(n,t)=>{const{componentCls:e,itemColor:o,itemSelectedColor:r,groupTitleColor:l,itemBg:d,subMenuItemBg:c,itemSelectedBg:f,activeBarHeight:v,activeBarWidth:C,activeBarBorderWidth:h,motionDurationSlow:B,motionEaseInOut:S,motionEaseOut:x,menuItemPaddingInline:E,motionDurationMid:y,itemHoverColor:G,lineType:Q,colorSplit:pe,itemDisabledColor:Ie,dangerItemColor:fe,dangerItemHoverColor:$e,dangerItemSelectedColor:Oe,dangerItemActiveBg:Te,dangerItemSelectedBg:je,itemHoverBg:Be,menuSubMenuBg:we,horizontalItemSelectedColor:de,horizontalItemSelectedBg:ze,horizontalItemBorderRadius:be,horizontalItemHoverBg:Ne}=n;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:o,background:d,[`&${e}-root:focus-visible`]:Object.assign({},W(n)),[`${e}-item-group-title`]:{color:l},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:r}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${Ie} !important`},[`${e}-item:hover, ${e}-submenu-title:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:G}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:Be},"&:active":{backgroundColor:f}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:Be},"&:active":{backgroundColor:f}}},[`${e}-item-danger`]:{color:fe,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:$e}},[`&${e}-item:active`]:{background:Te}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:r,[`&${e}-item-danger`]:{color:Oe},["a, a:hover"]:{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:f,[`&${e}-item-danger`]:{backgroundColor:je}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},W(n))},[`&${e}-submenu > ${e}`]:{backgroundColor:we},[`&${e}-popup > ${e}`]:{backgroundColor:d},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:h,marginTop:-h,marginBottom:0,borderRadius:be,"&::after":{position:"absolute",insetInline:E,bottom:0,borderBottom:`${v}px solid transparent`,transition:`border-color ${B} ${S}`,content:'""'},["&:hover, &-active, &-open"]:{background:Ne,"&::after":{borderBottomWidth:v,borderBottomColor:de}},["&-selected"]:{color:de,backgroundColor:ze,"&::after":{borderBottomWidth:v,borderBottomColor:de}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${h}px ${Q} ${pe}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:c},[`${e}-item, ${e}-submenu-title`]:h&&C?{width:`calc(100% + ${h}px)`}:{},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${C}px solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${y} ${x}`,`opacity ${y} ${x}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:Oe}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${y} ${S}`,`opacity ${y} ${S}`].join(",")}}}}}};const re=n=>{const{componentCls:t,menuItemHeight:e,itemMarginInline:o,padding:r,menuArrowSize:l,marginXS:d,marginXXS:c}=n,f=r+l+d;return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`,paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:o,marginBlock:c,width:`calc(100% - ${o*2}px)`},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:`${e}px`},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:f}}};var U=n=>{const{componentCls:t,iconCls:e,menuItemHeight:o,colorTextLightSolid:r,dropdownWidth:l,controlHeightLG:d,motionDurationMid:c,motionEaseOut:f,paddingXL:v,itemMarginInline:C,fontSizeLG:h,motionDurationSlow:B,paddingXS:S,boxShadowSecondary:x}=n,E={height:o,lineHeight:`${o}px`,listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{["&-inline, &-vertical"]:Object.assign({[`&${t}-root`]:{boxShadow:"none"}},re(n))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},re(n)),{boxShadow:x})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:l,maxHeight:`calc(100vh - ${d*2.5}px)`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${B}`,`background ${B}`,`padding ${c} ${f}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:E,[`& ${t}-item-group-title`]:{paddingInlineStart:v}},[`${t}-item`]:E}},{[`${t}-inline-collapsed`]:{width:o*2,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:h,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${h/2}px - ${C}px)`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:h,lineHeight:`${o}px`,"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},H.vS),{paddingInline:S})}}]};const ie=n=>{const{componentCls:t,fontSize:e,motionDurationSlow:o,motionDurationMid:r,motionEaseInOut:l,motionEaseOut:d,iconCls:c,controlHeightSM:f}=n;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${o}`,`background ${o}`,`padding ${o} ${l}`].join(","),[`${t}-item-icon, ${c}`]:{minWidth:e,fontSize:e,transition:[`font-size ${r} ${d}`,`margin ${o} ${l}`,`color ${o}`].join(","),"+ span":{marginInlineStart:f-e,opacity:1,transition:[`opacity ${o} ${l}`,`margin ${o}`,`color ${o}`].join(",")}},[`${t}-item-icon`]:Object.assign({},(0,H.Ro)()),[`&${t}-item-only-child`]:{[`> ${c}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},xe=n=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:o,borderRadius:r,menuArrowSize:l,menuArrowOffset:d}=n;return{[`${t}-submenu`]:{["&-expand-icon, &-arrow"]:{position:"absolute",top:"50%",insetInlineEnd:n.margin,width:l,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${o}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:l*.6,height:l*.15,backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${e} ${o}`,`transform ${e} ${o}`,`top ${e} ${o}`,`color ${e} ${o}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(-${d})`},"&::after":{transform:`rotate(-45deg) translateY(${d})`}}}}},Ce=n=>{const{antCls:t,componentCls:e,fontSize:o,motionDurationSlow:r,motionDurationMid:l,motionEaseInOut:d,lineHeight:c,paddingXS:f,padding:v,colorSplit:C,lineWidth:h,zIndexPopup:B,borderRadiusLG:S,subMenuItemBorderRadius:x,menuArrowSize:E,menuArrowOffset:y,lineType:G,menuPanelMaskInset:Q}=n;return[{"":{[`${e}`]:Object.assign(Object.assign({},(0,H.dF)()),{["&-hidden"]:{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,H.Wf)(n)),(0,H.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:o,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,["ul, ol"]:{margin:0,padding:0,listStyle:"none"},["&-overflow"]:{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:n.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${f}px ${v}px`,fontSize:o,lineHeight:c,transition:`all ${r}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${r} ${d}`,`background ${r} ${d}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${r} ${d}`,`background ${r} ${d}`,`padding ${l} ${d}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${r} ${d}`,`padding ${r} ${d}`].join(",")},[`${e}-title-content`]:{transition:`color ${r}`},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:C,borderStyle:G,borderWidth:0,borderTopWidth:h,marginBlock:h,padding:0,"&-dashed":{borderStyle:"dashed"}}}),ie(n)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${o*2}px ${v}px`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:B,borderRadius:S,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:`${Q}px 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:Q},[`
          &-placement-leftTop,
          &-placement-bottomRight,
          `]:{transformOrigin:"100% 0"},[`
          &-placement-leftBottom,
          &-placement-topRight,
          `]:{transformOrigin:"100% 100%"},[`
          &-placement-rightBottom,
          &-placement-topLeft,
          `]:{transformOrigin:"0 100%"},[`
          &-placement-bottomLeft,
          &-placement-rightTop,
          `]:{transformOrigin:"0 0"},[`
          &-placement-leftTop,
          &-placement-leftBottom
          `]:{paddingInlineEnd:n.paddingXS},[`
          &-placement-rightTop,
          &-placement-rightBottom
          `]:{paddingInlineStart:n.paddingXS},[`
          &-placement-topRight,
          &-placement-topLeft
          `]:{paddingBottom:n.paddingXS},[`
          &-placement-bottomRight,
          &-placement-bottomLeft
          `]:{paddingTop:n.paddingXS},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:S},ie(n)),xe(n)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:x},[`${e}-submenu-title::after`]:{transition:`transform ${r} ${d}`}})}}),xe(n)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${y})`},"&::after":{transform:`rotate(45deg) translateX(-${y})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(-${E*.2}px)`,"&::after":{transform:`rotate(-45deg) translateX(-${y})`},"&::before":{transform:`rotate(45deg) translateX(${y})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]};var Se=(n,t)=>(0,L.Z)("Menu",(o,r)=>{let{overrideComponentToken:l}=r;if(t===!1)return[];const{colorBgElevated:d,colorPrimary:c,colorError:f,colorErrorHover:v,colorTextLightSolid:C,controlHeightLG:h,fontSize:B}=o,S=B/7*5,x=(0,D.TS)(o,{menuItemHeight:h,menuItemPaddingInline:o.margin,menuArrowSize:S,menuHorizontalHeight:h*1.15,menuArrowOffset:`${S*.25}px`,menuPanelMaskInset:-7,menuSubMenuBg:d}),E=new u.C(C).setAlpha(.65).toRgbString(),y=(0,D.TS)(x,{itemColor:E,itemHoverColor:C,groupTitleColor:E,itemSelectedColor:C,itemBg:"#001529",subMenuItemBg:"#000c17",itemActiveBg:"transparent",itemSelectedBg:c,activeBarWidth:0,activeBarHeight:0,activeBarBorderWidth:0,itemDisabledColor:new u.C(C).setAlpha(.25).toRgbString(),dangerItemColor:f,dangerItemHoverColor:v,dangerItemSelectedColor:C,dangerItemActiveBg:f,dangerItemSelectedBg:f,menuSubMenuBg:"#001529",horizontalItemSelectedColor:C,horizontalItemSelectedBg:c},Object.assign({},l));return[Ce(x),k(x),U(x),T(x,"light"),T(y,"dark"),P(x),(0,z.Z)(x),(0,N.oN)(x,"slide-up"),(0,N.oN)(x,"slide-down"),(0,M._y)(x,"zoom-big")]},o=>{const{colorPrimary:r,colorError:l,colorTextDisabled:d,colorErrorBg:c,colorText:f,colorTextDescription:v,colorBgContainer:C,colorFillAlter:h,colorFillContent:B,lineWidth:S,lineWidthBold:x,controlItemBgActive:E,colorBgTextHover:y}=o;return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:f,itemColor:f,colorItemTextHover:f,itemHoverColor:f,colorItemTextHoverHorizontal:r,horizontalItemHoverColor:r,colorGroupTitle:v,groupTitleColor:v,colorItemTextSelected:r,itemSelectedColor:r,colorItemTextSelectedHorizontal:r,horizontalItemSelectedColor:r,colorItemBg:C,itemBg:C,colorItemBgHover:y,itemHoverBg:y,colorItemBgActive:B,itemActiveBg:B,colorSubItemBg:h,subMenuItemBg:h,colorItemBgSelected:E,itemSelectedBg:E,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:0,colorActiveBarHeight:x,activeBarHeight:x,colorActiveBarBorderSize:S,activeBarBorderWidth:S,colorItemTextDisabled:d,itemDisabledColor:d,colorDangerItemText:l,dangerItemColor:l,colorDangerItemTextHover:l,dangerItemHoverColor:l,colorDangerItemTextSelected:l,dangerItemSelectedColor:l,colorDangerItemBgActive:c,dangerItemActiveBg:c,colorDangerItemBgSelected:c,dangerItemSelectedBg:c,itemMarginInline:o.marginXXS,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent"}},{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"]]})(n),ye=function(n,t){var e={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&t.indexOf(o)<0&&(e[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,o=Object.getOwnPropertySymbols(n);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(n,o[r])&&(e[o[r]]=n[o[r]]);return e},Ee=(0,i.forwardRef)((n,t)=>{var e,o;const r=i.useContext(te.Z),l=r||{},{getPrefixCls:d,getPopupContainer:c,direction:f}=i.useContext(ae.E_),v=d(),{prefixCls:C,className:h,theme:B="light",expandIcon:S,_internalDisableMenuItemTitleTooltip:x,inlineCollapsed:E,siderCollapsed:y,items:G,children:Q,rootClassName:pe,mode:Ie,selectable:fe,onClick:$e,overflowedIndicatorPopupClassName:Oe}=n,Te=ye(n,["prefixCls","className","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),je=(0,w.Z)(Te,["collapsedWidth"]),Be=g(G)||Q;(e=l.validator)===null||e===void 0||e.call(l,{mode:Ie});const we=(0,R.Z)(function(){var _;$e==null||$e.apply(void 0,arguments),(_=l.onClick)===null||_===void 0||_.call(l)}),de=l.mode||Ie,ze=fe!=null?fe:l.selectable,be=i.useMemo(()=>y!==void 0?y:E,[E,y]),Ne={horizontal:{motionName:`${v}-slide-up`},inline:(0,I.ZP)(v),other:{motionName:`${v}-zoom-big`}},q=d("menu",C||l.prefixCls),[Re,De]=Se(q,!r),Ae=p()(`${q}-${B}`,h);let Pe;if(typeof S=="function")Pe=S;else{const _=S||l.expandIcon;Pe=(0,O.Tm)(_,{className:p()(`${q}-submenu-expand-icon`,(o=_==null?void 0:_.props)===null||o===void 0?void 0:o.className)})}const Le=i.useMemo(()=>({prefixCls:q,inlineCollapsed:be||!1,direction:f,firstLevel:!0,theme:B,mode:de,disableMenuItemTitleTooltip:x}),[q,be,f,x,B]);return Re(i.createElement(te.Z.Provider,{value:null},i.createElement(X.Provider,{value:Le},i.createElement(j.default,Object.assign({getPopupContainer:c,overflowedIndicator:i.createElement(Z.Z,null),overflowedIndicatorPopupClassName:p()(q,`${q}-${B}`,Oe),mode:de,selectable:ze,onClick:we},je,{inlineCollapsed:be,className:Ae,prefixCls:q,direction:f,defaultMotions:Ne,expandIcon:Pe,ref:t,rootClassName:p()(pe,De)}),Be))))});const le=(0,i.forwardRef)((n,t)=>{const e=(0,i.useRef)(null),o=i.useContext(ne.D);return(0,i.useImperativeHandle)(t,()=>({menu:e.current,focus:r=>{var l;(l=e.current)===null||l===void 0||l.focus(r)}})),i.createElement(Ee,Object.assign({ref:e},n,o))});le.Item=ge,le.SubMenu=s,le.Divider=V,le.ItemGroup=j.ItemGroup;var b=le}}]);

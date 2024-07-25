"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{4845:function(e,n,r){var t=r(85893),o=r(89262),l=r(67294),i=r(25934),a=r(99429),s=r(56903),c=r(53541);let d=(0,o.ZP)(s.Z)({justifyContent:"flex-end",width:"100%"});n.Z=e=>{let{actions:n=[],loading:r}=e,o=(0,l.useMemo)(()=>n.map(e=>(0,t.jsx)(a.Z,{...e,children:e.children},(0,i.Z)())),[n]);return r?(0,t.jsx)(c.Z,{mt:0}):(0,t.jsx)(d,{row:!0,spacing:".5em",children:o})}},30378:function(e,n,r){var t=r(89262),o=r(40860),l=r(53138),i=r(77831);let a=(0,t.ZP)(o.Z)({backgroundColor:"transparent",borderRadius:i.n_,height:"1em",["& .".concat(l.Z.bar)]:{borderRadius:i.n_}});n.Z=a},38196:function(e,n,r){var t=r(85893),o=r(89262),l=r(53138),i=r(14440),a=r(67294),s=r(77831),c=r(30378),d=r(19562);let u=(0,o.ZP)(c.Z)({height:".4em"}),m=(0,o.ZP)(d.Z)({height:".2em"});n.Z=e=>{let{barProps:n={},thin:r,underlineProps:o,value:h}=e,{sx:p,...x}=n,g=(0,a.useMemo)(()=>"value"in h?{default:h}:h,[h]),f=(0,a.useMemo)(()=>Object.entries(g).reverse(),[g]),Z=(0,a.useMemo)(()=>r?u:c.Z,[r]),v=(0,a.useMemo)(()=>r?m:d.Z,[r]),j=(0,a.useMemo)(()=>f.map((e,n)=>{var r,t;let o,i,[c,{colour:d=s.s7,value:u}]=e,m="string"==typeof d?d:null!==(t=null===(r=Object.entries(d).reverse().find(e=>{let[n]=e;return u>=Number(n)}))||void 0===r?void 0:r[1])&&void 0!==t?t:s.s7,h="relative";return n&&(h="absolute",o=0,i="100%"),(0,a.createElement)(Z,{key:"stack-bar-".concat(c),sx:{position:h,top:o,width:i,["& .".concat(l.Z.bar)]:{backgroundColor:m},...p},variant:"determinate",value:u,...x})}),[p,f,Z,x]);return(0,t.jsxs)(i.Z,{position:"relative",children:[j,(0,a.createElement)(v,o)]})}},19562:function(e,n,r){var t=r(89262),o=r(14440),l=r(77831);let i=(0,t.ZP)(o.Z)({backgroundColor:l.rr,borderRadius:l.n_,display:"block",height:"4px",position:"relative"});n.Z=i},40743:function(e,n,r){r.d(n,{CD:function(){return u},ko:function(){return x}});var t=r(85893),o=r(89262),l=r(77831),i=r(30378),a=r(19562);let s="AllocationBar",c={barOk:"".concat(s,"-barOk"),barWarning:"".concat(s,"-barWarning"),barAlert:"".concat(s,"-barAlert")},d=(0,o.ZP)("div")(()=>({["& .".concat(c.barOk)]:{backgroundColor:l.Ej},["& .".concat(c.barWarning)]:{backgroundColor:l.Wd},["& .".concat(c.barAlert)]:{backgroundColor:l.hM}}));var u=e=>{let{allocated:n}=e;return(0,t.jsxs)(d,{children:[(0,t.jsx)(i.Z,{classes:{bar:n>70?n>90?c.barAlert:c.barWarning:c.barOk},variant:"determinate",value:n}),(0,t.jsx)(a.Z,{})]})};let m="ProgressBar",h={barOk:"".concat(m,"-barOk"),barInProgress:"".concat(m,"-barInProgress")},p=(0,o.ZP)("div")(()=>({["& .".concat(h.barOk)]:{backgroundColor:l.Ej},["& .".concat(h.barInProgress)]:{backgroundColor:l.Wd}}));var x=e=>{let{progressPercentage:n}=e;return(0,t.jsxs)(p,{children:[(0,t.jsx)(i.Z,{classes:{bar:n<100?h.barInProgress:h.barOk},variant:"determinate",value:n}),(0,t.jsx)(a.Z,{})]})};r(38196)},45486:function(e,n,r){var t=r(85893),o=r(89262),l=r(20869),i=r(10736),a=r(67294),s=r(77831);let c="Checkbox",d={invert:"".concat(c,"-invert"),thinPadding:"".concat(c,"-thin-padding")},u=(0,o.ZP)(l.Z)({color:s.s7,["&.".concat(i.Z.checked)]:{color:s.s7},["&.".concat(d.invert)]:{color:s.E5,["&.".concat(i.Z.checked)]:{color:s.E5}},["&.".concat(d.thinPadding)]:{padding:".2em"}});n.Z=e=>{let{className:n,invert:r,thinPadding:o,...l}=e,i=(0,a.useMemo)(()=>{let e=[];return n&&e.push(n),r&&e.push(d.invert),o&&e.push(d.thinPadding),e.join(" ")},[n,r,o]);return(0,t.jsx)(u,{className:i,...l})}},99429:function(e,n,r){r.d(n,{D:function(){return s}});var t=r(85893),o=r(89262),l=r(34815),i=r(46778),a=r(77831);let s={blue:a.Ej,normal:a.s7,red:a.hM},c=(0,o.ZP)(l.Z)({backgroundColor:a.s7,color:a.E5,textTransform:"none","&:hover":{backgroundColor:"".concat(a.s7,"F0")},["&.".concat(i.Z.disabled)]:{backgroundColor:a.rr}}),d=(0,o.ZP)(e=>(0,t.jsx)(c,{variant:"contained",...e}))(e=>{let n,r;let{background:t="normal"}=e;return"normal"!==t&&(n=s[t],r=a.lD),{backgroundColor:n,color:r,"&:hover":{backgroundColor:"".concat(n,"F0")}}});n.Z=d},33544:function(e,n,r){r.d(n,{ux:function(){return m},VZ:function(){return j},Js:function(){return P}});var t=r(85893),o=r(92309),l=r(67294),i=r(23930),a=r(53541);let s=(0,l.createContext)(void 0),c=(0,l.forwardRef)((e,n)=>{let{children:r,dialogProps:c={},loading:d,openInitially:u=!1,wide:m}=e,{open:h,PaperProps:p={},...x}=c,{sx:g,...f}=p,[Z,v]=(0,l.useState)(u),j=(0,l.useMemo)(()=>null!=h?h:Z,[Z,h]),b=(0,l.useMemo)(()=>d?(0,t.jsx)(a.Z,{mt:0}):r,[r,d]),P=(0,l.useMemo)(()=>({minWidth:m?{xs:"calc(100%)",md:"50em"}:null,overflow:"visible",...g}),[g,m]);return(0,l.useImperativeHandle)(n,()=>({open:j,setOpen:v}),[j]),(0,t.jsx)(o.Z,{open:j,PaperComponent:i.s_,PaperProps:{...f,sx:P},...x,children:(0,t.jsx)(s.Provider,{value:{open:j,setOpen:v},children:b})})});c.displayName="Dialog";var d=r(4845);let u=function(e){let{handlers:{base:n,origin:r}}=e;for(var t=arguments.length,o=Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];null==n||n.call(null,...o),null==r||r.call(null,...o)};var m=e=>{let{cancelProps:n,closeOnProceed:r,loading:o=!1,onCancel:i=u,onProceed:a=u,proceedColour:c,proceedProps:m,showCancel:h=!0,cancelChildren:p=null==n?void 0:n.children,proceedChildren:x=null==m?void 0:m.children}=e,g=(0,l.useContext)(s),f=(0,l.useCallback)(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return i({handlers:{base:()=>{null==g||g.setOpen(!1)},origin:null==n?void 0:n.onClick}},...r)},[null==n?void 0:n.onClick,g,i]),Z=(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return a({handlers:{base:()=>{r&&(null==g||g.setOpen(!1))},origin:null==m?void 0:m.onClick}},...n)},[r,g,a,null==m?void 0:m.onClick]);return(0,l.useMemo)(()=>{let e=[{background:c,...m,children:x,onClick:Z}];return h&&e.unshift({...n,children:p,onClick:f}),(0,t.jsx)(d.Z,{actions:e,loading:o})},[p,f,n,o,x,c,Z,m,h])},h=r(65895),p=r(87006),x=r(59278),g=e=>{let{children:n,onClose:r=function(e){let{handlers:{base:n}}=e;for(var r=arguments.length,t=Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];return null==n?void 0:n.call(null,...t)},showClose:o}=e,a=(0,l.useContext)(s),c=(0,l.useCallback)(function(){for(var e=arguments.length,n=Array(e),t=0;t<e;t++)n[t]=arguments[t];return r({handlers:{base:()=>{null==a||a.setOpen(!1)}}},...n)},[a,r]),d=(0,l.useMemo)(()=>(0,p.Z)(n,x.z),[n]),u=(0,l.useMemo)(()=>o&&(0,t.jsx)(h.Z,{mapPreset:"close",onClick:c,size:"small"}),[c,o]);return(0,t.jsxs)(i.V9,{children:[d,u]})},f=r(89262),Z=r(14440);let v=(0,f.ZP)(Z.Z)({overflowY:"scroll",paddingRight:".4em"});var j=(0,f.ZP)(v)({maxHeight:"60vh"});let b=(0,l.forwardRef)((e,n)=>{let{children:r,dialogProps:o,header:l,loading:i,onClose:a,openInitially:s,showClose:d,wide:u}=e;return(0,t.jsxs)(c,{dialogProps:o,loading:i,openInitially:s,ref:n,wide:u,children:[(0,t.jsx)(g,{onClose:a,showClose:d,children:l}),r]})});b.displayName="DialogWithHeader";var P=b},29535:function(e,n,r){var t=r(89262),o=r(59505),l=r(77831);let i=(0,t.ZP)(o.Z)({backgroundColor:l.d});n.Z=i},56903:function(e,n,r){var t=r(85893),o=r(14440),l=r(67294);let i={columnSpacing:void 0,fullWidth:!1,growFirst:!1,row:!1,rowSpacing:void 0,lg:void 0,md:void 0,sm:void 0,spacing:"1em",xl:void 0,xs:"column"},a=e=>{let{fullWidth:n,growFirst:r,lg:a=i.lg,md:s=i.md,row:c,sm:d=i.sm,spacing:u=i.spacing,sx:m,xl:h=i.xl,xs:p=i.xs,columnSpacing:x=u,rowSpacing:g=u,...f}=e,Z=(0,l.useMemo)(()=>c?"row":p,[p,c]),v=(0,l.useMemo)(()=>d||Z,[d,Z]),j=(0,l.useMemo)(()=>s||v,[s,v]),b=(0,l.useMemo)(()=>a||j,[a,j]),P=(0,l.useMemo)(()=>h||b,[h,b]),w=(0,l.useMemo)(()=>({column:{alignItems:"normal",marginLeft:0,marginTop:x},row:{alignItems:"center",marginLeft:g,marginTop:0}}),[x,g]),C=(0,l.useMemo)(()=>r?1:void 0,[r]),k=(0,l.useMemo)(()=>n?"100%":void 0,[n]);return(0,t.jsx)(o.Z,{...f,sx:{alignItems:{xs:w[Z].alignItems,sm:w[v].alignItems,md:w[j].alignItems,lg:w[b].alignItems,xl:w[P].alignItems},display:"flex",flexDirection:{xs:Z,sm:v,md:j,lg:b,xl:P},width:k,"& > :first-child":{flexGrow:C},"& > :not(:first-child)":{marginLeft:{xs:w[Z].marginLeft,sm:w[v].marginLeft,md:w[j].marginLeft,lg:w[b].marginLeft,xl:w[P].marginLeft},marginTop:{xs:w[Z].marginTop,sm:w[v].marginTop,md:w[j].marginTop,lg:w[b].marginTop,xl:w[P].marginTop}},...m}})};a.defaultProps=i,n.Z=a},60207:function(e,n,r){var t=r(31530),o=r(12641),l=r(85986),i=r(14905),a=r(85725),s=r(31621),c=r(56134),d=r(19607),u=r(58811),m=r(89262),h=r(80594),p=r(79588),x=r(67294),g=r(77831);let f=(0,m.ZP)(h.Z)({borderRadius:g.n_,backgroundColor:g.s7,color:g.E5,"&:hover":{backgroundColor:"".concat(g.s7,"F0")},["&.".concat(p.Z.disabled)]:{backgroundColor:g.rr}}),Z=(0,m.ZP)(f)({backgroundColor:g.hM,color:g.s7,"&:hover":{backgroundColor:"".concat(g.hM,"F0")}}),v=(0,m.ZP)(h.Z)({color:g.s7}),j={none:{iconType:t.Z}},b={none:{iconType:o.Z}},P={none:{iconType:l.Z}},w={none:{iconType:i.Z}},C={add:j,close:b,copy:P,delete:w,edit:{false:{iconType:a.Z},true:{iconType:s.Z,iconProps:{sx:{color:g.Ej}}}},play:{none:{iconType:c.Z}},visibility:{false:{iconType:d.Z},true:{iconType:u.Z}}},k={contained:f,normal:v,redcontained:Z};n.Z=e=>{let{children:n,defaultIcon:r,iconProps:t,mapPreset:o,mapToIcon:l,state:i="none",variant:a="contained",...s}=e,c=(0,x.useMemo)(()=>null!=l?l:o&&C[o],[l,o]),d=(0,x.useMemo)(()=>{let e;if(c){var o;let{iconType:n,iconProps:l}=null!==(o=c[i])&&void 0!==o?o:{iconType:r};n&&(e=(0,x.createElement)(n,{...l,...t}))}else e=n;return e},[n,r,t,c,i]),u=(0,x.useMemo)(()=>k[a],[a]);return(0,x.createElement)(u,s,d)}},65895:function(e,n,r){var t=r(60207);n.Z=t.Z},85838:function(e,n,r){var t=r(85893),o=r(14440),l=r(67294),i=r(77831),a=r(56903),s=r(59278);let c="1.7em",d={iconProps:{},indicatorProps:{},indicatorTextProps:{},initialIndicatorValue:!1},u={small:"24%",medium:"50%"},m={small:".1rem",medium:"0rem"},h=(0,l.forwardRef)((e,n)=>{let{icon:r,iconProps:{sx:h,...p}=d.iconProps,indicatorProps:{sx:x,...g}=d.indicatorProps,indicatorTextProps:{sx:f,...Z}=d.indicatorTextProps,initialIndicatorValue:v=d.initialIndicatorValue,sx:j}=e,[b,P]=(0,l.useState)(v),w=(0,l.useCallback)((e,n,r)=>(0,t.jsx)(a.Z,{row:!0,...g,sx:{backgroundColor:i.Ej,borderColor:i.E5,borderRadius:"50%",borderStyle:"solid",borderWidth:".1em",bottom:r,boxSizing:"content-box",height:0,justifyContent:"center",paddingBottom:n,position:"absolute",right:r,width:n,...x},children:e}),[x,g]),C=(0,l.useCallback)(e=>(0,t.jsx)(s.Ac,{...Z,sx:{fontWeight:"500",paddingTop:"100%",...f},children:Number(e)>9?"".concat(9,"+"):e}),[f,Z]),k=(0,l.useMemo)(()=>{let e;if(b){let n;let r=u.small,t=m.small;Number.isFinite(b)&&(n=C(b),r=u.medium,t=m.medium),e=w(n,r,t)}return e},[w,C,b]);return(0,l.useImperativeHandle)(n,()=>({indicate:e=>P(e)}),[P]),(0,t.jsxs)(o.Z,{sx:{height:c,width:c,position:"relative",...j},children:[(0,l.createElement)(r,{...p,sx:{height:"100%",width:"100%",...h}}),k]})});h.defaultProps=d,h.displayName="IconWithIndicator",n.Z=h},56399:function(e,n,r){r.d(n,{Z:function(){return z}});var t=r(85893),o=r(65086),l=r(67294),i=r(92230),a=r(33544),s=r(56903),c=r(49360),d=r(63885),u=r(99514),m=r(38189),h=r(40743),p=r(65895),x=r(99576),g=r(95277),f=r(23930),Z=r(48430),v=r(14440),j=r(77831),b=e=>{let{children:n,...r}=e;return(0,t.jsx)(v.Z,{color:j.lD,component:"pre",whiteSpace:"pre-wrap",width:"100%",...r,children:n})},P=r(53541),w=r(59278),C=r(41021);let k=e=>{let n=new Date(1e3*e),r=n.getMonth()+1,t=n.getDate(),o=n.getHours(),l=n.getMinutes(),i=n.getSeconds();return"".concat((0,g.Z)(r),"-").concat((0,g.Z)(t),", ").concat((0,g.Z)(o),":").concat((0,g.Z)(l),":").concat((0,g.Z)(i))};var y=e=>{let{refreshInterval:n=1e4,uuid:r}=e,o=(0,c.Z)(),g=(0,d.Z)(o.breakpoints.up("sm")),[v,j]=(0,l.useState)({children:"Job ".concat(r," details unavailable"),type:"warning"}),{data:y,isLoading:M}=(0,Z.Z)("".concat(i.Z,"/job/").concat(r),{onError:e=>{j({children:"Failed to get job ".concat(r," details. Error: ").concat(e),type:"error"})},refreshInterval:n}),I=(0,C.zO)(),A=(0,l.useMemo)(()=>y&&Object.entries(y.data).map(e=>{let[n,r]=e,o=m.JW.test(r.name)&&r.value.length>0?(0,t.jsx)(w.PJ,{children:r.value}):r.value;return(0,t.jsxs)(w.KI,{monospaced:!0,noWrap:!0,textOverflow:"initial",children:[r.name,"=",o]},"data-".concat(n))}),[y]),S=(0,l.useMemo)(()=>{if(!y)return;let e=Object.values(y.status).reduce((e,n)=>"".concat(e).concat(n.value,"\n\n"),"").trimEnd();return(0,t.jsx)(b,{children:e})},[y]),E=(0,l.useMemo)(()=>y&&k(y.started),[y]),R=(0,l.useMemo)(()=>y&&k(y.modified),[y]),T=(0,l.useMemo)(()=>y&&(0,C.F6)(I-y.started),[y,I]),W=(0,l.useMemo)(()=>y&&(0,C.F6)(I-y.modified),[y,I]),O=y?(0,t.jsx)(a.VZ,{children:(0,t.jsxs)(u.ZP,{columns:1,container:!0,rowGap:".6em",children:[(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsx)(w.Ac,{children:y.title})}),(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsx)(h.ko,{progressPercentage:y.progress})}),(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsx)(w.Ac,{children:y.description})}),(0,t.jsxs)(u.ZP,{columns:2,container:!0,item:!0,children:[(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.Ac,{children:"Host"})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.KI,{monospaced:!0,noWrap:!0,textAlign:"end",children:g?y.host.name:y.host.shortName})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.Ac,{children:"PID"})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.KI,{monospaced:!0,noWrap:!0,textAlign:"end",children:y.pid})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.Ac,{children:"Started"})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsxs)(w.Ac,{noWrap:!0,textAlign:"end",children:["~",T," ago",g&&" (".concat(E,")")]})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsx)(w.Ac,{children:"Last updated"})}),(0,t.jsx)(u.ZP,{item:!0,xs:1,children:(0,t.jsxs)(w.Ac,{noWrap:!0,textAlign:"end",children:["~",W," ago",g&&" (".concat(R,")")]})})]}),(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsx)(f.TZ,{header:(0,t.jsxs)(s.Z,{fullWidth:!0,growFirst:!0,row:!0,children:[(0,t.jsx)(w.Ac,{children:"Command"}),(0,t.jsx)(p.Z,{iconProps:{fontSize:"small"},mapPreset:"copy",onClick:()=>navigator.clipboard.writeText(y.command),size:"small"})]}),panelProps:{mb:0,mt:0},children:(0,t.jsx)(s.Z,{overflow:"scroll",paddingBottom:".8em",children:(0,t.jsx)(w.KI,{monospaced:!0,noWrap:!0,textOverflow:"initial",width:"max-content",children:y.command})})})}),(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsx)(f.TZ,{header:(0,t.jsxs)(s.Z,{fullWidth:!0,growFirst:!0,row:!0,children:[(0,t.jsx)(w.Ac,{children:"Data"}),(0,t.jsx)(p.Z,{iconProps:{fontSize:"small"},mapPreset:"copy",onClick:()=>{let e=Object.values(y.data).reduce((e,n)=>{let{name:r,value:t}=n;return"".concat(e).concat(r,"=").concat(t,"\n")},"");navigator.clipboard.writeText(e)},size:"small"})]}),panelProps:{mb:0,mt:0},children:(0,t.jsx)(s.Z,{overflow:"scroll",paddingBottom:".8em",spacing:".2em",sx:{"& > *":{width:"max-content"}},children:A})})}),(0,t.jsx)(u.ZP,{item:!0,width:"100%",children:(0,t.jsxs)(f.Lg,{mb:0,mt:0,children:[(0,t.jsx)(f.CH,{children:(0,t.jsx)(w.Ac,{children:"Status"})}),(0,t.jsx)(f.bc,{children:S})]})})]})}):(0,t.jsx)(x.Z,{...v});return M?(0,t.jsx)(P.Z,{}):O},M=r(83916),I=r(89262),A=r(34934);let S="PieProgress",E={complete:"".concat(S,"-complete"),inProgress:"".concat(S,"-in-progress")},R=(0,I.ZP)(A.Z)({["&.".concat(E.complete)]:{color:j.Ej},["&.".concat(E.inProgress)]:{color:j.Wd}});var T=e=>{let{value:n,...r}=e,o=(0,l.useMemo)(()=>n&&100===n?E.complete:E.inProgress,[n]);return(0,t.jsx)(R,{classes:{root:o},size:"1.6em",thickness:22,value:n,variant:"determinate",...r})};let W="20em",O={getJobUrl:()=>"".concat(i.Z,"/job"),onFetchSuccessAppend:void 0,openInitially:!1,refreshInterval:1e4},N=(0,l.forwardRef)((e,n)=>{let{getJobUrl:r=O.getJobUrl,onFetchSuccessAppend:i,openInitially:c=O.openInitially,refreshInterval:d=O.refreshInterval}=e,u=(0,l.useRef)(null),[m,h]=(0,l.useState)(),[p,x]=(0,l.useState)(c),[g,f]=(0,l.useState)(),v=(0,l.useMemo)(()=>(0,C.zO)(),[]),j=(0,C.zO)(),{data:b}=(0,Z.Z)(r(v),{onError:()=>{},onSuccess:e=>{null==i||i.call(null,e)},refreshInterval:d});(0,l.useImperativeHandle)(n,()=>({setAnchor:e=>f(e),setOpen:e=>x(e)}),[]);let P=(0,l.useMemo)(()=>(0,t.jsx)(s.Z,{children:(0,t.jsx)(M.Z,{allowItemButton:!0,listEmpty:"No running or recently completed jobs.",listItems:b,listProps:{sx:{maxHeight:W,width:W}},onItemClick:e=>{var n;let{uuid:r}=e;h(r),null===(n=u.current)||void 0===n||n.setOpen(!0)},renderListItem:(e,n)=>{let r;let{host:o,name:l,progress:i,started:a,title:c}=n,{shortName:d}=o;if(a){let{unit:e,value:n}=(0,C._J)(j-a);r="Started ~".concat(n).concat(e," ago on ").concat(d,".")}else r="Queued on ".concat(d);return(0,t.jsxs)(s.Z,{fullWidth:!0,spacing:".2em",children:[(0,t.jsxs)(s.Z,{row:!0,spacing:".5em",children:[(0,t.jsx)(T,{sx:{flexShrink:0},value:i}),(0,t.jsx)(w.Ac,{sx:{overflowX:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:c||l})]}),(0,t.jsx)(w.Ac,{children:r})]})},scroll:!0})}),[b,j]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.Z,{anchorEl:g,onClose:()=>{x(!1),f(void 0)},open:p,variant:"menu",children:P}),(0,t.jsx)(a.Js,{header:"",ref:u,showClose:!0,wide:!0,children:m&&(0,t.jsx)(y,{uuid:m})})]})});N.defaultProps=O,N.displayName="JobSummary";var z=N},83916:function(e,n,r){var t=r(85893),o=r(67294),l=r(31530),i=r(14905),a=r(31621),s=r(85725),c=r(14440),d=r(6621),u=r(54965),m=r(49520),h=r(37969),p=r(77831),x=r(45486),g=r(29535),f=r(56903),Z=r(65895),v=r(53541),j=r(59278);let b=(0,o.forwardRef)(e=>{let{allowCheckAll:n=!1,allowEdit:r=!1,allowItemButton:b=!1,disableDelete:P=!1,edit:w=!1,flexBoxProps:C,getListCheckboxProps:k,getListItemCheckboxProps:y,header:M,headerSpacing:I=".3em",insertHeader:A=!0,listEmpty:S,listItemIconMinWidth:E="56px",listItemKeyPrefix:R="list",listItemProps:{sx:T,...W}={},listItems:O,listProps:{sx:N,...z}={},loading:F,onAdd:D,onDelete:_,onEdit:L,onAllCheckboxChange:q,onItemCheckboxChange:B,onItemClick:H,renderListItem:J=e=>(0,t.jsx)(j.Ac,{children:e}),renderListItemCheckboxState:$,scroll:G=!1,allowAddItem:V=r,allowCheckItem:K=r,allowDelete:U=r,allowEditItem:Q=r}=e,X=(0,o.useMemo)(()=>"calc(".concat(E," - ").concat(I,")"),[I,E]),Y=(0,o.useMemo)(()=>V?(0,t.jsx)(Z.Z,{onClick:D,size:"small",children:(0,t.jsx)(l.Z,{})}):void 0,[V,D]),ee=(0,o.useMemo)(()=>w&&U?(0,t.jsx)(Z.Z,{disabled:P,onClick:_,size:"small",sx:{backgroundColor:p.hM,color:p.s7,"&:hover":{backgroundColor:"".concat(p.hM,"F0")}},children:(0,t.jsx)(i.Z,{})}):void 0,[P,U,w,_]),en=(0,o.useMemo)(()=>{if(Q)return(0,t.jsx)(Z.Z,{onClick:L,size:"small",children:w?(0,t.jsx)(a.Z,{sx:{color:p.Ej}}):(0,t.jsx)(s.Z,{})})},[Q,w,L]),er=(0,o.useMemo)(()=>{let e;return w&&K&&(e=n?(0,t.jsx)(c.Z,{sx:{minWidth:X},children:(0,t.jsx)(x.Z,{edge:"start",onChange:q,...null==k?void 0:k.call(null)})}):(0,t.jsx)(g.Z,{sx:{minWidth:X}})),e},[X,k,n,K,w,q]),et=(0,o.useMemo)(()=>{let e=typeof M;return A&&M?(0,t.jsxs)(f.Z,{row:!0,spacing:I,sx:{height:"2.4em"},children:[er,["boolean","string"].includes(e)?(0,t.jsxs)(t.Fragment,{children:["string"===e&&(0,t.jsx)(j.Ac,{children:M}),(0,t.jsx)(g.Z,{sx:{flexGrow:1}})]}):M,ee,en,Y]}):M},[Y,er,ee,en,M,I,A]),eo=(0,o.useMemo)(()=>"string"==typeof S?(0,t.jsx)(j.Ac,{align:"center",children:S}):S,[S]),el=(0,o.useCallback)((e,n,r)=>w&&K?(0,t.jsx)(d.Z,{sx:{minWidth:E},children:(0,t.jsx)(x.Z,{checked:n,edge:"start",onChange:function(){for(var n=arguments.length,r=Array(n),t=0;t<n;t++)r[t]=arguments[t];return null==B?void 0:B.call(null,e,...r)},...r})}):void 0,[K,w,E,B]),ei=(0,o.useMemo)(()=>{if(F)return(0,t.jsx)(v.Z,{});if(!O)return eo;let e=Object.entries(O);return e.length<=0?eo:e.map(e=>{let[n,r]=e,l=J(n,r);return(0,o.createElement)(u.ZP,{...W,key:"".concat(R,"-").concat(n),sx:{paddingLeft:0,paddingRight:0,...T},children:[el(n,null==$?void 0:$.call(null,n,r),null==y?void 0:y.call(null,n,r)),b?(0,t.jsx)(m.Z,{onClick:function(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];null==H||H.call(null,r,n,...t)},sx:{borderRadius:p.n_},children:l}):l]})})},[y,b,eo,el,R,T,O,F,H,J,$,W]),ea=(0,o.useMemo)(()=>G?{maxHeight:"100%",overflowY:"scroll"}:void 0,[G]);return(0,t.jsxs)(f.Z,{spacing:0,...C,children:[et,(0,t.jsx)(h.Z,{...z,sx:{paddingBottom:0,paddingTop:0,...ea,...N},children:ei})]})});b.displayName="List",n.Z=b},99576:function(e,n,r){var t=r(85893),o=r(67294),l=r(14440),i=r(80594),a=r(92763),s=r(60677),c=r(69172),d=r(12641),u=r(77831),m=r(59278);let h="MessageBox",p={error:"".concat(h,"-error"),info:"".concat(h,"-info"),warning:"".concat(h,"-warning")},x={error:(0,t.jsx)(a.Z,{}),info:(0,t.jsx)(s.Z,{}),warning:(0,t.jsx)(c.Z,{})},g={isShowInitially:!0,isAllowClose:!1,onClose:void 0,onCloseAppend:void 0,text:void 0,type:"info"},f=e=>{let{children:n,isAllowClose:r=g.isAllowClose,isShowInitially:a=g.isShowInitially,onClose:s,onCloseAppend:c,type:h=g.type,text:f,...Z}=e,{sx:v}=Z,[j,b]=(0,o.useState)(a),P=(0,o.useMemo)(()=>r||void 0!==s||void 0!==c,[r,s,c]),w=(0,o.useCallback)(e=>p[e],[]),C=(0,o.useCallback)(e=>void 0===x[e]?x.info:x[e],[]),k=(0,o.useCallback)(function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;return(0,t.jsx)(m.Ac,{inverted:"info"===e,children:r})},[n]),y=(0,o.useMemo)(()=>({alignItems:"center",borderRadius:u.n_,display:"flex",flexDirection:"row",padding:".3em .6em","& > *":{color:u.lD},"& > :first-child":{marginRight:".3em"},"& > :nth-child(2)":{flexGrow:1},["&.".concat(p.error)]:{backgroundColor:u.hM},["&.".concat(p.info)]:{backgroundColor:u.s7,"& > *":{color:"".concat(u.E5)}},["&.".concat(p.warning)]:{backgroundColor:u.Wd},...v}),[v]);return j?(0,t.jsxs)(l.Z,{...Z,className:w(h),sx:y,children:[C(h),k(h,f),P&&(0,t.jsx)(i.Z,{onClick:null!=s?s:function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];b(!1),null==c||c.call(null,...n)},children:(0,t.jsx)(d.Z,{sx:{fontSize:"1.25rem"}})})]}):(0,t.jsx)(t.Fragment,{})};f.defaultProps=g,n.Z=f},23930:function(e,n,r){r.d(n,{TZ:function(){return f},Lg:function(){return u},bc:function(){return m},CH:function(){return h},s_:function(){return y},V9:function(){return M}});var t=r(85893),o=r(39586),l=r(92936),i=r(80594),a=r(14440),s=r(67294),c=r(77831),d=r(56903),u=e=>{let{headerMarginOffset:n=".3em",ml:r,mv:o="1.4em",sx:l,mb:i=o,mt:d=o,...u}=e,m=(0,s.useMemo)(()=>r?"calc(".concat(r," + ").concat(n,")"):n,[n,r]),h=(0,s.useMemo)(()=>{let e="number"==typeof d?"".concat(d,"px"):d;return"calc(".concat(e," + ").concat(n,")")},[n,d]),p=(0,s.useMemo)(()=>({borderWidth:"1px",borderRadius:c.n_,borderStyle:"solid",borderColor:c.d,paddingBottom:0,position:"relative",...l}),[l]);return(0,t.jsx)(a.Z,{mb:i,ml:m,mt:h,...u,sx:p})},m=e=>{let{sx:n,...r}=e,o=(0,s.useMemo)(()=>({position:"relative",zIndex:20,...n}),[n]);return(0,t.jsx)(a.Z,{padding:".3em .7em",...r,sx:o})},h=e=>{let{children:n}=e;return(0,t.jsxs)(a.Z,{sx:{position:"relative",whiteSpace:"pre-wrap"},children:[(0,t.jsx)(a.Z,{sx:{alignItems:"center",borderColor:c.d,borderRadius:c.n_,borderStyle:"solid",borderWidth:"1px",display:"flex",left:"-.3em",paddingBottom:".2em",paddingLeft:"1em",paddingRight:".7em",paddingTop:".4em",position:"absolute",top:"-.3em",width:"100%",zIndex:"10","& > :first-child":{flexGrow:1},"& > :not(:first-child, :last-child)":{marginRight:".3em"}},children:n}),(0,t.jsx)(a.Z,{sx:{display:"flex",paddingBottom:".4em",paddingRight:"1.7em",visibility:"hidden"},children:n})]})},p=r(53541),x=r(59278);let g="1.2em";var f=e=>{let{children:n,expandInitially:r=!1,header:f,loading:Z=!1,panelProps:v,showHeaderSpinner:j=!1}=e,[b,P]=(0,s.useState)(r),w=(0,s.useMemo)(()=>b?(0,t.jsx)(o.Z,{}):(0,t.jsx)(l.Z,{}),[b]),C=(0,s.useMemo)(()=>b?"auto":".2em",[b]),k=(0,s.useMemo)(()=>"string"==typeof f?(0,t.jsx)(x.Ac,{children:f}):f,[f]),y=(0,s.useMemo)(()=>j&&!b&&Z?(0,t.jsx)(p.Z,{progressProps:{style:{height:g,width:g}}}):void 0,[b,Z,j]),M=(0,s.useMemo)(()=>b&&Z?(0,t.jsx)(p.Z,{sx:{margin:"1em 0"}}):(0,t.jsx)(m,{children:n}),[n,b,Z]);return(0,t.jsxs)(u,{...v,children:[(0,t.jsxs)(h,{children:[(0,t.jsxs)(d.Z,{row:!0,children:[k,y]}),(0,t.jsx)(i.Z,{onClick:()=>{P(e=>!e)},sx:{color:c.s7,padding:".2em"},children:w})]}),(0,t.jsx)(a.Z,{sx:{height:C,overflowY:"hidden"},children:M})]})},Z=r(89262),v=r(31691);let j="Panel",b={paper:"".concat(j,"-paper"),square:"".concat(j,"-square"),topSquare:"".concat(j,"-topSquare"),bottomSquare:"".concat(j,"-bottomSquare")},P=(0,Z.ZP)(a.Z)(()=>({margin:"1em",position:"relative",["& .".concat(b.paper)]:{backgroundColor:c.v9,height:"100%",opacity:.8,padding:"2.1em",position:"relative",width:"100%",zIndex:10},["& .".concat(b.square)]:{content:'""',position:"absolute",width:"2.1em",height:"2.1em",border:"1px",borderColor:c.lD,borderWidth:"1px",borderRadius:c.n_,borderStyle:"solid",padding:0,margin:0},["& .".concat(b.topSquare)]:{top:"-.3em",left:"-.3em"},["& .".concat(b.bottomSquare)]:{bottom:"-.3em",right:"-.3em"}})),w={paperProps:{}},C=(0,t.jsx)(v.Z,{styles:{"*::-webkit-scrollbar":{width:".6em"},"*::-webkit-scrollbar-track":{backgroundColor:c.v9},"*::-webkit-scrollbar-thumb":{backgroundColor:c.lD,outline:"1px solid transparent",borderRadius:c.n_}}}),k=e=>{let{children:n,classes:r,className:o,paperProps:{className:l,...i}=w.paperProps,sx:s,...c}=e;return(0,t.jsxs)(P,{classes:r,className:o,sx:s,...c,children:[C,(0,t.jsx)(a.Z,{className:"".concat(b.square," ").concat(b.topSquare)}),(0,t.jsx)(a.Z,{className:"".concat(b.square," ").concat(b.bottomSquare)}),(0,t.jsx)(a.Z,{...i,className:"".concat(b.paper," ").concat(l),children:n})]})};k.defaultProps=w;var y=k,M=(0,Z.ZP)(a.Z)({alignItems:"center",display:"flex",flexDirection:"row",marginBottom:"1em",width:"100%","& > :first-child":{flexGrow:1},"& > :not(:first-child, :last-child)":{marginRight:".3em"}})},53541:function(e,n,r){r.d(n,{Z:function(){return m}});var t=r(85893),o=r(89262),l=r(14440),i=r(34934),a=r(77831);let s=(0,o.ZP)(i.Z)({color:a.s7}),c={progressProps:{}},d=(0,o.ZP)(l.Z)({alignItems:"center",display:"flex",justifyContent:"center"}),u=e=>{let{mt:n="3em",progressProps:r=c.progressProps,...o}=e;return(0,t.jsx)(d,{mt:n,...o,children:(0,t.jsx)(s,{variant:"indeterminate",...r})})};u.defaultProps=c;var m=u},59278:function(e,n,r){r.d(n,{Ac:function(){return m},z:function(){return g},Q0:function(){return Z},$_:function(){return v},PJ:function(){return w},KI:function(){return f}});var t=r(85893),o=r(67294),l=r(94246),i=r(77831);let a="BodyText",s={edge:null,inheritColour:!1,inline:!1,inverted:!1,monospaced:!1,selected:!0,text:null},c={inheritColour:"".concat(a,"-inherit-colour"),inverted:"".concat(a,"-inverted"),monospaced:"".concat(a,"-monospaced"),selected:"".concat(a,"-selected"),unselected:"".concat(a,"-unselected")},d=e=>{let{isInheritColour:n,isInvert:r,isMonospace:t,isSelect:o}=e,l=[];return n?l.push(c.inheritColour):r?l.push(c.inverted):o?l.push(c.selected):l.push(c.unselected),t&&l.push(c.monospaced),l.join(" ")},u=e=>{let{children:n,className:r,inheritColour:a=s.inheritColour,inline:u=s.inline,inverted:m=s.inverted,monospaced:h=s.monospaced,selected:p=s.selected,sx:x,text:g=s.text,...f}=e,Z=(0,o.useMemo)(()=>u?"inline":void 0,[u]),v=(0,o.useMemo)(()=>d({isInheritColour:a,isInvert:m,isMonospace:h,isSelect:p}),[a,m,h,p]),j=(0,o.useMemo)(()=>null!=g?g:n,[n,g]);return(0,t.jsx)(l.Z,{className:"".concat(v," ").concat(r),variant:"subtitle1",...f,sx:{display:Z,["&.".concat(c.inverted)]:{color:i.E5},["&.".concat(c.monospaced)]:{fontFamily:"Source Code Pro",fontWeight:400},["&.".concat(c.selected)]:{color:i.lD},["&.".concat(c.unselected)]:{color:i.UZ},...x},children:j})};u.defaultProps=s;var m=u,h=r(89262);let p=(0,h.ZP)(l.Z)({color:i.lD}),x=e=>{let{children:n,text:r,...l}=e,i=(0,o.useMemo)(()=>null!=n?n:r,[n,r]);return(0,t.jsx)(p,{variant:"h4",...l,children:i})};x.defaultProps={text:void 0};var g=x,f=e=>{let{...n}=e;return(0,t.jsx)(m,{variant:"body2",...n})},Z=e=>{let{edge:n,sx:r,...l}=e,i=(0,o.useMemo)(()=>"start"===n?0:void 0,[n]),a=(0,o.useMemo)(()=>"end"===n?0:void 0,[n]),s=(0,o.useMemo)(()=>({display:"inline",padding:".1rem .3rem",paddingLeft:i,paddingRight:a,...r}),[i,a,r]);return(0,t.jsx)(f,{monospaced:!0,sx:s,...l})},v=e=>{let{sx:n,...r}=e;return(0,t.jsx)(f,{monospaced:!0,sx:{alignItems:"center",display:"flex",height:"100%",...n},...r})},j=r(14440);let b={body:e=>(0,t.jsx)(m,{...e}),mono:e=>(0,t.jsx)(v,{...e}),none:void 0,small:e=>(0,t.jsx)(f,{...e})},P=(0,h.ZP)(j.Z)({backgroundColor:i.Xb,borderRadius:i.n_,color:i.Xb,cursor:"pointer",display:"inline-flex",padding:"0 .6em",width:"fit-content",":focus":{color:"unset",cursor:"text"}});var w=e=>{let{children:n,revealInitially:r=!1,wrapper:l="none",wrapperProps:i}=e,[a,s]=(0,o.useState)(r),c=(0,o.useMemo)(()=>{let e=b[l];return e?e({...i,children:n}):n},[n,l,i]);return(0,t.jsx)(P,{component:"span",onBlur:()=>s(!1),onFocus:()=>s(!0),tabIndex:0,children:a?c:"*****"})}},98484:function(e,n,r){var t=r(5121),o=r(92230);let l=t.Z.create({baseURL:o.Z,transformRequest:t.Z.defaults.transformRequest,transformResponse:t.Z.defaults.transformResponse,validateStatus:e=>e<400,withCredentials:!0});n.Z=l},92230:function(e,n){n.Z="/api"},38189:function(e,n,r){r.d(n,{FZ:function(){return c},JW:function(){return p},OU:function(){return m},Qt:function(){return h},ah:function(){return u},tf:function(){return d}});let t="[a-z0-9]",o="[a-z0-9-]",l="[0-9a-f]",i="(?:25[0-5]|(?:2[0-4]|1[0-9]|[1-9]|)[0-9])",a="(?:".concat(i,"[.]){3}").concat(i),s="".concat(l,"{8}-(?:").concat(l,"{4}-){3}").concat(l,"{12}"),c=new RegExp("^(?:".concat(t,"(?:").concat(o,"{0,61}").concat(t,")?[.])+").concat(t).concat(o,"{0,61}").concat(t,"$")),d=new RegExp("^".concat(a,"$")),u=new RegExp("^(?:".concat(a,"\\s*,\\s*)*").concat(a,"$")),m=/^[^'"/\\><}{]*$/,h=RegExp("^".concat(s,"$"),"i"),p=/(?=.*passw)(?!.*script).*/i},54120:function(e,n){n.Z=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];return fetch(...n).then(e=>e.json())}},48430:function(e,n,r){var t=r(8100),o=r(54120);n.Z=function(e){let{refreshInterval:n=5e3,onSuccess:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{data:l,error:i}=(0,t.ZP)(e,o.Z,{refreshInterval:n,onSuccess:r});return{data:l,isLoading:!i&&!l,error:i}}},97607:function(e,n){n.Z=function(e){let{onRequestError:n=e=>({children:"Incomplete request; reason: ".concat(e,"."),type:"error"}),onResponseErrorAppend:r,onSetupError:t=e=>({children:"Failed to setup request; reason: ".concat(e,"."),type:"error"}),onResponseError:o=e=>{let n;let{status:t,statusText:o}=e;if(500===t)n={children:"The API encountered a problem: ".concat(t," (").concat(o,")! Please check its systemd service logs."),type:"error"};else{var l;n=null!==(l=null==r?void 0:r.call(null,e))&&void 0!==l?l:{children:"API responded with ".concat(t," (").concat(o,")."),type:"warning"}}return n}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{request:l,response:i,message:a}=e;return i?o(i):l?n(l):t(a)}},95277:function(e,n){n.Z=function(e){let{fillString:n="0",maxLength:r=2,which:t="Start"}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return String(e)["pad".concat(t)](r,n)}},87006:function(e,n,r){var t=r(67294);n.Z=(e,n)=>"string"==typeof e?(0,t.createElement)(n,null,e):e},41021:function(e,n,r){r.d(n,{F6:function(){return i},Z$:function(){return o},_J:function(){return l},zO:function(){return t}});let t=e=>{let n=Date.now();return e||(n=Math.floor(n/1e3)),n},o=function(e,n){let{ms:r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t(r)-e<=n},l=e=>{var n;let r=e,[t,o,l]=[...[60,60].reduce((e,n)=>{let t=r%n;return e.push(t),r=(r-t)/n,e},[]),r],i=null!==(n=[{unit:"h",value:l},{unit:"m",value:o}].find(e=>{let{value:n}=e;return n}))&&void 0!==n?n:{unit:"s",value:t};return{h:l,m:o,s:t,...i}},i=function(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];let{value:t,unit:o}=l(...n);return"".concat(t).concat(o)}}}]);
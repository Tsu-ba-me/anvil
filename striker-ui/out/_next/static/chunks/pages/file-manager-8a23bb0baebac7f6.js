(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{91953:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/file-manager",function(){return l(52288)}])},15079:function(e,t,l){"use strict";var n=l(85893),r=l(97212),i=l(78462),s=l(5616),o=l(55238),a=l(84154),c=l(5744);let renderEntryValueWithMono=e=>{let{entry:t}=e;return(0,n.jsx)(a.$_,{whiteSpace:"nowrap",children:String(t)})},renderEntryValueWithPassword=e=>{let{entry:t,key:l}=e;return/passw/i.test(l)?(0,n.jsx)(a.PJ,{revealButtonProps:{sx:{marginRight:0,padding:0}},monospaced:!0,textLineHeight:null,children:String(t)}):renderEntryValueWithMono(e)},buildEntryList=e=>{let{depth:t=0,entries:l,getEntryLabel:s,getListProps:o,getListItemProps:a,listKey:c,maxDepth:u,renderEntry:d,renderEntryValue:h,skip:p}=e,m=[];Object.entries(l).forEach(e=>{let[l,i]=e,o="form-summary-entry-".concat(l),c=null!==i&&"object"==typeof i,g=c?null:i,v={depth:t,entry:g,key:l};p(e=>{let{key:t}=e;return!/confirm/i.test(t)},v)&&m.push((0,n.jsx)(r.ZP,{sx:{paddingLeft:"".concat(t,"em")},...null==a?void 0:a.call(null,v),children:d({depth:t,entry:g,getLabel:s,key:l,nest:c,renderValue:h})},o)),c&&t<u&&m.push(buildEntryList({depth:t+1,entries:i,getEntryLabel:s,listKey:l,maxDepth:u,renderEntry:d,renderEntryValue:h,skip:p}))});let g="form-summary-list-".concat(null!=c?c:"root");return(0,n.jsx)(i.Z,{dense:!0,disablePadding:!0,...null==o?void 0:o.call(null,{depth:t,entries:l,key:c}),children:m},g)};t.Z=e=>{let{entries:t,getEntryLabel:l=e=>{let{cap:t,key:l}=e;return t(l)},getListProps:r,getListItemProps:i,hasPassword:u,maxDepth:d=3,renderEntry:h=e=>{let{depth:t,entry:l,getLabel:r,key:i,nest:u,renderValue:d}=e;return(0,n.jsxs)(o.Z,{fullWidth:!0,growFirst:!0,row:!0,maxWidth:"100%",children:[(0,n.jsx)(a.Ac,{children:r({cap:c.Z,depth:t,entry:l,key:i})}),(0,n.jsx)(s.Z,{sx:{maxWidth:"100%",overflowX:"scroll"},children:!u&&d({depth:t,entry:l,key:i})})]})},renderEntryValue:p=e=>{let{entry:t}=e;return["",null,void 0].some(e=>t===e)?(0,n.jsx)(a.Ac,{children:"none"}):u?renderEntryValueWithPassword(e):renderEntryValueWithMono(e)},skip:m=function(e){for(var t=arguments.length,l=Array(t>1?t-1:0),n=1;n<t;n++)l[n-1]=arguments[n];return e(...l)}}=e;return buildEntryList({entries:t,getEntryLabel:l,getListProps:r,getListItemProps:i,maxDepth:d,renderEntry:h,renderEntryValue:p,skip:m})}},21405:function(e,t,l){"use strict";l.d(t,{Z:function(){return components_Header}});var n=l(85893),r=l(41098),i=l(90948),s=l(42293),o=l(5616),a=l(82589),c=l(54799),u=l(67294),d=l(6010),h=l(25709),p=l(13540),m=l(77533),g=l(78462),v=l(97212),f=l(98619);let x=[{text:"Anvil",image:"/pngs/anvil_icon_on.png",uri:"/manage-element"},{text:"Files",image:"/pngs/files_on.png",uri:"/file-manager"},{text:"Configure",image:"/pngs/configure_icon_on.png",uri:"/config"},{text:"Mail",image:"/pngs/email_on.png",uri:"/mail-config"},{text:"Help",image:"/pngs/help_icon_on.png",uri:"https://alteeve.com/w/Support"}],j={width:"40em",height:"40em"};var Z=l(67645),b=l(57632),y=l(55238),w=l(41247),k=l(84154),F=l(34819);let C="AnvilDrawer",_={actionIcon:"".concat(C,"-actionIcon"),list:"".concat(C,"-list")},S=(0,i.ZP)(m.ZP)(()=>({["& .".concat(_.list)]:{width:"200px"},["& .".concat(_.actionIcon)]:{fontSize:"2.3em",color:d.of}}));var components_AnvilDrawer=e=>{let{open:t,setOpen:l}=e,{getSessionUser:r}=(0,F.Z)(),i=r();return(0,n.jsx)(S,{BackdropProps:{invisible:!0},anchor:"left",open:t,onClose:()=>l(!t),children:(0,n.jsx)("div",{role:"presentation",children:(0,n.jsxs)(g.Z,{className:_.list,children:[(0,n.jsx)(v.ZP,{children:(0,n.jsx)(k.Ac,{children:i?(0,n.jsxs)(n.Fragment,{children:["Welcome, ",i.name]}):"Unregistered"})}),(0,n.jsx)(b.Z,{}),(0,n.jsx)(f.Z,{component:"a",href:"/index.html",children:(0,n.jsxs)(y.Z,{fullWidth:!0,row:!0,spacing:"2em",children:[(0,n.jsx)(h.Z,{className:_.actionIcon}),(0,n.jsx)(k.Ac,{children:"Dashboard"})]})}),x.map(e=>(0,n.jsx)(f.Z,{component:"a",href:e.uri,children:(0,n.jsxs)(y.Z,{fullWidth:!0,row:!0,spacing:"2em",children:[(0,n.jsx)("img",{alt:e.text,src:e.image,...j}),(0,n.jsx)(k.Ac,{children:e.text})]})},"anvil-drawer-".concat(e.image))),(0,n.jsx)(f.Z,{onClick:()=>{Z.Z.put("/auth/logout").then(()=>{window.location.replace("/login")}).catch(e=>{(0,w.Z)(e)})},children:(0,n.jsxs)(y.Z,{fullWidth:!0,row:!0,spacing:"2em",children:[(0,n.jsx)(p.Z,{className:_.actionIcon}),(0,n.jsx)(k.Ac,{children:"Logout"})]})})]})})})},M=l(83909),P=l(66354);let O="Header",E={input:"".concat(O,"-input"),barElement:"".concat(O,"-barElement"),iconBox:"".concat(O,"-iconBox"),searchBar:"".concat(O,"-searchBar"),icons:"".concat(O,"-icons")},A=(0,i.ZP)(s.Z)(e=>{let{theme:t}=e;return{paddingTop:t.spacing(.5),paddingBottom:t.spacing(.5),paddingLeft:t.spacing(3),paddingRight:t.spacing(3),borderBottom:"solid 1px",borderBottomColor:d.hM,position:"static",["& .".concat(E.input)]:{height:"2.8em",width:"30vw",backgroundColor:t.palette.secondary.main,borderRadius:d.n_},["& .".concat(E.barElement)]:{padding:0},["& .".concat(E.iconBox)]:{[t.breakpoints.down("sm")]:{display:"none"}},["& .".concat(E.searchBar)]:{[t.breakpoints.down("sm")]:{flexGrow:1,paddingLeft:"15vw"}},["& .".concat(E.icons)]:{paddingLeft:".1em",paddingRight:".1em"}}});var components_Header=()=>{let e=(0,u.useRef)({}),t=(0,u.useRef)({}),[l,i]=(0,u.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A,{children:(0,n.jsxs)(o.Z,{display:"flex",justifyContent:"space-between",flexDirection:"row",children:[(0,n.jsx)(y.Z,{row:!0,children:(0,n.jsx)(a.Z,{onClick:()=>i(!l),children:(0,n.jsx)("img",{alt:"",src:"/pngs/logo.png",width:"160",height:"40"})})}),(0,n.jsx)(y.Z,{className:E.iconBox,row:!0,spacing:0,children:(0,n.jsx)(o.Z,{children:(0,n.jsx)(c.Z,{onClick:e=>{var l,n;let{currentTarget:r}=e;null===(l=t.current.setAnchor)||void 0===l||l.call(null,r),null===(n=t.current.setOpen)||void 0===n||n.call(null,!0)},sx:{color:d.of,padding:"0 .1rem"},children:(0,n.jsx)(M.Z,{icon:r.Z,ref:e})})})})]})}),(0,n.jsx)(components_AnvilDrawer,{open:l,setOpen:i}),(0,n.jsx)(P.Z,{onFetchSuccessAppend:t=>{var l;null===(l=e.current.indicate)||void 0===l||l.call(null,Object.keys(t).length>0)},ref:t})]})}},21642:function(e,t,l){"use strict";var n=l(85893),r=l(67294),i=l(68917);let s={count:0,defaultMessageType:"info",messages:void 0,onSet:void 0,usePlaceholder:!0},o=(0,r.forwardRef)((e,t)=>{let{count:l=s.count,defaultMessageType:o=s.defaultMessageType,messages:a,onSet:c,usePlaceholder:u=s.usePlaceholder}=e,[d,h]=(0,r.useState)({}),p=(0,r.useMemo)(()=>({...a,...d}),[a,d]),m=(0,r.useCallback)(e=>void 0!==p[e],[p]),g=(0,r.useCallback)((e,t)=>{let l=0;h(n=>{let{[e]:r,...i}=n;return t&&(i[e]=t),l=Object.keys(i).length,i}),null==c||c.call(null,l)},[c]),v=(0,r.useCallback)((e,t)=>{let l=0,n=t?(e,n)=>{e[n]=t,l+=1}:void 0;h(t=>{let r={};return Object.keys(t).forEach(i=>{e.test(i)?null==n||n.call(null,r,i):(r[i]=t[i],l+=1)}),r}),null==c||c.call(null,l)},[c]),f=(0,r.useMemo)(()=>{let e=Object.entries(p),t=l>0,r=t?l:e.length,s=[];if(e.every(e=>{let[t,l]=e,{children:a,type:c=o}=l;return s.push((0,n.jsx)(i.Z,{type:c,children:a},"message-".concat(t))),s.length<r}),u&&t&&0===s.length){let e=l-s.length;for(let t=0;t<e;t+=1)s.push((0,n.jsx)(i.Z,{sx:{visibility:"hidden"},text:"Placeholder"},"message-placeholder-".concat(t)))}return s},[l,o,u,p]);return(0,r.useImperativeHandle)(t,()=>({exists:m,setMessage:g,setMessageRe:v}),[m,g,v]),(0,n.jsx)(n.Fragment,{children:f})});o.defaultProps=s,o.displayName="MessageGroup",t.Z=o},88468:function(e,t,l){"use strict";var n=l(67294),r=l(94121),i=l(591);let s=(0,n.forwardRef)((e,t)=>{let{input:l,onChange:s=function(e){let{handlers:{base:t,origin:l}}=e;for(var n=arguments.length,r=Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];null==t||t.call(null,...r),null==l||l.call(null,...r)},onMount:o,onUnmount:a}=e,{props:c}=l,{valueKey:u,valueType:d}=(0,n.useMemo)(()=>{let{type:e}=c,t="value",l="string";return e===r.Z.checkbox&&(t="checked",l="boolean"),{valueKey:t,valueType:l}},[c]),{onChange:h,[u]:p,...m}=c,[g,v]=(0,n.useState)(p),f=(0,n.useCallback)(e=>{let{target:{[u]:t}}=e,l=i.Z[d](t);v(l)},[u,d]),x=(0,n.useCallback)(function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return null==s?void 0:s.call(null,{handlers:{base:f,origin:h}},...t)},[f,h,s]);return(0,n.useEffect)(()=>(null==o||o.call(null),a),[]),(0,n.useImperativeHandle)(t,()=>({get:()=>g,set:v}),[g]),(0,n.cloneElement)(l,{...m,onChange:x,[u]:g})});s.displayName="UncontrolledInput",t.Z=s},6903:function(e,t,l){"use strict";var n=l(67294),r=l(67645),i=l(41247);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{config:t,onError:l,onData:s,url:o=""}=e,[a,c]=(0,n.useState)(!1),u=(0,n.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1?arguments[1]:void 0,a="".concat(o).concat(e);a&&(c(!0),r.Z.get(a,{...t,...n}).then(e=>{let{data:t}=e;null==s||s.call(null,t)}).catch(e=>{let t=(0,i.Z)(e);null==l||l.call(null,t)}).finally(()=>{c(!1)}))},[o,t,s,l]);return{fetch:u,loading:a}}},32576:function(e,t,l){"use strict";var n=l(85893),r=l(67294),i=l(84070),s=l(15079);t.Z=e=>{let{list:t={}}=e,[l,o]=(0,r.useState)({}),a=(0,r.useMemo)(()=>Object.keys(t),[t]),c=(0,r.useMemo)(()=>Object.keys(l),[l]),u=(0,r.useMemo)(()=>c.length===a.length,[c.length,a.length]),d=(0,r.useMemo)(()=>c.length>0,[c.length]),h=(0,r.useMemo)(()=>a.length>1,[a.length]),p=(0,r.useCallback)(e=>{let{confirmDialogProps:t={},formSummaryProps:r={},getConfirmDialogTitle:i,onProceedAppend:o,renderEntry:a}=e;return{actionProceedText:"Delete",content:(0,n.jsx)(s.Z,{entries:l,maxDepth:0,renderEntry:a,...r}),onProceedAppend:o,proceedColour:"red",titleText:i(c.length),...t}},[l,c.length]),m=(0,r.useCallback)(e=>!!l[e],[l]),g=(0,r.useCallback)(()=>o({}),[]),v=(0,r.useCallback)(e=>o(a.reduce((t,l)=>(e&&(t[l]=e),t),{})),[a]),f=(0,r.useCallback)((e,t)=>o((0,i.ZP)(e,t||void 0)),[]);return{buildDeleteDialogProps:p,checklist:l,checks:c,getCheck:m,hasAllChecks:u,hasChecks:d,multipleItems:h,resetChecks:g,setAllChecks:v,setCheck:f}}},58839:function(e,t,l){"use strict";var n=l(67294);t.Z=function(){let{actionProceedText:e="",content:t="",titleText:l="",...r}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.useState)({actionProceedText:e,content:t,titleText:l,...r})}},67978:function(e,t,l){"use strict";var n=l(67294),r=l(8100),i=l(98436),s=l(96262);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{baseUrl:l=i.Z,fetcher:o=s.Z,mod:a,...c}=t,{data:u,error:d,mutate:h}=(0,r.ZP)("".concat(l).concat(e),o,c),p=(0,n.useMemo)(()=>a&&u&&a(u),[u,a]),m=!d&&!u;return{altData:p,data:u,error:d,mutate:h,loading:m}}},48882:function(e,t,l){"use strict";l.d(t,{Z:function(){return api_converters_toAnvilOverviewList}});var api_converters_toAnvilOverviewHostList=e=>e.reduce((e,t)=>{let{hostName:l,hostType:n,hostUUID:r}=t;return e[r]={name:l,type:n,uuid:r},e},{}),api_converters_toAnvilOverviewList=e=>e.reduce((e,t)=>{let{anvilDescription:l,anvilName:n,anvilUUID:r,hosts:i}=t;return e[r]={description:l,hosts:api_converters_toAnvilOverviewHostList(i),name:n,uuid:r},e},{})},84070:function(e,t,l){"use strict";l.d(t,{Um:function(){return buildRegExpObjectStateSetterCallback}});let defaultObjectStatePropSetter=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];let[,n,r,i]=t;void 0!==i&&(n[r]=i)},buildRegExpObjectStateSetterCallback=function(e,t){let{set:l=defaultObjectStatePropSetter}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n=>{let r={};return Object.keys(n).forEach(i=>{e.test(i)?l(n,r,i,t):r[i]=n[i]}),r}};t.ZP=function(e,t){let{guard:l=()=>!0,set:n=defaultObjectStatePropSetter}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=>{let{[e]:i,...s}=r,o={...s};return l(r,e,t)&&n(r,o,e,t),o}}},78438:function(e,t){"use strict";t.Z=(e,t)=>e&&Object.keys(e).reduce((e,l)=>({...e,[l]:t}),{})},591:function(e,t){"use strict";t.Z={boolean:e=>!!e,number:e=>parseInt(String(e),10)||0,string:e=>String(e)}},5744:function(e,t,l){"use strict";var n=l(48403),r=l.n(n);t.Z=e=>{let t=e.replace(/([a-z\d])([A-Z])/g,"$1 $2");return r()(t)}},43799:function(e,t,l){"use strict";var n=l(5744);let getFormikErrorMessages=function(e){let{build:t=(e,t)=>{let l=t;if("string"==typeof l){let[e,...t]=l.split(/\s+/),r=(0,n.Z)(e.replace(/^[^\s]+\.([^.]+)/,"$1"));l=[r,...t].join(" ")}return{children:l,type:"warning"}},chain:l="",skip:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce((e,n)=>{let[i,s]=n,o=[l,i].filter(e=>!!e).join(".");return null!==s&&"object"==typeof s?{...e,...getFormikErrorMessages(s,{build:t,chain:o,skip:r})}:((null==r?void 0:r.call(null,o))||(e[o]=t(o,s)),e)},{})};t.Z=getFormikErrorMessages},52288:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return file_manager}});var n=l(85893),r=l(9008),i=l.n(r),s=l(21405),o=l(54490),a=l(67294),c=l(98436);let u=[["iso",["application/x-cd-image","ISO (optical disc)"]],["other",["text/plain","Other file type"]],["script",["text/plain","Script (program)"]]],d=new Map(u);var h=l(82175),p=l(25934),m=l(73393),g=l(67645),v=l(19467),f=l(53457),x=l(50361),j=l.n(x),Z=l(23279),b=l.n(Z),y=l(55238),w=l(63071),k=l(55675),F=l(37260),C=l(52886),_=l(84154),S=l(88468),Files_FileInputGroup=e=>{let{anvils:t,drHosts:l,fileUuid:r,formik:i,showSyncInputGroup:s,showTypeInput:o}=e,{handleBlur:c,handleChange:d}=i,h=(0,a.useMemo)(()=>b()(d,500),[d]),{nameChain:p,locationsChain:m,typeChain:g}=(0,a.useMemo)(()=>({nameChain:"".concat(r,".name"),locationsChain:"".concat(r,".locations"),typeChain:"".concat(r,".type")}),[r]),v=(0,a.useCallback)((e,t)=>{i.setValues(l=>{var n;let i=j()(l),s=null===(n=i[r].locations)||void 0===n?void 0:n[e];return s?(Object.keys(s).forEach(e=>{s[e].active=t}),i):l})},[i,r]),x=(0,a.useCallback)(e=>{var t;let l=null===(t=i.values[r].locations)||void 0===t?void 0:t[e];return l?{checked:Object.values(l).every(e=>{let{active:t}=e;return t}),onChange:(t,l)=>{v(e,l)}}:{}},[i.values,r,v]),Z=(0,a.useCallback)((e,t)=>{var l,n,s;let o="".concat(m,".").concat(e,".").concat(t),a="".concat(o,".active");return{id:a,name:a,checked:null===(s=i.values[r].locations)||void 0===s?void 0:null===(n=s[e])||void 0===n?void 0:null===(l=n[t])||void 0===l?void 0:l.active,onBlur:c,onChange:d}},[i.values,r,c,d,m]),M=(0,a.useCallback)(e=>{var t;let l=null===(t=i.values[r].locations)||void 0===t?void 0:t[e];return l&&Object.keys(l).length>1},[i.values,r]),P=(0,a.useMemo)(()=>(0,n.jsx)(S.Z,{input:(0,n.jsx)(k.Z,{id:p,label:"File name",name:p,onBlur:c,onChange:h,value:i.values[r].name})}),[h,i.values,r,c,p]),O=(0,a.useMemo)(()=>s&&(0,n.jsx)(F.TZ,{header:"Sync with node(s)",panelProps:{mb:0,mt:0,width:"100%"},children:(0,n.jsx)(w.Z,{allowCheckAll:M("anvils"),allowCheckItem:!0,edit:!0,header:!0,listItems:t,getListCheckboxProps:()=>x("anvils"),getListItemCheckboxProps:e=>Z("anvils",e),renderListItem:(e,t)=>{let{description:l,name:r}=t;return(0,n.jsxs)(_.Ac,{children:[r,": ",l]})}})}),[t,M,x,Z,s]),E=(0,a.useMemo)(()=>s&&(0,n.jsx)(F.TZ,{header:"Sync with DR host(s)",panelProps:{mb:0,mt:0,width:"100%"},children:(0,n.jsx)(w.Z,{allowCheckAll:M("drHosts"),allowCheckItem:!0,edit:!0,header:!0,listItems:l,getListCheckboxProps:()=>x("drHosts"),getListItemCheckboxProps:e=>Z("drHosts",e),renderListItem:(e,t)=>{let{hostName:l}=t;return(0,n.jsx)(_.Ac,{children:l})}})}),[l,M,x,Z,s]),A=(0,a.useMemo)(()=>o&&(0,n.jsx)(C.Z,{id:g,label:"File type",name:g,onBlur:c,onChange:d,selectItems:u.map(e=>{let[t,[,l]]=e;return{displayValue:l,value:t}}),value:i.values[r].type}),[i.values,r,c,d,o,g]);return(0,n.jsxs)(f.Z,{sx:{"& > :not(:first-child)":{marginTop:"1em"}},children:[(0,n.jsxs)(y.Z,{sm:"row",xs:"column",children:[P,A]}),O,E]})},M=l(43799),P=l(41247),O=l(21642),E=l(16310),A=l(78438);let I=E.Ry({active:E.O7().required()}),L=E.Vo(e=>E.Ry((0,A.Z)(e,I))),R=E.Vo(e=>E.Ry((0,A.Z)(e,I))),D=E.Ry({locations:E.Ry({anvils:L,drHosts:R}),name:E.Z_().required(),type:E.Z_().oneOf(["iso","other","script"]),uuid:E.Z_().uuid().required()}),U=E.Vo(e=>E.Ry((0,A.Z)(e,D)));var V=l(5616),B=l(27072),Files_UploadFileProgress=e=>{let{uploads:t}=e;return(0,n.jsx)(y.Z,{columnSpacing:".2em",children:Object.values(t).map(e=>{let{name:t,progress:l,uuid:r}=e;return(0,n.jsxs)(V.Z,{sx:{alignItems:{md:"center"},display:"flex",flexDirection:{xs:"column",md:"row"},"& > :first-child":{minWidth:100,overflow:"hidden",overflowWrap:"normal",textOverflow:"ellipsis",whiteSpace:"nowrap",width:{xs:"100%",md:200},wordBreak:"keep-all"},"& > :last-child":{flexGrow:1}},children:[(0,n.jsx)(_.Ac,{children:t}),(0,n.jsx)(B.ko,{progressPercentage:l})]},"upload-".concat(r))})})};let setUploadProgress=(e,t,l)=>e?(e[t].progress=l,{...e}):e;var Files_AddFileForm=e=>{let{anvils:t,drHosts:l}=e,r=(0,a.useRef)(null),i=(0,a.useRef)(null),[s,o]=(0,a.useState)(),c=(0,a.useCallback)(e=>{var t,l;return null==r?void 0:null===(l=r.current)||void 0===l?void 0:null===(t=l.setMessage)||void 0===t?void 0:t.call(null,"api",e)},[]),u=(0,h.TA)({initialValues:{},onSubmit:e=>{let t=Object.values(e);o(t.reduce((e,t)=>{let{file:l,name:n,uuid:r}=t;return l&&(e[r]={name:n,progress:0,uuid:r}),e},{})),c({children:(0,n.jsx)(n.Fragment,{children:"Closing this dialog before the upload(s) complete will cancel the upload(s)."})});let l=t.reduce((e,t)=>{let{file:l,name:n,uuid:r}=t;if(!l)return e;let i=new FormData;i.append("file",new File([l],n,{...l}));let s=g.Z.post("/file",i,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{let{loaded:t,total:l}=e;o(e=>setUploadProgress(e,r,Math.round(t/l*99)))}}).then(()=>{o(e=>setUploadProgress(e,r,100))});return e.push(s),e},[]);Promise.all(l).then(()=>{c({children:(0,n.jsxs)(y.Z,{spacing:0,children:[(0,n.jsx)("span",{children:"Upload(s) completed; file(s) will be listed after the job(s) to sync them to other host(s) finish."}),(0,n.jsx)("span",{children:"You can close this dialog."})]})})}).catch(e=>{let t=(0,P.Z)(e);t.children=(0,n.jsxs)(n.Fragment,{children:["Failed to add file. ",t.children]}),c(t)})},validationSchema:U}),d=(0,a.useMemo)(()=>(0,M.Z)(u.errors),[u.errors]),f=(0,a.useMemo)(()=>!u.dirty||!u.isValid||u.isValidating||u.isSubmitting,[u.dirty,u.isSubmitting,u.isValid,u.isValidating]),x=(0,a.useCallback)(e=>{let{target:{files:t}}=e;if(!t)return;let l=Array.from(t).reduce((e,t)=>{let l=(0,p.Z)();return e[l]={file:t,name:t.name,uuid:l},e},{});u.setValues(l)},[u]),j=(0,a.useMemo)(()=>u.values&&Object.values(u.values).map(e=>{let{uuid:r}=e;return(0,n.jsx)(Files_FileInputGroup,{anvils:t,drHosts:l,fileUuid:r,formik:u},r)}),[t,l,u]);return(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(O.Z,{ref:r}),s?(0,n.jsx)(Files_UploadFileProgress,{uploads:s}):(0,n.jsxs)(y.Z,{component:"form",onSubmit:e=>{e.preventDefault(),u.submitForm()},children:[(0,n.jsx)("input",{id:"files",multiple:!0,name:"files",onChange:x,ref:i,style:{display:"none"},type:"file"}),(0,n.jsx)(v.Z,{onClick:()=>{var e;null===(e=i.current)||void 0===e||e.click()},children:"Browse"}),j,(0,n.jsx)(O.Z,{count:1,messages:d}),(0,n.jsx)(m.Z,{actions:[{background:"blue",children:"Add",disabled:f,type:"submit"}]})]})]})},H=l(48882),T=l(56597),N=l(56211),W=l(57632);let toEditFileRequestBody=(e,t)=>{let{locations:l,name:n,type:r,uuid:i}=e;if(!l||!r)return;let s=[];return Object.entries(l.anvils).reduce((e,l)=>{let[n,{active:r}]=l,{anvils:{[n]:{locationUuids:i}}}=t,s=i.map(e=>({fileLocationUUID:e,isFileLocationActive:r}));return e.push(...s),e},s),Object.entries(l.drHosts).reduce((e,l)=>{let[n,{active:r}]=l,{hosts:{[n]:{locationUuids:i}}}=t,s=i.map(e=>({fileLocationUUID:e,isFileLocationActive:r}));return e.push(...s),e},s),{fileLocations:s,fileName:n,fileType:r,fileUUID:i}};var Files_EditFileForm=e=>{let{anvils:t,drHosts:l,onSuccess:r,previous:i}=e,s=(0,a.useRef)({}),o=(0,a.useCallback)(e=>{var t;return null===(t=s.current.setMessage)||void 0===t?void 0:t.call(null,"api",e)},[]),c=(0,a.useMemo)(()=>{let{locations:e,name:t,type:n,uuid:r}=i;return{[r]:{locations:Object.values(e).reduce((e,t)=>{let{active:n,anvilUuid:r,hostUuid:i}=t,s="anvils",o=r;return i in l&&(s="drHosts",o=i),e[s][o]={active:n},e},{anvils:{},drHosts:{}}),name:t,type:n,uuid:r}}},[l,i]),u=(0,h.TA)({initialValues:c,onSubmit:(e,t)=>{let{setSubmitting:l}=t,s=toEditFileRequestBody(e[i.uuid],i);g.Z.put("/file/".concat(i.uuid),s).then(()=>{o({children:(0,n.jsx)(n.Fragment,{children:"File updated."})}),null==r||r.call(null)}).catch(e=>{let t=(0,P.Z)(e);t.children=(0,n.jsxs)(n.Fragment,{children:["Failed to modify file. ",t.children]}),o(t)}).finally(()=>{l(!1)})},validationSchema:U}),d=(0,a.useMemo)(()=>(0,M.Z)(u.errors),[u.errors]),p=(0,a.useMemo)(()=>!u.dirty||!u.isValid||u.isValidating||u.isSubmitting,[u.dirty,u.isSubmitting,u.isValid,u.isValidating]);return(0,n.jsxs)(y.Z,{component:"form",onSubmit:e=>{e.preventDefault(),u.submitForm()},children:[(0,n.jsx)(Files_FileInputGroup,{anvils:t,drHosts:l,fileUuid:i.uuid,formik:u,showSyncInputGroup:!0,showTypeInput:!0}),(0,n.jsx)(O.Z,{count:1,messages:d,ref:s}),(0,n.jsx)(m.Z,{loading:u.isSubmitting,actions:[{background:"blue",children:"Edit",disabled:p,type:"submit"}]})]})},G=l(64666),$=l(81796),q=l(6903),z=l(32576),J=l(58839),X=l(67978);let toFileOverviewList=e=>e.reduce((e,t)=>{let[l,n,r,i,s]=t;return e[l]={checksum:s,name:n,size:r,type:i,uuid:l},e},{}),toFileDetail=e=>{let{0:t}=e;if(!t)return;let[l,n,r,i,s]=t;return e.reduce((e,t)=>{let{5:l,6:n,7:r,8:i,9:s,10:o,11:a,12:c}=t;e.anvils[r]||(e.anvils[r]={description:s,locationUuids:[],name:i,uuid:r}),e.hosts[o]||(e.hosts[o]={locationUuids:[],name:a,type:c,uuid:o}),"dr"===c?e.hosts[o].locationUuids.push(l):e.anvils[r].locationUuids.push(l);let u=1===Number(n);return e.locations[l]={anvilUuid:r,active:u,hostUuid:o,uuid:l},e},{anvils:{},checksum:s,hosts:{},locations:{},name:n,size:r,type:i,uuid:l})};var Files=()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)({}),l=(0,a.useRef)(null),r=(0,a.useRef)({}),[i,s]=(0,J.Z)(),[u,h]=(0,a.useState)(!1),[p,m]=(0,a.useState)(),[v,f]=(0,a.useState)(),{isLoading:x}=(0,G.Z)("".concat(c.Z,"/file"),{onSuccess:e=>{f(toFileOverviewList(e))}}),{fetch:j,loading:Z}=(0,q.Z)({onData:e=>f(toFileOverviewList(e)),url:"/file"}),b=(0,a.useMemo)(()=>x||Z,[Z,x]),{buildDeleteDialogProps:k,checks:C,getCheck:S,hasAllChecks:M,hasChecks:P,multipleItems:E,resetChecks:A,setAllChecks:I,setCheck:L}=(0,z.Z)({list:v}),R=(0,a.useCallback)(e=>{var t;return null===(t=r.current.setMessage)||void 0===t?void 0:t.call(null,"api",e)},[]),{fetch:D,loading:U}=(0,q.Z)({onData:e=>m(toFileDetail(e)),onError:e=>{let{children:t,...l}=e;R({children:(0,n.jsxs)(n.Fragment,{children:["Failed to get file detail. ",t]}),...l})},url:"/file/"}),{data:V,loading:B}=(0,X.Z)("/anvil",{onError:e=>{R({children:(0,n.jsxs)(n.Fragment,{children:["Failed to get node list. ",e]}),type:"warning"})}}),K=(0,a.useMemo)(()=>V&&(0,H.Z)(V),[V]),{data:Y,loading:Q}=(0,X.Z)("/host?types=dr",{onError:e=>{R({children:(0,n.jsxs)(n.Fragment,{children:["Failed to get DR host list. ",e]}),type:"warning"})}}),ee=(0,a.useMemo)(()=>(0,n.jsx)(w.Z,{allowCheckAll:E,allowEdit:!0,allowItemButton:u,disableDelete:!P,edit:u,getListCheckboxProps:()=>({checked:M,onChange:(e,t)=>{I(t)}}),getListItemCheckboxProps:e=>({checked:S(e),onChange:(t,l)=>{L(e,l)}}),header:!0,listEmpty:"No file(s) found.",listItems:v,onAdd:()=>{var t;null===(t=e.current)||void 0===t||t.setOpen(!0)},onDelete:()=>{var e;s(k({onProceedAppend:()=>{let e=C.map(e=>g.Z.delete("/file/".concat(e)));Promise.all(e).then(()=>j()),A()},getConfirmDialogTitle:e=>"Delete the following ".concat(e," file(s)?"),renderEntry:e=>{let{key:t}=e;return(0,n.jsx)(_.Ac,{children:null==v?void 0:v[t].name})}})),null===(e=t.current.setOpen)||void 0===e||e.call(null,!0)},onEdit:()=>{h(e=>!e)},onItemClick:(e,t)=>{var n;null===(n=l.current)||void 0===n||n.setOpen(!0),D(t)},renderListItem:(e,t)=>{var l;let{checksum:r,name:i,size:s,type:a}=t;return(0,n.jsxs)(y.Z,{columnSpacing:0,fullWidth:!0,md:"row",xs:"column",children:[(0,n.jsxs)(y.Z,{spacing:0,flexGrow:1,children:[(0,n.jsxs)(y.Z,{row:!0,spacing:".5em",children:[(0,n.jsx)(_.$_,{children:i}),(0,n.jsx)(W.Z,{flexItem:!0,orientation:"vertical"}),(0,n.jsx)(_.Ac,{children:null===(l=d.get(a))||void 0===l?void 0:l[1]})]}),(0,n.jsx)(_.Ac,{children:(0,o._d)(s,{toUnit:"ibyte"})})]}),(0,n.jsx)(_.$_,{children:r})]})}}),[k,C,u,v,S,D,j,M,P,E,A,I,L,s]),et=(0,a.useMemo)(()=>b?(0,n.jsx)($.Z,{}):ee,[b,ee]),el=(0,a.useMemo)(()=>(0,n.jsx)(O.Z,{count:1,ref:r,usePlaceholder:!1}),[]),en=(0,a.useMemo)(()=>x||B||Q,[B,Q,x]),er=(0,a.useMemo)(()=>x||B||Q||U,[B,Q,U,x]),ei=(0,a.useMemo)(()=>K&&Y&&(0,n.jsx)(Files_AddFileForm,{anvils:K,drHosts:Y}),[K,Y]),es=(0,a.useMemo)(()=>K&&Y&&p&&(0,n.jsx)(Files_EditFileForm,{anvils:K,drHosts:Y,onSuccess:()=>{j()},previous:p}),[K,Y,p,j]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(F.s_,{children:[(0,n.jsx)(F.V9,{children:(0,n.jsx)(_.z,{children:"Files"})}),el,et]}),(0,n.jsx)(N.Js,{header:"Add file(s)",loading:en,ref:e,showClose:!0,wide:!0,children:ei}),(0,n.jsx)(N.Js,{header:"Update file ".concat(null==p?void 0:p.name),loading:er,ref:l,showClose:!0,wide:!0,children:es}),(0,n.jsx)(T.Z,{closeOnProceed:!0,wide:!0,...i,ref:t})]})},file_manager=()=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i(),{children:(0,n.jsx)("title",{children:"File Manager"})}),(0,n.jsx)(s.Z,{}),(0,n.jsx)(Files,{})]})}},function(e){e.O(0,[494,804,416,50,213,461,264,486,775,675,633,774,888,179],function(){return e(e.s=91953)}),_N_E=e.O()}]);
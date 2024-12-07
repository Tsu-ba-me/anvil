"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{77583:function(e,l,n){var t=n(85893),a=n(14440),r=n(67294),o=n(34003),s=n(56903),u=n(87006),c=n(59278);let i=(0,r.forwardRef)((e,l)=>{let{actionCancelText:n="Cancel",actionProceedText:i,children:d,closeOnProceed:h=!1,contentContainerProps:m,dialogProps:f,disableProceed:g,loading:p,loadingAction:v=!1,onActionAppend:b,onCancelAppend:Z,onProceedAppend:x,openInitially:y,preActionArea:C,proceedButtonProps:k,proceedColour:j="blue",scrollContent:M=!1,scrollBoxProps:$,showActionArea:P=!0,showCancel:w,showClose:I,titleText:_,wide:A,content:N=d}=e,O=(0,r.useRef)(null),R=(0,r.useMemo)(()=>(0,u.Z)(N,c.Ac),[N]),S=(0,r.useMemo)(()=>(0,r.createElement)(M?o.VZ:a.Z,$,R),[R,$,M]),q=(0,r.useMemo)(()=>P&&(0,t.jsx)(o.ux,{cancelProps:{children:n,onClick:function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];null==b||b.call(null,...l),null==Z||Z.call(null,...l)}},closeOnProceed:h,loading:v,proceedProps:{background:j,children:i,disabled:g,onClick:function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];null==b||b.call(null,...l),null==x||x.call(null,...l)},...k},showCancel:w}),[n,i,h,g,v,b,Z,x,k,j,P,w]);return(0,r.useImperativeHandle)(l,()=>({setOpen:e=>{var l;return null===(l=O.current)||void 0===l?void 0:l.setOpen(e)}}),[]),(0,t.jsx)(o.Js,{dialogProps:f,header:_,loading:p,openInitially:y,ref:O,showClose:I,wide:A,children:(0,t.jsxs)(s.Z,{...m,children:[S,C,q]})})});i.displayName="ConfirmDialog",l.Z=i},23833:function(e,l,n){var t=n(89262),a=n(85959),r=n(73970),o=n(77831);let s=(0,t.ZP)(a.Z)({backgroundColor:o.s7,paddingRight:"3em",["&.".concat(r.Z.selected)]:{backgroundColor:o.lD,fontWeight:400,["&.".concat(r.Z.focusVisible)]:{backgroundColor:o.lD},"&:hover":{backgroundColor:o.lD}},["&.".concat(r.Z.focusVisible)]:{backgroundColor:o.lD},"&:hover":{backgroundColor:o.lD}});l.Z=s},81208:function(e,l,n){var t=n(85893),a=n(67294),r=n(99576);let o={count:0,defaultMessageType:"info",messages:void 0,onSet:void 0,usePlaceholder:!0},s=(0,a.forwardRef)((e,l)=>{let{count:n=o.count,defaultMessageType:s=o.defaultMessageType,messages:u,onSet:c,usePlaceholder:i=o.usePlaceholder}=e,[d,h]=(0,a.useState)({}),m=(0,a.useMemo)(()=>({...u,...d}),[u,d]),f=(0,a.useCallback)(e=>void 0!==m[e],[m]),g=(0,a.useCallback)((e,l)=>{let n=0;h(t=>{let{[e]:a,...r}=t;return l&&(r[e]=l),n=Object.keys(r).length,r}),null==c||c.call(null,n)},[c]),p=(0,a.useCallback)((e,l)=>{let n=0,t=l?(e,t)=>{e[t]=l,n+=1}:void 0;h(l=>{let a={};return Object.keys(l).forEach(r=>{e.test(r)?null==t||t.call(null,a,r):(a[r]=l[r],n+=1)}),a}),null==c||c.call(null,n)},[c]),v=(0,a.useMemo)(()=>{let e=Object.entries(m),l=n>0,a=l?n:e.length,o=[];if(e.every(e=>{let[l,n]=e,{children:u,type:c=s}=n;return o.push((0,t.jsx)(r.Z,{type:c,children:u},"message-".concat(l))),o.length<a}),i&&l&&0===o.length){let e=n-o.length;for(let l=0;l<e;l+=1)o.push((0,t.jsx)(r.Z,{sx:{visibility:"hidden"},text:"Placeholder"},"message-placeholder-".concat(l)))}return o},[n,s,i,m]);return(0,a.useImperativeHandle)(l,()=>({exists:f,setMessage:g,setMessageRe:p}),[f,g,p]),(0,t.jsx)(t.Fragment,{children:v})});s.defaultProps=o,s.displayName="MessageGroup",l.Z=s},6189:function(e,l,n){n.d(l,{Z:function(){return j}});var t=n(85893),a=n(84799),r=n(20869),o=n(60166),s=n(51714),u=n(82492),c=n.n(u),i=n(67294),d=n(77831),h=n(34635),m=n(23833),f=n(15627),g=n(79237),p=n(12641),v=n(49440),b=n(80543),Z=n(79588),x=n(99657),y=n(80594),C=n(64242),k=function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];let[r]=l,{onClearIndicatorClick:o,...s}=r,{sx:u,value:c,...h}=s,m=(0,i.useMemo)(()=>({["& .".concat(a.Z.icon)]:{color:d.s7},["& .".concat(v.Z.root)]:{marginRight:".8em"},["& .".concat(b.Z.root)]:{color:d.s7,visibility:"hidden"},["&:hover .".concat(v.Z.root," .").concat(b.Z.root,",\n      &.").concat(Z.Z.focused," .").concat(v.Z.root," .").concat(b.Z.root)]:{visibility:"visible"},...u}),[u]),f=(0,i.useMemo)(()=>{if(c&&o)return(0,t.jsx)(x.Z,{position:"end",children:(0,t.jsx)(y.Z,{onClick:o,tabIndex:-1,children:(0,t.jsx)(p.Z,{fontSize:"small"})})})},[o,c]);return(0,t.jsx)(C.Z,{endAdornment:f,value:c,...h,sx:m})},j=function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];let[u]=l,{id:p,label:v,selectItems:b,checkItem:Z,disableItem:x,formControlProps:y,hideItem:C,inputLabelProps:j={},isReadOnly:M=!1,messageBoxProps:$={},name:P,noOptionsText:w="No options",onBlur:I,onChange:_,onFocus:A,required:N,selectProps:{MenuProps:O,multiple:R,sx:S,...q}={},value:D,isCheckableItems:E=R}=u,U=(0,i.useMemo)(()=>M?c()({["& .".concat(a.Z.icon)]:{visibility:"hidden"}},S):S,[M,S]),z=(0,i.useCallback)(e=>E&&(0,t.jsx)(r.Z,{checked:null==Z?void 0:Z.call(null,e)}),[Z,E]),B=(0,i.useCallback)((e,l)=>(0,t.jsxs)(m.Z,{disabled:null==x?void 0:x.call(null,e),sx:{display:(null==C?void 0:C.call(null,e))?"none":void 0},value:e,children:[z(e),l]},"".concat(p,"-").concat(e)),[z,x,C,p]),T=(0,i.useMemo)(()=>"".concat(p,"-select-element"),[p]),V=(0,i.useMemo)(()=>(0,t.jsx)(f.Z,{id:p,label:v}),[p,v]),F=(0,i.useMemo)(()=>v&&(0,t.jsx)(g.Z,{htmlFor:T,isNotifyRequired:N,...j,children:v}),[j,N,v,T]),H=(0,i.useMemo)(()=>b.length?b.map(e=>{if("string"==typeof e)return B(e,e);let{value:l,displayValue:n=String(l)}=e;return B(l,n)}):(0,t.jsx)(m.Z,{disabled:!0,children:w}),[B,w,b]),G=(0,i.useMemo)(()=>c()({sx:{["& .".concat(o.Z.paper)]:{backgroundColor:d.s7}}},O),[O]);return(0,t.jsxs)(s.Z,{fullWidth:!0,...y,children:[F,(0,t.jsx)(k,{id:T,input:V,MenuProps:G,multiple:R,name:P,onBlur:I,onChange:_,onFocus:A,readOnly:M,value:D,...q,sx:U,children:H}),(0,t.jsx)(h.Z,{...$})]})}},12387:function(e,l,n){var t=n(67294),a=n(37842),r=n(14879);let o=(0,t.forwardRef)((e,l)=>{let{input:n,onChange:o=function(e){let{handlers:{base:l,origin:n}}=e;for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];null==l||l.call(null,...a),null==n||n.call(null,...a)},onMount:s,onUnmount:u}=e,{props:c}=n,{valueKey:i,valueType:d}=(0,t.useMemo)(()=>{let{type:e}=c,l="value",n="string";return e===a.Z.checkbox&&(l="checked",n="boolean"),{valueKey:l,valueType:n}},[c]),{onChange:h,[i]:m,...f}=c,[g,p]=(0,t.useState)(m),v=(0,t.useCallback)(e=>{let{target:{[i]:l}}=e;p(r.Z[d](l))},[i,d]),b=(0,t.useCallback)(function(){for(var e=arguments.length,l=Array(e),n=0;n<e;n++)l[n]=arguments[n];return null==o?void 0:o.call(null,{handlers:{base:v,origin:h}},...l)},[v,h,o]);return(0,t.useEffect)(()=>(null==s||s.call(null),u),[]),(0,t.useEffect)(()=>{p(m)},[m]),(0,t.useImperativeHandle)(l,()=>({get:()=>g,set:p}),[g]),(0,t.cloneElement)(n,{...f,onChange:b,[i]:g})});o.displayName="UncontrolledInput",l.Z=o},77510:function(e,l,n){var t=n(67294),a=n(8100),r=n(92230),o=n(54120);l.Z=function(e){let l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{baseUrl:n=r.Z,fetcher:s=o.Z,mod:u,...c}=l,{data:i,error:d,isValidating:h,mutate:m}=(0,a.ZP)("".concat(n).concat(e),s,c),f=(0,t.useMemo)(()=>u&&i&&u(i),[i,u]),g=!d&&!i;return{altData:f,data:i,error:d,mutate:m,loading:g,validating:h}}},14879:function(e,l){l.Z={boolean:e=>!!e,number:e=>parseInt(String(e),10)||0,string:e=>String(e)}},66173:function(e,l,n){var t=n(48403),a=n.n(t);l.Z=e=>{let l=e.replace(/([a-z\d])([A-Z])/g,"$1 $2");return a()(l)}},87196:function(e,l,n){var t=n(66173);let a=function(e){let{build:l=(e,l)=>{let n=l;if("string"==typeof n){let[e,...l]=n.split(/\s+/);n=[(0,t.Z)(e.replace(/^[^\s]+\.([^.]+)/,"$1")),...l].join(" ")}return{children:n,type:"warning"}},chain:n="",skip:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce((e,t)=>{let[o,s]=t,u=[n,o].filter(e=>!!e).join(".");return null!==s&&"object"==typeof s?{...e,...a(s,{build:l,chain:u,skip:r})}:((null==r?void 0:r.call(null,u))||(e[u]=l(u,s)),e)},{})};l.Z=a},1322:function(e,l,n){n.d(l,{Cm:function(){return o},TB:function(){return u},r:function(){return c},uI:function(){return s}});var t=n(54490),a=n(16310),r=n(38189);let o=()=>a.Z_().matches(r.bQ,{message:"${path} must be a valid MAC address"}),s=()=>a.Z_().matches(r.Qt,{message:"${path} must be a valid UUID"}),u=()=>a.Z_().matches(r.tf,{message:"${path} must be a valid IPv4 address"}),c=e=>{let l,n;let{baseUnit:r="B",max:o,min:s,nds:u="not-data-size"}=e;return s&&(n=(e,l)=>{var n;let{createError:a}=l,o=null!==(n=(0,t._d)(s,{toUnit:"ibyte"}))&&void 0!==n?n:"".concat(s," ").concat(r);if(!(e>=s))throw a({message:"${path} must be greater than or equal to ${min}",params:{min:o}});return!0}),o&&(l=(e,l)=>{var n;let{createError:a,parent:r}=l,s=null!==(n=(0,t._d)(o,{toUnit:r.unit}))&&void 0!==n?n:"available size";if(!(e<=o))throw a({message:"${path} must be less than or equal to ${max}",params:{max:s}});return!0}),a.Ry({value:a.Z_().ensure().when(["unit"],(e,a)=>{let[o]=e;return/percent/.test(o)?a.test({exclusive:!0,name:"percent",test:(e,l)=>{let{createError:n}=l,t=Number(e);return Number.isSafeInteger(t)?t<=100?t>=0||n({message:"${path} (%) must be greater than or equal to ${min}%",params:{min:0}}):n({message:"${path} (%) must be less than or equal to ${max}%",params:{max:100}}):n({message:"${path} (%) must be a valid integer"})}}):a.transform(e=>{if(o===r)return e;let l=(0,t.Gh)(e,{fromUnit:o,precision:0,toUnit:r});return l?l.value:u}).test({exclusive:!0,message:"${path} is not a valid data size",name:"datasize",test:e=>e!==u}).test({exclusive:!0,name:"sequence",test:(e,t)=>{let a;let{createError:r}=t;try{a=BigInt(e)}catch(e){return r({message:"${path} cannot have decimal bytes"})}try{null==n||n.call(t,a,t),null==l||l.call(t,a,t)}catch(e){return e}return!0}})}),unit:a.Z_()})}}}]);
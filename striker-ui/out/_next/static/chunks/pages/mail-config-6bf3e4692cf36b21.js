(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[249],{88668:function(e,t,n){var r=n(83369),l=n(90619),i=n(72385);function a(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new r;++t<n;)this.add(e[t])}a.prototype.add=a.prototype.push=l,a.prototype.has=i,e.exports=a},82908:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}},90939:function(e,t,n){var r=n(2492),l=n(37005);e.exports=function e(t,n,i,a,s){return t===n||(null!=t&&null!=n&&(l(t)||l(n))?r(t,n,i,a,e,s):t!=t&&n!=n)}},2492:function(e,t,n){var r=n(46384),l=n(67114),i=n(18351),a=n(16096),s=n(64160),o=n(1469),u=n(44144),d=n(36719),c="[object Arguments]",h="[object Array]",m="[object Object]",p=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,f,v,g){var x=o(e),j=o(t),Z=x?h:s(e),b=j?h:s(t);Z=Z==c?m:Z,b=b==c?m:b;var y=Z==m,C=b==m,w=Z==b;if(w&&u(e)){if(!u(t))return!1;x=!0,y=!1}if(w&&!y)return g||(g=new r),x||d(e)?l(e,t,n,f,v,g):i(e,t,Z,n,f,v,g);if(!(1&n)){var A=y&&p.call(e,"__wrapped__"),P=C&&p.call(t,"__wrapped__");if(A||P){var O=A?e.value():e,k=P?t.value():t;return g||(g=new r),v(O,k,n,f,g)}}return!!w&&(g||(g=new r),a(e,t,n,f,v,g))}},74757:function(e){e.exports=function(e,t){return e.has(t)}},67114:function(e,t,n){var r=n(88668),l=n(82908),i=n(74757);e.exports=function(e,t,n,a,s,o){var u=1&n,d=e.length,c=t.length;if(d!=c&&!(u&&c>d))return!1;var h=o.get(e),m=o.get(t);if(h&&m)return h==t&&m==e;var p=-1,f=!0,v=2&n?new r:void 0;for(o.set(e,t),o.set(t,e);++p<d;){var g=e[p],x=t[p];if(a)var j=u?a(x,g,p,t,e,o):a(g,x,p,e,t,o);if(void 0!==j){if(j)continue;f=!1;break}if(v){if(!l(t,function(e,t){if(!i(v,t)&&(g===e||s(g,e,n,a,o)))return v.push(t)})){f=!1;break}}else if(!(g===x||s(g,x,n,a,o))){f=!1;break}}return o.delete(e),o.delete(t),f}},18351:function(e,t,n){var r=n(62705),l=n(11149),i=n(77813),a=n(67114),s=n(68776),o=n(21814),u=r?r.prototype:void 0,d=u?u.valueOf:void 0;e.exports=function(e,t,n,r,u,c,h){switch(n){case"[object DataView]":if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)break;e=e.buffer,t=t.buffer;case"[object ArrayBuffer]":if(e.byteLength!=t.byteLength||!c(new l(e),new l(t)))break;return!0;case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+e,+t);case"[object Error]":return e.name==t.name&&e.message==t.message;case"[object RegExp]":case"[object String]":return e==t+"";case"[object Map]":var m=s;case"[object Set]":var p=1&r;if(m||(m=o),e.size!=t.size&&!p)break;var f=h.get(e);if(f)return f==t;r|=2,h.set(e,t);var v=a(m(e),m(t),r,u,c,h);return h.delete(e),v;case"[object Symbol]":if(d)return d.call(e)==d.call(t)}return!1}},16096:function(e,t,n){var r=n(58234),l=Object.prototype.hasOwnProperty;e.exports=function(e,t,n,i,a,s){var o=1&n,u=r(e),d=u.length;if(d!=r(t).length&&!o)return!1;for(var c=d;c--;){var h=u[c];if(!(o?h in t:l.call(t,h)))return!1}var m=s.get(e),p=s.get(t);if(m&&p)return m==t&&p==e;var f=!0;s.set(e,t),s.set(t,e);for(var v=o;++c<d;){var g=e[h=u[c]],x=t[h];if(i)var j=o?i(x,g,h,t,e,s):i(g,x,h,e,t,s);if(!(void 0===j?g===x||a(g,x,n,i,s):j)){f=!1;break}v||(v="constructor"==h)}if(f&&!v){var Z=e.constructor,b=t.constructor;Z!=b&&"constructor"in e&&"constructor"in t&&!("function"==typeof Z&&Z instanceof Z&&"function"==typeof b&&b instanceof b)&&(f=!1)}return s.delete(e),s.delete(t),f}},68776:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}},90619:function(e){e.exports=function(e){return this.__data__.set(e,"__lodash_hash_undefined__"),this}},72385:function(e){e.exports=function(e){return this.__data__.has(e)}},21814:function(e){e.exports=function(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}},18446:function(e,t,n){var r=n(90939);e.exports=function(e,t){return r(e,t)}},47037:function(e,t,n){var r=n(44239),l=n(1469),i=n(37005);e.exports=function(e){return"string"==typeof e||!l(e)&&i(e)&&"[object String]"==r(e)}},24084:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/mail-config",function(){return n(86901)}])},96674:function(e,t,n){"use strict";var r=n(85893),l=n(89256),i=n(62191),a=n(89262),s=n(59879),o=n(324),u=n(28721),d=n(73315),c=n(14440),h=n(55074),m=n(67294),p=n(77831),f=n(34635),v=n(91029);let g=e=>(0,r.jsx)(l.Z,{in:!0,children:(0,r.jsx)(i.Z,{...e})}),x=(0,a.ZP)("ul")({padding:0}),j=s.Z;t.Z=e=>{let{componentsProps:t,extendRenderInput:n,getGroupLabel:l,label:i,messageBoxProps:a,renderGroup:s,renderInput:Z,sx:b,...y}=e,C=(0,m.useMemo)(()=>({paper:{sx:{backgroundColor:p.lD,["& .".concat(o.Z.groupLabel)]:{backgroundColor:p.lD}}},...t}),[t]),w=(0,m.useMemo)(()=>s||l&&(e=>(0,r.jsxs)("li",{children:[(0,r.jsx)(j,{component:"div",className:o.Z.groupLabel,children:l(e.group)}),(0,r.jsx)(x,{className:o.Z.groupUl,children:e.children})]},e.key)),[l,s]),A=(0,m.useMemo)(()=>null!=Z?Z:e=>{let{fullWidth:t,InputProps:l,InputLabelProps:a,inputProps:s}=e,o={formControlProps:{fullWidth:t,ref:l.ref},inputLabelProps:a,inputProps:{className:l.className,endAdornment:l.endAdornment,inputProps:s,startAdornment:l.startAdornment},label:i};return null==n||n.call(null,o,e),(0,r.jsx)(v.Z,{...o})},[n,i,Z]),P=(0,m.useMemo)(()=>({["& .".concat(u.Z.root," .").concat(o.Z.endAdornment)]:{right:"7px",["& .".concat(d.Z.root)]:{color:p.s7}},...b}),[b]);return(0,r.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column"},children:[(0,r.jsx)(h.Z,{PaperComponent:g,...y,componentsProps:C,renderGroup:w,renderInput:A,sx:P}),(0,r.jsx)(f.Z,{...a})]})}},78533:function(e,t,n){"use strict";var r=n(85893),l=n(67294),i=n(98484),a=n(34003),s=n(97607),o=n(83916),u=n(68805),d=n(85291),c=n(2188),h=n(77510);let m=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return"function"==typeof e?e(...n):e};t.Z=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let[p]=t,{addHeader:f,editHeader:v,entriesUrl:g,formDialogProps:x,getAddLoading:j,getDeleteErrorMessage:Z,getDeleteHeader:b,getDeletePromiseChain:y=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e(...n)},getDeleteSuccessMessage:C,getEditLoading:w=e=>e,listEmpty:A,listProps:P,onItemClick:O=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e(...n)},refreshInterval:k=5e3,renderAddForm:M,renderDeleteItem:_,renderEditForm:S,renderListItem:I,entryUrlPrefix:F=g}=p,D=(0,l.useRef)(null),E=(0,l.useRef)(null),{confirmDialog:V,finishConfirm:U,setConfirmDialogLoading:N,setConfirmDialogOpen:T,setConfirmDialogProps:R}=(0,c.Z)({initial:{scrollContent:!0}}),[q,L]=(0,l.useState)(!1),[H,W]=(0,l.useState)(),{data:z,mutate:K,loading:$}=(0,h.Z)(g,{refreshInterval:k}),{fetch:J,loading:B}=(0,u.Z)({onData:e=>W(e),url:F}),G=(0,l.useMemo)(()=>m(f),[f]),X=(0,l.useMemo)(()=>m(v,H),[H,v]),Q=(0,l.useMemo)(()=>({add:{open:function(){var e;let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return null==D?void 0:null===(e=D.current)||void 0===e?void 0:e.setOpen(t)}},confirm:{finish:U,loading:N,open:function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return T(e)},prepare:R},edit:{open:function(){var e;let t=!(arguments.length>0)||void 0===arguments[0]||arguments[0];return null==E?void 0:null===(e=E.current)||void 0===e?void 0:e.setOpen(t)}}}),[U,N,T,R]),{buildDeleteDialogProps:Y,checks:ee,getCheck:et,hasAllChecks:en,hasChecks:er,multipleItems:el,resetChecks:ei,setAllChecks:ea,setCheck:es}=(0,d.Z)({list:z});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Z,{allowCheckAll:el,allowEdit:!0,allowItemButton:q,disableDelete:!er,edit:q,getListCheckboxProps:()=>({checked:en,onChange:(e,t)=>ea(t)}),getListItemCheckboxProps:e=>({checked:et(e),onChange:(t,n)=>es(e,n)}),header:!0,listEmpty:A,listItems:z,loading:$,onAdd:()=>{var e;return null==D?void 0:null===(e=D.current)||void 0===e?void 0:e.setOpen(!0)},onDelete:()=>{R(Y({onProceedAppend:()=>{N(!0),Promise.all(y((e,t)=>e.map(e=>i.Z.delete("".concat(t,"/").concat(e))),ee,g)).then(()=>{U("Success",C()),K()}).catch(e=>{U("Error",Z((0,s.Z)(e)))}).finally(()=>{ei()})},getConfirmDialogTitle:b,renderEntry:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return _(z,...t)}})),T(!0)},onEdit:()=>L(e=>!e),onItemClick:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return O((e,t)=>{var n;null==E||null===(n=E.current)||void 0===n||n.setOpen(!0),J("/".concat(t))},...t)},renderListItem:I,...P}),(0,r.jsx)(a.Js,{header:G,loading:null==j?void 0:j.call(null),ref:D,showClose:!0,...null==x?void 0:x.common,...null==x?void 0:x.add,children:M(Q)}),(0,r.jsx)(a.Js,{header:X,loading:w(B),ref:E,showClose:!0,...null==x?void 0:x.common,...null==x?void 0:x.edit,children:S(Q,H)}),V]})}},44089:function(e,t,n){"use strict";var r=n(85893),l=n(14440),i=n(54965),a=n(37969),s=n(38189),o=n(66173),u=n(56903),d=n(59278);let c=e=>{let{entry:t}=e;return(0,r.jsx)(d.$_,{whiteSpace:"nowrap",children:String(t)})},h=e=>{let{entry:t,key:n}=e;return s.JW.test(n)?(0,r.jsx)(d.PJ,{wrapper:"mono",children:String(t)}):c(e)},m=e=>{let{entry:t,hasPassword:n}=e;return["",null,void 0].some(e=>t===e)||Number.isNaN(t)?(0,r.jsx)(d.Ac,{children:"none"}):n?h(e):c(e)},p=e=>{let{depth:t,entry:n,getLabel:i,hasPassword:a,key:s,nest:c,renderValue:h}=e;return(0,r.jsxs)(u.Z,{fullWidth:!0,growFirst:!0,row:!0,maxWidth:"100%",children:[(0,r.jsx)(d.Ac,{children:i({cap:o.Z,depth:t,entry:n,hasPassword:a,key:s})}),(0,r.jsx)(l.Z,{sx:{maxWidth:"100%",overflowX:"scroll"},children:!c&&h(m,{depth:t,entry:n,hasPassword:a,key:s})})]})},f=e=>{let{key:t}=e;return/confirm|uuid/i.test(t)},v=e=>{let{depth:t=0,entries:n,getEntryLabel:l,getListProps:s,getListItemProps:o,hasPassword:u,listKey:d,maxDepth:c,renderEntry:h,renderEntryValue:m,skip:p}=e,g=[];Object.entries(n).forEach(e=>{let[n,a]=e,s=null!==a&&"object"==typeof a,d=s?null:a,x={depth:t,entry:d,hasPassword:u,key:n};p(f,x)||g.push((0,r.jsx)(i.ZP,{sx:{paddingLeft:"".concat(t,"em")},...null==o?void 0:o.call(null,x),children:h({depth:t,entry:d,getLabel:l,hasPassword:u,key:n,nest:s,renderValue:m})},"form-summary-entry-".concat(n))),s&&t<c&&g.push(v({depth:t+1,entries:a,getEntryLabel:l,hasPassword:u,listKey:n,maxDepth:c,renderEntry:h,renderEntryValue:m,skip:p}))});let x="form-summary-list-".concat(null!=d?d:"root");return(0,r.jsx)(a.Z,{dense:!0,disablePadding:!0,...null==s?void 0:s.call(null,{depth:t,entries:n,key:d}),children:g},x)};t.Z=e=>{let{entries:t,getEntryLabel:n=e=>{let{cap:t,key:n}=e;return t(n)},getListProps:r,getListItemProps:l,hasPassword:i=!1,maxDepth:a=3,renderEntry:s=p,renderEntryValue:o=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e(...n)},skip:u=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return e(...n)}}=e;return v({entries:t,getEntryLabel:n,getListProps:r,getListItemProps:l,hasPassword:i,maxDepth:a,renderEntry:s,renderEntryValue:o,skip:u})}},81208:function(e,t,n){"use strict";var r=n(85893),l=n(67294),i=n(99576);let a={count:0,defaultMessageType:"info",messages:void 0,onSet:void 0,usePlaceholder:!0},s=(0,l.forwardRef)((e,t)=>{let{count:n=a.count,defaultMessageType:s=a.defaultMessageType,messages:o,onSet:u,usePlaceholder:d=a.usePlaceholder}=e,[c,h]=(0,l.useState)({}),m=(0,l.useMemo)(()=>({...o,...c}),[o,c]),p=(0,l.useCallback)(e=>void 0!==m[e],[m]),f=(0,l.useCallback)((e,t)=>{let n=0;h(r=>{let{[e]:l,...i}=r;return t&&(i[e]=t),n=Object.keys(i).length,i}),null==u||u.call(null,n)},[u]),v=(0,l.useCallback)((e,t)=>{let n=0,r=t?(e,r)=>{e[r]=t,n+=1}:void 0;h(t=>{let l={};return Object.keys(t).forEach(i=>{e.test(i)?null==r||r.call(null,l,i):(l[i]=t[i],n+=1)}),l}),null==u||u.call(null,n)},[u]),g=(0,l.useMemo)(()=>{let e=Object.entries(m),t=n>0,l=t?n:e.length,a=[];if(e.every(e=>{let[t,n]=e,{children:o,type:u=s}=n;return a.push((0,r.jsx)(i.Z,{type:u,children:o},"message-".concat(t))),a.length<l}),d&&t&&0===a.length){let e=n-a.length;for(let t=0;t<e;t+=1)a.push((0,r.jsx)(i.Z,{sx:{visibility:"hidden"},text:"Placeholder"},"message-placeholder-".concat(t)))}return a},[n,s,d,m]);return(0,l.useImperativeHandle)(t,()=>({exists:p,setMessage:f,setMessageRe:v}),[p,f,v]),(0,r.jsx)(r.Fragment,{children:g})});s.defaultProps=a,s.displayName="MessageGroup",t.Z=s},12387:function(e,t,n){"use strict";var r=n(67294),l=n(37842),i=n(14879);let a=(0,r.forwardRef)((e,t)=>{let{input:n,onChange:a=function(e){let{handlers:{base:t,origin:n}}=e;for(var r=arguments.length,l=Array(r>1?r-1:0),i=1;i<r;i++)l[i-1]=arguments[i];null==t||t.call(null,...l),null==n||n.call(null,...l)},onMount:s,onUnmount:o}=e,{props:u}=n,{valueKey:d,valueType:c}=(0,r.useMemo)(()=>{let{type:e}=u,t="value",n="string";return e===l.Z.checkbox&&(t="checked",n="boolean"),{valueKey:t,valueType:n}},[u]),{onChange:h,[d]:m,...p}=u,[f,v]=(0,r.useState)(m),g=(0,r.useCallback)(e=>{let{target:{[d]:t}}=e;v(i.Z[c](t))},[d,c]),x=(0,r.useCallback)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return null==a?void 0:a.call(null,{handlers:{base:g,origin:h}},...t)},[g,h,a]);return(0,r.useEffect)(()=>(null==s||s.call(null),o),[]),(0,r.useEffect)(()=>{v(m)},[m]),(0,r.useImperativeHandle)(t,()=>({get:()=>f,set:v}),[f]),(0,r.cloneElement)(n,{...p,onChange:x,[d]:f})});a.displayName="UncontrolledInput",t.Z=a},68805:function(e,t,n){"use strict";var r=n(67294),l=n(98484),i=n(97607);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{config:t,onError:n,onData:a,url:s=""}=e,[o,u]=(0,r.useState)(!1);return{fetch:(0,r.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,o="".concat(s).concat(e);o&&(u(!0),l.Z.get(o,{...t,...r}).then(e=>{let{data:t}=e;null==a||a.call(null,t)}).catch(e=>{let t=(0,i.Z)(e);null==n||n.call(null,t)}).finally(()=>{u(!1)}))},[s,t,a,n]),loading:o}}},85291:function(e,t,n){"use strict";var r=n(85893),l=n(67294),i=n(8534),a=n(44089);t.Z=e=>{let{list:t={}}=e,[n,s]=(0,l.useState)({}),o=(0,l.useMemo)(()=>Object.keys(t),[t]),u=(0,l.useMemo)(()=>Object.keys(n),[n]),d=(0,l.useMemo)(()=>u.length===o.length,[u.length,o.length]),c=(0,l.useMemo)(()=>u.length>0,[u.length]),h=(0,l.useMemo)(()=>o.length>1,[o.length]),m=(0,l.useCallback)(e=>{let{confirmDialogProps:t={},formSummaryProps:l={},getConfirmDialogTitle:i,onProceedAppend:s,renderEntry:o}=e;return{actionProceedText:"Delete",content:(0,r.jsx)(a.Z,{entries:n,maxDepth:0,renderEntry:o,...l}),onProceedAppend:s,proceedColour:"red",titleText:i(u.length),...t}},[n,u.length]),p=(0,l.useCallback)(e=>!!n[e],[n]);return{buildDeleteDialogProps:m,checklist:n,checks:u,getCheck:p,hasAllChecks:d,hasChecks:c,multipleItems:h,resetChecks:(0,l.useCallback)(()=>s({}),[]),setAllChecks:(0,l.useCallback)(e=>s(o.reduce((t,n)=>(e&&(t[n]=e),t),{})),[o]),setCheck:(0,l.useCallback)((e,t)=>s((0,i.ZP)(e,t||void 0)),[])}}},2188:function(e,t,n){"use strict";var r=n(85893),l=n(67294),i=n(77583),a=n(99576);t.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{initial:{actionProceedText:t="",content:n="",titleText:s="",...o}={}}=e,u=(0,l.useRef)(null),[d,c]=(0,l.useState)({actionProceedText:t,content:n,titleText:s}),h=(0,l.useCallback)(e=>c(t=>{let{loading:n,...r}=t;return{...r,loading:e}}),[]),m=(0,l.useCallback)(e=>{var t,n;return null==u?void 0:null===(n=u.current)||void 0===n?void 0:null===(t=n.setOpen)||void 0===t?void 0:t.call(null,e)},[]),p=(0,l.useCallback)((e,t)=>c({actionProceedText:"",content:(0,r.jsx)(a.Z,{...t}),showActionArea:!1,showClose:!0,titleText:e}),[]);return{confirmDialog:(0,l.useMemo)(()=>(0,r.jsx)(i.Z,{...o,...d,ref:u}),[d,o]),confirmDialogRef:u,setConfirmDialogLoading:h,setConfirmDialogOpen:m,setConfirmDialogProps:c,finishConfirm:p}}},77510:function(e,t,n){"use strict";var r=n(67294),l=n(8100),i=n(92230),a=n(54120);t.Z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{baseUrl:n=i.Z,fetcher:s=a.Z,mod:o,...u}=t,{data:d,error:c,mutate:h}=(0,l.ZP)("".concat(n).concat(e),s,u),m=(0,r.useMemo)(()=>o&&d&&o(d),[d,o]),p=!c&&!d;return{altData:m,data:d,error:c,mutate:h,loading:p}}},82547:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(55066),l=n(18446),i=n.n(l),a=n(13218),s=n.n(a),o=n(47037),u=n.n(o),d=n(67294),c=n(23279),h=n.n(c),m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{wait:n=500,...r}=t;return h()(e,n,r)},p=n(87196);let f=(e,t,n)=>{let[r,...l]=u()(t)?t.split("."):t;if(!(r in e))return!1;let a=e[r],o=n[r];return s()(a)&&s()(o)&&l.length?f(a,l,o):!i()(a,o)};var v=e=>{let[t,n]=(0,d.useState)({}),[l,i]=(0,d.useState)(!1),a=(0,r.TA)({...e}),s=(0,d.useCallback)(e=>(0,r.u9)(t,e),[t]),o=(0,d.useCallback)(e=>f(a.values,e,a.initialValues),[a.initialValues,a.values]),c=(0,d.useMemo)(()=>{let e=m(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];a.handleChange(...t),i(!1)});return function(){for(var t=arguments.length,l=Array(t),a=0;a<t;a++)l[a]=arguments[a];i(!0);let[s]=l;if(!u()(s)){let e=s.target?s.target:s.currentTarget;n(t=>(0,r.tP)(t,e.name,!0))}e(...l)}},[a.handleChange]),h=(0,d.useMemo)(()=>l||!a.dirty||!a.isValid||a.isValidating||a.isSubmitting,[l,a.dirty,a.isSubmitting,a.isValid,a.isValidating]),v=(0,d.useMemo)(()=>(0,p.Z)(a.errors,{skip:e=>!o(e)}),[a.errors,o]);return{disabledSubmit:h,formik:a,formikErrors:v,getFieldChanged:s,handleChange:c}}},59752:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=e=>e.reduce((e,t)=>{let{hostName:n,hostType:r,hostUUID:l}=t;return e[l]={name:n,type:r,uuid:l},e},{}),l=e=>e.reduce((e,t)=>{let{anvilDescription:n,anvilName:l,anvilUUID:i,hosts:a}=t;return e[i]={description:n,hosts:r(a),name:l,uuid:i},e},{})},8534:function(e,t,n){"use strict";n.d(t,{Um:function(){return l}});let r=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let[,r,l,i]=t;void 0!==i&&(r[l]=i)},l=function(e,t){let{set:n=r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=>{let l={};return Object.keys(r).forEach(i=>{e.test(i)?n(r,l,i,t):l[i]=r[i]}),l}};t.ZP=function(e,t){let{guard:n=()=>!0,set:l=r}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=>{let{[e]:i,...a}=r,s={...a};return n(r,e,t)&&l(r,s,e,t),s}}},36026:function(e,t){"use strict";t.Z=(e,t)=>e&&Object.keys(e).reduce((e,n)=>({...e,[n]:t}),{})},14879:function(e,t){"use strict";t.Z={boolean:e=>!!e,number:e=>parseInt(String(e),10)||0,string:e=>String(e)}},66173:function(e,t,n){"use strict";var r=n(48403),l=n.n(r);t.Z=e=>{let t=e.replace(/([a-z\d])([A-Z])/g,"$1 $2");return l()(t)}},87196:function(e,t,n){"use strict";var r=n(66173);let l=function(e){let{build:t=(e,t)=>{let n=t;if("string"==typeof n){let[e,...t]=n.split(/\s+/);n=[(0,r.Z)(e.replace(/^[^\s]+\.([^.]+)/,"$1")),...t].join(" ")}return{children:n,type:"warning"}},chain:n="",skip:i}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce((e,r)=>{let[a,s]=r,o=[n,a].filter(e=>!!e).join(".");return null!==s&&"object"==typeof s?{...e,...l(s,{build:t,chain:o,skip:i})}:((null==i?void 0:i.call(null,o))||(e[o]=t(o,s)),e)},{})};t.Z=l},74077:function(e,t,n){"use strict";n.d(t,{T:function(){return a},u:function(){return i}});var r=n(16310),l=n(38189);let i=()=>r.Z_().matches(l.Qt,{message:"${path} must be a valid UUID"}),a=()=>r.Z_().matches(l.tf,{message:"${path} must be a valid IPv4 address"})},86901:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(85893),l=n(99514),i=n(9008),a=n.n(i),s=n(74717),o=n(60166),u=n(67294),d=n(25934),c=n(4845),h=n(98484),m=n(56903),p=n(44089),f=n(97607),v=n(16310),g=n(36026),x=n(74077);let j=v.Rx().oneOf([0,1,2,3,4]),Z=v.Ry({delete:v.O7().optional(),level:j.required(),target:v.Ry({type:v.Z_().oneOf(["node","subnode"]).required(),uuid:(0,x.u)().required()}),uuid:(0,x.u)().optional()}),b=v.Vo(e=>v.Ry((0,g.Z)(e,Z))),y=v.Ry({alertOverrides:b,email:v.Z_().email().required(),language:v.Z_().oneOf(["en_CA"]).optional(),level:j.required(),name:v.Z_().required(),uuid:(0,x.u)().optional()}),C=v.Vo(e=>v.Ry((0,g.Z)(e,y)));var w=n(96674),A=n(65895),P=n(6189),O=n(59278),k=n(12387);let M=[{displayValue:"Ignore",value:0},{displayValue:"Critical",value:1},{displayValue:"Warning",value:2},{displayValue:"Notice",value:3},{displayValue:"Info",value:4}];var _=e=>{let{alertOverrideTargetOptions:t,alertOverrideValueId:n,mailRecipientUuid:i,formikUtils:a}=e,s=(0,u.useMemo)(()=>null!=n?n:(0,d.Z)(),[n]),{formik:o}=a,{values:{[i]:c}}=o,{alertOverrides:{[s]:h}}=c,p=(0,u.useMemo)(()=>"".concat(i,".alertOverrides.").concat(s),[s,i]),f=(0,u.useMemo)(()=>"".concat(p,".remove"),[p]),v=(0,u.useMemo)(()=>"".concat(p,".target"),[p]),g=(0,u.useMemo)(()=>"".concat(p,".level"),[p]);return(0,r.jsxs)(l.ZP,{alignItems:"center",columns:{xs:1,sm:10},container:!0,justifyContent:"stretch",spacing:"1em",children:[(0,r.jsx)(l.ZP,{item:!0,xs:6,children:(0,r.jsx)(w.Z,{getOptionLabel:e=>e.name,id:v,isOptionEqualToValue:(e,t)=>e.uuid===t.uuid,label:"Target",noOptionsText:"No node or subnode found.",onChange:(e,t)=>o.setFieldValue(v,t,!0),openOnFocus:!0,options:t,renderOption:(e,t)=>(0,u.createElement)("li",{...e,key:"".concat(t.node,"-").concat(t.uuid)},"node"===t.type?(0,r.jsxs)(m.Z,{spacing:0,children:[(0,r.jsx)(O.Ac,{inheritColour:!0,children:t.name}),(0,r.jsx)(O.KI,{inheritColour:!0,children:t.description})]}):(0,r.jsx)(O.Ac,{inheritColour:!0,paddingLeft:".6em",children:t.name})),value:h.target})}),(0,r.jsx)(l.ZP,{item:!0,flexGrow:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(P.Z,{id:g,label:"Alert level",name:g,onChange:o.handleChange,selectItems:M,value:h.level})})}),(0,r.jsx)(l.ZP,{item:!0,width:"min-content",children:(0,r.jsx)(A.Z,{mapPreset:"delete",onClick:()=>{h.uuids?o.setFieldValue(f,!0,!0):o.setValues(e=>{let t={...e},{[i]:n}=t,{[s]:r,...l}=n.alertOverrides;return n.alertOverrides={...l},t})},size:"small"})})]})},S=n(83916),I=e=>{let{alertOverrideTargetOptions:t,formikUtils:n,mailRecipientUuid:l}=e,{formik:i}=n,{values:{[l]:a}}=i,{alertOverrides:s}=a;return(0,r.jsx)(S.Z,{allowAddItem:!0,edit:!0,header:"Alert override rules",listEmpty:"No alert overrides(s)",listItems:s,onAdd:()=>{let e=(0,d.Z)();i.setValues(t=>{let n={...t},{[l]:r}=n;return r.alertOverrides={...r.alertOverrides,[e]:{level:2,target:null}},n})},renderListItem:(e,i)=>!i.remove&&(0,r.jsx)(_,{alertOverrideTargetOptions:t,alertOverrideValueId:e,formikUtils:n,mailRecipientUuid:l})})},F=n(81208),D=n(91029),E=n(82547);let V=[{displayValue:(0,r.jsxs)(m.Z,{spacing:0,children:[(0,r.jsx)(O.Ac,{inheritColour:!0,fontWeight:"inherit",children:"Critical"}),(0,r.jsx)(O.KI,{inheritColour:!0,whiteSpace:"normal",children:"Alerts that could lead to imminent service interruption or unexpected loss of redundancy."})]}),value:1},{displayValue:(0,r.jsxs)(m.Z,{spacing:0,children:[(0,r.jsx)(O.Ac,{inheritColour:!0,fontWeight:"inherit",children:"Warning"}),(0,r.jsx)(O.KI,{inheritColour:!0,whiteSpace:"normal",children:"Alerts that require attention from administrators, such as redundancy loss due to load shedding, hardware in pre-failure, input power loss, temperature anomalies, etc."})]}),value:2},{displayValue:(0,r.jsxs)(m.Z,{spacing:0,children:[(0,r.jsx)(O.Ac,{inheritColour:!0,fontWeight:"inherit",children:"Notice"}),(0,r.jsx)(O.KI,{inheritColour:!0,whiteSpace:"normal",children:"Alerts that are generally safe to ignore, but might provide early warnings of developing issues or insight into system behaviour."})]}),value:3},{displayValue:(0,r.jsxs)(m.Z,{spacing:0,children:[(0,r.jsx)(O.Ac,{inheritColour:!0,fontWeight:"inherit",children:"Info"}),(0,r.jsx)(O.KI,{inheritColour:!0,whiteSpace:"normal",children:"Alerts that are almost always safe to ignore, but may be useful in testing and debugging."})]}),value:4}],U={1:"Critical",2:"Warning",3:"Notice",4:"Info"},N=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/alert-override",{uuid:r}=e;return r?Object.values(e.alertOverrides).reduce((e,t)=>{let{remove:l,level:i,target:a,uuids:s}=t;if(s&&e.push(...Object.keys(s).map(e=>({method:"delete",url:"".concat(n,"/").concat(e)}))),a&&!l){var o;let t=null!==(o=a.subnodes)&&void 0!==o?o:[a.uuid];e.push(...t.map(e=>({body:{hostUuid:e,level:i,mailRecipientUuid:r},method:"post",url:n})))}return e},[]):[]};var T=e=>{let{alertOverrideTargetOptions:t,mailRecipientUuid:n,previousFormikValues:i,tools:a}=e,s=(0,u.useMemo)(()=>null!=n?n:(0,d.Z)(),[n]),m=(0,E.Z)({initialValues:null!=i?i:{[s]:{alertOverrides:{},email:"",language:"en_CA",level:2,name:""}},onSubmit:(e,t)=>{let{setSubmitting:n}=t,{[s]:l}=e,o="Add",u=(0,r.jsx)(r.Fragment,{children:"Failed to add mail recipient."}),d="post",c=(0,r.jsx)(r.Fragment,{children:"Mail recipient added."}),m="Add mail recipient with the following?",v="/mail-recipient";i&&(o="Update",u=(0,r.jsx)(r.Fragment,{children:"Failed to update mail server."}),d="put",c=(0,r.jsx)(r.Fragment,{children:"Mail recipient updated."}),m="Update ".concat(l.name," with the following?"),v+="/".concat(s));let{alertOverrides:g,uuid:x,...j}=l;a.confirm.prepare({actionProceedText:o,content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{entries:j}),(0,r.jsx)(p.Z,{entries:{alertOverrides:Object.entries(g).reduce((e,t)=>{let[n,r]=t;return r.remove||!r.target||(e[n]={level:r.level,name:r.target.name}),e},{})}})]}),onCancelAppend:()=>n(!1),onProceedAppend:async()=>{a.confirm.loading(!0);let e=e=>{let t=(0,f.Z)(e);t.children=(0,r.jsxs)(r.Fragment,{children:[u," ",t.children]}),a.confirm.finish("Error",t),n(!1)};h.Z[d](v,j).then(t=>{let{data:n}=t,r={...l};n&&(r.uuid=n.uuid),Promise.all(N(r,i&&i[s]).map(e=>h.Z[e.method](e.url,e.body))).then(()=>{a.confirm.finish("Success",{children:c}),a["post"===d?"add":"edit"].open(!1)}).catch(e)}).catch(e)},titleText:m}),a.confirm.open(!0)},validationSchema:C}),{disabledSubmit:v,formik:g,formikErrors:x,handleChange:j}=m,Z=(0,u.useMemo)(()=>"".concat(s,".email"),[s]),b=(0,u.useMemo)(()=>"".concat(s,".level"),[s]),y=(0,u.useMemo)(()=>"".concat(s,".name"),[s]);return(0,r.jsxs)(l.ZP,{columns:{xs:1,sm:2},component:"form",container:!0,onSubmit:e=>{e.preventDefault(),g.submitForm()},spacing:"1em",children:[(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{id:y,label:"Recipient name",name:y,onChange:j,required:!0,value:g.values[s].name})})}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{id:Z,label:"Recipient email",name:Z,onChange:j,required:!0,value:g.values[s].email})})}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(P.Z,{id:b,label:"Alert level",name:b,onChange:g.handleChange,required:!0,selectItems:V,selectProps:{MenuProps:{sx:{["& .".concat(o.Z.paper)]:{maxWidth:{md:"60%",lg:"40%"}}}},renderValue:e=>U[e]},value:g.values[s].level})})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(I,{alertOverrideTargetOptions:t,formikUtils:m,mailRecipientUuid:s})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(F.Z,{count:1,messages:x})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(c.Z,{actions:[{background:"blue",children:i?"Update":"Add",disabled:v,type:"submit"}]})})]})},R=n(59752),q=n(78533),L=e=>(0,r.jsx)(T,{...e}),H=n(68805),W=n(77510),z=()=>{let[e,t]=(0,u.useState)(),{altData:n,loading:l}=(0,W.Z)("/anvil",{mod:R.Z}),i=(0,u.useMemo)(()=>n&&Object.values(n).sort((e,t)=>e.name.localeCompare(t.name)).reduce((e,t)=>{let n={description:t.description,name:t.name,node:t.uuid,subnodes:[],type:"node",uuid:t.uuid},r=Object.values(t.hosts).sort((e,t)=>e.name.localeCompare(t.name)).reduce((e,r)=>{var l;return"dr"===r.type||(e.push({name:r.name,node:t.uuid,type:"subnode",uuid:r.uuid}),null===(l=n.subnodes)||void 0===l||l.push(r.uuid)),e},[]);return e.push(n,...r),e},[]),[n]),{fetch:a,loading:s}=(0,H.Z)({onData:e=>t(e),url:"/alert-override"}),o=(0,u.useMemo)(()=>{if(n&&e)return Object.entries(Object.values(e).reduce((e,t)=>{let{node:{uuid:n}}=t;return e[n]?e[n].push(t):e[n]=[t],e},{})).reduce((e,t)=>{let[r,l]=t,[i,...a]=l;if(l.length>1&&a.every(e=>{let{level:t}=e;return t===i.level})){let{0:{level:t}}=l,{[r]:i}=n;e[r]={level:t,target:{description:i.description,name:i.name,node:i.uuid,subnodes:l.map(e=>{let{subnode:{uuid:t}}=e;return t}),type:"node",uuid:i.uuid},uuids:l.reduce((e,t)=>{let{subnode:n,uuid:r}=t;return e[r]=n.uuid,e},{})}}else l.forEach(t=>{let{level:n,node:r,subnode:l,uuid:i}=t;e[l.uuid]={level:n,target:{name:l.name,node:r.uuid,type:"subnode",uuid:l.uuid},uuids:{[i]:l.uuid}}});return e},{})},[e,n]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(q.Z,{addHeader:"Add mail recipient",editHeader:e=>"Update ".concat(null==e?void 0:e.name),entriesUrl:"/mail-recipient",getAddLoading:e=>e||l,getDeleteErrorMessage:e=>{let{children:t,...n}=e;return{...n,children:(0,r.jsxs)(r.Fragment,{children:["Failed to delete mail recipient(s). ",t]})}},getDeleteHeader:e=>"Delete the following ".concat(e," mail recipient(s)?"),getDeleteSuccessMessage:()=>({children:(0,r.jsx)(r.Fragment,{children:"Successfully deleted mail recipient(s)."})}),getEditLoading:e=>e||s,listEmpty:"No mail recipient(s) found.",onItemClick:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];let[,l]=n;e(...n),a(void 0,{params:{"mail-recipient":l}})},renderAddForm:e=>i&&(0,r.jsx)(T,{alertOverrideTargetOptions:i,tools:e}),renderDeleteItem:(e,t)=>{let{key:n}=t,l=null==e?void 0:e[n];return(0,r.jsx)(O.Ac,{children:null==l?void 0:l.name})},renderEditForm:(e,t)=>i&&t&&o&&(0,r.jsx)(L,{alertOverrideTargetOptions:i,mailRecipientUuid:t.uuid,previousFormikValues:{[t.uuid]:{alertOverrides:o,...t}},tools:e}),renderListItem:(e,t)=>{let{name:n}=t;return(0,r.jsx)(O.Ac,{children:n})}})})};let K=v.Ry({address:v.Z_().required(),authentication:v.Z_().oneOf(["none","plain-text","encrypted"]),confirmPassword:v.Z_().when("password",(e,t)=>String(e).length>0?t.required().oneOf([v.iH("password")]):t.optional()),heloDomain:v.Z_().required(),password:v.Z_().optional(),port:v.Rx().required(),security:v.Z_().oneOf(["none","starttls","tls-ssl"]),username:v.Z_().optional(),uuid:(0,x.u)().required()}),$=v.Vo(e=>v.Ry((0,g.Z)(e,K)));var J=e=>{let{localhostDomain:t="",mailServerUuid:n,previousFormikValues:i,tools:a}=e,s=(0,u.useMemo)(()=>null!=n?n:(0,d.Z)(),[n]),{disabledSubmit:o,formik:m,formikErrors:v,handleChange:g}=(0,E.Z)({initialValues:null!=i?i:{[s]:{address:"",authentication:"none",heloDomain:t,port:587,security:"none",uuid:s}},onSubmit:(e,t)=>{let{setSubmitting:n}=t,{[s]:l}=e,o="Add",u=(0,r.jsx)(r.Fragment,{children:"Failed to add mail server."}),d="post",c=(0,r.jsx)(r.Fragment,{children:"Mail server added."}),m="Add mail server with the following?",v="/mail-server";i&&(o="Update",u=(0,r.jsx)(r.Fragment,{children:"Failed to update mail server."}),d="put",c=(0,r.jsx)(r.Fragment,{children:"Mail server updated."}),m="Update ".concat(l.address,":").concat(l.port," with the following?"),v+="/".concat(s));let{confirmPassword:g,uuid:x,...j}=l;a.confirm.prepare({actionProceedText:o,content:(0,r.jsx)(p.Z,{entries:j,hasPassword:!0}),onCancelAppend:()=>n(!1),onProceedAppend:()=>{a.confirm.loading(!0),h.Z[d](v,l).then(()=>{a.confirm.finish("Success",{children:c}),a["post"===d?"add":"edit"].open(!1)}).catch(e=>{let t=(0,f.Z)(e);t.children=(0,r.jsxs)(r.Fragment,{children:[u," ",t.children]}),a.confirm.finish("Error",t),n(!1)})},titleText:m}),a.confirm.open(!0)},validationSchema:$}),x=(0,u.useMemo)(()=>"".concat(s,".address"),[s]),j=(0,u.useMemo)(()=>"".concat(s,".authentication"),[s]),Z=(0,u.useMemo)(()=>"".concat(s,".confirmPassword"),[s]),b=(0,u.useMemo)(()=>"".concat(s,".heloDomain"),[s]),y=(0,u.useMemo)(()=>"".concat(s,".password"),[s]),C=(0,u.useMemo)(()=>"".concat(s,".port"),[s]),w=(0,u.useMemo)(()=>"".concat(s,".security"),[s]),A=(0,u.useMemo)(()=>"".concat(s,".username"),[s]);return(0,r.jsxs)(l.ZP,{component:"form",onSubmit:e=>{e.preventDefault(),m.submitForm()},container:!0,columns:{xs:1,sm:2},spacing:"1em",children:[(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{id:x,label:"Server address",name:x,onChange:g,required:!0,value:m.values[s].address})})}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{id:C,label:"Server port",name:C,onChange:g,required:!0,type:"number",value:m.values[s].port})})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(P.Z,{id:w,label:"Server security type",name:w,onChange:g,required:!0,selectItems:["none","starttls","tls-ssl"],value:m.values[s].security})})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(P.Z,{id:j,label:"Server authentication method",name:j,onChange:g,required:!0,selectItems:["none","plain-text","encrypted"],value:m.values[s].authentication})})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{id:b,label:"HELO domain",name:b,onChange:g,required:!0,value:m.values[s].heloDomain})})}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{disableAutofill:!0,id:A,label:"Server username",name:A,onChange:g,value:m.values[s].username})})}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{disableAutofill:!0,id:y,label:"Server password",name:y,onChange:g,type:"password",value:m.values[s].password})})}),(0,r.jsx)(l.ZP,{display:{xs:"none",sm:"initial"},item:!0,sm:1}),(0,r.jsx)(l.ZP,{item:!0,xs:1,children:(0,r.jsx)(k.Z,{input:(0,r.jsx)(D.Z,{disableAutofill:!0,id:Z,label:"Confirm password",name:Z,onChange:g,type:"password",value:m.values[s].confirmPassword})})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(F.Z,{count:1,messages:v})}),(0,r.jsx)(l.ZP,{item:!0,width:"100%",children:(0,r.jsx)(c.Z,{actions:[{background:"blue",children:i?"Update":"Add",disabled:o,type:"submit"}]})})]})},B=e=>(0,r.jsx)(J,{...e}),G=()=>{let{data:e,loading:t}=(0,W.Z)("/host/local");return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(q.Z,{addHeader:"Add mail server",editHeader:e=>"Update ".concat(null==e?void 0:e.address,":").concat(null==e?void 0:e.port),entriesUrl:"/mail-server",getAddLoading:e=>e||t,getDeleteErrorMessage:e=>{let{children:t,...n}=e;return{...n,children:(0,r.jsxs)(r.Fragment,{children:["Failed to delete mail server(s). ",t]})}},getDeleteHeader:e=>"Delete the following ".concat(e," mail server(s)?"),getDeleteSuccessMessage:()=>({children:(0,r.jsx)(r.Fragment,{children:"Successfully deleted mail server(s)."})}),listEmpty:"No mail server(s) found",renderAddForm:t=>e&&(0,r.jsx)(J,{localhostDomain:e.domain,tools:t}),renderDeleteItem:(e,t)=>{let{key:n}=t,l=null==e?void 0:e[n];return(0,r.jsxs)(O.Ac,{children:[null==l?void 0:l.address,":",null==l?void 0:l.port]})},renderEditForm:(e,t)=>t&&(0,r.jsx)(B,{mailServerUuid:t.uuid,previousFormikValues:{[t.uuid]:t},tools:e}),renderListItem:(e,t)=>{let{address:n,port:l}=t;return(0,r.jsxs)(O.Ac,{children:[n,":",l]})}})})},X=n(23930),Q=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a(),{children:(0,r.jsx)("title",{children:"Mail Config"})}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)(l.ZP,{container:!0,columns:{xs:1,md:6,lg:4},children:[(0,r.jsx)(l.ZP,{item:!0,xs:1}),(0,r.jsx)(l.ZP,{item:!0,xs:1,md:4,lg:2,children:(0,r.jsxs)(X.s_,{children:[(0,r.jsx)(X.V9,{children:(0,r.jsx)(O.z,{children:"Mail config"})}),(0,r.jsx)(X.TZ,{expandInitially:!0,header:"Manage mail servers",children:(0,r.jsx)(G,{})}),(0,r.jsx)(X.TZ,{expandInitially:!0,header:"Manage mail recipients",children:(0,r.jsx)(z,{})})]})})]})]})}},function(e){e.O(0,[491,442,433,206,74,461,602,173,717,967,888,774,179],function(){return e(e.s=24084)}),_N_E=e.O()}]);
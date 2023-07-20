"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94],{5094:function(e,n,t){t.d(n,{S:function(){return Z},M:function(){return O}});var r=t(5893),s=t(791),c=t(5537),i=t(1496),o=t(7357),l=t(8333),a=t(5861),u=t(5152),f=t(7294),d=t(1706),x="0xffe3",h="0xffe9",v=[{keys:"Ctrl + Alt + Delete",scans:[]},{keys:"Ctrl + Alt + F1",scans:[x,h,"0xffbe"]},{keys:"Ctrl + Alt + F2",scans:[x,h,"0xffbf"]},{keys:"Ctrl + Alt + F3",scans:[x,h,"0xffc0"]},{keys:"Ctrl + Alt + F4",scans:[x,h,"0xffc1"]},{keys:"Ctrl + Alt + F5",scans:[x,h,"0xffc2"]},{keys:"Ctrl + Alt + F6",scans:[x,h,"0xffc3"]},{keys:"Ctrl + Alt + F7",scans:[x,h,"0xffc4"]},{keys:"Ctrl + Alt + F8",scans:[x,h,"0xffc5"]},{keys:"Ctrl + Alt + F9",scans:[x,h,"0xffc6"]}],m=t(4427),p=t(3679),j=t(2152),C=t(7750),y=t(1081);function w(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return w(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return w(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g="FullSize",A={displayBox:"".concat(g,"-displayBox"),spinnerBox:"".concat(g,"-spinnerBox")},P=(0,i.ZP)("div")((function(){var e;return b(e={},"& .".concat(A.displayBox),{width:"75vw",height:"75vh"}),b(e,"& .".concat(A.spinnerBox),{flexDirection:"column",width:"75vw",height:"75vh",alignItems:"center",justifyContent:"center"}),e})),S=(0,u.default)((function(){return Promise.all([t.e(460),t.e(665)]).then(t.bind(t,4665))}),{loadableGenerated:{webpack:function(){return[4665]}},ssr:!1}),Z=function(e){var n=e.onClickCloseButton,t=e.serverUUID,i=e.serverName,u=e.vncReconnectTimerStart,x=void 0===u?5:u,h=(0,y.Z)(),w=(0,f.useState)(null),b=w[0],g=w[1],Z=(0,f.useState)(void 0),F=Z[0],I=Z[1],E=(0,f.useState)(!1),B=E[0],U=E[1],M=(0,f.useState)(!1),N=M[0],_=M[1],z=(0,f.useState)(x),D=z[0],T=z[1],R=(0,f.useRef)(null),G=(0,f.useRef)(null),O=function(e){g(e.currentTarget)},K=(0,f.useCallback)((function(){var e,n;U(!0),_(!1),I({url:(e=window.location.hostname,n=t,"ws://".concat(e,"/ws/server/vnc/").concat(n))})}),[t]),V=(0,f.useCallback)((function(){I(void 0)}),[]),H=(0,f.useCallback)((function(){(null===R||void 0===R?void 0:R.current)&&(R.current.disconnect(),R.current=null,K())}),[K]),L=(0,f.useCallback)((function(){var e=setInterval((function(){T((function(n){var t=n-1;return t<1&&clearInterval(e),t}))}),1e3)}),[]),$=(0,f.useCallback)((function(){U(!1)}),[]),q=(0,f.useCallback)((function(e){e.detail.clean||(U(!1),_(!0),L())}),[L]),J=(0,f.useMemo)((function(){return!B&&!N}),[B,N]),Q=(0,f.useMemo)((function(){return(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(d.Z,{onClick:O,children:(0,r.jsx)(s.Z,{})}),(0,r.jsx)(l.Z,{anchorEl:b,keepMounted:!0,open:Boolean(b),onClose:function(){return g(null)},children:v.map((function(e){var n=e.keys,t=e.scans;return(0,r.jsx)(m.Z,{onClick:function(){return function(e){if(R.current){if(e.length){for(var n=0;n<=e.length-1;n+=1)R.current.sendKey(e[n],1);for(var t=e.length-1;t>=0;t-=1)R.current.sendKey(e[t],0)}else R.current.sendCtrlAltDel();g(null)}}(t)},children:(0,r.jsx)(a.Z,{variant:"subtitle1",children:n})},n)}))})]})}),[b]),W=(0,f.useMemo)((function(){return(0,r.jsx)(d.Z,{onClick:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var s;V(),null===n||void 0===n||(s=n).call.apply(s,[null].concat(k(t)))},variant:"redcontained",children:(0,r.jsx)(c.Z,{})})}),[V,n]),X=(0,f.useMemo)((function(){return J&&(0,r.jsxs)(r.Fragment,{children:[Q,W]})}),[Q,J,W]);return(0,f.useEffect)((function(){0===D&&(T(x),H())}),[H,D,x]),(0,f.useEffect)((function(){h&&K()}),[K,h]),(0,r.jsxs)(p.s_,{children:[(0,r.jsxs)(p.V9,{children:[(0,r.jsx)(C.z,{text:"Server: ".concat(i)}),X]}),(0,r.jsxs)(P,{children:[(0,r.jsx)(o.Z,{display:J?"flex":"none",className:A.displayBox,children:(0,r.jsx)(S,{onConnect:$,onDisconnect:q,rfb:R,rfbConnectArgs:F,rfbScreen:G})}),!J&&(0,r.jsxs)(o.Z,{display:"flex",className:A.spinnerBox,children:[B&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(C.z,{textAlign:"center",children:["Connecting to ",i,"."]}),(0,r.jsx)(j.Z,{})]}),N&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(C.z,{textAlign:"center",children:"There was a problem connecting to the server."}),(0,r.jsxs)(C.z,{textAlign:"center",mt:"1em",children:["Retrying in ",D,"."]})]})]})]})]})},F=t(4051),I=t.n(F),E=t(9628),B=t(2787),U=t(4799),M=t(2029),N=t(7169),_=t(4690);function z(e,n,t,r,s,c,i){try{var o=e[c](i),l=o.value}catch(a){return void t(a)}o.done?n(l):Promise.resolve(l).then(r,s)}var D={externalPreview:"",headerEndAdornment:null,isExternalPreviewStale:!1,isFetchPreview:!0,isShowControls:!0,isUseInnerPanel:!1,onClickConnectButton:void 0,onClickPreview:void 0,serverName:""},T=function(e){var n=e.children;return e.isUseInnerPanel?(0,r.jsx)(p.Lg,{children:n}):(0,r.jsx)(p.s_,{children:n})},R=function(e){var n=e.children,t=e.isUseInnerPanel,s=e.text;return t?(0,r.jsxs)(p.CH,{children:[s?(0,r.jsx)(C.Ac,{text:s}):(0,r.jsx)(r.Fragment,{}),n]}):(0,r.jsxs)(p.V9,{children:[s?(0,r.jsx)(C.z,{text:s}):(0,r.jsx)(r.Fragment,{}),n]})},G=function(e){var n=e.externalPreview,t=void 0===n?D.externalPreview:n,s=e.headerEndAdornment,c=e.isExternalPreviewStale,i=void 0===c?D.isExternalPreviewStale:c,l=e.isFetchPreview,a=void 0===l?D.isFetchPreview:l,u=e.isShowControls,x=void 0===u?D.isShowControls:u,h=e.isUseInnerPanel,v=void 0===h?D.isUseInnerPanel:h,m=e.onClickPreview,p=e.serverName,C=e.serverUUID,y=e.onClickConnectButton,w=void 0===y?m:y,b=(0,f.useState)(!0),k=b[0],g=b[1],A=(0,f.useState)(!1),P=A[0],S=A[1],Z=(0,f.useState)(""),F=Z[0],G=Z[1],O=(0,f.useMemo)((function(){return F?(0,r.jsx)(o.Z,{alt:"",component:"img",src:"data:image/png;base64,".concat(F),sx:{height:"100%",opacity:P?"0.4":"1",padding:v?".2em":0,width:"100%"}}):(0,r.jsx)(E.Z,{sx:{height:"100%",width:"100%"}})}),[P,v,F]);return(0,f.useEffect)((function(){var e;a?(e=I().mark((function e(){var n,t,r;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(M.Z,"/server/").concat(C,"?ss"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,r=t.screenshot,G(r),S(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),S(!0);case 15:return e.prev=15,g(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,12,15,18]])})),function(){var n=this,t=arguments;return new Promise((function(r,s){var c=e.apply(n,t);function i(e){z(c,r,s,i,o,"next",e)}function o(e){z(c,r,s,i,o,"throw",e)}i(void 0)}))})():t&&(G(t),S(i),g(!1))}),[t,i,a,C]),(0,r.jsxs)(T,{isUseInnerPanel:v,children:[(0,r.jsx)(R,{isUseInnerPanel:v,text:p,children:s}),(0,r.jsxs)(_.Z,{row:!0,sx:{"& > :first-child":{flexGrow:1}},children:[(0,r.jsx)(o.Z,{children:k?(0,r.jsx)(j.Z,{mt:"1em",mb:"1em"}):(0,r.jsx)(U.Z,{component:"span",onClick:m,sx:{borderRadius:N.n_,color:N.s7,padding:0},children:O})}),x&&(0,r.jsx)(_.Z,{children:(0,r.jsx)(d.Z,{onClick:w,children:(0,r.jsx)(B.Z,{})})})]})]})};G.defaultProps=D;var O=G}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9048)}])},7504:function(e,n,t){"use strict";var r=t(5893),i=t(7294),o=t(8263),c=t(7357);function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function d(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(s){a=!0,i=s}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.Z=function(e){var n=e.calculateItemBreakpoints,t=void 0===n?function(){return{xs:1}}:n,a=e.layout,s=e.wrapperBoxProps,f=u(e,["calculateItemBreakpoints","layout","wrapperBoxProps"]),h=(0,i.useMemo)((function(){return Object.entries(a).map((function(e,n){var r=d(e,2),c=r[0],a=r[1],s=c;return a?(0,i.createElement)(o.ZP,l({},t(n,s),{key:s,item:!0},a)):void 0}))}),[t,a]);return(0,r.jsx)(c.Z,l({},s,{children:(0,r.jsx)(o.ZP,l({container:!0},f,{children:h}))}))}},5741:function(e,n,t){"use strict";var r=t(5893),i=t(1714),o=t(122),c=t(7169),a=t(4690);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}n.Z=function(e){var n=e.children,t=e.sx,s=u(e,["children","sx"]);return(0,r.jsx)(o.Z,l({underline:"hover",variant:"subtitle1"},s,{sx:l({color:c.lD,textDecorationColor:c.s7},t),children:(0,r.jsxs)(a.Z,{row:!0,children:[n,(0,r.jsx)(i.Z,{sx:{marginLeft:".3em"}})]})}))}},7791:function(e,n,t){"use strict";var r=t(8100),i=t(2029),o=t(1200);function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}n.Z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.fetcher,a=void 0===t?o.Z:t,s=n.baseUrl,l=void 0===s?i.Z:s,u=c(n,["fetcher","baseUrl"]),d=(0,r.ZP)("".concat(l).concat(e),a,u),f=d.data,h=d.error,m=!h&&!f;return{data:f,error:h,loading:m}}},8669:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=function(e){return e.reduce((function(e,n){var t=n.hostName,r=n.hostType,i=n.hostUUID;return e[i]={name:t,type:r,uuid:i},e}),{})},i=function(e){return e.reduce((function(e,n){var t=n.anvilDescription,i=n.anvilName,o=n.anvilUUID,c=n.hosts;return e[o]={description:t,hosts:r(c),name:i,uuid:o},e}),{})}},9048:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var r=t(5893),i=t(2428),o=t(8263),c=t(7357),a=t(7720),s=t(9008),l=t(1163),u=t(7294),d=t(2029),f=t(7169),h=t(8673),m=t(4490),v=function(e){var n=e.anvil_name,t=e.anvil_state,r=e.anvil_uuid;return{hosts:e.hosts.reduce((function(e,n){var t=n.host_name,r=n.host_uuid,i=n.maintenance_mode,o=n.server_count,c=n.state,a=n.state_percent;return e[r]={name:t,maintenance:i,serverCount:o,state:c,stateProgress:a,uuid:r},e}),{}),name:n,state:t,uuid:r}},x=function(e){var n=e.allocated,t=e.reserved,r=e.total;return{allocated:BigInt(n),reserved:BigInt(t),total:BigInt(r)}},j=function(e){var n=e.storage_groups,t=e.total_free,r=e.total_size,i=BigInt(t),o=BigInt(r);return n.reduce((function(e,n){var t=n.storage_group_free,r=n.storage_group_name,i=n.storage_group_total,o=n.storage_group_uuid,c=BigInt(t),a=BigInt(i);return e.storageGroups[o]={free:c,name:r,size:a,uuid:o},e}),{storageGroups:{},totalFree:i,totalSize:o})},p=t(582),g=t(4690),b=t(2152),y=t(5813),Z=t(7750),O=t(7791);function P(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var w=BigInt(100),_={degraded:f.hM,not_ready:f.Wd,optimal:f.Ej},S={offline:f.Wd,online:f.Ej},I=function(e){var n=e.anvilUuid,t=(0,O.Z)("/anvil/".concat(n)),i=t.data,c=t.loading,a=(0,u.useMemo)((function(){return i&&v(i)}),[i]),s=(0,O.Z)("/anvil/".concat(n,"/cpu")),l=s.data,d=s.loading,I=(0,u.useMemo)((function(){return l&&Object.values(l.hosts)}),[l]),A=(0,O.Z)("/anvil/".concat(n,"/memory")),U=A.data,C=A.loading,E=(0,u.useMemo)((function(){return U&&x(U)}),[U]),M=(0,O.Z)("/anvil/".concat(n,"/store")),B=M.data,k=M.loading,N=(0,u.useMemo)((function(){return B&&j(B)}),[B]),D=(0,u.useMemo)((function(){return[c,d,C,k].some((function(e){return e}))}),[c,d,C,k]),T=(0,u.useMemo)((function(){return a&&(0,r.jsx)(Z.$_,{inheritColour:!0,color:_[a.state],children:a.state})}),[a]),z=(0,u.useMemo)((function(){return a&&(0,r.jsx)(o.ZP,{alignItems:"center",columns:20,columnSpacing:"0.5em",container:!0,sx:P({},"& > .".concat(h.Z.item,":nth-child(-n + 4)"),{marginBottom:"-.6em"}),children:Object.values(a.hosts).map((function(e){var n,t,i=e.name,c=e.serverCount,a=e.state,s=e.stateProgress,l=e.uuid,u=null!==(n=S[a])&&void 0!==n?n:f.s7,d=a;return["offline","online"].includes(a)?t=(0,r.jsx)(Z.$_,{variant:"caption",children:c}):d="".concat(s,"%"),[(0,r.jsx)(o.ZP,{item:!0,xs:7,children:(0,r.jsx)(Z.Ac,{variant:"caption",whiteSpace:"nowrap",children:i})},"".concat(l,"-state-label")),(0,r.jsx)(o.ZP,{item:!0,xs:5,children:(0,r.jsx)(Z.$_,{inheritColour:!0,color:u,children:d})},"".concat(l,"-state")),(0,r.jsx)(o.ZP,{item:!0,xs:!0,children:(0,r.jsx)(p.Z,{sx:{marginBottom:"-.4em"}})},"".concat(l,"-divider")),(0,r.jsx)(o.ZP,{item:!0,width:"2.2em",children:t&&(0,r.jsx)(Z.Ac,{variant:"caption",children:"Servers"})},"".concat(l,"-server-label")),(0,r.jsx)(o.ZP,{display:"flex",item:!0,justifyContent:"flex-end",width:"2em",children:t},"".concat(l,"-server-count"))]}))})}),[a]),$=(0,u.useMemo)((function(){return l&&I&&(0,r.jsxs)(g.Z,{row:!0,spacing:".5em",children:[(0,r.jsx)(g.Z,{spacing:0,children:(0,r.jsxs)(Z.Ac,{variant:"caption",whiteSpace:"nowrap",children:["Vendor"," ",(0,r.jsx)(Z.Q0,{sx:{paddingRight:0},children:I[0].vendor})]})}),(0,r.jsx)(p.Z,{sx:{flexGrow:1}}),(0,r.jsxs)(o.ZP,{alignItems:"center",columns:2,container:!0,sx:P({width:"3.7em"},"& > .".concat(h.Z.item,":nth-child(-n + 2)"),{marginBottom:"-.6em"}),children:[(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{variant:"caption",children:"Cores"})}),(0,r.jsx)(o.ZP,{display:"flex",item:!0,justifyContent:"flex-end",xs:1,children:(0,r.jsx)(Z.$_,{variant:"caption",children:l.cores})}),(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{variant:"caption",children:"Threads"})}),(0,r.jsx)(o.ZP,{display:"flex",item:!0,justifyContent:"flex-end",xs:1,children:(0,r.jsx)(Z.$_,{variant:"caption",children:l.threads})})]})]})}),[l,I]),W=(0,u.useMemo)((function(){return E&&(0,r.jsxs)(g.Z,{spacing:0,children:[(0,r.jsx)(g.Z,{row:!0,justifyContent:"flex-end",children:(0,r.jsxs)(Z.Ac,{mb:"-.3em",variant:"caption",children:["Free",(0,r.jsx)(Z.Q0,{children:(0,m._d)(E.total-(E.reserved+E.allocated),{toUnit:"ibyte"})}),"/",(0,r.jsx)(Z.Q0,{sx:{paddingRight:0},children:(0,m._d)(E.total,{toUnit:"ibyte"})})]})}),(0,r.jsx)(y.Z,{thin:!0,value:{reserved:{value:Number(E.reserved*w/E.total)},allocated:{value:Number((E.reserved+E.allocated)*w/E.total),colour:{0:f.Ej,70:f.Wd,90:f.hM}}}})]})}),[E]),F=(0,u.useMemo)((function(){return N&&(0,r.jsxs)(g.Z,{spacing:0,children:[(0,r.jsx)(g.Z,{row:!0,justifyContent:"flex-end",children:(0,r.jsxs)(Z.Ac,{mb:"-.3em",variant:"caption",children:["Total free",(0,r.jsx)(Z.Q0,{children:(0,m._d)(N.totalFree,{toUnit:"ibyte"})}),"/",(0,r.jsx)(Z.Q0,{sx:{paddingRight:0},children:(0,m._d)(N.totalSize,{toUnit:"ibyte"})})]})}),(0,r.jsx)(y.Z,{thin:!0,value:{allocated:{value:Number((N.totalSize-N.totalFree)*w/N.totalSize),colour:{0:f.Ej,70:f.Wd,90:f.hM}}}})]})}),[N]);return D?(0,r.jsx)(b.Z,{mt:0}):(0,r.jsxs)(o.ZP,{alignItems:"center",columns:4,container:!0,sx:P({},"& > .".concat(h.Z.item,":nth-child(odd)"),{alignItems:"center",display:"flex",height:"2.2em"}),children:[(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{children:"Node"})}),(0,r.jsx)(o.ZP,{item:!0,xs:3,children:T}),(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{children:"Subnodes"})}),(0,r.jsx)(o.ZP,{item:!0,xs:3,children:z}),(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{children:"CPU"})}),(0,r.jsx)(o.ZP,{item:!0,xs:3,children:$}),(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{children:"Memory"})}),(0,r.jsx)(o.ZP,{item:!0,xs:3,children:W}),(0,r.jsx)(o.ZP,{item:!0,xs:1,children:(0,r.jsx)(Z.Ac,{children:"Storage"})}),(0,r.jsx)(o.ZP,{item:!0,xs:3,children:F})]})},A=t(8669),U=t(7504),C=t(3679);var E=function(){var e=(0,O.Z)("/anvil",{refreshInterval:5e3}),n=e.data,t=e.loading,i=(0,u.useMemo)((function(){return n&&(0,A.Z)(n)}),[n]),o=(0,u.useMemo)((function(){return i&&(0,r.jsx)(U.Z,{columns:{xs:1,sm:2,md:3,xl:4},layout:Object.values(i).reduce((function(e,n){var t=n.description,i=n.name,o=n.uuid;return e["anvil-".concat(o)]={children:(0,r.jsxs)(C.Lg,{height:"100%",mv:0,children:[(0,r.jsx)(C.CH,{children:(0,r.jsxs)(Z.Ac,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:[i,": ",t]})}),(0,r.jsx)(C.bc,{children:(0,r.jsx)(I,{anvilUuid:o})})]})},e}),{}),spacing:"1em",sx:(e={alignContent:"stretch"},n="& > .".concat(h.Z.item),t={minWidth:"20em"},n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e)});var e,n,t}),[i]);return(0,r.jsxs)(C.s_,{children:[(0,r.jsx)(C.V9,{children:(0,r.jsx)(Z.z,{children:"Nodes"})}),t?(0,r.jsx)(b.Z,{}):o]})},M=t(5094),B=t(1200),k=t(5521),N=t(1706),D=t(5741),T=t(9),z=t(1905),$=t(4968),W=t(9370);function F(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){Q(e,n,t[n])}))}return e}function L(e){return function(e){if(Array.isArray(e))return F(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return F(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return F(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var G=function(e,n){return(0,r.jsx)(o.ZP,{alignContent:"stretch",columns:{xs:1,sm:2,md:3,xl:4},container:!0,spacing:"1em",children:e.map((function(e){var t=e.anvilName,i=e.anvilUUID,c=e.isScreenshotStale,a=e.loading,s=e.screenshot,l=e.serverName,u=e.serverState,d=e.serverUUID,f=e.timestamp;return(0,r.jsx)(o.ZP,{item:!0,sx:{minWidth:"20em","& > div":{height:"100%",marginBottom:0,marginTop:0}},xs:1,children:(0,r.jsx)(M.M,{externalPreview:s,externalTimestamp:f,headerEndAdornment:[(0,r.jsx)(D.Z,{href:"/server?uuid=".concat(d,"&server_name=").concat(l,"&server_state=").concat(u),children:l},"server_list_to_server_".concat(d)),(0,r.jsx)(D.Z,{href:"/anvil?anvil_uuid=".concat(i),sx:{opacity:.7},children:t},"server_list_server_".concat(d,"_to_anvil_").concat(i))],isExternalLoading:a,isExternalPreviewStale:c,isFetchPreview:!1,isShowControls:!1,isUseInnerPanel:!0,onClickPreview:function(){n.push("/server?uuid=".concat(d,"&server_name=").concat(l,"&server_state=").concat(u,"&vnc=1"))},serverState:u,serverUUID:d})},"".concat(d,"-preview"))}))})},V=function(e,n){return""===n?{exclude:e,include:[]}:e.reduce((function(e,t){return t.serverName.includes(n)?e.include.push(t):e.exclude.push(t),e}),{exclude:[],include:[]})},X=function(){var e=(0,u.useRef)(!0),n=(0,l.useRouter)(),t=(0,u.useState)([]),o=t[0],h=t[1],m=(0,u.useState)([]),v=m[0],x=m[1],j=(0,u.useState)([]),p=j[0],g=j[1],y=(0,u.useState)(""),O=y[0],P=y[1],w=(0,u.useState)(!1),_=w[0],S=w[1],I=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var i=V.apply(void 0,L(t)),o=i.exclude,c=i.include;e.current&&(x(o),g(c))},A=(0,z.Z)("".concat(d.Z,"/server"),{onSuccess:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=n.map((function(n){var r,i=n.serverUUID,c=R({},n,{loading:!0,screenshot:(null===(r=o.find((function(e){return e.serverUUID===i})))||void 0===r?void 0:r.screenshot)||"",timestamp:0});return(0,B.Z)("".concat(d.Z,"/server/").concat(i,"?ss=1")).then((function(n){var r=n.screenshot,i=n.timestamp;if(0!==r.length){c.isScreenshotStale=!(0,W.Z$)(i,300),c.loading=!1,c.screenshot=r,c.timestamp=i;var o=L(t);e.current&&h(o)}})).catch((function(){c.isScreenshotStale=!0})).finally((function(){c.loading=!1})),c}));h(t),I(t,O)},refreshInterval:6e4}).isLoading;return(0,u.useEffect)((function(){return function(){e.current=!1}}),[]),(0,r.jsxs)(c.Z,{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"Dashboard"})}),(0,r.jsx)(k.Z,{}),(0,r.jsx)(C.s_,{children:A?(0,r.jsx)(b.Z,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(C.V9,{sx:{marginBottom:"2em"},children:[(0,r.jsx)(Z.z,{children:"Servers"}),(0,r.jsx)(N.Z,{onClick:function(){return S(!0)},children:(0,r.jsx)(i.Z,{})}),(0,r.jsx)(T.Z,{placeholder:"Search by server name",onChange:function(e){var n=e.target.value;P(n),I(o,n)},sx:{minWidth:"16em"},value:O})]}),G(p,n),p.length>0&&(0,r.jsx)(a.Z,{sx:{backgroundColor:f.d}}),G(v,n)]})}),(0,r.jsx)(E,{}),(0,r.jsx)($.Z,{dialogProps:{open:_},onClose:function(){S(!1)}})]})}}},function(e){e.O(0,[412,438,894,182,900,485,433,62,195,987,157,825,94,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);
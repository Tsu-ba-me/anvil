"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[665],{4665:function(e,n,r){r.r(n);var t=r(5893),o=r(4460),c=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var u=function(e){(null===e||void 0===e?void 0:e.current)&&(e.current.disconnect(),e.current=null)},l=function(e){var n=e.onConnect,r=e.onDisconnect,l=e.rfb,s=e.rfbConnectArgs,f=e.rfbScreen,v=e.url;(0,c.useEffect)((function(){if(s){var e=s.url,t=void 0===e?v:e;if(!t)return;var c=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){i(e,n,r[n])}))}return e}({onConnect:n,onDisconnect:r,rfb:l,rfbScreen:f,url:t},s);!function(e){var n=e.background,r=void 0===n?"":n,t=e.clipViewport,c=void 0!==t&&t,i=e.compressionLevel,u=void 0===i?2:i,l=e.dragViewport,s=void 0!==l&&l,f=e.focusOnClick,v=void 0!==f&&f,a=e.onConnect,d=e.onDisconnect,b=e.qualityLevel,p=void 0===b?6:b,y=e.resizeSession,w=void 0===y||y,m=e.rfb,h=e.rfbScreen,E=e.scaleViewport,O=void 0===E||E,g=e.showDotCursor,C=void 0!==g&&g,S=e.url,k=e.viewOnly,L=void 0!==k&&k;(null===h||void 0===h?void 0:h.current)&&!(null===m||void 0===m?void 0:m.current)&&(h.current.innerHTML="",m.current=new o.Z(h.current,S),m.current.background=r,m.current.clipViewport=c,m.current.compressionLevel=u,m.current.dragViewport=s,m.current.focusOnClick=v,m.current.qualityLevel=p,m.current.resizeSession=w,m.current.scaleViewport=O,m.current.showDotCursor=C,m.current.viewOnly=L,a&&m.current.addEventListener("connect",a),d&&m.current.addEventListener("disconnect",d))}(c)}else u(l)}),[v,n,r,l,s,f]),(0,c.useEffect)((function(){return function(){u(l)}}),[l]);return(0,t.jsx)("div",{style:{width:"100%",height:"75vh"},ref:f,onMouseEnter:function(){var e,n;document.activeElement&&(e=document.activeElement,null!=(n=HTMLElement)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n)&&document.activeElement.blur(),(null===l||void 0===l?void 0:l.current)&&l.current.focus()}})};l.displayName="VncDisplay",n.default=l}}]);
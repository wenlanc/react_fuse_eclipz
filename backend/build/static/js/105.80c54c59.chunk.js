(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[105],{1628:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var r=a(56),n=a(44),o=a(1580),l=a(2),i=a(0),c=a.n(i),s=a(1604),u=a(5);var d=function(e){var t=Object(u.d)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},p=a(22),f=a(1579),m=a(1595);var b=function(e){var t=Object(u.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(l.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(n.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var h=c.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),r=Object(p.a)(a,2),n=r[0],o=r[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:u}}));var u=function(){o(!n)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{lgUp:"permanent"===e.variant},c.a.createElement(f.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return u()},classes:{root:Object(l.default)(s.sidebarWrapper,e.variant),paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(b,e))),"permanent"===e.variant&&c.a.createElement(m.a,{mdDown:!0},c.a.createElement(f.a,{variant:"permanent",className:Object(l.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(b,e))))})),g=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),r=Object(i.useRef)(null),o=Object(i.useRef)(null),s=g(e),u=e.rightSidebarHeader||e.rightSidebarContent,p=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(l.default)(s.root,e.innerScroll&&s.innerScroll),ref:o},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},p&&c.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o}),c.a.createElement("div",{className:Object(l.default)(s.contentWrapper,p&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",u&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(d,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(l.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),u&&c.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:o})))}));v.defaultProps={};var E=c.a.memo(v)},1778:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=a(1846),o=(r=n)&&r.__esModule?r:{default:r};t.default=o.default},1779:function(e,t,a){"use strict";var r;function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var o={vertical:"vertical",horizontal:"horizontal"};t.default=o;t.paneTypeProperties=(n(r={},o.vertical,{flexDirection:"row",sizeProp:"width",resizeCursor:"col-resize",resizerBorderBeginProp:"borderLeft",resizerBorderEndProp:"borderRight",resizerMargin:"0 -5px"}),n(r,o.horizontal,{flexDirection:"column",sizeProp:"height",resizeCursor:"row-resize",resizerBorderBeginProp:"borderTop",resizerBorderEndProp:"borderBottom",resizerMargin:"-5px 0"}),r)},1846:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),o=a(0),l=p(o),i=p(a(3)),c=p(a(1847)),s=p(a(1848)),u=a(1779),d=p(u);function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h={display:"flex",width:"100%",height:"100%"},g=function(e){function t(){var e,a,r;m(this,t);for(var n=arguments.length,o=Array(n),l=0;l<n;l++)o[l]=arguments[l];return a=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.onRef=function(e){r.splitPaneRef=e},r.onMouseDown=function(){r.props.onResizeStart()},r.onMouseMove=function(e){if(r.props.isResizing&&r.splitPaneRef){var t=r.props,a=t.minSize,n=t.maxSize,o=r.splitPaneRef.getBoundingClientRect(),l=r.props.type===d.default.vertical?e.clientX-o.left:e.clientY-o.top;a&&l<a||n&&l>n||r.props.onChange(Math.max(0,l))}},r.onMouseUp=function(){r.props.onResizeEnd()},r.onTouchStart=function(e){return r.onMouseDown(e.touches[0])},r.onTouchMove=function(e){return r.onMouseMove(e.touches[0])},r.onTouchEnd=function(e){return r.onMouseUp(e.touches[0])},b(r,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"render",value:function(){var e,t=this.props,a=t.children,n=t.size,o=t.type,i=t.isResizing;if(2!==a.length)return console.warn("Split pane must contain exactly two children"),null;var d=u.paneTypeProperties[o],p=d.flexDirection,m=d.sizeProp,b=d.resizeCursor,g=i?b:null,v=r({},h,{flexDirection:p},this.props.paneStyle),E=r((f(e={},m,n),f(e,"cursor",g),f(e,"order",1),e),this.props.pane1Style),y=r({flex:1,cursor:g,order:3},this.props.pane2Style);return l.default.createElement("div",{style:v,className:"SplitPane SplitPane-"+o,ref:this.onRef},l.default.createElement(c.default,{style:E,className:"SplitPane1",type:o},a[0]),l.default.createElement(c.default,{style:y,className:"SplitPane2",type:o},a[1]),l.default.createElement(s.default,{style:this.props.resizerStyle,className:"SplitPaneResizer",type:o,onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart}))}},{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("touchmove",this.onTouchMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("touchmove",this.onTouchMove)}}]),t}(o.Component);t.default=g;var v=function(){return 0};g.defaultProps={type:d.default.vertical,onChange:v,onResizeStart:v,onResizeEnd:v},g.propTypes={size:i.default.number,isResizing:i.default.bool,type:i.default.oneOf([d.default.vertical,d.default.horizontal]),minSize:i.default.number,maxSize:i.default.number,onChange:i.default.func,onResizeStart:i.default.func,onResizeEnd:i.default.func}},1847:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(0),i=(r=l)&&r.__esModule?r:{default:r};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=n({overflow:"hidden"},this.props.style);return i.default.createElement("div",{style:e,className:this.props.className},this.props.children)}}]),t}(l.Component);t.default=u},1848:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),l=a(0),i=(r=l)&&r.__esModule?r:{default:r},c=a(1779);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p="5px solid rgba(255, 255, 255, 0)",f=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e,t=c.paneTypeProperties[this.props.type],a=t.resizeCursor,r=t.resizerBorderBeginProp,o=t.resizerBorderEndProp,l=t.resizerMargin,u=n((s(e={},r,p),s(e,o,p),s(e,"margin",l),s(e,"cursor",a),s(e,"order",2),e),this.props.style);return i.default.createElement("div",{style:u,className:this.props.className,onMouseDown:this.props.onMouseDown,onTouchStart:this.props.onTouchStart})}}]),t}(l.Component);t.default=f},1849:function(e,t,a){"use strict";var r=a(70),n=a(1580),o=a(229),l=(a(2),a(0)),i=a.n(l),c=(a(5),a(1778),Object(n.a)({table:{"& th":{padding:"16px 0"}},typeIcon:{"&.folder:before":{content:"'folder'",color:"#FFB300"},"&.document:before":{content:"'insert_drive_file'",color:"#1565C0"},"&.spreadsheet:before":{content:"'insert_chart'",color:"#4CAF50"}}}));t.a=function(e){return c(),i.a.createElement(r.a,{animation:"transition.slideUpIn",delay:200},i.a.createElement("div",{className:"flex align-center justify-center p-16 sm:p-24"},i.a.createElement(o.a,{variant:"subtitle1",className:"py-16"},"Patient's note goes here!")))}},1850:function(e,t,a){"use strict";var r=a(70),n=a(1581),o=a(817),l=a(1587),i=a(0),c=a.n(i);a(5);t.a=function(e){return c.a.createElement("div",{className:"flex flex-col items-center justify-center h-full p-4 sm:p-12"},c.a.createElement("div",{className:"toolbar flex align-center justify-center"},c.a.createElement(r.a,{animation:"transition.expandIn",delay:200},c.a.createElement(l.a,{title:"Note",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(n.a,null,"note")))),c.a.createElement(r.a,{animation:"transition.expandIn",delay:200},c.a.createElement(l.a,{title:"Summary",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(n.a,null,"import_contacts")))),c.a.createElement(r.a,{animation:"transition.expandIn",delay:200},c.a.createElement(l.a,{title:"File",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(n.a,null,"folder_open"))))))}},1875:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var r=a(22),n=a(56),o=a(44),l=a(1580),i=a(2),c=a(0),s=a.n(c),u=a(1604),d=a(5);var p=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return s.a.createElement("div",{className:e.classes.header},e.header&&s.a.createElement(u.a,{theme:t},e.header))},f=a(1579),m=a(1595);var b=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return s.a.createElement(o.a,{enable:e.innerScroll},e.header&&s.a.createElement(u.a,{theme:t},s.a.createElement("div",{className:Object(i.default)(a.sidebarHeader,e.variant,e.sidebarInner&&a.sidebarHeaderInnerSidebar)},e.header)),e.content&&s.a.createElement("div",{className:a.sidebarContent},e.content))};var h=s.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),n=Object(r.a)(a,2),o=n[0],l=n[1],u=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){l(!o)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{lgUp:"permanent"===e.variant},s.a.createElement(f.a,{variant:"temporary",anchor:e.position,open:o,onClose:function(e){return d()},classes:{root:Object(i.default)(u.sidebarWrapper,e.variant),paper:Object(i.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:u.backdrop}},style:{position:"absolute"}},s.a.createElement(b,e))),"permanent"===e.variant&&s.a.createElement(m.a,{mdDown:!0},s.a.createElement(f.a,{variant:"permanent",className:Object(i.default)(u.sidebarWrapper,e.variant),open:o,classes:{paper:Object(i.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)}},s.a.createElement(b,e))))})),g=a(1778),v=a.n(g),E=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},wrapper:{display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:e.palette.background.default},header:{height:120,minHeight:120,display:"flex",background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText,backgroundSize:"cover",backgroundColor:e.palette.primary.dark},topBg:{position:"absolute",left:0,right:0,top:0,height:120,pointerEvents:"none"},contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto","-webkit-overflow-scrolling":"touch",zIndex:9999},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center"},content:{flex:"1 0 auto"},sidebarWrapper:{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:e.palette.background.default,color:e.palette.text.primary,position:"relative"}),height:"100%"},leftSidebar:Object(n.a)({},e.breakpoints.up("lg"),{borderRight:"1px solid ".concat(e.palette.divider),borderLeft:0}),rightSidebar:Object(n.a)({},e.breakpoints.up("lg"),{borderLeft:"0px solid ".concat(e.palette.divider),borderRight:0}),sidebarHeader:{height:120,minHeight:120,backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText},sidebarHeaderInnerSidebar:{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},sidebarContent:{},backdrop:{position:"absolute"}}})),y=s.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),n=Object(c.useRef)(null),l=Object(c.useRef)(null),u=E(e),d=Object(c.useState)(500),f=Object(r.a)(d,2),m=f[0],b=f[1],g=Object(c.useState)(!1),y=Object(r.a)(g,2),O=y[0],x=y[1],S=Object(c.useState)(200),j=Object(r.a)(S,2),C=j[0],w=j[1],T=Object(c.useState)(!1),P=Object(r.a)(T,2),N=P[0],k=P[1];return s.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),s.a.createElement("div",{className:Object(i.default)(u.root,e.innerScroll&&u.innerScroll),ref:l},s.a.createElement("div",{className:Object(i.default)(u.header,u.topBg)}),s.a.createElement("div",{className:"flex flex-auto flex-col container z-10 h-full"},e.header&&e.sidebarInner&&s.a.createElement(p,{header:e.header,classes:u}),s.a.createElement("div",{className:u.wrapper},s.a.createElement(v.a,{type:"vertical",size:e.leftSidebarHeader||e.leftSidebarContent?C:0,isResizing:N,onResizeStart:function(){return k(!0)},onResizeEnd:function(){return k(!1)},onChange:function(e){return w(e)},paneStyle:{border:"1px solid transparent"},pane1Style:{borderRight:"2px solid silver"}},(e.leftSidebarHeader||e.leftSidebarContent)&&s.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,classes:u,ref:a,rootRef:l}),s.a.createElement(v.a,{type:"vertical",size:m,isResizing:O,onResizeStart:function(){return x(!0)},onResizeEnd:function(){return x(!1)},onChange:function(e){return b(e)},paneStyle:{border:"1px solid transparent"},pane1Style:{borderRight:"2px solid silver"}},s.a.createElement(o.a,{className:u.contentWrapper,enable:e.innerScroll&&!e.sidebarInner},e.header&&!e.sidebarInner&&s.a.createElement(p,{header:e.header,classes:u}),e.contentToolbar&&s.a.createElement("div",{className:u.toolbar},e.contentToolbar),e.content&&s.a.createElement("div",{className:u.content},e.content)),(e.rightSidebarHeader||e.rightSidebarContent)&&s.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,classes:u,ref:n,rootRef:l}))))))}));y.defaultProps={};var O=s.a.memo(y)},3400:function(e,t,a){"use strict";a.r(t);a(1628);var r=a(1875),n=a(211),o=a(0),l=a.n(o),i=a(5),c=a(53),s=a(56),u=a(1605),d=a(1619),p=a(1590),f=a(1581),m=a(817),b=a(228),h=a(1580),g=a(93),v=a(1586),E=a(229),y=a(2),O=a(22),x=a(44),S=a(1589),j=a(388),C=a.n(j);var w=a(48),T=a.n(w);function P(e){var t=T.a.post("/api/chat/user/data",e);return function(e){return t.then((function(t){return e({type:"[CHAT APP] UPDATE USER DATA",payload:t.data})}))}}var N="[CHAT APP] GET CHAT",k="[CHAT APP] REMOVE CHAT",A="[CHAT APP] SEND MESSAGE";function R(e){return function(t,a){var r=a().chatApp.user.id;return T.a.get("/api/chat/get-chat",{params:{contactId:e,userId:r}}).then((function(a){return t(function(e){return{type:"[CHAT APP] SET SELECTED CONTACT ID",payload:e}}(e)),t({type:"[CHAT APP] CLOSE MOBILE CHATS SIDEBAR"}),t({type:N,chat:a.data.chat,userChatData:a.data.userChatData})}))}}var I=Object(h.a)((function(e){return{messageRow:{"&.contact":{"& .bubble":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderTopLeftRadius:5,borderBottomLeftRadius:5,borderTopRightRadius:20,borderBottomRightRadius:20,"& .time":{marginLeft:12}},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20}}},"&.me":{paddingLeft:40,"& .avatar":{order:2,margin:"0 0 0 16px"},"& .bubble":{marginLeft:"auto",backgroundColor:e.palette.grey[300],color:e.palette.getContrastText(e.palette.grey[300]),borderTopLeftRadius:20,borderBottomLeftRadius:20,borderTopRightRadius:5,borderBottomRightRadius:5,"& .time":{justifyContent:"flex-end",right:0,marginRight:12}},"&.first-of-group":{"& .bubble":{borderTopRightRadius:20}},"&.last-of-group":{"& .bubble":{borderBottomRightRadius:20}}},"&.contact + .me, &.me + .contact":{paddingTop:20,marginTop:20},"&.first-of-group":{"& .bubble":{borderTopLeftRadius:20,paddingTop:13}},"&.last-of-group":{"& .bubble":{borderBottomLeftRadius:20,paddingBottom:13,"& .time":{display:"flex"}}}}}}));var D=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.chatApp.contacts.entities})),r=Object(i.d)((function(e){return e.chatApp.contacts.selectedContactId})),n=Object(i.d)((function(e){return e.chatApp.chat})),c=Object(i.d)((function(e){return e.chatApp.user})),s=I(e),u=Object(o.useRef)(null),p=Object(o.useState)(""),h=Object(O.a)(p,2),g=h[0],v=h[1];function j(e,t){return 0===t||n.dialog[t-1]&&n.dialog[t-1].who!==e.who}function w(e,t){return t===n.dialog.length-1||n.dialog[t+1]&&n.dialog[t+1].who!==e.who}return Object(o.useEffect)((function(){n&&(u.current.scrollTop=u.current.scrollHeight)}),[n]),l.a.createElement("div",{className:Object(y.default)("flex flex-col relative",e.className)},l.a.createElement(x.a,{ref:u,className:"flex flex-1 flex-col overflow-y-auto"},n&&n.dialog.length>0?l.a.createElement("div",{className:"flex flex-col pt-16 px-16 ltr:pl-56 rtl:pr-56 pb-40"},n.dialog.map((function(e,t){var o=e.who===c.id?c:a.find((function(t){return t.id===e.who}));return l.a.createElement("div",{key:e.time,className:Object(y.default)(s.messageRow,"flex flex-col flex-grow-0 flex-shrink-0 items-start justify-end relative px-16 pb-4",{me:e.who===c.id},{contact:e.who!==c.id},{"first-of-group":j(e,t)},{"last-of-group":w(e,t)},t+1===n.dialog.length&&"pb-96")},function(e,t){return e.who===r&&(n.dialog[t+1]&&n.dialog[t+1].who!==r||!n.dialog[t+1])}(e,t)&&l.a.createElement(d.a,{className:"avatar absolute ltr:left-0 rtl:right-0 m-0 -mx-32",src:o.avatar}),l.a.createElement("div",{className:"bubble flex relative items-center justify-center p-12 max-w-full"},l.a.createElement("div",{className:"leading-tight whitespace-pre-wrap"},e.message),l.a.createElement(E.a,{className:"time absolute hidden w-full text-11 mt-8 -mb-24 ltr:left-0 rtl:right-0 bottom-0 whitespace-no-wrap",color:"textSecondary"},C()(e.time).format("MMMM Do YYYY, h:mm:ss a"))))}))):l.a.createElement("div",{className:"flex flex-col flex-1"},l.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center"},l.a.createElement(f.a,{className:"text-128",color:"disabled"},"chat")),l.a.createElement(E.a,{className:"px-16 pb-24 text-center",color:"textSecondary"},"Start a conversation by typing your message below."))),n&&l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==g&&t(function(e,t,a){var r={who:a,message:e,time:new Date},n=T.a.post("/api/chat/send-message",{chatId:t,message:r});return function(e){return n.then((function(t){return e({type:A,message:t.data.message,userChatData:t.data.userChatData})}))}}(g,n.id,c.id)).then((function(){v("")}))},className:"absolute bottom-0 right-0 left-0 py-16 px-8"},l.a.createElement(b.a,{className:"flex items-center relative rounded-24",elevation:1},l.a.createElement(S.a,{autoFocus:!1,id:"message-input",className:"flex-1",InputProps:{disableUnderline:!0,classes:{root:"flex flex-grow flex-shrink-0 mx-16 ltr:mr-48 rtl:ml-48 my-8",input:""},placeholder:"Type your message"},InputLabelProps:{shrink:!1,className:s.bootstrapFormLabel},onChange:function(e){v(e.target.value)},value:g}),l.a.createElement(m.a,{className:"absolute ltr:right-0 rtl:left-0 top-0",type:"submit"},l.a.createElement(f.a,{className:"text-24",color:"action"},"send")))))};var H=function(e){switch(e.status){case"online":return l.a.createElement(f.a,{className:"block text-16 text-green bg-white rounded-full"},"check_circle");case"away":return l.a.createElement(f.a,{className:"block text-16 text-white bg-yellow-700 rounded-full"},"access_time");case"do-not-disturb":return l.a.createElement(f.a,{className:"block text-16 text-red bg-white rounded-full"},"remove_circle_outline");case"offline":return l.a.createElement(f.a,{className:"block text-16 text-grey-700 bg-white rounded-full"},"not_interested");default:return null}},z=a(79),M=a(12),B=a(6),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(B.a)({},t.chat);case k:return null;case A:return Object(B.a)(Object(B.a)({},e),{},{dialog:[].concat(Object(M.a)(e.dialog),[t.message])});default:return e}},L={entities:[],selectedContactId:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CHAT APP] GET CONTACTS":return Object(B.a)(Object(B.a)({},e),{},{entities:Object(M.a)(t.payload)});case"[CHAT APP] SET SELECTED CONTACT ID":return Object(B.a)(Object(B.a)({},e),{},{selectedContactId:t.payload});case"[CHAT APP] REMOVE SELECTED CONTACT ID":return Object(B.a)(Object(B.a)({},e),{},{selectedContactId:null});default:return e}},U={mobileChatsSidebarOpen:!1,userSidebarOpen:!1,contactSidebarOpen:!1},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CHAT APP] OPEN MOBILE CHATS SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{mobileChatsSidebarOpen:!0});case"[CHAT APP] CLOSE MOBILE CHATS SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{mobileChatsSidebarOpen:!1});case"[CHAT APP] OPEN USER SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{userSidebarOpen:!0});case"[CHAT APP] CLOSE USER SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{userSidebarOpen:!1});case"[CHAT APP] OPEN CONTACT SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{contactSidebarOpen:!0});case"[CHAT APP] CLOSE CONTACT SIDEBAR":return Object(B.a)(Object(B.a)({},e),{},{contactSidebarOpen:!1});default:return e}},V=a(544),G=a.n(V);function Y(e,t){var a=G.a.merge({},e),r=a.chatList.find((function(e){return e.contactId===t.userChatData.contactId}));return a.chatList=r?a.chatList.map((function(e){return e.contactId===t.userChatData.contactId?t.userChatData:e})):[t.userChatData].concat(Object(M.a)(a.chatList)),a}var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[CHAT APP] GET USER DATA":case"[CHAT APP] UPDATE USER DATA":return Object(B.a)({},t.payload);case N:case A:return Y(e,t);default:return e}},J=Object(z.d)({sidebars:F,user:K,contacts:W,chat:_});a(86),a(818),a(1585),a(1537),a(1616),a(1584);var X=Object(h.a)((function(e){var t;return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 1 auto",height:"auto",backgroundColor:e.palette.background.default},topBg:{position:"absolute",left:0,right:0,top:0,height:200,backgroundImage:'url("../../assets/images/backgrounds/header-bg.png")',backgroundColor:e.palette.primary.dark,backgroundSize:"cover",pointerEvents:"none"},contentCardWrapper:(t={position:"relative",padding:24,maxWidth:1400,display:"flex",flexDirection:"column",flex:"1 0 auto",width:"100%",minWidth:"0",maxHeight:"100%",margin:"0 auto"},Object(s.a)(t,e.breakpoints.down("sm"),{padding:16}),Object(s.a)(t,e.breakpoints.down("xs"),{padding:12}),t),contentCard:{display:"flex",position:"relative",flex:"1 1 100%",flexDirection:"row",backgroundImage:'url("/assets/images/patterns/rain-grey.png")',backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],borderRadius:8,minHeight:0,overflow:"hidden"},drawerPaper:Object(s.a)({width:300,maxWidth:"100%",overflow:"hidden",height:"100%"},e.breakpoints.up("md"),{position:"relative"}),contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 100%",zIndex:10,background:"linear-gradient(to bottom, ".concat(Object(g.fade)(e.palette.background.paper,.8)," 0,").concat(Object(g.fade)(e.palette.background.paper,.6)," 20%,").concat(Object(g.fade)(e.palette.background.paper,.8),")")},content:{display:"flex",flex:"1 1 100%",minHeight:0}}}));var q=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.chatApp.chat})),r=Object(i.d)((function(e){return e.chatApp.contacts.entities})),n=Object(i.d)((function(e){return e.chatApp.contacts.selectedContactId})),c=(Object(i.d)((function(e){return e.chatApp.sidebars.mobileChatsSidebarOpen})),Object(i.d)((function(e){return e.chatApp.sidebars.userSidebarOpen})),Object(i.d)((function(e){return e.chatApp.sidebars.contactSidebarOpen})),X(e)),s=r.find((function(e){return e.id===n}));return Object(o.useEffect)((function(){t(function(){var e=T.a.get("/api/chat/user");return function(t){return e.then((function(e){return t({type:"[CHAT APP] GET USER DATA",payload:e.data})}))}}()),t(function(){var e=T.a.get("/api/chat/contacts");return function(t){return e.then((function(e){return t({type:"[CHAT APP] GET CONTACTS",payload:e.data})}))}}())}),[t]),l.a.createElement("div",{className:Object(y.default)(c.root)},l.a.createElement("div",{className:c.topBg}),l.a.createElement("div",{className:Object(y.default)(c.contentCardWrapper,"container")},l.a.createElement("div",{className:c.contentCard},l.a.createElement("main",{className:Object(y.default)(c.contentWrapper,"z-10")},a?l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{className:"w-full",position:"static",elevation:1},l.a.createElement(v.a,{className:"px-16"},l.a.createElement(m.a,{color:"inherit","aria-label":"Open drawer",onClick:function(){return t({type:"[CHAT APP] OPEN MOBILE CHATS SIDEBAR"})},className:"flex md:hidden"},l.a.createElement(f.a,null,"chat")),l.a.createElement("div",{className:"flex items-center cursor-pointer",onClick:function(){return t({type:"[CHAT APP] OPEN CONTACT SIDEBAR"})},onKeyDown:function(){return t({type:"[CHAT APP] OPEN CONTACT SIDEBAR"})},role:"button",tabIndex:0},l.a.createElement("div",{className:"relative mx-8"},l.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},l.a.createElement(H,{status:s.status})),l.a.createElement(d.a,{src:s.avatar,alt:s.name},s.avatar&&""!==s.avatar?"":s.name[0])),l.a.createElement(E.a,{color:"inherit",className:"text-18 font-600 px-4"},s.name)))),l.a.createElement("div",{className:c.content},l.a.createElement(D,{className:"flex flex-1 z-10"}))):l.a.createElement("div",{className:"flex flex-col flex-1 items-center justify-center p-24"},l.a.createElement(b.a,{className:"rounded-full p-48"},l.a.createElement(f.a,{className:"block text-64",color:"secondary"},"chat")),l.a.createElement(E.a,{variant:"h6",className:"my-24"},"Chat App"),l.a.createElement(E.a,{className:"hidden md:flex px-16 pb-24 mt-24 text-center",color:"textSecondary"},"Select a contact to start a conversation!.."),l.a.createElement(p.a,{variant:"outlined",color:"primary",className:"flex md:hidden normal-case",onClick:function(){return t({type:"[CHAT APP] OPEN MOBILE CHATS SIDEBAR"})}},"Select a contact to start a conversation!.."))))))},Q=a(528),Z=a(29),$=a(541),ee=a(1535),te=a(1612),ae=a(1588),re=a(538),ne=a(1583),oe=a(1536),le=Object(h.a)((function(e){return{contactListItem:{borderBottom:"1px solid ".concat(e.palette.divider),"&.active":{backgroundColor:e.palette.background.paper}},unreadBadge:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}}));var ie=function(e){var t=le(e);return l.a.createElement(oe.a,{button:!0,className:Object(y.default)(t.contactListItem,"px-16 py-12 min-h-92",{active:e.selectedContactId===e.contact.id}),onClick:function(){return e.onContactClick(e.contact.id)}},l.a.createElement("div",{className:"relative"},l.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10"},l.a.createElement(H,{status:e.contact.status})),l.a.createElement(d.a,{src:e.contact.avatar,alt:e.contact.name},e.contact.avatar&&""!==e.contact.avatar?"":e.contact.name[0])),l.a.createElement(ae.a,{classes:{root:"min-w-px px-16",secondary:"truncate"},primary:e.contact.name,secondary:e.contact.mood}),e.contact.chatId&&l.a.createElement("div",{className:"flex flex-col justify-center items-end"},e.contact.lastMessageTime&&l.a.createElement(E.a,{className:"whitespace-no-wrap mb-8"},C()(e.contact.lastMessageTime).format("ll")),e.contact.unread&&l.a.createElement("div",{className:Object(y.default)(t.unreadBadge,"flex items-center justify-center min-w-24 h-24 rounded-full text-14 text-center")},e.contact.unread)))},ce=[{title:"Online",value:"online"},{title:"Away",value:"away"},{title:"Do not disturb",value:"do-not-disturb"},{title:"Offline",value:"offline"}];var se=function(e){var t=Object(i.c)(),a=Object(i.d)((function(e){return e.chatApp.contacts.entities})),r=Object(i.d)((function(e){return e.chatApp.user})),n=Object(o.useState)(""),c=Object(O.a)(n,2),s=c[0],p=c[1],h=Object(o.useState)(null),g=Object(O.a)(h,2),y=g[0],S=g[1],j=Object(o.useState)(null),C=Object(O.a)(j,2),w=C[0],T=C[1];function N(e){T(null)}function k(e){e.preventDefault(),e.stopPropagation(),S(e.currentTarget)}function A(e){p(e.target.value)}return l.a.createElement("div",{className:"flex flex-col flex-auto h-full"},l.a.createElement(u.a,{position:"static",color:"default",elevation:1,className:""},l.a.createElement(v.a,{className:"flex justify-between items-center px-4"},r&&l.a.createElement("div",{className:"relative w-40 h-40 p-0 mx-12 cursor-pointer",onClick:function(){return t({type:"[CHAT APP] OPEN USER SIDEBAR"})},onKeyDown:function(){return t({type:"[CHAT APP] OPEN USER SIDEBAR"})},role:"button",tabIndex:0},l.a.createElement(d.a,{src:r.avatar,alt:r.name,className:"w-40 h-40"},r.avatar&&""!==r.avatar?"":r.name[0]),l.a.createElement("div",{className:"absolute right-0 bottom-0 -m-4 z-10 cursor-pointer","aria-owns":y?"switch-menu":null,"aria-haspopup":"true",onClick:k,onKeyDown:k,role:"button",tabIndex:0},l.a.createElement(H,{status:r.status})),l.a.createElement(re.a,{id:"status-switch",anchorEl:y,open:Boolean(y),onClose:function(e){e.preventDefault(),e.stopPropagation(),S(null)}},ce.map((function(e){return l.a.createElement(ne.a,{onClick:function(a){return function(e,a){e.preventDefault(),e.stopPropagation(),t(P(Object(B.a)(Object(B.a)({},r),{},{status:a}))),S(null)}(a,e.value)},key:e.value},l.a.createElement(te.a,{className:"min-w-40"},l.a.createElement(H,{status:e.value})),l.a.createElement(ae.a,{primary:e.title}))})))),l.a.createElement("div",null,l.a.createElement(m.a,{"aria-owns":w?"chats-more-menu":null,"aria-haspopup":"true",onClick:function(e){T(e.currentTarget)}},l.a.createElement(f.a,null,"more_vert")),l.a.createElement(re.a,{id:"chats-more-menu",anchorEl:w,open:Boolean(w),onClose:N},l.a.createElement(ne.a,{onClick:N},"Profile"),l.a.createElement(ne.a,{onClick:N},"Logout")))),Object(o.useMemo)((function(){return l.a.createElement(v.a,{className:"px-16"},l.a.createElement(b.a,{className:"flex p-4 items-center w-full px-8 py-4 rounded-8",elevation:1},l.a.createElement(f.a,{color:"action"},"search"),l.a.createElement($.a,{placeholder:"Search or start new chat",className:"flex flex-1 px-8",disableUnderline:!0,fullWidth:!0,value:s,inputProps:{"aria-label":"Search"},onChange:A})))}),[s])),l.a.createElement(x.a,{className:"overflow-y-auto flex-1"},l.a.createElement(ee.a,{className:"w-full"},Object(o.useMemo)((function(){function e(e,t){return 0===t.length?e:Z.a.filterArrayByString(e,t)}var n=a.length>0&&r&&r.chatList?r.chatList.map((function(e){return Object(B.a)(Object(B.a)({},e),a.find((function(t){return t.id===e.contactId})))})):[],o=e(Object(M.a)(a),s),i=e(Object(M.a)(n),s);return l.a.createElement(l.a.Fragment,null,l.a.createElement(Q.a,{enter:{animation:"transition.expandIn"},className:"flex flex-col flex-shrink-0"},i.length>0&&l.a.createElement(E.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Chats"),i.map((function(e){return l.a.createElement(ie,{key:e.id,contact:e,onContactClick:function(e){return t(R(e))}})})),o.length>0&&l.a.createElement(E.a,{className:"font-300 text-20 px-16 py-24",color:"secondary"},"Contacts"),o.map((function(e){return l.a.createElement(ie,{key:e.id,contact:e,onContactClick:function(e){return t(R(e))}})}))))}),[a,r,s,t]))))};var ue=function(e){return l.a.createElement("div",{className:"flex flex-col items-center justify-center h-full p-24"},l.a.createElement(E.a,{variant:"h4"},"Chat"))},de=a(1849),pe=a(1850);t.default=Object(n.a)("chatApp",J)((function(e){var t=Object(i.c)(),a=Object(o.useRef)(null);return Object(c.i)(),Object(o.useEffect)((function(){}),[t]),l.a.createElement(r.a,{classes:{root:"w-full",content:"flex flex-col",header:"items-center min-h-60 h-60 sm:h-60 sm:min-h-60",sidebarHeader:"h-60 min-h-60 sm:h-60 sm:min-h-60"},content:l.a.createElement(q,null),leftSidebarHeader:l.a.createElement(ue,null),leftSidebarContent:l.a.createElement(se,null),rightSidebarHeader:l.a.createElement(pe.a,null),rightSidebarContent:l.a.createElement(de.a,null),ref:a,innerScroll:!0})}))}}]);
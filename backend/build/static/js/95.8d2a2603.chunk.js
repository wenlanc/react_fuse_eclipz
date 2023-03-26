(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[95],{1647:function(e,t,a){"use strict";var n=a(4),r=a(1),o=a(0),i=(a(3),a(2)),l=a(9),c=a(526),s=o.forwardRef((function(e,t){var a=e.classes,l=e.className,s=e.component,u=void 0===s?"table":s,d=e.padding,p=void 0===d?"default":d,f=e.size,m=void 0===f?"medium":f,b=e.stickyHeader,h=void 0!==b&&b,v=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),y=o.useMemo((function(){return{padding:p,size:m,stickyHeader:h}}),[p,m,h]);return o.createElement(c.a.Provider,{value:y},o.createElement(u,Object(r.a)({role:"table"===u?null:"table",ref:t,className:Object(i.default)(a.root,l,h&&a.stickyHeader)},v)))}));t.a=Object(l.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1648:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(3),a(2)),l=a(9),c=a(299),s={variant:"body"},u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,d=void 0===u?"tbody":u,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(d,Object(n.a)({className:Object(i.default)(a.root,l),ref:t,role:"tbody"===d?null:"rowgroup"},p)))}));t.a=Object(l.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},1650:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),i=(a(3),a(2)),l=a(9),c=a(299),s={variant:"head"},u=o.forwardRef((function(e,t){var a=e.classes,l=e.className,u=e.component,d=void 0===u?"thead":u,p=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(d,Object(n.a)({className:Object(i.default)(a.root,l),ref:t,role:"thead"===d?null:"rowgroup"},p)))}));t.a=Object(l.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1778:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(1846),o=(n=r)&&n.__esModule?n:{default:n};t.default=o.default},1779:function(e,t,a){"use strict";var n;function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var o={vertical:"vertical",horizontal:"horizontal"};t.default=o;t.paneTypeProperties=(r(n={},o.vertical,{flexDirection:"row",sizeProp:"width",resizeCursor:"col-resize",resizerBorderBeginProp:"borderLeft",resizerBorderEndProp:"borderRight",resizerMargin:"0 -5px"}),r(n,o.horizontal,{flexDirection:"column",sizeProp:"height",resizeCursor:"row-resize",resizerBorderBeginProp:"borderTop",resizerBorderEndProp:"borderBottom",resizerMargin:"-5px 0"}),n)},1846:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),i=p(o),l=p(a(3)),c=p(a(1847)),s=p(a(1848)),u=a(1779),d=p(u);function p(e){return e&&e.__esModule?e:{default:e}}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var h={display:"flex",width:"100%",height:"100%"},v=function(e){function t(){var e,a,n;m(this,t);for(var r=arguments.length,o=Array(r),i=0;i<r;i++)o[i]=arguments[i];return a=n=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),n.onRef=function(e){n.splitPaneRef=e},n.onMouseDown=function(){n.props.onResizeStart()},n.onMouseMove=function(e){if(n.props.isResizing&&n.splitPaneRef){var t=n.props,a=t.minSize,r=t.maxSize,o=n.splitPaneRef.getBoundingClientRect(),i=n.props.type===d.default.vertical?e.clientX-o.left:e.clientY-o.top;a&&i<a||r&&i>r||n.props.onChange(Math.max(0,i))}},n.onMouseUp=function(){n.props.onResizeEnd()},n.onTouchStart=function(e){return n.onMouseDown(e.touches[0])},n.onTouchMove=function(e){return n.onMouseMove(e.touches[0])},n.onTouchEnd=function(e){return n.onMouseUp(e.touches[0])},b(n,a)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e,t=this.props,a=t.children,r=t.size,o=t.type,l=t.isResizing;if(2!==a.length)return console.warn("Split pane must contain exactly two children"),null;var d=u.paneTypeProperties[o],p=d.flexDirection,m=d.sizeProp,b=d.resizeCursor,v=l?b:null,y=n({},h,{flexDirection:p},this.props.paneStyle),g=n((f(e={},m,r),f(e,"cursor",v),f(e,"order",1),e),this.props.pane1Style),E=n({flex:1,cursor:v,order:3},this.props.pane2Style);return i.default.createElement("div",{style:y,className:"SplitPane SplitPane-"+o,ref:this.onRef},i.default.createElement(c.default,{style:g,className:"SplitPane1",type:o},a[0]),i.default.createElement(c.default,{style:E,className:"SplitPane2",type:o},a[1]),i.default.createElement(s.default,{style:this.props.resizerStyle,className:"SplitPaneResizer",type:o,onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart}))}},{key:"componentDidMount",value:function(){document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mousemove",this.onMouseMove),document.addEventListener("touchmove",this.onTouchMove)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mousemove",this.onMouseMove),document.removeEventListener("touchmove",this.onTouchMove)}}]),t}(o.Component);t.default=v;var y=function(){return 0};v.defaultProps={type:d.default.vertical,onChange:y,onResizeStart:y,onResizeEnd:y},v.propTypes={size:l.default.number,isResizing:l.default.bool,type:l.default.oneOf([d.default.vertical,d.default.horizontal]),minSize:l.default.number,maxSize:l.default.number,onChange:l.default.func,onResizeStart:l.default.func,onResizeEnd:l.default.func}},1847:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),l=(n=i)&&n.__esModule?n:{default:n};function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=r({overflow:"hidden"},this.props.style);return l.default.createElement("div",{style:e,className:this.props.className},this.props.children)}}]),t}(i.Component);t.default=u},1848:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a(0),l=(n=i)&&n.__esModule?n:{default:n},c=a(1779);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var p="5px solid rgba(255, 255, 255, 0)",f=function(e){function t(){return u(this,t),d(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e,t=c.paneTypeProperties[this.props.type],a=t.resizeCursor,n=t.resizerBorderBeginProp,o=t.resizerBorderEndProp,i=t.resizerMargin,u=r((s(e={},n,p),s(e,o,p),s(e,"margin",i),s(e,"cursor",a),s(e,"order",2),e),this.props.style);return l.default.createElement("div",{style:u,className:this.props.className,onMouseDown:this.props.onMouseDown,onTouchStart:this.props.onTouchStart})}}]),t}(i.Component);t.default=f},1849:function(e,t,a){"use strict";var n=a(70),r=a(1580),o=a(229),i=(a(2),a(0)),l=a.n(i),c=(a(5),a(1778),Object(r.a)({table:{"& th":{padding:"16px 0"}},typeIcon:{"&.folder:before":{content:"'folder'",color:"#FFB300"},"&.document:before":{content:"'insert_drive_file'",color:"#1565C0"},"&.spreadsheet:before":{content:"'insert_chart'",color:"#4CAF50"}}}));t.a=function(e){return c(),l.a.createElement(n.a,{animation:"transition.slideUpIn",delay:200},l.a.createElement("div",{className:"flex align-center justify-center p-16 sm:p-24"},l.a.createElement(o.a,{variant:"subtitle1",className:"py-16"},"Patient's note goes here!")))}},1850:function(e,t,a){"use strict";var n=a(70),r=a(1581),o=a(817),i=a(1587),l=a(0),c=a.n(l);a(5);t.a=function(e){return c.a.createElement("div",{className:"flex flex-col items-center justify-center h-full p-4 sm:p-12"},c.a.createElement("div",{className:"toolbar flex align-center justify-center"},c.a.createElement(n.a,{animation:"transition.expandIn",delay:200},c.a.createElement(i.a,{title:"Note",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(r.a,null,"note")))),c.a.createElement(n.a,{animation:"transition.expandIn",delay:200},c.a.createElement(i.a,{title:"Summary",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(r.a,null,"import_contacts")))),c.a.createElement(n.a,{animation:"transition.expandIn",delay:200},c.a.createElement(i.a,{title:"File",placement:"top"},c.a.createElement(o.a,null,c.a.createElement(r.a,null,"folder_open"))))))}},1875:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(22),r=a(56),o=a(44),i=a(1580),l=a(2),c=a(0),s=a.n(c),u=a(1604),d=a(5);var p=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return s.a.createElement("div",{className:e.classes.header},e.header&&s.a.createElement(u.a,{theme:t},e.header))},f=a(1579),m=a(1595);var b=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return s.a.createElement(o.a,{enable:e.innerScroll},e.header&&s.a.createElement(u.a,{theme:t},s.a.createElement("div",{className:Object(l.default)(a.sidebarHeader,e.variant,e.sidebarInner&&a.sidebarHeaderInnerSidebar)},e.header)),e.content&&s.a.createElement("div",{className:a.sidebarContent},e.content))};var h=s.a.forwardRef((function(e,t){var a=Object(c.useState)(!1),r=Object(n.a)(a,2),o=r[0],i=r[1],u=e.classes;Object(c.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){i(!o)};return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{lgUp:"permanent"===e.variant},s.a.createElement(f.a,{variant:"temporary",anchor:e.position,open:o,onClose:function(e){return d()},classes:{root:Object(l.default)(u.sidebarWrapper,e.variant),paper:Object(l.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:u.backdrop}},style:{position:"absolute"}},s.a.createElement(b,e))),"permanent"===e.variant&&s.a.createElement(m.a,{mdDown:!0},s.a.createElement(f.a,{variant:"permanent",className:Object(l.default)(u.sidebarWrapper,e.variant),open:o,classes:{paper:Object(l.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)}},s.a.createElement(b,e))))})),v=a(1778),y=a.n(v),g=Object(i.a)((function(e){return{root:{display:"flex",flexDirection:"column",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},wrapper:{display:"flex",flexDirection:"row",flex:"1 1 auto",zIndex:2,maxWidth:"100%",minWidth:0,height:"100%",backgroundColor:e.palette.background.default},header:{height:120,minHeight:120,display:"flex",background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),color:e.palette.primary.contrastText,backgroundSize:"cover",backgroundColor:e.palette.primary.dark},topBg:{position:"absolute",left:0,right:0,top:0,height:120,pointerEvents:"none"},contentWrapper:{display:"flex",flexDirection:"column",flex:"1 1 auto",overflow:"auto","-webkit-overflow-scrolling":"touch",zIndex:9999},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center"},content:{flex:"1 0 auto"},sidebarWrapper:{overflow:"hidden",backgroundColor:"transparent",position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:e.palette.background.default,color:e.palette.text.primary,position:"relative"}),height:"100%"},leftSidebar:Object(r.a)({},e.breakpoints.up("lg"),{borderRight:"1px solid ".concat(e.palette.divider),borderLeft:0}),rightSidebar:Object(r.a)({},e.breakpoints.up("lg"),{borderLeft:"0px solid ".concat(e.palette.divider),borderRight:0}),sidebarHeader:{height:120,minHeight:120,backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText},sidebarHeaderInnerSidebar:{backgroundColor:"transparent",color:"inherit",height:"auto",minHeight:"auto"},sidebarContent:{},backdrop:{position:"absolute"}}})),E=s.a.forwardRef((function(e,t){var a=Object(c.useRef)(null),r=Object(c.useRef)(null),i=Object(c.useRef)(null),u=g(e),d=Object(c.useState)(500),f=Object(n.a)(d,2),m=f[0],b=f[1],v=Object(c.useState)(!1),E=Object(n.a)(v,2),j=E[0],O=E[1],S=Object(c.useState)(200),w=Object(n.a)(S,2),x=w[0],P=w[1],z=Object(c.useState)(!1),M=Object(n.a)(z,2),R=M[0],_=M[1];return s.a.useImperativeHandle(t,(function(){return{rootRef:i,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),s.a.createElement("div",{className:Object(l.default)(u.root,e.innerScroll&&u.innerScroll),ref:i},s.a.createElement("div",{className:Object(l.default)(u.header,u.topBg)}),s.a.createElement("div",{className:"flex flex-auto flex-col container z-10 h-full"},e.header&&e.sidebarInner&&s.a.createElement(p,{header:e.header,classes:u}),s.a.createElement("div",{className:u.wrapper},s.a.createElement(y.a,{type:"vertical",size:e.leftSidebarHeader||e.leftSidebarContent?x:0,isResizing:R,onResizeStart:function(){return _(!0)},onResizeEnd:function(){return _(!1)},onChange:function(e){return P(e)},paneStyle:{border:"1px solid transparent"},pane1Style:{borderRight:"2px solid silver"}},(e.leftSidebarHeader||e.leftSidebarContent)&&s.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,classes:u,ref:a,rootRef:i}),s.a.createElement(y.a,{type:"vertical",size:m,isResizing:j,onResizeStart:function(){return O(!0)},onResizeEnd:function(){return O(!1)},onChange:function(e){return b(e)},paneStyle:{border:"1px solid transparent"},pane1Style:{borderRight:"2px solid silver"}},s.a.createElement(o.a,{className:u.contentWrapper,enable:e.innerScroll&&!e.sidebarInner},e.header&&!e.sidebarInner&&s.a.createElement(p,{header:e.header,classes:u}),e.contentToolbar&&s.a.createElement("div",{className:u.toolbar},e.contentToolbar),e.content&&s.a.createElement("div",{className:u.content},e.content)),(e.rightSidebarHeader||e.rightSidebarContent)&&s.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,sidebarInner:e.sidebarInner,classes:u,ref:r,rootRef:i}))))))}));E.defaultProps={};var j=s.a.memo(E)},3406:function(e,t,a){"use strict";a.r(t);var n=a(70),r=a(1875),o=a(229),i=a(211),l=a(0),c=a.n(l),s=a(5),u=a(1581);var d=a(1849),p=a(1850),f=a(1580),m=a(1647),b=a(1648),h=a(1591),v=a(1650),y=a(1592),g=a(2),E=a(48),j=a.n(E),O="[FILE MANAGER APP] GET FILES";var S=Object(f.a)({typeIcon:{"&.chat:before":{content:"'chat'",color:"#FFB300"},"&.mail:before":{content:"'mail'",color:"#1565C0"},"&.assignment:before":{content:"'assignment'",color:"#4CAF50"}}}),w=[{id:"5725a6801146cce777df2a08",date:"10/12/1965",name:"James Smith",type:"chat",subject:"Lorem ipsum dolor sit amet.",patient:"James Smith"},{important:!0,id:"5725a6808a178bfd034d6ecf",date:"10/12/1965",name:"Robert Johnson",type:"mail",subject:"Lorem ipsum dolor sit amet.",patient:"Robert Johnson"},{id:"5725a680653c265f5c79b5a9",date:"10/12/1965",name:"David Williams",type:"assignment",subject:"Lorem ipsum dolor sit amet.",patient:"David Williams"},{id:"5725a680bbcec3cc32a8488a",date:"10/12/1965",name:"Charles Jones",type:"assignment",subject:"Lorem ipsum dolor sit amet.",patient:"Charles Jones"},{id:"5725a6803d87f1b77e17b62b",date:"10/12/1965",name:"JosephEnawn",type:"chat",subject:"Lorem ipsum dolor sit amet.",patient:"JosephEnawn"},{important:!0,id:"5725a680e87cb319bd9bd673",date:"10/12/1965",name:"Mary Davis",type:"mail",subject:"Lorem ipsum dolor sit amet.",patient:"Mary Davis"},{id:"5725a6802d10e277a0f35775",date:"10/12/1965",name:"Jesika",type:"chat",subject:"Lorem ipsum dolor sit amet.",patient:"Jesika"},{id:"5725a680aef1e5cf26dd3d1f",date:"10/12/1965",name:"Jullien",type:"chat",subject:"Lorem ipsum dolor sit amet.",patient:"Jullien"},{id:"5725a680cd7efa56a45aea5d",date:"10/12/1965",name:"Kassi",type:"chat",subject:"Lorem ipsum dolor sit amet.",patient:"Kassi"},{id:"5725a680fb65c91a82cb35e2",date:"10/12/1965",name:"Alexandra",type:"mail",subject:"Lorem ipsum dolor sit amet.",patient:"Alexandra"}];var x=function(e){Object(s.c)(),Object(s.d)((function(e){return e.fileManagerApp.files})),Object(s.d)((function(e){return e.fileManagerApp.selectedItemId}));var t=S();return c.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},c.a.createElement(m.a,null,c.a.createElement(v.a,null,c.a.createElement(y.a,null,c.a.createElement(h.a,{align:"center"},"Date"),c.a.createElement(h.a,{align:"center"},"From"),c.a.createElement(h.a,{align:"center",className:"max-w-64 w-64 p-0 text-center"}," "),c.a.createElement(h.a,{align:"center"},"Subject"),c.a.createElement(h.a,{align:"center"},"Patient"))),c.a.createElement(b.a,null,w.map((function(a){return c.a.createElement(y.a,{key:a.name,hover:!0,onClick:function(){return t=a.type,void e.history.push("/alerts/".concat(t));var t},className:Object(g.default)(a.important&&"bg-red","cursor-pointer")},c.a.createElement(h.a,{align:"center"},a.date),c.a.createElement(h.a,{align:"center"},a.name),c.a.createElement(h.a,{align:"center",className:"max-w-64 w-64 p-0 text-center"},c.a.createElement(u.a,{className:Object(g.default)(t.typeIcon,a.type)})),c.a.createElement(h.a,{align:"center"},a.subject),c.a.createElement(h.a,{align:"center"},a.patient))})))))};a(1535),a(1536),a(1612),a(1588);var P=a(79),z=a(8),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return z.a.keyBy(t.payload,"id");default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"[FILE MANAGER APP] SET SELECTED ITEM":return t.payload;default:return e}},_=Object(P.d)({files:M,selectedItemId:R});t.default=Object(i.a)("fileManagerApp",_)((function(e){var t=Object(s.c)(),a=Object(s.d)((function(e){return e.fileManagerApp.files})),n=(Object(s.d)((function(e){var t=e.fileManagerApp;return a[t.selectedItemId]})),Object(l.useRef)(null));return Object(l.useEffect)((function(){t(function(){var e=j.a.get("/api/file-manager-app/files");return function(t){return e.then((function(e){return t({type:O,payload:e.data})}))}}())}),[t]),c.a.createElement(r.a,{classes:{root:"bg-red",header:"h-60 min-h-60 sm:h-60 sm:min-h-60",sidebarHeader:"h-60 min-h-60 sm:h-60 sm:min-h-60"},header:c.a.createElement("div",{className:"flex justify-center flex-1 p-8 sm:p-12 relative"},c.a.createElement(o.a,{variant:"h4"},"All Alerts")),content:c.a.createElement(x,{pageLayout:n,history:e.history}),rightSidebarHeader:c.a.createElement(p.a,null),rightSidebarContent:c.a.createElement(d.a,null),ref:n,innerScroll:!0})}))}}]);
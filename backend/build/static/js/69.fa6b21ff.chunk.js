(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[69],{1545:function(e,a,t){"use strict";t.r(a);var r=t(518);t.d(a,"default",(function(){return r.a}))},1620:function(e,a,t){"use strict";var r=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=l.default.memo(l.default.forwardRef((function(a,t){return l.default.createElement(c.default,(0,n.default)({ref:t},a),e)})));0;return t.muiName=c.default.muiName,t};var n=r(t(184)),l=r(t(0)),c=r(t(1545))},1628:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var r=t(56),n=t(44),l=t(1580),c=t(2),o=t(0),i=t.n(o),s=t(1604),d=t(5);var m=function(e){var a=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(s.a,{theme:a},e.header))},u=t(22),p=t(1579),f=t(1595);var b=function(e){var a=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),t=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(s.a,{theme:a},i.a.createElement("div",{className:Object(c.default)(t.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(n.a,{className:t.sidebarContent,enable:e.innerScroll},e.content))};var E=i.a.forwardRef((function(e,a){var t=Object(o.useState)(!1),r=Object(u.a)(t,2),n=r[0],l=r[1],s=e.classes;Object(o.useImperativeHandle)(a,(function(){return{toggleSidebar:d}}));var d=function(){l(!n)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{lgUp:"permanent"===e.variant},i.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:n,onClose:function(e){return d()},classes:{root:Object(c.default)(s.sidebarWrapper,e.variant),paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},i.a.createElement(b,e))),"permanent"===e.variant&&i.a.createElement(f.a,{mdDown:!0},i.a.createElement(p.a,{variant:"permanent",className:Object(c.default)(s.sidebarWrapper,e.variant),open:n,classes:{paper:Object(c.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},i.a.createElement(b,e))))})),h=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(r.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(r.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(r.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),g=i.a.forwardRef((function(e,a){var t=Object(o.useRef)(null),r=Object(o.useRef)(null),l=Object(o.useRef)(null),s=h(e),d=e.rightSidebarHeader||e.rightSidebarContent,u=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(a,(function(){return{rootRef:l,toggleLeftSidebar:function(){t.current.toggleSidebar()},toggleRightSidebar:function(){r.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(c.default)(s.root,e.innerScroll&&s.innerScroll),ref:l},i.a.createElement("div",{className:s.topBg}),i.a.createElement("div",{className:"flex container w-full"},u&&i.a.createElement(E,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:t,rootRef:l}),i.a.createElement("div",{className:Object(c.default)(s.contentWrapper,u&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(m,{header:e.header,classes:s}),i.a.createElement("div",{className:Object(c.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&i.a.createElement(n.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&i.a.createElement(E,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:r,rootRef:l})))}));g.defaultProps={};var v=i.a.memo(g)},1647:function(e,a,t){"use strict";var r=t(4),n=t(1),l=t(0),c=(t(3),t(2)),o=t(9),i=t(526),s=l.forwardRef((function(e,a){var t=e.classes,o=e.className,s=e.component,d=void 0===s?"table":s,m=e.padding,u=void 0===m?"default":m,p=e.size,f=void 0===p?"medium":p,b=e.stickyHeader,E=void 0!==b&&b,h=Object(r.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=l.useMemo((function(){return{padding:u,size:f,stickyHeader:E}}),[u,f,E]);return l.createElement(i.a.Provider,{value:g},l.createElement(d,Object(n.a)({role:"table"===d?null:"table",ref:a,className:Object(c.default)(t.root,o,E&&t.stickyHeader)},h)))}));a.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(n.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1648:function(e,a,t){"use strict";var r=t(1),n=t(4),l=t(0),c=(t(3),t(2)),o=t(9),i=t(299),s={variant:"body"},d=l.forwardRef((function(e,a){var t=e.classes,o=e.className,d=e.component,m=void 0===d?"tbody":d,u=Object(n.a)(e,["classes","className","component"]);return l.createElement(i.a.Provider,{value:s},l.createElement(m,Object(r.a)({className:Object(c.default)(t.root,o),ref:a,role:"tbody"===m?null:"rowgroup"},u)))}));a.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1650:function(e,a,t){"use strict";var r=t(1),n=t(4),l=t(0),c=(t(3),t(2)),o=t(9),i=t(299),s={variant:"head"},d=l.forwardRef((function(e,a){var t=e.classes,o=e.className,d=e.component,m=void 0===d?"thead":d,u=Object(n.a)(e,["classes","className","component"]);return l.createElement(i.a.Provider,{value:s},l.createElement(m,Object(r.a)({className:Object(c.default)(t.root,o),ref:a,role:"thead"===m?null:"rowgroup"},u)))}));a.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1654:function(e,a,t){"use strict";var r=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=r(t(0)),l=(0,r(t(1620)).default)(n.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=l},1675:function(e,a,t){"use strict";t.d(a,"d",(function(){return l})),t.d(a,"h",(function(){return c})),t.d(a,"l",(function(){return o})),t.d(a,"p",(function(){return i})),t.d(a,"c",(function(){return m})),t.d(a,"f",(function(){return u})),t.d(a,"k",(function(){return p})),t.d(a,"n",(function(){return f})),t.d(a,"m",(function(){return b})),t.d(a,"b",(function(){return E})),t.d(a,"g",(function(){return h})),t.d(a,"j",(function(){return g})),t.d(a,"o",(function(){return v})),t.d(a,"a",(function(){return x})),t.d(a,"e",(function(){return y})),t.d(a,"i",(function(){return N}));var r=t(48),n=t.n(r),l="[E-COMMERCE APP] GET PRODUCTS",c="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function o(){var e=n.a.get("/api/e-commerce-app/products");return function(a){return e.then((function(e){return a({type:l,payload:e.data})}))}}function i(e){return{type:c,searchText:e.target.value}}var s=t(29),d=t(49),m="[E-COMMERCE APP] GET PRODUCT",u="[E-COMMERCE APP] SAVE PRODUCT";function p(e){var a=n.a.get("/api/e-commerce-app/product",{params:e});return function(e){return a.then((function(a){return e({type:m,payload:a.data})}))}}function f(e){var a=n.a.post("/api/e-commerce-app/product/save",e);return function(e){return a.then((function(a){return e(Object(d.G)({message:"Product Saved"})),e({type:u,payload:a.data})}))}}function b(){var e={id:s.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:m,payload:e}}var E="[E-COMMERCE APP] GET ORDERS",h="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function g(){var e=n.a.get("/api/e-commerce-app/orders");return function(a){return e.then((function(e){return a({type:E,payload:e.data})}))}}function v(e){return{type:h,searchText:e.target.value}}var x="[E-COMMERCE APP] GET ORDER",y="[E-COMMERCE APP] SAVE ORDER";function N(e){var a=n.a.get("/api/e-commerce-app/order",{params:e});return function(e){return a.then((function(a){return e({type:x,payload:a.data})}))}}},1704:function(e,a,t){"use strict";var r=t(0),n=r.createContext({});a.a=n},1876:function(e,a,t){"use strict";var r=t(79),n=t(6),l=t(1675),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.a:case l.e:return Object(n.a)({},a.payload);default:return e}},o={data:[],searchText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.b:return Object(n.a)(Object(n.a)({},e),{},{data:a.payload});case l.g:return Object(n.a)(Object(n.a)({},e),{},{searchText:a.searchText});default:return e}},s={data:null},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.c:case l.f:return Object(n.a)(Object(n.a)({},e),{},{data:a.payload});default:return e}},m={data:[],searchText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case l.d:return Object(n.a)(Object(n.a)({},e),{},{data:a.payload});case l.h:return Object(n.a)(Object(n.a)({},e),{},{searchText:a.searchText});default:return e}},p=Object(r.d)({products:u,product:d,orders:i,order:c});a.a=p},1879:function(e,a,t){"use strict";var r=t(1),n=t(535),l=t(68),c=t(4),o=t(0),i=(t(125),t(3),t(2)),s=t(1609),d=t(228),m=t(9),u=t(1704),p=t(167),f=o.forwardRef((function(e,a){var t=e.children,m=e.classes,f=e.className,b=e.defaultExpanded,E=void 0!==b&&b,h=e.disabled,g=void 0!==h&&h,v=e.expanded,x=e.onChange,y=e.square,N=void 0!==y&&y,O=e.TransitionComponent,S=void 0===O?s.a:O,w=e.TransitionProps,j=Object(c.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),C=Object(p.a)({controlled:v,default:E,name:"ExpansionPanel",state:"expanded"}),k=Object(l.a)(C,2),R=k[0],T=k[1],P=o.useCallback((function(e){T(!R),x&&x(e,!R)}),[R,x,T]),A=o.Children.toArray(t),I=Object(n.a)(A),D=I[0],M=I.slice(1),H=o.useMemo((function(){return{expanded:R,disabled:g,toggle:P}}),[R,g,P]);return o.createElement(d.a,Object(r.a)({className:Object(i.default)(m.root,f,R&&m.expanded,g&&m.disabled,!N&&m.rounded),ref:a,square:N},j),o.createElement(u.a.Provider,{value:H},D),o.createElement(S,Object(r.a)({in:R,timeout:"auto"},w),o.createElement("div",{"aria-labelledby":D.props.id,id:D.props["aria-controls"],role:"region"},M)))}));a.a=Object(m.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(f)},1880:function(e,a,t){"use strict";var r=t(1),n=t(4),l=t(0),c=(t(3),t(2)),o=t(385),i=t(817),s=t(9),d=t(1704),m=l.forwardRef((function(e,a){var t=e.children,s=e.classes,m=e.className,u=e.expandIcon,p=e.IconButtonProps,f=e.onBlur,b=e.onClick,E=e.onFocusVisible,h=Object(n.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),g=l.useState(!1),v=g[0],x=g[1],y=l.useContext(d.a),N=y.disabled,O=void 0!==N&&N,S=y.expanded,w=y.toggle;return l.createElement(o.a,Object(r.a)({focusRipple:!1,disableRipple:!0,disabled:O,component:"div","aria-expanded":S,className:Object(c.default)(s.root,m,O&&s.disabled,S&&s.expanded,v&&s.focused),onFocusVisible:function(e){x(!0),E&&E(e)},onBlur:function(e){x(!1),f&&f(e)},onClick:function(e){w&&w(e),b&&b(e)},ref:a},h),l.createElement("div",{className:Object(c.default)(s.content,S&&s.expanded)},t),u&&l.createElement(i.a,Object(r.a)({className:Object(c.default)(s.expandIcon,S&&s.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),u))}));a.a=Object(s.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(m)},1881:function(e,a,t){"use strict";var r=t(1),n=t(4),l=t(0),c=(t(3),t(2)),o=t(9),i=l.forwardRef((function(e,a){var t=e.classes,o=e.className,i=Object(n.a)(e,["classes","className"]);return l.createElement("div",Object(r.a)({className:Object(c.default)(t.root,o),ref:a},i))}));a.a=Object(o.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(i)},2076:function(e,a,t){"use strict";var r=t(8),n=t(2),l=t(0),c=t.n(l),o=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];a.a=function(e){return c.a.createElement("div",{className:Object(n.default)("inline text-12 p-4 rounded truncate",r.a.find(o,{name:e.name}).color)},e.name)}},3438:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(70),l=t(1628),c=t(1619),o=t(1879),i=t(1881),s=t(1880),d=t(1581),m=t(57),u=t(3238),p=t(3412),f=t(1587),b=t(229),E=t(1654),h=t.n(E),g=t(211),v=t(2044),x=t.n(v),y=t(0),N=t.n(y),O=t(5),S=t(53),w=t(21),j=t(86),C=t(1675),k=t(1876),R=t(1614),T=t(1615),P=t(1580),A=t(1647),I=t(1648),D=t(1591),M=t(1650),H=t(1592),B=t(2),U=Object(P.a)((function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}})),L=N.a.memo((function(e){var a=U(e),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return N.a.createElement("div",{className:Object(B.default)(a.root,"flex-grow flex-shrink-0 p-0")},e.order&&N.a.createElement(R.a,{className:"w-xl mx-auto",elevation:0},N.a.createElement(T.a,{className:"p-88 print:p-0"},N.a.createElement(b.a,{color:"textSecondary",className:"mb-32"},e.order.date),N.a.createElement("div",{className:"flex justify-between"},N.a.createElement("div",null,N.a.createElement("table",{className:"mb-16"},N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",{className:"pb-4"},N.a.createElement(b.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),N.a.createElement("td",{className:"pb-4 px-8"},N.a.createElement(b.a,{className:"font-light",variant:"h6",color:"inherit"},e.order.reference))))),N.a.createElement(b.a,{color:"textSecondary"},"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)),e.order.customer.invoiceAddress.address&&N.a.createElement(b.a,{color:"textSecondary"},e.order.customer.invoiceAddress.address),e.order.customer.phone&&N.a.createElement(b.a,{color:"textSecondary"},e.order.customer.phone),e.order.customer.email&&N.a.createElement(b.a,{color:"textSecondary"},e.order.customer.email)),N.a.createElement("div",{className:Object(B.default)(a.seller,"flex items-center p-16")},N.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),N.a.createElement("div",{className:Object(B.default)(a.divider,"divider mx-8 h-96")}),N.a.createElement("div",{className:"px-8"},N.a.createElement(b.a,{color:"inherit"},"FUSE INC."),N.a.createElement(b.a,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),N.a.createElement(b.a,{color:"inherit"},"+66 123 455 87"),N.a.createElement(b.a,{color:"inherit"},"hello@fuseinc.com"),N.a.createElement(b.a,{color:"inherit"},"www.fuseinc.com")))),N.a.createElement("div",{className:"mt-64"},N.a.createElement(A.a,{className:"simple"},N.a.createElement(M.a,null,N.a.createElement(H.a,null,N.a.createElement(D.a,null,"PRODUCT"),N.a.createElement(D.a,null,"PRICE"),N.a.createElement(D.a,{align:"right"},"QUANTITY"),N.a.createElement(D.a,{align:"right"},"TOTAL"))),N.a.createElement(I.a,null,e.order.products.map((function(e){return N.a.createElement(H.a,{key:e.id},N.a.createElement(D.a,null,N.a.createElement(b.a,{variant:"subtitle1"},e.name)),N.a.createElement(D.a,{align:"right"},t.format(e.price)),N.a.createElement(D.a,{align:"right"},e.quantity),N.a.createElement(D.a,{align:"right"},t.format(e.price*e.quantity)))})))),N.a.createElement(A.a,{className:"simple mt-32"},N.a.createElement(I.a,null,N.a.createElement(H.a,null,N.a.createElement(D.a,null,N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),N.a.createElement(D.a,{align:"right"},N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.subtotal)))),N.a.createElement(H.a,null,N.a.createElement(D.a,null,N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),N.a.createElement(D.a,{align:"right"},N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.tax)))),N.a.createElement(H.a,null,N.a.createElement(D.a,null,N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),N.a.createElement(D.a,{align:"right"},N.a.createElement(b.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.discount)))),N.a.createElement(H.a,null,N.a.createElement(D.a,null,N.a.createElement(b.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),N.a.createElement(D.a,{align:"right"},N.a.createElement(b.a,{className:"font-light",variant:"h4",color:"textSecondary"},t.format(e.order.total))))))),N.a.createElement("div",{className:"mt-96"},N.a.createElement(b.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),N.a.createElement("div",{className:"flex"},N.a.createElement("div",{className:"flex-shrink-0"},N.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),N.a.createElement(b.a,{className:"font-medium mb-64 px-24",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))})),q=t(2076);function V(e){return N.a.createElement(f.a,{title:e.text,placement:"top"},N.a.createElement(d.a,{className:"text-red"},"place"))}a.default=Object(g.a)("eCommerceApp",k.a)((function(e){var a=Object(O.c)(),t=Object(O.d)((function(e){return e.eCommerceApp.order})),f=Object(m.a)(),E=Object(S.i)(),g=Object(y.useState)(0),v=Object(r.a)(g,2),k=v[0],R=v[1],T=Object(y.useState)("shipping"),P=Object(r.a)(T,2),A=P[0],I=P[1];return Object(j.b)((function(){a(C.i(E))}),[a,E]),N.a.createElement(l.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:t&&N.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},N.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},N.a.createElement(n.a,{animation:"transition.slideRightIn",delay:300},N.a.createElement(b.a,{className:"normal-case flex items-center sm:mb-12",component:w.a,role:"button",to:"/apps/e-commerce/orders",color:"inherit"},N.a.createElement(d.a,{className:"text-20"},"ltr"===f.direction?"arrow_back":"arrow_forward"),N.a.createElement("span",{className:"mx-4"},"Orders"))),N.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},N.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},N.a.createElement(b.a,{className:"text-16 sm:text-20 truncate"},"Order ".concat(t.reference))),N.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},N.a.createElement(b.a,{variant:"caption"},"From ".concat(t.customer.firstName," ").concat(t.customer.lastName)))))),contentToolbar:N.a.createElement(p.a,{value:k,onChange:function(e,a){R(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},N.a.createElement(u.a,{className:"h-64 normal-case",label:"Order Details"}),N.a.createElement(u.a,{className:"h-64 normal-case",label:"Products"}),N.a.createElement(u.a,{className:"h-64 normal-case",label:"Invoice"})),content:t&&N.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===k&&N.a.createElement("div",null,N.a.createElement("div",{className:"pb-48"},N.a.createElement("div",{className:"pb-16 flex items-center"},N.a.createElement(d.a,{color:"action"},"account_circle"),N.a.createElement(b.a,{className:"h2 mx-16",color:"textSecondary"},"Customer")),N.a.createElement("div",{className:"mb-24"},N.a.createElement("div",{className:"table-responsive mb-16"},N.a.createElement("table",{className:"simple"},N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"Name"),N.a.createElement("th",null,"Email"),N.a.createElement("th",null,"Phone"),N.a.createElement("th",null,"Company"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,N.a.createElement("div",{className:"flex items-center"},N.a.createElement(c.a,{src:t.customer.avatar}),N.a.createElement(b.a,{className:"truncate mx-8"},"".concat(t.customer.firstName," ").concat(t.customer.lastName)))),N.a.createElement("td",null,N.a.createElement(b.a,{className:"truncate"},t.customer.email)),N.a.createElement("td",null,N.a.createElement(b.a,{className:"truncate"},t.customer.phone)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},t.customer.company)))))),N.a.createElement(o.a,{elevation:1,expanded:"shipping"===A,onChange:function(){return I("shipping"!==A&&"shipping")}},N.a.createElement(s.a,{expandIcon:N.a.createElement(h.a,null)},N.a.createElement(b.a,{className:"font-600"},"Shipping Address")),N.a.createElement(i.a,{className:"flex flex-col md:flex-row"},N.a.createElement(b.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.shippingAddress.address),N.a.createElement("div",{className:"w-full h-320"},N.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.shippingAddress.lat,t.customer.shippingAddress.lng]},N.a.createElement(V,{text:t.customer.shippingAddress.address,lat:t.customer.shippingAddress.lat,lng:t.customer.shippingAddress.lng}))))),N.a.createElement(o.a,{elevation:1,expanded:"invoice"===A,onChange:function(){return I("invoice"!==A&&"invoice")}},N.a.createElement(s.a,{expandIcon:N.a.createElement(h.a,null)},N.a.createElement(b.a,{className:"font-600"},"Invoice Address")),N.a.createElement(i.a,{className:"flex flex-col md:flex-row"},N.a.createElement(b.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.invoiceAddress.address),N.a.createElement("div",{className:"w-full h-320"},N.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.invoiceAddress.lat,t.customer.invoiceAddress.lng]},N.a.createElement(V,{text:t.customer.invoiceAddress.address,lat:t.customer.invoiceAddress.lat,lng:t.customer.invoiceAddress.lng}))))))),N.a.createElement("div",{className:"pb-48"},N.a.createElement("div",{className:"pb-16 flex items-center"},N.a.createElement(d.a,{color:"action"},"access_time"),N.a.createElement(b.a,{className:"h2 mx-16",color:"textSecondary"},"Order Status")),N.a.createElement("div",{className:"table-responsive"},N.a.createElement("table",{className:"simple"},N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"Status"),N.a.createElement("th",null,"Updated On"))),N.a.createElement("tbody",null,t.status.map((function(e){return N.a.createElement("tr",{key:e.id},N.a.createElement("td",null,N.a.createElement(q.a,{name:e.name})),N.a.createElement("td",null,e.date))})))))),N.a.createElement("div",{className:"pb-48"},N.a.createElement("div",{className:"pb-16 flex items-center"},N.a.createElement(d.a,{color:"action"},"attach_money"),N.a.createElement(b.a,{className:"h2 mx-16",color:"textSecondary"},"Payment")),N.a.createElement("div",{className:"table-responsive"},N.a.createElement("table",{className:"simple"},N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"TransactionID"),N.a.createElement("th",null,"Payment Method"),N.a.createElement("th",null,"Amount"),N.a.createElement("th",null,"Date"))),N.a.createElement("tbody",null,N.a.createElement("tr",null,N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},t.payment.transactionId)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},t.payment.method)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},t.payment.amount)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},t.payment.date))))))),N.a.createElement("div",{className:"pb-48"},N.a.createElement("div",{className:"pb-16 flex items-center"},N.a.createElement(d.a,{color:"action"},"local_shipping"),N.a.createElement(b.a,{className:"h2 mx-12",color:"textSecondary"},"Shipping")),N.a.createElement("div",{className:"table-responsive"},N.a.createElement("table",{className:"simple"},N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"Tracking Code"),N.a.createElement("th",null,"Carrier"),N.a.createElement("th",null,"Weight"),N.a.createElement("th",null,"Fee"),N.a.createElement("th",null,"Date"))),N.a.createElement("tbody",null,t.shippingDetails.map((function(e){return N.a.createElement("tr",{key:e.date},N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},e.tracking)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},e.carrier)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},e.weight)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},e.fee)),N.a.createElement("td",null,N.a.createElement("span",{className:"truncate"},e.date)))}))))))),1===k&&N.a.createElement("div",{className:"table-responsive"},N.a.createElement("table",{className:"simple"},N.a.createElement("thead",null,N.a.createElement("tr",null,N.a.createElement("th",null,"ID"),N.a.createElement("th",null,"Image"),N.a.createElement("th",null,"Name"),N.a.createElement("th",null,"Price"),N.a.createElement("th",null,"Quantity"))),N.a.createElement("tbody",null,t.products.map((function(e){return N.a.createElement("tr",{key:e.id},N.a.createElement("td",{className:"w-64"},e.id),N.a.createElement("td",{className:"w-80"},N.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),N.a.createElement("td",null,N.a.createElement(b.a,{component:w.a,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),N.a.createElement("td",{className:"w-64 text-right"},N.a.createElement("span",{className:"truncate"},"$",e.price)),N.a.createElement("td",{className:"w-64 text-right"},N.a.createElement("span",{className:"truncate"},e.quantity)))}))))),2===k&&N.a.createElement(L,{order:t})),innerScroll:!0})}))}}]);
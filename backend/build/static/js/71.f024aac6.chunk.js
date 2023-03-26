(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[71],{1545:function(e,a,t){"use strict";t.r(a);var n=t(518);t.d(a,"default",(function(){return n.a}))},1620:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=l.default.memo(l.default.forwardRef((function(a,t){return l.default.createElement(c.default,(0,r.default)({ref:t},a),e)})));0;return t.muiName=c.default.muiName,t};var r=n(t(184)),l=n(t(0)),c=n(t(1545))},1647:function(e,a,t){"use strict";var n=t(4),r=t(1),l=t(0),c=(t(3),t(2)),o=t(9),s=t(526),i=l.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,m=void 0===i?"table":i,d=e.padding,u=void 0===d?"default":d,p=e.size,E=void 0===p?"medium":p,f=e.stickyHeader,b=void 0!==f&&f,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),g=l.useMemo((function(){return{padding:u,size:E,stickyHeader:b}}),[u,E,b]);return l.createElement(s.a.Provider,{value:g},l.createElement(m,Object(r.a)({role:"table"===m?null:"table",ref:a,className:Object(c.default)(t.root,o,b&&t.stickyHeader)},h)))}));a.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(i)},1648:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(3),t(2)),o=t(9),s=t(299),i={variant:"body"},m=l.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.component,d=void 0===m?"tbody":m,u=Object(r.a)(e,["classes","className","component"]);return l.createElement(s.a.Provider,{value:i},l.createElement(d,Object(n.a)({className:Object(c.default)(t.root,o),ref:a,role:"tbody"===d?null:"rowgroup"},u)))}));a.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},1650:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(3),t(2)),o=t(9),s=t(299),i={variant:"head"},m=l.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.component,d=void 0===m?"thead":m,u=Object(r.a)(e,["classes","className","component"]);return l.createElement(s.a.Provider,{value:i},l.createElement(d,Object(n.a)({className:Object(c.default)(t.root,o),ref:a,role:"thead"===d?null:"rowgroup"},u)))}));a.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1654:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),l=(0,n(t(1620)).default)(r.default.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");a.default=l},1656:function(e,a,t){e.exports=t(809)},1659:function(e,a,t){"use strict";function n(e,a,t,n,r,l,c){try{var o=e[l](c),s=o.value}catch(i){return void t(i)}o.done?a(s):Promise.resolve(s).then(n,r)}function r(e){return function(){var a=this,t=arguments;return new Promise((function(r,l){var c=e.apply(a,t);function o(e){n(c,r,l,o,s,"next",e)}function s(e){n(c,r,l,o,s,"throw",e)}o(void 0)}))}}t.d(a,"a",(function(){return r}))},1694:function(e,a){e.exports=function(e,a,t,n){var r=new Blob("undefined"!==typeof n?[n,e]:[e],{type:t||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(r,a);else{var l=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(r):window.webkitURL.createObjectURL(r),c=document.createElement("a");c.style.display="none",c.href=l,c.setAttribute("download",a),"undefined"===typeof c.download&&c.setAttribute("target","_blank"),document.body.appendChild(c),c.click(),setTimeout((function(){document.body.removeChild(c),window.URL.revokeObjectURL(l)}),200)}}},1704:function(e,a,t){"use strict";var n=t(0),r=n.createContext({});a.a=r},1879:function(e,a,t){"use strict";var n=t(1),r=t(535),l=t(68),c=t(4),o=t(0),s=(t(125),t(3),t(2)),i=t(1609),m=t(228),d=t(9),u=t(1704),p=t(167),E=o.forwardRef((function(e,a){var t=e.children,d=e.classes,E=e.className,f=e.defaultExpanded,b=void 0!==f&&f,h=e.disabled,g=void 0!==h&&h,v=e.expanded,x=e.onChange,N=e.square,y=void 0!==N&&N,w=e.TransitionComponent,O=void 0===w?i.a:w,j=e.TransitionProps,C=Object(c.a)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),k=Object(p.a)({controlled:v,default:b,name:"ExpansionPanel",state:"expanded"}),R=Object(l.a)(k,2),S=R[0],A=R[1],P=o.useCallback((function(e){A(!S),x&&x(e,!S)}),[S,x,A]),I=o.Children.toArray(t),T=Object(r.a)(I),U=T[0],L=T.slice(1),B=o.useMemo((function(){return{expanded:S,disabled:g,toggle:P}}),[S,g,P]);return o.createElement(m.a,Object(n.a)({className:Object(s.default)(d.root,E,S&&d.expanded,g&&d.disabled,!y&&d.rounded),ref:a,square:y},C),o.createElement(u.a.Provider,{value:B},U),o.createElement(O,Object(n.a)({in:S,timeout:"auto"},j),o.createElement("div",{"aria-labelledby":U.props.id,id:U.props["aria-controls"],role:"region"},L)))}));a.a=Object(d.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],a),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],a)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiExpansionPanel"})(E)},1880:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(3),t(2)),o=t(385),s=t(817),i=t(9),m=t(1704),d=l.forwardRef((function(e,a){var t=e.children,i=e.classes,d=e.className,u=e.expandIcon,p=e.IconButtonProps,E=e.onBlur,f=e.onClick,b=e.onFocusVisible,h=Object(r.a)(e,["children","classes","className","expandIcon","IconButtonProps","onBlur","onClick","onFocusVisible"]),g=l.useState(!1),v=g[0],x=g[1],N=l.useContext(m.a),y=N.disabled,w=void 0!==y&&y,O=N.expanded,j=N.toggle;return l.createElement(o.a,Object(n.a)({focusRipple:!1,disableRipple:!0,disabled:w,component:"div","aria-expanded":O,className:Object(c.default)(i.root,d,w&&i.disabled,O&&i.expanded,v&&i.focused),onFocusVisible:function(e){x(!0),b&&b(e)},onBlur:function(e){x(!1),E&&E(e)},onClick:function(e){j&&j(e),f&&f(e)},ref:a},h),l.createElement("div",{className:Object(c.default)(i.content,O&&i.expanded)},t),u&&l.createElement(s.a,Object(n.a)({className:Object(c.default)(i.expandIcon,O&&i.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},p),u))}));a.a=Object(i.a)((function(e){var a={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],a),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],a),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",a),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiExpansionPanelSummary"})(d)},1881:function(e,a,t){"use strict";var n=t(1),r=t(4),l=t(0),c=(t(3),t(2)),o=t(9),s=l.forwardRef((function(e,a){var t=e.classes,o=e.className,s=Object(r.a)(e,["classes","className"]);return l.createElement("div",Object(n.a)({className:Object(c.default)(t.root,o),ref:a},s))}));a.a=Object(o.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiExpansionPanelDetails"})(s)},2223:function(e,a,t){"use strict";var n=t(8),r=t(2),l=t(0),c=t.n(l),o=[{id:1,name:"Awaiting check payment",color:"bg-blue text-white"},{id:2,name:"Payment accepted",color:"bg-green text-white"},{id:3,name:"Preparing the order",color:"bg-orange text-black"},{id:4,name:"Shipped",color:"bg-purple text-white"},{id:5,name:"Delivered",color:"bg-green-700 text-white"},{id:6,name:"Canceled",color:"bg-pink text-white"},{id:7,name:"Refunded",color:"bg-red text-white"},{id:8,name:"Payment error",color:"bg-red-700 text-white"},{id:9,name:"On pre-order (paid)",color:"bg-purple-300 text-white"},{id:10,name:"Awaiting bank wire payment",color:"bg-blue text-white"},{id:11,name:"Awaiting PayPal payment",color:"bg-blue-700 text-white"},{id:12,name:"Remote payment accepted",color:"bg-green-800 text-white"},{id:13,name:"On pre-order (not paid)",color:"bg-purple-700 text-white"},{id:14,name:"Awaiting Cash-on-delivery payment",color:"bg-blue-800 text-white"}];a.a=function(e){return c.a.createElement("div",{className:Object(r.default)("inline text-12 p-4 rounded truncate",n.a.find(o,{name:e.name}).color)},e.name)}},3436:function(e,a,t){"use strict";t.r(a);var n=t(22),r=t(70),l=t(1628),c=t(1619),o=t(1879),s=t(1881),i=t(1880),m=t(1581),d=t(57),u=t(3238),p=t(3412),E=t(1587),f=t(229),b=t(1654),h=t.n(b),g=t(211),v=t(2044),x=t.n(v),N=t(0),y=t.n(N),w=t(5),O=t(53),j=t(21),C=t(86),k=t(1629),R=t(1688),S=t(1614),A=t(1615),P=t(1580),I=t(1647),T=t(1648),U=t(1591),L=t(1650),B=t(1592),D=t(2),M=Object(P.a)((function(e){return{root:{"& table ":{"& th:first-child, & td:first-child":{paddingLeft:"".concat(0,"!important")},"& th:last-child, & td:last-child":{paddingRight:"".concat(0,"!important")}}},divider:{width:1,backgroundColor:e.palette.divider,height:144},seller:{backgroundColor:e.palette.primary.dark,color:e.palette.getContrastText(e.palette.primary.dark),marginRight:-88,paddingRight:66,width:480,"& .divider":{backgroundColor:e.palette.getContrastText(e.palette.primary.dark),opacity:.5}}}})),q=y.a.memo((function(e){var a=M(e),t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return y.a.createElement("div",{className:Object(D.default)(a.root,"flex-grow flex-shrink-0 p-0")},e.order&&y.a.createElement(S.a,{className:"w-xl mx-auto",elevation:0},y.a.createElement(A.a,{className:"p-88 print:p-0"},y.a.createElement(f.a,{color:"textSecondary",className:"mb-32"},e.order.date),y.a.createElement("div",{className:"flex justify-between"},y.a.createElement("div",null,y.a.createElement("table",{className:"mb-16"},y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",{className:"pb-4"},y.a.createElement(f.a,{className:"font-light",variant:"h6",color:"textSecondary"},"INVOICE")),y.a.createElement("td",{className:"pb-4 px-8"},y.a.createElement(f.a,{className:"font-light",variant:"h6",color:"inherit"},e.order.reference))))),y.a.createElement(f.a,{color:"textSecondary"},"".concat(e.order.customer.firstName," ").concat(e.order.customer.lastName)),e.order.customer.invoiceAddress.address&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.invoiceAddress.address),e.order.customer.phone&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.phone),e.order.customer.email&&y.a.createElement(f.a,{color:"textSecondary"},e.order.customer.email)),y.a.createElement("div",{className:Object(D.default)(a.seller,"flex items-center p-16")},y.a.createElement("img",{className:"w-80",src:"assets/images/logos/fuse.svg",alt:"logo"}),y.a.createElement("div",{className:Object(D.default)(a.divider,"divider mx-8 h-96")}),y.a.createElement("div",{className:"px-8"},y.a.createElement(f.a,{color:"inherit"},"FUSE INC."),y.a.createElement(f.a,{color:"inherit"},"2810 Country Club Road Cranford, NJ 07016"),y.a.createElement(f.a,{color:"inherit"},"+66 123 455 87"),y.a.createElement(f.a,{color:"inherit"},"hello@fuseinc.com"),y.a.createElement(f.a,{color:"inherit"},"www.fuseinc.com")))),y.a.createElement("div",{className:"mt-64"},y.a.createElement(I.a,{className:"simple"},y.a.createElement(L.a,null,y.a.createElement(B.a,null,y.a.createElement(U.a,null,"PRODUCT"),y.a.createElement(U.a,null,"PRICE"),y.a.createElement(U.a,{align:"right"},"QUANTITY"),y.a.createElement(U.a,{align:"right"},"TOTAL"))),y.a.createElement(T.a,null,e.order.products.map((function(e){return y.a.createElement(B.a,{key:e.id},y.a.createElement(U.a,null,y.a.createElement(f.a,{variant:"subtitle1"},e.name)),y.a.createElement(U.a,{align:"right"},t.format(e.price)),y.a.createElement(U.a,{align:"right"},e.quantity),y.a.createElement(U.a,{align:"right"},t.format(e.price*e.quantity)))})))),y.a.createElement(I.a,{className:"simple mt-32"},y.a.createElement(T.a,null,y.a.createElement(B.a,null,y.a.createElement(U.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"SUBTOTAL")),y.a.createElement(U.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.subtotal)))),y.a.createElement(B.a,null,y.a.createElement(U.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"TAX")),y.a.createElement(U.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.tax)))),y.a.createElement(B.a,null,y.a.createElement(U.a,null,y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},"DISCOUNT")),y.a.createElement(U.a,{align:"right"},y.a.createElement(f.a,{className:"font-medium",variant:"subtitle1",color:"textSecondary"},t.format(e.order.discount)))),y.a.createElement(B.a,null,y.a.createElement(U.a,null,y.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},"TOTAL")),y.a.createElement(U.a,{align:"right"},y.a.createElement(f.a,{className:"font-light",variant:"h4",color:"textSecondary"},t.format(e.order.total))))))),y.a.createElement("div",{className:"mt-96"},y.a.createElement(f.a,{className:"mb-24 print:mb-12",variant:"body1"},"Please pay within 15 days. Thank you for your business."),y.a.createElement("div",{className:"flex"},y.a.createElement("div",{className:"flex-shrink-0"},y.a.createElement("img",{className:"w-32",src:"assets/images/logos/fuse.svg",alt:"logo"})),y.a.createElement(f.a,{className:"font-medium mb-64 px-24",variant:"caption",color:"textSecondary"},"In condimentum malesuada efficitur. Mauris volutpat placerat auctor. Ut ac congue dolor. Quisque scelerisque lacus sed feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc hendrerit quam at leo commodo, a suscipit tellus dapibus. Etiam at felis volutpat est mollis lacinia. Mauris placerat sem sit amet velit mollis, in porttitor ex finibus. Proin eu nibh id libero tincidunt lacinia et eget eros."))))))})),_=t(2223);function $(e){return y.a.createElement(E.a,{title:e.text,placement:"top"},y.a.createElement(m.a,{className:"text-red"},"place"))}a.default=Object(g.a)("eCommerceApp",R.a)((function(e){var a=Object(w.c)(),t=Object(w.d)((function(e){return e.eCommerceApp.order})),E=Object(d.a)(),b=Object(O.i)(),g=Object(N.useState)(0),v=Object(n.a)(g,2),R=v[0],S=v[1],A=Object(N.useState)("shipping"),P=Object(n.a)(A,2),I=P[0],T=P[1];return Object(C.b)((function(){a(k.sb(b))}),[a,b]),y.a.createElement(l.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:t&&y.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},y.a.createElement("div",{className:"flex flex-1 flex-col items-center sm:items-start"},y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(f.a,{className:"normal-case flex items-center sm:mb-12",component:j.a,role:"button",to:"/apps/e-commerce/orders",color:"inherit"},y.a.createElement(m.a,{className:"text-20"},"ltr"===E.direction?"arrow_back":"arrow_forward"),y.a.createElement("span",{className:"mx-4"},"Orders"))),y.a.createElement("div",{className:"flex flex-col min-w-0 items-center sm:items-start"},y.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(f.a,{className:"text-16 sm:text-20 truncate"},"Order ".concat(t.reference))),y.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(f.a,{variant:"caption"},"From ".concat(t.customer.firstName," ").concat(t.customer.lastName)))))),contentToolbar:y.a.createElement(p.a,{value:R,onChange:function(e,a){S(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},y.a.createElement(u.a,{className:"h-64 normal-case",label:"Order Details"}),y.a.createElement(u.a,{className:"h-64 normal-case",label:"Products"}),y.a.createElement(u.a,{className:"h-64 normal-case",label:"Invoice"})),content:t&&y.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl w-full"},0===R&&y.a.createElement("div",null,y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(m.a,{color:"action"},"account_circle"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Customer")),y.a.createElement("div",{className:"mb-24"},y.a.createElement("div",{className:"table-responsive mb-16"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Email"),y.a.createElement("th",null,"Phone"),y.a.createElement("th",null,"Company"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("div",{className:"flex items-center"},y.a.createElement(c.a,{src:t.customer.avatar}),y.a.createElement(f.a,{className:"truncate mx-8"},"".concat(t.customer.firstName," ").concat(t.customer.lastName)))),y.a.createElement("td",null,y.a.createElement(f.a,{className:"truncate"},t.customer.email)),y.a.createElement("td",null,y.a.createElement(f.a,{className:"truncate"},t.customer.phone)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},t.customer.company)))))),y.a.createElement(o.a,{elevation:1,expanded:"shipping"===I,onChange:function(){return T("shipping"!==I&&"shipping")}},y.a.createElement(i.a,{expandIcon:y.a.createElement(h.a,null)},y.a.createElement(f.a,{className:"font-600"},"Shipping Address")),y.a.createElement(s.a,{className:"flex flex-col md:flex-row"},y.a.createElement(f.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.shippingAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.shippingAddress.lat,t.customer.shippingAddress.lng]},y.a.createElement($,{text:t.customer.shippingAddress.address,lat:t.customer.shippingAddress.lat,lng:t.customer.shippingAddress.lng}))))),y.a.createElement(o.a,{elevation:1,expanded:"invoice"===I,onChange:function(){return T("invoice"!==I&&"invoice")}},y.a.createElement(i.a,{expandIcon:y.a.createElement(h.a,null)},y.a.createElement(f.a,{className:"font-600"},"Invoice Address")),y.a.createElement(s.a,{className:"flex flex-col md:flex-row"},y.a.createElement(f.a,{className:"w-full md:max-w-256 mb-16 md:mb-0"},t.customer.invoiceAddress.address),y.a.createElement("div",{className:"w-full h-320"},y.a.createElement(x.a,{bootstrapURLKeys:{key:"AIzaSyAYdp6JWyJaD-2Jiil3ggePxUBDIMpD-Kg"},defaultZoom:15,defaultCenter:[t.customer.invoiceAddress.lat,t.customer.invoiceAddress.lng]},y.a.createElement($,{text:t.customer.invoiceAddress.address,lat:t.customer.invoiceAddress.lat,lng:t.customer.invoiceAddress.lng}))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(m.a,{color:"action"},"access_time"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Order Status")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Status"),y.a.createElement("th",null,"Updated On"))),y.a.createElement("tbody",null,t.status.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",null,y.a.createElement(_.a,{name:e.name})),y.a.createElement("td",null,e.date))})))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(m.a,{color:"action"},"attach_money"),y.a.createElement(f.a,{className:"h2 mx-16",color:"textSecondary"},"Payment")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"TransactionID"),y.a.createElement("th",null,"Payment Method"),y.a.createElement("th",null,"Amount"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,y.a.createElement("tr",null,y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},t.payment.transactionId)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},t.payment.method)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},t.payment.amount)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},t.payment.date))))))),y.a.createElement("div",{className:"pb-48"},y.a.createElement("div",{className:"pb-16 flex items-center"},y.a.createElement(m.a,{color:"action"},"local_shipping"),y.a.createElement(f.a,{className:"h2 mx-12",color:"textSecondary"},"Shipping")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"Tracking Code"),y.a.createElement("th",null,"Carrier"),y.a.createElement("th",null,"Weight"),y.a.createElement("th",null,"Fee"),y.a.createElement("th",null,"Date"))),y.a.createElement("tbody",null,t.shippingDetails.map((function(e){return y.a.createElement("tr",{key:e.date},y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.tracking)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.carrier)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.weight)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.fee)),y.a.createElement("td",null,y.a.createElement("span",{className:"truncate"},e.date)))}))))))),1===R&&y.a.createElement("div",{className:"table-responsive"},y.a.createElement("table",{className:"simple"},y.a.createElement("thead",null,y.a.createElement("tr",null,y.a.createElement("th",null,"ID"),y.a.createElement("th",null,"Image"),y.a.createElement("th",null,"Name"),y.a.createElement("th",null,"Price"),y.a.createElement("th",null,"Quantity"))),y.a.createElement("tbody",null,t.products.map((function(e){return y.a.createElement("tr",{key:e.id},y.a.createElement("td",{className:"w-64"},e.id),y.a.createElement("td",{className:"w-80"},y.a.createElement("img",{className:"product-image",src:e.image,alt:"product"})),y.a.createElement("td",null,y.a.createElement(f.a,{component:j.a,to:"/apps/e-commerce/products/".concat(e.id),className:"truncate",style:{color:"inherit",textDecoration:"underline"}},e.name)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},"$",e.price)),y.a.createElement("td",{className:"w-64 text-right"},y.a.createElement("span",{className:"truncate"},e.quantity)))}))))),2===R&&y.a.createElement(q,{order:t})),innerScroll:!0})}))}}]);
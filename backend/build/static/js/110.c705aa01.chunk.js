(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[110],{1628:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(56),r=a(44),o=a(1580),l=a(2),i=a(0),c=a.n(i),s=a(1604),d=a(5);var u=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return c.a.createElement("div",{className:e.classes.header},e.header&&c.a.createElement(s.a,{theme:t},e.header))},m=a(22),p=a(1579),b=a(1595);var f=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return c.a.createElement(c.a.Fragment,null,e.header&&c.a.createElement(s.a,{theme:t},c.a.createElement("div",{className:Object(l.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&c.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var g=c.a.forwardRef((function(e,t){var a=Object(i.useState)(!1),n=Object(m.a)(a,2),r=n[0],o=n[1],s=e.classes;Object(i.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){o(!r)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,{lgUp:"permanent"===e.variant},c.a.createElement(p.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(l.default)(s.sidebarWrapper,e.variant),paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:s.backdrop}},style:{position:"absolute"}},c.a.createElement(f,e))),"permanent"===e.variant&&c.a.createElement(b.a,{mdDown:!0},c.a.createElement(p.a,{variant:"permanent",className:Object(l.default)(s.sidebarWrapper,e.variant),open:r,classes:{paper:Object(l.default)(s.sidebar,e.variant,"left"===e.position?s.leftSidebar:s.rightSidebar)}},c.a.createElement(f,e))))})),h=Object(o.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=c.a.forwardRef((function(e,t){var a=Object(i.useRef)(null),n=Object(i.useRef)(null),o=Object(i.useRef)(null),s=h(e),d=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return c.a.useImperativeHandle(t,(function(){return{rootRef:o,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),c.a.createElement("div",{className:Object(l.default)(s.root,e.innerScroll&&s.innerScroll),ref:o},c.a.createElement("div",{className:s.topBg}),c.a.createElement("div",{className:"flex container w-full"},m&&c.a.createElement(g,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:a,rootRef:o}),c.a.createElement("div",{className:Object(l.default)(s.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},c.a.createElement(u,{header:e.header,classes:s}),c.a.createElement("div",{className:Object(l.default)(s.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&c.a.createElement("div",{className:s.toolbar},e.contentToolbar),e.content&&c.a.createElement(r.a,{className:s.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&c.a.createElement(g,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:s,ref:n,rootRef:o})))}));v.defaultProps={};var E=c.a.memo(v)},1647:function(e,t,a){"use strict";var n=a(4),r=a(1),o=a(0),l=(a(3),a(2)),i=a(9),c=a(526),s=o.forwardRef((function(e,t){var a=e.classes,i=e.className,s=e.component,d=void 0===s?"table":s,u=e.padding,m=void 0===u?"default":u,p=e.size,b=void 0===p?"medium":p,f=e.stickyHeader,g=void 0!==f&&f,h=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),v=o.useMemo((function(){return{padding:m,size:b,stickyHeader:g}}),[m,b,g]);return o.createElement(c.a.Provider,{value:v},o.createElement(d,Object(r.a)({role:"table"===d?null:"table",ref:t,className:Object(l.default)(a.root,i,g&&a.stickyHeader)},h)))}));t.a=Object(i.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1648:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),i=a(9),c=a(299),s={variant:"body"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"tbody":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(l.default)(a.root,i),ref:t,role:"tbody"===u?null:"rowgroup"},m)))}));t.a=Object(i.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(d)},1650:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),i=a(9),c=a(299),s={variant:"head"},d=o.forwardRef((function(e,t){var a=e.classes,i=e.className,d=e.component,u=void 0===d?"thead":d,m=Object(r.a)(e,["classes","className","component"]);return o.createElement(c.a.Provider,{value:s},o.createElement(u,Object(n.a)({className:Object(l.default)(a.root,i),ref:t,role:"thead"===u?null:"rowgroup"},m)))}));t.a=Object(i.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(d)},1652:function(e,t,a){"use strict";var n=a(0),r=a(78);t.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1653:function(e,t,a){"use strict";var n=a(0),r=a(78);t.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1676:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),i=a(9),c=a(795),s=a(1583),d=a(820),u=a(1591),m=a(1586),p=a(229),b=a(1652),f=a(1653),g=a(57),h=a(817),v=o.createElement(f.a,null),E=o.createElement(b.a,null),O=o.createElement(b.a,null),x=o.createElement(f.a,null),S=o.forwardRef((function(e,t){var a=e.backIconButtonProps,l=e.count,i=e.nextIconButtonProps,c=e.onChangePage,s=e.page,d=e.rowsPerPage,u=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),m=Object(g.a)();return o.createElement("div",Object(n.a)({ref:t},u),o.createElement(h.a,Object(n.a)({onClick:function(e){c(e,s-1)},disabled:0===s,color:"inherit"},a),"rtl"===m.direction?v:E),o.createElement(h.a,Object(n.a)({onClick:function(e){c(e,s+1)},disabled:-1!==l&&s>=Math.ceil(l/d)-1,color:"inherit"},i),"rtl"===m.direction?O:x))})),j=a(303),k=function(e){var t=e.from,a=e.to,n=e.count;return"".concat(t,"-").concat(a," of ").concat(-1!==n?n:"more than ".concat(a))},y=[10,25,50,100],P=o.forwardRef((function(e,t){var a,i=e.ActionsComponent,b=void 0===i?S:i,f=e.backIconButtonProps,g=e.backIconButtonText,h=void 0===g?"Previous page":g,v=e.classes,E=e.className,O=e.colSpan,x=e.component,P=void 0===x?u.a:x,w=e.count,N=e.labelDisplayedRows,C=void 0===N?k:N,R=e.labelRowsPerPage,I=void 0===R?"Rows per page:":R,H=e.nextIconButtonProps,T=e.nextIconButtonText,B=void 0===T?"Next page":T,D=e.onChangePage,M=e.onChangeRowsPerPage,L=e.page,W=e.rowsPerPage,z=e.rowsPerPageOptions,A=void 0===z?y:z,U=e.SelectProps,V=void 0===U?{}:U,K=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);P!==u.a&&"td"!==P||(a=O||1e3);var q=Object(j.a)(),F=Object(j.a)(),J=V.native?"option":s.a;return o.createElement(P,Object(n.a)({className:Object(l.default)(v.root,E),colSpan:a,ref:t},K),o.createElement(m.a,{className:v.toolbar},o.createElement("div",{className:v.spacer}),A.length>1&&o.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption,id:F},I),A.length>1&&o.createElement(d.a,Object(n.a)({classes:{select:v.select,icon:v.selectIcon},input:o.createElement(c.a,{className:Object(l.default)(v.input,v.selectRoot)}),value:W,onChange:M,id:q,labelId:F},V),A.map((function(e){return o.createElement(J,{className:v.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),o.createElement(p.a,{color:"inherit",variant:"body2",className:v.caption},C({from:0===w?0:L*W+1,to:-1!==w?Math.min(w,(L+1)*W):(L+1)*W,count:-1===w?-1:w,page:L})),o.createElement(b,{className:v.actions,backIconButtonProps:Object(n.a)({title:h,"aria-label":h},f),count:w,nextIconButtonProps:Object(n.a)({title:B,"aria-label":B},H),onChangePage:D,page:L,rowsPerPage:W})))}));t.a=Object(i.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(P)},1798:function(e,t,a){"use strict";var n=a(1),r=a(4),o=a(0),l=(a(3),a(2)),i=a(9),c=o.forwardRef((function(e,t){var a=e.classes,i=e.className,c=e.component,s=void 0===c?"div":c,d=Object(r.a)(e,["classes","className","component"]);return o.createElement(s,Object(n.a)({ref:t,className:Object(l.default)(a.root,i)},d))}));t.a=Object(i.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(c)},3431:function(e,t,a){"use strict";a.r(t);var n=a(1628),r=a(0),o=a.n(r),l=a(70),i=a(1581),c=a(229),s=a(21),d=a(817),u=a(1587),m=a(1580),p=Object(m.a)((function(e){return{removeUnderline:{textDecoration:"none !important"}}}));var b=function(e){var t=p();return o.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},o.a.createElement(l.a,{animation:"transition.slideLeftIn",delay:300},o.a.createElement(c.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Old Notes")),o.a.createElement(s.a,{to:"/charting",className:t.removeUnderline},o.a.createElement(u.a,{title:"return"},o.a.createElement(d.a,null,o.a.createElement(i.a,{color:"action"},"keyboard_backspace")))))},f=a(22),g=a(228),h=a(1647),v=a(1648),E=a(1591),O=a(1798),x=a(1650),S=a(1676),j=a(1592),k=a(9),y=Object(k.a)({tooltip:{color:"lightblue",backgroundColor:"green",fontSize:"large"}})(u.a),P=[{id:"date",label:"Date",minWidth:100,align:"center"},{id:"docType",label:"DocType",minWidth:170,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"author",label:"Author",minWidth:170,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"title",label:"Title",minWidth:170,align:"center",format:function(e){return e.toLocaleString("en-US")}},{id:"icon",label:"Preview",minWidth:170,align:"center",format:function(e){return e.toLocaleString("en-US")}}],w=[{id:1,date:"04/16/2008",docType:"H & P Note",author:"Kirk Doson, MD",title:"",icon:"visibility"},{id:1,date:"04/16/2008",docType:"H & P Note",author:"Kirk Doson, MD",title:"",icon:"visibility"}],N=Object(m.a)({root:{width:"100%"},container:{maxHeight:""}}),C=function(e){var t=N(),a=o.a.useState(0),n=Object(f.a)(a,2),r=n[0],l=n[1],c=o.a.useState(10),s=Object(f.a)(c,2),d=s[0],u=s[1];return o.a.createElement(g.a,{className:t.root},o.a.createElement(O.a,{className:t.container},o.a.createElement(h.a,{stickyHeader:!0,"aria-label":"sticky table"},o.a.createElement(x.a,null,o.a.createElement(j.a,null,P.map((function(e,t){return o.a.createElement(E.a,{key:t,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),o.a.createElement(v.a,null,w.slice(r*d,r*d+d).map((function(e,t){return o.a.createElement(j.a,{hover:!0,role:"checkbox",tabIndex:-1,key:t},P.map((function(t){var a=e[t.id];return"icon"!==t.id?o.a.createElement(E.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a):o.a.createElement(E.a,{key:t.id,align:t.align},o.a.createElement(y,{arrow:!0,title:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores ea ab esse sapiente. Iste nemo nam sit explicabo nulla beatae tempore incidunt provident adipisci nostrum? Atque iure quaerat dolores impedit."},o.a.createElement(i.a,null,a)))})))}))))),o.a.createElement(S.a,{rowsPerPageOptions:[10,25,100],component:"div",count:w.length,rowsPerPage:d,page:r,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){u(+e.target.value),l(0)}}))};t.default=function(){return o.a.createElement(n.a,{classes:{content:"flex"},header:o.a.createElement(b,null),content:o.a.createElement(C,null)})}}}]);
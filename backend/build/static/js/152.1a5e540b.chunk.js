(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[152],{1652:function(e,a,t){"use strict";var n=t(0),c=t(78);a.a=Object(c.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1653:function(e,a,t){"use strict";var n=t(0),c=t(78);a.a=Object(c.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},2037:function(e,a,t){"use strict";var n=t(22),c=t(44),l=t(8),r=t(1594),i=t(1581),o=t(1647),s=t(1648),d=t(1591),m=t(1676),u=t(1592),p=t(2),f=t(0),b=t.n(f),h=t(5),E=t(53),g=t(1629),w=t(817),v=t(1612),x=t(1588),j=t(538),O=t(1583),N=t(1534),S=t(1580),C=t(1650),k=t(1695),y=t(1587),A=t(1590),P=t(1599),I=t(1678),B=t(1670),L=t(1692),R=t(1679),M=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"services",align:"left",disablePadding:!1,label:"Gateway",sort:!0},{id:"allowed_ips",align:"left",disablePadding:!1,label:"Allowed IPs",sort:!0},{id:"status",align:"right",disablePadding:!1,label:"Active",sort:!0}],T=Object(S.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var _=function(e){var a=T(e),t=Object(f.useState)(null),c=Object(n.a)(t,2),l=c[0],o=c[1],s=Object(h.c)(),m=e.selectedAppIds,E=e.selectedServiceId;function S(){o(null)}var _=b.a.useState(!1),z=Object(n.a)(_,2),W=z[0],D=z[1],q=function(){D(!1)};return b.a.createElement(b.a.Fragment,null,b.a.createElement(C.a,null,b.a.createElement(u.a,{className:"h-64"},b.a.createElement(d.a,{padding:"none",className:"relative w-64 text-center"},b.a.createElement(r.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected>0&&e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&b.a.createElement("div",{className:Object(p.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",a.actionsButtonWrapper)},b.a.createElement(w.a,{"aria-owns":l?"selectedAppsMenu":null,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},b.a.createElement(i.a,null,"more_horiz")),b.a.createElement(j.a,{id:"selectedAppsMenu",anchorEl:l,open:Boolean(l),onClose:S},b.a.createElement(N.a,null,b.a.createElement(O.a,{onClick:function(){S(),D(!0)}},b.a.createElement(v.a,{className:"min-w-40"},b.a.createElement(i.a,null,"delete")),b.a.createElement(x.a,{primary:"Remove"})))))),M.map((function(a){return b.a.createElement(d.a,{key:a.id,align:a.align,padding:a.disablePadding?"none":"default",sortDirection:e.order.id===a.id&&e.order.direction},a.sort&&b.a.createElement(y.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300},b.a.createElement(k.a,{active:e.order.id===a.id,direction:e.order.direction,onClick:(t=a.id,function(a){e.onRequestSort(a,t)})},a.label)));var t}),this))),b.a.createElement(P.a,{open:W,onClose:q,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},b.a.createElement(R.a,{id:"alert-dialog-title"},"Warning"),b.a.createElement(B.a,null,b.a.createElement(L.a,{id:"alert-dialog-description"},"Confirm to delete...")),b.a.createElement(I.a,null,b.a.createElement(A.a,{onClick:q},"Cancel"),b.a.createElement(A.a,{onClick:function(){s(g.Mb(m,E)),q(),e.setSelected([])},autoFocus:!0},"Confirm"))))};a.a=Object(E.j)((function(e){var a=Object(h.c)(),t=Object(h.d)((function(e){return e.accesscontrolApp.apps.data})),p=Object(h.d)((function(e){return e.accesscontrolApp.apps.searchText})),E=e.serviceId,w=Object(f.useState)([]),v=Object(n.a)(w,2),x=v[0],j=v[1],O=Object(f.useState)(t),N=Object(n.a)(O,2),S=N[0],C=N[1],k=Object(f.useState)(0),y=Object(n.a)(k,2),A=y[0],P=y[1],I=Object(f.useState)(10),B=Object(n.a)(I,2),L=B[0],R=B[1],M=Object(f.useState)({direction:"asc",id:null}),T=Object(n.a)(M,2),z=T[0],W=T[1];return Object(f.useEffect)((function(){a(g.ib(E))}),[a]),Object(f.useEffect)((function(){0!==p.length?(C(l.a.filter(t,(function(e){return e.name.toLowerCase().includes(p.toLowerCase())}))),P(0)):C(t)}),[t,p]),b.a.createElement("div",{className:"w-full flex flex-col"},b.a.createElement(c.a,{className:"flex-grow overflow-x-auto"},b.a.createElement(o.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},b.a.createElement(_,{numSelected:x.length,order:z,onSelectAllClick:function(e){e.target.checked?j(S.map((function(e){return e.id}))):j([])},onRequestSort:function(e,a){var t=a,n="desc";z.id===a&&"desc"===z.direction&&(n="asc"),W({direction:n,id:t})},rowCount:S.length,selectedAppIds:x,selectedServiceId:E,setSelected:j}),b.a.createElement(s.a,null,l.a.orderBy(S,[function(e){switch(z.id){case"services":return e.service.name;default:return e[z.id]}}],[z.direction]).slice(A*L,A*L+L).map((function(a){var t=-1!==x.indexOf(a.id);return b.a.createElement(u.a,{className:"h-36 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t,onClick:function(t){return n=a,void(E||e.history.push("/applications/".concat(n.id)));var n}},b.a.createElement(d.a,{className:"w-64 text-center",padding:"none"},b.a.createElement(r.a,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,a){var t=x.indexOf(a),n=[];-1===t?n=n.concat(x,a):0===t?n=n.concat(x.slice(1)):t===x.length-1?n=n.concat(x.slice(0,-1)):t>0&&(n=n.concat(x.slice(0,t),x.slice(t+1))),j(n)}(0,a.id)}})),b.a.createElement(d.a,{className:"w-52",component:"th",scope:"row",padding:"none"}),b.a.createElement(d.a,{component:"th",scope:"row"},a.name),b.a.createElement(d.a,{className:"truncate",component:"th",scope:"row"},a.service.name),b.a.createElement(d.a,{component:"th",scope:"row"},a.allowed_ips),b.a.createElement(d.a,{component:"th",scope:"row",align:"right"},"A"==a.status?b.a.createElement(i.a,{className:"text-green text-20"},"check_circle"):b.a.createElement(i.a,{className:"text-red text-20"},"remove_circle")))}))))),b.a.createElement(m.a,{className:"overflow-hidden",component:"div",count:S.length,rowsPerPage:L,page:A,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,a){P(a)},onChangeRowsPerPage:function(e){R(e.target.value)}}))}))},3437:function(e,a,t){"use strict";t.r(a);var n=t(1628),c=t(211),l=t(0),r=t.n(l),i=t(1688),o=t(70),s=t(1590),d=t(1581),m=t(541),u=t(228),p=t(1604),f=t(229),b=t(5),h=t(21),E=t(1629);var g=function(e){var a=Object(b.c)(),t=Object(b.d)((function(e){return e.accesscontrolApp.apps.searchText})),n=Object(b.d)((function(e){return e.fuse.settings.mainTheme}));return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement(o.a,{animation:"transition.expandIn",delay:300},r.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/logos/applications.png",alt:"Applications"})),r.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(f.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Applications"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(p.a,{theme:n},r.a.createElement(o.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement(u.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(d.a,{color:"action"},"search"),r.a.createElement(m.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a(E.gc(e))}}))))),r.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(s.a,{component:h.a,to:"/applications/new",className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New Application"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},w=t(2037);a.default=Object(c.a)("accesscontrolApp",i.a)((function(){return r.a.createElement(n.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(g,null),content:r.a.createElement(w.a,null),innerScroll:!0})}))}}]);
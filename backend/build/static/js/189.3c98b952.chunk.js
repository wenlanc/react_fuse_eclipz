(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[189],{3417:function(e,a,t){"use strict";t.r(a);var n=t(1628),r=t(211),c=t(0),l=t.n(c),o=t(1688),i=t(70),s=t(1590),d=t(1581),u=t(541),m=t(228),p=t(1604),f=t(229),g=t(5),b=t(21),h=t(1629);var E=function(e){var a=Object(g.c)(),t=Object(g.d)((function(e){return e.accesscontrolApp.users.searchText})),n=Object(g.d)((function(e){return e.fuse.settings.mainTheme}));return Object(c.useEffect)((function(){a(h.rc(""))}),[a]),l.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},l.a.createElement(f.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Clients"))),l.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},l.a.createElement(p.a,{theme:n},l.a.createElement(i.a,{animation:"transition.slideDownIn",delay:300},l.a.createElement(m.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},l.a.createElement(d.a,{color:"action"},"search"),l.a.createElement(u.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a(h.rc(e.target.value))}}))))),l.a.createElement(i.a,{animation:"transition.slideRightIn",delay:300},l.a.createElement(s.a,{component:b.a,to:"/users/new",className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},l.a.createElement("span",{className:"hidden sm:flex"},"Add New Client"),l.a.createElement("span",{className:"flex sm:hidden"},"New"))))},x=t(22),v=t(44),w=(t(8),t(1594)),j=t(1647),N=t(1648),O=t(1591),P=t(1676),C=t(1592),k=t(2),y=t(53),S=t(817),A=t(1612),_=t(1588),I=t(538),B=t(1583),R=t(1534),T=t(1580),U=t(1650),D=t(1695),W=t(1587),q=t(1599),z=t(1678),F=t(1670),G=t(1692),J=t(1679),M=Object(T.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var L=function(e){var a=M(e),t=Object(c.useState)(null),n=Object(x.a)(t,2),r=n[0],o=n[1],i=Object(g.d)((function(e){return e.auth.user})),u=Object(g.c)(),m=e.selectedUserIds;function p(){o(null)}var f=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"groups",align:"left",disablePadding:!1,label:"Group",sort:!0},{id:"status",align:"right",disablePadding:!1,label:"Active",sort:!0}];"superadmin"==i.role&&(f=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"domains",align:"left",disablePadding:!1,label:"Domain",sort:!0},{id:"groups",align:"left",disablePadding:!1,label:"Group",sort:!0},{id:"status",align:"right",disablePadding:!1,label:"Active",sort:!0}]);var b=l.a.useState(!1),E=Object(x.a)(b,2),v=E[0],j=E[1],N=function(){j(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(U.a,null,l.a.createElement(C.a,{className:"h-64"},l.a.createElement(O.a,{padding:"none",className:"relative w-64 text-center"},l.a.createElement(w.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected>0&&e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&l.a.createElement("div",{className:Object(k.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",a.actionsButtonWrapper)},l.a.createElement(S.a,{"aria-owns":r?"selectedUsersMenu":null,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},l.a.createElement(d.a,null,"more_horiz")),l.a.createElement(I.a,{id:"selectedUsersMenu",anchorEl:r,open:Boolean(r),onClose:p},l.a.createElement(R.a,null,l.a.createElement(B.a,{onClick:function(){p(),j(!0)}},l.a.createElement(A.a,{className:"min-w-40"},l.a.createElement(d.a,null,"delete")),l.a.createElement(_.a,{primary:"Remove"})))))),f.map((function(a){return l.a.createElement(O.a,{key:a.id,align:a.align,padding:a.disablePadding?"none":"default",sortDirection:e.order._id===a.id&&e.order._direction},a.sort&&l.a.createElement(W.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300},l.a.createElement(D.a,{active:e.order._id===a.id,direction:e.order._direction,onClick:(t=a.id,function(a){e.onRequestSort(a,t)})},a.label)));var t}),this))),l.a.createElement(q.a,{open:v,onClose:N,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},l.a.createElement(J.a,{id:"alert-dialog-title"},"Warning"),l.a.createElement(F.a,null,l.a.createElement(G.a,{id:"alert-dialog-description"},"Confirm to delete...")),l.a.createElement(z.a,null,l.a.createElement(s.a,{onClick:N},"Cancel"),l.a.createElement(s.a,{onClick:function(){u(h.Sb(m)),N(),e.setSelected([])},autoFocus:!0},"Confirm"))))},H=t(1596);var K=Object(y.j)((function(e){var a=Object(g.c)(),t=Object(g.d)((function(e){return e.accesscontrolApp.users.data})),n=Object(g.d)((function(e){return e.accesscontrolApp.users.searchText})),r=Object(g.d)((function(e){return e.accesscontrolApp.users.rowsPerPage})),o=Object(g.d)((function(e){return e.accesscontrolApp.users.page})),i=Object(g.d)((function(e){return e.accesscontrolApp.users.order})),s=Object(g.d)((function(e){return e.accesscontrolApp.users.totalItems})),u=(Object(g.d)((function(e){return e.accesscontrolApp.users.totalPages})),Object(g.d)((function(e){return e.auth.user}))),m=Object(c.useState)([]),p=Object(x.a)(m,2),f=p[0],b=p[1];return Object(c.useEffect)((function(){a(h.Bb(o,r,i,n))}),[a,n,r,o,i]),l.a.createElement("div",{className:"w-full flex flex-col"},l.a.createElement(v.a,{className:"flex-grow overflow-x-auto"},l.a.createElement(j.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},l.a.createElement(L,{numSelected:f.length,order:i,onSelectAllClick:function(e){e.target.checked?b(t.map((function(e){return e.id}))):b([])},onRequestSort:function(e,t){var n=t,r="desc";i._id===t&&"desc"===i._direction&&(r="asc"),a(h.pc({_id:n,_direction:r}))},rowCount:t.length,selectedUserIds:f,setSelected:b}),l.a.createElement(N.a,null,t.map((function(a){var t=-1!==f.indexOf(a.id);return l.a.createElement(C.a,{className:"h-36 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t,onClick:function(t){return n=a,void e.history.push("/users/".concat(n.id));var n}},l.a.createElement(O.a,{className:"w-64 text-center",padding:"none",style:{padding:"7px 15px"}},l.a.createElement(w.a,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,a){var t=f.indexOf(a),n=[];-1===t?n=n.concat(f,a):0===t?n=n.concat(f.slice(1)):t===f.length-1?n=n.concat(f.slice(0,-1)):t>0&&(n=n.concat(f.slice(0,t),f.slice(t+1))),b(n)}(0,a.id)}})),l.a.createElement(O.a,{className:"w-52",component:"th",scope:"row",padding:"none"}),l.a.createElement(O.a,{component:"th",scope:"row"},a.name),"superadmin"==u.role&&l.a.createElement(O.a,{className:"truncate",component:"th",scope:"row",style:{padding:"7px 15px"}},a.domain&&a.domain.name),l.a.createElement(O.a,{className:"truncate",component:"th",scope:"row",style:{padding:"7px 15px"}},a.group_names&&a.group_names.length&&a.group_names.map((function(e){return l.a.createElement(H.a,{style:{margin:"3px"},key:e,label:e})}))),l.a.createElement(O.a,{component:"th",scope:"row",align:"right",style:{padding:"7px 15px"}},"A"==a.status?l.a.createElement(d.a,{className:"text-green text-20"},"check_circle"):l.a.createElement(d.a,{className:"text-red text-20"},"remove_circle")))}))))),l.a.createElement(P.a,{className:"overflow-hidden",component:"div",rowsPerPageOptions:[10,25],count:s,rowsPerPage:r,page:o,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,t){a(h.oc(t))},onChangeRowsPerPage:function(e){a(h.qc(e.target.value))}}))}));a.default=Object(r.a)("accesscontrolApp",o.a)((function(){return l.a.createElement(n.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:l.a.createElement(E,null),content:l.a.createElement(K,null),innerScroll:!0})}))}}]);
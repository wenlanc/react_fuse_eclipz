(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[184],{3413:function(e,a,t){"use strict";t.r(a);var n=t(1628),c=t(211),l=t(0),r=t.n(l),i=t(1688),o=t(70),s=t(1590),m=t(1581),d=t(541),u=t(228),f=t(1604),p=t(229),h=t(5),g=t(21),b=t(1629);var E=function(e){var a=Object(h.c)(),t=Object(h.d)((function(e){return e.accesscontrolApp.domains.searchText})),n=Object(h.d)((function(e){return e.fuse.settings.mainTheme}));return r.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("img",{className:"w-full block rounded",src:"assets/images/logos/domain.png",style:{width:"50px",height:"50px"}}),r.a.createElement(o.a,{animation:"transition.slideLeftIn",delay:300},r.a.createElement(p.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Domains"))),r.a.createElement("div",{className:"flex flex-1 items-center justify-center px-12"},r.a.createElement(f.a,{theme:n},r.a.createElement(o.a,{animation:"transition.slideDownIn",delay:300},r.a.createElement(u.a,{className:"flex items-center w-full max-w-512 px-8 py-4 rounded-8",elevation:1},r.a.createElement(m.a,{color:"action"},"search"),r.a.createElement(d.a,{placeholder:"Search",className:"flex flex-1 mx-8",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a(b.hc(e))}}))))),r.a.createElement(o.a,{animation:"transition.slideRightIn",delay:300},r.a.createElement(s.a,{component:g.a,to:"/domains/new",className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},r.a.createElement("span",{className:"hidden sm:flex"},"Add New Domain"),r.a.createElement("span",{className:"flex sm:hidden"},"New"))))},x=t(22),w=t(44),v=t(8),j=t(1594),N=t(1647),O=t(1648),k=t(1591),C=t(1676),S=t(1592),y=t(2),P=t(53),A=t(817),D=t(1612),I=t(1588),B=t(538),T=t(1583),R=t(1534),W=t(1580),L=t(1650),_=t(1695),q=t(1587),z=t(1599),F=t(1678),J=t(1670),M=t(1692),U=t(1679),G=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"status",align:"right",disablePadding:!1,label:"Active",sort:!0}],H=Object(W.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var K=function(e){var a=H(e),t=Object(l.useState)(null),n=Object(x.a)(t,2),c=n[0],i=n[1],o=Object(h.c)(),d=e.selectedDomainIds,u=r.a.useState(!1),f=Object(x.a)(u,2),p=f[0],g=f[1];function E(){i(null)}var w=function(){g(!1)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,null,r.a.createElement(S.a,{className:"h-64"},r.a.createElement(k.a,{padding:"none",className:"relative w-64 text-center"},r.a.createElement(j.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected>0&&e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&r.a.createElement("div",{className:Object(y.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",a.actionsButtonWrapper)},r.a.createElement(A.a,{"aria-owns":c?"selectedDomainsMenu":null,"aria-haspopup":"true",onClick:function(e){i(e.currentTarget)}},r.a.createElement(m.a,null,"more_horiz")),r.a.createElement(B.a,{id:"selectedDomainsMenu",anchorEl:c,open:Boolean(c),onClose:E},r.a.createElement(R.a,null,r.a.createElement(T.a,{onClick:function(){E(),g(!0)}},r.a.createElement(D.a,{className:"min-w-40"},r.a.createElement(m.a,null,"delete")),r.a.createElement(I.a,{primary:"Remove"})))))),G.map((function(a){return r.a.createElement(k.a,{key:a.id,align:a.align,padding:a.disablePadding?"none":"default",sortDirection:e.order.id===a.id&&e.order.direction},a.sort&&r.a.createElement(q.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(_.a,{active:e.order.id===a.id,direction:e.order.direction,onClick:(t=a.id,function(a){e.onRequestSort(a,t)})},a.label)));var t}),this))),r.a.createElement(z.a,{open:p,onClose:w,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(U.a,{id:"alert-dialog-title"},"Warning"),r.a.createElement(J.a,null,r.a.createElement(M.a,{id:"alert-dialog-description"},"This domain has some users. Confirm to delete all users, groups and policies from this domain and delete the domain.")),r.a.createElement(F.a,null,r.a.createElement(s.a,{onClick:w},"Cancel"),r.a.createElement(s.a,{onClick:function(){o(b.Nb(d)),w(),e.setSelected([])},autoFocus:!0},"Confirm"))))},Q=t(72);var V=Object(P.j)((function(e){var a=Object(h.c)(),t=Object(h.d)((function(e){return e.accesscontrolApp.domains.data})),n=Object(h.d)((function(e){return e.accesscontrolApp.domains.searchText})),c=Object(l.useState)([]),i=Object(x.a)(c,2),o=i[0],s=i[1],d=Object(l.useState)(t),u=Object(x.a)(d,2),f=u[0],p=u[1],g=Object(l.useState)(0),E=Object(x.a)(g,2),y=E[0],P=E[1],A=Object(l.useState)(10),D=Object(x.a)(A,2),I=D[0],B=D[1],T=Object(l.useState)({direction:"asc",id:null}),R=Object(x.a)(T,2),W=R[0],L=R[1];return Object(l.useEffect)((function(){a(b.kb())}),[a]),Object(l.useEffect)((function(){0!==n.length?(p(v.a.filter(t,(function(e){return e.name.toLowerCase().includes(n.toLowerCase())}))),P(0)):p(t)}),[t,n]),r.a.createElement("div",{className:"w-full flex flex-col"},r.a.createElement(w.a,{className:"flex-grow overflow-x-auto"},r.a.createElement(N.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},r.a.createElement(K,{numSelected:o.length,order:W,onSelectAllClick:function(e){e.target.checked&&f&&f.length?s(f.map((function(e){return e.id}))):s([])},onRequestSort:function(e,a){var t=a,n="desc";W.id===a&&"desc"===W.direction&&(n="asc"),L({direction:n,id:t})},rowCount:f.length,selectedDomainIds:o,setSelected:s}),r.a.createElement(O.a,null,v.a.orderBy(f,[function(e){switch(W.id){case"categories":return e.categories[0];default:return e[W.id]}}],[W.direction]).slice(y*I,y*I+I).map((function(a){var t=-1!==o.indexOf(a.id);return r.a.createElement(S.a,{className:"h-36 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t,onClick:function(t){return n=a,void e.history.push("/domains/".concat(n.id));var n}},r.a.createElement(k.a,{className:"w-64 text-center",padding:"none"},r.a.createElement(j.a,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,a){var t=o.indexOf(a),n=[];-1===t?n=n.concat(o,a):0===t?n=n.concat(o.slice(1)):t===o.length-1?n=n.concat(o.slice(0,-1)):t>0&&(n=n.concat(o.slice(0,t),o.slice(t+1))),s(n)}(0,a.id)}})),r.a.createElement(k.a,{className:"w-52",component:"th",scope:"row",padding:"none"},r.a.createElement("img",{className:"w-full block rounded",src:a.icon?"".concat(Q.a,"/imgs/domains/").concat(a.icon):"assets/images/logos/domain.png",alt:a.name,style:{width:"50px",height:"50px"}})),r.a.createElement(k.a,{component:"th",scope:"row"},a.name),r.a.createElement(k.a,{component:"th",scope:"row",align:"right"},"A"==a.status?r.a.createElement(m.a,{className:"text-green text-20"},"check_circle"):r.a.createElement(m.a,{className:"text-red text-20"},"remove_circle")))}))))),r.a.createElement(C.a,{className:"overflow-hidden",component:"div",count:f.length,rowsPerPage:I,page:y,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,a){P(a)},onChangeRowsPerPage:function(e){B(e.target.value)}}))}));a.default=Object(c.a)("accesscontrolApp",i.a)((function(){return r.a.createElement(n.a,{classes:{content:"flex",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:r.a.createElement(E,null),content:r.a.createElement(V,null),innerScroll:!0})}))}}]);
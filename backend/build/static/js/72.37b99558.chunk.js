(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[72],{1545:function(e,a,t){"use strict";t.r(a);var n=t(518);t.d(a,"default",(function(){return n.a}))},1620:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=c.default.memo(c.default.forwardRef((function(a,t){return c.default.createElement(l.default,(0,r.default)({ref:t},a),e)})));0;return t.muiName=l.default.muiName,t};var r=n(t(184)),c=n(t(0)),l=n(t(1545))},1652:function(e,a,t){"use strict";var n=t(0),r=t(78);a.a=Object(r.a)(n.createElement("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},1653:function(e,a,t){"use strict";var n=t(0),r=t(78);a.a=Object(r.a)(n.createElement("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},1670:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(9),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.dividers,s=void 0!==i&&i,m=Object(r.a)(e,["classes","className","dividers"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(t.root,o,s&&t.dividers),ref:a},m))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(i)},1676:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(9),i=t(795),s=t(1583),m=t(820),u=t(1591),d=t(1586),p=t(229),f=t(1652),b=t(1653),E=t(57),v=t(817),g=c.createElement(b.a,null),h=c.createElement(f.a,null),N=c.createElement(f.a,null),O=c.createElement(b.a,null),C=c.forwardRef((function(e,a){var t=e.backIconButtonProps,l=e.count,o=e.nextIconButtonProps,i=e.onChangePage,s=e.page,m=e.rowsPerPage,u=Object(r.a)(e,["backIconButtonProps","count","nextIconButtonProps","onChangePage","page","rowsPerPage"]),d=Object(E.a)();return c.createElement("div",Object(n.a)({ref:a},u),c.createElement(v.a,Object(n.a)({onClick:function(e){i(e,s-1)},disabled:0===s,color:"inherit"},t),"rtl"===d.direction?g:h),c.createElement(v.a,Object(n.a)({onClick:function(e){i(e,s+1)},disabled:-1!==l&&s>=Math.ceil(l/m)-1,color:"inherit"},o),"rtl"===d.direction?N:O))})),P=t(303),y=function(e){var a=e.from,t=e.to,n=e.count;return"".concat(a,"-").concat(t," of ").concat(-1!==n?n:"more than ".concat(t))},T=[10,25,50,100],j=c.forwardRef((function(e,a){var t,o=e.ActionsComponent,f=void 0===o?C:o,b=e.backIconButtonProps,E=e.backIconButtonText,v=void 0===E?"Previous page":E,g=e.classes,h=e.className,N=e.colSpan,O=e.component,j=void 0===O?u.a:O,x=e.count,w=e.labelDisplayedRows,A=void 0===w?y:w,S=e.labelRowsPerPage,I=void 0===S?"Rows per page:":S,R=e.nextIconButtonProps,k=e.nextIconButtonText,L=void 0===k?"Next page":k,D=e.onChangePage,M=e.onChangeRowsPerPage,B=e.page,W=e.rowsPerPage,z=e.rowsPerPageOptions,G=void 0===z?T:z,_=e.SelectProps,H=void 0===_?{}:_,F=Object(r.a)(e,["ActionsComponent","backIconButtonProps","backIconButtonText","classes","className","colSpan","component","count","labelDisplayedRows","labelRowsPerPage","nextIconButtonProps","nextIconButtonText","onChangePage","onChangeRowsPerPage","page","rowsPerPage","rowsPerPageOptions","SelectProps"]);j!==u.a&&"td"!==j||(t=N||1e3);var U=Object(P.a)(),J=Object(P.a)(),K=H.native?"option":s.a;return c.createElement(j,Object(n.a)({className:Object(l.default)(g.root,h),colSpan:t,ref:a},F),c.createElement(d.a,{className:g.toolbar},c.createElement("div",{className:g.spacer}),G.length>1&&c.createElement(p.a,{color:"inherit",variant:"body2",className:g.caption,id:J},I),G.length>1&&c.createElement(m.a,Object(n.a)({classes:{select:g.select,icon:g.selectIcon},input:c.createElement(i.a,{className:Object(l.default)(g.input,g.selectRoot)}),value:W,onChange:M,id:U,labelId:J},H),G.map((function(e){return c.createElement(K,{className:g.menuItem,key:e.value?e.value:e,value:e.value?e.value:e},e.label?e.label:e)}))),c.createElement(p.a,{color:"inherit",variant:"body2",className:g.caption},A({from:0===x?0:B*W+1,to:-1!==x?Math.min(x,(B+1)*W):(B+1)*W,count:-1===x?-1:x,page:B})),c.createElement(f,{className:g.actions,backIconButtonProps:Object(n.a)({title:v,"aria-label":v},b),count:x,nextIconButtonProps:Object(n.a)({title:L,"aria-label":L},R),onChangePage:D,page:B,rowsPerPage:W})))}));a.a=Object(o.a)((function(e){return{root:{color:e.palette.text.primary,fontSize:e.typography.pxToRem(14),overflow:"auto","&:last-child":{padding:0}},toolbar:{minHeight:52,paddingRight:2},spacer:{flex:"1 1 100%"},caption:{flexShrink:0},selectRoot:{marginRight:32,marginLeft:8},select:{paddingLeft:8,paddingRight:24,textAlign:"right",textAlignLast:"right"},selectIcon:{},input:{color:"inherit",fontSize:"inherit",flexShrink:0},menuItem:{},actions:{flexShrink:0,marginLeft:20}}}),{name:"MuiTablePagination"})(j)},1678:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(9),i=c.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,i=e.classes,s=e.className,m=Object(r.a)(e,["disableSpacing","classes","className"]);return c.createElement("div",Object(n.a)({className:Object(l.default)(i.root,s,!o&&i.spacing),ref:a},m))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(i)},1695:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(78),i=Object(o.a)(c.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"}),"ArrowDownward"),s=t(9),m=t(385),u=t(10),d=c.forwardRef((function(e,a){var t=e.active,o=void 0!==t&&t,s=e.children,d=e.classes,p=e.className,f=e.direction,b=void 0===f?"asc":f,E=e.hideSortIcon,v=void 0!==E&&E,g=e.IconComponent,h=void 0===g?i:g,N=Object(r.a)(e,["active","children","classes","className","direction","hideSortIcon","IconComponent"]);return c.createElement(m.a,Object(n.a)({className:Object(l.default)(d.root,p,o&&d.active),component:"span",disableRipple:!0,ref:a},N),s,v&&!o?null:c.createElement(h,{className:Object(l.default)(d.icon,d["iconDirection".concat(Object(u.a)(b))])}))}));a.a=Object(s.a)((function(e){return{root:{cursor:"pointer",display:"inline-flex",justifyContent:"flex-start",flexDirection:"inherit",alignItems:"center","&:focus":{color:e.palette.text.secondary},"&:hover":{color:e.palette.text.secondary,"& $icon":{opacity:.5}},"&$active":{color:e.palette.text.primary,"&& $icon":{opacity:1,color:e.palette.text.secondary}}},active:{},icon:{fontSize:18,marginRight:4,marginLeft:4,opacity:0,transition:e.transitions.create(["opacity","transform"],{duration:e.transitions.duration.shorter}),userSelect:"none"},iconDirectionDesc:{transform:"rotate(0deg)"},iconDirectionAsc:{transform:"rotate(180deg)"}}}),{name:"MuiTableSortLabel"})(d)},1798:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(9),i=c.forwardRef((function(e,a){var t=e.classes,o=e.className,i=e.component,s=void 0===i?"div":i,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({ref:a,className:Object(l.default)(t.root,o)},m))}));a.a=Object(o.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(i)},1806:function(e,a,t){"use strict";var n=t(1),r=t(4),c=t(0),l=(t(3),t(2)),o=t(9),i=t(299),s={variant:"footer"},m=c.forwardRef((function(e,a){var t=e.classes,o=e.className,m=e.component,u=void 0===m?"tfoot":m,d=Object(r.a)(e,["classes","className","component"]);return c.createElement(i.a.Provider,{value:s},c.createElement(u,Object(n.a)({className:Object(l.default)(t.root,o),ref:a,role:"tfoot"===u?null:"rowgroup"},d)))}));a.a=Object(o.a)({root:{display:"table-footer-group"}},{name:"MuiTableFooter"})(m)},1828:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1620)).default)(r.default.createElement("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}),"KeyboardArrowRight");a.default=c},1829:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1620)).default)(r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}),"KeyboardArrowLeft");a.default=c},2074:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1620)).default)(r.default.createElement("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");a.default=c},2075:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(0)),c=(0,n(t(1620)).default)(r.default.createElement("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage");a.default=c},3403:function(e,a,t){"use strict";t.r(a);var n=t(70),r=t(210),c=t(1606),l=t(1581),o=t(1580),i=t(211),s=t(0),m=t.n(s),u=t(5),d=t(53),p=t(86),f=t(6),b=t(311),E=t(1605),v=t(1619),g=t(1590),h=t(1599),N=t(1678),O=t(1670),C=t(817),P=t(1589),y=t(1586),T=t(229),j=t(48),x=t.n(j),w="[CONTACTS APP] GET USER DATA";function A(){var e=x.a.get("/api/contacts-app/user");return function(a){return e.then((function(e){return a({type:w,payload:e.data})}))}}var S="[CONTACTS APP] GET CONTACTS",I="[CONTACTS APP] SET SEARCH TEXT";function R(e){var a=x.a.get("/api/contacts-app/contacts",{params:e});return function(t){return a.then((function(a){return t({type:S,payload:a.data,routeParams:e})}))}}function k(e){return function(a,t){var n=t().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/remove-contact",{contactId:e}).then((function(e){return Promise.all([a({type:"[CONTACTS APP] REMOVE CONTACT"})]).then((function(){return a(R(n))}))}))}}var L={id:"",name:"",lastName:"",avatar:"assets/images/avatars/profile.jpg",nickname:"",company:"",jobTitle:"",email:"",phone:"",address:"",birthday:"",notes:""};var D=function(e){var a=Object(u.c)(),t=Object(u.d)((function(e){return e.contactsApp.contacts.contactDialog})),n=Object(p.c)(L),r=n.form,c=n.handleChange,o=n.setForm,i=Object(s.useCallback)((function(){"edit"===t.type&&t.data&&o(Object(f.a)({},t.data)),"new"===t.type&&o(Object(f.a)(Object(f.a)(Object(f.a)({},L),t.data),{},{id:b.a.generateGUID()}))}),[t.data,t.type,o]);function d(){return"edit"===t.type?a({type:"[CONTACTS APP] CLOSE EDIT CONTACT DIALOG"}):a({type:"[CONTACTS APP] CLOSE NEW CONTACT DIALOG"})}function j(){return r.name.length>0}function w(e){var n,c;e.preventDefault(),"new"===t.type?a((c=r,function(e,a){var t=a().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/add-contact",{newContact:c}).then((function(a){return Promise.all([e({type:"[CONTACTS APP] ADD CONTACT"})]).then((function(){return e(R(t))}))}))})):a((n=r,function(e,a){var t=a().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/update-contact",{contact:n}).then((function(a){return Promise.all([e({type:"[CONTACTS APP] UPDATE CONTACT"})]).then((function(){return e(R(t))}))}))})),d()}return Object(s.useEffect)((function(){t.props.open&&i()}),[t.props.open,i]),m.a.createElement(h.a,Object.assign({classes:{paper:"m-24"}},t.props,{onClose:d,fullWidth:!0,maxWidth:"xs"}),m.a.createElement(E.a,{position:"static",elevation:1},m.a.createElement(y.a,{className:"flex w-full"},m.a.createElement(T.a,{variant:"subtitle1",color:"inherit"},"new"===t.type?"New Contact":"Edit Contact")),m.a.createElement("div",{className:"flex flex-col items-center justify-center pb-24"},m.a.createElement(v.a,{className:"w-96 h-96",alt:"contact avatar",src:r.avatar}),"edit"===t.type&&m.a.createElement(T.a,{variant:"h6",color:"inherit",className:"pt-8"},r.name))),m.a.createElement("form",{noValidate:!0,onSubmit:w,className:"flex flex-col md:overflow-hidden"},m.a.createElement(O.a,{classes:{root:"p-24"}},m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"account_circle")),m.a.createElement(P.a,{className:"mb-24",label:"Name",autoFocus:!0,id:"name",name:"name",value:r.name,onChange:c,variant:"outlined",required:!0,fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"}),m.a.createElement(P.a,{className:"mb-24",label:"Last name",id:"lastName",name:"lastName",value:r.lastName,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"star")),m.a.createElement(P.a,{className:"mb-24",label:"Nickname",id:"nickname",name:"nickname",value:r.nickname,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"phone")),m.a.createElement(P.a,{className:"mb-24",label:"Phone",id:"phone",name:"phone",value:r.phone,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"email")),m.a.createElement(P.a,{className:"mb-24",label:"Email",id:"email",name:"email",value:r.email,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"domain")),m.a.createElement(P.a,{className:"mb-24",label:"Company",id:"company",name:"company",value:r.company,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"work")),m.a.createElement(P.a,{className:"mb-24",label:"Job title",id:"jobTitle",name:"jobTitle",value:r.jobTitle,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"cake")),m.a.createElement(P.a,{className:"mb-24",id:"birthday",label:"Birthday",type:"date",value:r.birthday,onChange:c,InputLabelProps:{shrink:!0},variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"home")),m.a.createElement(P.a,{className:"mb-24",label:"Address",id:"address",name:"address",value:r.address,onChange:c,variant:"outlined",fullWidth:!0})),m.a.createElement("div",{className:"flex"},m.a.createElement("div",{className:"min-w-48 pt-20"},m.a.createElement(l.a,{color:"action"},"note")),m.a.createElement(P.a,{className:"mb-24",label:"Notes",id:"notes",name:"notes",value:r.notes,onChange:c,variant:"outlined",multiline:!0,rows:5,fullWidth:!0}))),"new"===t.type?m.a.createElement(N.a,{className:"justify-between p-8"},m.a.createElement("div",{className:"px-16"},m.a.createElement(g.a,{variant:"contained",color:"primary",onClick:w,type:"submit",disabled:!j()},"Add"))):m.a.createElement(N.a,{className:"justify-between p-8"},m.a.createElement("div",{className:"px-16"},m.a.createElement(g.a,{variant:"contained",color:"primary",type:"submit",onClick:w,disabled:!j()},"Save")),m.a.createElement(C.a,{onClick:function(){a(k(r.id)),d()}},m.a.createElement(l.a,null,"delete")))))},M=t(1595),B=t(541),W=t(228),z=t(1604);var G=function(e){var a=Object(u.c)(),t=Object(u.d)((function(e){return e.contactsApp.contacts.searchText})),r=Object(u.d)((function(e){return e.fuse.settings.mainTheme}));return m.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24"},m.a.createElement("div",{className:"flex flex-shrink items-center sm:w-224"},m.a.createElement(M.a,{lgUp:!0},m.a.createElement(C.a,{onClick:function(a){e.pageLayout.current.toggleLeftSidebar()},"aria-label":"open left sidebar"},m.a.createElement(l.a,null,"menu"))),m.a.createElement("div",{className:"flex items-center"},m.a.createElement(n.a,{animation:"transition.expandIn",delay:300},m.a.createElement(l.a,{className:"text-32"},"account_box")),m.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},m.a.createElement(T.a,{variant:"h6",className:"mx-12 hidden sm:flex"},"Contacts")))),m.a.createElement("div",{className:"flex flex-1 items-center justify-center px-8 sm:px-12"},m.a.createElement(z.a,{theme:r},m.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:300},m.a.createElement(W.a,{className:"flex p-4 items-center w-full max-w-512 h-48 px-8 py-4",elevation:1},m.a.createElement(l.a,{color:"action"},"search"),m.a.createElement(B.a,{placeholder:"Search for anything",className:"flex flex-1 px-16",disableUnderline:!0,fullWidth:!0,value:t,inputProps:{"aria-label":"Search"},onChange:function(e){return a({type:I,searchText:e.target.value})}}))))))},_=t(22),H=t(29),F=t(1612),U=t(1588),J=t(538),K=t(1583),V=t(1534);var q=function(e){var a=Object(u.c)(),t=e.selectedContactIds,n=Object(s.useState)(null),r=Object(_.a)(n,2),c=r[0],o=r[1];function i(){o(null)}return m.a.createElement(m.a.Fragment,null,m.a.createElement(C.a,{className:"p-0","aria-owns":c?"selectedContactsMenu":null,"aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},m.a.createElement(l.a,null,"more_horiz")),m.a.createElement(J.a,{id:"selectedContactsMenu",anchorEl:c,open:Boolean(c),onClose:i},m.a.createElement(V.a,null,m.a.createElement(K.a,{onClick:function(){var e;a((e=t,function(a,t){var n=t().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/remove-contacts",{contactIds:e}).then((function(e){return Promise.all([a({type:"[CONTACTS APP] REMOVE CONTACTS"})]).then((function(){return a(R(n))}))}))})),i()}},m.a.createElement(F.a,{className:"min-w-40"},m.a.createElement(l.a,null,"delete")),m.a.createElement(U.a,{primary:"Remove"})),m.a.createElement(K.a,{onClick:function(){var e;a((e=t,function(a,t){var n=t().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/set-contacts-starred",{contactIds:e}).then((function(e){return Promise.all([a({type:"[CONTACTS APP] SET CONTACTS STARRED "}),a(A())]).then((function(){return a(R(n))}))}))})),i()}},m.a.createElement(F.a,{className:"min-w-40"},m.a.createElement(l.a,null,"star")),m.a.createElement(U.a,{primary:"Starred"})),m.a.createElement(K.a,{onClick:function(){var e;a((e=t,function(a,t){var n=t().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/set-contacts-unstarred",{contactIds:e}).then((function(e){return Promise.all([a({type:"[CONTACTS APP] SET CONTACTS STARRED "}),a(A())]).then((function(){return a(R(n))}))}))})),i()}},m.a.createElement(F.a,{className:"min-w-40"},m.a.createElement(l.a,null,"star_border")),m.a.createElement(U.a,{primary:"Unstarred"})))))},$=t(12),X=t(212),Y=t(1594),Q=t(1647),Z=t(1648),ee=t(1591),ae=t(1798),te=t(1806),ne=t(1650),re=t(1676),ce=t(1592),le=t(1695),oe=t(2246),ie=t(2),se=t(2075),me=t.n(se),ue=t(1829),de=t.n(ue),pe=t(1828),fe=t.n(pe),be=t(2074),Ee=t.n(be),ve=t(57),ge=function(e){var a=Object(ve.a)(),t=e.count,n=e.page,r=e.rowsPerPage,c=e.onChangePage;return m.a.createElement("div",{className:"flex-shrink-0 px-12 overflow-hidden"},m.a.createElement(C.a,{onClick:function(e){c(e,0)},disabled:0===n,"aria-label":"first page"},"rtl"===a.direction?m.a.createElement(Ee.a,null):m.a.createElement(me.a,null)),m.a.createElement(C.a,{onClick:function(e){c(e,n-1)},disabled:0===n,"aria-label":"previous page"},"rtl"===a.direction?m.a.createElement(fe.a,null):m.a.createElement(de.a,null)),m.a.createElement(C.a,{onClick:function(e){c(e,n+1)},disabled:n>=Math.ceil(t/r)-1,"aria-label":"next page"},"rtl"===a.direction?m.a.createElement(de.a,null):m.a.createElement(fe.a,null)),m.a.createElement(C.a,{onClick:function(e){c(e,Math.max(0,Math.ceil(t/r)-1))},disabled:n>=Math.ceil(t/r)-1,"aria-label":"last page"},"rtl"===a.direction?m.a.createElement(me.a,null):m.a.createElement(Ee.a,null)))},he=m.a.forwardRef((function(e,a){var t=e.indeterminate,n=Object(X.a)(e,["indeterminate"]),r=m.a.useRef(),c=a||r;return m.a.useEffect((function(){c.current.indeterminate=t}),[c,t]),m.a.createElement(m.a.Fragment,null,m.a.createElement(Y.a,Object.assign({ref:c},n)))})),Ne=function(e){var a=e.columns,t=e.data,n=e.onRowClick,r=Object(oe.useTable)({columns:a,data:t,autoResetPage:!0},oe.useGlobalFilter,oe.useSortBy,oe.usePagination,oe.useRowSelect,(function(e){e.allColumns.push((function(e){return[{id:"selection",sortable:!1,Header:function(e){var a=e.getToggleAllRowsSelectedProps;return m.a.createElement("div",null,m.a.createElement(he,a()))},Cell:function(e){var a=e.row;return m.a.createElement("div",null,m.a.createElement(he,Object.assign({},a.getToggleRowSelectedProps(),{onClick:function(e){return e.stopPropagation()}})))}}].concat(Object($.a)(e))}))})),c=r.getTableProps,l=r.headerGroups,o=r.prepareRow,i=r.page,s=r.gotoPage,u=r.setPageSize,d=r.state,p=d.pageIndex,f=d.pageSize;return m.a.createElement(ae.a,{className:"min-h-full sm:border-1 sm:rounded-16"},m.a.createElement(Q.a,c(),m.a.createElement(ne.a,null,l.map((function(e){return m.a.createElement(ce.a,e.getHeaderGroupProps(),e.headers.map((function(e){return m.a.createElement(ee.a,Object.assign({className:"whitespace-no-wrap p-12"},e.sortable?e.getHeaderProps(e.getSortByToggleProps()):e.getHeaderProps()),e.render("Header"),e.sortable?m.a.createElement(le.a,{active:e.isSorted,direction:e.isSortedDesc?"desc":"asc"}):null)})))}))),m.a.createElement(Z.a,null,i.map((function(e,a){return o(e),m.a.createElement(ce.a,Object.assign({},e.getRowProps(),{onClick:function(a){return n(a,e)},className:"truncate cursor-pointer"}),e.cells.map((function(e){return m.a.createElement(ee.a,Object.assign({},e.getCellProps(),{className:Object(ie.default)("p-12",e.column.className)}),e.render("Cell"))})))}))),m.a.createElement(te.a,null,m.a.createElement(ce.a,null,m.a.createElement(re.a,{classes:{root:"overflow-hidden",spacer:"w-0 max-w-0"},rowsPerPageOptions:[5,10,25,{label:"All",value:t.length+1}],colSpan:5,count:t.length,rowsPerPage:f,page:p,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!1},onChangePage:function(e,a){s(a)},onChangeRowsPerPage:function(e){u(Number(e.target.value))},ActionsComponent:ge})))))};var Oe=function(e){var a=Object(u.c)(),t=Object(u.d)((function(e){return e.contactsApp.contacts.entities})),r=Object(u.d)((function(e){return e.contactsApp.contacts.searchText})),c=Object(u.d)((function(e){return e.contactsApp.user})),o=Object(s.useState)(null),i=Object(_.a)(o,2),d=i[0],p=i[1],f=m.a.useMemo((function(){return[{Header:function(e){var a=e.selectedFlatRows,t=a.map((function(e){return e.original.id}));return a.length>0&&m.a.createElement(q,{selectedContactIds:t})},accessor:"avatar",Cell:function(e){var a=e.row;return m.a.createElement(v.a,{className:"mx-8",alt:a.original.name,src:a.original.avatar})},className:"justify-center",width:64,sortable:!1},{Header:"First Name",accessor:"name",className:"font-bold",sortable:!0},{Header:"Last Name",accessor:"lastName",className:"font-bold",sortable:!0},{Header:"Company",accessor:"company",sortable:!0},{Header:"Job Title",accessor:"jobTitle",sortable:!0},{Header:"Email",accessor:"email",sortable:!0},{Header:"Phone",accessor:"phone",sortable:!0},{id:"action",width:128,sortable:!1,Cell:function(e){var t=e.row;return m.a.createElement("div",{className:"flex items-center"},m.a.createElement(C.a,{onClick:function(e){var n;e.stopPropagation(),a((n=t.original.id,function(e,a){var t=a().contactsApp.contacts.routeParams;return x.a.post("/api/contacts-app/toggle-starred-contact",{contactId:n}).then((function(a){return Promise.all([e({type:"[CONTACTS APP] TOGGLE STARRED CONTACT"}),e(A())]).then((function(){return e(R(t))}))}))}))}},c.starred&&c.starred.includes(t.original.id)?m.a.createElement(l.a,null,"star"):m.a.createElement(l.a,null,"star_border")),m.a.createElement(C.a,{onClick:function(e){e.stopPropagation(),a(k(t.original.id))}},m.a.createElement(l.a,null,"delete")))}}]}),[a,c.starred]);return Object(s.useEffect)((function(){t&&p(function(e,a){var t=Object.keys(e).map((function(a){return e[a]}));return 0===a.length?t:H.a.filterArrayByString(t,a)}(t,r))}),[t,r]),d?0===d.length?m.a.createElement("div",{className:"flex flex-1 items-center justify-center h-full"},m.a.createElement(T.a,{color:"textSecondary",variant:"h5"},"There are no contacts!")):m.a.createElement(n.a,{animation:"transition.slideUpIn",delay:300},m.a.createElement(Ne,{columns:f,data:d,onRowClick:function(e,t){t&&a({type:"[CONTACTS APP] OPEN EDIT CONTACT DIALOG",data:t.original})}})):null},Ce=t(121),Pe=t(1611),ye=t(1535),Te=t(1536),je=Object(o.a)((function(e){return{listItem:{color:"inherit!important",textDecoration:"none!important",height:40,width:"calc(100% - 16px)",borderRadius:"0 20px 20px 0",paddingLeft:24,paddingRight:12,"&.active":{backgroundColor:e.palette.secondary.main,color:"".concat(e.palette.secondary.contrastText,"!important"),pointerEvents:"none","& .list-item-icon":{color:"inherit"}},"& .list-item-icon":{marginRight:16}}}}));var xe=function(e){var a=Object(u.d)((function(e){return e.contactsApp.user})),t=je(e);return m.a.createElement("div",{className:"p-0 lg:p-24 lg:ltr:pr-4 lg:rtl:pl-4"},m.a.createElement(n.a,{animation:"transition.slideLeftIn",delay:200},m.a.createElement(W.a,{className:"rounded-0 shadow-none lg:rounded-8 lg:shadow-1"},m.a.createElement("div",{className:"p-24 flex items-center"},m.a.createElement(v.a,{alt:a.name,src:a.avatar}),m.a.createElement(T.a,{className:"mx-12"},a.name)),m.a.createElement(Pe.a,null),m.a.createElement(ye.a,null,m.a.createElement(Te.a,{button:!0,component:Ce.a,to:"/apps/contacts/all",activeClassName:"active",className:t.listItem},m.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"people"),m.a.createElement(U.a,{className:"truncate",primary:"All contacts",disableTypography:!0})),m.a.createElement(Te.a,{button:!0,component:Ce.a,to:"/apps/contacts/frequent",activeClassName:"active",className:t.listItem},m.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"restore"),m.a.createElement(U.a,{className:"truncate",primary:"Frequently contacted",disableTypography:!0})),m.a.createElement(Te.a,{button:!0,component:Ce.a,to:"/apps/contacts/starred",activeClassName:"active",className:t.listItem},m.a.createElement(l.a,{className:"list-item-icon text-16",color:"action"},"star"),m.a.createElement(U.a,{className:"truncate",primary:"Starred contacts",disableTypography:!0}))))))},we=t(79),Ae=t(8),Se={entities:null,searchText:"",routeParams:{},contactDialog:{type:"new",props:{open:!1},data:null}},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S:return Object(f.a)(Object(f.a)({},e),{},{entities:Ae.a.keyBy(a.payload,"id"),routeParams:a.routeParams});case I:return Object(f.a)(Object(f.a)({},e),{},{searchText:a.searchText});case"[CONTACTS APP] OPEN NEW CONTACT DIALOG":return Object(f.a)(Object(f.a)({},e),{},{contactDialog:{type:"new",props:{open:!0},data:null}});case"[CONTACTS APP] CLOSE NEW CONTACT DIALOG":return Object(f.a)(Object(f.a)({},e),{},{contactDialog:{type:"new",props:{open:!1},data:null}});case"[CONTACTS APP] OPEN EDIT CONTACT DIALOG":return Object(f.a)(Object(f.a)({},e),{},{contactDialog:{type:"edit",props:{open:!0},data:a.data}});case"[CONTACTS APP] CLOSE EDIT CONTACT DIALOG":return Object(f.a)(Object(f.a)({},e),{},{contactDialog:{type:"edit",props:{open:!1},data:null}});default:return e}},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case w:return a.payload;default:return e}},ke=Object(we.d)({contacts:Ie,user:Re}),Le=Object(o.a)({addButton:{position:"absolute",right:12,bottom:12,zIndex:99}});a.default=Object(i.a)("contactsApp",ke)((function(e){var a=Object(u.c)(),t=Le(e),o=Object(s.useRef)(null),i=Object(d.i)();return Object(p.b)((function(){a(R(i)),a(A())}),[a,i]),m.a.createElement(m.a.Fragment,null,m.a.createElement(r.a,{classes:{contentWrapper:"p-0 sm:p-24 pb-80 sm:pb-80 h-full",content:"flex flex-col h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136",wrapper:"min-h-0"},header:m.a.createElement(G,{pageLayout:o}),content:m.a.createElement(Oe,null),leftSidebarContent:m.a.createElement(xe,null),sidebarInner:!0,ref:o,innerScroll:!0}),m.a.createElement(n.a,{animation:"transition.expandIn",delay:300},m.a.createElement(c.a,{color:"primary","aria-label":"add",className:t.addButton,onClick:function(e){return a({type:"[CONTACTS APP] OPEN NEW CONTACT DIALOG"})}},m.a.createElement(l.a,null,"person_add"))),m.a.createElement(D,null))}))}}]);
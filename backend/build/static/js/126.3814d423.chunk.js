(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[126],{1545:function(e,a,t){"use strict";t.r(a);var n=t(518);t.d(a,"default",(function(){return n.a}))},1620:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default.memo(r.default.forwardRef((function(a,t){return r.default.createElement(c.default,(0,l.default)({ref:t},a),e)})));0;return t.muiName=c.default.muiName,t};var l=n(t(184)),r=n(t(0)),c=n(t(1545))},1740:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(1620)).default)(l.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");a.default=r},1741:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(1620)).default)(l.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");a.default=r},1801:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"a",(function(){return l})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return c})),t.d(a,"f",(function(){return i})),t.d(a,"e",(function(){return s}));var n=["CKD1","CKD2","CKD3","CKD4","CKD5","CKD6"],l=["Underweight (R63.6)","Ideal","Overweight (E66.3)","Obesity (E66.09)","Morbid obesity (E66.01)"];function r(e){return!!/^(((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([4-9]|[12][0-9]|3[0-2]))?)([,\s]+|$))*$/.test(e)}function c(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)}function i(e){return e>90?0:e>60?1:e>30?2:e>15?3:e>0?4:5}function s(e){return e<19?0:e<24?1:e<30?2:e<=40?3:4}},2037:function(e,a,t){"use strict";var n=t(22),l=t(44),r=t(8),c=t(1594),i=t(1581),s=t(1647),o=t(1648),m=t(1591),d=t(1676),u=t(1592),p=t(2),f=t(0),b=t.n(f),E=t(5),w=t(53),h=t(1629),v=t(817),g=t(1612),x=t(1588),N=t(538),y=t(1583),C=t(1534),_=t(1580),j=t(1650),O=t(1695),I=t(1587),S=t(1590),k=t(1599),P=t(1678),A=t(1670),F=t(1692),M=t(1679),B=[{id:"image",align:"left",disablePadding:!0,label:"",sort:!1},{id:"name",align:"left",disablePadding:!1,label:"Name",sort:!0},{id:"services",align:"left",disablePadding:!1,label:"Gateway",sort:!0},{id:"allowed_ips",align:"left",disablePadding:!1,label:"Allowed IPs",sort:!0},{id:"status",align:"right",disablePadding:!1,label:"Active",sort:!0}],z=Object(_.a)((function(e){return{actionsButtonWrapper:{background:e.palette.background.paper}}}));var R=function(e){var a=z(e),t=Object(f.useState)(null),l=Object(n.a)(t,2),r=l[0],s=l[1],o=Object(E.c)(),d=e.selectedAppIds,w=e.selectedServiceId;function _(){s(null)}var R=b.a.useState(!1),D=Object(n.a)(R,2),T=D[0],W=D[1],K=function(){W(!1)};return b.a.createElement(b.a.Fragment,null,b.a.createElement(j.a,null,b.a.createElement(u.a,{className:"h-64"},b.a.createElement(m.a,{padding:"none",className:"relative w-64 text-center"},b.a.createElement(c.a,{indeterminate:e.numSelected>0&&e.numSelected<e.rowCount,checked:e.numSelected>0&&e.numSelected===e.rowCount,onChange:e.onSelectAllClick}),e.numSelected>0&&b.a.createElement("div",{className:Object(p.default)("flex items-center justify-center absolute w-64 top-0 ltr:left-0 rtl:right-0 mx-56 h-64 z-10",a.actionsButtonWrapper)},b.a.createElement(v.a,{"aria-owns":r?"selectedAppsMenu":null,"aria-haspopup":"true",onClick:function(e){s(e.currentTarget)}},b.a.createElement(i.a,null,"more_horiz")),b.a.createElement(N.a,{id:"selectedAppsMenu",anchorEl:r,open:Boolean(r),onClose:_},b.a.createElement(C.a,null,b.a.createElement(y.a,{onClick:function(){_(),W(!0)}},b.a.createElement(g.a,{className:"min-w-40"},b.a.createElement(i.a,null,"delete")),b.a.createElement(x.a,{primary:"Remove"})))))),B.map((function(a){return b.a.createElement(m.a,{key:a.id,align:a.align,padding:a.disablePadding?"none":"default",sortDirection:e.order.id===a.id&&e.order.direction},a.sort&&b.a.createElement(I.a,{title:"Sort",placement:"right"===a.align?"bottom-end":"bottom-start",enterDelay:300},b.a.createElement(O.a,{active:e.order.id===a.id,direction:e.order.direction,onClick:(t=a.id,function(a){e.onRequestSort(a,t)})},a.label)));var t}),this))),b.a.createElement(k.a,{open:T,onClose:K,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},b.a.createElement(M.a,{id:"alert-dialog-title"},"Warning"),b.a.createElement(A.a,null,b.a.createElement(F.a,{id:"alert-dialog-description"},"Confirm to delete...")),b.a.createElement(P.a,null,b.a.createElement(S.a,{onClick:K},"Cancel"),b.a.createElement(S.a,{onClick:function(){o(h.Mb(d,w)),K(),e.setSelected([])},autoFocus:!0},"Confirm"))))};a.a=Object(w.j)((function(e){var a=Object(E.c)(),t=Object(E.d)((function(e){return e.accesscontrolApp.apps.data})),p=Object(E.d)((function(e){return e.accesscontrolApp.apps.searchText})),w=e.serviceId,v=Object(f.useState)([]),g=Object(n.a)(v,2),x=g[0],N=g[1],y=Object(f.useState)(t),C=Object(n.a)(y,2),_=C[0],j=C[1],O=Object(f.useState)(0),I=Object(n.a)(O,2),S=I[0],k=I[1],P=Object(f.useState)(10),A=Object(n.a)(P,2),F=A[0],M=A[1],B=Object(f.useState)({direction:"asc",id:null}),z=Object(n.a)(B,2),D=z[0],T=z[1];return Object(f.useEffect)((function(){a(h.ib(w))}),[a]),Object(f.useEffect)((function(){0!==p.length?(j(r.a.filter(t,(function(e){return e.name.toLowerCase().includes(p.toLowerCase())}))),k(0)):j(t)}),[t,p]),b.a.createElement("div",{className:"w-full flex flex-col"},b.a.createElement(l.a,{className:"flex-grow overflow-x-auto"},b.a.createElement(s.a,{className:"min-w-xl","aria-labelledby":"tableTitle"},b.a.createElement(R,{numSelected:x.length,order:D,onSelectAllClick:function(e){e.target.checked?N(_.map((function(e){return e.id}))):N([])},onRequestSort:function(e,a){var t=a,n="desc";D.id===a&&"desc"===D.direction&&(n="asc"),T({direction:n,id:t})},rowCount:_.length,selectedAppIds:x,selectedServiceId:w,setSelected:N}),b.a.createElement(o.a,null,r.a.orderBy(_,[function(e){switch(D.id){case"services":return e.service.name;default:return e[D.id]}}],[D.direction]).slice(S*F,S*F+F).map((function(a){var t=-1!==x.indexOf(a.id);return b.a.createElement(u.a,{className:"h-36 cursor-pointer",hover:!0,role:"checkbox","aria-checked":t,tabIndex:-1,key:a.id,selected:t,onClick:function(t){return n=a,void(w||e.history.push("/applications/".concat(n.id)));var n}},b.a.createElement(m.a,{className:"w-64 text-center",padding:"none"},b.a.createElement(c.a,{checked:t,onClick:function(e){return e.stopPropagation()},onChange:function(e){return function(e,a){var t=x.indexOf(a),n=[];-1===t?n=n.concat(x,a):0===t?n=n.concat(x.slice(1)):t===x.length-1?n=n.concat(x.slice(0,-1)):t>0&&(n=n.concat(x.slice(0,t),x.slice(t+1))),N(n)}(0,a.id)}})),b.a.createElement(m.a,{className:"w-52",component:"th",scope:"row",padding:"none"}),b.a.createElement(m.a,{component:"th",scope:"row"},a.name),b.a.createElement(m.a,{className:"truncate",component:"th",scope:"row"},a.service.name),b.a.createElement(m.a,{component:"th",scope:"row"},a.allowed_ips),b.a.createElement(m.a,{component:"th",scope:"row",align:"right"},"A"==a.status?b.a.createElement(i.a,{className:"text-green text-20"},"check_circle"):b.a.createElement(i.a,{className:"text-red text-20"},"remove_circle")))}))))),b.a.createElement(d.a,{className:"overflow-hidden",component:"div",count:_.length,rowsPerPage:F,page:S,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:function(e,a){k(a)},onChangeRowsPerPage:function(e){M(e.target.value)}}))}))},3389:function(e,a,t){"use strict";t.r(a);t(12);var n=t(6),l=t(22),r=t(70),c=t(533),i=t(536),s=t(1628),o=t(86),m=(t(29),t(8)),d=t(1590),u=t(243),p=t(1581),f=t(1593),b=t(1580),E=t(57),w=t(3238),h=t(3412),v=t(1589),g=t(229),x=t(211),N=(t(2),t(0)),y=t.n(N),C=t(5),_=t(53),j=t(21),O=t(1629),I=t(1688),S=t(818),k=t(819),P=t(820),A=t(1543),F=t(1583),M=t(817),B=t(1740),z=t.n(B),R=t(1741),D=t.n(R),T=t(2037),W=t(72),K=t(228),L=t(1647),Z=t(1648),q=t(1591),G=t(1650),$=t(1592),J=t(528),V=t(1599),X=t(1678),U=t(1670),Y=t(1692),H=t(1679),Q=t(1801),ee=t(49),ae=Object(b.a)((function(e){return{userImageFeaturedStar:{position:"absolute",top:0,right:0,color:u.a[400],opacity:0},userImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},userImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $userImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $userImageFeaturedStar":{opacity:1},"&:hover $userImageFeaturedStar":{opacity:1}}}}}));a.default=Object(x.a)("accesscontrolApp",I.a)((function(e){var a=Object(C.c)(),t=Object(C.d)((function(e){return e.accesscontrolApp.service})),u=Object(E.a)(),b=Object(C.d)((function(e){return e.auth.user})),x=(ae(e),Object(N.useState)(0)),I=Object(l.a)(x,2),B=I[0],R=I[1],te=Object(o.c)(null),ne=te.form,le=te.handleChange,re=te.setForm,ce=Object(_.i)(),ie=Object(N.useState)(!1),se=Object(l.a)(ie,2),oe=se[0],me=se[1],de=Object(N.useState)([]),ue=Object(l.a)(de,2),pe=ue[0],fe=ue[1],be=Object(C.d)((function(e){return e.accesscontrolApp.settings})),Ee=Object(N.useState)(!1),we=Object(l.a)(Ee,2),he=we[0],ve=we[1],ge=Object(N.useState)(!1),xe=Object(l.a)(ge,2),Ne=xe[0],ye=xe[1],Ce=Object(N.useState)(!1),_e=Object(l.a)(Ce,2),je=_e[0],Oe=_e[1],Ie=function(){Oe(!1)},Se=Object(N.useState)(!1),ke=Object(l.a)(Se,2),Pe=ke[0],Ae=ke[1],Fe=function(){Ae(!1)};function Me(){return!(t.data.id===parseInt(t.data.id,10))}Object(o.b)((function(){!function(){var e=ce.serviceId;a("new"===e?O.Jb():O.xb(ce)),a(O.zb(b.domain_id))}()}),[a,ce]),Object(N.useEffect)((function(){(t.data&&!ne||t.data&&ne&&t.data.id!=ne.id)&&(re(t.data),t.data.group_ids&&fe(t.data.group_ids.map((function(e){var a=t.data.group_list.filter((function(a){return a.id==e}));if(a&&a.length)return{value:e,label:a[0].name}}))))}),[ne,t.data,re]),Object(N.useEffect)((function(){be&&be.data&&ve(!be.data.password_generate),be&&be.data&&ye(be.data.email_option&&"disable"!=be.data.email_option)}),[be]);var Be=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=parseFloat(e);if(NaN==t||0===t)return"0 Bytes";var n=1024,l=a<0?0:a,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(t)/Math.log(n));return parseFloat((t/Math.pow(n,c)).toFixed(l))+" "+r[c]};return(!t.data||t.data&&ce.serviceId!=t.data.id)&&"new"!==ce.serviceId?y.a.createElement(i.a,null):y.a.createElement(s.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:ne&&y.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between max-w-2xl"},y.a.createElement("div",{className:"flex flex-col items-start max-w-full"},y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(g.a,{className:"normal-case flex items-center sm:mb-12",component:j.a,role:"button",to:"/services",color:"inherit"},y.a.createElement(p.a,{className:"text-20"},"ltr"===u.direction?"arrow_back":"arrow_forward"),y.a.createElement("span",{className:"mx-4"},"Gateways"))),y.a.createElement("div",{className:"flex items-center max-w-full"},y.a.createElement(r.a,{animation:"transition.expandIn",delay:300},y.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/logos/gateways.png",alt:ne.name})),y.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},y.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(g.a,{className:"text-16 sm:text-20 truncate"},ne.name?ne.name:"New Gateway")),y.a.createElement(r.a,{animation:"transition.slideLeftIn",delay:300},y.a.createElement(g.a,{variant:"caption"},"Gateway Detail"))))),y.a.createElement("div",{className:"flex min-w-0 mx-8 sm:mc-16"},y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(d.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!("superadmin"==b.role?ne.name&&ne.name.length>0&&ne.domain_id>0&&!m.a.isEqual(t.data,ne):ne.name&&ne.name.length>0&&!m.a.isEqual(t.data,ne)),onClick:function(){!ne.email||Object(Q.b)(ne.email)?Promise.all([a(O.cc(ne))]).then((function(){return e.history.push("/services")})):a(Object(ee.G)({message:"Email is invalid!"}))}},"Save")),y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(d.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"primary",disabled:Me(),onClick:function(){return a(O.bb(ne.id,ne.name))}},"Download Json")),Ne&&y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(d.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"primary",disabled:Me(),onClick:function(){return Oe(!0)}},"Email Json")),y.a.createElement(r.a,{animation:"transition.slideRightIn",delay:300},y.a.createElement(d.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"primary",disabled:"new"===ce.serviceId,onClick:function(){return Ae(!0)}},"Remove")))),contentToolbar:y.a.createElement(h.a,{value:B,onChange:function(e,a){R(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},y.a.createElement(w.a,{className:"h-64 normal-case",label:"Basic Info"}),y.a.createElement(w.a,{className:"h-64 normal-case",label:"Mesh Networks"}),"new"!=ce.serviceId&&y.a.createElement(w.a,{className:"h-64 normal-case",label:"Parameters"}),"new"!=ce.serviceId&&y.a.createElement(w.a,{className:"h-64 normal-case",label:"Applications"}),"new"!=ce.serviceId&&y.a.createElement(w.a,{className:"h-64 normal-case",label:"Activity"})),content:ne&&y.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===B&&y.a.createElement("div",null,y.a.createElement(v.a,{className:"mt-8 flex w-full mb-16 sm:w-320 mx-16",error:""===ne.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:ne.name,onChange:le,variant:"outlined",fullWidth:!0,autoComplete:"off"}),y.a.createElement(v.a,{className:"mt-8 flex w-full mb-16 sm:w-320 mx-16",label:"Email",autoFocus:!0,id:"email",name:"email",value:ne.email?ne.email:"",onChange:le,variant:"outlined",fullWidth:!0,autoComplete:"off"}),he&&y.a.createElement(S.a,{sx:{m:1,width:"25ch"},className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},y.a.createElement(k.a,{htmlFor:"outlined-adornment-password"},"Password"),y.a.createElement(A.a,{id:"outlined-adornment-password",type:oe?"text":"password",value:ne.password,name:"password",onChange:le,endAdornment:y.a.createElement(f.a,{position:"end"},y.a.createElement(M.a,{"aria-label":"toggle password visibility",onClick:function(){me(!oe)},edge:"end"},oe?y.a.createElement(D.a,null):y.a.createElement(z.a,null))),label:"Password",autoComplete:"off"})),"superadmin"==b.role&&y.a.createElement(S.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},y.a.createElement(k.a,{htmlFor:"category-label-placeholder",required:!0}," Domain "),y.a.createElement(P.a,{value:ne.domain_id?ne.domain_id:0,name:"domain_id",onChange:le,input:y.a.createElement(A.a,{labelWidth:9*"domain_id".length,name:"domain_id",id:"domain_id-label-placeholder"}),required:!0},ne.domain_list&&ne.domain_list.map((function(e){return y.a.createElement(F.a,{value:e.id,key:e.id},e.name)})))),"new"!=ce.serviceId&&y.a.createElement(S.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},y.a.createElement(k.a,{htmlFor:"category-label-placeholder"}," Status "),y.a.createElement(P.a,{value:ne.status,name:"status",onChange:le,input:y.a.createElement(A.a,{labelWidth:9*"status".length,name:"status",id:"status-label-placeholder"})},W.b.map((function(e){return y.a.createElement(F.a,{disabled:"D"==e.value,value:e.value,key:e.id},e.label)}))))),1===B&&y.a.createElement("div",null,y.a.createElement(c.a,{className:"w-full my-16 sm:w-320 mx-16",value:pe,name:"groups",onChange:function(e){fe(e),re(m.a.set(Object(n.a)({},ne),"group_ids",e.map((function(e){return e.value}))))},placeholder:"Select multiple mesh-networks",textFieldProps:{label:"Mesh Networks",InputLabelProps:{shrink:!0},variant:"outlined"},options:ne.group_list&&ne.group_list.map((function(e){return{value:e.id,label:e.name}})),isMulti:!0,isValidNewOption:function(){return!1},promptTextCreator:function(){return!1}})),2===B&&"new"!=ce.serviceId&&y.a.createElement("div",null,y.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",label:"WG Key",autoFocus:!0,id:"wg_key",name:"wg_key",value:ne.wg_key,onChange:le,variant:"outlined",fullWidth:!0,disabled:!0}),y.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",label:"Public IP",autoFocus:!0,id:"public_ip",name:"public_ip",value:ne.public_ip,onChange:le,variant:"outlined",fullWidth:!0,disabled:!0}),y.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",label:"Virtual IP",autoFocus:!0,id:"virtual_ip",name:"virtual_ip",value:ne.virtual_ip,onChange:le,variant:"outlined",fullWidth:!0,disabled:!0}),y.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",label:"Local IP",autoFocus:!0,id:"local_ip",name:"local_ip",value:ne.local_ip,onChange:le,variant:"outlined",fullWidth:!0,disabled:!0})),3===B&&"new"!=ce.serviceId&&y.a.createElement("div",null,y.a.createElement(g.a,{className:"normal-case flex items-center alignRight sm:mb-12",component:j.a,role:"button",to:"/applications",color:"inherit",align:"right"},y.a.createElement("span",{className:"flex",style:{textDecoration:"underline",marginLeft:"auto"}},"Manage Applications"),y.a.createElement(p.a,{className:"text-20"},"arrow_forward")),y.a.createElement(T.a,{serviceId:ce.serviceId})),4===B&&"new"!=ce.serviceId&&y.a.createElement("div",null,y.a.createElement(K.a,{className:"w-full rounded-8 shadow-none border-1"},y.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},y.a.createElement(g.a,{className:"text-16"},"Sessions"),y.a.createElement(g.a,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},"most recent 5 sessions")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement(L.a,{className:"w-full min-w-full",size:"small"},y.a.createElement(G.a,null,y.a.createElement($.a,null,y.a.createElement(q.a,{className:"whitespace-no-wrap"},"Start Time"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"End Time"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"Status"))),y.a.createElement(Z.a,null,ne.sessions_recent&&ne.sessions_recent.map((function(e){return y.a.createElement($.a,{key:e.id},y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},e.start_time),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},e.end_time),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},"A"==e.status?y.a.createElement(p.a,{className:"text-green text-20"},"check_circle"):y.a.createElement(p.a,{className:"text-red text-20"},"remove_circle")))})))))),y.a.createElement(J.a,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},y.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/2 p-12",style:{display:"flex",alignSelf:"center",justifyContent:"center"}},y.a.createElement(K.a,{className:"w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1"},y.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"}),y.a.createElement("div",{className:"text-center pt-8 pb-12"},y.a.createElement(g.a,{className:"text-36 leading-none text-red"},ne.bytes_total&&Be(ne.bytes_total.total_rx)," "),y.a.createElement(g.a,{className:"text-16",color:"textSecondary"},"RX Bytes")))),y.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/2 p-12",style:{display:"flex",alignSelf:"center",justifyContent:"center"}},y.a.createElement(K.a,{className:"w-full sm:w-1/2 md:w-1/2 p-12 rounded-8 shadow-none border-1"},y.a.createElement("div",{className:"flex items-center justify-between px-4 pt-4"}),y.a.createElement("div",{className:"text-center pt-8 pb-12"},y.a.createElement(g.a,{className:"text-36 leading-none text-blue"},ne.bytes_total&&Be(ne.bytes_total.total_tx)," "),y.a.createElement(g.a,{className:"text-16",color:"textSecondary"},"TX Bytes"))))),y.a.createElement(K.a,{className:"w-full rounded-8 shadow-none border-1"},y.a.createElement("div",{className:"flex items-center justify-between px-16 h-64 border-b-1"},y.a.createElement(g.a,{className:"text-16"},"Tunnels"),y.a.createElement(g.a,{className:"text-11 font-500 rounded-4 text-white bg-blue px-8 py-4"},"Most recent 5 tunnels")),y.a.createElement("div",{className:"table-responsive"},y.a.createElement(L.a,{className:"w-full min-w-full",size:"small"},y.a.createElement(G.a,null,y.a.createElement($.a,null,y.a.createElement(q.a,{className:"whitespace-no-wrap"},"Peer"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"RX"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"TX"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"Start Time"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"End Time"),y.a.createElement(q.a,{className:"whitespace-no-wrap"},"Status"))),y.a.createElement(Z.a,null,ne.enclave_list&&ne.enclave_list.map((function(e){return y.a.createElement($.a,{key:e.id},y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},e.clientuser.name),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},Be(e.responder_rxbytes)),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},Be(e.responder_txbytes)),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},e.start_time),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},e.end_time),y.a.createElement(q.a,{component:"th",scope:"row",className:"truncate"},"A"==e.status?y.a.createElement(p.a,{className:"text-green text-20"},"check_circle"):y.a.createElement(p.a,{className:"text-red text-20"},"remove_circle")))}))))))),!Me()&&t&&y.a.createElement(V.a,{open:je,onClose:Ie,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},y.a.createElement(H.a,{id:"alert-dialog-title"},"Confirm"),y.a.createElement(U.a,null,y.a.createElement(Y.a,{id:"alert-dialog-description"},"Confirm to send config to ",t.data.email?t.data.email:t.data.name+"@"+t.data.domain.name," ...")),y.a.createElement(X.a,null,y.a.createElement(d.a,{onClick:Ie},"Cancel"),y.a.createElement(d.a,{onClick:function(){a(O.db(ne.id)),Ie()},autoFocus:!0},"Confirm"))),y.a.createElement(V.a,{open:Pe,onClose:Fe,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},y.a.createElement(H.a,{id:"alert-dialog-title"},"Warning"),y.a.createElement(U.a,null,y.a.createElement(Y.a,{id:"alert-dialog-description"},"Confirm to delete...")),y.a.createElement(X.a,null,y.a.createElement(d.a,{onClick:Fe},"Cancel"),y.a.createElement(d.a,{onClick:function(){Promise.all([a(O.Rb([ne.id]))]).then((function(){return e.history.push("/services")})),Fe()},autoFocus:!0},"Confirm")))),innerScroll:!0})}))}}]);
(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[111],{1656:function(e,a,t){e.exports=t(809)},1659:function(e,a,t){"use strict";function n(e,a,t,n,i,r,l){try{var o=e[r](l),c=o.value}catch(s){return void t(s)}o.done?a(c):Promise.resolve(c).then(n,i)}function i(e){return function(){var a=this,t=arguments;return new Promise((function(i,r){var l=e.apply(a,t);function o(e){n(l,i,r,o,c,"next",e)}function c(e){n(l,i,r,o,c,"throw",e)}o(void 0)}))}}t.d(a,"a",(function(){return i}))},1670:function(e,a,t){"use strict";var n=t(1),i=t(4),r=t(0),l=(t(3),t(2)),o=t(9),c=r.forwardRef((function(e,a){var t=e.classes,o=e.className,c=e.dividers,s=void 0!==c&&c,d=Object(i.a)(e,["classes","className","dividers"]);return r.createElement("div",Object(n.a)({className:Object(l.default)(t.root,o,s&&t.dividers),ref:a},d))}));a.a=Object(o.a)((function(e){return{root:{flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"8px 24px","&:first-child":{paddingTop:20}},dividers:{padding:"16px 24px",borderTop:"1px solid ".concat(e.palette.divider),borderBottom:"1px solid ".concat(e.palette.divider)}}}),{name:"MuiDialogContent"})(c)},1678:function(e,a,t){"use strict";var n=t(1),i=t(4),r=t(0),l=(t(3),t(2)),o=t(9),c=r.forwardRef((function(e,a){var t=e.disableSpacing,o=void 0!==t&&t,c=e.classes,s=e.className,d=Object(i.a)(e,["disableSpacing","classes","className"]);return r.createElement("div",Object(n.a)({className:Object(l.default)(c.root,s,!o&&c.spacing),ref:a},d))}));a.a=Object(o.a)({root:{display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},spacing:{"& > :not(:first-child)":{marginLeft:8}}},{name:"MuiDialogActions"})(c)},1679:function(e,a,t){"use strict";var n=t(1),i=t(4),r=t(0),l=(t(3),t(2)),o=t(9),c=t(229),s=r.forwardRef((function(e,a){var t=e.children,o=e.classes,s=e.className,d=e.disableTypography,m=void 0!==d&&d,u=Object(i.a)(e,["children","classes","className","disableTypography"]);return r.createElement("div",Object(n.a)({className:Object(l.default)(o.root,s),ref:a},u),m?t:r.createElement(c.a,{component:"h2",variant:"h6"},t))}));a.a=Object(o.a)({root:{margin:0,padding:"16px 24px",flex:"0 0 auto"}},{name:"MuiDialogTitle"})(s)},1692:function(e,a,t){"use strict";var n=t(1),i=t(0),r=(t(3),t(9)),l=t(229),o=i.forwardRef((function(e,a){return i.createElement(l.a,Object(n.a)({component:"p",variant:"body1",color:"textSecondary",ref:a},e))}));a.a=Object(r.a)({root:{marginBottom:12}},{name:"MuiDialogContentText"})(o)},1694:function(e,a){e.exports=function(e,a,t,n){var i=new Blob("undefined"!==typeof n?[n,e]:[e],{type:t||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(i,a);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(i):window.webkitURL.createObjectURL(i),l=document.createElement("a");l.style.display="none",l.href=r,l.setAttribute("download",a),"undefined"===typeof l.download&&l.setAttribute("target","_blank"),document.body.appendChild(l),l.click(),setTimeout((function(){document.body.removeChild(l),window.URL.revokeObjectURL(r)}),200)}}},1801:function(e,a,t){"use strict";t.d(a,"d",(function(){return n})),t.d(a,"a",(function(){return i})),t.d(a,"c",(function(){return r})),t.d(a,"b",(function(){return l})),t.d(a,"f",(function(){return o})),t.d(a,"e",(function(){return c}));var n=["CKD1","CKD2","CKD3","CKD4","CKD5","CKD6"],i=["Underweight (R63.6)","Ideal","Overweight (E66.3)","Obesity (E66.09)","Morbid obesity (E66.01)"];function r(e){return!!/^(((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([4-9]|[12][0-9]|3[0-2]))?)([,\s]+|$))*$/.test(e)}function l(e){return!!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)}function o(e){return e>90?0:e>60?1:e>30?2:e>15?3:e>0?4:5}function c(e){return e<19?0:e<24?1:e<30?2:e<=40?3:4}},3390:function(e,a,t){"use strict";t.r(a);t(12),t(6);var n=t(22),i=t(70),r=(t(533),t(536)),l=t(1628),o=t(86),c=(t(29),t(8)),s=t(1590),d=t(243),m=t(1581),u=t(1580),p=t(57),f=t(3238),b=t(3412),v=t(1589),w=t(229),h=t(211),g=(t(2),t(0)),E=t.n(g),x=t(5),y=t(53),O=t(21),j=t(1629),N=t(1688),C=t(818),I=t(819),_=t(820),A=t(1543),R=t(1583),S=t(72),D=t(1801),k=t(49),F=t(1599),L=t(1678),U=t(1670),T=t(1692),P=t(1679),z=Object(u.a)((function(e){return{userImageFeaturedStar:{position:"absolute",top:0,right:0,color:d.a[400],opacity:0},userImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},userImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $userImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $userImageFeaturedStar":{opacity:1},"&:hover $userImageFeaturedStar":{opacity:1}}}}}));a.default=Object(h.a)("accesscontrolApp",N.a)((function(e){var a=Object(x.c)(),t=Object(x.d)((function(e){return e.accesscontrolApp.app})),d=Object(p.a)(),u=(z(e),Object(g.useState)(0)),h=Object(n.a)(u,2),N=h[0],B=h[1],Z=Object(o.c)(null),$=Z.form,K=Z.handleChange,M=Z.setForm,W=Object(y.i)();Object(o.b)((function(){!function(){var e=W.appId;a("new"===e?j.Db():j.hb(W))}()}),[a,W]),Object(g.useEffect)((function(){(t.data&&!$||t.data&&$&&t.data.id!=$.id)&&M(t.data)}),[$,t.data,M]);var q=Object(g.useState)(!1),G=Object(n.a)(q,2),J=G[0],Y=G[1],H=function(){Y(!1)};return(!t.data||t.data&&W.appId!=t.data.id)&&"new"!==W.appId?E.a.createElement(r.a,null):E.a.createElement(l.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:$&&E.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between max-w-2xl"},E.a.createElement("div",{className:"flex flex-col items-start max-w-full"},E.a.createElement(i.a,{animation:"transition.slideRightIn",delay:300},E.a.createElement(w.a,{className:"normal-case flex items-center sm:mb-12",component:O.a,role:"button",to:"/applications",color:"inherit"},E.a.createElement(m.a,{className:"text-20"},"ltr"===d.direction?"arrow_back":"arrow_forward"),E.a.createElement("span",{className:"mx-4"},"Applications"))),E.a.createElement("div",{className:"flex items-center max-w-full"},E.a.createElement(i.a,{animation:"transition.expandIn",delay:300},E.a.createElement("img",{className:"w-32 sm:w-48 rounded",src:"assets/images/logos/applications.png",alt:"Applications"})),E.a.createElement("div",{className:"flex flex-col min-w-0 mx-8 sm:mc-16"},E.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},E.a.createElement(w.a,{className:"text-16 sm:text-20 truncate"},$.name?$.name:"New Application")),E.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},E.a.createElement(w.a,{variant:"caption"},"Application Detail"))))),E.a.createElement("div",{className:"flex min-w-0 mx-8 sm:mc-16"},E.a.createElement(i.a,{animation:"transition.slideRightIn",delay:300},E.a.createElement(s.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!($&&$.name&&$.name.length>0&&$.allowed_ips&&$.service_id>0&&!c.a.isEqual(t.data,$)),onClick:function(){!$.allowed_ips||Object(D.c)($.allowed_ips)?Promise.all([a(j.Ub($))]).then((function(){return e.history.push("/applications")})):a(Object(k.G)({message:"IP Address is incorrect!"}))}},"Save")),E.a.createElement(i.a,{animation:"transition.slideRightIn",delay:300},E.a.createElement(s.a,{className:"mx-8 whitespace-no-wrap normal-case",variant:"contained",color:"primary",disabled:"new"===W.appId,onClick:function(){return Y(!0)}},"Remove")))),contentToolbar:E.a.createElement(b.a,{value:N,onChange:function(e,a){B(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},E.a.createElement(f.a,{className:"h-64 normal-case",label:"Basic Info"})),content:$&&E.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===N&&E.a.createElement("div",null,E.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",error:""===$.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:$.name,onChange:K,variant:"outlined",fullWidth:!0}),E.a.createElement(v.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",error:""===$.allowed_ips,required:!0,label:"Allowed IPs",autoFocus:!0,id:"allowed_ips",name:"allowed_ips",value:$.allowed_ips,onChange:K,variant:"outlined",fullWidth:!0}),E.a.createElement(C.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},E.a.createElement(I.a,{htmlFor:"category-label-placeholder",required:!0}," Gateway "),E.a.createElement(_.a,{value:$.service_id,name:"service_id",onChange:K,input:E.a.createElement(A.a,{labelWidth:9*"service_id".length,name:"service_id",id:"service_id-label-placeholder"}),required:!0},$.service_list&&$.service_list.map((function(e){return E.a.createElement(R.a,{value:e.id,key:e.id},e.name)})))),"new"!=W.appId&&E.a.createElement(C.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},E.a.createElement(I.a,{htmlFor:"category-label-placeholder"}," Status "),E.a.createElement(_.a,{value:$.status,name:"status",onChange:K,input:E.a.createElement(A.a,{labelWidth:9*"status".length,name:"status",id:"status-label-placeholder"})},S.b.map((function(e){return E.a.createElement(R.a,{disabled:"D"==e.value,value:e.value,key:e.id},e.label)}))))),1===N&&E.a.createElement("div",null),E.a.createElement(F.a,{open:J,onClose:H,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},E.a.createElement(P.a,{id:"alert-dialog-title"},"Warning"),E.a.createElement(U.a,null,E.a.createElement(T.a,{id:"alert-dialog-description"},"Confirm to delete...")),E.a.createElement(L.a,null,E.a.createElement(s.a,{onClick:H},"Cancel"),E.a.createElement(s.a,{onClick:function(){Promise.all([a(j.Mb([$.id]))]).then((function(){return e.history.push("/applications")})),H()},autoFocus:!0},"Confirm")))),innerScroll:!0})}))}}]);
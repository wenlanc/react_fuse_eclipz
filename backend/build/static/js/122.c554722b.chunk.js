(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[122],{1545:function(e,a,t){"use strict";t.r(a);var n=t(518);t.d(a,"default",(function(){return n.a}))},1620:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){var t=r.default.memo(r.default.forwardRef((function(a,t){return r.default.createElement(o.default,(0,l.default)({ref:t},a),e)})));0;return t.muiName=o.default.muiName,t};var l=n(t(184)),r=n(t(0)),o=n(t(1545))},1656:function(e,a,t){e.exports=t(809)},1659:function(e,a,t){"use strict";function n(e,a,t,n,l,r,o){try{var i=e[r](o),c=i.value}catch(s){return void t(s)}i.done?a(c):Promise.resolve(c).then(n,l)}function l(e){return function(){var a=this,t=arguments;return new Promise((function(l,r){var o=e.apply(a,t);function i(e){n(o,l,r,i,c,"next",e)}function c(e){n(o,l,r,i,c,"throw",e)}i(void 0)}))}}t.d(a,"a",(function(){return l}))},1694:function(e,a){e.exports=function(e,a,t,n){var l=new Blob("undefined"!==typeof n?[n,e]:[e],{type:t||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(l,a);else{var r=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(l):window.webkitURL.createObjectURL(l),o=document.createElement("a");o.style.display="none",o.href=r,o.setAttribute("download",a),"undefined"===typeof o.download&&o.setAttribute("target","_blank"),document.body.appendChild(o),o.click(),setTimeout((function(){document.body.removeChild(o),window.URL.revokeObjectURL(r)}),200)}}},1740:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(1620)).default)(l.default.createElement("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility");a.default=r},1741:function(e,a,t){"use strict";var n=t(798);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(0)),r=(0,n(t(1620)).default)(l.default.createElement("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff");a.default=r},3393:function(e,a,t){"use strict";t.r(a);var n=t(22),l=t(70),r=(t(533),t(536)),o=t(1628),i=t(86),c=(t(29),t(8)),s=t(1590),m=t(243),d=t(1593),u=t(1580),f=t(57),p=t(3238),b=t(3412),w=t(1589),E=t(229),v=t(211),h=(t(2),t(0)),x=t.n(h),y=t(5),g=t(53),O=t(1629),j=t(1688),N=t(818),C=t(819),S=t(1543),_=t(817),F=t(1740),R=t.n(F),P=t(1741),k=t.n(P),A=t(1594),I=t(1585),U=t(228),L=t(528),M=t(820),q=t(1583),z=(t(48),t(72),t(1584)),B=t(1537),D=t(1616),T=t(1538),Q=Object(u.a)((function(e){return{productImageFeaturedStar:{position:"absolute",top:0,right:0,color:m.a[400],opacity:0},productImageUpload:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut},productImageItem:{transitionProperty:"box-shadow",transitionDuration:e.transitions.duration.short,transitionTimingFunction:e.transitions.easing.easeInOut,"&:hover":{"& $productImageFeaturedStar":{opacity:.8}},"&.featured":{pointerEvents:"none",boxShadow:e.shadows[3],"& $productImageFeaturedStar":{opacity:1},"&:hover $productImageFeaturedStar":{opacity:1}}}}}));a.default=Object(v.a)("accesscontrolApp",j.a)((function(e){var a=Object(y.c)(),t=Object(y.d)((function(e){return e.accesscontrolApp.profiles})),m=Object(y.d)((function(e){return e.accesscontrolApp.profile2fa})),u=(Object(f.a)(),Q(e),Object(h.useState)(0)),v=Object(n.a)(u,2),j=v[0],F=v[1],P=Object(i.c)(null),W=P.form,$=P.handleChange,J=P.setForm,V=Object(g.i)();Object(i.b)((function(){a(O.wb())}),[a,V]);var G=Object(h.useState)(!1),H=Object(n.a)(G,2),K=H[0],X=H[1],Y=Object(h.useState)(!1),Z=Object(n.a)(Y,2),ee=Z[0],ae=Z[1],te=Object(h.useState)(!1),ne=Object(n.a)(te,2),le=ne[0],re=ne[1];Object(h.useEffect)((function(){t.data&&J(t.data)}),[t.data,J]);var oe=Object(h.useState)(!(!m.data||!m.data.is2fa)&&m.data.is2fa),ie=Object(n.a)(oe,2),ce=ie[0],se=ie[1],me=Object(h.useState)(!1),de=Object(n.a)(me,2),ue=de[0],fe=de[1],pe=Object(h.useState)(null),be=Object(n.a)(pe,2),we=(be[0],be[1]);function Ee(){a(2==j?O.ac({is2fa:ce,sendEmail2FA:ue}):O.bc(W))}return Object(h.useEffect)((function(){m.data&&(console.log(m.data),we(m.data),se(m.data.is2fa))}),[m.data]),t.data?x.a.createElement(o.a,{classes:{toolbar:"p-0",header:"min-h-72 h-72 sm:h-136 sm:min-h-136"},header:W&&x.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},x.a.createElement("div",{className:"flex flex-col items-start max-w-full"},x.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},x.a.createElement(E.a,{className:"normal-case flex items-center sm:mb-12",color:"inherit"},x.a.createElement("span",{className:"mx-2"},"Profile")))),2!=j?x.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},x.a.createElement(s.a,{className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:!!c.a.isEqual(t.data,W),onClick:function(){return Ee()}},"Save")):x.a.createElement(l.a,{animation:"transition.slideRightIn",delay:300},x.a.createElement(s.a,{className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",disabled:m.data&&m.data.is2fa==ce,onClick:function(){return Ee()}},"Save"))),contentToolbar:x.a.createElement(b.a,{value:j,onChange:function(e,a){F(a)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto",classes:{root:"w-full h-64"}},x.a.createElement(p.a,{className:"h-64 normal-case",label:"Profile"}),x.a.createElement(p.a,{className:"h-64 normal-case",label:"Authentication"}),x.a.createElement(p.a,{className:"h-64 normal-case",label:"2FA"})),content:x.a.createElement(x.a.Fragment,null,W&&x.a.createElement("div",{className:"p-16 sm:p-24 max-w-2xl"},0===j&&x.a.createElement("div",{className:"p-12"},x.a.createElement(L.a,{className:"flex flex-wrap",enter:{animation:"transition.slideUpBigIn"}},x.a.createElement("div",{className:"widget flex w-full sm:w-1/2 md:w-1/2 p-12",style:{display:"flex",justifyContent:"center"}},x.a.createElement(U.a,{className:"w-full p-12 rounded-8 shadow-none 1border-1"},x.a.createElement(w.a,{className:"mt-8 mb-16 sm:w-320 mx-16",error:""===W.name,required:!0,label:"Name",autoFocus:!0,id:"name",name:"name",value:W.name,readOnly:!0,variant:"outlined",fullWidth:!0,autoComplete:"off"}),x.a.createElement(N.a,{className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},x.a.createElement(C.a,{htmlFor:"domain-label-placeholder"}," Domain "),x.a.createElement(M.a,{value:W.domain_id,name:"domain_id",readOnly:!0,input:x.a.createElement(S.a,{labelWidth:9*"domain_id".length,name:"domain_id",id:"domain_id-label-placeholder"}),required:!0},W.domain_list&&W.domain_list.map((function(e,a){return x.a.createElement(q.a,{value:e.id,key:a},e.name)})))),x.a.createElement(w.a,{className:"mt-8 mb-16 sm:w-320 mx-16",error:""===W.email,required:!0,label:"Email",autoFocus:!0,id:"email",name:"email",value:W.email?W.email:"",readOnly:!0,onChange:$,variant:"outlined",fullWidth:!0,autoComplete:"off"}))))),1===j&&x.a.createElement("div",null,x.a.createElement(N.a,{sx:{m:1,width:"25ch"},className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},x.a.createElement(C.a,{htmlFor:"outlined-adornment-old-password"},"Old Password"),x.a.createElement(S.a,{id:"outlined-adornment-old-password",type:ee?"text":"password",value:W.old_password?W.old_password:"",name:"old_password",onChange:$,endAdornment:x.a.createElement(d.a,{position:"end"},x.a.createElement(_.a,{"aria-label":"toggle old password visibility",onClick:function(){ae(!ee)},edge:"end"},ee?x.a.createElement(k.a,null):x.a.createElement(R.a,null))),label:"Old Password",autoComplete:"off"})),x.a.createElement(N.a,{sx:{m:1,width:"25ch"},className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},x.a.createElement(C.a,{htmlFor:"outlined-adornment-password"},"New Password"),x.a.createElement(S.a,{id:"outlined-adornment-password",type:K?"text":"password",value:W.password?W.password:"",name:"password",onChange:$,endAdornment:x.a.createElement(d.a,{position:"end"},x.a.createElement(_.a,{"aria-label":"toggle password visibility",onClick:function(){X(!K)},edge:"end"},K?x.a.createElement(k.a,null):x.a.createElement(R.a,null))),label:"Password",autoComplete:"off"})),x.a.createElement(N.a,{sx:{m:1,width:"25ch"},className:"mt-8 mb-16 flex w-full sm:w-320 mx-16",variant:"outlined"},x.a.createElement(C.a,{htmlFor:"outlined-adornment-confirm-password"},"Confirm Password"),x.a.createElement(S.a,{id:"outlined-adornment-confirm-password",type:le?"text":"password",value:W.confirm_password?W.confirm_password:"",name:"confirm_password",onChange:$,endAdornment:x.a.createElement(d.a,{position:"end"},x.a.createElement(_.a,{"aria-label":"toggle confirm password visibility",onClick:function(){re(!le)},edge:"end"},le?x.a.createElement(k.a,null):x.a.createElement(R.a,null))),label:"Confirm Password",autoComplete:"off"}))),2===j&&x.a.createElement("div",null,x.a.createElement(N.a,null,x.a.createElement(z.a,{"aria-labelledby":"demo-radio-buttons-group-label",value:ce,name:"is2fa",onChange:function(e,a){se("true"==a)}},x.a.createElement(N.a,{variant:"outlined"},x.a.createElement(B.a,{variant:"outlined"},x.a.createElement(I.a,{value:!1,control:x.a.createElement(D.a,null),label:x.a.createElement("div",{className:"flex items-center"},x.a.createElement("span",{className:"mx-8"},"Disable 2FA"))}))),x.a.createElement(N.a,{variant:"outlined"},x.a.createElement(B.a,{variant:"outlined"},x.a.createElement(I.a,{value:!0,control:x.a.createElement(D.a,null),label:x.a.createElement("div",{className:"flex items-center"},x.a.createElement("span",{className:"mx-8"},"Enable 2FA"))})),x.a.createElement(T.a,{row:!0},ce&&(!m.data.is2fa||m.data.qrcode)&&x.a.createElement("div",null,x.a.createElement(I.a,{className:"mt-8 mb-16 flex w-full  sm:w-320 mx-16",control:x.a.createElement(A.a,{checked:ue||!1,onChange:function(e,a){fe(a)}}),label:"Send email with QR code"}),m.data&&m.data.qrcode?x.a.createElement("div",null,x.a.createElement(E.a,{className:"mt-8 mb-16 flex w-full  mx-16",variant:"h6"},"Scan QR code shown here into your two-factor authenticator app."),x.a.createElement("img",{className:"mt-8 mb-16 flex w-full  sm:w-320 mx-16",src:m.data.qrcode})):x.a.createElement(E.a,{className:"mt-8 mb-16 flex w-full  mx-16",variant:"span"},"Click on Save to Display the QR code"))))))))),innerScroll:!0}):x.a.createElement(r.a,null)}))}}]);
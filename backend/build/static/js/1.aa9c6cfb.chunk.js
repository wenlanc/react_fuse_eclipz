(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[1],{1628:function(t,e,n){"use strict";n.d(e,"a",(function(){return S}));var a=n(56),r=n(44),c=n(1580),o=n(2),u=n(0),i=n.n(u),d=n(1604),s=n(5);var p=function(t){var e=Object(s.d)((function(t){return t.fuse.settings.mainThemeDark}));return i.a.createElement("div",{className:t.classes.header},t.header&&i.a.createElement(d.a,{theme:e},t.header))},l=n(22),f=n(1579),O=n(1595);var g=function(t){var e=Object(s.d)((function(t){return t.fuse.settings.mainThemeDark})),n=t.classes;return i.a.createElement(i.a.Fragment,null,t.header&&i.a.createElement(d.a,{theme:e},i.a.createElement("div",{className:Object(o.default)(n.sidebarHeader,t.variant)},t.header)),t.content&&i.a.createElement(r.a,{className:n.sidebarContent,enable:t.innerScroll},t.content))};var b=i.a.forwardRef((function(t,e){var n=Object(u.useState)(!1),a=Object(l.a)(n,2),r=a[0],c=a[1],d=t.classes;Object(u.useImperativeHandle)(e,(function(){return{toggleSidebar:s}}));var s=function(){c(!r)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{lgUp:"permanent"===t.variant},i.a.createElement(f.a,{variant:"temporary",anchor:t.position,open:r,onClose:function(t){return s()},classes:{root:Object(o.default)(d.sidebarWrapper,t.variant),paper:Object(o.default)(d.sidebar,t.variant,"left"===t.position?d.leftSidebar:d.rightSidebar)},ModalProps:{keepMounted:!0},container:t.rootRef.current,BackdropProps:{classes:{root:d.backdrop}},style:{position:"absolute"}},i.a.createElement(g,t))),"permanent"===t.variant&&i.a.createElement(O.a,{mdDown:!0},i.a.createElement(f.a,{variant:"permanent",className:Object(o.default)(d.sidebarWrapper,t.variant),open:r,classes:{paper:Object(o.default)(d.sidebar,t.variant,"left"===t.position?d.leftSidebar:d.rightSidebar)}},i.a.createElement(g,t))))})),h=Object(c.a)((function(t){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:t.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(t.palette.primary.dark," 0%, ").concat(t.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(a.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},t.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:t.palette.primary.contrastText},headerSidebarToggleButton:{color:t.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:t.palette.background.paper,boxShadow:t.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(t.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(a.a)({},t.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(a.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:t.palette.primary.contrastText,backgroundColor:t.palette.primary.dark,"&.permanent":Object(a.a)({},t.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(a.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:t.palette.background.default,color:t.palette.text.primary},t.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),v=i.a.forwardRef((function(t,e){var n=Object(u.useRef)(null),a=Object(u.useRef)(null),c=Object(u.useRef)(null),d=h(t),s=t.rightSidebarHeader||t.rightSidebarContent,l=t.leftSidebarHeader||t.leftSidebarContent;return i.a.useImperativeHandle(e,(function(){return{rootRef:c,toggleLeftSidebar:function(){n.current.toggleSidebar()},toggleRightSidebar:function(){a.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(o.default)(d.root,t.innerScroll&&d.innerScroll),ref:c},i.a.createElement("div",{className:d.topBg}),i.a.createElement("div",{className:"flex container w-full"},l&&i.a.createElement(b,{position:"left",header:t.leftSidebarHeader,content:t.leftSidebarContent,variant:t.leftSidebarVariant||"permanent",innerScroll:t.innerScroll,classes:d,ref:n,rootRef:c}),i.a.createElement("div",{className:Object(o.default)(d.contentWrapper,l&&(void 0===t.leftSidebarVariant||"permanent"===t.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",s&&(void 0===t.rightSidebarVariant||"permanent"===t.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(p,{header:t.header,classes:d}),i.a.createElement("div",{className:Object(o.default)(d.contentCard,t.innerScroll&&"inner-scroll")},t.contentToolbar&&i.a.createElement("div",{className:d.toolbar},t.contentToolbar),t.content&&i.a.createElement(r.a,{className:d.content,enable:t.innerScroll,scrollToTopOnRouteChange:t.innerScroll},t.content))),s&&i.a.createElement(b,{position:"right",header:t.rightSidebarHeader,content:t.rightSidebarContent,variant:t.rightSidebarVariant||"permanent",innerScroll:t.innerScroll,classes:d,ref:a,rootRef:c})))}));v.defaultProps={};var S=i.a.memo(v)},1629:function(t,e,n){"use strict";n.d(e,"q",(function(){return c})),n.d(e,"T",(function(){return o})),n.d(e,"vb",(function(){return u})),n.d(e,"mc",(function(){return i})),n.d(e,"p",(function(){return p})),n.d(e,"G",(function(){return l})),n.d(e,"ub",(function(){return f})),n.d(e,"Zb",(function(){return O})),n.d(e,"Ib",(function(){return g})),n.d(e,"o",(function(){return b})),n.d(e,"S",(function(){return h})),n.d(e,"tb",(function(){return v})),n.d(e,"lc",(function(){return S})),n.d(e,"n",(function(){return m})),n.d(e,"F",(function(){return E})),n.d(e,"sb",(function(){return C})),n.d(e,"f",(function(){return T})),n.d(e,"O",(function(){return A})),n.d(e,"kb",(function(){return P})),n.d(e,"hc",(function(){return j})),n.d(e,"Nb",(function(){return R})),n.d(e,"e",(function(){return x})),n.d(e,"A",(function(){return w})),n.d(e,"jb",(function(){return N})),n.d(e,"Vb",(function(){return G})),n.d(e,"Eb",(function(){return I})),n.d(e,"x",(function(){return L})),n.d(e,"ab",(function(){return D})),n.d(e,"X",(function(){return _})),n.d(e,"V",(function(){return k})),n.d(e,"Y",(function(){return M})),n.d(e,"Z",(function(){return U})),n.d(e,"W",(function(){return V})),n.d(e,"Bb",(function(){return H})),n.d(e,"rc",(function(){return W})),n.d(e,"qc",(function(){return F})),n.d(e,"oc",(function(){return X})),n.d(e,"pc",(function(){return J})),n.d(e,"Sb",(function(){return q})),n.d(e,"w",(function(){return tt})),n.d(e,"L",(function(){return et})),n.d(e,"Ab",(function(){return nt})),n.d(e,"ec",(function(){return at})),n.d(e,"Kb",(function(){return rt})),n.d(e,"cb",(function(){return ct})),n.d(e,"eb",(function(){return ot})),n.d(e,"j",(function(){return ut})),n.d(e,"Q",(function(){return it})),n.d(e,"ob",(function(){return dt})),n.d(e,"jc",(function(){return st})),n.d(e,"Pb",(function(){return pt})),n.d(e,"i",(function(){return lt})),n.d(e,"C",(function(){return ft})),n.d(e,"nb",(function(){return Ot})),n.d(e,"Wb",(function(){return gt})),n.d(e,"Gb",(function(){return bt})),n.d(e,"b",(function(){return ht})),n.d(e,"M",(function(){return vt})),n.d(e,"gb",(function(){return St})),n.d(e,"fc",(function(){return mt})),n.d(e,"Lb",(function(){return Et})),n.d(e,"a",(function(){return Ct})),n.d(e,"y",(function(){return yt})),n.d(e,"fb",(function(){return Tt})),n.d(e,"Tb",(function(){return At})),n.d(e,"Cb",(function(){return Pt})),n.d(e,"u",(function(){return jt})),n.d(e,"U",(function(){return Rt})),n.d(e,"yb",(function(){return xt})),n.d(e,"nc",(function(){return wt})),n.d(e,"Rb",(function(){return Nt})),n.d(e,"t",(function(){return Gt})),n.d(e,"J",(function(){return It})),n.d(e,"xb",(function(){return Lt})),n.d(e,"cc",(function(){return Dt})),n.d(e,"Jb",(function(){return _t})),n.d(e,"bb",(function(){return kt})),n.d(e,"db",(function(){return Mt})),n.d(e,"d",(function(){return Ut})),n.d(e,"N",(function(){return Vt})),n.d(e,"ib",(function(){return Ht})),n.d(e,"gc",(function(){return Wt})),n.d(e,"Mb",(function(){return Ft})),n.d(e,"c",(function(){return Xt})),n.d(e,"z",(function(){return zt})),n.d(e,"hb",(function(){return Bt})),n.d(e,"Ub",(function(){return Jt})),n.d(e,"Db",(function(){return qt})),n.d(e,"h",(function(){return Kt})),n.d(e,"P",(function(){return Qt})),n.d(e,"mb",(function(){return Yt})),n.d(e,"lb",(function(){return Zt})),n.d(e,"ic",(function(){return $t})),n.d(e,"Ob",(function(){return te})),n.d(e,"g",(function(){return ee})),n.d(e,"B",(function(){return ne})),n.d(e,"Fb",(function(){return ae})),n.d(e,"v",(function(){return re})),n.d(e,"K",(function(){return ce})),n.d(e,"zb",(function(){return oe})),n.d(e,"dc",(function(){return ue})),n.d(e,"m",(function(){return ie})),n.d(e,"E",(function(){return de})),n.d(e,"rb",(function(){return se})),n.d(e,"Yb",(function(){return pe})),n.d(e,"s",(function(){return le})),n.d(e,"I",(function(){return fe})),n.d(e,"r",(function(){return Oe})),n.d(e,"H",(function(){return ge})),n.d(e,"wb",(function(){return be})),n.d(e,"bc",(function(){return he})),n.d(e,"ac",(function(){return ve})),n.d(e,"l",(function(){return Se})),n.d(e,"R",(function(){return me})),n.d(e,"qb",(function(){return Ee})),n.d(e,"kc",(function(){return Ce})),n.d(e,"Qb",(function(){return ye})),n.d(e,"k",(function(){return Te})),n.d(e,"D",(function(){return Ae})),n.d(e,"pb",(function(){return Pe})),n.d(e,"Xb",(function(){return je})),n.d(e,"Hb",(function(){return Re}));var a=n(48),r=n.n(a),c="[E-COMMERCE APP] GET PRODUCTS",o="[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT";function u(){var t=r.a.get("/api/e-commerce-app/products");return function(e){return t.then((function(t){return e({type:c,payload:t.data})}))}}function i(t){return{type:o,searchText:t.target.value}}var d=n(29),s=n(49),p="[E-COMMERCE APP] GET PRODUCT",l="[E-COMMERCE APP] SAVE PRODUCT";function f(t){var e=r.a.get("/api/e-commerce-app/product",{params:t});return function(t){return e.then((function(e){return t({type:p,payload:e.data})}))}}function O(t){var e=r.a.post("/api/e-commerce-app/product/save",t);return function(t){return e.then((function(e){return t(Object(s.G)({message:"Product Saved"})),t({type:l,payload:e.data})}))}}function g(){var t={id:d.a.generateGUID(),name:"",handle:"",description:"",categories:[],tags:[],images:[],priceTaxExcl:0,priceTaxIncl:0,taxRate:0,comparedPrice:0,quantity:0,sku:"",width:"",height:"",depth:"",weight:"",extraShippingFee:0,active:!0};return{type:p,payload:t}}var b="[E-COMMERCE APP] GET ORDERS",h="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";function v(){var t=r.a.get("/api/e-commerce-app/orders");return function(e){return t.then((function(t){return e({type:b,payload:t.data})}))}}function S(t){return{type:h,searchText:t.target.value}}var m="[E-COMMERCE APP] GET ORDER",E="[E-COMMERCE APP] SAVE ORDER";function C(t){var e=r.a.get("/api/e-commerce-app/order",{params:t});return function(t){return e.then((function(e){return t({type:m,payload:e.data})}))}}var y=n(72),T="[ACCESS CONTROL APP] GET DOMAINS",A="[ACCESS CONTROL APP] SET DOMAINS SEARCH TEXT";function P(){var t=r.a.get("".concat(y.a,"/api/domains"));return function(e){return t.then((function(t){return e({type:T,payload:t.data.domains})}))}}function j(t){return{type:A,searchText:t.target.value}}function R(t){return function(e,n){return r.a.post("".concat(y.a,"/api/domains/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE DOMAINS"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(P())}))}))}}var x="[ACCESS CONTROL APP] GET DOMAIN",w="[ACCESS CONTROL APP] SAVE DOMAIN";function N(t){var e=r.a.get("".concat(y.a,"/api/domain"),{params:t});return function(t){return e.then((function(e){e.data&&e.data.error?t(Object(s.G)({message:e.data.error})):t({type:x,payload:e.data})}))}}function G(t){var e=r.a.post("".concat(y.a,"/api/domains/save"),t);return function(t){return e.then((function(e){return e.data&&e.data.error?t(Object(s.G)({message:e.data.error})):(t(Object(s.G)({message:"Domain Saved"})),t({type:w,payload:e.data}))}))}}function I(){var t={id:"new"+d.a.generateGUID(),name:"Untitled",status:"A",image:null};return{type:x,payload:t}}var L="[ACCESS CONTROL APP] GET USERS",D="[ACCESS CONTROL APP] SET USERS SEARCH TEXT",_="[ACCESS CONTROL APP] SET USERS PAGINATION ROWSPERPAGE",k="[ACCESS CONTROL APP] SET USERS PAGINATION CURRENTPAGE",M="[ACCESS CONTROL APP] SET USERS PAGINATION TOTALITEMS",U="[ACCESS CONTROL APP] SET USERS PAGINATION TOTALPAGES",V="[ACCESS CONTROL APP] SET USERS PAGINATION ORDER";function H(t,e,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=r.a.get("".concat(y.a,"/api/users?page=").concat(t,"&size=").concat(e,"&search_text=").concat(a,"&sort_column=").concat(n._id,"&sort_direction=").concat(n._direction,"&domain_id=").concat(c));return function(t){return o.then((function(e){t({type:L,payload:e.data.users}),t(z(e.data.totalItems)),t(B(e.data.totalPages))}))}}function W(t){return{type:D,searchText:t}}function F(t){return{type:_,payload:t}}function X(t){return{type:k,payload:t}}function z(t){return{type:M,payload:t}}function B(t){return{type:U,payload:t}}function J(t){return{type:V,payload:t}}function q(t){return function(e,n){return r.a.post("".concat(y.a,"/api/users/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE USERS"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(H(0,10,{_id:"name",_direction:"ASC"},""))}))}))}}var K=n(1656),Q=n.n(K),Y=n(1659),Z=n(1694),$=n.n(Z),tt="[ACCESS CONTROL APP] GET USER",et="[ACCESS CONTROL APP] SAVE USER";function nt(t){var e=r.a.get("".concat(y.a,"/api/user"),{params:t});return function(t){return e.then((function(e){return t({type:tt,payload:e.data})}))}}function at(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.assign({},t);delete n.domain_list,delete n.group_list,delete n.app_list;var a=r.a.post("".concat(y.a,"/api/users/save"),n);return function(t){return a.then((function(n){if(n.data&&n.data.error)return t(Object(s.G)({message:n.data.error}));t({type:et,payload:n.data}),t(Object(s.G)({message:"Client Saved"})),e&&t(ct(n.data.id,n.data.name))}))}}function rt(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a,c,o;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/domains"));case 2:return n=t.sent,t.next=5,r.a.get("".concat(y.a,"/api/groups"));case 5:return a=t.sent,t.next=8,r.a.get("".concat(y.a,"/api/apps"));case 8:c=t.sent,o={id:"new"+d.a.generateGUID(),name:"",email:"",status:"A",domain_id:"",password:"",wg_key:"",public_ip:"",local_ip:"",virtual_ip:"",domain_list:n.data.domains,group_list:a.data.groups,group_ids:[],app_list:c.data.apps,app_ids:[]},e({type:tt,payload:o});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function ct(t,e){return function(){var n=Object(Y.a)(Q.a.mark((function n(a){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t===parseInt(t,10)&&r.a.post("".concat(y.a,"/api/user/json"),{userId:t}).then((function(t){$()(JSON.stringify(t.data),e+".json")}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function ot(t){return function(){var e=Object(Y.a)(Q.a.mark((function e(n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t===parseInt(t,10)&&r.a.post("".concat(y.a,"/api/user/email"),{userId:t}).then((function(t){n(Object(s.G)({message:t.data.message}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var ut="[ACCESS CONTROL APP] GET GROUPS",it="[ACCESS CONTROL APP] SET GROUPS SEARCH TEXT";function dt(){var t=r.a.get("".concat(y.a,"/api/groups"));return function(e){return t.then((function(t){return e({type:ut,payload:t.data.groups})}))}}function st(t){return{type:it,searchText:t.target.value}}function pt(t){return function(e,n){return r.a.post("".concat(y.a,"/api/groups/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE GROUPS"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(dt())}))}))}}var lt="[ACCESS CONTROL APP] GET GROUP",ft="[ACCESS CONTROL APP] SAVE GROUP";function Ot(t){var e=r.a.get("".concat(y.a,"/api/group"),{params:t});return function(t){return e.then((function(e){return t({type:lt,payload:e.data})}))}}function gt(t){var e=Object.assign({},t);delete e.app_list;var n=r.a.post("".concat(y.a,"/api/groups/save"),e);return function(t){return n.then((function(e){return t(Object(s.G)({message:e.data.error?e.data.error:"Group Saved."})),t({type:ft,payload:e.data})}))}}function bt(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/domains"));case 2:return n=t.sent,t.next=5,r.a.get("".concat(y.a,"/api/apps"));case 5:a=t.sent,c={id:"new"+d.a.generateGUID(),name:"",status:"A",app_list:a.data.apps,app_ids:[],domain_list:n.data.domains},e({type:lt,payload:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var ht="[ACCESS CONTROL APP] GET ADMINS",vt="[ACCESS CONTROL APP] SET ADMINS SEARCH TEXT";function St(){var t=r.a.get("".concat(y.a,"/api/admins"));return function(e){return t.then((function(t){return e({type:ht,payload:t.data.admins})}))}}function mt(t){return{type:vt,searchText:t.target.value}}function Et(t){return function(e,n){return r.a.post("".concat(y.a,"/api/admins/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE ADMINS"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(St())}))}))}}var Ct="[ACCESS CONTROL APP] GET ADMIN",yt="[ACCESS CONTROL APP] SAVE ADMIN";function Tt(t){var e=r.a.get("".concat(y.a,"/api/admin"),{params:t});return function(t){return e.then((function(e){return t({type:Ct,payload:e.data})}))}}function At(t){var e=r.a.post("".concat(y.a,"/api/admins/save"),t);return function(t){return e.then((function(e){if(!e.data.error)return t(Object(s.G)({message:"Admin Saved"})),t({type:yt,payload:e.data});t(Object(s.G)({message:e.data.error}))}))}}function Pt(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/domains"));case 2:n=t.sent,a={id:"new"+d.a.generateGUID(),name:"",email:"",status:"A",password:"",domain_id:"",domain_list:n.data.domains},e({type:Ct,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var jt="[ACCESS CONTROL APP] GET SERVICES",Rt="[ACCESS CONTROL APP] SET SERVICES SEARCH TEXT";function xt(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=r.a.get("".concat(y.a,"/api/services"),{params:{domain_id:t}});return function(t){return e.then((function(e){return t({type:jt,payload:e.data.services})}))}}function wt(t){return{type:Rt,searchText:t}}function Nt(t){return function(e,n){return r.a.post("".concat(y.a,"/api/services/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE SERVICES"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(xt())}))}))}}var Gt="[ACCESS CONTROL APP] GET SERVICE",It="[ACCESS CONTROL APP] SAVE SERVICE";function Lt(t){var e=r.a.get("".concat(y.a,"/api/service"),{params:t});return function(t){return e.then((function(e){return t({type:Gt,payload:e.data})}))}}function Dt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object.assign({},t);delete n.domain_list,delete n.group_list;var a=r.a.post("".concat(y.a,"/api/services/save"),n);return function(t){return a.then((function(n){if(n.data&&n.data.error)return t(Object(s.G)({message:n.data.error}));t({type:It,payload:n.data}),t(Object(s.G)({message:"Gateway Saved"})),e&&t(kt(n.data.id,n.data.name))}))}}function _t(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a,c;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/domains?status=active"));case 2:return n=t.sent,t.next=5,r.a.get("".concat(y.a,"/api/gwgroups?status=active"));case 5:a=t.sent,c={id:"new"+d.a.generateGUID(),name:"",email:"",status:"A",domain_id:"",password:"",wg_key:"",public_ip:"",local_ip:"",virtual_ip:"",domain_list:n.data.domains,group_list:a.data.groups,group_ids:[]},e({type:Gt,payload:c});case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function kt(t,e){return function(){var n=Object(Y.a)(Q.a.mark((function n(a){return Q.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t===parseInt(t,10)&&r.a.post("".concat(y.a,"/api/service/json"),{serviceId:t}).then((function(t){$()(JSON.stringify(t.data),e+".json")}));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}function Mt(t){return function(){var e=Object(Y.a)(Q.a.mark((function e(n){return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t===parseInt(t,10)&&r.a.post("".concat(y.a,"/api/service/email"),{serviceId:t}).then((function(t){n(Object(s.G)({message:t.data.message}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var Ut="[ACCESS CONTROL APP] GET APPS",Vt="[ACCESS CONTROL APP] SET APPS SEARCH TEXT";function Ht(t){var e="".concat(y.a,"/api/apps");t&&(e="".concat(y.a,"/api/apps?service_id=")+t);var n=r.a.get(e);return function(t){return n.then((function(e){return t({type:Ut,payload:e.data.apps})}))}}function Wt(t){return{type:Vt,searchText:t.target.value}}function Ft(t,e){return function(n,a){return r.a.post("".concat(y.a,"/api/apps/delete"),{selectedIds:t}).then((function(t){return Promise.all([n({type:"[ACCESS CONTROL APP] REMOVE APPS"})]).then((function(){n(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),n(Ht(e))}))}))}}var Xt="[ACCESS CONTROL APP] GET APP",zt="[ACCESS CONTROL APP] SAVE APP";function Bt(t){var e=r.a.get("".concat(y.a,"/api/app"),{params:t});return function(t){return e.then((function(e){return t({type:Xt,payload:e.data})}))}}function Jt(t){var e=Object.assign({},t);delete e.service_list;var n=r.a.post("".concat(y.a,"/api/apps/save"),e);return function(t){return n.then((function(e){return t(Object(s.G)({message:e.data.error?e.data.error:"Application Saved"})),t({type:zt,payload:e.data})}))}}function qt(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/services"));case 2:n=t.sent,a={id:"new"+d.a.generateGUID(),name:"",status:"A",service_id:"",allowed_ips:"",service_list:n.data.services},e({type:Xt,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var Kt="[ACCESS CONTROL APP] GET DOWNLOADS",Qt="[ACCESS CONTROL APP] SET DOWNLOADS SEARCH TEXT";function Yt(){var t=r.a.get("".concat(y.a,"/api/downloads"));return function(e){return t.then((function(t){return e({type:Kt,payload:t.data.downloads})}))}}function Zt(t){var e=r.a.get("".concat(y.a,"/api/download/").concat(t.filename),{responseType:"blob"});return function(n){return e.then((function(e){$()(e.data,t.filename)}))}}function $t(t){return{type:Qt,searchText:t.target.value}}function te(t){return function(e,n){return r.a.post("".concat(y.a,"/api/downloads/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE DOWNLOADS"})]).then((function(){e(Object(s.G)({message:"File Deleted..."})),e(Yt())}))}))}}var ee="[ACCESS CONTROL APP] GET DOWNLOAD",ne="[ACCESS CONTROL APP] SAVE DOWNLOAD";function ae(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n={id:"new"+d.a.generateGUID(),filename:"",status:"A",description:"",file:""},e({type:ee,payload:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}var re="[ACCESS CONTROL APP] GET SETTINGS",ce="[ACCESS CONTROL APP] SAVE SETTINGS";function oe(t){var e=r.a.get("".concat(y.a,"/api/settings?domain_id=").concat(t));return function(t){return e.then((function(e){t({type:re,payload:e.data})}))}}function ue(t){var e=r.a.post("".concat(y.a,"/api/settings/save"),t);return function(t){return e.then((function(e){return t(Object(s.G)({message:"Settings Saved"})),t({type:ce,payload:e.data})}))}}var ie="[ACCESS CONTROL APP] GET OPTIONS",de="[ACCESS CONTROL APP] SAVE OPTIONS";function se(){var t=r.a.get("".concat(y.a,"/api/options"));return function(e){return t.then((function(t){e({type:ie,payload:t.data.optionData})}))}}function pe(t){var e=r.a.post("".concat(y.a,"/api/options/save"),t);return function(t){return e.then((function(e){return t(Object(s.G)({message:"Options Saved"})),t({type:de,payload:e.data.optionData})}))}}var le="[ACCESS CONTROL APP] GET PROFILES",fe="[ACCESS CONTROL APP] SAVE PROFILES",Oe="[ACCESS CONTROL APP] GET GET_PROFILE2FA",ge="[ACCESS CONTROL APP] SAVE PROFILE2FA";function be(){var t=r.a.get("".concat(y.a,"/api/profiles"));return function(e){return t.then((function(t){e({type:le,payload:t.data}),e({type:Oe,payload:{is2fa:t.data.is2fa}})}))}}function he(t){var e=r.a.post("".concat(y.a,"/api/profiles/save"),t);return function(t){return e.then((function(e){if(!e.data.error)return t(Object(s.G)({message:"Profile Saved"})),t({type:fe,payload:e.data});t(Object(s.G)({message:e.data.error}))}))}}function ve(t){var e=r.a.post("".concat(y.a,"/api/2fasave"),t);return function(t){return e.then((function(e){if(!e.data.error)return t(Object(s.G)({message:e.data.message})),t({type:ge,payload:e.data});t(Object(s.G)({message:e.data.error}))}))}}var Se="[ACCESS CONTROL APP] GET GWGROUPS",me="[ACCESS CONTROL APP] SET GWGROUPS SEARCH TEXT";function Ee(){var t=r.a.get("".concat(y.a,"/api/gwgroups"));return function(e){return t.then((function(t){return e({type:Se,payload:t.data.groups})}))}}function Ce(t){return{type:me,searchText:t.target.value}}function ye(t){return function(e,n){return r.a.post("".concat(y.a,"/api/gwgroups/delete"),{selectedIds:t}).then((function(t){return Promise.all([e({type:"[ACCESS CONTROL APP] REMOVE GWGROUPS"})]).then((function(){e(Object(s.G)({message:t.data.message?t.data.message:"Deleted..."})),e(Ee())}))}))}}var Te="[ACCESS CONTROL APP] GET GWGROUP",Ae="[ACCESS CONTROL APP] SAVE GWGROUP";function Pe(t){var e=r.a.get("".concat(y.a,"/api/gwgroup"),{params:t});return function(t){return e.then((function(e){return t({type:Te,payload:e.data})}))}}function je(t){var e=r.a.post("".concat(y.a,"/api/gwgroups/save"),t);return function(t){return e.then((function(e){return t(Object(s.G)({message:"Mesh Saved"})),t({type:Ae,payload:e.data})}))}}function Re(){return function(){var t=Object(Y.a)(Q.a.mark((function t(e){var n,a;return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.a.get("".concat(y.a,"/api/domains"));case 2:n=t.sent,a={id:"new"+d.a.generateGUID(),name:"",status:"A",domain_list:n.data.domains},e({type:Te,payload:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},1688:function(t,e,n){"use strict";var a=n(79),r=n(6),c=n(1629),o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.n:case c.F:return Object(r.a)({},e.payload);default:return t}},u={data:[],searchText:""},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.o:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.S:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},d={data:null},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.p:case c.G:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},p={data:[],searchText:""},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.q:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.T:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},f={data:[],searchText:""},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.f:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.O:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},g={data:null},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.e:case c.A:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},h={data:[],searchText:"",rowsPerPage:10,order:{_id:null,_direction:"asc"},page:0,totalItems:0,totalPages:0},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.x:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.ab:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});case c.X:return Object(r.a)(Object(r.a)({},t),{},{rowsPerPage:e.payload});case c.V:return Object(r.a)(Object(r.a)({},t),{},{page:e.payload});case c.Y:return Object(r.a)(Object(r.a)({},t),{},{totalItems:e.payload});case c.Z:return Object(r.a)(Object(r.a)({},t),{},{totalPages:e.payload});case c.W:return Object(r.a)(Object(r.a)({},t),{},{order:e.payload});default:return t}},S={data:null},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.w:case c.L:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},E={data:[],searchText:""},C=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.j:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.Q:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},y={data:null},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.i:case c.C:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},A={data:[],searchText:""},P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.b:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.M:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},j={data:null},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.a:case c.y:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},x={data:[],searchText:""},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.u:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.U:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},N={data:null},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.t:case c.J:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},I={data:[],searchText:""},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.d:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.N:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},D={data:null},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.c:case c.z:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},k={data:[],searchText:""},M=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.h:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.P:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},U={data:null},V=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.g:case c.B:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},H={data:null},W=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.v:case c.K:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},F={data:null},X=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.m:case c.E:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},z={data:null},B=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.s:case c.I:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},J={data:null},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.r:case c.H:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},K={data:[],searchText:""},Q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.l:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});case c.R:return Object(r.a)(Object(r.a)({},t),{},{searchText:e.searchText});default:return t}},Y={data:null},Z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c.k:case c.D:return Object(r.a)(Object(r.a)({},t),{},{data:e.payload});default:return t}},$=Object(a.d)({products:l,product:s,orders:i,order:o,domains:O,domain:b,users:v,user:m,groups:C,group:T,admins:P,admin:R,services:w,service:G,apps:L,app:_,downloads:M,download:V,settings:W,options:X,profiles:B,profile2fa:q,gwgroup:Z,gwgroups:Q});e.a=$}}]);
(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[149],{1628:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(56),r=a(44),l=a(1580),c=a(2),o=a(0),i=a.n(o),u=a(1604),d=a(5);var s=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark}));return i.a.createElement("div",{className:e.classes.header},e.header&&i.a.createElement(u.a,{theme:t},e.header))},m=a(22),f=a(1579),p=a(1595);var b=function(e){var t=Object(d.d)((function(e){return e.fuse.settings.mainThemeDark})),a=e.classes;return i.a.createElement(i.a.Fragment,null,e.header&&i.a.createElement(u.a,{theme:t},i.a.createElement("div",{className:Object(c.default)(a.sidebarHeader,e.variant)},e.header)),e.content&&i.a.createElement(r.a,{className:a.sidebarContent,enable:e.innerScroll},e.content))};var h=i.a.forwardRef((function(e,t){var a=Object(o.useState)(!1),n=Object(m.a)(a,2),r=n[0],l=n[1],u=e.classes;Object(o.useImperativeHandle)(t,(function(){return{toggleSidebar:d}}));var d=function(){l(!r)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{lgUp:"permanent"===e.variant},i.a.createElement(f.a,{variant:"temporary",anchor:e.position,open:r,onClose:function(e){return d()},classes:{root:Object(c.default)(u.sidebarWrapper,e.variant),paper:Object(c.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)},ModalProps:{keepMounted:!0},container:e.rootRef.current,BackdropProps:{classes:{root:u.backdrop}},style:{position:"absolute"}},i.a.createElement(b,e))),"permanent"===e.variant&&i.a.createElement(p.a,{mdDown:!0},i.a.createElement(f.a,{variant:"permanent",className:Object(c.default)(u.sidebarWrapper,e.variant),open:r,classes:{paper:Object(c.default)(u.sidebar,e.variant,"left"===e.position?u.leftSidebar:u.rightSidebar)}},i.a.createElement(b,e))))})),E=Object(l.a)((function(e){return{root:{display:"flex",flexDirection:"row",minHeight:"100%",position:"relative",flex:"1 0 auto",height:"auto",backgroundColor:e.palette.background.default},innerScroll:{flex:"1 1 auto",height:"100%"},topBg:{position:"absolute",left:0,right:0,top:0,height:200,background:"linear-gradient(to right, ".concat(e.palette.primary.dark," 0%, ").concat(e.palette.primary.main," 100%)"),backgroundSize:"cover",pointerEvents:"none"},contentWrapper:Object(n.a)({display:"flex",flexDirection:"column",padding:"0 3.2rem",flex:"1 1 100%",zIndex:2,maxWidth:"100%",minWidth:0,minHeight:0},e.breakpoints.down("xs"),{padding:"0 1.6rem"}),header:{height:136,minHeight:136,maxHeight:136,display:"flex",color:e.palette.primary.contrastText},headerSidebarToggleButton:{color:e.palette.primary.contrastText},contentCard:{display:"flex",flex:"1 1 100%",flexDirection:"column",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[1],minHeight:0,borderRadius:"8px 8px 0 0"},toolbar:{height:64,minHeight:64,display:"flex",alignItems:"center",borderBottom:"1px solid ".concat(e.palette.divider)},content:{flex:"1 1 auto",height:"100%",overflow:"auto","-webkit-overflow-scrolling":"touch"},sidebarWrapper:{position:"absolute",backgroundColor:"transparent",zIndex:5,overflow:"hidden","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{zIndex:1,position:"relative"})},sidebar:{position:"absolute","&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent",position:"relative",border:"none",overflow:"hidden"}),width:240,height:"100%"},leftSidebar:{},rightSidebar:{},sidebarHeader:{height:200,minHeight:200,color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark,"&.permanent":Object(n.a)({},e.breakpoints.up("lg"),{backgroundColor:"transparent"})},sidebarContent:Object(n.a)({display:"flex",flex:"1 1 auto",flexDirection:"column",backgroundColor:e.palette.background.default,color:e.palette.text.primary},e.breakpoints.up("lg"),{overflow:"auto","-webkit-overflow-scrolling":"touch"}),backdrop:{position:"absolute"}}})),g=i.a.forwardRef((function(e,t){var a=Object(o.useRef)(null),n=Object(o.useRef)(null),l=Object(o.useRef)(null),u=E(e),d=e.rightSidebarHeader||e.rightSidebarContent,m=e.leftSidebarHeader||e.leftSidebarContent;return i.a.useImperativeHandle(t,(function(){return{rootRef:l,toggleLeftSidebar:function(){a.current.toggleSidebar()},toggleRightSidebar:function(){n.current.toggleSidebar()}}})),i.a.createElement("div",{className:Object(c.default)(u.root,e.innerScroll&&u.innerScroll),ref:l},i.a.createElement("div",{className:u.topBg}),i.a.createElement("div",{className:"flex container w-full"},m&&i.a.createElement(h,{position:"left",header:e.leftSidebarHeader,content:e.leftSidebarContent,variant:e.leftSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:u,ref:a,rootRef:l}),i.a.createElement("div",{className:Object(c.default)(u.contentWrapper,m&&(void 0===e.leftSidebarVariant||"permanent"===e.leftSidebarVariant)&&"lg:ltr:pl-0 lg:rtl:pr-0",d&&(void 0===e.rightSidebarVariant||"permanent"===e.rightSidebarVariant)&&"lg:pr-0")},i.a.createElement(s,{header:e.header,classes:u}),i.a.createElement("div",{className:Object(c.default)(u.contentCard,e.innerScroll&&"inner-scroll")},e.contentToolbar&&i.a.createElement("div",{className:u.toolbar},e.contentToolbar),e.content&&i.a.createElement(r.a,{className:u.content,enable:e.innerScroll,scrollToTopOnRouteChange:e.innerScroll},e.content))),d&&i.a.createElement(h,{position:"right",header:e.rightSidebarHeader,content:e.rightSidebarContent,variant:e.rightSidebarVariant||"permanent",innerScroll:e.innerScroll,classes:u,ref:n,rootRef:l})))}));g.defaultProps={};var O=i.a.memo(g)},1630:function(e,t,a){"use strict";a.d(t,"m",(function(){return r})),a.d(t,"r",(function(){return l})),a.d(t,"g",(function(){return c})),a.d(t,"A",(function(){return o})),a.d(t,"w",(function(){return i})),a.d(t,"l",(function(){return u})),a.d(t,"H",(function(){return d})),a.d(t,"t",(function(){return s})),a.d(t,"i",(function(){return m})),a.d(t,"q",(function(){return f})),a.d(t,"f",(function(){return p})),a.d(t,"n",(function(){return b})),a.d(t,"a",(function(){return h})),a.d(t,"s",(function(){return E})),a.d(t,"h",(function(){return g})),a.d(t,"U",(function(){return y})),a.d(t,"N",(function(){return v})),a.d(t,"Z",(function(){return x})),a.d(t,"X",(function(){return S})),a.d(t,"Q",(function(){return j})),a.d(t,"fb",(function(){return k})),a.d(t,"T",(function(){return C})),a.d(t,"M",(function(){return A})),a.d(t,"R",(function(){return _})),a.d(t,"o",(function(){return T})),a.d(t,"D",(function(){return D})),a.d(t,"E",(function(){return P})),a.d(t,"z",(function(){return w})),a.d(t,"B",(function(){return R})),a.d(t,"d",(function(){return N})),a.d(t,"c",(function(){return L})),a.d(t,"b",(function(){return H})),a.d(t,"db",(function(){return I})),a.d(t,"ab",(function(){return G})),a.d(t,"K",(function(){return M})),a.d(t,"J",(function(){return U})),a.d(t,"I",(function(){return F})),a.d(t,"F",(function(){return B})),a.d(t,"x",(function(){return X})),a.d(t,"eb",(function(){return W})),a.d(t,"G",(function(){return V})),a.d(t,"v",(function(){return z})),a.d(t,"k",(function(){return J})),a.d(t,"cb",(function(){return q})),a.d(t,"W",(function(){return K})),a.d(t,"P",(function(){return Q})),a.d(t,"C",(function(){return Y})),a.d(t,"u",(function(){return Z})),a.d(t,"j",(function(){return $})),a.d(t,"bb",(function(){return ee})),a.d(t,"V",(function(){return te})),a.d(t,"O",(function(){return ae})),a.d(t,"y",(function(){return ne})),a.d(t,"p",(function(){return re})),a.d(t,"e",(function(){return le})),a.d(t,"Y",(function(){return ce})),a.d(t,"S",(function(){return oe})),a.d(t,"L",(function(){return ie}));var n,r="GET FREE TEXT DIALOGUE STATE",l="OPEN FREE TEXT DIALOGUE",c="CLOSE FREE TEXT DIALOGUE",o="SET FREE TEXT DATA",i="OPEN SIMPLE TEXT DIALOGUE",u="CLOSE SIMPLE TEXT DIALOGUE",d="SET SIMPLE TEXT DATA",s="OPEN MACRO DIALOGUE",m="CLOSE MACRO DIALOGUE",f="OPEN CC DIALOGUE",p="CLOSE CC DIALOGUE",b="GET LIST DATA",h="ADD LIST ITEM",E="OPEN FULL SCREEN DIALOGUE",g="CLOSE FULL SCREEN DIALOGUE",O=["","","",""];function y(){return{type:l,payload:!0}}function v(){return{type:c}}function x(e){return{type:o,payload:e}}function S(e){return n=e,{type:i,index:e}}function j(){return{type:u}}function k(e){return O[n]=e,{type:d,payload:O}}function C(e){return{type:f,payload:e}}function A(){return{type:p}}function _(){return{type:b,payload:{data:[{key:0,item:"Abdominal distension (gaseous) (R14.0)"},{key:1,item:"Abdominal weight gain (R63.5)"},{key:2,item:"Chills (without fever) (R68.83)"}]}}}a(48);var T="[E-COMMERCE APP] GET ORDERS",D="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";var P="SET PERSON",w="SET FIXED",R="SET HIDDEN",N="CHANGE WEIGHT",L="CHANGE HEIGHT",H="CHANGE CREATIN";function I(e){return{type:P,payload:e}}function G(e){return{type:R,payload:e}}function M(e){return{type:N,payload:e}}function U(e){return{type:L,payload:e}}function F(e){return{type:H,payload:e}}var B="SET PROBLEMS",X="SAVE PROBLEMS";function W(e){return{type:B,payload:e}}var V="SET PSH",z="OPEN PSH DIALOGUE",J="CLOSE PSH DIALOGUE";function q(e){return{type:V,payload:e}}function K(){return{type:z}}function Q(){return{type:J}}var Y="SET MEDS",Z="OPEN MEDS DIALOGUE",$="CLOSE MEDS DIALOGUE";function ee(e){return{type:Y,payload:e}}function te(){return{type:Z}}function ae(){return{type:$}}var ne="SET ADR",re="OPEN ADR DIALOGUE",le="CLOSE ADR DIALOGUE";function ce(e){return{type:ne,payload:e}}function oe(){return{type:re}}function ie(){return{type:le}}},1674:function(e,t,a){"use strict";var n=a(79),r=a(6),l=a(1630),c={dialogue:{free_text:!1,simple_text:!1,macro:!1,cc:!1,full:!1},free_text_data:{data:""},simple_text:{data:[]},simple_text_index:{index:0},simple_text_hpi:{data:[]},simple_text_index_hpi:{index:0},cc_list_data:{data:[]},list_item:{data:""},cc_condition:""},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.m:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!1}});case l.r:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!0,simple_text:!1,macro:!1,cc:!1,full:!1}});case l.g:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!1,simple_text:!1,macro:!1,cc:!1,full:!1}});case l.A:return Object(r.a)(Object(r.a)({},e),{},{free_text_data:{data:t.payload}});case l.w:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!0,free_text:!1,macro:!1,cc:!1,full:!1},simple_text_index:{index:t.index}});case l.l:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case l.H:return Object(r.a)(Object(r.a)({},e),{},{simple_text:{data:t.payload}});case l.t:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!0,cc:!1,full:!1}});case l.i:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case l.q:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!0,full:!1},cc_condition:t.payload});case l.f:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case l.n:return Object(r.a)(Object(r.a)({},e),{},{cc_list_data:{data:t.payload}});case l.a:return Object(r.a)(Object(r.a)({},e),{},{list_item:{data:t.payload}});case l.s:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!0}});case l.h:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});default:return e}},i={data:[],searchText:""},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.o:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case l.D:return Object(r.a)(Object(r.a)({},e),{},{searchText:t.searchText});default:return e}},d={selectedPerson:{},isFixed:!1,isHidden:!1,weight:160,height:60,creatin:1},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.E:return Object(r.a)(Object(r.a)({},e),{},{selectedPerson:t.payload});case l.z:return Object(r.a)(Object(r.a)({},e),{},{isFixed:t.payload});case l.B:return Object(r.a)(Object(r.a)({},e),{},{isHidden:t.payload});case l.d:return Object(r.a)(Object(r.a)({},e),{},{weight:t.payload});case l.c:return Object(r.a)(Object(r.a)({},e),{},{height:t.payload});case l.b:return Object(r.a)(Object(r.a)({},e),{},{creatin:t.payload});default:return e}},m={allProblems:[{key:0,item:"Abdominal distension (gaseous) (R14.0)",cc:"chronic",hpi:!0,pmh:!1,ass:""},{key:1,item:"Abdominal weight gain (R63.5)",cc:"chronic",hpi:!0,pmh:!1,ass:""},{key:2,item:"Chills (without fever) (R68.83)",cc:"chronic",hpi:!0,pmh:!1,ass:""}],problems:[],problemSelection:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.F:return Object(r.a)(Object(r.a)({},e),{},{problems:t.payload});case l.x:return Object(r.a)(Object(r.a)({},e),{},{problemSelection:t.payload});default:return e}},p={dialogue:{free_text:!1,simple_text:!1,macro:!1,psh:!1,full:!1},allPSHDatas:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedPSHDatas:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.v:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,psh:!0,full:!1}});case l.k:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,psh:!1,full:!1}});case l.G:return Object(r.a)(Object(r.a)({},e),{},{selectedPSHDatas:t.payload});default:return e}},h={dialogue:{free_text:!1,simple_text:!1,macro:!1,meds:!1,full:!1},allMedsDatas:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedMedsDatas:[]},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.u:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,meds:!0,full:!1}});case l.j:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,meds:!1,full:!1}});case l.C:return Object(r.a)(Object(r.a)({},e),{},{selectedMedsDatas:t.payload});default:return e}},g={dialogue:{free_text:!1,simple_text:!1,macro:!1,adr:!1,full:!1},allAdrData:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedAdrData:[]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.p:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,adr:!0,full:!1}});case l.e:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,adr:!1,full:!1}});case l.y:return Object(r.a)(Object(r.a)({},e),{},{selectedAdrData:t.payload});default:return e}},y=Object(n.d)({chartings:o,wellness:u,selectedPerson:s,problems:f,psh:b,meds:E,adr:O});t.a=y},3430:function(e,t,a){"use strict";a.r(t);var n=a(1628),r=a(211),l=a(0),c=a.n(l),o=a(1674),i=a(70),u=a(1581),d=a(229),s=a(21),m=a(817),f=a(1587),p=a(1580),b=Object(p.a)((function(e){return{removeUnderline:{textDecoration:"none !important"}}}));var h=function(e){var t=b();return c.a.createElement("div",{className:"flex flex-1 w-full items-center justify-between"},c.a.createElement(i.a,{animation:"transition.slideLeftIn",delay:300},c.a.createElement(d.a,{className:"hidden sm:flex mx-0 sm:mx-12",variant:"h6"},"Free Text")),c.a.createElement(s.a,{to:"/charting",className:t.removeUnderline},c.a.createElement(f.a,{title:"return"},c.a.createElement(m.a,null,c.a.createElement(u.a,{color:"action"},"keyboard_backspace")))))},E=a(22),g=a(2127),O=(a(2221),a(1998)),y=a(1710),v=a(44),x=a(1616),S=a(1585),j=Object(p.a)((function(e){return{root:{width:"100%","& .rdw-editor-wrapper":{width:"-webkit-fill-available"},"& .rdw-editor-main":{height:"60vh"}},content:{margin:"10px",width:"auto"},editor:{width:"100%"},section:{padding:"0 5px"}}}));var k=function(e){var t=j(),a=Object(l.useState)(O.EditorState.createEmpty()),n=Object(E.a)(a,2),r=n[0],o=n[1],i=c.a.useState("cc"),u=Object(E.a)(i,2),d=u[0],s=u[1],m=function(e){s(e.target.value),o()};return c.a.createElement("div",{className:t.root},c.a.createElement(v.a,{className:"flex-grow overflow-x-auto"},c.a.createElement(y.a,{container:!0,spacing:1,className:t.content},c.a.createElement("div",{className:t.section},c.a.createElement(S.a,{checked:"cc"===d,onChange:m,value:"cc",control:c.a.createElement(x.a,null),label:"CC",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"hpi"===d,onChange:m,value:"hpi",control:c.a.createElement(x.a,null),label:"HPI",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"pmh"===d,onChange:m,value:"pmh",control:c.a.createElement(x.a,null),label:"PMH",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"psh"===d,onChange:m,value:"psh",control:c.a.createElement(x.a,null),label:"PSH",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"meds"===d,onChange:m,value:"meds",control:c.a.createElement(x.a,null),label:"MEDS",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"adr"===d,onChange:m,value:"adr",control:c.a.createElement(x.a,null),label:"ADR",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"sh"===d,onChange:m,value:"sh",control:c.a.createElement(x.a,null),label:"SH",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"fh"===d,onChange:m,value:"fh",control:c.a.createElement(x.a,null),label:"FH",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"pe"===d,onChange:m,value:"pe",control:c.a.createElement(x.a,null),label:"PE",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"data"===d,onChange:m,value:"data",control:c.a.createElement(x.a,null),label:"DATA",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"assessment"===d,onChange:m,value:"assessment",control:c.a.createElement(x.a,null),label:"ASSESSMENT",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"plan"===d,onChange:m,value:"plan",control:c.a.createElement(x.a,null),label:"PLAN/ORDERS",labelPlacement:"end"}),c.a.createElement(S.a,{checked:"em"===d,onChange:m,value:"em",control:c.a.createElement(x.a,null),label:"EM",labelPlacement:"end"})),c.a.createElement(g.Editor,{editorState:r,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editer-content",style:{width:"100%"},onEditorStateChange:function(e){return function(e){o(e)}(e)}}))))};t.default=Object(r.a)("eCommerceApp",o.a)((function(){return c.a.createElement(n.a,{classes:{content:"flex"},header:c.a.createElement(h,null),content:c.a.createElement(k,null),innerScroll:!0})}))}}]);
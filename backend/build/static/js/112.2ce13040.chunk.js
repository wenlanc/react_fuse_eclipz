(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[112],{1630:function(e,t,a){"use strict";a.d(t,"m",(function(){return r})),a.d(t,"r",(function(){return c})),a.d(t,"g",(function(){return i})),a.d(t,"A",(function(){return o})),a.d(t,"w",(function(){return l})),a.d(t,"l",(function(){return s})),a.d(t,"H",(function(){return u})),a.d(t,"t",(function(){return d})),a.d(t,"i",(function(){return m})),a.d(t,"q",(function(){return f})),a.d(t,"f",(function(){return p})),a.d(t,"n",(function(){return b})),a.d(t,"a",(function(){return g})),a.d(t,"s",(function(){return y})),a.d(t,"h",(function(){return E})),a.d(t,"U",(function(){return x})),a.d(t,"N",(function(){return O})),a.d(t,"Z",(function(){return v})),a.d(t,"X",(function(){return j})),a.d(t,"Q",(function(){return S})),a.d(t,"fb",(function(){return A})),a.d(t,"T",(function(){return w})),a.d(t,"M",(function(){return _})),a.d(t,"R",(function(){return C})),a.d(t,"o",(function(){return k})),a.d(t,"D",(function(){return T})),a.d(t,"E",(function(){return D})),a.d(t,"z",(function(){return N})),a.d(t,"B",(function(){return P})),a.d(t,"d",(function(){return L})),a.d(t,"c",(function(){return R})),a.d(t,"b",(function(){return I})),a.d(t,"db",(function(){return G})),a.d(t,"ab",(function(){return M})),a.d(t,"K",(function(){return H})),a.d(t,"J",(function(){return W})),a.d(t,"I",(function(){return U})),a.d(t,"F",(function(){return F})),a.d(t,"x",(function(){return z})),a.d(t,"eb",(function(){return B})),a.d(t,"G",(function(){return X})),a.d(t,"v",(function(){return J})),a.d(t,"k",(function(){return q})),a.d(t,"cb",(function(){return V})),a.d(t,"W",(function(){return K})),a.d(t,"P",(function(){return Q})),a.d(t,"C",(function(){return Y})),a.d(t,"u",(function(){return Z})),a.d(t,"j",(function(){return $})),a.d(t,"bb",(function(){return ee})),a.d(t,"V",(function(){return te})),a.d(t,"O",(function(){return ae})),a.d(t,"y",(function(){return ne})),a.d(t,"p",(function(){return re})),a.d(t,"e",(function(){return ce})),a.d(t,"Y",(function(){return ie})),a.d(t,"S",(function(){return oe})),a.d(t,"L",(function(){return le}));var n,r="GET FREE TEXT DIALOGUE STATE",c="OPEN FREE TEXT DIALOGUE",i="CLOSE FREE TEXT DIALOGUE",o="SET FREE TEXT DATA",l="OPEN SIMPLE TEXT DIALOGUE",s="CLOSE SIMPLE TEXT DIALOGUE",u="SET SIMPLE TEXT DATA",d="OPEN MACRO DIALOGUE",m="CLOSE MACRO DIALOGUE",f="OPEN CC DIALOGUE",p="CLOSE CC DIALOGUE",b="GET LIST DATA",g="ADD LIST ITEM",y="OPEN FULL SCREEN DIALOGUE",E="CLOSE FULL SCREEN DIALOGUE",h=["","","",""];function x(){return{type:c,payload:!0}}function O(){return{type:i}}function v(e){return{type:o,payload:e}}function j(e){return n=e,{type:l,index:e}}function S(){return{type:s}}function A(e){return h[n]=e,{type:u,payload:h}}function w(e){return{type:f,payload:e}}function _(){return{type:p}}function C(){return{type:b,payload:{data:[{key:0,item:"Abdominal distension (gaseous) (R14.0)"},{key:1,item:"Abdominal weight gain (R63.5)"},{key:2,item:"Chills (without fever) (R68.83)"}]}}}a(48);var k="[E-COMMERCE APP] GET ORDERS",T="[E-COMMERCE APP] SET ORDERS SEARCH TEXT";var D="SET PERSON",N="SET FIXED",P="SET HIDDEN",L="CHANGE WEIGHT",R="CHANGE HEIGHT",I="CHANGE CREATIN";function G(e){return{type:D,payload:e}}function M(e){return{type:P,payload:e}}function H(e){return{type:L,payload:e}}function W(e){return{type:R,payload:e}}function U(e){return{type:I,payload:e}}var F="SET PROBLEMS",z="SAVE PROBLEMS";function B(e){return{type:F,payload:e}}var X="SET PSH",J="OPEN PSH DIALOGUE",q="CLOSE PSH DIALOGUE";function V(e){return{type:X,payload:e}}function K(){return{type:J}}function Q(){return{type:q}}var Y="SET MEDS",Z="OPEN MEDS DIALOGUE",$="CLOSE MEDS DIALOGUE";function ee(e){return{type:Y,payload:e}}function te(){return{type:Z}}function ae(){return{type:$}}var ne="SET ADR",re="OPEN ADR DIALOGUE",ce="CLOSE ADR DIALOGUE";function ie(e){return{type:ne,payload:e}}function oe(){return{type:re}}function le(){return{type:ce}}},1647:function(e,t,a){"use strict";var n=a(4),r=a(1),c=a(0),i=(a(3),a(2)),o=a(9),l=a(526),s=c.forwardRef((function(e,t){var a=e.classes,o=e.className,s=e.component,u=void 0===s?"table":s,d=e.padding,m=void 0===d?"default":d,f=e.size,p=void 0===f?"medium":f,b=e.stickyHeader,g=void 0!==b&&b,y=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),E=c.useMemo((function(){return{padding:m,size:p,stickyHeader:g}}),[m,p,g]);return c.createElement(l.a.Provider,{value:E},c.createElement(u,Object(r.a)({role:"table"===u?null:"table",ref:t,className:Object(i.default)(a.root,o,g&&a.stickyHeader)},y)))}));t.a=Object(o.a)((function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(r.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}}),{name:"MuiTable"})(s)},1648:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),i=(a(3),a(2)),o=a(9),l=a(299),s={variant:"body"},u=c.forwardRef((function(e,t){var a=e.classes,o=e.className,u=e.component,d=void 0===u?"tbody":u,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(d,Object(n.a)({className:Object(i.default)(a.root,o),ref:t,role:"tbody"===d?null:"rowgroup"},m)))}));t.a=Object(o.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(u)},1650:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),i=(a(3),a(2)),o=a(9),l=a(299),s={variant:"head"},u=c.forwardRef((function(e,t){var a=e.classes,o=e.className,u=e.component,d=void 0===u?"thead":u,m=Object(r.a)(e,["classes","className","component"]);return c.createElement(l.a.Provider,{value:s},c.createElement(d,Object(n.a)({className:Object(i.default)(a.root,o),ref:t,role:"thead"===d?null:"rowgroup"},m)))}));t.a=Object(o.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(u)},1674:function(e,t,a){"use strict";var n=a(79),r=a(6),c=a(1630),i={dialogue:{free_text:!1,simple_text:!1,macro:!1,cc:!1,full:!1},free_text_data:{data:""},simple_text:{data:[]},simple_text_index:{index:0},simple_text_hpi:{data:[]},simple_text_index_hpi:{index:0},cc_list_data:{data:[]},list_item:{data:""},cc_condition:""},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.m:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!1}});case c.r:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!0,simple_text:!1,macro:!1,cc:!1,full:!1}});case c.g:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{free_text:!1,simple_text:!1,macro:!1,cc:!1,full:!1}});case c.A:return Object(r.a)(Object(r.a)({},e),{},{free_text_data:{data:t.payload}});case c.w:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!0,free_text:!1,macro:!1,cc:!1,full:!1},simple_text_index:{index:t.index}});case c.l:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case c.H:return Object(r.a)(Object(r.a)({},e),{},{simple_text:{data:t.payload}});case c.t:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!0,cc:!1,full:!1}});case c.i:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case c.q:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!0,full:!1},cc_condition:t.payload});case c.f:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});case c.n:return Object(r.a)(Object(r.a)({},e),{},{cc_list_data:{data:t.payload}});case c.a:return Object(r.a)(Object(r.a)({},e),{},{list_item:{data:t.payload}});case c.s:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!0}});case c.h:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,cc:!1,full:!1}});default:return e}},l={data:[],searchText:""},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.o:return Object(r.a)(Object(r.a)({},e),{},{data:t.payload});case c.D:return Object(r.a)(Object(r.a)({},e),{},{searchText:t.searchText});default:return e}},u={selectedPerson:{},isFixed:!1,isHidden:!1,weight:160,height:60,creatin:1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.E:return Object(r.a)(Object(r.a)({},e),{},{selectedPerson:t.payload});case c.z:return Object(r.a)(Object(r.a)({},e),{},{isFixed:t.payload});case c.B:return Object(r.a)(Object(r.a)({},e),{},{isHidden:t.payload});case c.d:return Object(r.a)(Object(r.a)({},e),{},{weight:t.payload});case c.c:return Object(r.a)(Object(r.a)({},e),{},{height:t.payload});case c.b:return Object(r.a)(Object(r.a)({},e),{},{creatin:t.payload});default:return e}},m={allProblems:[{key:0,item:"Abdominal distension (gaseous) (R14.0)",cc:"chronic",hpi:!0,pmh:!1,ass:""},{key:1,item:"Abdominal weight gain (R63.5)",cc:"chronic",hpi:!0,pmh:!1,ass:""},{key:2,item:"Chills (without fever) (R68.83)",cc:"chronic",hpi:!0,pmh:!1,ass:""}],problems:[],problemSelection:[]},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.F:return Object(r.a)(Object(r.a)({},e),{},{problems:t.payload});case c.x:return Object(r.a)(Object(r.a)({},e),{},{problemSelection:t.payload});default:return e}},p={dialogue:{free_text:!1,simple_text:!1,macro:!1,psh:!1,full:!1},allPSHDatas:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedPSHDatas:[]},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.v:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,psh:!0,full:!1}});case c.k:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,psh:!1,full:!1}});case c.G:return Object(r.a)(Object(r.a)({},e),{},{selectedPSHDatas:t.payload});default:return e}},g={dialogue:{free_text:!1,simple_text:!1,macro:!1,meds:!1,full:!1},allMedsDatas:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedMedsDatas:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.u:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,meds:!0,full:!1}});case c.j:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,meds:!1,full:!1}});case c.C:return Object(r.a)(Object(r.a)({},e),{},{selectedMedsDatas:t.payload});default:return e}},E={dialogue:{free_text:!1,simple_text:!1,macro:!1,adr:!1,full:!1},allAdrData:[{key:0,name:"Alpha-1-antitrypsin, total (82.103)"},{key:1,name:"Amylase (82.150)"},{key:2,name:"Anesthesia for pelvic exenteration (00.848)"},{key:3,name:"Anesthesia for radical hysterectomy (00.846)"},{key:4,name:"Anti-Sm (86.235)"},{key:5,name:"Basic metabolic panel (80.048)"},{key:6,name:"C-reative protein; high sensitivity (hsCRP) (86.141)"}],selectedAdrData:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.p:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,adr:!0,full:!1}});case c.e:return Object(r.a)(Object(r.a)({},e),{},{dialogue:{simple_text:!1,free_text:!1,macro:!1,adr:!1,full:!1}});case c.y:return Object(r.a)(Object(r.a)({},e),{},{selectedAdrData:t.payload});default:return e}},x=Object(n.d)({chartings:o,wellness:s,selectedPerson:d,problems:f,psh:b,meds:y,adr:h});t.a=x},1710:function(e,t,a){"use strict";var n=a(4),r=a(1),c=a(0),i=(a(3),a(2)),o=a(9),l=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var d=c.forwardRef((function(e,t){var a=e.alignContent,o=void 0===a?"stretch":a,l=e.alignItems,s=void 0===l?"stretch":l,u=e.classes,d=e.className,m=e.component,f=void 0===m?"div":m,p=e.container,b=void 0!==p&&p,g=e.direction,y=void 0===g?"row":g,E=e.item,h=void 0!==E&&E,x=e.justify,O=void 0===x?"flex-start":x,v=e.lg,j=void 0!==v&&v,S=e.md,A=void 0!==S&&S,w=e.sm,_=void 0!==w&&w,C=e.spacing,k=void 0===C?0:C,T=e.wrap,D=void 0===T?"wrap":T,N=e.xl,P=void 0!==N&&N,L=e.xs,R=void 0!==L&&L,I=e.zeroMinWidth,G=void 0!==I&&I,M=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),H=Object(i.default)(u.root,d,b&&[u.container,0!==k&&u["spacing-xs-".concat(String(k))]],h&&u.item,G&&u.zeroMinWidth,"row"!==y&&u["direction-xs-".concat(String(y))],"wrap"!==D&&u["wrap-xs-".concat(String(D))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==o&&u["align-content-xs-".concat(String(o))],"flex-start"!==O&&u["justify-xs-".concat(String(O))],!1!==R&&u["grid-xs-".concat(String(R))],!1!==_&&u["grid-sm-".concat(String(_))],!1!==A&&u["grid-md-".concat(String(A))],!1!==j&&u["grid-lg-".concat(String(j))],!1!==P&&u["grid-xl-".concat(String(P))]);return c.createElement(f,Object(r.a)({className:H,ref:t},M))})),m=Object(o.a)((function(e){return Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return l.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs"),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};s.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(d);t.a=m},1798:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),i=(a(3),a(2)),o=a(9),l=c.forwardRef((function(e,t){var a=e.classes,o=e.className,l=e.component,s=void 0===l?"div":l,u=Object(r.a)(e,["classes","className","component"]);return c.createElement(s,Object(n.a)({ref:t,className:Object(i.default)(a.root,o)},u))}));t.a=Object(o.a)({root:{width:"100%",overflowX:"auto"}},{name:"MuiTableContainer"})(l)},1890:function(e,t,a){"use strict";var n=a(1),r=a(4),c=a(0),i=(a(3),a(2)),o=a(9),l=c.forwardRef((function(e,t){var a=e.classes,o=e.className,l=Object(r.a)(e,["classes","className"]);return c.createElement("div",Object(n.a)({className:Object(i.default)(a.root,o),ref:t},l))}));t.a=Object(o.a)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(l)},3409:function(e,t,a){"use strict";a.r(t);var n=a(210),r=a(211),c=a(0),i=a.n(c),o=a(22),l=a(1580),s=a(1647),u=a(1648),d=a(1591),m=a(1798),f=a(1650),p=a(1592),b=a(228),g=a(1890),y=a(1585),E=a(1594),h=a(1710),x=a(1590),O=a(21),v=(a(8),a(5)),j=a(1630),S=a(1674),A=Object(l.a)((function(e){return{table:{minWidth:300},root:{flexGrow:1,width:"100%"},paper:{padding:"",textAlign:"center"},fit:{height:"fit-content"},cursor:{cursor:"pointer"},heading:{fontSize:e.typography.pxToRem(15),fontWeight:e.typography.fontWeightRegular},removeUnderline:{textDecoration:"none !important"}}}));var w=Object(r.a)("hpi",S.a)((function(e){var t=A(),a=Object(c.useState)([]),n=Object(o.a)(a,2),r=n[0],l=n[1],S=Object(v.d)((function(e){return e.hpi.problems.problems}));console.log("problemLists",S);var w=Object(v.c)();Object(c.useEffect)((function(){l(S)}),[S]);var _=function(e,t,a){var n=JSON.parse(JSON.stringify(r));n[e][t]=a,l(n)};return i.a.createElement("div",{className:t.root},i.a.createElement(g.a,null,i.a.createElement(h.a,{container:!0,spacing:5,style:{padding:"10px"}},i.a.createElement(m.a,{component:b.a},i.a.createElement(s.a,{size:"small","aria-label":"a dense table"},i.a.createElement(f.a,null,i.a.createElement(p.a,null,i.a.createElement(d.a,{style:{fontWeight:"bold"},rowSpan:2},"Problem"),i.a.createElement(d.a,{style:{fontWeight:"bold"},colSpan:2,align:"center"},"CC"),i.a.createElement(d.a,{style:{fontWeight:"bold"},rowSpan:2,align:"center"},"HPI"),i.a.createElement(d.a,{style:{fontWeight:"bold"},rowSpan:2,align:"center"},"PMH"),i.a.createElement(d.a,{style:{fontWeight:"bold"},colSpan:2,align:"center"},"Assessment")),i.a.createElement(p.a,null,i.a.createElement(d.a,{style:{fontWeight:"bold"},align:"center"},"Chronic"),i.a.createElement(d.a,{style:{fontWeight:"bold"},align:"center"},"Acute"),i.a.createElement(d.a,{style:{fontWeight:"bold"},align:"center"},"Primary"),i.a.createElement(d.a,{style:{fontWeight:"bold"},align:"center"},"Second"))),i.a.createElement(u.a,null,r&&r.length>0?r.map((function(e,t){return i.a.createElement(p.a,{key:t},i.a.createElement(d.a,{style:{color:"light-blue"}},e.item),i.a.createElement(d.a,{align:"center"},"1.",i.a.createElement(y.a,{value:"start",control:i.a.createElement(E.a,{color:"primary",checked:"chronic"===e.cc,onClick:function(){return _(t,"cc","chronic")}}),labelPlacement:"start"})),i.a.createElement(d.a,{align:"center"},"2.",i.a.createElement(y.a,{value:"start",control:i.a.createElement(E.a,{color:"primary",checked:"acute"===e.cc,onClick:function(){return _(t,"cc","acute")}}),labelPlacement:"start"})),i.a.createElement(d.a,{align:"center"},i.a.createElement(y.a,{style:{marginLeft:"0"},value:"start",control:i.a.createElement(E.a,{color:"primary",checked:e.hpi,onClick:function(e){return _(t,"hpi",e.target.checked)}}),labelPlacement:"start"})),i.a.createElement(d.a,{align:"center"},i.a.createElement(y.a,{style:{marginLeft:"0"},value:"start",control:i.a.createElement(E.a,{color:"primary",checked:e.pmh,onClick:function(e){return _(t,"pmh",e.target.checked)}}),labelPlacement:"start"})),i.a.createElement(d.a,{align:"center"},"P",i.a.createElement(y.a,{value:"start",control:i.a.createElement(E.a,{color:"primary",checked:"p"===e.ass,onClick:function(){return _(t,"ass","p")}}),labelPlacement:"start"})),i.a.createElement(d.a,{align:"center"},"S",i.a.createElement(y.a,{value:"start",control:i.a.createElement(E.a,{color:"primary",checked:"s"===e.ass,onClick:function(){return _(t,"ass","s")}}),labelPlacement:"start"})))})):null)),i.a.createElement(O.a,{to:"/charting",className:t.removeUnderline},i.a.createElement(x.a,{style:{margin:"10px",float:"right"},className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary"},"Cancel")),i.a.createElement(O.a,{to:"/charting",className:t.removeUnderline},i.a.createElement(x.a,{style:{margin:"10px",float:"right"},className:"whitespace-no-wrap normal-case",variant:"contained",color:"secondary",onClick:function(){w(j.eb(r))}},"Save"))))))})),_=a(79),C=a(6);var k={templateFlag:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET TEMPLATE FLAG":return Object(C.a)(Object(C.a)({},e),{},{templateFlag:!0});default:return e}},D=Object(_.d)({problemSelectionGrid:T}),N=a(70),P=a(1581),L=a(817),R=a(1587),I=a(229),G=Object(l.a)((function(e){return{removeUnderline:{textDecoration:"none !important"}}}));var M=function(e){var t=G();return i.a.createElement("div",{className:"flex flex-1 items-center justify-between p-8 sm:p-24 relative"},i.a.createElement("div",{className:"flex flex-shrink items-center sm:w-300"},i.a.createElement("div",{className:"flex items-center"},i.a.createElement(N.a,{animation:"transition.slideLeftIn",delay:300},i.a.createElement(I.a,{variant:"h6"},"Problem Selection Grid")))),i.a.createElement("div",{className:"flex flex-1 items-center justify-end"},i.a.createElement(O.a,{to:"/charting",className:t.removeUnderline},i.a.createElement(R.a,{title:"return"},i.a.createElement(L.a,null,i.a.createElement(P.a,{color:"action"},"keyboard_backspace"))))))};t.default=Object(r.a)("problemApp",D)((function(e){var t=Object(c.useRef)(null);return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,{classes:{contentWrapper:"p-16 sm:p-24 pb-80",content:"flex min-h-full",leftSidebar:"w-256 border-0",header:"min-h-72 h-72"},header:i.a.createElement(M,{pageLayout:t}),content:i.a.createElement("div",{className:"flex flex-col w-full items-left"},i.a.createElement(h.a,{container:!0,spacing:5},i.a.createElement(h.a,{container:!0,item:!0,md:12,sm:12,spacing:3},i.a.createElement(w,null)))),sidebarInner:!0,ref:t,innerScroll:!0}))}))}}]);
(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[102],{1624:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var a=n(22),o=n(149),r=n(1605),l=n(1614),i=n(1581),s=n(3238),c=n(3412),m=n(0),d=n.n(m),p=n(12),u=n(6),h=n(84),f=n(85),b=n(165),E=n(164),g=n(1527),y=n(796),v=n(1571),w=n(1604),x=n(9),N=n(186),k=n(521),S=n(1625),M=n.n(S),j=Object(g.a)({productionPrefix:"iframe-"}),C=function(e){Object(b.a)(n,e);var t=Object(E.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(N.b)(Object(u.a)(Object(u.a)({},Object(y.a)()),{},{plugins:[].concat(Object(p.a)(Object(y.a)().plugins),[Object(k.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),d.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(f.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return d.a.createElement(M.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?d.a.createElement(v.b,{jss:this.state.jss,generateClassName:j,sheetsManager:this.state.sheetsManager},d.a.createElement(w.a,{theme:a},d.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(d.a.Component),O=Object(x.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(C);function T(e){var t=Object(m.useState)(e.currentTabIndex),n=Object(a.a)(t,2),p=n[0],u=n[1],h=e.component,f=e.raw,b=e.iframe,E=e.className;return d.a.createElement(l.a,{className:E},d.a.createElement(r.a,{position:"static",color:"default",elevation:0},d.a.createElement(c.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:p,onChange:function(e,t){u(t)}},h&&d.a.createElement(s.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"remove_red_eye")}),f&&d.a.createElement(s.a,{classes:{root:"min-w-64"},icon:d.a.createElement(i.a,null,"code")}))),d.a.createElement("div",{className:"flex justify-center"},d.a.createElement("div",{className:0===p?"flex flex-1":"hidden"},h&&(b?d.a.createElement(O,null,d.a.createElement(h,null)):d.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},d.a.createElement(h,null)))),d.a.createElement("div",{className:1===p?"flex flex-1":"hidden"},f&&d.a.createElement("div",{className:"flex flex-1"},d.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},f.default)))))}T.defaultProps={currentTabIndex:0};var R=T},2768:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(22),o=n(0),r=n.n(o),l=n(1580),i=n(392);function s(){return Math.round(20*Math.random())-10}function c(){var e=50+s(),t=50+s();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var m=Object(l.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function d(){var e=m(),t=r.a.useState(c),n=Object(a.a)(t,1)[0],o=r.a.useState(!1),l=Object(a.a)(o,2),s=l[0],p=l[1],u=r.a.createElement("div",{style:n,className:e.paper},r.a.createElement("h2",{id:"simple-modal-title"},"Text in a modal"),r.a.createElement("p",{id:"simple-modal-description"},"Duis mollis, est non commodo luctus, nisi erat porttitor ligula."),r.a.createElement(d,null));return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){p(!0)}},"Open Modal"),r.a.createElement(i.a,{open:s,onClose:function(){p(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},u))}},2769:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\n\nfunction rand() {\n  return Math.round(Math.random() * 20) - 10;\n}\n\nfunction getModalStyle() {\n  const top = 50 + rand();\n  const left = 50 + rand();\n\n  return {\n    top: `${top}%`,\n    left: `${left}%`,\n    transform: `translate(-${top}%, -${left}%)`,\n  };\n}\n\nconst useStyles = makeStyles((theme) => ({\n  paper: {\n    position: 'absolute',\n    width: 400,\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function SimpleModal() {\n  const classes = useStyles();\n  // getModalStyle is not a pure function, we roll the style only on the first render\n  const [modalStyle] = React.useState(getModalStyle);\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  const body = (\n    <div style={modalStyle} className={classes.paper}>\n      <h2 id=\"simple-modal-title\">Text in a modal</h2>\n      <p id=\"simple-modal-description\">\n        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\n      </p>\n      <SimpleModal />\n    </div>\n  );\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        Open Modal\n      </button>\n      <Modal\n        open={open}\n        onClose={handleClose}\n        aria-labelledby=\"simple-modal-title\"\n        aria-describedby=\"simple-modal-description\"\n      >\n        {body}\n      </Modal>\n    </div>\n  );\n}\n"},2770:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n(22),o=n(0),r=n.n(o),l=n(1580),i=n(392),s=n(794),c=n(793),m=Object(l.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function d(){var e=m(),t=r.a.useState(!1),n=Object(a.a)(t,2),o=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){l(!0)}},"react-transition-group"),r.a.createElement(i.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:o,onClose:function(){l(!1)},closeAfterTransition:!0,BackdropComponent:s.a,BackdropProps:{timeout:500}},r.a.createElement(c.a,{in:o},r.a.createElement("div",{className:e.paper},r.a.createElement("h2",{id:"transition-modal-title"},"Transition modal"),r.a.createElement("p",{id:"transition-modal-description"},"react-transition-group animates me.")))))}},2771:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport Fade from '@material-ui/core/Fade';\n\nconst useStyles = makeStyles((theme) => ({\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function TransitionsModal() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        react-transition-group\n      </button>\n      <Modal\n        aria-labelledby=\"transition-modal-title\"\n        aria-describedby=\"transition-modal-description\"\n        className={classes.modal}\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <div className={classes.paper}>\n            <h2 id=\"transition-modal-title\">Transition modal</h2>\n            <p id=\"transition-modal-description\">react-transition-group animates me.</p>\n          </div>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"},2772:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(22),o=n(212),r=n(0),l=n.n(r),i=n(1580),s=n(392),c=n(794),m=n(2269),d=Object(i.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}})),p=l.a.forwardRef((function(e,t){var n=e.in,a=e.children,r=e.onEnter,i=e.onExited,s=Object(o.a)(e,["in","children","onEnter","onExited"]),c=Object(m.useSpring)({from:{opacity:0},to:{opacity:n?1:0},onStart:function(){n&&r&&r()},onRest:function(){!n&&i&&i()}});return l.a.createElement(m.animated.div,Object.assign({ref:t,style:c},s),a)}));function u(){var e=d(),t=l.a.useState(!1),n=Object(a.a)(t,2),o=n[0],r=n[1];return l.a.createElement("div",null,l.a.createElement("button",{type:"button",onClick:function(){r(!0)}},"react-spring"),l.a.createElement(s.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:e.modal,open:o,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:c.a,BackdropProps:{timeout:500}},l.a.createElement(p,{in:o},l.a.createElement("div",{className:e.paper},l.a.createElement("h2",{id:"spring-modal-title"},"Spring modal"),l.a.createElement("p",{id:"spring-modal-description"},"react-spring animates me.")))))}},2773:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\nimport Backdrop from '@material-ui/core/Backdrop';\nimport { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support\n\nconst useStyles = makeStyles((theme) => ({\n  modal: {\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nconst Fade = React.forwardRef(function Fade(props, ref) {\n  const { in: open, children, onEnter, onExited, ...other } = props;\n  const style = useSpring({\n    from: { opacity: 0 },\n    to: { opacity: open ? 1 : 0 },\n    onStart: () => {\n      if (open && onEnter) {\n        onEnter();\n      }\n    },\n    onRest: () => {\n      if (!open && onExited) {\n        onExited();\n      }\n    },\n  });\n\n  return (\n    <animated.div ref={ref} style={style} {...other}>\n      {children}\n    </animated.div>\n  );\n});\n\nFade.propTypes = {\n  children: PropTypes.element,\n  in: PropTypes.bool.isRequired,\n  onEnter: PropTypes.func,\n  onExited: PropTypes.func,\n};\n\nexport default function SpringModal() {\n  const classes = useStyles();\n  const [open, setOpen] = React.useState(false);\n\n  const handleOpen = () => {\n    setOpen(true);\n  };\n\n  const handleClose = () => {\n    setOpen(false);\n  };\n\n  return (\n    <div>\n      <button type=\"button\" onClick={handleOpen}>\n        react-spring\n      </button>\n      <Modal\n        aria-labelledby=\"spring-modal-title\"\n        aria-describedby=\"spring-modal-description\"\n        className={classes.modal}\n        open={open}\n        onClose={handleClose}\n        closeAfterTransition\n        BackdropComponent={Backdrop}\n        BackdropProps={{\n          timeout: 500,\n        }}\n      >\n        <Fade in={open}>\n          <div className={classes.paper}>\n            <h2 id=\"spring-modal-title\">Spring modal</h2>\n            <p id=\"spring-modal-description\">react-spring animates me.</p>\n          </div>\n        </Fade>\n      </Modal>\n    </div>\n  );\n}\n"},2774:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var a=n(0),o=n.n(a),r=n(1580),l=n(392),i=Object(r.a)((function(e){return{root:{height:300,flexGrow:1,minWidth:300,transform:"translateZ(0)","@media all and (-ms-high-contrast: none)":{display:"none"}},modal:{display:"flex",padding:e.spacing(1),alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));function s(){var e=i(),t=o.a.useRef(null);return o.a.createElement("div",{className:e.root,ref:t},o.a.createElement(l.a,{disablePortal:!0,disableEnforceFocus:!0,disableAutoFocus:!0,open:!0,"aria-labelledby":"server-modal-title","aria-describedby":"server-modal-description",className:e.modal,container:function(){return t.current}},o.a.createElement("div",{className:e.paper},o.a.createElement("h2",{id:"server-modal-title"},"Server-side modal"),o.a.createElement("p",{id:"server-modal-description"},"If you disable JavaScript, you will still see me."))))}},2775:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Modal from '@material-ui/core/Modal';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    height: 300,\n    flexGrow: 1,\n    minWidth: 300,\n    transform: 'translateZ(0)',\n    // The position fixed scoping doesn't work in IE 11.\n    // Disable this demo to preserve the others.\n    '@media all and (-ms-high-contrast: none)': {\n      display: 'none',\n    },\n  },\n  modal: {\n    display: 'flex',\n    padding: theme.spacing(1),\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  paper: {\n    width: 400,\n    backgroundColor: theme.palette.background.paper,\n    border: '2px solid #000',\n    boxShadow: theme.shadows[5],\n    padding: theme.spacing(2, 4, 3),\n  },\n}));\n\nexport default function ServerModal() {\n  const classes = useStyles();\n  const rootRef = React.useRef(null);\n\n  return (\n    <div className={classes.root} ref={rootRef}>\n      <Modal\n        disablePortal\n        disableEnforceFocus\n        disableAutoFocus\n        open\n        aria-labelledby=\"server-modal-title\"\n        aria-describedby=\"server-modal-description\"\n        className={classes.modal}\n        container={() => rootRef.current}\n      >\n        <div className={classes.paper}>\n          <h2 id=\"server-modal-title\">Server-side modal</h2>\n          <p id=\"server-modal-description\">If you disable JavaScript, you will still see me.</p>\n        </div>\n      </Modal>\n    </div>\n  );\n}\n"},3288:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1624),l=n(149),i=n(210),s=n(1590),c=n(1581),m=n(229),d=n(1580),p=Object(d.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=p();return o.a.createElement(i.a,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(c.a,{className:"text-18",color:"action"},"home"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Documentation"),o.a.createElement(c.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(m.a,{variant:"h6"},"Modal")),o.a.createElement(s.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/modal",target:"_blank",role:"button"},o.a.createElement(c.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(m.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Modal"),o.a.createElement(m.a,{className:"description"},"The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The component renders its ",o.a.createElement("code",null,"children")," node in front of a backdrop component. The ",o.a.createElement("code",null,"Modal")," offers important features:"),o.a.createElement("ul",null,o.a.createElement("li",null,"\ud83d\udc84 Manages modal stacking when one-at-a-time just isn't enough."),o.a.createElement("li",null,"\ud83d\udd10 Creates a backdrop, for disabling interaction below the modal."),o.a.createElement("li",null,"\ud83d\udd10 It disables scrolling of the page content while open."),o.a.createElement("li",null,"\u267f\ufe0f It properly manages focus; moving to the modal content, and keeping it there until the modal is closed."),o.a.createElement("li",null,"\u267f\ufe0f Adds the appropriate ARIA roles automatically."),o.a.createElement("li",null,"\ud83d\udce6 ",o.a.createElement("a",{href:"/size-snapshot"},"5 kB gzipped"),".")),o.a.createElement("blockquote",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("strong",null,"Terminology note"),'. The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A modal window describes parts of a UI. An element is considered modal if ',o.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Modal_window"},"it blocks interaction with the rest of the application"),".")),o.a.createElement(m.a,{className:"mb-16",component:"div"},"If you are creating a modal dialog, you probably want to use the ",o.a.createElement("a",{href:"/components/dialogs/"},"Dialog")," component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"/components/dialogs/"},"Dialog")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/drawers/"},"Drawer")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/menus/"},"Menu")),o.a.createElement("li",null,o.a.createElement("a",{href:"/components/popover/"},"Popover"))),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Simple modal"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2768).default,raw:n(2769)})),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Notice that you can disable the outline (often blue or gold) with the ",o.a.createElement("code",null,"outline: 0")," CSS property."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Transitions"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The open/close state of the modal can be animated with a transition component. This component should respect the following conditions:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Be a direct child descendent of the modal."),o.a.createElement("li",null,"Have an ",o.a.createElement("code",null,"in")," prop. This corresponds to the open / close state."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onEnter")," callback prop when the enter transition starts."),o.a.createElement("li",null,"Call the ",o.a.createElement("code",null,"onExited")," callback prop when the exit transition is completed. These two callbacks allow the modal to unmount the child content when closed and fully transitioned.")),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Modal has built-in support for ",o.a.createElement("a",{href:"https://github.com/reactjs/react-transition-group"},"react-transition-group"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2770).default,raw:n(2771)})),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Alternatively, you can use ",o.a.createElement("a",{href:"https://github.com/react-spring/react-spring"},"react-spring"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2772).default,raw:n(2773)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Server-side modal"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"React ",o.a.createElement("a",{href:"https://github.com/facebook/react/issues/13097"},"doesn't support")," the ",o.a.createElement("a",{href:"https://reactjs.org/docs/portals.html"},o.a.createElement("code",null,"createPortal()"))," API on the server. In order to display the modal, you need to disable the portal feature with the ",o.a.createElement("code",null,"disablePortal")," prop:"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2774).default,raw:n(2775)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Limitations"),o.a.createElement(m.a,{className:"text-24 mt-32 mb-8",component:"h3"},"Focus trap"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"The modal moves the focus back to the body of the component if the focus tries to escape it."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"This is done for accessibility purposes, however, it might create issues. In the event the users need to interact with another part of the page, e.g. with a chatbot window, you can disable the behavior:"),o.a.createElement(l.a,{component:"pre",className:"language-jsx"}," \n<Modal disableEnforceFocus />\n"),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"},"https://www.w3.org/TR/wai-aria-practices/#dialog_modal"),")"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},"Be sure to add ",o.a.createElement("code",null,'aria-labelledby="id..."'),", referencing the modal title, to the ",o.a.createElement("code",null,"Modal"),". Additionally, you may give a description of your modal with the ",o.a.createElement("code",null,'aria-describedby="id..."')," prop on the ",o.a.createElement("code",null,"Modal"),"."),o.a.createElement(l.a,{component:"pre",className:"language-jsx"},' \n<Modal\n  aria-labelledby="modal-title"\n  aria-describedby="modal-description"\n>\n  <h2 id="modal-title">\n    My Title\n  </h2>\n  <Typography id="modal-description">\n    My Description\n  </Typography>\n</Modal>\n')),o.a.createElement("li",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},"The ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html"},"WAI-ARIA authoring practices")," can help you set the initial focus on the most relevant element, based on your modal content.")),o.a.createElement("li",null,o.a.createElement(m.a,{className:"mb-16",component:"div"},'Keep in mind that a "modal window" overlays on either the primary window or another modal window. Windows under a modal are ',o.a.createElement("strong",null,"inert"),". That is, users cannot interact with content outside an active modal window. This might create ",o.a.createElement("a",{href:"#focus-trap"},"conflicting behaviors"),"."))))})}}}]);
(this["webpackJsonpfuse-react-app"]=this["webpackJsonpfuse-react-app"]||[]).push([[51],{1545:function(e,t,n){"use strict";n.r(t);var a=n(518);n.d(t,"default",(function(){return a.a}))},1620:function(e,t,n){"use strict";var a=n(798);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=r.default.memo(r.default.forwardRef((function(t,n){return r.default.createElement(l.default,(0,o.default)({ref:n},t),e)})));0;return n.muiName=l.default.muiName,n};var o=a(n(184)),r=a(n(0)),l=a(n(1545))},1621:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContextProvider=t.FrameContext=void 0;var a,o=n(0),r=(a=o)&&a.__esModule?a:{default:a};var l=void 0,c=void 0;"undefined"!==typeof document&&(l=document),"undefined"!==typeof window&&(c=window);var i=t.FrameContext=r.default.createContext({document:l,window:c}),s=i.Provider,m=i.Consumer;t.FrameContextProvider=s,t.FrameContextConsumer=m},1624:function(e,t,n){"use strict";n.d(t,"a",(function(){return _}));var a=n(22),o=n(149),r=n(1605),l=n(1614),c=n(1581),i=n(3238),s=n(3412),m=n(0),u=n.n(m),d=n(12),h=n(6),f=n(84),b=n(85),p=n(165),k=n(164),C=n(1527),v=n(796),g=n(1571),x=n(1604),E=n(9),y=n(186),w=n(521),F=n(1625),j=n.n(F),O=Object(C.a)({productionPrefix:"iframe-"}),P=function(e){Object(p.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={ready:!1},e.handleRef=function(t){e.contentDocument=t?t.node.contentDocument:null},e.onContentDidMount=function(){e.setState({ready:!0,jss:Object(y.b)(Object(h.a)(Object(h.a)({},Object(v.a)()),{},{plugins:[].concat(Object(d.a)(Object(v.a)().plugins),[Object(w.a)()]),insertionPoint:e.contentDocument.querySelector("#jss-demo-insertion-point")})),sheetsManager:new Map,container:e.contentDocument.body})},e.onContentDidUpdate=function(){e.contentDocument.body.dir=e.props.theme.direction},e.renderHead=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                    html {\n                    font-size: 62.5%;\n                    font-family: Muli, Roboto, Helvetica Neue, Arial, sans-serif;\n                    }\n                "}}),u.a.createElement("noscript",{id:"jss-demo-insertion-point"}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.classes,a=e.theme;return u.a.createElement(j.a,{head:this.renderHead(),ref:this.handleRef,className:n.root,contentDidMount:this.onContentDidMount,contentDidUpdate:this.onContentDidUpdate},this.state.ready?u.a.createElement(g.b,{jss:this.state.jss,generateClassName:O,sheetsManager:this.state.sheetsManager},u.a.createElement(x.a,{theme:a},u.a.cloneElement(t,{container:this.state.container}))):null)}}]),n}(u.a.Component),N=Object(E.a)((function(e){return{root:{backgroundColor:e.palette.background.default,flexGrow:1,height:400,border:"none",boxShadow:e.shadows[1]}}}),{withTheme:!0})(P);function L(e){var t=Object(m.useState)(e.currentTabIndex),n=Object(a.a)(t,2),d=n[0],h=n[1],f=e.component,b=e.raw,p=e.iframe,k=e.className;return u.a.createElement(l.a,{className:k},u.a.createElement(r.a,{position:"static",color:"default",elevation:0},u.a.createElement(s.a,{classes:{root:"border-b-1",flexContainer:"justify-end"},value:d,onChange:function(e,t){h(t)}},f&&u.a.createElement(i.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"remove_red_eye")}),b&&u.a.createElement(i.a,{classes:{root:"min-w-64"},icon:u.a.createElement(c.a,null,"code")}))),u.a.createElement("div",{className:"flex justify-center"},u.a.createElement("div",{className:0===d?"flex flex-1":"hidden"},f&&(p?u.a.createElement(N,null,u.a.createElement(f,null)):u.a.createElement("div",{className:"p-24 flex flex-1 justify-center"},u.a.createElement(f,null)))),u.a.createElement("div",{className:1===d?"flex flex-1":"hidden"},b&&u.a.createElement("div",{className:"flex flex-1"},u.a.createElement(o.a,{component:"pre",className:"language-javascript w-full"},b.default)))))}L.defaultProps={currentTabIndex:0};var _=L},1625:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FrameContextConsumer=t.FrameContext=void 0;var a=n(1621);Object.defineProperty(t,"FrameContext",{enumerable:!0,get:function(){return a.FrameContext}}),Object.defineProperty(t,"FrameContextConsumer",{enumerable:!0,get:function(){return a.FrameContextConsumer}});var o,r=n(1626),l=(o=r)&&o.__esModule?o:{default:o};t.default=l.default},1626:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),l=u(r),c=u(n(23)),i=u(n(3)),s=n(1621),m=u(n(1627));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return a.handleLoad=function(){a.forceUpdate()},a._isMounted=!1,a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this._isMounted=!0;var e=this.getDoc();e&&"complete"===e.readyState?this.forceUpdate():this.node.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.node.removeEventListener("load",this.handleLoad)}},{key:"getDoc",value:function(){return this.node?this.node.contentDocument:null}},{key:"getMountTarget",value:function(){var e=this.getDoc();return this.props.mountTarget?e.querySelector(this.props.mountTarget):e.body.children[0]}},{key:"renderFrameContents",value:function(){if(!this._isMounted)return null;var e=this.getDoc();if(!e)return null;var t=this.props.contentDidMount,n=this.props.contentDidUpdate,a=e.defaultView||e.parentView,o=l.default.createElement(m.default,{contentDidMount:t,contentDidUpdate:n},l.default.createElement(s.FrameContextProvider,{value:{document:e,window:a}},l.default.createElement("div",{className:"frame-content"},this.props.children)));e.body.children.length<1&&(e.open("text/html","replace"),e.write(this.props.initialContent),e.close());var r=this.getMountTarget();return[c.default.createPortal(this.props.head,this.getDoc().head),c.default.createPortal(o,r)]}},{key:"render",value:function(){var e=this,t=a({},this.props,{children:void 0});return delete t.head,delete t.initialContent,delete t.mountTarget,delete t.contentDidMount,delete t.contentDidUpdate,l.default.createElement("iframe",a({},t,{ref:function(t){e.node=t}}),this.renderFrameContents())}}]),t}(r.Component);d.propTypes={style:i.default.object,head:i.default.node,initialContent:i.default.string,mountTarget:i.default.string,contentDidMount:i.default.func,contentDidUpdate:i.default.func,children:i.default.oneOfType([i.default.element,i.default.arrayOf(i.default.element)])},d.defaultProps={style:{},head:null,children:void 0,mountTarget:void 0,contentDidMount:function(){},contentDidUpdate:function(){},initialContent:'<!DOCTYPE html><html><head></head><body><div class="frame-root"></div></body></html>'},t.default=d},1627:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),r=(l(o),l(n(3)));function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var s=function(e){function t(){return c(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.contentDidMount()}},{key:"componentDidUpdate",value:function(){this.props.contentDidUpdate()}},{key:"render",value:function(){return o.Children.only(this.props.children)}}]),t}(o.Component);s.propTypes={children:r.default.element.isRequired,contentDidMount:r.default.func.isRequired,contentDidUpdate:r.default.func.isRequired},t.default=s},1761:function(e,t,n){"use strict";var a=n(798);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(1620)).default)(o.default.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"}),"Favorite");t.default=r},2083:function(e,t,n){"use strict";var a=n(798);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(1620)).default)(o.default.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank");t.default=r},2084:function(e,t,n){"use strict";var a=n(798);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(1620)).default)(o.default.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox");t.default=r},2571:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n(22),o=n(0),r=n.n(o),l=n(1594);function c(){var e=r.a.useState(!0),t=Object(a.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",null,r.a.createElement(l.a,{checked:n,onChange:function(e){o(e.target.checked)},inputProps:{"aria-label":"primary checkbox"}}),r.a.createElement(l.a,{defaultChecked:!0,color:"primary",inputProps:{"aria-label":"secondary checkbox"}}),r.a.createElement(l.a,{inputProps:{"aria-label":"uncontrolled-checkbox"}}),r.a.createElement(l.a,{disabled:!0,inputProps:{"aria-label":"disabled checkbox"}}),r.a.createElement(l.a,{disabled:!0,checked:!0,inputProps:{"aria-label":"disabled checked checkbox"}}),r.a.createElement(l.a,{defaultChecked:!0,indeterminate:!0,inputProps:{"aria-label":"indeterminate checkbox"}}),r.a.createElement(l.a,{defaultChecked:!0,color:"default",inputProps:{"aria-label":"checkbox with default color"}}),r.a.createElement(l.a,{defaultChecked:!0,size:"small",inputProps:{"aria-label":"checkbox with small size"}}))}},2572:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport Checkbox from '@material-ui/core/Checkbox';\n\nexport default function Checkboxes() {\n  const [checked, setChecked] = React.useState(true);\n\n  const handleChange = (event) => {\n    setChecked(event.target.checked);\n  };\n\n  return (\n    <div>\n      <Checkbox\n        checked={checked}\n        onChange={handleChange}\n        inputProps={{ 'aria-label': 'primary checkbox' }}\n      />\n      <Checkbox\n        defaultChecked\n        color=\"primary\"\n        inputProps={{ 'aria-label': 'secondary checkbox' }}\n      />\n      <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />\n      <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />\n      <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />\n      <Checkbox\n        defaultChecked\n        indeterminate\n        inputProps={{ 'aria-label': 'indeterminate checkbox' }}\n      />\n      <Checkbox\n        defaultChecked\n        color=\"default\"\n        inputProps={{ 'aria-label': 'checkbox with default color' }}\n      />\n      <Checkbox\n        defaultChecked\n        size=\"small\"\n        inputProps={{ 'aria-label': 'checkbox with small size' }}\n      />\n    </div>\n  );\n}\n"},2573:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(56),o=n(6),r=n(22),l=n(0),c=n.n(l),i=n(9),s=n(240),m=n(1538),u=n(1585),d=n(1594),h=n(2083),f=n.n(h),b=n(2084),p=n.n(b),k=n(1761),C=n.n(k),v=n(2574),g=n.n(v),x=Object(i.a)({root:{color:s.a[400],"&$checked":{color:s.a[600]}},checked:{}})((function(e){return c.a.createElement(d.a,Object.assign({color:"default"},e))}));function E(){var e=c.a.useState({checkedA:!0,checkedB:!0,checkedF:!0,checkedG:!0}),t=Object(r.a)(e,2),n=t[0],l=t[1],i=function(e){l(Object(o.a)(Object(o.a)({},n),{},Object(a.a)({},e.target.name,e.target.checked)))};return c.a.createElement(m.a,{row:!0},c.a.createElement(u.a,{control:c.a.createElement(d.a,{checked:n.checkedA,onChange:i,name:"checkedA"}),label:"Secondary"}),c.a.createElement(u.a,{control:c.a.createElement(d.a,{checked:n.checkedB,onChange:i,name:"checkedB",color:"primary"}),label:"Primary"}),c.a.createElement(u.a,{control:c.a.createElement(d.a,{name:"checkedC"}),label:"Uncontrolled"}),c.a.createElement(u.a,{disabled:!0,control:c.a.createElement(d.a,{name:"checkedD"}),label:"Disabled"}),c.a.createElement(u.a,{disabled:!0,control:c.a.createElement(d.a,{checked:!0,name:"checkedE"}),label:"Disabled"}),c.a.createElement(u.a,{control:c.a.createElement(d.a,{checked:n.checkedF,onChange:i,name:"checkedF",indeterminate:!0}),label:"Indeterminate"}),c.a.createElement(u.a,{control:c.a.createElement(x,{checked:n.checkedG,onChange:i,name:"checkedG"}),label:"Custom color"}),c.a.createElement(u.a,{control:c.a.createElement(d.a,{icon:c.a.createElement(g.a,null),checkedIcon:c.a.createElement(C.a,null),name:"checkedH"}),label:"Custom icon"}),c.a.createElement(u.a,{control:c.a.createElement(d.a,{icon:c.a.createElement(f.a,{fontSize:"small"}),checkedIcon:c.a.createElement(p.a,{fontSize:"small"}),name:"checkedI"}),label:"Custom size"}))}},2574:function(e,t,n){"use strict";var a=n(798);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=(0,a(n(1620)).default)(o.default.createElement("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"}),"FavoriteBorder");t.default=r},2575:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { withStyles } from \'@material-ui/core/styles\';\nimport { green } from \'@material-ui/core/colors\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport CheckBoxOutlineBlankIcon from \'@material-ui/icons/CheckBoxOutlineBlank\';\nimport CheckBoxIcon from \'@material-ui/icons/CheckBox\';\nimport Favorite from \'@material-ui/icons/Favorite\';\nimport FavoriteBorder from \'@material-ui/icons/FavoriteBorder\';\n\nconst GreenCheckbox = withStyles({\n  root: {\n    color: green[400],\n    \'&$checked\': {\n      color: green[600],\n    },\n  },\n  checked: {},\n})((props) => <Checkbox color="default" {...props} />);\n\nexport default function CheckboxLabels() {\n  const [state, setState] = React.useState({\n    checkedA: true,\n    checkedB: true,\n    checkedF: true,\n    checkedG: true,\n  });\n\n  const handleChange = (event) => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  return (\n    <FormGroup row>\n      <FormControlLabel\n        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}\n        label="Secondary"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedB}\n            onChange={handleChange}\n            name="checkedB"\n            color="primary"\n          />\n        }\n        label="Primary"\n      />\n      <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />\n      <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />\n      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />\n      <FormControlLabel\n        control={\n          <Checkbox\n            checked={state.checkedF}\n            onChange={handleChange}\n            name="checkedF"\n            indeterminate\n          />\n        }\n        label="Indeterminate"\n      />\n      <FormControlLabel\n        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}\n        label="Custom color"\n      />\n      <FormControlLabel\n        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}\n        label="Custom icon"\n      />\n      <FormControlLabel\n        control={\n          <Checkbox\n            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}\n            checkedIcon={<CheckBoxIcon fontSize="small" />}\n            name="checkedI"\n          />\n        }\n        label="Custom size"\n      />\n    </FormGroup>\n  );\n}\n'},2576:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n(56),o=n(6),r=n(22),l=n(0),c=n.n(l),i=n(1580),s=n(1537),m=n(818),u=n(1538),d=n(1585),h=n(1542),f=n(1594),b=Object(i.a)((function(e){return{root:{display:"flex"},formControl:{margin:e.spacing(3)}}}));function p(){var e=b(),t=c.a.useState({gilad:!0,jason:!1,antoine:!1}),n=Object(r.a)(t,2),l=n[0],i=n[1],p=function(e){i(Object(o.a)(Object(o.a)({},l),{},Object(a.a)({},e.target.name,e.target.checked)))},k=l.gilad,C=l.jason,v=l.antoine,g=2!==[k,C,v].filter((function(e){return e})).length;return c.a.createElement("div",{className:e.root},c.a.createElement(m.a,{component:"fieldset",className:e.formControl},c.a.createElement(s.a,{component:"legend"},"Assign responsibility"),c.a.createElement(u.a,null,c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:k,onChange:p,name:"gilad"}),label:"Gilad Gray"}),c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:C,onChange:p,name:"jason"}),label:"Jason Killian"}),c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:v,onChange:p,name:"antoine"}),label:"Antoine Llorca"})),c.a.createElement(h.a,null,"Be careful")),c.a.createElement(m.a,{required:!0,error:g,component:"fieldset",className:e.formControl},c.a.createElement(s.a,{component:"legend"},"Pick two"),c.a.createElement(u.a,null,c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:k,onChange:p,name:"gilad"}),label:"Gilad Gray"}),c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:C,onChange:p,name:"jason"}),label:"Jason Killian"}),c.a.createElement(d.a,{control:c.a.createElement(f.a,{checked:v,onChange:p,name:"antoine"}),label:"Antoine Llorca"})),c.a.createElement(h.a,null,"You can display an error")))}},2577:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport { makeStyles } from \'@material-ui/core/styles\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormHelperText from \'@material-ui/core/FormHelperText\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\n\nconst useStyles = makeStyles((theme) => ({\n  root: {\n    display: \'flex\',\n  },\n  formControl: {\n    margin: theme.spacing(3),\n  },\n}));\n\nexport default function CheckboxesGroup() {\n  const classes = useStyles();\n  const [state, setState] = React.useState({\n    gilad: true,\n    jason: false,\n    antoine: false,\n  });\n\n  const handleChange = (event) => {\n    setState({ ...state, [event.target.name]: event.target.checked });\n  };\n\n  const { gilad, jason, antoine } = state;\n  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;\n\n  return (\n    <div className={classes.root}>\n      <FormControl component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Assign responsibility</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>Be careful</FormHelperText>\n      </FormControl>\n      <FormControl required error={error} component="fieldset" className={classes.formControl}>\n        <FormLabel component="legend">Pick two</FormLabel>\n        <FormGroup>\n          <FormControlLabel\n            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}\n            label="Gilad Gray"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}\n            label="Jason Killian"\n          />\n          <FormControlLabel\n            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}\n            label="Antoine Llorca"\n          />\n        </FormGroup>\n        <FormHelperText>You can display an error</FormHelperText>\n      </FormControl>\n    </div>\n  );\n}\n'},2578:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(0),o=n.n(a),r=n(1594),l=n(1538),c=n(1585),i=n(818),s=n(1537);function m(){return o.a.createElement(i.a,{component:"fieldset"},o.a.createElement(s.a,{component:"legend"},"Label Placement"),o.a.createElement(l.a,{"aria-label":"position",row:!0},o.a.createElement(c.a,{value:"top",control:o.a.createElement(r.a,{color:"primary"}),label:"Top",labelPlacement:"top"}),o.a.createElement(c.a,{value:"start",control:o.a.createElement(r.a,{color:"primary"}),label:"Start",labelPlacement:"start"}),o.a.createElement(c.a,{value:"bottom",control:o.a.createElement(r.a,{color:"primary"}),label:"Bottom",labelPlacement:"bottom"}),o.a.createElement(c.a,{value:"end",control:o.a.createElement(r.a,{color:"primary"}),label:"End",labelPlacement:"end"})))}},2579:function(e,t,n){"use strict";n.r(t),t.default='import React from \'react\';\nimport Checkbox from \'@material-ui/core/Checkbox\';\nimport FormGroup from \'@material-ui/core/FormGroup\';\nimport FormControlLabel from \'@material-ui/core/FormControlLabel\';\nimport FormControl from \'@material-ui/core/FormControl\';\nimport FormLabel from \'@material-ui/core/FormLabel\';\n\nexport default function FormControlLabelPosition() {\n  return (\n    <FormControl component="fieldset">\n      <FormLabel component="legend">Label Placement</FormLabel>\n      <FormGroup aria-label="position" row>\n        <FormControlLabel\n          value="top"\n          control={<Checkbox color="primary" />}\n          label="Top"\n          labelPlacement="top"\n        />\n        <FormControlLabel\n          value="start"\n          control={<Checkbox color="primary" />}\n          label="Start"\n          labelPlacement="start"\n        />\n        <FormControlLabel\n          value="bottom"\n          control={<Checkbox color="primary" />}\n          label="Bottom"\n          labelPlacement="bottom"\n        />\n        <FormControlLabel\n          value="end"\n          control={<Checkbox color="primary" />}\n          label="End"\n          labelPlacement="end"\n        />\n      </FormGroup>\n    </FormControl>\n  );\n}\n'},2580:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(0),o=n.n(a),r=n(2),l=n(1580),c=n(1594),i=Object(l.a)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:3,width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function s(e){var t=i();return o.a.createElement(c.a,Object.assign({className:t.root,disableRipple:!0,color:"default",checkedIcon:o.a.createElement("span",{className:Object(r.default)(t.icon,t.checkedIcon)}),icon:o.a.createElement("span",{className:t.icon}),inputProps:{"aria-label":"decorative checkbox"}},e))}function m(){return o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(s,{defaultChecked:!0}),o.a.createElement(s,{disabled:!0}))}},2581:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport clsx from 'clsx';\nimport { makeStyles } from '@material-ui/core/styles';\nimport Checkbox from '@material-ui/core/Checkbox';\n\nconst useStyles = makeStyles({\n  root: {\n    '&:hover': {\n      backgroundColor: 'transparent',\n    },\n  },\n  icon: {\n    borderRadius: 3,\n    width: 16,\n    height: 16,\n    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',\n    backgroundColor: '#f5f8fa',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',\n    '$root.Mui-focusVisible &': {\n      outline: '2px auto rgba(19,124,189,.6)',\n      outlineOffset: 2,\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#ebf1f5',\n    },\n    'input:disabled ~ &': {\n      boxShadow: 'none',\n      background: 'rgba(206,217,224,.5)',\n    },\n  },\n  checkedIcon: {\n    backgroundColor: '#137cbd',\n    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',\n    '&:before': {\n      display: 'block',\n      width: 16,\n      height: 16,\n      backgroundImage:\n        \"url(\\\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath\" +\n        \" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 \" +\n        \"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\\\")\",\n      content: '\"\"',\n    },\n    'input:hover ~ &': {\n      backgroundColor: '#106ba3',\n    },\n  },\n});\n\n// Inspired by blueprintjs\nfunction StyledCheckbox(props) {\n  const classes = useStyles();\n\n  return (\n    <Checkbox\n      className={classes.root}\n      disableRipple\n      color=\"default\"\n      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}\n      icon={<span className={classes.icon} />}\n      inputProps={{ 'aria-label': 'decorative checkbox' }}\n      {...props}\n    />\n  );\n}\n\nexport default function CustomizedCheckbox() {\n  return (\n    <div>\n      <StyledCheckbox />\n      <StyledCheckbox defaultChecked />\n      <StyledCheckbox disabled />\n    </div>\n  );\n}\n"},3272:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1624),l=n(149),c=n(210),i=n(1590),s=n(1581),m=n(229),u=n(1580),d=Object(u.a)((function(e){return{layoutRoot:{"& .description":{marginBottom:16}}}}));t.default=function(e){var t=d();return o.a.createElement(c.a,{classes:{root:t.layoutRoot},header:o.a.createElement("div",{className:"flex flex-1 items-center justify-between p-24"},o.a.createElement("div",{className:"flex flex-col"},o.a.createElement("div",{className:"flex items-center mb-16"},o.a.createElement(s.a,{className:"text-18",color:"action"},"home"),o.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Documentation"),o.a.createElement(s.a,{className:"text-16",color:"action"},"chevron_right"),o.a.createElement(m.a,{color:"textSecondary"},"Material UI Components")),o.a.createElement(m.a,{variant:"h6"},"Checkbox")),o.a.createElement(i.a,{className:"normal-case",variant:"contained",component:"a",href:"https://material-ui.com/components/checkboxes",target:"_blank",role:"button"},o.a.createElement(s.a,null,"link"),o.a.createElement("span",{className:"mx-4"},"Reference"))),content:o.a.createElement("div",{className:"p-24 max-w-2xl"},o.a.createElement(m.a,{className:"text-44 mt-32 mb-8",component:"h1"},"Checkbox"),o.a.createElement(m.a,{className:"description"},"Checkboxes allow the user to select one or more items from a set."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("a",{href:"https://material.io/design/components/selection-controls.html#checkboxes"},"Checkboxes")," can be used to turn an option on or off."),o.a.createElement(m.a,{className:"mb-16",component:"div"},"If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Basic checkboxes"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2571).default,raw:n(2572)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Checkbox with FormControlLabel"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"Checkbox")," can be provided with a label thanks to the ",o.a.createElement("code",null,"FormControlLabel")," component."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2573).default,raw:n(2575)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Checkboxes with FormGroup"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement("code",null,"FormGroup")," is a helpful wrapper used to group selection controls components that provides an easier API."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2576).default,raw:n(2577)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Label placement"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"You can change the placement of the label:"),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2578).default,raw:n(2579)})),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Customized checkbox"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"Here is an example of customizing the component. You can learn more about this in the",o.a.createElement("a",{href:"/customization/components/"},"overrides documentation page"),"."),o.a.createElement(m.a,{className:"mb-16",component:"div"},o.a.createElement(r.a,{className:"my-24",iframe:!1,component:n(2580).default,raw:n(2581)})),o.a.createElement(m.a,{className:"mb-16",component:"div"},"\ud83c\udfa8 If you are looking for inspiration, you can check ",o.a.createElement("a",{href:"https://mui-treasury.com/styles/checkbox"},"MUI Treasury's customization examples"),"."),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"When to use"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/"},"Checkboxes vs. Radio Buttons")),o.a.createElement("li",null,o.a.createElement("a",{href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8"},"Checkboxes vs. Switches"))),o.a.createElement(m.a,{className:"text-32 mt-32 mb-8",component:"h2"},"Accessibility"),o.a.createElement(m.a,{className:"mb-16",component:"div"},"(WAI-ARIA: ",o.a.createElement("a",{href:"https://www.w3.org/TR/wai-aria-practices/#checkbox"},"https://www.w3.org/TR/wai-aria-practices/#checkbox"),")"),o.a.createElement("ul",null,o.a.createElement("li",null,"All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the ",o.a.createElement("code",null,"<label>")," element (",o.a.createElement("a",{href:"/api/form-control-label/"},"FormControlLabel"),")."),o.a.createElement("li",null,"When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. ",o.a.createElement("code",null,"aria-label"),", ",o.a.createElement("code",null,"aria-labelledby"),", ",o.a.createElement("code",null,"title"),") via the ",o.a.createElement("code",null,"inputProps")," property.")),o.a.createElement(l.a,{component:"pre",className:"language-jsx"}," \n<Checkbox\n  value=\"checkedA\"\n  inputProps={{ 'aria-label': 'Checkbox A' \n/>\n"))})}}}]);
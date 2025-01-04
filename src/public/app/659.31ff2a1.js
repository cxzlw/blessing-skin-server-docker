"use strict";(self.webpackChunkblessing_skin_server=self.webpackChunkblessing_skin_server||[]).push([[659],{9072:function(e,t,s){var i=s(5893);s(7294);const a=new Map([["success","check"],["info","info"],["warning","exclamation-triangle"],["danger","times-circle"]]);t.Z=e=>{const{type:t}=e,s=a.get(t);return e.children?(0,i.jsxs)("div",Object.assign({className:`alert alert-${t}`},{children:[(0,i.jsx)("i",{className:`icon fas fa-${s}`},void 0),e.children]}),void 0):null}},7694:function(e,t,s){var i=s(5944),a=s(7294),n=s(7745),r=s.n(n),o=s(3601),c=s(88),l=s(6051);const u=Symbol();class d extends a.Component{constructor(e){super(e),Object.defineProperty(this,"state",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"ref",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"execute",{enumerable:!0,configurable:!0,writable:!0,value:async()=>{const e=this.ref.current;return e&&this.state.invisible?new Promise((t=>{const s=(0,o.on)(u,(e=>{t(e),s()}));e.execute()})):this.state.value}}),Object.defineProperty(this,"reset",{enumerable:!0,configurable:!0,writable:!0,value:()=>{const e=this.ref.current;e?e.reset():this.setState({time:Date.now()})}}),Object.defineProperty(this,"handleValueChange",{enumerable:!0,configurable:!0,writable:!0,value:e=>{this.setState({value:e.target.value})}}),Object.defineProperty(this,"handleVerify",{enumerable:!0,configurable:!0,writable:!0,value:e=>{(0,o.j)(u,e),this.setState({value:e})}}),Object.defineProperty(this,"handleRefresh",{enumerable:!0,configurable:!0,writable:!0,value:()=>{this.setState({time:Date.now()})}}),this.state={value:"",time:Date.now(),sitekey:blessing.extra.recaptcha,invisible:blessing.extra.invisible},this.ref=a.createRef()}render(){return this.state.sitekey?(0,i.tZ)("div",Object.assign({className:"mb-2"},{children:(0,i.tZ)(r(),{ref:this.ref,sitekey:this.state.sitekey,size:this.state.invisible?"invisible":"normal",onVerify:this.handleVerify},void 0)}),void 0):(0,i.BX)("div",Object.assign({className:"d-flex"},{children:[(0,i.tZ)("div",Object.assign({className:"form-group mb-3 mr-2"},{children:(0,i.tZ)("input",{type:"text",className:"form-control",placeholder:(0,c.t)("auth.captcha"),required:!0,value:this.state.value,onChange:this.handleValueChange},void 0)}),void 0),(0,i.tZ)("img",{src:`${blessing.base_url}/auth/captcha?v=${this.state.time}`,alt:(0,c.t)("auth.captcha"),css:l.G,height:34,title:(0,c.t)("auth.change-captcha"),onClick:this.handleRefresh},void 0)]}),void 0)}}t.Z=d},2982:function(e,t,s){var i=s(5944),a=s(7294),n=s(8808),r=s.n(n),o=s(917),c=s(3601),l=s(6051);const u=o.iv`
  .dropdown-menu li {
    ${l.G}
  }
`,d=new Set(["qq.com","163.com","gmail.com","hotmail.com"]);t.Z=e=>{const[t,s]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(0,c.j)("emailDomainsSuggestion",d)}),[]),(0,i.tZ)("div",Object.assign({css:u},{children:(0,i.tZ)(r(),{suggestions:t,onSuggestionsFetchRequested:({value:e})=>{const t=e.split("@");s([...d].map((e=>`${t[0]}@${e}`)))},onSuggestionsClearRequested:()=>{s([])},getSuggestionValue:e=>e,renderSuggestion:e=>e,shouldRenderSuggestions:e=>[...d].some((t=>e.endsWith(`@${t}`)))||e.length>0&&!e.includes("@"),inputProps:Object.assign({},e,{onChange:(t,s)=>{e.onChange(s.newValue)}}),renderInputComponent:e=>(0,i.BX)("div",Object.assign({className:"input-group"},{children:[(0,i.tZ)("input",Object.assign({className:"form-control"},e),void 0),(0,i.tZ)("div",Object.assign({className:"input-group-append"},{children:(0,i.tZ)("div",Object.assign({className:"input-group-text"},{children:(0,i.tZ)("i",{className:"fas fa-envelope"},void 0)}),void 0)}),void 0)]}),void 0),theme:{container:"mb-3",suggestion:"dropdown-item",suggestionsContainer:"dropdown",suggestionsList:"dropdown-menu "+(t.length?"show":""),suggestionHighlighted:"active"}},void 0)}),void 0)}},9341:function(e,t,s){s.d(t,{Z:function(){return a}});var i=s(7294);function a(e,t){const[s,a]=(0,i.useState)(t);return(0,i.useEffect)((()=>{a(blessing.extra[e])}),[e]),s}},9018:function(e,t,s){s.d(t,{Z:function(){return n}});var i=s(7294),a=s(3601);function n(){(0,i.useEffect)((()=>{(0,a.j)("mounted")}),[])}},6051:function(e,t,s){s.d(t,{G:function(){return a},b:function(){return n}});var i=s(917);const a=i.iv`
  cursor: pointer;
`,n=i.iv`
  display: flex;
  justify-content: center;
  align-items: center;
`},6659:function(e,t,s){s.r(t);var i=s(5893),a=s(7294),n=s(1570),r=s(9341),o=s(9018),c=s(88),l=s(6703),u=s(2065),d=s(8848),g=s(9072),h=s(7694),v=s(2982);t.default=(0,n.w)((()=>{const[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[p,m]=(0,a.useState)(""),[b,f]=(0,a.useState)(""),[j,x]=(0,a.useState)(""),[w,O]=(0,a.useState)(!1),[y,N]=(0,a.useState)(""),S=(0,r.Z)("player"),Z=(0,a.useRef)(null),C=(0,a.useRef)(null);return(0,o.Z)(),(0,i.jsxs)("form",Object.assign({onSubmit:async t=>{if(t.preventDefault(),N(""),s!==p)return N((0,c.t)("auth.invalidConfirmPwd")),void Z.current.focus();O(!0);const{code:i,message:a}=await l.v_(d.Z.auth.register(),Object.assign({email:e,password:s,captcha:await C.current.execute()},S?{player_name:j}:{nickname:b}));0===i?(u.A.success(a),setTimeout((()=>{window.location.href=`${blessing.base_url}/user`}),3e3)):(N(a),C.current.reset()),O(!1)}},{children:[(0,i.jsx)(v.Z,{type:"email",required:!0,autoFocus:!0,placeholder:(0,c.t)("auth.email"),value:e,onChange:t},void 0),(0,i.jsxs)("div",Object.assign({className:"input-group mb-3"},{children:[(0,i.jsx)("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:(0,c.t)("auth.password"),autoComplete:"new-password",value:s,onChange:e=>{n(e.target.value)}},void 0),(0,i.jsx)("div",Object.assign({className:"input-group-append"},{children:(0,i.jsx)("div",Object.assign({className:"input-group-text"},{children:(0,i.jsx)("i",{className:"fas fa-lock"},void 0)}),void 0)}),void 0)]}),void 0),(0,i.jsxs)("div",Object.assign({className:"input-group mb-3"},{children:[(0,i.jsx)("input",{type:"password",required:!0,minLength:8,maxLength:32,className:"form-control",placeholder:(0,c.t)("auth.repeat-pwd"),autoComplete:"new-password",ref:Z,value:p,onChange:e=>{m(e.target.value)}},void 0),(0,i.jsx)("div",Object.assign({className:"input-group-append"},{children:(0,i.jsx)("div",Object.assign({className:"input-group-text"},{children:(0,i.jsx)("i",{className:"fas fa-sign-in-alt"},void 0)}),void 0)}),void 0)]}),void 0),S?(0,i.jsxs)("div",Object.assign({className:"input-group mb-3",title:(0,c.t)("auth.player-name-intro")},{children:[(0,i.jsx)("input",{type:"text",required:!0,className:"form-control",placeholder:(0,c.t)("auth.player-name"),value:j,onChange:e=>{x(e.target.value)}},void 0),(0,i.jsx)("div",Object.assign({className:"input-group-append"},{children:(0,i.jsx)("div",Object.assign({className:"input-group-text"},{children:(0,i.jsx)("i",{className:"fas fa-gamepad"},void 0)}),void 0)}),void 0)]}),void 0):(0,i.jsxs)("div",Object.assign({className:"input-group mb-3",title:(0,c.t)("auth.nickname-intro")},{children:[(0,i.jsx)("input",{type:"text",required:!0,className:"form-control",placeholder:(0,c.t)("auth.nickname"),value:b,onChange:e=>{f(e.target.value)}},void 0),(0,i.jsx)("div",Object.assign({className:"input-group-append"},{children:(0,i.jsx)("div",Object.assign({className:"input-group-text"},{children:(0,i.jsx)("i",{className:"fas fa-gamepad"},void 0)}),void 0)}),void 0)]}),void 0),(0,i.jsx)(h.Z,{ref:C},void 0),(0,i.jsx)(g.Z,Object.assign({type:"warning"},{children:y}),void 0),(0,i.jsxs)("div",Object.assign({className:"d-flex justify-content-between align-items-center mb-3"},{children:[(0,i.jsx)("a",Object.assign({href:`${blessing.base_url}/auth/login`},{children:(0,c.t)("auth.login-link")}),void 0),(0,i.jsx)("button",Object.assign({className:"btn btn-primary",type:"submit",disabled:w},{children:w?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("i",{className:"fas fa-spinner fa-spin mr-1"},void 0),(0,c.t)("auth.registering")]},void 0):(0,c.t)("auth.register")}),void 0)]}),void 0)]}),void 0)}))}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{35443:function(t,e,r){Promise.resolve().then(r.bind(r,69262))},69262:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return te}});var i=r(9268),n=r(52591),o=r(53050),a=r(9376),s=r(47532),l=r(46750),d=r(40431),c=r(86006),u=r(78473),g=r(32223),h=r(47562),x=r(95457),m=r(18006),p=r(20102),f=r(89791),Z=r(72120),b=r(88539),v=r(13809);function j(t){return(0,v.Z)("MuiCircularProgress",t)}(0,b.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let P=["className","color","disableShrink","size","style","thickness","value","variant"],k=t=>t,A,w,I,y,C=(0,Z.F4)(A||(A=k`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),S=(0,Z.F4)(w||(w=k`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),L=t=>{let{classes:e,variant:r,color:i,disableShrink:n}=t,o={root:["root",r,`color${(0,u.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,u.Z)(r)}`,n&&"circleDisableShrink"]};return(0,h.Z)(o,j,e)},E=(0,x.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.root,e[r.variant],e[`color${(0,u.Z)(r.color)}`]]}})(({ownerState:t,theme:e})=>(0,d.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:e.transitions.create("transform")},"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main}),({ownerState:t})=>"indeterminate"===t.variant&&(0,Z.iv)(I||(I=k`
      animation: ${0} 1.4s linear infinite;
    `),C)),R=(0,x.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,e)=>e.svg})({display:"block"}),M=(0,x.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.circle,e[`circle${(0,u.Z)(r.variant)}`],r.disableShrink&&e.circleDisableShrink]}})(({ownerState:t,theme:e})=>(0,d.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:e.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>"indeterminate"===t.variant&&!t.disableShrink&&(0,Z.iv)(y||(y=k`
      animation: ${0} 1.4s ease-in-out infinite;
    `),S)),B=c.forwardRef(function(t,e){let r=(0,m.Z)({props:t,name:"MuiCircularProgress"}),{className:n,color:o="primary",disableShrink:a=!1,size:s=40,style:c,thickness:u=3.6,value:g=0,variant:h="indeterminate"}=r,x=(0,l.Z)(r,P),p=(0,d.Z)({},r,{color:o,disableShrink:a,size:s,thickness:u,value:g,variant:h}),Z=L(p),b={},v={},j={};if("determinate"===h){let t=2*Math.PI*((44-u)/2);b.strokeDasharray=t.toFixed(3),j["aria-valuenow"]=Math.round(g),b.strokeDashoffset=`${((100-g)/100*t).toFixed(3)}px`,v.transform="rotate(-90deg)"}return(0,i.jsx)(E,(0,d.Z)({className:(0,f.default)(Z.root,n),style:(0,d.Z)({width:s,height:s},v,c),ownerState:p,ref:e,role:"progressbar"},j,x,{children:(0,i.jsx)(R,{className:Z.svg,ownerState:p,viewBox:"22 22 44 44",children:(0,i.jsx)(M,{className:Z.circle,style:b,ownerState:p,cx:44,cy:44,r:(44-u)/2,fill:"none",strokeWidth:u})})}))});function $(t){return(0,v.Z)("MuiLoadingButton",t)}let D=(0,b.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),O=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],W=t=>{let{loading:e,loadingPosition:r,classes:i}=t,n={root:["root",e&&"loading"],startIcon:[e&&`startIconLoading${(0,u.Z)(r)}`],endIcon:[e&&`endIconLoading${(0,u.Z)(r)}`],loadingIndicator:["loadingIndicator",e&&`loadingIndicator${(0,u.Z)(r)}`]},o=(0,h.Z)(n,$,i);return(0,d.Z)({},i,o)},T=t=>"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t&&"classes"!==t,_=(0,x.ZP)(p.Z,{shouldForwardProp:t=>T(t)||"classes"===t,name:"MuiLoadingButton",slot:"Root",overridesResolver:(t,e)=>[e.root,e.startIconLoadingStart&&{[`& .${D.startIconLoadingStart}`]:e.startIconLoadingStart},e.endIconLoadingEnd&&{[`& .${D.endIconLoadingEnd}`]:e.endIconLoadingEnd}]})(({ownerState:t,theme:e})=>(0,d.Z)({[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0}},"center"===t.loadingPosition&&{transition:e.transitions.create(["background-color","box-shadow","border-color"],{duration:e.transitions.duration.short}),[`&.${D.loading}`]:{color:"transparent"}},"start"===t.loadingPosition&&t.fullWidth&&{[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginRight:-8}},"end"===t.loadingPosition&&t.fullWidth&&{[`& .${D.startIconLoadingStart}, & .${D.endIconLoadingEnd}`]:{transition:e.transitions.create(["opacity"],{duration:e.transitions.duration.short}),opacity:0,marginLeft:-8}})),z=(0,x.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:(t,e)=>{let{ownerState:r}=t;return[e.loadingIndicator,e[`loadingIndicator${(0,u.Z)(r.loadingPosition)}`]]}})(({theme:t,ownerState:e})=>(0,d.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{left:"small"===e.size?10:14},"start"===e.loadingPosition&&"text"===e.variant&&{left:6},"center"===e.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===e.loadingPosition&&("outlined"===e.variant||"contained"===e.variant)&&{right:"small"===e.size?10:14},"end"===e.loadingPosition&&"text"===e.variant&&{right:6},"start"===e.loadingPosition&&e.fullWidth&&{position:"relative",left:-10},"end"===e.loadingPosition&&e.fullWidth&&{position:"relative",right:-10})),N=c.forwardRef(function(t,e){let r=(0,m.Z)({props:t,name:"MuiLoadingButton"}),{children:n,disabled:o=!1,id:a,loading:s=!1,loadingIndicator:c,loadingPosition:u="center",variant:h="text"}=r,x=(0,l.Z)(r,O),p=(0,g.Z)(a),f=null!=c?c:(0,i.jsx)(B,{"aria-labelledby":p,color:"inherit",size:16}),Z=(0,d.Z)({},r,{disabled:o,loading:s,loadingIndicator:f,loadingPosition:u,variant:h}),b=W(Z),v=s?(0,i.jsx)(z,{className:b.loadingIndicator,ownerState:Z,children:f}):null;return(0,i.jsxs)(_,(0,d.Z)({disabled:o||s,id:p,ref:e},x,{variant:h,classes:b,ownerState:Z,children:["end"===Z.loadingPosition?n:v,"end"===Z.loadingPosition?v:n]}))});var F=r(99454),H=r(85857),U=r(14240),V=r(17095),X=r(59244),q=r(79285),G=r(64066),J=r(24214),Q=r(56008),K=r(40856),Y=r.n(K);let tt=()=>{let t=(0,Q.useRouter)(),[e,r]=c.useState(n.R),[a,s]=c.useState(!1),l=t=>{r({...e,[t.currentTarget.name]:t.currentTarget.value})},d=async()=>{t.push("/dashboard"),s(!0);try{let t=await J.Z.post("http://127.0.0.1:8888/api/bettor/login",e),r=t.data.token;localStorage.setItem("token",r),window.location.href="/dashboard"}catch(t){Y().fire("Failed","Account does not exist","error"),s(!1)}};return(0,i.jsx)(G.ZP,{container:!0,columns:12,justifyContent:"center",minHeight:"63vh",children:(0,i.jsx)(G.ZP,{item:!0,md:5,children:(0,i.jsx)(V.Z,{sx:{padding:"4rem",backgroundColor:o.O.silver,borderRadius:"1em"},children:(0,i.jsxs)("form",{action:"",method:"post",children:[(0,i.jsx)(U.Z,{variant:"h4",fontWeight:700,textAlign:"center",children:"Login"}),(0,i.jsx)("br",{})," ",(0,i.jsx)("br",{}),(0,i.jsxs)(G.ZP,{container:!0,columns:12,flexDirection:"row",justifyContent:"center",rowSpacing:2,children:[(0,i.jsx)(G.ZP,{item:!0,sm:8,md:8,lg:8,xl:8,xs:8,children:(0,i.jsx)(X.Z,{fullWidth:!0,children:(0,i.jsx)(q.Z,{id:"emailInput",name:"email",value:e.email,onChange:t=>l(t),"aria-describedby":"emailInput-helper-text",helperText:" ",label:"Email address"})})}),(0,i.jsx)(G.ZP,{item:!0,sm:8,md:8,lg:8,xl:8,xs:8,children:(0,i.jsx)(X.Z,{fullWidth:!0,children:(0,i.jsx)(q.Z,{id:"passwordInput",name:"password",value:e.password,onChange:t=>l(t),"aria-describedby":"passwordInput-helper-text",helperText:" ",type:"password",label:"Password"})})}),(0,i.jsx)(G.ZP,{item:!0,sm:8,md:8,lg:8,xl:8,xs:8,textAlign:"center",children:(0,i.jsx)(F.Z,{control:(0,i.jsx)(H.Z,{}),label:"Remember Me"})}),(0,i.jsx)(G.ZP,{item:!0,sm:6,md:6,lg:6,xl:6,xs:6,children:(0,i.jsx)(N,{loading:a,fullWidth:!0,onClick:d,sx:{padding:"1rem 3rem",fontWeight:700,backgroundColor:o.O.gold,color:"black","&:hover":{backgroundColor:o.O.gold+"99"}},children:"Login"})})]})]})})})})};function te(){return(0,i.jsxs)("div",{children:[(0,i.jsx)(s.default,{}),(0,i.jsx)(tt,{}),(0,i.jsx)(a.Z,{})]})}},52591:function(t,e,r){"use strict";r.d(e,{R:function(){return i}});let i={id:"",name:"",user_level:"",player_name:"",email:"",email_verified_at:"",password:"",pp_filepath:"",wallet_id:"",remember_token:"",created_at:"",updated_at:""}},53050:function(t,e,r){"use strict";r.d(e,{O:function(){return i}});let i={lightBlack:"rgb(33 33 33)",gold:"#efbc0d",silver:"#ededed"}},9376:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var i=r(9268),n=r(14240),o=r(64066),a=r(53050);function s(){return(0,i.jsx)(o.ZP,{container:!0,flexDirection:"column",alignContent:"center",columns:12,pt:4,pb:4,marginTop:6,sx:{borderTop:"solid 2px "+a.O.gold,backgroundColor:"rgb(40, 42, 48)",position:"relative",bottom:0},children:(0,i.jsx)(o.ZP,{item:!0,sm:!0,md:!0,lg:!0,xl:!0,xs:!0,children:(0,i.jsx)(n.Z,{variant:"subtitle1",color:"white",children:"\xa9 All rights reserved to Vegas 888 PH"})})})}},47532:function(t,e,r){"use strict";r.r(e),r.d(e,{LoggedHeader:function(){return k},default:function(){return A}});var i=r(9268),n=r(64066),o=r(69405),a=r(17095),s=r(14240),l=r(20102),d=r(57455),c=r(28744),u=r(6143),g=r(76394),h=r.n(g),x=r(53050),m=r(56008),p={src:"/_next/static/media/vegas888logo.7f5aee53.png",height:2322,width:3600,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAM1BMVEVMaXHkNjbPpE3cjUHWqUeecz/oMzfjNjbmNTboNTXROjrgTTzOnUjhSDrSf0eXkFLgiT03wsVlAAAAEXRSTlMAZDuzbQx3blEZPdBUr4gluhW1BsMAAAAJcEhZcwAAuIwAALiMAcz2uy8AAAAuSURBVHicFcEJEgAREAPADHMkWPz/tVu6YSXiEa1oFJT5zawB1O7XTwDR3FfgBxRHAPFoCE5eAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5},f=r(86006),Z=r(89082),b=r(75991),v=r(94359),j=r(79715),P=r(24214);let k=()=>{let[t,e]=f.useState();f.useEffect(()=>{let t=async()=>{try{let t=await P.Z.post("http://127.0.0.1:8888/api/bettor/tokenValue",null,{withCredentials:!0,headers:{Authorization:"Bearer "+localStorage.getItem("token")}}),r=t.data.user;void 0===t||e(r)}catch(t){}};t()},[]);let[r,c]=(0,f.useState)(null),g=()=>{c(null)},k=async()=>{c(null);try{let t=await P.Z.post("http://127.0.0.1:8888/api/bettor/logout",null,{withCredentials:!0,headers:{Authorization:"Bearer "+localStorage.getItem("token")}});t&&(document.location.href="/login")}catch(t){}},A=(0,m.useRouter)();return(0,i.jsxs)(n.ZP,{container:!0,flexDirection:"row",alignItems:"center",columns:12,pr:"6%",pl:"6%",pt:"1%",pb:"1%",mb:"3%",sx:{backgroundColor:"rgb(40, 42, 48)",borderBottom:"solid 2px "+x.O.gold},children:[(0,i.jsx)(n.ZP,{item:!0,xs:12,sm:4,md:!0,lg:!0,xl:!0,children:(0,i.jsx)(h(),{alt:"Logo",src:p,quality:100,width:120,height:60,onClick:()=>A.push("/dashboard"),style:{maxHeight:60,maxWidth:120,width:"auto",height:"auto",minWidth:100,minHeight:40,cursor:"pointer"}})}),(0,i.jsx)(n.ZP,{item:!0,xs:12,sm:8,md:!0,lg:!0,xl:!0,children:(0,i.jsxs)(n.ZP,{container:!0,flexDirection:"row",justifyContent:"flex-end",children:[(0,i.jsxs)(o.Z,{size:"small","aria-label":"small button group",sx:{alignItems:"center"},children:[(0,i.jsx)(a.Z,{sx:{maxHeight:"30px",padding:"0rem 1rem"},children:(0,i.jsx)(s.Z,{variant:"caption",fontWeight:800,children:"₱0.00"})}),(0,i.jsx)(l.Z,{size:"medium",variant:"contained",children:(0,i.jsx)(u.Z,{})})]}),(0,i.jsx)(d.Z,{onClick:t=>{c(t.currentTarget)},sx:{cursor:"pointer",margin:"0em 1em 0em 1em"}}),(0,i.jsx)(s.Z,{variant:"body1",style:{color:"white",display:"flex",alignItems:"center"},children:null==t?void 0:t.player_name}),(0,i.jsx)(Z.Z,{open:!!r,anchorEl:r,children:(0,i.jsx)(b.Z,{children:(0,i.jsxs)(v.Z,{anchorEl:r,open:!!r,onClose:g,children:[(0,i.jsx)(j.Z,{onClick:g,children:"View Profile"}),(0,i.jsx)(j.Z,{onClick:g,children:"Transaction History"}),(0,i.jsx)(j.Z,{onClick:k,children:"Logout"})]})})})]})})]})};function A(){let t=(0,m.useRouter)();return(0,i.jsxs)(n.ZP,{container:!0,flexDirection:"row",alignItems:"center",columns:12,pr:10,pl:10,pt:3,pb:3,mb:6,sx:{backgroundColor:"rgb(40, 42, 48)",borderBottom:"solid 2px "+x.O.gold},children:[(0,i.jsx)(n.ZP,{item:!0,sm:!0,md:!0,lg:!0,xl:!0,xs:12,children:"\xa0"}),(0,i.jsx)(n.ZP,{item:!0,sm:!0,md:!0,lg:!0,xl:!0,xs:12,textAlign:"center",children:(0,i.jsx)(h(),{alt:"Logo",src:p,quality:100,width:180,height:100})}),(0,i.jsx)(n.ZP,{item:!0,sm:!0,md:!0,lg:!0,xl:!0,xs:12,children:(0,i.jsxs)(n.ZP,{container:!0,flexDirection:"row",justifyContent:"flex-end",children:[(0,i.jsxs)(l.Z,{onClick:()=>t.push("/register"),sx:{padding:"1em 2em",fontWeight:700,color:x.O.lightBlack,backgroundColor:x.O.gold,border:"2px solid"+x.O.silver,"&:hover":{backgroundColor:x.O.gold+"99"}},children:["SIGN UP ",(0,i.jsx)(c.Z,{})," "]}),(0,i.jsx)(l.Z,{onClick:()=>t.push("/login"),variant:"text",sx:{paddingLeft:6,paddingRight:6,border:0,color:x.O.silver,fontWeight:700},children:"LOGIN"})]})})]})}}},function(t){t.O(0,[98,220,253,961,744],function(){return t(t.s=35443)}),_N_E=t.O()}]);
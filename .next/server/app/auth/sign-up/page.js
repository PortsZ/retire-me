(()=>{var e={};e.id=301,e.ids=[301],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},3772:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),s(33080),s(20156),s(35866);var r=s(23191),a=s(88716),i=s(37922),n=s.n(i),o=s(95231),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);s.d(t,l);let c=["",{children:["auth",{children:["sign-up",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,33080)),"/home/portsz/projects/portsz/finapp/retire-me/src/app/auth/sign-up/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,20156)),"/home/portsz/projects/portsz/finapp/retire-me/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/home/portsz/projects/portsz/finapp/retire-me/src/app/auth/sign-up/page.tsx"],p="/auth/sign-up/page",u={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/auth/sign-up/page",pathname:"/auth/sign-up",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},72188:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,12994,23)),Promise.resolve().then(s.t.bind(s,96114,23)),Promise.resolve().then(s.t.bind(s,9727,23)),Promise.resolve().then(s.t.bind(s,79671,23)),Promise.resolve().then(s.t.bind(s,41868,23)),Promise.resolve().then(s.t.bind(s,84759,23))},33888:(e,t,s)=>{Promise.resolve().then(s.bind(s,31708))},83959:(e,t,s)=>{Promise.resolve().then(s.bind(s,82420)),Promise.resolve().then(s.bind(s,60372))},35047:(e,t,s)=>{"use strict";var r=s(77389);s.o(r,"useRouter")&&s.d(t,{useRouter:function(){return r.useRouter}})},31708:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>o});var r=s(10326),a=s(24490),i=s(74723),n=s(35047);function o(){let e=(0,n.useRouter)(),{register:t,handleSubmit:s,formState:{errors:o},watch:l}=(0,i.cI)({mode:"onChange",defaultValues:{email:"",password:"",confirm_password:"",terms:!1}}),c=l("password");async function d(t){try{let s=await a.Z.post("http://127.0.0.1:3000/api/auth/sign-up",{email:t.email,password:t.password});201===s.status&&e.push("/auth/sign-in")}catch(e){console.log(e)}}return r.jsx("div",{className:"flex min-h-screen h-full flex-col items-center justify-center gap-6",children:r.jsx("div",{className:"w-full rounded-lg bg-glass bg-opacity-20 p-8 shadow sm:max-w-md ",children:(0,r.jsxs)("form",{onSubmit:s(d),className:"flex flex-col gap-4",action:"#",children:[r.jsx("h1",{className:"text-xl font-bold leading-tight text-white md:text-2xl",children:"Registre-se gratuitamente"}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"email",className:"mb-2 block text-sm font-medium text-white",children:"Seu Email"}),r.jsx("input",{type:"email",id:"email",className:"block w-full rounded bg-background p-2.5 text-black sm:text-sm",placeholder:"name@company.com",...t("email",{required:"O campo email \xe9 obrigat\xf3rio",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Endere\xe7o de email inv\xe1lido"}})}),o?.email?.message&&r.jsx("span",{className:"lowercase text-red-600",children:o.email.message})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-medium text-white",children:"Senha"}),r.jsx("input",{type:"password",id:"password",className:"block w-full rounded bg-background p-2.5 text-black sm:text-sm",placeholder:"••••••••",...t("password",{required:!0})}),o.password?.type==="required"&&r.jsx("span",{className:"lowercase text-red-600",children:"O campo de senha \xe9 obrigat\xf3rio"})]}),(0,r.jsxs)("div",{children:[r.jsx("label",{htmlFor:"password",className:"mb-2 block text-sm font-medium text-white",children:"Confirmar Senha"}),r.jsx("input",{type:"password",id:"confirm_password",className:"block w-full rounded bg-background p-2.5 text-black sm:text-sm",placeholder:"••••••••",...t("confirm_password",{required:"O campo confirmar a senha \xe9 obrigat\xf3rio",validate:e=>e===c||"As senhas n\xe3o s\xe3o iguais"})}),o.confirm_password&&r.jsx("span",{className:"lowercase text-red-600",children:o.confirm_password.message})]}),r.jsx("button",{className:"bg-slate-700 rounded p-2",children:"Registrar"}),(0,r.jsxs)("p",{className:"text-sm font-light text-white",children:["J\xe1 possui uma conta?"," ",r.jsx("a",{href:"/auth/sign-in?callbackUrl=/",className:"text-primary-600 dark:text-primary-500 font-medium hover:underline",children:"Fa\xe7a login aqui"})]})]})})})}},82420:(e,t,s)=>{"use strict";s.d(t,{default:()=>u});var r=s(10326),a=s(17577),i=s(77109),n=s(35388);let o={closed:{rotate:0,translateY:0},open:{rotate:45,translateY:2}},l={closed:{opacity:1},open:{opacity:0}},c={closed:{rotate:0,translateY:0},open:{rotate:-45,translateY:-2}},d={open:{height:"auto",padding:10,transition:{duration:.25}},closed:{height:0,transition:{duration:.25}}},p={open:{opacity:1,marginTop:10,transition:{duration:.3,delay:.25}},closed:{opacity:0,transition:{duration:.1}}},u=()=>{let{status:e,data:t}=(0,i.useSession)(),[s,u]=(0,a.useState)(!1);return(0,r.jsxs)("div",{className:"w-full flex",children:[(0,r.jsxs)("div",{className:"hidden md:flex w-full flex-row justify-between items-center bg-gray-800 p-4 px-16",children:[(0,r.jsxs)("div",{className:"flex items-end gap-10",children:[r.jsx("a",{href:"/",className:"leading-tight text-lime-300 font-light font-logo italic text-2xl",children:"Me_Aposenta"}),r.jsx("p",{className:"italic",children:t?`Hello, ${t.user?.username}`:""})]}),r.jsx("a",{href:"authenticated"===e?"/auth/sign-out":"/auth/sign-in",className:"text-zinc-100 italic",children:"authenticated"===e?"Log Out":"Sign In"})]}),(0,r.jsxs)("div",{className:"md:hidden w-full flex flex-col justify-between items-center bg-gray-800 p-4 px-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center w-full",children:[r.jsx("a",{href:"/",className:"leading-tight text-lime-300 font-light font-logo italic text-2xl",children:"Me_Aposenta"}),(0,r.jsxs)("div",{onClick:()=>u(!s),className:"flex flex-col gap-1 cursor-pointer",children:[r.jsx(n.E.div,{className:"h-1 w-10 bg-white rounded",variants:o,animate:s?"open":"closed"}),r.jsx(n.E.div,{className:"h-1 w-10 bg-white rounded",variants:l,animate:s?"open":"closed"}),r.jsx(n.E.div,{className:"h-1 w-10 bg-white rounded",variants:c,animate:s?"open":"closed"})]})]}),(0,r.jsxs)(n.E.div,{initial:"closed",animate:s?"open":"closed",variants:d,className:"w-full flex flex-col items-end gap-2",children:[r.jsx(n.E.p,{variants:p,className:"italic text-zinc-100",children:t?`Hello, ${t.user?.username}`:""}),r.jsx(n.E.a,{variants:p,href:"/auth/sign-in",className:"text-zinc-100 italic",children:"authenticated"===e?"Log Out":"Sign In"})]})]})]})}},60372:(e,t,s)=>{"use strict";s.d(t,{default:()=>i});var r=s(10326);s(17577);var a=s(77109);let i=({children:e})=>r.jsx(r.Fragment,{children:r.jsx(a.SessionProvider,{children:e})})},33080:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var r=s(68570);let a=(0,r.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/app/auth/sign-up/page.tsx`),{__esModule:i,$$typeof:n}=a;a.default;let o=(0,r.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/app/auth/sign-up/page.tsx#default`)},20156:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>x,metadata:()=>m});var r=s(19510),a=s(68570);let i=(0,a.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/services/SessionProviderFunction.tsx`),{__esModule:n,$$typeof:o}=i;i.default;let l=(0,a.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/services/SessionProviderFunction.tsx#default`),c=(0,a.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/components/Navigation/Navbar.tsx`),{__esModule:d,$$typeof:p}=c;c.default;let u=(0,a.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/components/Navigation/Navbar.tsx#default`);s(5023);let m={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-gray-900 font-body min-h-screen",children:(0,r.jsxs)(l,{children:[r.jsx(u,{}),e]})})})}},73881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(66621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[948,530,621,723,490],()=>s(3772));module.exports=r})();
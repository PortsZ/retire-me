(()=>{var e={};e.id=409,e.ids=[409],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},45073:(e,t,n)=>{"use strict";n.r(t),n.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>f,tree:()=>d}),n(7352),n(35866),n(20156);var r=n(23191),s=n(88716),i=n(37922),o=n.n(i),a=n(95231),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);n.d(t,l);let d=["",{children:["/_not-found",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(n.t.bind(n,35866,23)),"next/dist/client/components/not-found-error"]}]},{}]},{layout:[()=>Promise.resolve().then(n.bind(n,20156)),"/home/portsz/projects/portsz/finapp/retire-me/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(n.t.bind(n,35866,23)),"next/dist/client/components/not-found-error"]}],c=[],u="/_not-found/page",p={require:n,loadChunk:()=>Promise.resolve()},f=new r.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/_not-found/page",pathname:"/_not-found",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},72188:(e,t,n)=>{Promise.resolve().then(n.t.bind(n,12994,23)),Promise.resolve().then(n.t.bind(n,96114,23)),Promise.resolve().then(n.t.bind(n,9727,23)),Promise.resolve().then(n.t.bind(n,79671,23)),Promise.resolve().then(n.t.bind(n,41868,23)),Promise.resolve().then(n.t.bind(n,84759,23))},83959:(e,t,n)=>{Promise.resolve().then(n.bind(n,82420)),Promise.resolve().then(n.bind(n,60372))},82420:(e,t,n)=>{"use strict";n.d(t,{default:()=>p});var r=n(10326),s=n(17577),i=n(77109),o=n(35388);let a={closed:{rotate:0,translateY:0},open:{rotate:45,translateY:2}},l={closed:{opacity:1},open:{opacity:0}},d={closed:{rotate:0,translateY:0},open:{rotate:-45,translateY:-2}},c={open:{height:"auto",padding:10,transition:{duration:.25}},closed:{height:0,transition:{duration:.25}}},u={open:{opacity:1,marginTop:10,transition:{duration:.3,delay:.25}},closed:{opacity:0,transition:{duration:.1}}},p=()=>{let{status:e,data:t}=(0,i.useSession)(),[n,p]=(0,s.useState)(!1);return(0,r.jsxs)("div",{className:"w-full flex",children:[(0,r.jsxs)("div",{className:"hidden md:flex w-full flex-row justify-between items-center bg-gray-800 p-4 px-16",children:[(0,r.jsxs)("div",{className:"flex items-end gap-10",children:[r.jsx("a",{href:"/",className:"leading-tight text-lime-300 font-light font-logo italic text-2xl",children:"Me_Aposenta"}),r.jsx("p",{className:"italic",children:t?`Hello, ${t.user?.username}`:""})]}),r.jsx("a",{href:"authenticated"===e?"/auth/sign-out":"/auth/sign-in",className:"text-zinc-100 italic",children:"authenticated"===e?"Log Out":"Sign In"})]}),(0,r.jsxs)("div",{className:"md:hidden w-full flex flex-col justify-between items-center bg-gray-800 p-4 px-6",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center w-full",children:[r.jsx("a",{href:"/",className:"leading-tight text-lime-300 font-light font-logo italic text-2xl",children:"Me_Aposenta"}),(0,r.jsxs)("div",{onClick:()=>p(!n),className:"flex flex-col gap-1 cursor-pointer",children:[r.jsx(o.E.div,{className:"h-1 w-10 bg-white rounded",variants:a,animate:n?"open":"closed"}),r.jsx(o.E.div,{className:"h-1 w-10 bg-white rounded",variants:l,animate:n?"open":"closed"}),r.jsx(o.E.div,{className:"h-1 w-10 bg-white rounded",variants:d,animate:n?"open":"closed"})]})]}),(0,r.jsxs)(o.E.div,{initial:"closed",animate:n?"open":"closed",variants:c,className:"w-full flex flex-col items-end gap-2",children:[r.jsx(o.E.p,{variants:u,className:"italic text-zinc-100",children:t?`Hello, ${t.user?.username}`:""}),r.jsx(o.E.a,{variants:u,href:"/auth/sign-in",className:"text-zinc-100 italic",children:"authenticated"===e?"Log Out":"Sign In"})]})]})]})}},60372:(e,t,n)=>{"use strict";n.d(t,{default:()=>i});var r=n(10326);n(17577);var s=n(77109);let i=({children:e})=>r.jsx(r.Fragment,{children:r.jsx(s.SessionProvider,{children:e})})},16399:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{isNotFoundError:function(){return s},notFound:function(){return r}});let n="NEXT_NOT_FOUND";function r(){let e=Error(n);throw e.digest=n,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7352:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PARALLEL_ROUTE_DEFAULT_PATH:function(){return s},default:function(){return i}});let r=n(16399),s="next/dist/client/components/parallel-route-default.js";function i(){(0,r.notFound)()}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20156:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x,metadata:()=>f});var r=n(19510),s=n(68570);let i=(0,s.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/services/SessionProviderFunction.tsx`),{__esModule:o,$$typeof:a}=i;i.default;let l=(0,s.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/services/SessionProviderFunction.tsx#default`),d=(0,s.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/components/Navigation/Navbar.tsx`),{__esModule:c,$$typeof:u}=d;d.default;let p=(0,s.createProxy)(String.raw`/home/portsz/projects/portsz/finapp/retire-me/src/components/Navigation/Navbar.tsx#default`);n(5023);let f={title:"Create Next App",description:"Generated by create next app"};function x({children:e}){return r.jsx("html",{lang:"en",children:r.jsx("body",{className:"bg-gray-900 font-body min-h-screen",children:(0,r.jsxs)(l,{children:[r.jsx(p,{}),e]})})})}},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[948,530],()=>n(45073));module.exports=r})();
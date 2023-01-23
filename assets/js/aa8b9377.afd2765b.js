"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[3967],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(3117),o=(n(7294),n(3905));const a={sidebar_position:3},i="Adding translation Files",l={unversionedId:"Guides/translation",id:"version-0.9/Guides/translation",title:"Adding translation Files",description:"All translation Files can be found in this repo",source:"@site/versioned_docs/version-0.9/Guides/translation.md",sourceDirName:"Guides",slug:"/Guides/translation",permalink:"/docs/Guides/translation",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.9/Guides/translation.md",tags:[],version:"0.9",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"version-0.9/tutorialSidebar",previous:{title:"Database backups",permalink:"/docs/Guides/backups"},next:{title:"Uninstallation",permalink:"/docs/Guides/uninstallation"}},s={},c=[{value:"How to Install",id:"how-to-install",level:3}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-translation-files"},"Adding translation Files"),(0,o.kt)("p",null,"All translation Files can be found in this repo\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/1day2die/cpgg_lang"},"https://github.com/1day2die/cpgg_lang")),(0,o.kt)("h3",{id:"how-to-install"},"How to Install"),(0,o.kt)("p",null,"Download the needed language.json file and put it in your ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/www/controlpanel/resources/lang")),(0,o.kt)("p",null,"Now you need to enable the Language in your Dashboard Settings.\nGo to ",(0,o.kt)("inlineCode",{parentName:"p"},"YOUR_DASHBOARD.com/admin/settings#language")," and adjust your Settings accordingly.\nThe new Language should pop up in the selection Menu"))}p.isMDXComponent=!0}}]);
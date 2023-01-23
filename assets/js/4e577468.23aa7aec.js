"use strict";(self.webpackChunkcontrolpanel=self.webpackChunkcontrolpanel||[]).push([[1965],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>p});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),p=o,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(f,l(l({ref:n},d),{},{components:t})):a.createElement(f,l({ref:n},d))}));function p(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),o=t(3743);const r="tableOfContentsInline_prmo";function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:l}=e;return a.createElement("div",{className:r},a.createElement(o.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:l,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>f});var a=t(3117),o=t(7294),r=t(6668);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...o}=e;t>=0?n[t].children.push(o):a.push(o)})),a}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>s(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function d(){const e=(0,o.useRef)(0),{navbar:{hideOnScroll:n}}=(0,r.L)();return(0,o.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function u(e){const n=(0,o.useRef)(void 0),t=d();(0,o.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:o,minHeadingLevel:r,maxHeadingLevel:l}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let o=n;o<=t;o+=1)a.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:l}),s=c(i,{anchorTopOffset:t.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===d)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function m(e){let{toc:n,className:t,linkClassName:a,isChild:r}=e;return n.length?o.createElement("ul",{className:r?void 0:t},n.map((e=>o.createElement("li",{key:e.id},o.createElement("a",{href:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),o.createElement(m,{isChild:!0,toc:e.children,className:t,linkClassName:a}))))):null}const p=o.memo(m);function f(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:m,...f}=e;const v=(0,r.L)(),h=d??v.tableOfContents.minHeadingLevel,g=m??v.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,o.useMemo)((()=>i({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:h,maxHeadingLevel:g});return u((0,o.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:h,maxHeadingLevel:g}}),[s,c,h,g])),o.createElement(p,(0,a.Z)({toc:y,className:t,linkClassName:s},f))}},5220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=t(3117),o=(t(7294),t(3905)),r=t(3901);const l={sidebar_position:4},i="Uninstallation",s={unversionedId:"Guides/uninstallation",id:"version-0.8/Guides/uninstallation",title:"Uninstallation",description:'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.',source:"@site/versioned_docs/version-0.8/Guides/uninstallation.md",sourceDirName:"Guides",slug:"/Guides/uninstallation",permalink:"/docs/0.8/Guides/uninstallation",draft:!1,editUrl:"https://github.com/ControlPanel-gg/docs/tree/main/versioned_docs/version-0.8/Guides/uninstallation.md",tags:[],version:"0.8",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"version-0.8/tutorialSidebar",previous:{title:"Adding translation Files",permalink:"/docs/0.8/Guides/translation"}},c={},d=[{value:"Stop everything",id:"stop-everything",level:3},{value:"Remove",id:"remove",level:2},{value:"Service and cronjob",id:"service-and-cronjob",level:3},{value:"Webconfig and SSL certificates",id:"webconfig-and-ssl-certificates",level:3},{value:"Database and User",id:"database-and-user",level:3},{value:"Files",id:"files",level:3},{value:"Extra Dependency",id:"extra-dependency",level:3},{value:"Pterodactyl API Key",id:"pterodactyl-api-key",level:3}],u={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uninstallation"},"Uninstallation"),(0,o.kt)("p",null,'Users, folders and filenames have been renamed from "dashboard" \u21d2 "controlpanel". Be aware that the provided commands may not fit your installation. Please change the users, folder and filenames for the commands corresponding to your installation.'),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You will loose all data that you have stored in your ControlPanel.\nNote: This will only work if you followed our documentation, you might need to modify the commands to fit your installation.")),(0,o.kt)(r.Z,{toc:d,mdxType:"TOCInline"}),(0,o.kt)("h3",{id:"stop-everything"},"Stop everything"),(0,o.kt)("p",null,"You need to stop controlpanel and all of its services before you can uninstall it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /var/www/controlpanel\nsudo php artisan down\n\nsudo systemctl stop controlpanel\n")),(0,o.kt)("h2",{id:"remove"},"Remove"),(0,o.kt)("h3",{id:"service-and-cronjob"},"Service and cronjob"),(0,o.kt)("p",null,"You have to stop and remove the service and cronjob."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl stop controlpanel\nsudo systemctl disable controlpanel\nsudo rm /etc/systemd/system/controlpanel.service\nsudo systemctl daemon-reload\nsudo systemctl reset-failed\n")),(0,o.kt)("p",null,"To open the crontab run: ",(0,o.kt)("inlineCode",{parentName:"p"},"crontab -e")," and remove the following configuration from crontab."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"* * * * * php /var/www/controlpanel/artisan schedule:run >> /dev/null 2>&1\n")),(0,o.kt)("h3",{id:"webconfig-and-ssl-certificates"},"Webconfig and SSL certificates"),(0,o.kt)("p",null,"You now have to remove the webconfig and restart it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NGINX\nsudo unlink /etc/nginx/sites-enabled/controlpanel.conf\nsudo rm /etc/nginx/sites-available/controlpanel.conf\nsudo systemctl reload nginx\n# Apache2\nsudo a2dissite controlpanel.conf\nsudo rm /etc/apache2/sites-available/controlpanel.conf\nsudo systemctl reload apache2\n\nsudo certbot delete --cert-name <Your Domain>\n")),(0,o.kt)("h3",{id:"database-and-user"},"Database and User"),(0,o.kt)("p",null,"You now have to remove the database and user."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'sudo mysql -u root -p -e "DROP DATABASE controlpanel;"\nsudo mysql -u root -p -e "DROP USER \'controlpaneluser\'@\'127.0.0.1\';"\nsudo mysql -u root -p -e "FLUSH PRIVILEGES;"\n')),(0,o.kt)("h3",{id:"files"},"Files"),(0,o.kt)("p",null,"You now have to remove the files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf /var/www/controlpanel\n")),(0,o.kt)("h3",{id:"extra-dependency"},"Extra Dependency"),(0,o.kt)("p",null,"You need to uninstall this, use the appropriate PHP version (php -v)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt remove php8.0-intl\n")),(0,o.kt)("h3",{id:"pterodactyl-api-key"},"Pterodactyl API Key"),(0,o.kt)("p",null,"Login to your pterodactyl panel and go to the admin page.",(0,o.kt)("br",{parentName:"p"}),"\n","Then go to the API tab (",(0,o.kt)("inlineCode",{parentName:"p"},"/admin/api"),") and delete the key you made for controlpanel."))}m.isMDXComponent=!0}}]);
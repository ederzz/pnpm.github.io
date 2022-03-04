"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7188],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=s(r),d=a,m=h["".concat(o,".").concat(d)]||h[d]||u[d]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},911:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>p,contentTitle:()=>o,metadata:()=>s,assets:()=>c,toc:()=>u,default:()=>d});var n=r(7813),a=r(7044),l=(r(9496),r(9613)),i=["components"],p={id:"publish",title:"pnpm publish"},o=void 0,s={unversionedId:"cli/publish",id:"cli/publish",title:"pnpm publish",description:"Publishes a package to the registry.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/cli/publish.md",sourceDirName:"cli",slug:"/cli/publish",permalink:"/de/next/cli/publish",editUrl:"https://crowdin.com/project/pnpm/de",tags:[],version:"current",frontMatter:{id:"publish",title:"pnpm publish"},sidebar:"docs",previous:{title:"pnpm env <cmd>",permalink:"/de/next/cli/env"},next:{title:"pnpm pack",permalink:"/de/next/cli/pack"}},c={},u=[{value:"Options",id:"options",level:2},{value:"--tag &lt;tag&gt;",id:"--tag-tag",level:3},{value:"--access &lt;public|restricted&gt;",id:"--access-publicrestricted",level:3},{value:"git-checks",id:"git-checks",level:3},{value:"publish-branch",id:"publish-branch",level:3},{value:"--force",id:"--force",level:3},{value:"--report-summary",id:"--report-summary",level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",level:3}],h={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Publishes a package to the registry."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"pnpm [-r] publish [<tarball|folder>] [--tag <tag>]\n     [--access <public|restricted>]\n")),(0,l.kt)("p",null,"When publishing a package inside a ",(0,l.kt)("a",{parentName:"p",href:"/de/next/workspaces"},"workspace"),", the LICENSE file from the root of the workspace is packed with the package (unless the package has a license of its own)."),(0,l.kt)("p",null,"You may override some fields before publish, using the ",(0,l.kt)("a",{parentName:"p",href:"/de/next/package_json#publishconfig"},"publishConfig")," field in ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json"),". You also can use the ",(0,l.kt)("a",{parentName:"p",href:"/de/next/package_json#publishconfigdirectory"},(0,l.kt)("inlineCode",{parentName:"a"},"publishConfig.directory"))," to customize the published subdirectory (usually using third party build tools)."),(0,l.kt)("p",null,"When running this command recursively (",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm -r publish"),"), pnpm will publish all the packages that have versions not yet published to the registry."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("h3",{id:"--tag-tag"},"--tag ","<","tag",">"),(0,l.kt)("p",null,"Publishes the package with the given tag. By default, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," updates the ",(0,l.kt)("inlineCode",{parentName:"p"},"latest")," tag."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# inside the foo package directory\npnpm publish --tag next\n# in a project where you want to use the next version of foo\npnpm add foo@next\n")),(0,l.kt)("h3",{id:"--access-publicrestricted"},"--access ","<","public|restricted",">"),(0,l.kt)("p",null,"Tells the registry whether the published package should be public or restricted."),(0,l.kt)("h3",{id:"git-checks"},"git-checks"),(0,l.kt)("p",null,"Added in: v4.11.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default : ",(0,l.kt)("strong",{parentName:"li"},"true")," (since v5)"),(0,l.kt)("li",{parentName:"ul"},"Type: ",(0,l.kt)("strong",{parentName:"li"},"Boolean"))),(0,l.kt)("p",null,"When true, ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm publish")," checks if the current branch is your publish branch (master by default), clean, and up-to-date."),(0,l.kt)("h3",{id:"publish-branch"},"publish-branch"),(0,l.kt)("p",null,"Added in: v4.11.0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default: ",(0,l.kt)("strong",{parentName:"li"},"master")),(0,l.kt)("li",{parentName:"ul"},"Types: ",(0,l.kt)("strong",{parentName:"li"},"String"))),(0,l.kt)("p",null,"The primary branch of the repository which is used for publishing the latest changes."),(0,l.kt)("h3",{id:"--force"},"--force"),(0,l.kt)("p",null,"Added in: v5.18.0"),(0,l.kt)("p",null,"Try to publish packages even if their current version is already found in the registry."),(0,l.kt)("h3",{id:"--report-summary"},"--report-summary"),(0,l.kt)("p",null,"Added in: v6.5.0"),(0,l.kt)("p",null,"Save the list of published packages to ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm-publish-summary.json"),". Useful when some other tooling is used to report the list of published packages."),(0,l.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,l.kt)("p",null,"Added in: 4.6.0"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/de/next/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0}}]);
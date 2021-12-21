"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2784],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(a,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,i=new Array(p);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9091:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(9518),o=n(7344),p=(n(9496),n(9613)),i=["components"],l={id:"store",title:"pnpm store"},a=void 0,c={unversionedId:"cli/store",id:"version-6.x/cli/store",title:"pnpm store",description:"\u7ba1\u7406\u5305\u5b58\u50a8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/store.md",sourceDirName:"cli",slug:"/cli/store",permalink:"/zh/cli/store",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"store",title:"pnpm store"},sidebar:"version-6.x/docs",previous:{title:"pnpm server",permalink:"/zh/cli/server"},next:{title:"pnpm root",permalink:"/zh/cli/root"}},u=[{value:"\u547d\u4ee4\u884c",id:"\u547d\u4ee4\u884c",children:[{value:"status",id:"status",children:[],level:3},{value:"add",id:"add",children:[],level:3},{value:"prune",id:"prune",children:[],level:3},{value:"path",id:"path",children:[],level:3}],level:2}],s={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u7ba1\u7406\u5305\u5b58\u50a8\u3002"),(0,p.kt)("h2",{id:"\u547d\u4ee4\u884c"},"\u547d\u4ee4\u884c"),(0,p.kt)("h3",{id:"status"},"status"),(0,p.kt)("p",null,"\u67e5\u770b store \u4e2d\u5df2\u4fee\u6539\u7684\u5305\u3002"),(0,p.kt)("p",null,"\u5982\u679c\u5305\u7684\u5185\u5bb9\u4e0e\u62c6\u5305\u65f6\u65f6\u76f8\u540c\u7684\u8bdd\uff0c\u8fd4\u56de\u9000\u51fa\u4ee3\u78010\u3002"),(0,p.kt)("h3",{id:"add"},"add"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1a v2.12.0"),(0,p.kt)("p",null,"\u529f\u80fd\u4e0a\u7b49\u540c\u4e8e ",(0,p.kt)("a",{parentName:"p",href:"/zh/cli/add"},(0,p.kt)("inlineCode",{parentName:"a"},"pnpm add")),"\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u53ea\u628a\u5305\u52a0\u5165\u5b58\u50a8\u4e2d\uff0c\u4e14\u6ca1\u6709\u4fee\u6539\u5b58\u50a8\u5916\u7684\u4efb\u4f55\u9879\u76ee\u6216\u6587\u4ef6\u3002"),(0,p.kt)("h3",{id:"prune"},"prune"),(0,p.kt)("p",null,"Removes ",(0,p.kt)("em",{parentName:"p"},"unreferenced packages")," from the store."),(0,p.kt)("p",null,"\u672a\u5f15\u7528\u7684\u5305\u662f\u7cfb\u7edf\u4e0a\u7684\u4efb\u4f55\u9879\u76ee\u4e2d\u90fd\u672a\u4f7f\u7528\u7684\u5305\u3002 \u5728\u5927\u591a\u6570\u5b89\u88c5\u64cd\u4f5c\u4e4b\u540e\uff0c\u5305\u6709\u53ef\u80fd\u4f1a\u53d8\u4e3a\u672a\u5f15\u7528\u72b6\u6001\uff0c\u4f8b\u5982\u5f53\u4f9d\u8d56\u9879\u53d8\u5f97\u591a\u4f59\u65f6\u3002"),(0,p.kt)("p",null,"\u4f8b\u5982\uff0c\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u671f\u95f4\uff0c\u5305 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u88ab\u66f4\u65b0\u4e3a ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.1"),"\u3002 pnpm \u5c06\u5728\u5b58\u50a8\u4e2d\u4fdd\u7559 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \uff0c\u56e0\u4e3a\u5b83\u4e0d\u4f1a\u81ea\u52a8\u9664\u53bb\u5305\u3002 \u5982\u679c\u5305 ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u6ca1\u6709\u88ab\u5176\u4ed6\u4efb\u4f55\u9879\u76ee\u4f7f\u7528\uff0c\u5b83\u5c06\u53d8\u4e3a\u672a\u5f15\u7528\u3002 \u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u5c06\u4f1a\u628a ",(0,p.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," \u4ece\u5b58\u50a8\u4e2d\u5220\u9664 \u3002"),(0,p.kt)("p",null,"\u8fd0\u884c ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u662f\u65e0\u5bb3\u7684\uff0c\u5bf9\u60a8\u7684\u9879\u76ee\u6ca1\u6709\u526f\u4f5c\u7528\u3002 \u5982\u679c\u4ee5\u540e\u7684\u5b89\u88c5\u9700\u8981\u5df2\u7ecf\u88ab\u5220\u9664\u7684\u5305\uff0cpnpm \u5c06\u91cd\u65b0\u4e0b\u8f7d\u4ed6\u4eec\u3002"),(0,p.kt)("p",null,"\u6700\u597d\u7684\u505a\u6cd5\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"pnpm store prune")," \u6765\u6e05\u7406\u5b58\u50a8\uff0c\u4f46\u4e0d\u8981\u592a\u9891\u7e41\u3002 \u6709\u65f6\uff0c\u672a\u5f15\u7528\u7684\u5305\u4f1a\u518d\u6b21\u88ab\u9700\u8981\u3002 \u8fd9\u53ef\u80fd\u5728\u5207\u6362\u5206\u652f\u548c\u5b89\u88c5\u65e7\u7684\u4f9d\u8d56\u9879\u65f6\u53d1\u751f\uff0c\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0cpnpm \u9700\u8981\u91cd\u65b0\u4e0b\u8f7d\u6240\u6709\u5220\u9664\u7684\u5305\uff0c\u4f1a\u6682\u65f6\u51cf\u6162\u5b89\u88c5\u8fc7\u7a0b\u3002"),(0,p.kt)("p",null,"Please note that this command is prohibited when a ",(0,p.kt)("a",{parentName:"p",href:"/zh/cli/server"},"store server")," is running."),(0,p.kt)("h3",{id:"path"},"path"),(0,p.kt)("p",null,"\u6dfb\u52a0\u4e8e\uff1av6.10.0"),(0,p.kt)("p",null,"\u8fd4\u56de\u6d3b\u8dc3\u7684\u5b58\u50a8\u76ee\u5f55\u7684\u8def\u5f84\u3002"))}d.isMDXComponent=!0}}]);
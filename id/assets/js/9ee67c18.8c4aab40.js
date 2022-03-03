"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7033],{9613:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>k});var t=a(9496);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),m=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},d=function(e){var n=m(e.components);return t.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(a),k=r,s=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?t.createElement(s,p(p({ref:n},d),{},{components:a})):t.createElement(s,p({ref:n},d))}));function k(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=c;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=a[m];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7567:(e,n,a)=>{a.r(n),a.d(n,{frontMatter:()=>l,contentTitle:()=>o,metadata:()=>m,assets:()=>d,toc:()=>u,default:()=>k});var t=a(7813),r=a(7044),i=(a(9496),a(9613)),p=["components"],l={id:"pnpm-cli",title:"pnpm CLI"},o=void 0,m={unversionedId:"pnpm-cli",id:"pnpm-cli",title:"pnpm CLI",description:"Perbedaan dengan npm",source:"@site/i18n/id/docusaurus-plugin-content-docs/current/pnpm-cli.md",sourceDirName:".",slug:"/pnpm-cli",permalink:"/id/next/pnpm-cli",editUrl:"https://crowdin.com/project/pnpm/id",tags:[],version:"current",frontMatter:{id:"pnpm-cli",title:"pnpm CLI"},sidebar:"docs",previous:{title:"Installation",permalink:"/id/next/installation"},next:{title:"pnpx CLI",permalink:"/id/next/pnpx-cli"}},d={},u=[{value:"Perbedaan dengan npm",id:"perbedaan-dengan-npm",level:2},{value:"Opsi",id:"opsi",level:2},{value:"-C &lt;path&gt;, --dir &lt;path&gt;",id:"-c-path---dir-path",level:3},{value:"-w, --workspace-root",id:"-w---workspace-root",level:3},{value:"Perintah",id:"perintah",level:2}],c={toc:u};function k(e){var n=e.components,a=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"perbedaan-dengan-npm"},"Perbedaan dengan npm"),(0,i.kt)("p",null,"Tidak seperti npm, pnpm memvalidasi semua opsi. Kita ambil contoh, ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install --target_arch x64")," akan gagal karena ",(0,i.kt)("inlineCode",{parentName:"p"},"--target_arch")," bukan opsi yang valid untuk ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm install"),"."),(0,i.kt)("p",null,"Bagaimana pun, beberapa dependensi mungkin menggunakan variabel lingkungan ",(0,i.kt)("inlineCode",{parentName:"p"},"npm_config_"),", yang mana diambil dari opsi CLI. Dalam hal ini, Anda memiliki opsi berikut:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"mengatur variabel env secara eksplisit: ",(0,i.kt)("inlineCode",{parentName:"li"},"npm_config_target_arch=x64 pnpm install")),(0,i.kt)("li",{parentName:"ol"},"memaksa opsi yang tidak diketahui dengan ",(0,i.kt)("inlineCode",{parentName:"li"},"--config."),": ",(0,i.kt)("inlineCode",{parentName:"li"},"pnpm install --config.target_arch=x64"))),(0,i.kt)("h2",{id:"opsi"},"Opsi"),(0,i.kt)("h3",{id:"-c-path---dir-path"},"-C ","<","path",">",", --dir ","<","path",">"),(0,i.kt)("p",null,"Jalankan seolah-olah pnpm dimulai pada ",(0,i.kt)("inlineCode",{parentName:"p"},"<path>")," alih-alih direktori kerja saat ini."),(0,i.kt)("h3",{id:"-w---workspace-root"},"-w, --workspace-root"),(0,i.kt)("p",null,"Ditambahkan di: v5.6.0"),(0,i.kt)("p",null,"Jalankan seolah-olah pnpm dimulai pada ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces"})," alih-alih direktori kerja saat ini."),(0,i.kt)("h2",{id:"perintah"},"Perintah"),(0,i.kt)("p",null,"Untuk informasi lebih lanjut, lihat dokumentasi satuan untuk setiap perintah CLI. Berikut adalah daftar persamaan npm yang berguna untuk membantu Anda memulai:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"perintah npm"),(0,i.kt)("th",{parentName:"tr",align:null},"persamaan pnpm"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm install")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/id/next/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm install")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm i <pkg>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm add <pkg>"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"npm run <cmd>")),(0,i.kt)("td",{parentName:"tr",align:null},"[",(0,i.kt)("inlineCode",{parentName:"td"},"pnpm <cmd>"),"]")))),(0,i.kt)("p",null,"Ketika perintah yang tidak diketahui digunakan, pnpm akan mencari skrip dengan nama yang diberikan, jadi ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run lint")," sama dengan ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm lint"),". Jika tidak ada skrip dengan nama yang ditentukan, maka pnpm akan menjalankan perintah sebagai skrip shell, sehingga Anda dapat melakukan hal-hal seperti ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm eslint")," (lihat ",(0,i.kt)("a",{parentName:"p",href:"/id/next/cli/exec"},"pnpm exec"),")."))}k.isMDXComponent=!0}}]);
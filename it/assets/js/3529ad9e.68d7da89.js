"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5935],{9613:(e,n,i)=>{i.d(n,{Zo:()=>c,kt:()=>m});var o=i(9496);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function r(e,n){if(null==e)return{};var i,o,t=function(e,n){if(null==e)return{};var i,o,t={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var d=o.createContext({}),s=function(e){var n=o.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var i=e.components,t=e.mdxType,a=e.originalType,d=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(i),m=t,v=p["".concat(d,".").concat(m)]||p[m]||u[m]||a;return i?o.createElement(v,l(l({ref:n},c),{},{components:i})):o.createElement(v,l({ref:n},c))}));function m(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=i.length,l=new Array(a);l[0]=p;var r={};for(var d in n)hasOwnProperty.call(n,d)&&(r[d]=n[d]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var s=2;s<a;s++)l[s]=i[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8015:(e,n,i)=>{i.r(n),i.d(n,{frontMatter:()=>r,contentTitle:()=>d,metadata:()=>s,assets:()=>c,toc:()=>u,default:()=>m});var o=i(7813),t=i(7044),a=(i(9496),i(9613)),l=["components"],r={id:"motivation",title:"Motivazione"},d=void 0,s={unversionedId:"motivation",id:"version-5.x/motivation",title:"Motivazione",description:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-5.x/motivation.md",sourceDirName:".",slug:"/motivation",permalink:"/it/5.x/motivation",editUrl:"https://crowdin.com/project/pnpm/it",tags:[],version:"5.x",frontMatter:{id:"motivation",title:"Motivazione"},sidebar:"version-5.x/docs",next:{title:"Installazione",permalink:"/it/5.x/installation"}},c={},u=[{value:"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione",id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione",level:2},{value:"Creazione di una cartella node_modules non flat",id:"creazione-di-una-cartella-node_modules-non-flat",level:2}],p={toc:u};function m(e){var n=e.components,i=(0,t.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"risparmio-dello-spazio-su-disco-ed-aumento-della-velocit\xe0-di-installazione"},"Risparmio dello spazio su disco ed aumento della velocit\xe0 di installazione"),(0,a.kt)("p",null,"Quando si usa npm o Yarn, se hai 100 progetti che usano una dipendenza, avrai 100 copie di quella dipendenza salvata su disco. Con pnpm, la dipendenza sar\xe0 memorizzata in un archivio indirizzabile al contenuto, quindi:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Se dipendi da versioni diverse della dipendenza, solo i file diversi sono aggiunti all'archivio. Ad esempio, se una dipendenza ha 100 file e una nuova versione ha cambiamenti in un solo file, ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm update")," aggiunger\xe0 solamente un nuovo file all'interno dell'archivio, invece di clonare l'intera dipendenza solo per una modifica singola."),(0,a.kt)("li",{parentName:"ol"},"Tutti i file sono salvati in un'unica posizione sul disco. Quando i pacchetti vengono installati, i loro file sono collegati fisicamente da quella singola posizione, senza consumare spazio su disco aggiuntivo. Ci\xf2 consente di condividere dipendenze della stessa versione tra progetti.")),(0,a.kt)("p",null,"Di conseguenza, \xe8 possibile risparmiare molto spazio su disco proporzionalmente al numero di progetti e dipendenze, e avrai installazioni molto pi\xf9 veloci!"),(0,a.kt)("h2",{id:"creazione-di-una-cartella-node_modules-non-flat"},"Creazione di una cartella node_modules non flat"),(0,a.kt)("p",null,"Quando si installano le dipendenze con npm, tutti i pacchetti vengono agganciati alla radice della cartella dei moduli. Di conseguenza, il codice sorgente ha accesso a dipendenze non aggiunte come dipendenze al progetto."),(0,a.kt)("p",null,"pnpm utilizza collegamenti simbolici per aggiungere solo le dipendenze dirette del progetto nella root della cartella dei moduli. Se desideri maggiori dettagli sulla struttura unica di ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," che pnpm crea e perch\xe9 funziona bene con l'ecosistema Node.js, leggi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/blog/2020/05/27/flat-node-modules-is-not-the-only-way"},"La node_modules flat non \xe8 l'unico modo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/it/5.x/symlinked-node-modules-structure"},"Struttura node_modules con collegamenti simbolici"))))}m.isMDXComponent=!0}}]);
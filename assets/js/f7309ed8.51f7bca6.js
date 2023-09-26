"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7810],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Feature Flags",l={unversionedId:"cli/feature flags",id:"cli/feature flags",title:"Feature Flags",description:"Auto-Scaling",source:"@site/docs/cli/feature flags.md",sourceDirName:"cli",slug:"/cli/feature flags",permalink:"/ksctl/docs/cli/feature flags",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/feature flags.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CLI Command Reference",permalink:"/ksctl/docs/cli/cli command reference"},next:{title:"Installation",permalink:"/ksctl/docs/cli/install"}},c={},s=[{value:"Auto-Scaling",id:"auto-scaling",level:2},{value:"Here is deatiled view",id:"here-is-deatiled-view",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"feature-flags"},"Feature Flags"),(0,a.kt)("h2",{id:"auto-scaling"},"Auto-Scaling"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Status ",(0,a.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"UnderDevelopment")),(0,a.kt)("p",{parentName:"admonition"},"Currently planned to support auto-scaling for self-managed clusters")),(0,a.kt)("p",null,"During creation of the cluster it installs necessary configurations and statefile to the cluster\nand also creates a slim version of ksctl core api (aka scaleup and scaledown)"),(0,a.kt)("p",null,"Added then the controller will use certain metrics from metrics server to determine when to call HTTP requests to the ksctl to scaleup or scaledown"),(0,a.kt)("h3",{id:"here-is-deatiled-view"},"Here is deatiled view"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Propsal design",src:r(5107).Z,width:"2861",height:"4530"})))}d.isMDXComponent=!0},5107:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ksctl-auto-scaling-fp.excalidraw-417f2f2c39917ca3a4937e4e0c8232d2.svg"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3709],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),u=p(a),k=l,g=u["".concat(o,".").concat(k)]||u[k]||s[k]||r;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function g(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[u]="string"==typeof t?t:l,i[1]=d;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6621:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>d,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={},i="CLI Command Reference",d={unversionedId:"cli/cli command reference",id:"cli/cli command reference",title:"CLI Command Reference",description:"This topic contains information about ksctl-cli commands, syntax, options, resource types, and a few examples of command usage.",source:"@site/docs/cli/cli command reference.md",sourceDirName:"cli",slug:"/cli/cli command reference",permalink:"/ksctl/docs/cli/cli command reference",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cli/cli command reference.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ksctl cli",permalink:"/ksctl/docs/category/ksctl-cli"},next:{title:"Feature Flags",permalink:"/ksctl/docs/cli/feature flags"}},o={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Commands",id:"commands",level:2},{value:"Options",id:"options",level:2},{value:"Register Credentials",id:"register-credentials",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example",id:"example",level:3},{value:"Create a Cluster",id:"create-a-cluster",level:2},{value:"Syntax",id:"syntax-2",level:3},{value:"Sub-Commands",id:"sub-commands",level:3},{value:"Options",id:"options-1",level:3},{value:"HA (aka self-managed Highly Available cluster)",id:"ha-aka-self-managed-highly-available-cluster",level:4},{value:"HA add-nodes (aka self-managed Highly Available cluster)",id:"ha-add-nodes-aka-self-managed-highly-available-cluster",level:4},{value:"Cloud Managed (aka managed)",id:"cloud-managed-aka-managed",level:4},{value:"Examples",id:"examples",level:3},{value:"Delete a cluster",id:"delete-a-cluster",level:2},{value:"Sub-Commands",id:"sub-commands-1",level:3},{value:"Syntax",id:"syntax-3",level:3},{value:"Options",id:"options-2",level:3},{value:"HA delete-nodes (aka self-managed Highly Available cluster)",id:"ha-delete-nodes-aka-self-managed-highly-available-cluster",level:4},{value:"Examples",id:"examples-1",level:3},{value:"Switch",id:"switch",level:2},{value:"Syntax",id:"syntax-4",level:3},{value:"Options",id:"options-3",level:3},{value:"Example",id:"example-1",level:3},{value:"Get",id:"get",level:2},{value:"Example",id:"example-2",level:3}],m={toc:p},u="wrapper";function s(t){let{components:e,...a}=t;return(0,l.kt)(u,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"cli-command-reference"},"CLI Command Reference"),(0,l.kt)("p",null,"This topic contains information about ksctl-cli commands, syntax, options, resource types, and a few examples of command usage."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,"Use the following syntax to run the ksctl-cli tool:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl [command] [<command-arguments>] [command-options]\n")),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("p",null,"The following table describes the syntax and descriptions for all the ksctl-cli commands."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operations"),(0,l.kt)("th",{parentName:"tr",align:null},"Syntax"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cred"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl cred")),(0,l.kt)("td",{parentName:"tr",align:null},"Login with your Cloud-provider Credentials")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl create [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Creates a cluster of ha or cloud managed types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"delete"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl delete [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Delete a cluster of ha or cloud managed types")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"get-clusters"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl get-clusters [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Prints out all the clusters created via ksctl")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"switch-cluster"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl switch-cluster [options]")),(0,l.kt)("td",{parentName:"tr",align:null},"Use to switch between clusters")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ksctl version")),(0,l.kt)("td",{parentName:"tr",align:null},"Prints out ksctl binary version")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The following are the ksctl-cli options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Options"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides more information on the ksctl-cli.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--toggle"),(0,l.kt)("td",{parentName:"tr",align:null},"-t"),(0,l.kt)("td",{parentName:"tr",align:null},"Help message for toggle")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"It is the version of the ",(0,l.kt)("inlineCode",{parentName:"td"},"ksctl-cli")," tool.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"It is a feature flag for testing latest development")))),(0,l.kt)("admonition",{title:"NOTE",type:"note"},(0,l.kt)("admonition",{parentName:"admonition",title:"WARN!",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"this feature is being worked on\nIt will be used by the future releases of ksctl")),(0,l.kt)("p",{parentName:"admonition"},"The ksctl cli tool must have access to the clusters you want it to manage. To grant it access, set the KUBECONFIG environment variable to a path to the kubeconfig file containing the necessary keys to access those clusters. To set the KUBECONFIG environment variable, use these commands:"),(0,l.kt)("p",{parentName:"admonition"},"On Linux/macOS: ",(0,l.kt)("inlineCode",{parentName:"p"},'export KUBECONFIG="[path to kubeconfig file from the output of creation]"')),(0,l.kt)("p",{parentName:"admonition"},"On Windows: ",(0,l.kt)("inlineCode",{parentName:"p"},'$env:KUBECONFIG = "[path to kubeconfig file from the output of creation]"'))),(0,l.kt)("h2",{id:"register-credentials"},"Register Credentials"),(0,l.kt)("p",null,"Use this command to login in your selected cloud provider."),(0,l.kt)("h3",{id:"syntax-1"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl cred\n")),(0,l.kt)("admonition",{title:"Note",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"This command is used to configure the credentials for your selected cloud provider. It will prompt you to enter the credentials specific to your cloud provider.")),(0,l.kt)("p",null,"Further select your respected cloud-provider and enter the required credentials when asked to complete the authentication process.\nAfter successful authentication, you should see a confirmation message."),(0,l.kt)("h3",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ksctl cred\n\n1> AWS (EKS)\n2> Azure (AKS)\n3> Civo (K3s)\n\n2\n[LOG] Enter your SUBSCRIPTION ID\n    Enter Secret->\n[LOG] Enter your TENANT ID\n    Enter Secret->\n[LOG] Enter your CLIENT ID\n    Enter Secret->\n[LOG] Enter your CLIENT SECRET\n    Enter Secret->\n[SUCCESS] [secrets] configuration\n[SUCCESS] [ksctl] Credential added\n")),(0,l.kt)("h2",{id:"create-a-cluster"},"Create a Cluster"),(0,l.kt)("p",null,"Use this command to create cluster. Also have option of creating self-managed or a managed cluster"),(0,l.kt)("h3",{id:"syntax-2"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl create-cluster <cloud-provider> --name <cluster-name> --node <Number-of-nodes> --region <deafult-region> --nodeSize <Node-size>\n")),(0,l.kt)("h3",{id:"sub-commands"},"Sub-Commands"),(0,l.kt)("p",null,"The following are the ",(0,l.kt)("inlineCode",{parentName:"p"},"ksctl create [command] [options]")," command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a EKS cluster in AWS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a AKS cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a CIVO k3s cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a LOCAL cluster using Docker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a HA cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to create a HA CIVO cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-","[cloud_provider]"," add-nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to add more workernodes to existing cluster")))),(0,l.kt)("h3",{id:"options-1"},"Options"),(0,l.kt)("h4",{id:"ha-aka-self-managed-highly-available-cluster"},"HA (aka self-managed Highly Available cluster)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--approve"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"approval to avoid showMsg (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--apps=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pre-Installed Applications")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cni=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CNI plugin to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--distribution=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Distribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Supported values with comma seperated features to be enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},'Cluster Name (default "demo")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noCP=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of ControlPlane Nodes (default 3)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noDS=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of DataStore Nodes (default 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noWP=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of WorkerPlane Nodes (default 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeCP=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of self-managed controlplane nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeDS=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of self-managed datastore nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeLB=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of self-managed loadbalancer node")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeWP=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of self-managed workerplane nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"for verbose output (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Version")))),(0,l.kt)("h4",{id:"ha-add-nodes-aka-self-managed-highly-available-cluster"},"HA add-nodes (aka self-managed Highly Available cluster)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--approve"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"approval to avoid showMsg (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--distribution=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Distribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Supported values with comma seperated features to be enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'Cluster Name (default "demo")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noWP=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of WorkerPlane Nodes (default -1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeWP=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of self-managed workerplane nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"for verbose output (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Version")))),(0,l.kt)("h4",{id:"cloud-managed-aka-managed"},"Cloud Managed (aka managed)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--approve"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"approval to avoid showMsg (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--apps=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pre-Installed Applications")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--cni=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"CNI plugin to use")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--distribution=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Distribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Supported values with comma seperated features to be enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Cluster Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noMP=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of Managed Nodes (default 1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--nodeSizeMP=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Node size of managed cluster nodes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"for verbose output (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--version=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Version")))),(0,l.kt)("admonition",{title:"IMP",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Some Cloud provider's managed cluster offering dont provide options to choose pre-installed apps\nbut we are continuously working to enable it from our side")),(0,l.kt)("h3",{id:"examples"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Managed\nksctl create civo --name demo --region LON1\n# HA\nksctl create ha-civo --name demo --region LON1\n")),(0,l.kt)("h2",{id:"delete-a-cluster"},"Delete a cluster"),(0,l.kt)("p",null,"Use this command to delete the cluster."),(0,l.kt)("h3",{id:"sub-commands-1"},"Sub-Commands"),(0,l.kt)("p",null,"The following are the ",(0,l.kt)("inlineCode",{parentName:"p"},"ksctl delete [command] [options]")," command."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Command"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"aws"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a EKS cluster in AWS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a AKS cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a CIVO k3s cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"local"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a LOCAL cluster using Docker")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-azure"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a HA cluster in Azure")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-civo"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete a HA CIVO cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ha-","[cloud_provider]"," delete-nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to delete workernodes from existing cluster")))),(0,l.kt)("h3",{id:"syntax-3"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl delete <cloud-provider> --name <cluster-name> --region <deafult-region>\n")),(0,l.kt)("h3",{id:"options-2"},"Options"),(0,l.kt)("p",null,"The following are the ",(0,l.kt)("inlineCode",{parentName:"p"},"ksctl delete [cloud-provider] [options]")," command options."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the region of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--help"),(0,l.kt)("td",{parentName:"tr",align:null},"-h"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides information on the delete command.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"It provides verbose output (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--approve"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"approval to avoid showMsg (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Supported values with comma seperated features to be enabled")))),(0,l.kt)("h4",{id:"ha-delete-nodes-aka-self-managed-highly-available-cluster"},"HA delete-nodes (aka self-managed Highly Available cluster)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--approve"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"approval to avoid showMsg (default true)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--distribution=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Kubernetes Distribution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--feature-flags=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Supported values with comma seperated: ","[autoscale]")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},'Cluster Name (default "demo")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--noWP=","[int]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of WorkerPlane Nodes (default -1)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Region")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"for verbose output (default true)")))),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Managed\nksctl delete civo --name demo --region LON1\n# HA\nksctl delete ha-civo --name demo --region LON1\n")),(0,l.kt)("h2",{id:"switch"},"Switch"),(0,l.kt)("p",null,"Use this command to switch between clusters"),(0,l.kt)("h3",{id:"syntax-4"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl switch --provider <cloud-provider> --name <cluster-name> --region <deafult-region>\n")),(0,l.kt)("h3",{id:"options-3"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flags"),(0,l.kt)("th",{parentName:"tr",align:null},"Shorthand"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--name=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-n"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to define Name of the Cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--region=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-r"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the region of the cluster")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--provider=","[string]"),(0,l.kt)("td",{parentName:"tr",align:null},"-p"),(0,l.kt)("td",{parentName:"tr",align:null},"Specify the cloud provider")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"--verbose"),(0,l.kt)("td",{parentName:"tr",align:null},"-v"),(0,l.kt)("td",{parentName:"tr",align:null},"Use to get a verbose output")))),(0,l.kt)("h3",{id:"example-1"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ksctl switch --provider civo --name demo --region LON1\n")),(0,l.kt)("h2",{id:"get"},"Get"),(0,l.kt)("p",null,"Use to prints out all the clusters created via ksctl in tabluar method"),(0,l.kt)("h3",{id:"example-2"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kstcl get\n")))}s.isMDXComponent=!0}}]);
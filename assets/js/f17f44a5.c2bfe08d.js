"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5981],{5680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),g=o,h=u["".concat(i,".").concat(g)]||u[g]||d[g]||s;return t?r.createElement(h,a(a({ref:n},p),{},{components:t})):r.createElement(h,a({ref:n},p))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=g;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3368:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(8168),o=(t(6540),t(5680));const s={},a="Querying the Backend",c={unversionedId:"gpt-researcher/gptr/querying-the-backend",id:"gpt-researcher/gptr/querying-the-backend",isDocsHomePage:!1,title:"Querying the Backend",description:"Introduction",source:"@site/docs/gpt-researcher/gptr/querying-the-backend.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/querying-the-backend",permalink:"/docs/gpt-researcher/gptr/querying-the-backend",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/querying-the-backend.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Handling Logs",permalink:"/docs/gpt-researcher/gptr/handling-logs-as-they-stream"},next:{title:"Automated Tests",permalink:"/docs/gpt-researcher/gptr/automated-tests"}},i=[{value:"Introduction",id:"introduction",children:[],level:2}],l={toc:i},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"querying-the-backend"},"Querying the Backend"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"In this section, we will discuss how to query the GPTR backend server. The GPTR backend server is a Python server that runs the GPTR Python package. The server listens for WebSocket connections and processes incoming messages to generate reports, streaming back logs and results to the client."),(0,o.yg)("p",null,"An example WebSocket client is implemented in the ",(0,o.yg)("inlineCode",{parentName:"p"},"gptr-webhook.js")," file below."),(0,o.yg)("p",null,"This function sends a Webhook Message to the GPTR Python backend running on localhost:8000, but this example can also be modified to query a ",(0,o.yg)("a",{parentName:"p",href:"https://docs.gptr.dev/docs/gpt-researcher/getting-started/linux-deployment"},"GPTR Server hosted on Linux"),"."),(0,o.yg)("p",null,"// gptr-webhook.js"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"\nconst WebSocket = require('ws');\n\nlet socket = null;\nlet responseCallback = null;\n\nasync function initializeWebSocket() {\n  if (!socket) {\n    const host = 'localhost:8000';\n    const ws_uri = `ws://${host}/ws`;\n\n    socket = new WebSocket(ws_uri);\n\n    socket.onopen = () => {\n      console.log('WebSocket connection established');\n    };\n\n    socket.onmessage = (event) => {\n      const data = JSON.parse(event.data);\n      console.log('WebSocket data received:', data);\n\n      if (data.content === 'dev_team_result' \n          && data.output.rubber_ducker_thoughts != undefined\n          && data.output.tech_lead_review != undefined) {\n        if (responseCallback) {\n          responseCallback(data.output);\n          responseCallback = null; // Clear callback after use\n        }\n      } else {\n        console.log('Received data:', data);\n      }\n    };\n\n    socket.onclose = () => {\n      console.log('WebSocket connection closed');\n      socket = null;\n    };\n\n    socket.onerror = (error) => {\n      console.error('WebSocket error:', error);\n    };\n  }\n}\n\nasync function sendWebhookMessage(message) {\n  return new Promise((resolve, reject) => {\n    if (!socket || socket.readyState !== WebSocket.OPEN) {\n      initializeWebSocket();\n    }\n\n    const data = {\n      task: message,\n      report_type: 'dev_team',\n      report_source: 'web',\n      tone: 'Objective',\n      headers: {},\n      repo_name: 'elishakay/gpt-researcher'\n    };\n\n    const payload = \"start \" + JSON.stringify(data);\n\n    responseCallback = (response) => {\n      resolve(response); // Resolve the promise with the WebSocket response\n    };\n\n    if (socket.readyState === WebSocket.OPEN) {\n      socket.send(payload);\n      console.log('Message sent:', payload);\n    } else {\n      socket.onopen = () => {\n        socket.send(payload);\n        console.log('Message sent after connection:', payload);\n      };\n    }\n  });\n}\n\nmodule.exports = {\n  sendWebhookMessage\n};\n")),(0,o.yg)("p",null,"And here's how you can leverage this helper function:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-javascript"},"const { sendWebhookMessage } = require('./gptr-webhook');\n\nasync function main() {\n  const message = 'How do I get started with GPT-Researcher Websockets?';\n  const response = await sendWebhookMessage(message);\n  console.log('Response:', response);\n}\n")))}u.isMDXComponent=!0}}]);
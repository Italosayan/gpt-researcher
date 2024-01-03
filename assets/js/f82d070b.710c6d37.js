"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2471],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(t),g=a,y=m["".concat(l,".").concat(g)]||m[g]||u[g]||p;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<p;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3724:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const p={},o="PIP Package",s={unversionedId:"gpt-researcher/pip-package",id:"gpt-researcher/pip-package",isDocsHomePage:!1,title:"PIP Package",description:"\ud83c\udf1f Exciting News! Now, you can integrate gpt-researcher with your apps seamlessly!",source:"@site/docs/gpt-researcher/pip-package.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/pip-package",permalink:"/docs/gpt-researcher/pip-package",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/pip-package.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Agent Frameworks",permalink:"/docs/gpt-researcher/agent_frameworks"},next:{title:"Troubleshooting",permalink:"/docs/gpt-researcher/troubleshooting"}},l=[{value:"Steps to Install GPT Researcher \ud83d\udee0\ufe0f",id:"steps-to-install-gpt-researcher-\ufe0f",children:[],level:2},{value:"Example Usage \ud83d\udcdd",id:"example-usage-",children:[],level:2},{value:"Example 3: Outline Report \ud83d\udcdd",id:"example-3-outline-report-",children:[],level:2}],i={toc:l};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pip-package"},"PIP Package"),(0,a.kt)("p",null,"\ud83c\udf1f ",(0,a.kt)("strong",{parentName:"p"},"Exciting News!")," Now, you can integrate ",(0,a.kt)("inlineCode",{parentName:"p"},"gpt-researcher")," with your apps seamlessly!"),(0,a.kt)("h2",{id:"steps-to-install-gpt-researcher-\ufe0f"},"Steps to Install GPT Researcher \ud83d\udee0\ufe0f"),(0,a.kt)("p",null,"Follow these easy steps to get started:"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Pre-requisite"),": Ensure Python 3.10+ is installed on your machine \ud83d\udcbb"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Install gpt-researcher"),": Grab the official package from ",(0,a.kt)("a",{parentName:"li",href:"https://pypi.org/project/gpt-researcher/"},"PyPi"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install gpt-researcher\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Environment Variables:")," Create a .env file with your OpenAI API key or simply export it")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export OPENAI_API_KEY={Your OpenAI API Key here}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export TAVILY_API_KEY={Your Tavily API Key here}\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Start using GPT Researcher in your own codebase"))),(0,a.kt)("h2",{id:"example-usage-"},"Example Usage \ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\n\nasync def get_report(query: str, report_type: str) -> str:\n    researcher = GPTResearcher(query, report_type)\n    report = await researcher.run()\n    return report\n\nif __name__ == "__main__":\n    query = "what team may win the NBA finals?"\n    report_type = "research_report"\n\n    report = asyncio.run(get_report(query, report_type))\n    print(report)\n')),(0,a.kt)("br",null),'# Specific Examples \ud83c\udf10 ## Example 1: Research Report \ud83d\udcda ```python query = "Latest developments in renewable energy technologies" report_type = "research_report" ``` ## Example 2: Resource Report \ud83d\udccb ```python query = "List of top AI conferences in 2023" report_type = "resource_report" ```',(0,a.kt)("h2",{id:"example-3-outline-report-"},"Example 3: Outline Report \ud83d\udcdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'query = "Outline for an article on the impact of AI in education"\nreport_type = "outline_report"\n')),(0,a.kt)("br",null),"# Integration with Web Frameworks \ud83c\udf0d ## FastAPI Example ```python from fastapi import FastAPI from gpt_researcher import GPTResearcher import asyncio",(0,a.kt)("p",null,"app = FastAPI()"),(0,a.kt)("p",null,'@app.get("/report/{report_type}")\nasync def get_report(report_type: str, query: str):\nresearcher = GPTResearcher(query, report_type)\nreport = await researcher.run()\nreturn {"report": report}'),(0,a.kt)("h1",{id:"run-the-server"},"Run the server"),(0,a.kt)("h1",{id:"uvicorn-mainapp---reload"},"uvicorn main:app --reload"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\n## Flask Example\n```python\nfrom flask import Flask, request\nfrom gpt_researcher import GPTResearcher\nimport asyncio\n\napp = Flask(__name__)\n\n@app.route('/report/<report_type>', methods=['GET'])\ndef get_report(report_type):\n    query = request.args.get('query')\n    report = asyncio.run(GPTResearcher(query, report_type).run())\n    return report\n\n# Run the server\n# flask run\n")))}c.isMDXComponent=!0}}]);
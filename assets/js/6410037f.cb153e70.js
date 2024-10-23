"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4266],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>h});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),g=p(t),d=o,h=g["".concat(c,".").concat(d)]||g[d]||u[d]||a;return t?n.createElement(h,s(s({ref:r},l),{},{components:t})):n.createElement(h,s({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[g]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1849:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(8168),o=(t(6540),t(5680));const a={},s="Handling Logs",i={unversionedId:"gpt-researcher/gptr/handling-logs-as-they-stream",id:"gpt-researcher/gptr/handling-logs-as-they-stream",isDocsHomePage:!1,title:"Handling Logs",description:"Here is a snippet of code to help you handle the streaming logs of your Research tasks.",source:"@site/docs/gpt-researcher/gptr/handling-logs-as-they-stream.md",sourceDirName:"gpt-researcher/gptr",slug:"/gpt-researcher/gptr/handling-logs-as-they-stream",permalink:"/docs/gpt-researcher/gptr/handling-logs-as-they-stream",editUrl:"https://github.com/assafelovic/gpt-researcher/tree/master/docs/docs/gpt-researcher/gptr/handling-logs-as-they-stream.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Scraping Options",permalink:"/docs/gpt-researcher/gptr/scraping"},next:{title:"Querying the Backend",permalink:"/docs/gpt-researcher/gptr/querying-the-backend"}},c=[],p={toc:c},l="wrapper";function g(e){let{components:r,...t}=e;return(0,o.yg)(l,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"handling-logs"},"Handling Logs"),(0,o.yg)("p",null,"Here is a snippet of code to help you handle the streaming logs of your Research tasks."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-python"},'from typing import Dict, Any\nimport asyncio\nfrom gpt_researcher import GPTResearcher\n\nclass CustomLogsHandler:\n    """A custom Logs handler class to handle JSON data."""\n    def __init__(self):\n        self.logs = []  # Initialize logs to store data\n\n    async def send_json(self, data: Dict[str, Any]) -> None:\n        """Send JSON data and log it."""\n        self.logs.append(data)  # Append data to logs\n        print(f"My custom Log: {data}")  # For demonstration, print the log\n\nasync def run():\n    # Define the necessary parameters with sample values\n    \n    query = "What happened in the latest burning man floods?"\n    report_type = "research_report"  # Type of report to generate\n    report_source = "online"  # Could specify source like \'online\', \'books\', etc.\n    tone = "informative"  # Tone of the report (\'informative\', \'casual\', etc.)\n    config_path = None  # Path to a config file, if needed\n    \n    # Initialize researcher with a custom WebSocket\n    custom_logs_handler = CustomLogsHandler()\n\n    researcher = GPTResearcher(\n        query=query,\n        report_type=report_type,\n        report_source=report_source,\n        tone=tone,\n        config_path=config_path,\n        websocket=custom_logs_handler\n    )\n\n    await researcher.conduct_research()  # Conduct the research\n    report = await researcher.write_report()  # Write the research report\n\n    return report\n\n# Run the asynchronous function using asyncio\nif __name__ == "__main__":\n    asyncio.run(run())\n')),(0,o.yg)("p",null,"The data from the research process will be logged and stored in the ",(0,o.yg)("inlineCode",{parentName:"p"},"CustomLogsHandler")," instance. You can customize the logging behavior as needed for your application."),(0,o.yg)("p",null,"Here's a sample of the output:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n    "type": "logs",\n    "content": "added_source_url",\n    "output": "\u2705 Added source url to research: https://www.npr.org/2023/09/28/1202110410/how-rumors-and-conspiracy-theories-got-in-the-way-of-mauis-fire-recovery\\n",\n    "metadata": "https://www.npr.org/2023/09/28/1202110410/how-rumors-and-conspiracy-theories-got-in-the-way-of-mauis-fire-recovery"\n}\n')),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"metadata")," field will include whatever metadata is relevant to the log entry. Let the script above run to completion for the full logs output of a given research task."))}g.isMDXComponent=!0}}]);
document.addEventListener("page:loaded",()=>{const e=document.querySelectorAll(".mermaid");if(e.length){NexT.utils.getScript(CONFIG.mermaid.js,{condition:window.mermaid}).then(()=>{e.forEach(e=>{const a=document.createElement("div");a.innerHTML=e.innerHTML;a.className=e.className;const t=e.parentNode;if(t.matches("pre")){t.parentNode.replaceChild(a,t)}else{t.replaceChild(a,e)}});mermaid.initialize({theme:CONFIG.darkmode&&window.matchMedia("(prefers-color-scheme: dark)").matches?CONFIG.mermaid.theme.dark:CONFIG.mermaid.theme.light,logLevel:4,flowchart:{curve:"linear"},gantt:{axisFormat:"%m/%d/%Y"},sequence:{actorMargin:50}});mermaid.init()})}});
NexT.motion={};NexT.motion.integrator={queue:[],init:function(){this.queue=[];return this},add:function(e){const t=e();if(CONFIG.motion.async)this.queue.push(t);else this.queue=this.queue.concat(t);return this},bootstrap:function(){if(!CONFIG.motion.async)this.queue=[this.queue];this.queue.forEach(e=>{const t=window.anime.timeline({duration:200,easing:"linear"});e.forEach(e=>{if(e.deltaT)t.add(e,e.deltaT);else t.add(e)})})}};NexT.motion.middleWares={header:function(){const o=[];function e(e){o.push({targets:e,scaleX:[0,1],duration:500,deltaT:"-=200"})}function t(e,t=false){o.push({targets:e,opacity:1,top:0,deltaT:t?"-=200":"-=0"})}t("header.header");CONFIG.scheme==="Mist"&&e(".logo-line");CONFIG.scheme==="Muse"&&t(".custom-logo-image");t(".site-title");t(".site-brand-container .toggle",true);t(".site-subtitle");(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")&&t(".custom-logo-image");document.querySelectorAll(".menu-item").forEach(e=>{o.push({targets:e,complete:()=>e.classList.add("animated","fadeInDown"),deltaT:"-=200"})});return o},subMenu:function(){const e=document.querySelectorAll(".sub-menu .menu-item");if(e.length>0){e.forEach(e=>{e.classList.add("animated")})}return[]},postList:function(){const o=[];const{post_block:e,post_header:t,post_body:n,coll_header:i}=CONFIG.motion.transition;function s(t,e){if(!t)return;document.querySelectorAll(e).forEach(e=>{o.push({targets:e,complete:()=>e.classList.add("animated",t),deltaT:"-=100"})})}s(e,".post-block, .pagination, .comments");s(i,".collection-header");s(t,".post-header");s(n,".post-body");return o},sidebar:function(){const e=document.querySelector(".sidebar");const t=CONFIG.motion.transition.sidebar;if(t&&(CONFIG.scheme==="Pisces"||CONFIG.scheme==="Gemini")){return[{targets:e,complete:()=>e.classList.add("animated",t)}]}return[]},footer:function(){return[{targets:document.querySelector(".footer"),opacity:1}]}};
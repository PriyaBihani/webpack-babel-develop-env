exports.id=826,exports.ids=[826],exports.modules={521:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>p});var l=a(297),i=a.n(l),n=a(762),c=a(163),r=a(46),s=a(79),m=a(388),d=a(49);const o=(0,s.connect)((e=>({specialities:e.speciality.specialities})),{getSpecialities:d.hZ,deleteSpeciality:d.Lc})((({getSpecialities:e,specialities:t,deleteSpeciality:a})=>((0,l.useEffect)((()=>{0===t.length&&e()}),[t.length,e]),i().createElement("div",{className:"learn-container"},i().createElement("div",{className:"container pt-4"},i().createElement("div",{className:"row"},t&&t.map((e=>i().createElement("div",{key:e._id,className:"col-lg-6"},i().createElement("div",{className:"card"},i().createElement("div",{className:"imgBx"},i().createElement("img",{className:"image",src:e.imageUrl,alt:e.alt})),i().createElement("div",{style:{height:c.C5&&window.innerWidth<=600?"150px":"auto"},className:"contentBx"},i().createElement("h2",null," ",e.name),i().createElement(m.Z,{type:"Edit",url:"/updatespeciality/"+e.name,data:e}),i().createElement(m.Z,{type:"Delete",handler:()=>{(e=>{"Y"===(c.C5&&window.prompt(`You sure want to delete "${e.Name}" ? Y or N (Deleting a speciality will lead to deletion of all topics and articles inside it) `))&&a(e._id)})(e)},data:e}),i().createElement(r.zx,{url:"/learn/"+e.name},"Start Now")))))))))))),p=()=>i().createElement(n.motion.div,{exit:{opacity:0},animate:{opacity:1},initial:{opacity:0}},i().createElement(c.pQ,{title:"Learn",meta:[{name:"robots",content:"index follow"}]}),i().createElement("div",{className:"container learn-container"},i().createElement(m.Z,{type:"Add",url:"/addcard",data:{name:"Courses"}}),i().createElement("div",{className:"flex"},i().createElement(o,null))),i().createElement(r.$_,null))}};
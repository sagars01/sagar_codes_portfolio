(()=>{var e={};e.id=403,e.ids=[403],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},308:(e,s,i)=>{"use strict";i.r(s),i.d(s,{GlobalError:()=>r.a,__next_app__:()=>u,originalPathname:()=>m,pages:()=>d,routeModule:()=>p,tree:()=>c});var t=i(482),o=i(9108),a=i(2563),r=i.n(a),l=i(8300),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);i.d(s,n);let c=["",{children:["(portfolios)",{children:["portfolio-2",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,8742)),"/Users/sagars01/Desktop/Projects/sagar_codes_portfolio/app/(portfolios)/portfolio-2/page.jsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,3472)),"/Users/sagars01/Desktop/Projects/sagar_codes_portfolio/app/layout.jsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/sagars01/Desktop/Projects/sagar_codes_portfolio/app/(portfolios)/portfolio-2/page.jsx"],m="/(portfolios)/portfolio-2/page",u={require:i,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:o.x.APP_PAGE,page:"/(portfolios)/portfolio-2/page",pathname:"/portfolio-2",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1325:(e,s,i)=>{Promise.resolve().then(i.bind(i,8042)),Promise.resolve().then(i.bind(i,5975)),Promise.resolve().then(i.t.bind(i,1900,23))},5402:(e,s,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},7306:(e,s,i)=>{Promise.resolve().then(i.bind(i,1208))},8042:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>d});var t=i(5344),o=i(6631),a=i(6506),r=i(3729),l=i(5522),n=i(8428),c=i(9410);function d(){let e=(0,n.usePathname)(),[s,i]=(0,r.useState)(!1),[d,m]=(0,r.useState)(!1),u=()=>{"url(/assets/img/bg/page-bg-dark-1.jpg"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-dark-1.jpg",m(!0))},p=()=>{"url(/assets/img/bg/page-bg-1.jpg)"!=document.body.style.backgroundImage&&(document.body.style.backgroundImage="url(/assets/img/bg/page-bg-1.jpg)",m(!1))},g=()=>{!0==JSON.parse(localStorage?.getItem("idDarkMode"))?(localStorage.setItem("idDarkMode",!1),document.body.classList.remove("dark-theme"),p()):(localStorage?.setItem("idDarkMode",!0),document.body.classList.add("dark-theme"),u())};return(0,r.useEffect)(()=>{!0==JSON.parse(localStorage?.getItem("idDarkMode"))?(document.body.classList.add("dark-theme"),u()):(document.body.classList.remove("dark-theme"),p())},[]),t.jsx("div",{className:"bostami-header-area mb-80 z-index-5",children:(0,t.jsxs)("div",{className:"container",children:[t.jsx("div",{className:"bostami-header-wrap main-style-2",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-lg-2 col-md-6 col-sm-4 col-4 d-flex align-items-center",children:t.jsx("div",{className:"bostami-header-logo",children:t.jsx(a.default,{className:"site-logo",href:"/",children:t.jsx(c.default,{width:153,height:32,src:"/assets/img/logo/logo-2.png",alt:"logo"})})})}),t.jsx("div",{className:"col-lg-10 col-md-6 col-sm-8 col-8",children:(0,t.jsxs)("div",{className:"header-right-flex",children:[t.jsx("div",{className:"bostami-main-menu-wrap ",children:t.jsx("nav",{className:"bastami-main-menu main_menu_2",children:(0,t.jsxs)("ul",{style:{display:"flex",alignItems:"center"},children:[t.jsx("li",{className:"/home-2"==e?"active":"",children:(0,t.jsxs)(a.default,{href:"/home-2",style:{display:"flex",alignItems:"center"},children:[t.jsx("span",{children:t.jsx(c.default,{width:20,height:20,src:"/assets/img/icon/home.png",alt:"icon"})}),"home"]})}),o.z_.map((s,i)=>t.jsx("li",{className:e==s.href?"active":"",children:(0,t.jsxs)(a.default,{href:s.href,style:{display:"flex",alignItems:"center"},children:[t.jsx("span",{style:{fontSize:"21px"},children:t.jsx("i",{className:s.icon})}),(0,t.jsxs)("span",{children:[" ",s.text.toLowerCase()]})]})},i))]})})}),(0,t.jsxs)("div",{className:"bostami-header-menu-btn text-right ml-30",children:[t.jsx("div",{className:"dark-btn dark-btn-2 mode-btn",onClick:()=>g(),children:d?t.jsx("i",{className:"sunicon fa-light fa-sun-bright"}):t.jsx("i",{className:"moonicon fa-solid fa-moon"})}),t.jsx("div",{className:"menu-btn-wrap d-lg-none",children:(0,t.jsxs)("div",{className:'menu-btn menu-btn-2 toggle_menu$ {menuOpen && "active"} ',onClick:()=>i(e=>!e),children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]})})]})]})})]})}),t.jsx("div",{className:"mobile-menu-wrap",children:t.jsx("div",{className:`mobile-menu mobile_menu_2 ${s&&"active"} `,children:t.jsx(l.Z,{setMenuOpen:i,data:o.z_})})})]})})}},5522:(e,s,i)=>{"use strict";i.d(s,{Z:()=>r});var t=i(5344),o=i(8428),a=i(6506);function r({setMenuOpen:e,data:s}){let i=(0,o.usePathname)();return(0,t.jsxs)("div",{className:"mean-bar",children:[t.jsx("a",{href:"#nav",className:"meanmenu-reveal",style:{right:"0px",left:"auto",display:"inline"},children:t.jsx("span",{children:t.jsx("span",{children:t.jsx("span",{})})})}),t.jsx("nav",{className:"mean-nav",children:t.jsx("ul",{children:s.map((o,r)=>t.jsx("li",{className:` ${r+1==s.length&&"mean-last"} ${i==o.href&&"active"}  `,style:{paddingTop:"5px",paddingBottom:"4px"},onClick:()=>{e(!1)},children:(0,t.jsxs)(a.default,{href:o.href,children:[t.jsx("span",{children:t.jsx("i",{style:{fontSize:"18px",marginRight:"10px"},className:o.icon})}),o.text]})},r))})})]})}},8064:(e,s,i)=>{"use strict";i.d(s,{Z:()=>r});var t=i(5344),o=i(9410),a=i(3729);function r({setShowModal:e,showModal:s,modalContent:i}){return(0,a.useEffect)(()=>{let s=s=>{let i=document.querySelector(".modal"),t=document.querySelector(".modal-content");i&&t&&!t.contains(s.target)&&i.contains(s.target)&&e(!1)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:`modal portfolio-modal-box fade ${s?"show":""} `,id:"portfolio-1",tabIndex:"-1",role:"dialog",style:{transition:"0.4s",display:"block",visibility:`${s?"visible":"hidden"}`},children:t.jsx("div",{className:"modal-dialog modal-dialog-centered",role:"document",children:t.jsx("div",{className:"modal-content",children:(0,t.jsxs)("div",{className:"modal-body",children:[t.jsx("h6",{className:"blog-title",children:i?.title}),t.jsx("div",{className:"portfolio-modal-table",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-md-6",children:(0,t.jsxs)("h3",{className:"portfolio-modal-table-text",children:[t.jsx("i",{className:"fa-regular fa-file-lines"}),"Project : ",t.jsx("span",{children:i?.project})]})}),t.jsx("div",{className:"col-md-6",children:(0,t.jsxs)("h3",{className:"portfolio-modal-table-text",children:[t.jsx("i",{className:"fa-regular fa-user "}),"Client : ",t.jsx("span",{children:i?.client})]})}),t.jsx("div",{className:"col-md-6",children:(0,t.jsxs)("h3",{className:"portfolio-modal-table-text",children:[t.jsx("i",{className:"fa-solid fa-code"}),"Langages :"," ",t.jsx("span",{children:i?.languages.join(", ")})]})}),t.jsx("div",{className:"col-md-6",children:(0,t.jsxs)("h3",{className:"portfolio-modal-table-text",children:[t.jsx("i",{className:"fa-solid fa-arrow-up-right-from-square"}),"Preview :"," ",t.jsx("a",{href:i?.previewLink,children:i?.previewName})]})})]})}),t.jsx("div",{className:"h1-modal-paragraph",children:i?.desc.map((e,s)=>t.jsx("p",{children:e},s))}),t.jsx("div",{className:"h1-modal-img",children:i?.imgSrc&&t.jsx(o.default,{width:800,height:800,style:{width:"100%",height:"fit-content",maxHeight:"450px",objectFit:"cover"},src:i?.imgSrc,alt:"portfolio"})})]})})})}),s&&t.jsx("div",{className:"modal-header",children:t.jsx("button",{type:"button",className:"close","data-bs-dismiss":"modal",onClick:()=>e(!1),children:t.jsx("i",{className:"far fa-times"})})})]})}},5975:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>m});var t=i(5344),o=i(117),a=i(7916),r=i(3644),l=i(4978),n=i(3729),c=i(8064),d=i(9410);function m(){let[e,s]=(0,n.useState)([]),[i,m]=(0,n.useState)("All"),[u,p]=(0,n.useState)(),[g,h]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"All"==i?s(l.c):s(l.c.filter(e=>e.category.includes(i)))},[i]),(0,t.jsxs)(t.Fragment,{children:[t.jsx("div",{className:"bostami-page-area z-index-3",children:t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"bostami-page-wrap pt-60 pl-80 pr-80",children:[t.jsx("div",{className:"page-tilte-2-wrap",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"bostami-page-title-wrap mb-40",children:t.jsx("h2",{className:"page-title mb-0",children:"Portfolio"})})})})}),t.jsx("div",{className:"bostami-work-2 mb-30",children:(0,t.jsxs)("div",{className:"row",children:[t.jsx("div",{className:"col-12",children:t.jsx("ul",{className:"fillter-btn-wrap buttonGroup isotop-menu-wrapper mb-30",children:l.v.map((e,s)=>t.jsx("li",{onClick:()=>m(e.text),className:`fillter-btn ${i==e.text?"is-checked":""} `,children:e.text},s))})}),t.jsx("div",{className:"col-12",children:t.jsx("div",{id:"fillter-item-active",className:"fillter-item-wrap ",children:t.jsx(r.M,{children:t.jsx(o.G,{columnsCountBreakPoints:{350:1,850:2,1100:3},children:t.jsx(o.Z,{children:e.map((e,s)=>t.jsx(a.E.div,{layout:!0,initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.3},className:e.class,style:{width:"100%"},children:(0,t.jsxs)("div",{style:{width:"100%"},className:`fillter-item ${e.bgClass}`,children:[t.jsx("a",{className:"img cursor-pointer",children:t.jsx(d.default,{width:310,style:{width:"100%",height:"fit-content"},height:310,src:e.imgSrc,alt:"portfolio",onClick:()=>{p(e),h(!0)}})}),t.jsx("span",{className:"item-subtitle",children:e.subtitle}),t.jsx("h6",{className:"item-title",onClick:()=>{p(e),h(!0)},children:t.jsx("a",{className:"cursor-pointer",children:e.title})})]})},e.id))})})})})})]})}),t.jsx("div",{className:"footer-copyright text-center pt-25 pb-25 bg-light-white-2 border-redius-20",children:(0,t.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," All Rights Reserved by ib-themes."]})})]})})}),t.jsx(c.Z,{setShowModal:h,showModal:g,modalContent:u})]})}},6631:(e,s,i)=>{"use strict";i.d(s,{X7:()=>a,pO:()=>t,z_:()=>o});let t=[{id:1,href:"/home-1",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact",icon:"size-22 fa-light fa-address-book",text:"Contact"}],o=[{id:1,href:"/about-2",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-2",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-2",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-2",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-2",icon:"size-22 fa-light fa-address-book",text:"Contact"}],a=[{id:1,href:"/home-3",icon:"fa-light fa-user",text:"About"},{id:2,href:"/resume-3",icon:"fa-light fa-file-lines",text:"Resume"},{id:3,href:"/portfolio-3",icon:"fa-light fa-briefcase",text:"Works"},{id:4,href:"/blog-3",icon:"fa-brands fa-blogger",text:"Blogs"},{id:5,href:"/contact-3",icon:"size-22 fa-light fa-address-book",text:"Contact"}]},4978:(e,s,i)=>{"use strict";i.d(s,{c:()=>t,v:()=>o});let t=[{id:1,class:"isotop-item logo",bgClass:"bg-prink",imgSrc:"/assets/img/work/work-img-1.png",subtitle:"Travel Landing , UX/UI",title:"Chul urina",target:"#portfolio-1",category:["Logo"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]},{id:2,class:"isotop-item design mockup",bgClass:"bg-catkrill",imgSrc:"/assets/img/work/work-img-2.png",subtitle:"Travel Landing , UX/UI",title:"Aura Dione",target:"#portfolio-1",category:["Mockup","Graphic Design"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]},{id:3,class:"isotop-item logo mockup",bgClass:"bg-catkrill",imgSrc:"/assets/img/work/work-img-3.png",subtitle:"Travel Landing , UX/UI",title:"T-Shirt Design",target:"#portfolio-1",category:["Mockup","Logo"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]},{id:4,class:"isotop-item mockup",bgClass:"bg-prink",imgSrc:"/assets/img/work/work-img-4.png",subtitle:"Travel Landing , UX/UI",title:"Packaging Box",target:"#portfolio-1",category:["Mockup"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]},{id:5,class:"isotop-item design logo",bgClass:"bg-prink",imgSrc:"/assets/img/work/work-img-5.png",subtitle:"Travel Landing , UX/UI",title:"Modern Bag Design",target:"#portfolio-1",category:["Logo","Graphic Design"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]},{id:6,class:"isotop-item mockup design",bgClass:"bg-catkrill",imgSrc:"/assets/img/work/work-img-6.png",subtitle:"Travel Landing , UX/UI",title:"Chul urina",target:"#portfolio-1",category:["Mockup","Graphic Design"],project:"website",languages:["Photoshop","Figma"],client:"Envato",previewLink:"#",previewName:"www.envato.com",desc:[`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum conseqr quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, enim corporis omnis doloremque soluta inventore
      dolorum consequuntur quo obcaecati rerum sit non.`,` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consetur quo
      obcaecati rerum sit non. Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. Fuga consequatur delectus porro sapiente molestias,
      magni quasi sed, sit amet consectetur adipisicing elit. Fuga
      consequatur delectus porro sapiente molestias, magni quasi sed, enim
      corporis omnis doloremque soluta inventore dolorum consequuntur.`]}],o=[{id:1,text:"All"},{id:2,text:"Mockup"},{id:3,text:"Graphic Design"},{id:4,text:"Logo"}]},8742:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>d,metadata:()=>c});var t=i(5036),o=i(8620);let a=(0,i(6843).createProxy)(String.raw`/Users/sagars01/Desktop/Projects/sagar_codes_portfolio/components/homes/portfolio/PortfolioTwo.jsx`),{__esModule:r,$$typeof:l}=a,n=a.default;i(4714),i(2);let c={title:"Portfolio-2 || Bostami - Professional portfolio NextJS Template",description:"Discover Botami,the most impressive portfolio template for work showcase, blog"};function d(){return t.jsx(t.Fragment,{children:(0,t.jsxs)("div",{className:"page-wrapper page-wrapper-2",children:[t.jsx(o.ZP,{}),t.jsx(n,{})]})})}},3472:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>a});var t=i(5036),o=i(3222);function a({children:e}){return(0,t.jsxs)("html",{lang:"en",children:[t.jsx("head",{children:t.jsx("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"})}),(0,t.jsxs)("body",{className:"",children:[t.jsx(o.Ix,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),e]})]})}i(8318)},8620:(e,s,i)=>{"use strict";i.d(s,{ZP:()=>r});let t=(0,i(6843).createProxy)(String.raw`/Users/sagars01/Desktop/Projects/sagar_codes_portfolio/components/homes/headers/HeaderTwo.jsx`),{__esModule:o,$$typeof:a}=t,r=t.default},4714:(e,s,i)=>{"use strict";i.d(s,{Z:()=>d});var t=i(5036);let o=[{id:1,bgClass:"bg-catkrill",year:"2015-2017",role:"Graphic Designer",text:"Web Graphy, Los Angeles, CA"},{id:2,bgClass:"bg-prink",year:"2014 - 2015",role:"Jr. Web Developer",text:"Creative Gigs."},{id:3,bgClass:"bg-catkrill",year:"2015-2017",role:"Best Freelancer",text:"Fiver & Upwork Level 2 & Top Rated."}];var a=i(2155),r=i(4460),l=i(5635),n=i(771),c=i(2813);function d(){return t.jsx("div",{className:"bostami-page-area z-index-3",children:t.jsx("div",{className:"container",children:(0,t.jsxs)("div",{className:"bostami-page-wrap pt-60 pl-80 pr-80",children:[t.jsx("div",{className:"page-tilte-2-wrap",children:t.jsx("div",{className:"row",children:t.jsx("div",{className:"col-12",children:t.jsx("div",{className:"bostami-page-title-wrap mb-40",children:t.jsx("h2",{className:"page-title",children:"Resume"})})})})}),t.jsx("div",{className:"bostami-resume-2",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-xl-4 col-lg-6 col-md-6",children:[t.jsx("div",{className:"bostami-section-title-wrap mb-20",children:(0,t.jsxs)("h4",{className:"section-title",children:[t.jsx(c.default,{width:38,height:23,src:"/assets/img/icon/edu-icon-2.png",alt:"education"}),"Education"]})}),t.jsx("div",{className:"bostami-card-wrap mb-50",children:a.f.map((e,s)=>(0,t.jsxs)("div",{className:`bostami-card-item ${e.bgClass} ${s+1!=a.f.length&&"mb-20"} `,children:[t.jsx("span",{className:"card-subtitle",children:e.session}),(0,t.jsxs)("h6",{className:"card-title",children:[e.cardTitle," ",(0,t.jsxs)("span",{children:["- ",e.cardSubtitleSecondary,","]})]}),t.jsx("p",{className:"card-text",children:e.locatopn})]}))})]}),(0,t.jsxs)("div",{className:"col-xl-4 col-lg-6 col-md-6",children:[t.jsx("div",{className:"bostami-section-title-wrap mb-20",children:(0,t.jsxs)("h4",{className:"section-title",children:[t.jsx(c.default,{width:30,height:27,src:"/assets/img/icon/exper-icon-2.png",alt:"experience"}),"experience"]})}),t.jsx("div",{className:"bostami-card-wrap mb-50",children:r.k.map((e,s)=>(0,t.jsxs)("div",{className:`bostami-card-item ${e.bgClass} ${s+1!=r.k.length&&"mb-20"} `,children:[t.jsx("span",{className:"card-subtitle",children:e.session}),t.jsx("h6",{className:"card-title",children:e.role}),t.jsx("p",{className:"card-text",children:e.company})]},s))})]}),(0,t.jsxs)("div",{className:"col-xl-4 col-lg-6 col-md-6",children:[t.jsx("div",{className:"bostami-section-title-wrap mb-20",children:(0,t.jsxs)("h4",{className:"section-title",children:[t.jsx(c.default,{width:24,height:31,src:"/assets/img/icon//Awards-icon.png",alt:"awards"})," ","Awards"]})}),t.jsx("div",{className:"bostami-card-wrap mb-50",children:o.map((e,s)=>(0,t.jsxs)("div",{className:`bostami-card-item ${e.bgClass} ${s+1!=o.length?"mb-20":""} `,children:[t.jsx("span",{className:"card-subtitle",children:e.year}),t.jsx("h6",{className:"card-title",children:e.role}),t.jsx("p",{className:"card-text",children:e.text})]},s))})]})]})}),t.jsx("div",{className:"section-wrapper border-redius-20 bg-light-white-2 mt-20  pt-70 pb-60 pl-30 pr-30",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-xl-6 col-lg-7",children:[t.jsx("div",{className:"bostami-section-title-wrap mb-20",children:t.jsx("h4",{className:"section-title",children:"Working Skills"})}),t.jsx("div",{className:"skill-bar-wrap",children:n.h.map((e,s)=>(0,t.jsxs)("div",{className:`skill-bar-item ${s+1!=n.h.length&&"mb-30"} `,children:[(0,t.jsxs)("div",{className:"title-wrap",children:[t.jsx("h5",{className:"title",children:e.title}),(0,t.jsxs)("span",{className:"count",children:[e.progress,"%"]})]}),t.jsx("div",{className:"progress-bar-wrap",children:t.jsx("div",{className:`progress-line ${e.progressClass}`,style:{width:`${e.progress}%`}})})]},s))})]}),(0,t.jsxs)("div",{className:"col-xl-6 col-lg-5",children:[t.jsx("div",{className:"bostami-section-title-wrap mb-20",children:t.jsx("h4",{className:"section-title",children:"Knowledges"})}),t.jsx("div",{className:"knowledeges-item-wrap",children:l.d.map((e,s)=>t.jsx("span",{className:"gk-item",children:e},s))})]})]})}),t.jsx("div",{className:"footer-copyright text-center pt-25 pb-25",children:(0,t.jsxs)("span",{children:["\xa9 ",new Date().getFullYear()," All Rights Reserved by elite-themes24."]})})]})})})}i(2)},2155:(e,s,i)=>{"use strict";i.d(s,{f:()=>t});let t=[{id:1,bgClass:"bg-prink",session:"2021-2023",cardTitle:"Ph.D in Horriblensess",cardSubtitleSecondary:"University,",locatopn:"Los Angeles, CA"},{id:2,bgClass:"bg-catkrill",session:"2017-2021",cardTitle:"Computer Science",cardSubtitleSecondary:"Imperialize",locatopn:"Technical Institute"},{id:3,bgClass:"bg-prink",session:"2015-2017",cardTitle:"Graphic Designer",cardSubtitleSecondary:"Web Graphy,",locatopn:"Los Angeles, CA"}]},4460:(e,s,i)=>{"use strict";i.d(s,{k:()=>t});let t=[{id:1,bgClass:"bg-catkrill",session:"2019 - Present",role:"Sr. Software Tester",company:"Google Inc."},{id:2,bgClass:"bg-prink",session:"2015-2017",role:"Cr. Web Developer",company:"ib-themes ltd."},{id:3,bgClass:"bg-catkrill",session:"2014 - 2015",role:"Jr. Web Developer",company:"Creative Gigs."}]},5635:(e,s,i)=>{"use strict";i.d(s,{d:()=>t});let t=["Digital Design","Marketing","Communication","Social Media","Time Management","Flexibility","Print"]},771:(e,s,i)=>{"use strict";i.d(s,{h:()=>t});let t=[{id:1,title:"Web Design",progress:85,progressClass:"progress-bg-1"},{id:2,title:"Mobile App",progress:55,progressClass:"progress-bg-2"},{id:3,title:"Illustrator",progress:65,progressClass:"progress-bg-3"},{id:4,title:"Photoshop",progress:72,progressClass:"progress-bg-4"}]},7481:(e,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>o});var t=i(337);let o=e=>[{type:"image/x-icon",sizes:"24x24",url:(0,t.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},8318:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var i=e=>s(s.s=e),t=s.X(0,[638,384,220,813,938],()=>i(308));module.exports=t})();
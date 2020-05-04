(this["webpackJsonpstatic-job-listings-react"]=this["webpackJsonpstatic-job-listings-react"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"./images/photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"]},{"id":2,"company":"Manage","logo":"./images/manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"./images/account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"./images/myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"]},{"id":5,"company":"Loop Studios","logo":"./images/loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"./images/faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","tools":["RoR"]},{"id":7,"company":"Shortly","logo":"./images/shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"./images/insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue, Sass"]},{"id":9,"company":"Eyecam Co.","logo":"./images/eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"./images/the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(7),r=a.n(n),s=(a(13),a(1)),c=a(5),i=(a(14),a(4)),m=function(e){var t=e.job,a=e.handleTagClick,o=[t.role,t.level];return t.languages&&o.push.apply(o,Object(s.a)(t.languages)),t.tools&&o.push.apply(o,Object(s.a)(t.tools)),l.a.createElement("div",{className:"flex flex-col bg-white shadow-lg my-6 m-6 mb-16 p-2 rounded ".concat(t.featured&&"border-l-4 border-teal-500 border-solid"," md:flex-row md:p-6 md:mx-32 md:mb-10")},l.a.createElement("div",null,l.a.createElement("img",{className:"w-16 h-16 -mt-10 mb-4 ml-3 md:mt-0 md:w-24 md:h-24 md:ml-0 md:mb-0",src:t.logo,alt:t.company})),l.a.createElement("div",{className:"flex flex-col justify-between ml-4"},l.a.createElement("h3",{className:"font-bold text-teal-500"},t.company,t.new&&l.a.createElement("span",{className:"bg-teal-500 text-teal-100 rounded font-bold px-2 py-1 ml-4 mr-1 rounded-full text-xs"},"NEW!")," ",t.featured&&l.a.createElement("span",{className:"bg-gray-800 text-white rounded font-bold px-2 py-1 rounded-full text-xs"},"FEATURED")),l.a.createElement("h1",{className:"font-bold text-xl my-2"},t.position),l.a.createElement("p",{className:"text-gray-500"},t.postedAt," \xb7 ",t.contract," \xb7 ",t.location)),l.a.createElement("div",{className:"flex flex-wrap items-center m-4 pt-2 border-t border-gray-500 border-solid md:ml-auto md:border-0 md:pt-0 md:m-0 md:-mt-4"},o?o.map((function(e){return l.a.createElement("span",{onClick:function(){return a(e)},className:"cursor-pointer text-teal-500 bg-teal-100 font-bold mt-4 mr-4 p-2 rounded text-sm"},e)})):""))};var d=function(){var e=Object(o.useState)(i),t=Object(c.a)(e,2),a=t[0],n=t[1];Object(o.useEffect)((function(){return n(i)}),[]);var r=Object(o.useState)([]),d=Object(c.a)(r,2),u=d[0],p=d[1],g=a.filter((function(e){var t=e.role,a=e.level,o=e.tools,l=e.languages;if(0===u.length)return!0;var n=[t,a];return o&&n.push.apply(n,Object(s.a)(o)),l&&n.push.apply(n,Object(s.a)(l)),u.every((function(e){return n.includes(e)}))})),f=function(e){u.includes(e)||p([].concat(Object(s.a)(u),[e]))};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:" bg-teal-600 mb-20"},l.a.createElement("img",{src:document.documentElement.clientWidth>768?"/images/bg-header-desktop.svg":"/images/bg-header-mobile.svg",className:document.documentElement.clientWidth>768?"":"w-screen",alt:"background"})),u.length>0&&l.a.createElement("div",{className:"flex flex-wrap p-4 py-2 -my-32 z-10 relative bg-white shadow-lg my-6 m-6 mb-16 rounded md:mx-32 md:mb-10"},u.map((function(e){return l.a.createElement("span",{onClick:function(){return t=e,void p(u.filter((function(e){return e!==t})));var t},className:"cursor-pointer text-teal-500 bg-teal-100 font-bold mr-4 p-2 my-2 rounded text-sm"},e,l.a.createElement("span",{className:"bg-teal-500 text-teal-100 p-2 ml-2 rounded-r text-lg -mr-2"},"x"))})),l.a.createElement("button",{onClick:function(){p([])},className:"text-teal-500 ml-auto text-sm mr-4 underline"},"Clear")),g.map((function(e){return l.a.createElement(m,{job:e,key:e.id,handleTagClick:f})})))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a23042fd.chunk.js.map
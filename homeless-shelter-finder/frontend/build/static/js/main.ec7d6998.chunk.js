(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{148:function(e,t,a){},244:function(e,t,a){e.exports=a.p+"static/media/home.07e32803.svg"},255:function(e,t,a){e.exports=a(469)},457:function(e,t,a){},469:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(56),o=a.n(l),c=a(493),s=a(20),i=a(21),u=a(23),m=a(22),h=a(24),p=a(496),d=a(471),b=a(491),E=a(497),f=a(494),g=a(489),v=a(479),k=(a(148),a(490)),j=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{as:"h2",content:e.header,subheader:e.subHeader}),r.a.createElement(v.a,null))},y=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{header:"Welcome to Shelter Helper",subHeader:"Our site is meant to connect people who would like to volunteer their time and skills at local homeless shelters with the people running the shelters that could use their help."}),r.a.createElement(f.a,{padded:!0},r.a.createElement(E.a,{to:"/signup/volunteer"},r.a.createElement(g.a,{primary:!0,fluid:!0},"I am interested in volunteering.")),r.a.createElement(v.a,{horizontal:!0},"Or"),r.a.createElement(E.a,{to:"/signup/staff"},r.a.createElement(g.a,{secondary:!0,fluid:!0},"I am currently a staff member of a homeless shelter."))))},O=a(64),C=a(483),S=a(492),w=a(480),F=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleChange=function(e,t){var n=t.checked,r=t.name;a.setState(Object(O.a)({},r,n))},a.handleSubmit=function(){console.log(a.state);var e=[];if(Object.keys(a.state).forEach(function(t){!0===a.state[t]&&e.push(t)}),console.log(e),0===e.length)return!1;a.props.history.push("/dashboard/volunteer?jobs=".concat(encodeURI(e)))},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{header:"Information Form",subHeader:"Enter the information below to find a shelter that best fits your skills"}),r.a.createElement(C.a,{style:{display:"block"},onSubmit:this.handleSubmit},r.a.createElement(C.a.Group,{widths:"equal"},r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"First Name"),r.a.createElement("input",{placeholder:"First Name"})),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{placeholder:"Last Name"}))),r.a.createElement(C.a.Group,{grouped:!0},r.a.createElement("label",null,"Skills"),r.a.createElement(S.a,{stackable:!0,columns:4},r.a.createElement(S.a.Column,null,r.a.createElement(C.a.Field,{label:"General Handiness",name:"General Handiness",control:w.a,type:"checkbox",onChange:this.handleChange})),r.a.createElement(S.a.Column,null,r.a.createElement(C.a.Field,{label:"Plumbing",name:"Plumbing",control:w.a,type:"checkbox",onChange:this.handleChange})),r.a.createElement(S.a.Column,null,r.a.createElement(C.a.Field,{label:"Electrical",name:"Electrical",control:w.a,type:"checkbox",onChange:this.handleChange})),r.a.createElement(S.a.Column,null,r.a.createElement(C.a.Field,{label:"IT",name:"IT",control:w.a,type:"checkbox",onChange:this.handleChange})))),r.a.createElement(C.a.Field,null,r.a.createElement("label",null,"Email"),r.a.createElement("input",{placeholder:"Email"})),r.a.createElement(C.a.Field,{control:g.a},"Submit")))}}]),t}(n.Component),x=a(30),T=a.n(x),I=a(49),N=a(233),A=a.n(N),H=a(481),D=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).createShelter=Object(I.a)(T.a.mark(function e(){var t,n;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(a.state),"/api/v1/shelters",t={name:a.state.name,address:"".concat(a.state.address,", ").concat(a.state.city," ").concat(a.state.state)},e.next=5,A.a.post("/api/v1/shelters",t);case 5:n=e.sent,console.log(n),a.props.history.push("/dashboard/staff/".concat(n.data.shelter._id));case 8:case"end":return e.stop()}},e,this)})),a.handleChange=function(e,t){var n=t.value,r=t.name;a.setState(Object(O.a)({},r,n))};return a.defaultState={name:"",address:"",city:"",state:""},a.state=a.defaultState,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{header:"Information Form",subHeader:"Enter the information below to start finding help for your shelter"}),r.a.createElement(C.a,{onSubmit:this.createShelter,style:{display:"block"}},r.a.createElement(C.a.Field,{control:H.a,label:"Shelter Name",name:"name",placeholder:"Shelter Name",onChange:this.handleChange,value:this.state.name}),r.a.createElement(C.a.Field,{control:H.a,label:"Shelter Address",name:"address",placeholder:"Shelter Address",onChange:this.handleChange,value:this.state.address}),r.a.createElement(C.a.Group,{widths:"equal"},r.a.createElement(C.a.Field,{control:H.a,label:"City",name:"city",placeholder:"City",onChange:this.handleChange,value:this.state.city}),r.a.createElement(C.a.Field,{control:H.a,label:"State",name:"state",placeholder:"State",onChange:this.handleChange,value:this.state.state})),r.a.createElement(C.a.Field,{control:g.a},"Submit")))}}]),t}(n.Component),G=a(484),P=a(219),M=a(487),W=a(485),z=a(220),L=function(e){return r.a.createElement(W.a,null,r.a.createElement(W.a.Content,null,r.a.createElement(W.a.Header,null,e.title),r.a.createElement(W.a.Meta,null,e.job),r.a.createElement(W.a.Description,null,e.description)),r.a.createElement(W.a.Extra,null,r.a.createElement(g.a,{as:"a",href:"mailto: ".concat(e.contact),primary:!0,floated:"right"},"Send Email",r.a.createElement(z.a,{name:"right chevron"}))))},U=function(e){var t,a=e.shelter,n=e.filter;return a.tasks=a.tasks.filter(function(e){return n.indexOf(e.job)>=0}),r.a.createElement("div",{style:{width:"-50%",height:"-50%"}},r.a.createElement(G.a,{trigger:r.a.createElement(P.a,{as:"a",circular:!0,color:a.tasks.length>0?"red":"grey"},a.tasks.length),closeIcon:!0},r.a.createElement(k.a,{content:"Tasks for ".concat(a.name)}),r.a.createElement(G.a.Content,null,r.a.createElement(G.a.Description,null,r.a.createElement(M.a.Group,{centered:!0,items:[{header:a.name,meta:a.address}]}),r.a.createElement(W.a.Group,{divided:!0},0===(t=a.tasks).length?r.a.createElement("p",null,"No tasks"):r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement(L,{title:e.title,job:e.job,description:e.description,contact:e.contact,key:e.id})})))))))},q=function(e){return r.a.createElement(P.a,{circular:!0,color:"blue",empty:!0})},B=a(243),J=a.n(B),R=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).componentWillMount=function(){console.log(a.props)},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{height:"100vh",width:"100%"}},r.a.createElement(J.a,{bootstrapURLKeys:{key:"AIzaSyD-aI3Sn2b6syO52CgLkFCFuzjuNEqsApQ"},center:this.props.center,defaultZoom:this.props.zoom},r.a.createElement(q,{lat:this.props.center.lat,lng:this.props.center.lng}),this.props.shelters.map(function(t,a){return r.a.createElement(U,{lat:t.lat,lng:t.lng,key:a,shelter:t,filter:e.props.jobFilter})})))}}]),t}(n.Component);R.defaultProps={center:{lat:59.9512312312,lng:30.33213213123},zoom:11};var K=R,Q=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={center:{lat:37.7749,lng:-122.4194}},a.componentWillMount=function(){var e=a.props.history.location.search,t=e.substring(6,e.length).split(",");a.setState({jobFilter:t}),navigator.geolocation.getCurrentPosition(function(e){a.setState({center:{lat:e.coords.latitude,lng:e.coords.longitude}})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(K,{center:this.state.center,jobFilter:this.state.jobFilter,shelters:[{name:"Alex",address:"593 marmora ave. Tampa Florida",lat:37.419857,lng:-122.078827,tasks:[]},{name:"Pat",address:"837 Hudson Street Hoboken NJ 33606",lat:37.89,lng:-120.1,tasks:[{id:123,title:"Apples",job:"Plumbing",description:"Apples in plumbing",contact:"asupkay1124@gmail.com"},{id:1234,title:"Apples123",job:"Plumbing",description:"Apples in plumbing",contact:"apples@gmail.com"}]}]})}}]),t}(n.Component),Y=a(486),Z=a(482),$=[{key:"g",text:"General Handiness",value:"General Handiness"},{key:"p",text:"Plumbing",value:"Plumbing"},{key:"e",text:"Electrical",value:"Electrical"},{key:"i",text:"IT",value:"IT"}],_=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e,t){var n=t.value,r=t.name;a.setState(Object(O.a)({},r,n))},a.handleSubmit=function(){var e=Object(I.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a.onSubmit(a.state);case 3:if(!e.sent){e.next=8;break}a.setState(a.defaultState),a.props.closeModal&&a.props.closeModal(),e.next=9;break;case 8:alert("Bad input");case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.onSubmit=e.onSubmit;var n=e.title||"",r=e.job||"",l=e.description||"",o=e.id||"",c=e.contact||"";return a.defaultState={id:o,title:n,job:r,description:l,contact:c},a.state=a.defaultState,a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C.a,{style:{display:"block"},onSubmit:this.handleSubmit},r.a.createElement(C.a.Field,{control:H.a,label:"Task Title",name:"title",placeholder:"Task Title",onChange:this.handleChange,value:this.state.title}),r.a.createElement(C.a.Field,{control:Y.a,label:"Skill",name:"job",onChange:this.handleChange,selection:!0,options:$,placeholder:"Skill",value:this.state.job}),r.a.createElement(C.a.Field,{control:Z.a,label:"Description",name:"description",placeholder:"Description",onChange:this.handleChange,row:"3",value:this.state.description}),r.a.createElement(C.a.Field,{control:H.a,label:"Contact",placeholder:"Email",name:"contact",onChange:this.handleChange,value:this.state.contact}),r.a.createElement(C.a.Field,{control:g.a},"Submit"))}}]),t}(n.Component),V=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={modalOpen:!1},a.handleOpen=function(){return a.setState({modalOpen:!0})},a.handleClose=function(){return a.setState({modalOpen:!1})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(M.a,null,r.a.createElement(M.a.Content,{header:this.props.title,meta:this.props.job,description:this.props.description}),r.a.createElement(M.a.Content,{extra:!0},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement(G.a,{trigger:r.a.createElement(g.a,{onClick:this.handleOpen,basic:!0,color:"green"},"Edit"),closeIcon:!0,onClose:this.handleClose,open:this.state.modalOpen},r.a.createElement(k.a,{content:"Edit Task"}),r.a.createElement(G.a.Content,null,r.a.createElement(_,{id:this.props.id,title:this.props.title,job:this.props.job,description:this.props.description,contact:this.props.contact,onSubmit:this.props.onUpdate,closeModal:this.handleClose}))),r.a.createElement(g.a,{basic:!0,color:"red",onClick:function(){e.props.onDelete(e.props.id)}},"Delete"))))}}]),t}(n.Component),X=(a(457),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).componentWillMount=function(){console.log(a.props.match.params.shelterID)},a.handleNewTask=function(){var e=Object(I.a)(T.a.mark(function e(t){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.title&&t.description&&t.job){e.next=2;break}return e.abrupt("return",!1);case 2:e.prev=2,e.next=8;break;case 5:return e.prev=5,e.t0=e.catch(2),e.abrupt("return",!1);case 8:return e.abrupt("return",!0);case 9:case"end":return e.stop()}},e,this,[[2,5]])}));return function(t){return e.apply(this,arguments)}}(),a.deleteTask=function(){var e=Object(I.a)(T.a.mark(function e(t){var n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(n=a.state.tasks,r=0;r<n.length;r++)n[r].id===t&&(n.splice(r,1),a.setState({tasks:n}));case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.updateTask=function(){var e=Object(I.a)(T.a.mark(function e(t){var n,r;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.title&&t.description&&t.job&&t.contact){e.next=2;break}return e.abrupt("return",!1);case 2:for(n=a.state.tasks,r=0;r<n.length;r++)n[r].id===t.id&&(n[r]=t,a.setState({tasks:n}));return e.abrupt("return",!0);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a.state={tasks:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{header:"Your Shelter's Tasks"}),r.a.createElement(k.a,{as:"h3"},"New Task"),r.a.createElement(_,{onSubmit:this.handleNewTask,title:"",job:"",description:""}),r.a.createElement(k.a,{as:"h3"},"All Tasks"),r.a.createElement(S.a,{doubling:!0,columns:5,style:{marginTop:"10px"}},this.state.tasks.map(function(t){return r.a.createElement(S.a.Column,{key:t.id},r.a.createElement(V,{id:t.id,title:t.title,job:t.job,description:t.description,contact:t.contact,onDelete:e.deleteTask,onUpdate:e.updateTask}))})))}}]),t}(n.Component)),ee=a(488),te=a(470),ae=a(244),ne=a.n(ae),re=function(e){return r.a.createElement(ee.a,{inverted:!0},r.a.createElement("a",{href:"/"},r.a.createElement(ee.a.Item,null,r.a.createElement(te.a,{src:ne.a,className:"ui mini image",alt:"logo"}))),r.a.createElement(ee.a.Item,{header:!0},"Shelter Helper"))},le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(re,null),r.a.createElement("div",{className:"ui container"},r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/signup",component:y,exact:!0}),r.a.createElement(d.a,{path:"/signup/volunteer",component:F}),r.a.createElement(d.a,{path:"/signup/staff",component:D}),r.a.createElement(d.a,{path:"/dashboard/volunteer",component:Q}),r.a.createElement(d.a,{path:"/dashboard/staff/:shelterID",component:X}),r.a.createElement(b.a,{to:"/signup/"}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(466);o.a.render(r.a.createElement(c.a,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[255,2,1]]]);
//# sourceMappingURL=main.ec7d6998.chunk.js.map
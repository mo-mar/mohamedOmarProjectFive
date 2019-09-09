(window["webpackJsonpwhos-my-rep"]=window["webpackJsonpwhos-my-rep"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),l=a.n(o),s=(a(23),a(2)),c=a(3),i=a(5),p=a(4),m=a(6),u=(a(24),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Who's My Rep?"),r.a.createElement("h2",null,"Wondering who the heck your political representatives are?"),r.a.createElement("p",null,"This is the tool for you. Just enter your postal code below.")))}),h=a(17),d=a.n(h),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleBrokenImage=function(e){e.target.src="../images/blankavatar.png"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.arrayData.map(function(t,a){return r.a.createElement("div",{className:"repGroup",key:a},r.a.createElement("h3",{className:"repName"},t.name," is your ",t.elected_office," in the ",t.representative_set_name),r.a.createElement("div",{className:"repFlex"},""!==t.photo_url?r.a.createElement("div",{className:"repImageContainer"},r.a.createElement("img",{src:t.photo_url,alt:"A photograph of the political representative.",onError:e.handleBrokenImage})):r.a.createElement("div",{className:"repImageContainer"},r.a.createElement("p",{className:"imageErrorMessage"},"Oops! There's no photo currently available for this representative. Here's a placeholder until we get one:"),r.a.createElement("img",{src:"https://placedog.net/640/480?random",alt:"A photograph of a cute dog."})),r.a.createElement("div",{className:"repInfo"},r.a.createElement("p",null,"District represented: ",t.district_name),""!==t.personal_url?r.a.createElement("p",null,"Learn more about ",t.first_name," ",r.a.createElement("a",{href:t.personal_url,target:"_blank"},"here.")):null,""==t.personal_url&""!==t.url?r.a.createElement("p",null,"Learn more about ",t.first_name," ",r.a.createElement("a",{href:t.url,target:"_blank"},"here.")):null,r.a.createElement("p",null,"Contact: ",r.a.createElement("span",{className:"email"},t.email)))))});return r.a.createElement("main",null,r.a.createElement("div",{className:"generatedReps wrapper",id:"repContainer"},t))}}]),t}(n.Component),f=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"\xa9 Mohamed Omar 2019"),r.a.createElement("p",{className:"credit"},"All data is pulled in from ",r.a.createElement("a",{href:"https://represent.opennorth.ca/api/"},"Open North's Represent API."))))},v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).requestRep=function(t){d()({method:"GET",url:"https://proxy.hackeryou.com",dataResponse:"json",params:{reqUrl:"https://represent.opennorth.ca/postcodes/".concat(e.state.postalCode)},xmlToJSON:!1}).then(function(t){var a=t.data.representatives_centroid;e.setState({apiData:a}),e.smoothScroll()})},e.smoothScroll=function(){document.getElementById("repContainer").scrollIntoView({behavior:"smooth",block:"start"})},e.handleChange=function(t){e.setState({postalCode:t.target.value.replace(/\s/g,"").toUpperCase()})},e.handleSubmit=function(t){t.preventDefault();/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(e.state.postalCode)?(e.requestRep(e.state.postalCode),e.setState({isPostalCodeWrong:""})):e.setState({isPostalCodeWrong:"yes"})},e.state={postalCode:"",apiData:[],isPostalCodeWrong:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"searchField wrapper"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"postalCodeInput",className:"visuallyHidden"},"Postal Code"),r.a.createElement("input",{type:"text",name:"postalCode",onChange:this.handleChange,value:this.postalCode}),"yes"===this.state.isPostalCodeWrong&&r.a.createElement("p",{className:"postalError"},"Oops! That's not a valid postal code."),r.a.createElement("button",{type:"submit"},"Rep me!"))),r.a.createElement("div",null,r.a.createElement(E,{arrayData:this.state.apiData})),r.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.2706ed35.chunk.js.map
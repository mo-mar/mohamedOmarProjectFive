(window["webpackJsonpwhos-my-rep"]=window["webpackJsonpwhos-my-rep"]||[]).push([[0],{18:function(e,t,a){e.exports=a(42)},23:function(e,t,a){},24:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),s=(a(23),a(2)),c=a(3),i=a(5),p=a(4),m=a(6),u=(a(24),function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Who's My Rep?"),r.a.createElement("h2",null,"Wondering who the heck your political representatives are?"),r.a.createElement("p",null,"This is the tool for you. Just enter your postal code below.")))}),h=a(17),d=a.n(h),E=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.arrayData.map(function(e,t){return r.a.createElement("div",{className:"repGroup",key:t,tabindex:"0"},r.a.createElement("h3",{className:"repName"},e.name," is your ",e.elected_office," in the ",e.representative_set_name),r.a.createElement("div",{className:"repFlex"},""!==e.photo_url?r.a.createElement("div",{className:"repImageContainer"},r.a.createElement("img",{src:e.photo_url,alt:"A photograph of the political representative."})):r.a.createElement("div",{className:"repImageContainer"},r.a.createElement("p",{className:"imageErrorMessage"},"Oops! There's no photo currently available for this representative. Here's a placeholder until we get one:"),r.a.createElement("img",{src:"https://placedog.net/640/480?random",alt:"A placeholder image of a cute dog until a suitable photograph of the political representative is available."})),r.a.createElement("div",{className:"repInfo"},r.a.createElement("p",null,"District represented: ",e.district_name),""!==e.personal_url?r.a.createElement("p",null,"Learn more about ",e.first_name," ",r.a.createElement("a",{href:e.personal_url,target:"_blank"},"here.")):null,""==e.personal_url&""!==e.url?r.a.createElement("p",null,"Learn more about ",e.first_name," ",r.a.createElement("a",{href:e.url,target:"_blank"},"here.")):null,r.a.createElement("p",null,"Contact: ",r.a.createElement("span",{className:"email"},e.email)))))});return r.a.createElement("main",null,r.a.createElement("div",{className:"generatedReps wrapper",id:"repContainer"},e))}}]),t}(n.Component),f=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"\xa9 Mohamed Omar 2019"),r.a.createElement("p",{className:"credit"},"All data is pulled in from ",r.a.createElement("a",{href:"https://represent.opennorth.ca/api/"},"Open North's Represent API."))))},v=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(p.a)(t).call(this))).requestRep=function(t){d()({method:"GET",url:"https://proxy.hackeryou.com",dataResponse:"json",params:{reqUrl:"https://represent.opennorth.ca/postcodes/".concat(e.state.postalCode)},xmlToJSON:!1}).then(function(t){var a=t.data.representatives_centroid;e.setState({apiData:a}),setTimeout(e.smoothScroll,400)})},e.smoothScroll=function(){document.getElementById("repContainer").scrollIntoView({behavior:"smooth",block:"start"})},e.handleChange=function(t){e.setState({postalCode:t.target.value.replace(/\s/g,"").toUpperCase()})},e.handleSubmit=function(t){t.preventDefault();/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(e.state.postalCode)?(e.requestRep(e.state.postalCode),e.setState({isPostalCodeWrong:""})):e.setState({isPostalCodeWrong:"yes"})},e.state={postalCode:"",apiData:[],isPostalCodeWrong:""},e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement("div",{className:"searchField wrapper"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",{htmlFor:"postalCodeInput",className:"visuallyHidden"},"Postal Code"),r.a.createElement("input",{type:"text",name:"postalCode",onChange:this.handleChange,value:this.postalCode}),"yes"===this.state.isPostalCodeWrong&&r.a.createElement("p",{className:"postalError"},"Oops! That's not a valid postal code."),r.a.createElement("button",{type:"submit"},"Rep me!"))),r.a.createElement(E,{arrayData:this.state.apiData}),r.a.createElement(f,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.d16fc068.chunk.js.map
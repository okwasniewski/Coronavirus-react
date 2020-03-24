(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{32:function(e,t,a){e.exports=a(53)},37:function(e,t,a){},38:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),s=a(2),i=a(12),l=(a(37),a(38),a(20)),u=a.n(l),m=a(26),h=a(6),d=a(7),v=a(9),p=a(8),f=a(10),E=a(17),b=a(14),g=a(18),y=a.n(g),_=a(27),N=a.n(_);var C=function(e){return r.a.createElement("div",{className:"info-field"},r.a.createElement("h1",null," ",e.text," "),r.a.createElement("h2",null,r.a.createElement(N.a,{start:e.number/1.5,end:e.number,duration:2.5,useEasing:!0,useGrouping:!0})))};function k(){var e=Object(E.a)(["\n  display: block;\n  margin: 0 auto;\n  position: absolute;\n  top: 60%;\n  left: 50%;\n  transform: translateX(-50%);\n  border-color: red;\n"]);return k=function(){return e},e}var j=Object(b.css)(k()),w=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,confirmed:"",recovered:"",deaths:"",lastUpdate:"",cantLoad:!1,randomNumber:"123123123"},a.fetchCountry=Object(m.a)(u.a.mark((function e(){var t,n,r,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://covid19.mathdro.id/api/countries/".concat(a.props.match.params.id));case 2:return t=e.sent,e.prev=3,e.next=6,t.json();case 6:n=e.sent,r=n.confirmed,c=n.recovered,o=n.deaths,s=n.lastUpdate,a.setState({isLoaded:!0,confirmed:r.value,recovered:c.value,deaths:o.value,lastUpdate:s}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),a.setState({cantLoad:!0});case 14:case"end":return e.stop()}}),e,null,[[3,11]])}))),a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchCountry(),this.getRandomNumber()}},{key:"getRandomNumber",value:function(){var e=Math.floor(1e3*Math.random());this.setState({randomNumber:this.state.randomNumber+e})}},{key:"render",value:function(){var e=this.state.isLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"countryDetail__photo",src:"https://covid19.mathdro.id/api/countries/".concat(this.props.match.params.id,"/og?dummy").concat(this.state.randomNumber),alt:"photo1"}),r.a.createElement("h1",{className:"countryDetail__title"}," ",this.props.match.params.id," "),r.a.createElement(C,{text:"Deaths",number:this.state.deaths}),r.a.createElement(C,{text:"Recovered",number:this.state.recovered}),r.a.createElement(C,{text:"Confirmed",number:this.state.confirmed}),r.a.createElement("h4",null,"Last update: ",this.state.lastUpdate.slice(0,10)," ",this.state.lastUpdate.slice(11,19))):r.a.createElement(y.a,{size:15,color:"#123abc",css:j});return r.a.createElement("div",{className:"countryDetail"},!this.state.cantLoad&&e,this.state.cantLoad&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.props.match.params.id," doesn't have any confirmed cases"),r.a.createElement(s.b,{to:"/Coronavirus-react/countries"}," Back to searching ")))}}]),t}(r.a.Component);var O=function(){return r.a.createElement("div",{className:"bottom"},r.a.createElement("div",{className:"bottom__first"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.c,{to:"/Coronavirus-react/"},"Home")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/Coronavirus-react/countries"},"Countries")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/Coronavirus-react/about"},"About")),r.a.createElement("li",null,r.a.createElement(s.c,{to:"/Coronavirus-react/authors"},"Authors ")))),r.a.createElement("div",{className:"bottom__second"},r.a.createElement("h3",null,"The app uses api: Mathdro API ")))};var S=function(e){var t=e.active;return e.current,r.a.createElement("div",{className:"burger"},r.a.createElement("ul",{className:"burger__items"},r.a.createElement("div",{className:"burger__close",onClick:t},"X"),r.a.createElement("li",{className:"burger__item"},r.a.createElement(s.c,{onClick:t,to:"/Coronavirus-react/"}," ","Home"," ")),r.a.createElement("li",{className:"burger__item"},r.a.createElement(s.c,{onClick:t,to:"/Coronavirus-react/countries"}," ","Search country"," ")),r.a.createElement("li",{className:"burger__item"},r.a.createElement(s.c,{onClick:t,to:"/Coronavirus-react/about"}," ","About"," ")),r.a.createElement("li",{className:"burger__item"},r.a.createElement(s.c,{onClick:t,to:"/Coronavirus-react/authors"}," ","Authors"," "))))},A=a(30),L=a(31),x=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"changeHander",value:function(){this.setState({active:!this.state.active});var e=document.querySelector(".burger");this.state.active?e.classList.add("active"):e.classList.remove("active")}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"top"},r.a.createElement(S,{current:this.state.active,active:function(){return e.changeHander()}}),r.a.createElement("div",{className:"top__logo"}," ",r.a.createElement(s.c,{to:"/Coronavirus-react/"}," Coronawirus ")," "),r.a.createElement("nav",null,r.a.createElement("ul",{className:"top__items"},r.a.createElement("li",{className:"top__item"}," ",r.a.createElement(s.c,{to:"/Coronavirus-react/countries"}," Search country ")),r.a.createElement("li",{className:"top__item"},r.a.createElement(s.c,{to:"/Coronavirus-react/about"}," About ")," "),r.a.createElement("li",{className:"top__item"},r.a.createElement(s.c,{to:"/Coronavirus-react/authors"}," Authors ")," "),r.a.createElement("li",{className:"top__burger"},r.a.createElement(A.a,{onClick:function(){return e.changeHander()},icon:L.a})))))}}]),t}(r.a.Component),R=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,deaths:0,recovered:0,cases:0,lastUpdate:""},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://covid19.mathdro.id/api").then((function(e){return e.json()})).then((function(t){var a=t.confirmed,n=t.recovered,r=t.deaths,c=t.lastUpdate;e.setState({isLoaded:!0,deaths:r.value,recovered:n.value,cases:a.value,lastUpdate:c})})),localStorage.getItem(this.state.cases)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"stats"},this.state.isLoaded&&r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{text:"Total deaths",number:this.state.deaths}),r.a.createElement(C,{text:"Total recovered",number:this.state.recovered}),r.a.createElement(C,{text:"Total cases",number:this.state.cases}))),r.a.createElement("h4",{style:{textAlign:"center"}},"Last update: ",this.state.lastUpdate.slice(0,10)," ",this.state.lastUpdate.slice(11,19)))}}]),t}(r.a.Component);var q=function(e){return r.a.createElement("div",{className:"main__graph"},r.a.createElement("h3",null,"Graph"),r.a.createElement("img",{src:"https://covid19.mathdro.id/api/og",alt:"graph"}))};var D=function(e){return r.a.createElement("div",{className:"ranking__field "+e.class},r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.cases),r.a.createElement("div",null,e.deaths),r.a.createElement("div",null,e.recovered))};var U=function(e){return r.a.createElement("div",{className:"sort"},r.a.createElement("label",{htmlFor:"sort"},"sort by "),r.a.createElement("select",{name:"sort",id:"sort",onChange:e.change},r.a.createElement("option",{value:"confirmed"},"cases"),r.a.createElement("option",{value:"deaths"},"deaths"),r.a.createElement("option",{value:"recovered"},"recovered")))};function B(){var e=Object(E.a)(["\n  display: block;\n  margin: 0 auto;\n  position:absolute;\n  top:60%;\n  left:50%;\n  transform:translateX(-50%);\n  border-color: red;\n"]);return B=function(){return e},e}var H=Object(b.css)(B()),M=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={topCountries:null,sortBy:"confirmed",isLoaded:!1},a.fetchData=function(e){fetch("https://covid19.mathdro.id/api/".concat(e)).then((function(e){return e.json()})).then((function(e){a.topArray=[];for(var t=0;a.topArray.length<10;t++)a.topArray.includes(e[t].countryRegion)||a.topArray.push(e[t].countryRegion);return e})).then((function(t){a.arrToState=[],console.log(a.topArray),a.topArray.forEach((function(e){var n=t.filter((function(t){return e===t.countryRegion})),r=0,c=0,o=0;n.forEach((function(e){r+=e.confirmed,c+=e.deaths,o+=e.recovered}));var s={countryRegion:e,confirmed:r,deaths:c,recovered:o};a.arrToState.push(s)})),a.arrToState.sort((function(t,a){return t[e]<a[e]?1:a[e]<t[e]?-1:0})),a.setState({topCountries:a.arrToState,isLoaded:!0})}))},a.handleSelect=function(e){a.setState({isLoaded:!1,sortBy:e.target.value})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchData(this.state.sortBy)}},{key:"componentDidUpdate",value:function(){this.state.isLoaded||this.fetchData(this.state.sortBy)}},{key:"render",value:function(){var e=this,t=this.state.isLoaded?this.state.topCountries.map((function(t){return r.a.createElement(s.b,{to:"/Coronavirus-react/countries/".concat(t.countryRegion),key:t.countryRegion}," ",r.a.createElement(D,{class:e.state.sortBy,name:t.countryRegion,cases:t.confirmed,deaths:t.deaths,recovered:t.recovered})," ")})):r.a.createElement(y.a,{size:15,color:"#123abc",css:H});return r.a.createElement("section",{className:"ranking"},r.a.createElement("h3",null,"Top countries"),r.a.createElement(U,{change:this.handleSelect}),r.a.createElement(D,{class:this.state.sortBy,name:"country",cases:"cases",deaths:"deaths",recovered:"recovered"}),t)}}]),t}(r.a.Component);var T=function(e){return r.a.createElement("main",{className:"main"},r.a.createElement(R,null),r.a.createElement(q,null),r.a.createElement(M,null))};var W=function(e){return r.a.createElement("input",{placeholder:"Search for country...",className:"countries__search",onChange:e.change,type:"text"})},G=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",countries:[],isLoaded:!1},a.changeHandle=function(e){a.setState({text:e.target.value.toLowerCase()}),""!==e.target.value?a.fetchData():a.setState({countries:[],isLoaded:!1})},a.fetchData=function(){fetch("https://covid19.mathdro.id/api/countries").then((function(e){return e.json()})).then((function(e){var t=e.countries.filter((function(e){return e.name.toLowerCase().includes(a.state.text)}));a.setState({countries:t,isLoaded:!0})}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=!this.state.isLoaded||this.state.countries.length>0?this.state.countries.map((function(e){return r.a.createElement(s.b,{key:e.name,to:"/Coronavirus-react/countries/".concat(e.name)},r.a.createElement("h3",{className:"countries__result"},e.name)," ")})):r.a.createElement("p",null,"Country doesn't exist");return r.a.createElement("div",{className:"countries"},r.a.createElement("h2",null,"Search country:"),r.a.createElement(W,{change:this.changeHandle}),r.a.createElement("div",{className:"countries__resultsList"},e))}}]),t}(r.a.Component);var z=function(e){return r.a.createElement("div",{className:"about"},r.a.createElement("div",{className:"about__top"},r.a.createElement("h1",null,"About Coronaviurs")),r.a.createElement("div",{className:"about__main"},r.a.createElement("div",{className:"about__box"},r.a.createElement("h2",null,"What is coronavirus?"),r.a.createElement("p",null,"According to the WHO, coronaviruses are a family of viruses that cause illnesses ranging from the common cold to more severe diseases such as severe acute respiratory syndrome (SARS) and the Middle East respiratory syndrome (MERS). These viruses were originally transmitted from animals to people. SARS, for instance, was transmitted from civet cats to humans while MERS moved to humans from a type of camel.")),r.a.createElement("div",{className:"about__box"},r.a.createElement("h2",null,"What are the symptoms?"),r.a.createElement("p",null,"According to the WHO, signs of infection include fever, cough, shortness of breath and breathing difficulties. In more severe cases, it can lead to pneumonia, multiple organ failure and even death. Current estimates of the incubation period - the time between infection and the onset of symptoms - range from one to 14 days. Most infected people show symptoms within five to six days."))),r.a.createElement("div",{className:"about__image"},r.a.createElement("h2",null,"What to do?"),r.a.createElement("img",{src:"https://ichef.bbci.co.uk/news/208/cpsprodpb/931B/production/_111195673_corona_whatyouneedtodo_without_title-nc.png",alt:"photo1"})))};var P=function(e){return r.a.createElement("div",{className:"authors"},r.a.createElement("div",{className:"authors__box"},r.a.createElement("h1",null,"Oskar Kwa\u015bniewski"),r.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lacinia nibh. Proin quis mauris ipsum. Vivamus consequat ac lorem quis eleifend. Praesent vel viverra felis, et placerat tellus. Aenean odio orci, dictum ac ullamcorper quis, consequat sit amet tellus. Aenean ac aliquet leo. Cras viverra egestas nibh, ac dictum ante.  "),r.a.createElement("i",{className:"github",style:{fontSize:80}}),r.a.createElement("a",{href:"https://github.com/okwasniewski/"},"Github")),r.a.createElement("div",{className:"authors__box"},r.a.createElement("h1",null,"Konrad Ryczko"),r.a.createElement("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et lacinia nibh. Proin quis mauris ipsum. Vivamus consequat ac lorem quis eleifend. Praesent vel viverra felis, et placerat tellus. Aenean odio orci, dictum ac ullamcorper quis, consequat sit amet tellus. Aenean ac aliquet leo. Cras viverra egestas nibh, ac dictum ante.  "),r.a.createElement("a",{href:"https://github.com/Ryczko"},"Github")),r.a.createElement("div",{className:"authors__donate"},r.a.createElement("h1",null,"Help us"),r.a.createElement("p",null," Give us a star on github ",r.a.createElement("a",{href:"https://github.com/okwasniewski/Coronavirus-react"}," Github ")," ")))};var F=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(x,null),r.a.createElement(i.a,{path:"/Coronavirus-react/",exact:!0,component:T}),r.a.createElement(i.a,{path:"/Coronavirus-react/countries",exact:!0,component:G}),r.a.createElement(i.a,{path:"/Coronavirus-react/about",component:z}),r.a.createElement(i.a,{path:"/Coronavirus-react/authors",component:P}),r.a.createElement(i.a,{path:"/Coronavirus-react/countries/:id",component:w}),r.a.createElement(O,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.20befb4f.chunk.js.map
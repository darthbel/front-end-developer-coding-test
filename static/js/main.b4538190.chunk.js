(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),l=a.n(s);a(16),a(17);var c=function(){return r.a.createElement("div",{className:"text-center header d-flex align-items-center justify-content-center"},r.a.createElement("div",{className:"headerTitles"},r.a.createElement("h1",null,"Restaurants In Your City"),r.a.createElement("h4",null,"Developer Coding Test (FE)")))},i=a(4),o=a(5),u=a(6),m=a(8),h=a(7),d=a(1),g=a(9);var v=function(e){return r.a.createElement("form",{className:"searchByCity",onSubmit:function(e){return e.preventDefault()},onKeyPress:function(t){return"Enter"===t.key&&e.handleClick({target:{name:"searchRestaurants"}})}},r.a.createElement("div",{className:"text-center form-group row"},r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("label",{className:"my-auto",forhtml:"cityName"},"Enter City's name:")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("input",{className:"cityNameInput form-control w-100",type:"text",name:"cityName",value:e.cityName,placeholder:"Enter city's name here...",onChange:e.handleChange})),r.a.createElement("div",{className:"col-sm-3"},r.a.createElement("button",{id:"searchRestaurants",className:"searchRestButton",type:"button",name:"searchRestaurants",onClick:e.handleClick},"Search Restaurants"))))};var E=function(e){for(var t="",a=0;a<e.restaurant.price;a++)t+="$";return r.a.createElement("div",{className:"restContainer container-fluid"},r.a.createElement("div",{className:"restName d-flex align-items-center justify-content-center"},r.a.createElement("h5",null,e.restaurant.name)),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("strong",null,"Address:")," ",e.restaurant.address),r.a.createElement("p",null,r.a.createElement("strong",null,"City:")," ",e.restaurant.city),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:")," ",t)))};var f=function(e){return r.a.createElement("div",{className:"pageButtons d-flex justify-content-between"},r.a.createElement("div",null,1!==e.currentPage&&r.a.createElement("button",{type:"button",name:"previousPage",onClick:e.handleClick},"Previous")),r.a.createElement("div",{className:"text-center"},r.a.createElement("p",null,"Page ",e.currentPage,"/",e.totalPages)),r.a.createElement("div",null,e.currentPage!==e.totalPages&&r.a.createElement("button",{type:"button",name:"nextPage",onClick:e.handleClick},"Next")))},p=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={cityName:"",restaurantsData:[],currentPage:1,totalRestaurants:0,totalPages:0,showResults:!1,isLoading:!1},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.handlePageChange=e.handlePageChange.bind(Object(d.a)(e)),e.handleClick=e.handleClick.bind(Object(d.a)(e)),e}return Object(g.a)(t,e),Object(u.a)(t,[{key:"fetchData",value:function(e){var t=this;try{this.setState({isLoading:!0}),fetch("https://opentable.herokuapp.com/api/restaurants?city="+this.state.cityName+"&page="+e).then(function(e){return e.json()}).then(function(e){var a=e.restaurants,n=parseInt(e.total_entries/e.per_page)+1;t.setState({restaurantsData:a,totalRestaurants:e.total_entries,totalPages:n,isLoading:!1})})}catch(a){console.error(a.message)}}},{key:"handleClick",value:function(e){var t=0;switch(e.target.name){case"searchRestaurants":t=1;break;case"previousPage":t=this.state.currentPage-1;break;case"nextPage":t=this.state.currentPage+1;break;default:t=0}this.setState({currentPage:t,showResults:!0}),this.fetchData(t),window.scrollTo(0,0)}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(i.a)({},a,n))}},{key:"handlePageChange",value:function(e){var t=this.state.currentPage+1;this.setState({currentPage:t}),this.fetchData(t)}},{key:"render",value:function(){return r.a.createElement("div",{className:"container restaurants text-center"},r.a.createElement(v,{handleClick:this.handleClick,handleChange:this.handleChange,cityName:this.state.cityName}),this.state.showResults&&(this.state.isLoading?r.a.createElement("div",null,"Loading Results"):r.a.createElement("div",{className:"results d-flex flex-wrap align-items-center justify-content-center"},this.state.totalRestaurants>0?this.state.restaurantsData.map(function(e){return r.a.createElement(E,{className:"",key:e.id,restaurant:e})}):r.a.createElement("div",null,"No restaurants found"))),this.state.totalRestaurants>25&&r.a.createElement(f,{handleClick:this.handleClick,currentPage:this.state.currentPage,totalPages:this.state.totalPages}))}}]),t}(r.a.Component);var y=function(){return r.a.createElement("div",{className:"footer d-flex align-items-center justify-content-center"},r.a.createElement("p",null,"Designed by Felipe Belgine."))};var C=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(c,null),r.a.createElement(p,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.b4538190.chunk.js.map
(this["webpackJsonpface-recognition-brain"]=this["webpackJsonpface-recognition-brain"]||[]).push([[0],{28:function(e,t,n){e.exports=n.p+"static/media/brain.e0b4264e.png"},32:function(e,t,n){e.exports=n(79)},37:function(e,t,n){},38:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(10),r=n.n(i),c=(n(37),n(24)),l=n(25),s=n(31),u=n(30),f=(n(38),n(26)),m=n.n(f),d=function(){return o.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},o.a.createElement("p",{className:"f3 dim black link underline pa3 pointer"},"Sign Out"))},p=n(27),g=n.n(p),h=(n(76),n(28)),b=n.n(h),w=function(){return o.a.createElement("div",{className:"ma4 mt0"},o.a.createElement(g.a,{className:"Tilt bw-3 shadow-2",options:{max:66,scale:1.2},style:{height:150,width:150}},o.a.createElement("div",{className:"Tilt-inner pa3"},o.a.createElement("img",{src:b.a,alt:"logo"}))))},v=(n(77),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return o.a.createElement("div",null,o.a.createElement("p",{className:"f3"},"This magic brain will detect faces in your pictures. Give it a try."),o.a.createElement("div",{className:"center"},o.a.createElement("div",{className:"form center pa4 br3 shadow-3"},o.a.createElement("input",{type:"text","aria-label":"Image Url",className:"f4 pa2 w-70 center glow",onChange:t}),o.a.createElement("button",{className:"w-30 grow link pointer f4 white bg-light-purple fw5",style:{backgroundColor:"#6B0FDB"},onClick:n},"Detect"))))}),E=function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"white f2"},"Nilkamal, your current rank is..."),o.a.createElement("div",{className:"f1 white"},"#5"))},y=n(29),k=n.n(y),N=Object(a.lazy)((function(){return n.e(3).then(n.bind(null,81))})),x=new m.a.App({apiKey:"9f61eaa3458f43429dc92059903b2bdf"}),C=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(c.a)(this,n),(e=t.call(this)).onInputChange=function(t){e.setState({input:t.target.value})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.querySelector("#inputimage"),a=Number(n.width),o=Number(n.height);return{leftCol:t.left_col*a,leftRow:t.top_row*o,rightCol:a-t.right_col*a,bottomRow:o-t.bottom_row*o}},e.displayFaceBox=function(t){e.setState({box:t})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),x.models.predict("a403429f2ddf4b49b307e318f00e528b",e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.state={input:"",imageUrl:"",box:{}},e}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k.a,{className:"particles",params:{particles:{number:{value:100,density:{enable:!0,value_area:800}}}}}),o.a.createElement(d,null),o.a.createElement(w,null),o.a.createElement(E,null),o.a.createElement(v,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),o.a.createElement(a.Suspense,{fallback:o.a.createElement("p",null,"Loading...")},o.a.createElement(N,{box:this.state.box,imageUrl:this.state.imageUrl})))}}]),n}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(78);r.a.render(o.a.createElement(C,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/face-recongnition-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/face-recongnition-app","/service-worker.js");S?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.62b48fda.chunk.js.map
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[314],{8519:function(e,n,r){var t=r(1392),a=r(184);n.Z=function(){return(0,a.jsx)("img",{src:t,style:{display:"block",width:"250px",height:"250px",objectFit:"contain",margin:"0 auto"},alt:"error"})}},5314:function(e,n,r){r.r(n),r.d(n,{default:function(){return A}});var t=r(885),a=r(2791),c=r(4270),s=r(2523),i=r(4304),o=r(6346),l=r(184),u=function(e){var n=e.data,r=n.thumbnail,t=n.name,a=n.description,c=n.homepage,s=n.wiki,i="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r?{objectFit:"contain"}:{objectFit:"cover"};return(0,l.jsxs)("div",{className:"randomchar__block",children:[(0,l.jsx)("img",{src:r,alt:t,className:"randomchar__img",style:i}),(0,l.jsxs)("div",{className:"randomchar__info",children:[(0,l.jsx)("p",{className:"randomchar__name",children:t}),(0,l.jsx)("p",{className:"randomchar__descr",children:a}),(0,l.jsxs)("div",{className:"randomchar__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:"homepage"})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},h=function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],c=n[1],h=(0,i.Z)(),d=h.getCharacter,m=h.clearError,f=h.process,p=h.setProcess;(0,a.useEffect)((function(){_();var e=setInterval(_,6e4);return function(){clearInterval(e)}}),[]);var x=function(e){c(e)},_=function(){m();var e=Math.floor(400*Math.random()+1011e3);d(e).then(x).then((function(){return p("confirmed")}))};return(0,l.jsxs)("div",{className:"randomchar",children:[(0,s.Z)(f,u,r),(0,l.jsxs)("div",{className:"randomchar__static",children:[(0,l.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,l.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,l.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,l.jsx)("button",{className:"button button__main",onClick:_,children:(0,l.jsx)("div",{className:"inner",children:"try it"})}),(0,l.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})},d=r(2982),m=r(5861),f=r(7757),p=r.n(f),x=r(9295),_=r(5660),v=r(7934),j=function(e){var n=(0,a.useState)([]),r=(0,t.Z)(n,2),c=r[0],s=r[1],o=(0,a.useState)(!1),u=(0,t.Z)(o,2),h=u[0],f=u[1],j=(0,a.useState)(210),b=(0,t.Z)(j,2),g=b[0],N=b[1],k=(0,a.useState)(!1),y=(0,t.Z)(k,2),Z=y[0],w=y[1],C=(0,i.Z)(),E=C.getAllCharacters,S=C.process,F=C.setProcess;(0,a.useEffect)((function(){T(g,!0)}),[]);var T=function(e,n){f(!n),E(e).then(P).then((function(){return F("confirmed")}))},P=function(){var e=(0,m.Z)(p().mark((function e(n){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!1,n.length<9&&(r=!0),s([].concat((0,d.Z)(c),(0,d.Z)(n))),f(!1),N(g+9),w(r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),I=(0,a.useRef)([]),A=function(e){I.current.forEach((function(e){return e.classList.remove("char__item_selected")})),I.current[e].classList.add("char__item_selected"),I.current[e].focus()};var M=(0,a.useMemo)((function(){return(0,v.Z)(S,(function(){return function(n){var r=n.map((function(n,r){var t=n.id,a=n.name,c=n.thumbnail,s="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===c?{objectFit:"contain"}:{objectFit:"cover"};return(0,l.jsx)(x.Z,{timeout:500,classNames:"char__item",children:(0,l.jsxs)("li",{className:"char__item",ref:function(e){return I.current[r]=e},tabIndex:0,onClick:function(){e.onCharSelected(t),A(r)},onKeyPress:function(n){""!==n.key&&"Enter"!==n.key||(e.onCharSelected(t),A(r))},children:[(0,l.jsx)("img",{src:c,alt:a,style:s}),(0,l.jsx)("div",{className:"char__name",children:a})]})},t)}));return(0,l.jsx)(_.Z,{className:"char__grid",component:"ul",children:r})}(c)}),h)}),[S]);return(0,l.jsxs)("div",{className:"char__list",children:[M,(0,l.jsx)("button",{className:"button button__main button__long",disabled:h,style:{display:Z?"none":"block"},onClick:function(){return T(g)},children:(0,l.jsx)("div",{className:"inner",children:"load more"})})]})},b=r(3504),g=function(e){var n=e.data,r=n.name,t=n.description,a=n.thumbnail,c=n.homepage,s=n.wiki,i=n.comics,o="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===a?{objectFit:"contain"}:{objectFit:"cover"};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"char__basics",children:[(0,l.jsx)("img",{src:a,alt:r,style:o}),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"char__info-name",children:r}),(0,l.jsxs)("div",{className:"char__btns",children:[(0,l.jsx)("a",{href:c,className:"button button__main",children:(0,l.jsx)("div",{className:"inner",children:r})}),(0,l.jsx)("a",{href:s,className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,l.jsx)("div",{className:"char__descr",children:t}),(0,l.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,l.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There is no comics with this chatacter.",i.map((function(e,n){if(n>9)return(0,l.jsx)("li",{className:"char__comics-item",children:(0,l.jsx)(b.rU,{to:"/comics/".concat(e.resourceURI.slice(43,48)),children:e.name})},n)}))]})]})},N=function(e){var n=(0,a.useState)(null),r=(0,t.Z)(n,2),c=r[0],o=r[1],u=(0,i.Z)(),h=u.process,d=u.setProcess,m=u.getCharacter,f=u.clearError;(0,a.useEffect)((function(){p()}),[e.charId]);var p=function(){var n=e.charId;n&&(f(),m(n).then(x).then((function(){return d("confirmed")})))},x=function(e){o(e)};return(0,l.jsx)("div",{className:"char__info",children:(0,s.Z)(h,g,c)})},k=r(132),y=r(5705),Z=r(8519),w=function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],c=n[1],s=(0,i.Z)(),o=s.getCharacterByName,u=s.clearError,h=s.process,d=s.setProcess,m=function(e){c(e)},f=function(){return(0,l.jsxs)("div",{className:"char__userFound",children:[(0,l.jsxs)("p",{className:"char__search-succses",children:["There is! Visit ",r[0].name," page?"]}),(0,l.jsx)(b.rU,{to:"/app-marvel/".concat(r[0].id),className:"button button__secondary",children:(0,l.jsx)("div",{className:"inner",children:"To page"})})]})},p="error"===h?(0,l.jsx)("div",{className:"char__search-error",children:(0,l.jsx)(Z.Z,{})}):null,x=r?r.length>0?(0,l.jsx)(f,{}):(0,l.jsx)("p",{className:"char__search-error",children:"The character was not found. Check the name and try again"}):null;return(0,l.jsx)(y.J9,{initialValues:{name:""},validationSchema:k.Ry({name:k.Z_().min(3,"Minimum three symbols.").max(30,"Maximum thirty symbols.").required("This field is required.")}),onSubmit:function(e){!function(e){u(),o(e).then(m).then((function(){return d("confirmed")}))}(e.name)},children:(0,l.jsxs)(y.l0,{className:"char__search",children:[(0,l.jsx)("p",{className:"char__search-title",children:"Or find a character by name:"}),(0,l.jsx)(y.gN,{className:"char__search-input",type:"text",placeholder:"Enter name",id:"name",name:"name"}),(0,l.jsx)("button",{className:"button  button__main char__search-btn",type:"submit",disabled:"loading"===h,children:(0,l.jsx)("div",{className:"inner",children:"Find"})}),(0,l.jsx)(y.Bc,{className:"char__search-error",name:"name",component:"p"}),p,x]})})},C=r(5671),E=r(3144),S=r(136),F=r(3668),T=function(e){(0,S.Z)(r,e);var n=(0,F.Z)(r);function r(){var e;(0,C.Z)(this,r);for(var t=arguments.length,a=new Array(t),c=0;c<t;c++)a[c]=arguments[c];return(e=n.call.apply(n,[this].concat(a))).state={error:!1},e}return(0,E.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?(0,l.jsx)(Z.Z,{}):this.props.children}}]),r}(a.Component),P=T,I=r(3610),A=function(){var e=(0,a.useState)(null),n=(0,t.Z)(e,2),r=n[0],s=n[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(c.q,{children:[(0,l.jsx)("meta",{name:"description",content:"Marvel information portal"}),(0,l.jsx)("title",{children:"Marvel information portal"})]}),(0,l.jsx)(P,{children:(0,l.jsx)(h,{})}),(0,l.jsxs)("div",{className:"char__content",children:[(0,l.jsx)(P,{children:(0,l.jsx)(j,{onCharSelected:function(e){s(e)}})}),(0,l.jsxs)("div",{className:"char__content-fixed",children:[(0,l.jsx)(P,{children:(0,l.jsx)(N,{charId:r})}),(0,l.jsx)(P,{children:(0,l.jsx)(w,{})})]})]}),(0,l.jsx)("img",{className:"bg-decoration",src:I,alt:"vision"})]})}},4304:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(5861),a=r(7757),c=r.n(a),s=r(885),i=r(2791);var o=function(){var e=function(){var e=(0,i.useState)("waiting"),n=(0,s.Z)(e,2),r=n[0],a=n[1],o=(0,i.useCallback)(function(){var e=(0,t.Z)(c().mark((function e(n){var r,t,s,i,o,l=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]?l[1]:"GET",t=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{"Content-Type":"application/json"},a("loading"),e.prev=4,e.next=7,fetch(n,{method:r,body:t,headers:s});case 7:if((i=e.sent).ok){e.next=10;break}throw new Error("Could not fetch ".concat(n,", status ").concat(i.status));case 10:return e.next=12,i.json();case 12:return o=e.sent,e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(4),a("error"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(n){return e.apply(this,arguments)}}(),[]);return{request:o,clearError:(0,i.useCallback)((function(){a("loading")}),[]),process:r,setProcess:a}}(),n=e.request,r=e.clearError,a=e.process,o=e.setProcess,l="https://gateway.marvel.com:443/v1/public/",u="apikey=0583c8fb8349856863fd5227fc3f33bd",h=210,d=function(){var e=(0,t.Z)(c().mark((function e(){var r,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:h,e.next=3,n("".concat(l,"characters?limit=9&offset=\n        ").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(_));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=(0,t.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",_(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(c().mark((function e(){var r,t,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.length>0&&void 0!==a[0]?a[0]:h,e.next=3,n("".concat(l,"comics?limit=8&offset=\n        ").concat(r,"&").concat(u));case 3:return t=e.sent,e.abrupt("return",t.data.results.map(v));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"comics/").concat(r,"?").concat(u));case 2:return t=e.sent,e.abrupt("return",v(t.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,t.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n("".concat(l,"characters?name=").concat(r,"&").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results.map(_));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),_=function(e){return{id:e.id,name:e.name.length>20?"".concat(e.name.slice(0,22),"..."):e.name,description:e.description?"".concat(e.description.slice(0,210),"..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items}},v=function(e){return{id:e.id,title:e.title,price:e.prices[0].price?"".concat(e.prices[0].price,"$"):"NOT AVAILABLE",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,description:e.description||"There is no description",pageCount:e.pageCount?"".concat(e.pageCount," p."):"No information about the number of pages",language:e.textObjects.language||"en-us"}};return{process:a,getAllCharacters:d,getCharacter:m,getAllComics:f,getCharacterByName:x,getComic:p,clearError:r,setProcess:o}}},2523:function(e,n,r){r.d(n,{Z:function(){return i}});var t=r(3394),a=r(8519),c=r(184),s=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,c.jsxs)("div",{className:"skeleton",children:[(0,c.jsxs)("div",{className:"pulse skeleton__header",children:[(0,c.jsx)("div",{className:"pulse skeleton__circle"}),(0,c.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"}),(0,c.jsx)("div",{className:"pulse skeleton__block"})]})]})},i=function(e,n,r){switch(e){case"waiting":return(0,c.jsx)(s,{});case"loading":return(0,c.jsx)(t.Z,{});case"error":return(0,c.jsx)(a.Z,{});case"confirmed":return(0,c.jsx)(n,{data:r});default:throw new Error("Unexpected process state.")}}},7934:function(e,n,r){var t=r(3394),a=r(8519),c=r(184);n.Z=function(e,n,r){switch(e){case"waiting":return(0,c.jsx)(t.Z,{});case"loading":return r?(0,c.jsx)(n,{}):(0,c.jsx)(t.Z,{});case"error":return(0,c.jsx)(a.Z,{});case"confirmed":return(0,c.jsx)(n,{});default:throw new Error("Unexpected process state.")}}},1392:function(e,n,r){e.exports=r.p+"static/media/error.8e862399df41dc1e5924.gif"},6346:function(e,n,r){e.exports=r.p+"static/media/mjolnir.61f31e1809f12183a524.png"},3610:function(e,n,r){e.exports=r.p+"static/media/vision.067d4ae1936d64a577ce.png"}}]);
//# sourceMappingURL=314.beb73a64.chunk.js.map
(this["webpackJsonpmy-react-movies"]=this["webpackJsonpmy-react-movies"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=(n(12),n(13),n(2)),i=n.n(o),h=n(3),j=n(4),u=function(){var e=Object(h.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://api.tvmaze.com/search/shows?q="+t);case 2:return n=e.sent,c=n.json(),e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=n(7),l=n.n(d),b=n(0);var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)("Japan"),a=Object(j.a)(s,2),o=a[0],d=a[1],x=Object(c.useState)("Japan"),O=Object(j.a)(x,2),w=O[0],f=O[1];Object(c.useEffect)((function(){Object(h.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(w){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,u(w);case 4:t=e.sent,console.log("".concat(w," got: "),t),r(t);case 7:case"end":return e.stop()}}),e)})))()}),[w]);var p=Object(c.useRef)(function(e,t){var n,c=this;return function(){for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];clearTimeout(n),n=setTimeout((function(){e.apply(c,s)}),t)}}((function(e){return f(e)}),1e3),[o]).current;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",{className:l.a.search,type:"text",value:o,onChange:function(e){d(e.target.value),p(e.target.value)}}),Object(b.jsx)("table",{children:Object(b.jsx)("tbody",{children:n&&n.length>0&&n.map((function(e){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.show.image&&e.show.image.medium,alt:e.show.name})}),Object(b.jsx)("td",{children:e.show.name}),Object(b.jsx)("td",{children:e.show.language}),Object(b.jsx)("td",{children:e.show.type}),Object(b.jsx)("td",{children:e.show.status}),Object(b.jsx)("td",{children:e.show.genres}),Object(b.jsx)("td",{children:e.show.externals.imdb}),Object(b.jsx)("td",{children:e.show.externals.thetvdb}),Object(b.jsx)("td",{children:e.show.externals.tvrage}),Object(b.jsx)("td",{children:e.show.id}),Object(b.jsx)("td",{children:e.show.network&&e.show.network.country.name}),Object(b.jsx)("td",{children:e.show.network&&e.show.network.country.code}),Object(b.jsx)("td",{children:e.show.network&&e.show.network.country.countryZone}),Object(b.jsx)("td",{children:e.show.rating.average}),Object(b.jsx)("td",{children:e.show.schedule.days}),Object(b.jsx)("td",{children:e.show.schedule.time}),Object(b.jsx)("td",{children:e.score}),Object(b.jsx)("td",{children:e.show.url}),Object(b.jsx)("td",{children:e.show.officialSite})]},e.show.id)}))})})]})};var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(x,{})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),w()},7:function(e,t,n){e.exports={search:"Home_search__1tiDx"}}},[[16,1,2]]]);
//# sourceMappingURL=main.9e7b185a.chunk.js.map
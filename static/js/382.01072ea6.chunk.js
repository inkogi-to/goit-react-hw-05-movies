"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[382],{5382:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,c,i,o,u,s=t(5861),p=t(9439),f=t(4687),l=t.n(f),d=t(2791),x=t(2690),g=t(168),v=t(6444),h=t(1087),m=t(3728),w=v.ZP.main(r||(r=(0,g.Z)(["\n  background-color: #fffcfc;\n"]))),b=v.ZP.h1(a||(a=(0,g.Z)(["\n  font-weight: bold;\n  padding: 40px 20px 0 20px;\n  color: #f56038;\n"]))),Z=v.ZP.ul(c||(c=(0,g.Z)(["\n  margin-top: 20px;\n  padding: 50px 20px 50px 20px;\n"]))),k=v.ZP.li(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 10px;\n  position: relative;\n  font-size: 25px;\n  font-weight: bold;\n\n  span {\n    position: absolute;\n    top: -9px;\n    right: -24px;\n    font-size: 12px;\n    background-color: #f7a325;\n    opacity: 0;\n    color: white;\n    font-weight: bold;\n    border-radius: 10px;\n    padding: 5px;\n    transition: opacity 250ms linear;\n  }\n"]))),y=(0,v.ZP)(h.rU)(o||(o=(0,g.Z)(["\n  display: flex;\n  max-width: 800px;\n  color: #12492f;\n  transition: background-color 250ms linear;\n\n\n  :hover {\n    color: #0a2f35;\n    background-color: #f7a325;\n    border-radius: 10px;\n    width: 10px;\n  }\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n  :hover li > span {\n    opacity: 1;\n  }\n"]))),_=(0,v.ZP)(m.$kb)(u||(u=(0,g.Z)(["\n  height: 30px;\n  width: 30px;\n"]))),j=t(184),S=function(n){var e=n.movies;return(0,j.jsxs)(w,{children:[(0,j.jsx)(b,{children:"Trending today"}),(0,j.jsx)(Z,{children:e.map((function(n){var e=n.id,t=n.title,r=n.vote_average;return(0,j.jsxs)(y,{to:"movies/".concat(e),children:[(0,j.jsx)(_,{}),(0,j.jsxs)(k,{children:[t,(0,j.jsx)("span",{children:r.toString().slice(0,3)})]})]},e)}))})]})},P=t(6070),U=function(){var n=(0,d.useState)([]),e=(0,p.Z)(n,2),t=e[0],r=e[1];return(0,d.useEffect)((function(){var n=function(){var n=(0,s.Z)(l().mark((function n(){var e;return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.Df)();case 3:e=n.sent,r(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,j.jsx)(P.W2,{children:(0,j.jsx)(d.Suspense,{fallback:"Loading....",children:(0,j.jsx)(S,{movies:t})})})}},2690:function(n,e,t){t.d(e,{Df:function(){return u},IR:function(){return s},Pg:function(){return p},tx:function(){return l},zv:function(){return f}});var r=t(5861),a=t(4687),c=t.n(a),i=t(1243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="b972cd435eef10c3549386c0239d193f",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/movie/week?api_key=".concat(o,"&language=en-US&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(o,"&query=").concat(e,"&page=1&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/credits?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(e,"/reviews?api_key=").concat(o,"&page=1&language=en-US&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=382.01072ea6.chunk.js.map
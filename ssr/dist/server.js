!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n.w={},n(n.s=7)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("isomorphic-fetch")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){return'\n  <!DOCTYPE html>\n  <html>\n    <head>\n      <meta charset="UTF-8">\n    </head>\n    <body>\n      <div id="app">'+e+"</div>\n      <script>window.gists="+JSON.stringify(t)+'<\/script>\n      <script src="/bundle.js"><\/script>\n    </body>\n  </html>\n'}},function(e,t){e.exports=require("prop-types")},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0)),u=o(n(3));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){var t=e.gists;return r.default.createElement("ul",null,t.map(function(e){return r.default.createElement("li",{key:e.id},e.description)}))};i.propTypes={gists:u.default.array},t.default=i},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("express")},function(e,t,n){"use strict";var r=a(n(6)),u=a(n(0)),o=a(n(5)),i=a(n(4)),s=a(n(2)),c=a(n(1));function a(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)();l.use(r.default.static("dist/public")),l.get("/",function(e,t){(0,c.default)("https://api.github.com/users/gaearon/gists").then(function(e){return e.json()}).then(function(e){console.log(e);var n=o.default.renderToString(u.default.createElement(i.default,{gists:e})),r=(0,s.default)(n,e);t.send(r)})}),l.listen(3e3,function(){console.log("Listening on port 3000")})}]);
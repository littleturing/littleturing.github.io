(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{703:function(n,e,i){!function(n){"use strict";n.defineMode("diff",function(){var n={"+":"positive","-":"negative","@":"meta"};return{token:function(e){var i=e.string.search(/[\t ]+?$/);if(!e.sol()||0===i)return e.skipToEnd(),("error "+(n[e.string.charAt(0)]||"")).replace(/ $/,"");var t=n[e.peek()]||e.skipToEnd();return-1===i?e.skipToEnd():e.pos=i,t}}}),n.defineMIME("text/x-diff","diff")}(i(35))}}]);
//# sourceMappingURL=43.3f6cfcad.chunk.js.map
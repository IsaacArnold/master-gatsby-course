(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/GqU":function(t,n,r){var e=r("RK3t"),o=r("HYAF");t.exports=function(t){return e(o(t))}},"/b8u":function(t,n,r){var e=r("STAE");t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"0BK2":function(t,n){t.exports={}},"0Dky":function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},"0GbY":function(t,n,r){var e=r("Qo9l"),o=r("2oRo"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},"0eef":function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},"2oRo":function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r("yLpj"))},"33Wh":function(t,n,r){var e=r("yoRg"),o=r("eDl+");t.exports=Object.keys||function(t){return e(t,o)}},"6JNq":function(t,n,r){var e=r("UTVS"),o=r("Vu81"),i=r("Bs8V"),u=r("m/L8");t.exports=function(t,n){for(var r=o(n),c=u.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||c(t,s,a(n,s))}}},"6LWA":function(t,n,r){var e=r("xrYK");t.exports=Array.isArray||function(t){return"Array"==e(t)}},"93I0":function(t,n,r){var e=r("VpIT"),o=r("kOOl"),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},A2ZE:function(t,n,r){var e=r("HAuM");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},BIHw:function(t,n,r){"use strict";var e=r("I+eb"),o=r("or9q"),i=r("ewvW"),u=r("UMSQ"),c=r("ppGB"),a=r("ZfDv");e({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,n=i(this),r=u(n.length),e=a(n,0);return e.length=o(e,n,n,r,0,void 0===t?1:c(t)),e}})},Bs8V:function(t,n,r){var e=r("g6v/"),o=r("0eef"),i=r("XGwC"),u=r("/GqU"),c=r("wE6v"),a=r("UTVS"),f=r("DPsx"),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=u(t),n=c(n,!0),f)try{return s(t,n)}catch(r){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},DPsx:function(t,n,r){var e=r("g6v/"),o=r("0Dky"),i=r("zBJ4");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"G+Rx":function(t,n,r){var e=r("0GbY");t.exports=e("document","documentElement")},HAuM:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},HYAF:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"I+eb":function(t,n,r){var e=r("2oRo"),o=r("Bs8V").f,i=r("kRJp"),u=r("busE"),c=r("zk60"),a=r("6JNq"),f=r("lMq5");t.exports=function(t,n){var r,s,p,l,v,g=t.target,d=t.global,y=t.stat;if(r=d?e:y?e[g]||c(g,{}):(e[g]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(v=o(r,s))&&v.value:r[s],!f(d?s:g+(y?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;a(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),u(r,s,l,t)}}},I8vh:function(t,n,r){var e=r("ppGB"),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},JBy8:function(t,n,r){var e=r("yoRg"),o=r("eDl+").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},"N+g0":function(t,n,r){var e=r("g6v/"),o=r("m/L8"),i=r("glrk"),u=r("33Wh");t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),c=e.length,a=0;c>a;)o.f(t,r=e[a++],n[r]);return t}},QGkA:function(t,n,r){r("RNIs")("flat")},Qo9l:function(t,n,r){var e=r("2oRo");t.exports=e},RK3t:function(t,n,r){var e=r("0Dky"),o=r("xrYK"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},RNIs:function(t,n,r){var e=r("tiKp"),o=r("fHMY"),i=r("m/L8"),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},STAE:function(t,n,r){var e=r("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},TWQb:function(t,n,r){var e=r("/GqU"),o=r("UMSQ"),i=r("I8vh"),u=function(t){return function(n,r,u){var c,a=e(n),f=o(a.length),s=i(u,f);if(t&&r!=r){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},UMSQ:function(t,n,r){var e=r("ppGB"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},UTVS:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},VpIT:function(t,n,r){var e=r("xDBR"),o=r("xs3f");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},Vu81:function(t,n,r){var e=r("0GbY"),o=r("JBy8"),i=r("dBg+"),u=r("glrk");t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},XGwC:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},ZfDv:function(t,n,r){var e=r("hh1v"),o=r("6LWA"),i=r("tiKp")("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},afO8:function(t,n,r){var e,o,i,u=r("f5p1"),c=r("2oRo"),a=r("hh1v"),f=r("kRJp"),s=r("UTVS"),p=r("93I0"),l=r("0BK2"),v=c.WeakMap;if(u){var g=new v,d=g.get,y=g.has,h=g.set;e=function(t,n){return h.call(g,t,n),n},o=function(t){return d.call(g,t)||{}},i=function(t){return y.call(g,t)}}else{var x=p("state");l[x]=!0,e=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},busE:function(t,n,r){var e=r("2oRo"),o=r("kRJp"),i=r("UTVS"),u=r("zk60"),c=r("iSVu"),a=r("afO8"),f=a.get,s=a.enforce,p=String(String).split("String");(t.exports=function(t,n,r,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,l=!!c&&!!c.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=p.join("string"==typeof n?n:"")),t!==e?(a?!l&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},"dBg+":function(t,n){n.f=Object.getOwnPropertySymbols},"eDl+":function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},ewvW:function(t,n,r){var e=r("HYAF");t.exports=function(t){return Object(e(t))}},f5p1:function(t,n,r){var e=r("2oRo"),o=r("iSVu"),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},fHMY:function(t,n,r){var e,o=r("glrk"),i=r("N+g0"),u=r("eDl+"),c=r("0BK2"),a=r("G+Rx"),f=r("zBJ4"),s=r("93I0"),p=s("IE_PROTO"),l=function(){},v=function(t){return"<script>"+t+"<\/script>"},g=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,n;g=e?function(t){t.write(v("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=f("iframe")).style.display="none",a.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete g.prototype[u[r]];return g()};c[p]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(l.prototype=o(t),r=new l,l.prototype=null,r[p]=t):r=g(),void 0===n?r:i(r,n)}},"g6v/":function(t,n,r){var e=r("0Dky");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},glrk:function(t,n,r){var e=r("hh1v");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},hh1v:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},hiQ4:function(t,n,r){"use strict";r.r(n),r.d(n,"query",(function(){return d}));var e=r("F9E7"),o=(r("q1tI"),r("Wbzz")),i=r("9eSz"),u=r.n(i),c=r("vOnD"),a=c.b.div.withConfig({displayName:"PizzaList__PizzaGridStyles",componentId:"sc-1bfq4fh-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));grid-gap:4rem;grid-auto-rows:auto auto 500px;"]),f=c.b.div.withConfig({displayName:"PizzaList__PizzaStyles",componentId:"sc-1bfq4fh-1"})(["display:grid;@supports not (grid-template-rows:subgrid){--rows:auto auto 1fr;}grid-template-rows:var(--rows,subgrid);grid-row:span 3;grid-gap:1rem;h2,p{margin:0;}"]),s=function(t){var n=t.pizza;return Object(e.jsxs)(f,{children:[Object(e.jsx)(o.a,{to:"/pizza/"+n.slug.current,children:Object(e.jsx)("h2",{children:Object(e.jsx)("span",{className:"mark",children:n.name})})}),Object(e.jsx)("p",{children:n.toppings.map((function(t){return t.name})).join(", ")}),Object(e.jsx)(u.a,{fluid:n.image.asset.fluid,alt:n.name})]})},p=function(t){var n=t.pizzas;return Object(e.jsx)(a,{children:n.map((function(t){return Object(e.jsx)(s,{pizza:t},t.id)}))})},l=(r("BIHw"),r("QGkA"),c.b.div.withConfig({displayName:"ToppingsFilter__ToppingsStyles",componentId:"sc-17jrjpr-0"})(['display:flex;flex-wrap:wrap;gap:1rem;margin-bottom:4rem;a{display:grid;grid-template-columns:auto 1fr;grid-gap:0 1rem;align-items:center;padding:5px;background:var(--grey);border-radius:2px;.count{background:white;padding:2px 5px;}&[aria-current="page"]{background:var(--yellow);}}']));var v=function(t){t.activeTopping;var n=Object(o.c)("94528822").pizzas,r=function(t){var n=t.map((function(t){return t.toppings})).flat().reduce((function(t,n){var r=t[n.id];return r?r.count+=1:t[n.id]={id:n.id,name:n.name,count:1},t}),{});return Object.values(n).sort((function(t,n){return n.count-t.count}))}(n.nodes);return Object(e.jsxs)(l,{children:[Object(e.jsxs)(o.a,{to:"/pizzas",children:[Object(e.jsx)("span",{className:"name",children:"All"}),Object(e.jsx)("span",{className:"count",children:n.nodes.length})]}),r.map((function(t){return Object(e.jsxs)(o.a,{to:"/topping/"+t.name,children:[Object(e.jsx)("span",{className:"name",children:t.name}),Object(e.jsx)("span",{className:"count",children:t.count})]},t.id)}))]})},g=r("EYWl"),d=(n.default=function(t){var n=t.data,r=t.pageContext,o=n.pizzas.nodes;return Object(e.jsxs)(e.Fragment,{children:[Object(e.jsx)(g.a,{title:r.topping?"Pizzas with "+r.topping:"All Pizzas"}),Object(e.jsx)(v,{activeTopping:r.topping}),Object(e.jsx)(p,{pizzas:o})]})},"1563547122")},iSVu:function(t,n,r){var e=r("xs3f"),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},kOOl:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},kRJp:function(t,n,r){var e=r("g6v/"),o=r("m/L8"),i=r("XGwC");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},lMq5:function(t,n,r){var e=r("0Dky"),o=/#|\.prototype\./,i=function(t,n){var r=c[u(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"m/L8":function(t,n,r){var e=r("g6v/"),o=r("DPsx"),i=r("glrk"),u=r("wE6v"),c=Object.defineProperty;n.f=e?c:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return c(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},or9q:function(t,n,r){"use strict";var e=r("6LWA"),o=r("UMSQ"),i=r("A2ZE"),u=function(t,n,r,c,a,f,s,p){for(var l,v=a,g=0,d=!!s&&i(s,p,3);g<c;){if(g in r){if(l=d?d(r[g],g,n):r[g],f>0&&e(l))v=u(t,n,l,o(l.length),v,f-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[v]=l}v++}g++}return v};t.exports=u},ppGB:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},tiKp:function(t,n,r){var e=r("2oRo"),o=r("VpIT"),i=r("UTVS"),u=r("kOOl"),c=r("STAE"),a=r("/b8u"),f=o("wks"),s=e.Symbol,p=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=p("Symbol."+t)),f[t]}},wE6v:function(t,n,r){var e=r("hh1v");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},xDBR:function(t,n){t.exports=!1},xrYK:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},xs3f:function(t,n,r){var e=r("2oRo"),o=r("zk60"),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},yoRg:function(t,n,r){var e=r("UTVS"),o=r("/GqU"),i=r("TWQb").indexOf,u=r("0BK2");t.exports=function(t,n){var r,c=o(t),a=0,f=[];for(r in c)!e(u,r)&&e(c,r)&&f.push(r);for(;n.length>a;)e(c,r=n[a++])&&(~i(f,r)||f.push(r));return f}},zBJ4:function(t,n,r){var e=r("2oRo"),o=r("hh1v"),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},zk60:function(t,n,r){var e=r("2oRo"),o=r("kRJp");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}}}]);
//# sourceMappingURL=component---src-pages-pizzas-js-319d5033c7f2353f172a.js.map
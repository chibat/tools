(()=>{var j=Object.defineProperty;var I=(o,l)=>{for(var a in l)j(o,a,{get:l[a],enumerable:!0})};var r={};I(r,{default:()=>v});var{applyCSS:S}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/core/style.ts"];S("https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css");var{default:V}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/components/Head.ts"],{default:T}=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.31/framework/react/components/StyleLink.ts"],{default:e,useState:n}=__ALEPH.pack["https://esm.sh/react@17.0.2"],f="Contains characters that cannot be converted.";function v(){console.log("hoge");let[o,l]=n(""),[a,c]=n(""),[y,s]=n("");function b(t){l(t.target.value)}function g(t){if(t.key=="Enter"){c(""),s(""),t.preventDefault();try{c(btoa(o))}catch(K){s(f)}}}let[u,_]=n(""),[U,d]=n(""),[x,p]=n("");function k(t){_(t.target.value)}function A(t){if(t.key=="Enter"){d(""),p(""),t.preventDefault();try{d(atob(u))}catch(K){p(f)}}}decodeURI("");let[h,P]=n(""),[H,i]=n("");function w(t){P(t.target.value)}function R(t){t.key=="Enter"&&(i(""),t.preventDefault(),i(encodeURI(h)))}let[m,C]=n(""),[D,E]=n("");function L(t){C(t.target.value)}function B(t){t.key=="Enter"&&(E(""),t.preventDefault(),E(decodeURI(m)))}return e.createElement("div",null,e.createElement(V,null,e.createElement("title",null,"Tool"),e.createElement(T,{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"})),e.createElement("header",null,e.createElement("h1",null,"Tool"),e.createElement("nav",null,e.createElement("a",{href:"https://chibat.github.io/tool/"},"Home")," /",e.createElement("a",{href:"https://github.com/chibat/tool",target:"_blank"}," GitHub"))),e.createElement("h1",null,"Base64"),e.createElement("h2",null,"encode: btoa"),e.createElement("input",{type:"text",value:o,onChange:b,onKeyPress:g})," ",a,e.createElement("span",{style:{color:"red"}},y),e.createElement("h2",null,"decode: atob"),e.createElement("input",{type:"text",value:u,onChange:k,onKeyPress:A})," ",U,e.createElement("span",{style:{color:"red"}},x),e.createElement("h1",null,"URL"),e.createElement("h2",null,"encode: encodeURI"),e.createElement("input",{type:"text",value:h,onChange:w,onKeyPress:R})," ",H,e.createElement("h2",null,"decode: dencodeURI"),e.createElement("input",{type:"text",value:m,onChange:L,onKeyPress:B})," ",D)}__ALEPH.pack["/pages/index.tsx"]=r;})();

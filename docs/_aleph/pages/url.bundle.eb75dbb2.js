(()=>{var h=Object.defineProperty;var g=(n,l)=>{for(var o in l)h(n,o,{get:l[o],enumerable:!0})};var r={};g(r,{default:()=>d});var{default:t,useState:c}=__ALEPH.pack["https://esm.sh/react@17.0.2"],{default:v}=__ALEPH.pack["/components/Header.tsx"];function d(){let[n,l]=c(""),[o,a]=c("");function i(e){l(e.target.value)}function E(e){e.key=="Enter"&&(a(""),e.preventDefault(),a(encodeURI(n)))}let[u,U]=c(""),[p,s]=c("");function m(e){U(e.target.value)}function f(e){e.key=="Enter"&&(s(""),e.preventDefault(),s(decodeURI(u)))}return t.createElement("div",null,t.createElement(v,null),t.createElement("h1",null,"URL"),t.createElement("h2",null,"encode: encodeURI"),t.createElement("input",{type:"text",value:n,onChange:i,onKeyPress:E})," ",o,t.createElement("h2",null,"decode: dencodeURI"),t.createElement("input",{type:"text",value:u,onChange:m,onKeyPress:f})," ",p)}__ALEPH.pack["/pages/url.tsx"]=r;})();

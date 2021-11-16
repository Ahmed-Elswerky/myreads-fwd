(this["webpackJsonpmyreads-fwd"]=this["webpackJsonpmyreads-fwd"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n(9),s=n.n(o),a=(n(14),n(5)),r=n(3),i=(n.p,n(15),n(6)),l="https://reactnd-books-api.udacity.com",d=localStorage.token;d||(d=localStorage.token=Math.random().toString(36).substr(-8));var u={Accept:"application/json","Content-Type":"application/json",Authorization:d},b=function(){return fetch("".concat(l,"/books"),{headers:u}).then((function(e){return e.json()})).then((function(e){return e.books}))},j=n(0);var h=function(e){var t,n,o=Object(c.useState)({}),s=Object(r.a)(o,2),i=s[0],d=s[1];return Object(c.useEffect)((function(){var t;void 0!=e.book?d(e.book):(t=e.id,fetch("".concat(l,"/books/").concat(t),{headers:u}).then((function(e){return e.json()})).then((function(e){return e.book}))).then((function(e){e.then((function(e){d(e)}))}))}),[]),Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"book",children:[Object(j.jsxs)("div",{className:"book-top",children:[Object(j.jsx)("div",{className:"book-cover",style:{width:128,height:193,backgroundImage:"url(".concat(null===i||void 0===i||null===(t=i.imageLinks)||void 0===t?void 0:t.smallThumbnail,")")}}),Object(j.jsx)("div",{className:"book-shelf-changer",children:Object(j.jsxs)("select",{value:i.shelf,onChange:function(t){var n,c;(null===(n=t.target)||void 0===n||null===(c=n.value)||void 0===c?void 0:c.length)>0&&function(e,t){return fetch("".concat(l,"/books/").concat(e.id),{method:"PUT",headers:Object(a.a)({},u),body:JSON.stringify({shelf:t})}).then((function(e){return e.json()}))}({id:i.id},t.target.value).then((function(){return e.update()}))},children:[Object(j.jsx)("option",{value:"",children:"Move to..."}),Object(j.jsx)("option",{value:"currentlyReading",children:"Currently Reading"}),Object(j.jsx)("option",{value:"wantToRead",children:"Want to Read"}),Object(j.jsx)("option",{value:"read",children:"Read"}),Object(j.jsx)("option",{value:"none",children:"None"})]})})]}),Object(j.jsx)("div",{className:"book-title",children:null===i||void 0===i?void 0:i.title}),Object(j.jsx)("div",{className:"book-authors",children:(null===i||void 0===i||null===(n=i.authors)||void 0===n?void 0:n.length)>0&&(null===i||void 0===i?void 0:i.authors.map((function(e){return e+" . "})))})]})},null===i||void 0===i?void 0:i.id)};var f=function(){var e=Object(c.useState)({showSearchPage:!1,searchString:"",books:[],update:1}),t=Object(r.a)(e,2),n=t[0],o=t[1],s=function(e){o((function(t){return Object(a.a)(Object(a.a)({},t),e)}))};return Object(c.useEffect)((function(){b().then((function(e){s({books:[]}),s({books:e})}))}),[n.update]),Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{className:"list-books",children:[Object(j.jsx)("div",{className:"list-books-title",children:Object(j.jsx)("h1",{children:"MyReads"})}),Object(j.jsx)("div",{className:"list-books-content",children:Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Currently Reading"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:n.books.filter((function(e){return"currentlyReading"==e.shelf})).map((function(e){return Object(j.jsx)(h,{book:e,update:function(){return s({update:Date.now()})}})}))})})]}),Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Want to Read"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:n.books.filter((function(e){return"wantToRead"==e.shelf})).map((function(e){return Object(j.jsx)(h,{book:e,update:function(){return s({update:Date.now()})}})}))})})]}),Object(j.jsxs)("div",{className:"bookshelf",children:[Object(j.jsx)("h2",{className:"bookshelf-title",children:"Read"}),Object(j.jsx)("div",{className:"bookshelf-books",children:Object(j.jsx)("ol",{className:"books-grid",children:n.books.filter((function(e){return"read"==e.shelf})).map((function(e){return Object(j.jsx)(h,{book:e,update:function(){return s({update:Date.now()})}})}))})})]})]})}),Object(j.jsx)("div",{className:"open-search",children:Object(j.jsx)(i.b,{to:"/Search",children:Object(j.jsx)("button",{style:{border:"0"},children:"Add a book"})})})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))},v=n(2);var x=function(e){var t=Object(c.useState)([]),n=Object(r.a)(t,2),o=n[0],s=n[1],i=Object(c.useState)([]),d=Object(r.a)(i,2),f=d[0],O=d[1],v=Object(c.useState)(1),x=Object(r.a)(v,2),k=(x[0],x[1]);return Object(c.useEffect)((function(){b().then((function(e){s([]),s(e)}))}),[]),Object(c.useEffect)((function(){var t;0==e.str.length?O([]):(t=e.str,fetch("".concat(l,"/search"),{method:"POST",headers:Object(a.a)({},u),body:JSON.stringify({query:t})}).then((function(e){return e.json()})).then((function(e){return e.books}))).then((function(e){(null===e||void 0===e?void 0:e.length)>0?O(e):O([])}))}),[e.str]),Object(j.jsx)(j.Fragment,{children:null===f||void 0===f?void 0:f.map((function(e){return Object(j.jsx)(h,{book:o.find((function(t){return t.id==e.id}))||e,update:function(){return k(Date.now())}})}))})};var k=function(){var e=Object(c.useState)({searchString:""}),t=Object(r.a)(e,2),n=t[0],o=t[1],s=function(e){o((function(t){return Object(a.a)(Object(a.a)({},t),e)}))};return Object(j.jsx)("div",{className:"app",children:Object(j.jsxs)("div",{className:"search-books",children:[Object(j.jsxs)("div",{className:"search-books-bar",children:[Object(j.jsx)(i.b,{to:"/",children:Object(j.jsx)("button",{className:"close-search",onClick:function(){return s({showSearchPage:!1})},children:"Close"})}),Object(j.jsx)("div",{className:"search-books-input-wrapper",children:Object(j.jsx)("input",{type:"text",placeholder:"Search by title or author",onChange:function(e){return s({searchString:e.target.value})}})})]}),Object(j.jsx)("div",{className:"search-books-results",children:Object(j.jsx)("ol",{className:"books-grid",children:Object(j.jsx)(x,{str:n.searchString})})})]})})};s.a.render(Object(j.jsx)(i.a,{children:Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.a,{path:"/Search",element:Object(j.jsx)(k,{})}),Object(j.jsx)(v.a,{exact:!0,path:"/",element:Object(j.jsx)(f,{})})]})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.96c03b40.chunk.js.map
(this["webpackJsonpfood-info"]=this["webpackJsonpfood-info"]||[]).push([[0],{11:function(t,e,n){t.exports={container:"SearchBar_container__oaP3y",search_box:"SearchBar_search_box__Wlz_2",buttonsBox:"SearchBar_buttonsBox__l-0KO",search_input:"SearchBar_search_input__3HlBh",searchButton:"SearchBar_searchButton__2-qs_",button:"SearchBar_button__Lq03L"}},13:function(t,e,n){t.exports={cardBox:"FoodCard_cardBox__23Mda",item:"FoodCard_item__1F46r"}},14:function(t,e,n){t.exports={container:"FoodsList_container__17WRP",foods_list:"FoodsList_foods_list__2nCZ4",results:"FoodsList_results__3oAtC",btnNextPage:"FoodsList_btnNextPage__OYtEt"}},19:function(t,e,n){t.exports={container:"Spinner_container__CkSGv",spinner:"Spinner_spinner__1geWs",spin:"Spinner_spin__2subW"}},27:function(t,e,n){},28:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),s=n(21),o=n.n(s),i=(n(27),n(28),n(9)),r=n(13),l=n.n(r),d=n(8),u=n(1);function j(t){var e=t.food;return Object(u.jsx)("li",{className:l.a.card,children:Object(u.jsx)(d.b,{className:l.a.cardBox,to:"/food/".concat(e.fdcId),children:Object(u.jsx)("div",{className:l.a.item,children:e.description})})})}var _=n(14),h=n.n(_);function b(t){var e="".concat("https://api.nal.usda.gov/fdc/v1").concat(t);return fetch(e,{}).then((function(t){return t.json()}))}var f=n(19),x=n.n(f);function O(){return Object(u.jsx)("div",{className:x.a.container,children:Object(u.jsx)("div",{className:x.a.spinner})})}var m=n(2);function p(){return new URLSearchParams(Object(m.g)().search)}function N(){var t="?api_key=6o7M2ay7ihJ6nIcVSUjsVpDc1hi2AqKJv0ix38Mg",e=Object(a.useState)([]),n=Object(i.a)(e,2),c=n[0],s=n[1],o=Object(a.useState)(!0),r=Object(i.a)(o,2),l=r[0],d=r[1],_=p().get("search"),f=_?"/foods/search".concat(t,"&query=").concat(_):"/foods/search".concat(t);return Object(a.useEffect)((function(){d(!0),b(f).then((function(t){s(t),d(!1)}))}),[_]),l?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{className:h.a.container,children:[Object(u.jsxs)("div",{className:h.a.results,children:["Results: ",c.totalHits]}),Object(u.jsx)("ul",{className:h.a.foods_list,children:c.foods.map((function(t){return Object(u.jsx)(j,{food:t},t.fdcId)}))})]})}var v=n(11),S=n.n(v);function g(){var t=Object(a.useState)(""),e=Object(i.a)(t,2),n=e[0],c=e[1],s=Object(m.f)(),o=p().get("search");return Object(a.useEffect)((function(){c(o||"")}),[o]),Object(u.jsx)("form",{className:S.a.container,onSubmit:function(t){t.preventDefault(),s.push("/?search=".concat(n))},children:Object(u.jsxs)("div",{className:S.a.search_box,children:[Object(u.jsx)("input",{className:S.a.search_input,type:"search",placeholder:"Search foods",value:n,onChange:function(t){return c(t.target.value)}}),Object(u.jsx)("div",{className:S.a.buttonsBox,children:Object(u.jsx)("i",{className:"material-icons ".concat(S.a.button," ").concat(S.a.searchButton),children:"search"})})]})})}function B(){return Object(u.jsxs)("div",{className:"landing-container",children:[Object(u.jsx)(g,{}),Object(u.jsx)(N,{})]})}var F=n(7),D=n.n(F);function y(){var t=Object(m.h)().foodId,e=Object(a.useState)(null),n=Object(i.a)(e,2),c=n[0],s=n[1],o=Object(a.useState)(!0),r=Object(i.a)(o,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){b("/food/".concat(t).concat("?api_key=6o7M2ay7ihJ6nIcVSUjsVpDc1hi2AqKJv0ix38Mg")).then((function(t){s(t),d(!1)}))}),[t]),l?Object(u.jsx)(O,{}):Object(u.jsxs)("div",{className:D.a.container,children:[Object(u.jsx)("h1",{className:D.a.title,children:c.description}),Object(u.jsxs)("div",{className:D.a.nutritionalContainer,children:[Object(u.jsx)("h2",{className:D.a.nutritionalTitle,children:"Nutritional information"}),Object(u.jsxs)("div",{className:D.a.nutrientsBox,children:[Object(u.jsx)("h2",{className:"portion",children:"Portion: (Per 100g)"}),c.foodNutrients.map((function(t){return Object(u.jsxs)("div",{className:D.a.nutrients,children:[Object(u.jsx)("div",{className:D.a.nutrientName,children:t.nutrient.name}),Object(u.jsxs)("div",{className:D.a.unitName,children:[t.amount," ",t.nutrient.unitName]})]},t.nutrient.id)}))]})]})]})}function C(){return Object(u.jsxs)(d.a,{className:"App",children:[Object(u.jsx)("header",{children:Object(u.jsx)(d.b,{to:"/",children:Object(u.jsx)("h1",{className:"app-title",children:"Food's Info"})})}),Object(u.jsx)("main",{className:"container",children:Object(u.jsxs)(m.c,{children:[Object(u.jsxs)(m.a,{exact:!0,path:"/",children:[" ",Object(u.jsx)(B,{})," "]}),Object(u.jsxs)(m.a,{exact:!0,path:"/food/:foodId",children:[" ",Object(u.jsx)(y,{})," "]})]})})]})}o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={container:"FoodDetails_container__q7A-Q",title:"FoodDetails_title__3aq6f",categoryTag:"FoodDetails_categoryTag__7sVia",category:"FoodDetails_category__3U0tM",nutritionalTitle:"FoodDetails_nutritionalTitle__22Hfh",nutritionalContainer:"FoodDetails_nutritionalContainer__19ZhK",nutrientsBox:"FoodDetails_nutrientsBox__3p982",nutrients:"FoodDetails_nutrients__3wXhN",unitName:"FoodDetails_unitName__34vAh",nutrientName:"FoodDetails_nutrientName__1Jlv_"}}},[[35,1,2]]]);
//# sourceMappingURL=main.7ecd1889.chunk.js.map
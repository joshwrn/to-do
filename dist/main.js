/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";let e=[],t=[];console.log(e),console.log(t),console.log("ok fiue"),console.log("index.js test"),document.addEventListener("dblclick",(e=>{e.target.matches(".inactive")?(e.target.classList.remove("inactive"),console.log("unmark")):e.target.matches(".item")&&(e.target.classList.add("inactive"),console.log("mark as done"))})),(()=>{const o=document.getElementById("new-todo-input");o.addEventListener("keydown",(e=>{13===e.keyCode&&""!=o.value&&(console.log("enter1 create new todo"),n(),c())})),document.addEventListener("click",(e=>{e.target.matches("#add-item-button-icon")&&""!=o.value&&(console.log("click create new todo"),n(),c())}));const n=()=>{const e=document.getElementById("inner-active-list");let t=e.firstChild;const n=document.createElement("button");n.textContent=o.value,n.classList.add("item"),e.insertBefore(n,t)},c=()=>{const n=document.querySelector(".selected-list").innerHTML;console.log(o.value),((o,n,c,l,s)=>{const i=((e,t,o,n,c)=>({list:e,todo:t,date:o,priority:void 0,notes:void 0}))(o,n,(new Date).toLocaleDateString());t.push(i),-1==e.indexOf(o)&&e.push(i.list),console.log(e),console.log(t)})(n,o.value),o.value=""}})(),document.addEventListener("click",(e=>{var t,o;e.target.matches(".item")&&(t=document.querySelector(".selected-item"),o=e.target,null==t||t.classList.remove("selected-item"),o.classList.add("selected-item"),console.log("select"))}))})();
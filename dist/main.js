/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";let e=["Sample List","cool list"],t=[{list:"Sample List",todo:"This is a todo",dateAdd:"4/29/2021",dateComp:"N/A",priority:"Normal",notes:"This is a note"}];const o=document.getElementById("notes-text"),n=document.getElementById("date-added-text"),l=document.getElementById("date-completed-text"),i=document.getElementById("priority-button");let d;const s=()=>{console.log("filling liffst");let e=[];const s=document.querySelector(".selected-list").innerHTML,c=document.getElementById("inner-active-list");e=t.filter((function(e){if(e.list==s)return!0})),c.innerHTML="",e.forEach((e=>{(e=>{let t=c.firstChild;const o=document.createElement("button");o.textContent=e.todo,o.classList.add("item"),o.classList.add(`${e.priority.toLowerCase()}-priority`),"N/A"!=e.dateComp&&o.classList.add("inactive"),c.insertBefore(o,t)})(e)})),c.firstChild.classList.add("selected-item"),t.find((e=>{const t=document.querySelector(".selected-item").innerHTML;console.log("current todo "+t),e.todo==t&&(console.log(e),d=e,o.innerHTML=e.notes,n.innerHTML=`Date Added: ${e.dateAdd}`,l.innerHTML=`Date Completed: ${e.dateComp}`,i.textContent=e.priority,i.className=`${e.priority.toLowerCase()}-priority`)}))},c=()=>{const t=document.querySelector(".sidebar-section"),o=document.getElementById("sidebar-list-view");document.querySelector(".sidebar-add");let n="off";document.addEventListener("click",(e=>{if(e.target.matches(".sidebar-add")&&"off"==n){console.log("add");const e=document.createElement("input");Object.assign(e,{className:"input-box",maxlength:"20",id:"new-list-input",type:"text",placeholder:"New List"}),t.appendChild(e),e.focus(),e.onblur=()=>{e.remove(),n="off"},n="on",l()}else e.target.matches(".sidebar-add")&&"on"==n&&(document.getElementById("new-list-input").remove(),n="off")}));const l=()=>{const e=document.getElementById("new-list-input");e.addEventListener("keydown",(t=>{13===t.keyCode&&""!=e.value&&(console.log("enter create new list"),n="off",i(),r(e.value),e.remove())}))},i=()=>{const t=document.getElementById("new-list-input");console.log("input list value "+t.value),console.log(t.value),e.push(t.value),console.log(e)};document.addEventListener("click",(e=>{e.target.matches(".sidebar-list")&&(d(e.target),s())}));const d=e=>{const t=document.querySelector(".selected-list");c(t,e),console.log("select list")},c=(e,t)=>{null==e||e.classList.remove("selected-list"),t.classList.add("selected-list")},r=e=>{const t=document.createElement("p");t.classList.add("sidebar-list"),o.appendChild(t),t.innerHTML=e,console.log("listactions")};e.forEach((e=>{r(e)})),o.firstElementChild.classList.add("selected-list")};console.log("index.js test"),c(),(()=>{document.addEventListener("dblclick",(e=>{e.target.matches(".inactive")?(e.target.classList.remove("inactive"),console.log("unmark"),r()):e.target.matches(".item")&&(e.target.classList.add("inactive"),console.log("mark as done"),r())})),(()=>{const n=document.getElementById("new-todo-input");n.addEventListener("keydown",(e=>{13===e.keyCode&&""!=n.value&&(console.log("enter1 create new todo"),l(),i(),c())})),document.addEventListener("click",(e=>{e.target.matches("#add-item-button-icon")&&""!=n.value&&(console.log("click create new todo"),l(),i(),c())}));const l=()=>{const e=document.getElementById("inner-active-list");let t=e.firstChild;const l=document.createElement("button");l.textContent=n.value,l.classList.add("item"),l.classList.add("normal-priority"),e.insertBefore(l,t),o(l)},i=()=>{const o=document.querySelector(".selected-list").innerHTML;console.log("input value "+n.value),((o,n,l,i,d,s)=>{const c=((e,t,o,n,l,i)=>({list:e,todo:t,dateAdd:o,dateComp:"N/A",priority:"Normal",notes:""}))(o,n,(new Date).toLocaleDateString());t.push(c),console.table(t),-1==e.indexOf(o)&&e.push(c.list)})(o,n.value),n.value=""}})(),document.addEventListener("click",(e=>{e.target.matches(".item")&&(o(e.target),c())}));const o=e=>{var t,o;t=document.querySelector(".selected-item"),o=e,null==t||t.classList.remove("selected-item"),o.classList.add("selected-item"),console.log("select")},n=document.getElementById("notes-text"),l=document.getElementById("date-added-text"),i=document.getElementById("date-completed-text"),d=document.getElementById("priority-button");let s;const c=()=>{t.find((e=>{const t=document.querySelector(".selected-item").innerHTML;console.log("current todo "+t),e.todo==t&&(console.log(e),s=e,n.innerHTML=e.notes,l.innerHTML=`Date Added: ${e.dateAdd}`,i.innerHTML=`Date Completed: ${e.dateComp}`,d.textContent=e.priority,d.className=`${e.priority.toLowerCase()}-priority`)}))},r=()=>{t.find((e=>{const t=document.querySelector(".selected-item").innerHTML;console.log("current todo "+t),e.todo==t&&"N/A"==e.dateComp?(i.innerHTML=`Date Completed: ${(new Date).toLocaleDateString()}`,e.dateComp=(new Date).toLocaleDateString()):e.todo==t&&"N/A"!=e.dateComp&&(i.innerHTML="Date Completed: N/A",e.dateComp="N/A")}))},a=(e,t,o,n,l)=>{const i=document.querySelector(".selected-item");i.innerHTML,d.textContent=e,d.className=t,i.classList.remove(o),i.classList.add(n),l.priority=e};d.onclick=()=>{console.log("set priority"),t.find((e=>{const t=document.querySelector(".selected-item").innerHTML;e.todo==t&&("Normal"==e.priority?a("Important","important-priority-button","normal-priority","important-priority",e):"Important"==e.priority?a("Low","low-priority-button","important-priority","low-priority",e):"Low"==e.priority&&a("Normal","normal-priority-button","low-priority","normal-priority",e))}))},n.onblur=()=>{s.notes=n.innerHTML}})(),s(),(()=>{const o=document.getElementById("delete-all-button"),n=document.getElementById("delete-todo"),l=document.getElementById("sidebar-list-view");n.onclick=()=>{console.log("delete one"),t.filter((function(e){const o=document.querySelector(".selected-item").innerHTML;e.todo==o&&t.splice(t.indexOf(e),1)})),s()},o.onclick=()=>{console.log("delete all"),t.forEach((e=>{t.filter((function(e){const o=document.querySelector(".selected-list").innerHTML;e.list==o&&"N/A"!=e.dateComp&&t.splice(t.indexOf(e),1)}))})),s()};document.getElementById("delete-list").onclick=()=>{console.log("list delete"),e.forEach((t=>{e.filter((function(t){t==document.querySelector(".selected-list").innerHTML&&e.splice(e.indexOf(t),1)}))})),t.forEach((e=>{t.filter((function(e){const o=document.querySelector(".selected-list").innerHTML;e.list==o&&t.splice(t.indexOf(e),1)}))})),l.innerHTML="",c(),s()}})()})();
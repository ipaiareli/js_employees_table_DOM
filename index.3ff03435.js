var e=document.querySelector("body"),t=document.querySelector("tbody"),n=document.querySelectorAll("tbody > tr"),o=document.querySelector("thead > tr > th:nth-child(1)"),r=document.querySelector("thead > tr > th:nth-child(2)"),a=document.querySelector("thead > tr > th:nth-child(3)"),c=document.querySelector("thead > tr > th:nth-child(4)"),l=document.querySelector("thead > tr > th:nth-child(5)"),i=document.createElement("div"),d=document.createElement("h2"),u=document.createElement("p");i.classList.add("notification"),d.classList.add("title"),i.appendChild(d),i.appendChild(u),i.setAttribute("data-qa","notification");var s=!0,p=!0,m=!0,h=!0,y=!0;function f(e,t){return e.length>=4&&t>=18&&t<90}o.addEventListener("click",function(e){e.stopPropagation();var n=Array.from(document.querySelectorAll("tbody > tr"));n.sort(function(e,t){var n=e.querySelector("td:nth-child(1)").textContent,o=t.querySelector("td:nth-child(1)").textContent;return s?n.localeCompare(o):o.localeCompare(n)}),s=!s,t.innerHTML="",n.forEach(function(e){return t.appendChild(e)})}),r.addEventListener("click",function(e){e.stopPropagation();var n=Array.from(document.querySelectorAll("tbody > tr"));n.sort(function(e,t){var n=e.querySelector("td:nth-child(2)").textContent,o=t.querySelector("td:nth-child(2)").textContent;return p?n.localeCompare(o):o.localeCompare(n)}),p=!p,t.innerHTML="",n.forEach(function(e){return t.appendChild(e)})}),a.addEventListener("click",function(e){e.stopPropagation();var n=Array.from(document.querySelectorAll("tbody > tr"));n.sort(function(e,t){var n=e.querySelector("td:nth-child(3)").textContent,o=t.querySelector("td:nth-child(3)").textContent;return m?n.localeCompare(o):o.localeCompare(n)}),m=!m,t.innerHTML="",n.forEach(function(e){return t.appendChild(e)})}),c.addEventListener("click",function(e){e.stopPropagation();var n=Array.from(document.querySelectorAll("tbody > tr"));n.sort(function(e,t){var n=+e.querySelector("td:nth-child(4)").textContent,o=+t.querySelector("td:nth-child(4)").textContent;return h?n-o:o-n}),h=!h,t.innerHTML="",n.forEach(function(e){return t.appendChild(e)})}),l.addEventListener("click",function(e){e.stopPropagation();var n=Array.from(document.querySelectorAll("tbody > tr"));n.sort(function(e,t){var n=+e.querySelector("td:nth-child(5)").textContent.slice(1).split(",").join(""),o=+t.querySelector("td:nth-child(5)").textContent.slice(1).split(",").join("");return y?n-o:o-n}),y=!y,t.innerHTML="",n.forEach(function(e){return t.appendChild(e)})}),n.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),n.forEach(function(e){e.classList.remove("active")}),e.classList.add("active")})}),e.insertAdjacentHTML("beforeend",'<form class="new-employee-form">\n  <label>Name: <input name="name" type="text" data-qa="name" required></label>\n  <label>Position: <input name="position" type="text" data-qa="position" required></label>\n  <label>Office:\n    <select name="office" type="text" data-qa="office" required>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age" required></label>\n  <label>Salary: <input name="salary" type="number" data-qa="salary" required></label>\n  <button>Save to table</button>\n  </form>\n  '),document.querySelector("button").addEventListener("click",function(n){n.preventDefault(),n.stopPropagation();var o=document.querySelector('[data-qa="name"]').value,r=document.querySelector('[data-qa="position"]').value,a=document.querySelector('[data-qa="office"]').value,c=document.querySelector('[data-qa="age"]').value,l=document.querySelector('[data-qa="salary"]').value,s="$".concat(Number(l).toLocaleString("en-US"));f(o,c)?(t.insertAdjacentHTML("beforeend","<tr>\n        <td>".concat(o,"</td>\n        <td>").concat(r,"</td>\n        <td>").concat(a,"</td>\n        <td>").concat(c,"</td>\n        <td>").concat(s,"</td>\n      </tr>")),i.classList.add("success"),d.textContent="Congrats!!!",u.textContent="Succesfully added new employee!!!",e.appendChild(i),setTimeout(function(){i.remove(),i.classList.remove("success"),i.classList.remove("error")},2e3)):f(o,c)||(i.classList.add("error"),d.textContent="Sorry :(",u.textContent="U need to change some input fields",e.appendChild(i),setTimeout(function(){i.remove(),i.classList.remove("error"),i.classList.remove("success")},2e3))});
//# sourceMappingURL=index.3ff03435.js.map

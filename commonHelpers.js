(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const h=[{name:"Jane Cooper",company:"Microsoft",phone:"(225) 555-0118",email:"jane@microsoft.com",country:"United States",status:"Active"},{name:"Floyd Miles",company:"Yahoo",phone:"(205) 555-0100",email:"floyd@yahoo.com",country:"Kiribati",status:"Inactive"},{name:"Ronald Richards",company:"Adobe",phone:"(302) 555-0107",email:"ronald@adobe.com",country:"Israel",status:"Inactive"},{name:"Marvin McKinney",company:"Tesla",phone:"(252) 555-0126",email:"marvin@tesla.com",country:"Iran",status:"Active"},{name:"Jerome Bell",company:"Google",phone:"(629) 555-0129",email:"jerome@google.com",country:"Réunion",status:"Active"},{name:"Kathryn Murphy",company:"Microsoft",phone:"(406) 555-0120",email:"kathryn@microsoft.com",country:"Curaçao",status:"Active"},{name:"Jacob Jones",company:"Yahoo",phone:"(208) 555-0112",email:"jacob@yahoo.com",country:"Brazil",status:"Active"},{name:"Kristin Watson",company:"Facebook",phone:"(704) 555-0127",email:"kristin@facebook.com",country:"Åland Islands",status:"Inactive"}],l=document.querySelector(".table");h.forEach(e=>{const o=document.createElement("tr");o.innerHTML=`
    <td class="table-text">${e.name}</td>
    <td class="table-text">${e.company}</td>
    <td class="table-text">${e.phone}</td>
    <td class="table-text">${e.email}</td>
    <td class="table-text">${e.country}</td>
    <td class="table-text status"><span class="status-block">${e.status}</span></td>
  `,l.appendChild(o);const a=document.createElement("tr");a.innerHTML=`
  <td colspan="6">
    <div class="linerow"></div>
  </td>
`,l.appendChild(a)});const b=document.querySelectorAll(".status-block");b.forEach(e=>{e.textContent==="Active"?e.classList.add("active"):e.classList.add("inactive")});const u=document.querySelector(".js-menu"),s=document.querySelector(".js-menu-open"),m=document.querySelector(".js-menu-close"),v=document.querySelectorAll(".menu-link"),p=document.querySelector(".js-menu"),y=document.querySelector(".table-data"),f=document.querySelector(".table"),r=()=>{const e=s.getAttribute("aria-expanded")==="true"||!1;s.setAttribute("aria-expanded",!e),u.classList.toggle("is-open")};s.addEventListener("click",r);m.addEventListener("click",r);v.forEach(e=>{e.addEventListener("click",r)});window.matchMedia("(min-width: 1440px)").addEventListener("change",e=>{e.matches&&(u.classList.remove("is-open"),s.setAttribute("aria-expanded",!1))});const L=()=>{p.classList.add("is-open"),y.classList.add("hidden"),f.classList.add("hidden")},g=()=>{p.classList.remove("is-open"),y.classList.remove("hidden"),f.classList.remove("hidden")};s.addEventListener("click",L);m.addEventListener("click",g);const d=document.querySelectorAll(".menu-link");d.forEach(e=>{e.addEventListener("click",o=>{o.preventDefault(),d.forEach(a=>a.classList.remove("current")),(void 0).classList.add("current")})});
//# sourceMappingURL=commonHelpers.js.map

const t=document.querySelector(".header .nav-bar .nav-list .hamburger"),s=document.querySelector(".header .nav-bar .nav-list ul"),c=document.querySelector(".header.content"),n=document.querySelectorAll(".nav-content"),r=document.querySelector(".wrapper"),a=document.querySelectorAll(".button");t.addEventListener("click",()=>{t.classList.toggle("active"),s.classList.toggle("active")});const l=()=>{document.cookie.includes("codingPosii")||(r.classList.add("show"),a.forEach(e=>{e.addEventListener("click",()=>{r.classList.remove("show"),e.id=="acceptBtn"&&(document.cookie="cookieBy= codingPosii; max-age="+60*60*24*30)})}))};window.addEventListener("load",l);document.addEventListener("scroll",()=>{window.scrollY>10?(c.style.backgroundColor="#000000",n.forEach(o=>{o.style.borderBottom="1px solid rgba(255, 255, 255, 0.3)"})):(c.style.backgroundColor="transparent",n.forEach(o=>{o.style.borderBottom="0px"}))});$(document).ready(function(){$.fancybox.defaults.hash=!1});
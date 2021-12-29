const menu = document.querySelector(".menu");
const lst =  document.querySelector(".links");
menu.addEventListener("click", ()=>{
    lst.classList.toggle("active");
});
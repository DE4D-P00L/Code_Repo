var menu_btn = document.querySelector(".fa-bars");
var menu = document.querySelector(".nav-pc");

menu_btn.addEventListener('click', ()=>{ 
    menu.classList.toggle('active');
})
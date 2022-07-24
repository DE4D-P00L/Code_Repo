var menu_btn = document.querySelector(".fa-bars");
var menu = document.querySelector(".nav-pc");

menu_btn.addEventListener('click', ()=>{ 
    menu.classList.toggle('active');
})

var mybtn = document.querySelector(".mybtn");

console.log(mybtn);
mybtn.addEventListener('click',()=>{ 
    window.location.href ="../login.html";
})
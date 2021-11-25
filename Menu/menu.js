var btn = document.querySelector("#menu");
var menu = document.querySelector(".menu");

btn.addEventListener("click", ()=>{
    if(btn.checked){
        menu.classList.add("active");
    }
    else{
        menu.classList.remove("active");
    }
})




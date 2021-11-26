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

const navbar = document.querySelector('.menu');
const hm = document.querySelector('.menu_');
const hmb = document.querySelectorAll('span');
console.log(hmb);

window.onscroll = () => {
    if (window.scrollY > 500) {
        navbar.style.backgroundColor = "#333";
        hm.style.backgroundColor = "#000";
        hmb.forEach((bar) => {
            bar.style.backgroundColor = "#fff";
        });
    } else {
        navbar.style.backgroundColor = "#ffffff1a";
        hm.style.backgroundColor = "#fff";
        hmb.forEach((bar) => {
            bar.style.backgroundColor = "#000";
        });
    }
};




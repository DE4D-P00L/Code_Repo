var btn = document.querySelector("#menu");
var menu = document.querySelector(".menu");
var image = document.querySelector(".scrollarea");

btn.addEventListener("click", ()=>{
    if(btn.checked){
        menu.classList.add("active");
        image.style.backgroundSize = "300%";
    }
    else{
        menu.classList.remove("active");
        image.style.backgroundSize = "cover";
    }
})

const navbar = document.querySelector('.menu');
const hm = document.querySelector('.menu_');
const hmb = document.querySelectorAll('span');
console.log(hmb);

window.onscroll = () => {
    if (window.scrollY > window.innerHeight - 58) {
        navbar.style.backgroundColor = "#303635";
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




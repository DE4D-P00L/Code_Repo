var btns = document.querySelectorAll(".toNextPage");
var container = document.querySelector(".flex-form");
console.log(btns);


btns.forEach((e)=>{
    e.addEventListener('click', ()=>{
        container.classList.toggle("active");
    })
})
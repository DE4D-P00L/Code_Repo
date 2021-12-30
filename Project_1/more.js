const more = document.querySelector(".more");
var hiddenArray = document.querySelectorAll(".hidden");
console.log(hiddenArray);
let flag = false;


more.addEventListener('click', ()=>{
    if(!flag){
        more.innerText = "Less";
    }
    else{
        more.innerText = "More...";
    }
    flag = !flag;
    hiddenArray.forEach((e)=>{
        e.classList.toggle("show");
    });
});
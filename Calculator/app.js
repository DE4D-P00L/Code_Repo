const calculate = (e)=>{
    let a = parseInt(document.querySelector('#a').value);
    let b = parseInt(document.querySelector('#b').value);
    let result = document.querySelector('.result');
    let res = 0;
    switch(e){
        case '+': res = a+b;
            break;
        case '-': res = a-b;
            break;
        case '*': res = a*b;
            break;
        case '/': res = a/b;
            break;
        default: break;
    }
    result.textContent = "Result: "+res;
}
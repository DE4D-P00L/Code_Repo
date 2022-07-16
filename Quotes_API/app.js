const fetch_quote = async ()=>{
    var res = await fetch('https://type.fit/api/quotes');
    var data = await res.json();
    var rno = Math.floor(Math.random()*1600);
    var z =data[rno].author;
    var qu = document.getElementById('quotes-box');
    qu.textContent = data[rno].text;
    if(z!=null){
        const innerDiv = document.createElement('div');
        innerDiv.innerText = "~"+z;
        innerDiv.className = 'box';
        qu.appendChild(innerDiv);
    }
}
fetch_quote();
setInterval(fetch_quote,15000);
const speak = (text, voice, rate, pitch, volume)=>{
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    console.log("speaking");
let speakData = new SpeechSynthesisUtterance();
speakData.volume = volume; // From 0 to 1
speakData.rate = rate; // From 0.1 to 10
speakData.pitch = pitch; // From 0 to 2
speakData.text = text;
speakData.lang = 'en';
speakData.voice = voice;
    
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
speechSynthesis.speak(speakData);
}

const fetch_quote = async ()=>{
    var res = await fetch('https://type.fit/api/quotes');
    var data = await res.json();
    var rno = Math.floor(Math.random()*1600);
    var z =data[rno].author;
    var txt = data[rno].text;
    var qu = document.getElementById('quotes-box');
    qu.textContent = data[rno].text;
    if(z!=null){
        const innerDiv = document.createElement('div');
        innerDiv.innerText = "~"+z;
        innerDiv.className = 'box';
        qu.appendChild(innerDiv);
    }
    speak(txt, undefined, 1, .25, 1);
}

fetch_quote();
setInterval(fetch_quote,15000);
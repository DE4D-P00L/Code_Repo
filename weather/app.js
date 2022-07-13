var temperature = document.querySelector(".temperature");
const getData = ()=>{
    var city = document.querySelector("#city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=487e8534a4d5a333725abd5959e5e5a8`).then(res=>{
        return res.json();
    }).then(data=>{
        // console.log(data.main.temp);
        temperature.textContent = data.main.temp+"°C";
    }).catch(e=>{
        alert("Wrong city name!");
    });
}

const getData2 = async ()=>{
    var city = document.querySelector("#city").value;

    try {
        var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=487e8534a4d5a333725abd5959e5e5a8`);
        var data = await res.json();
    } catch (error) {
        alert("Wrong city name!");
    }

    // console.log(data.main.temp);
    temperature.textContent = data.main.temp+"°C";
}
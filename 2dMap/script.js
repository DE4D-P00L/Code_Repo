var map = L.map('map').setView([23, 77], 5);

var popup = L.popup();

function onMapClick(e) {
    var lat = e.latlng.lat;
    var lon = e.latlng.lng;

    // console.log(lat,lon);

    var city;
    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=8278b00c6fd129b174c81cccc7526610`).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data[0]);
        city = data[0].state;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=487e8534a4d5a333725abd5959e5e5a8`).then(res2=>{
        return res2.json();
        }).then(data2=>{
            // console.log(data2.main.temp);
            var temp = data2.main.temp;
            popup
            .setLatLng(e.latlng)
            .setContent("Temperature at " + city + " is " + temp + "°C")
            .openOn(map);
        }).catch(e=>{

        });

    }).catch(e=>{
        // alert("Wrong city name!");
    });
}

function addMarker(){
    var city2 = document.querySelector("#city").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city2}&units=metric&appid=487e8534a4d5a333725abd5959e5e5a8`).then(res=>{
        return res.json();
    }).then(data=>{
        // console.log(data.main);
        popup
            .setLatLng(data.coord)
            .setContent("Temperature at " + city2 + " is " + data.main.temp + "°C")
            .openOn(map);
    }).catch(e=>{
        // alert("Wrong city name!");
    });

}

map.on('click', onMapClick);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);
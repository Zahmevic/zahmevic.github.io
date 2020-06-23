const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=2eff4028c413e1406dc240f494003a91"

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {console.log(jsObject);
    document.getElementById('weath').textContent = jsObject.weather[0].description;
    document.getElementById('high').textContent = jsObject.main.temp_max;
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('speed').textContent = jsObject.wind.speed;
});

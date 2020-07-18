const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=Cozumel,quintana_roo,mx&APPID=2eff4028c413e1406dc240f494003a91&units=imperial"

fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {console.log(jsObject);
    document.getElementById('weath').textContent = jsObject.weather[0].description;
   document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    let img = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
    document.getElementById('icon0').setAttribute('src', img);

});
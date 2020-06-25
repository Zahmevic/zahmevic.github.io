const apiURLi = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2eff4028c413e1406dc240f494003a91&units=imperial"

fetch(apiURLi)
.then((response) => response.json())
.then((jsObject) => {console.log(jsObject);
const image = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
if (image == ) {
    
}
});
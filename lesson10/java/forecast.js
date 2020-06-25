const apiURLb = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=2eff4028c413e1406dc240f494003a91&units=imperial"

fetch(apiURLb)
.then((response) => response.json())
.then((jsObject) => {console.log(jsObject);
const icon = 'http://openweathermap.org/img/wn/' + jsObject.list.filter(list.weather[0].icon + '.png');
const week = jsObject.list.filter(h => h.dt_txt.includes('18:00:00'));
console.log(week);
let weekdays = ['Sun', 'Mon','Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
let dia = 0;
week.forEach(forecast => {
    let d = new Date(forecast.dt_txt);
 document.getElementById(`for${dia+1}`).textContent = forecast.main.temp;
 document.getElementById(`day${dia+1}`).textContent = weekdays[d.getDay()];
 document.getElementById(`imagesrc${dia+1}`).textContent = icon;
 document.getElementById(`icon${dia+1}`).setAttribute('src', icon);
 dia++;
});

});
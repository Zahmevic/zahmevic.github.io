const apiURLb = "https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&APPID=2eff4028c413e1406dc240f494003a91&units=imperial"

fetch(apiURLb)
.then((response) => response.json())
.then((jsObject) => {console.log(jsObject); //este es el nombre que le puse
const week = jsObject.list.filter(h => h.dt_txt.includes('18:00:00')); //selecciono los items que usaré
console.log(week);
let weekdays = ['Sun', 'Mon','Tue', 'Wen', 'Thu', 'Fri', 'Sat']; //creé un Array para poder colocar los nombres de los dpias en mi pagina
let dia = 0; //para que cuente los días de la semana y poderlos aumentar de 1 en 1
week.forEach(jsObject => { //para cada elemento
    let d = new Date(jsObject.dt_txt);
 document.getElementById(`for${dia+1}`).textContent = jsObject.main.temp;
 document.getElementById(`day${dia+1}`).textContent = weekdays[d.getDay()];
 let img = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png';
 document.getElementById(`icon${dia+1}`).setAttribute('src', img);
 dia++;
});

});
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch (requestURL)
.then (function(response){
    return response.json();
})
.then(function (jsonObject){
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 1) {
            let evento = document.createElement('section');
            let p = document.createElement('p');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            p.textContent = towns[i].events[0];
            p1.textContent = towns[i].events[1];
            p2.textContent = towns[i].events[2];
            p3.textContent = towns[i].events[3];
    evento.appendChild(p);
    evento.appendChild(p1);
    evento.appendChild(p2);
    evento.appendChild(p3);
    document.querySelector('div.evento').appendChild(evento);
}}
})
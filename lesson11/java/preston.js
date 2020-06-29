const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (i == 1 ||i == 4 || i == 5) { //full name
let card = document.createElement('section');
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let h5 = document.createElement('h5');
let image = document.createElement('img');

h1.textContent = towns[i].name;
h2.textContent = '"' + towns[i].motto +'"';
h3.textContent = 'Year Founded: ' + towns[i].yearFounded;
h4.textContent = 'Population: ' + towns[i].currentPopulation;
h5.textContent = 'Annual Rain Fall: ' +towns[i].averageRainfall;
image.setAttribute('src', 'images/' + towns[i].photo);

card.appendChild(h1);
card.appendChild(h2);
card.appendChild(h3);
card.appendChild(h4);
card.appendChild(h5);
card.appendChild(image);

document.querySelector('div.cards').appendChild(card);
    }}
  })

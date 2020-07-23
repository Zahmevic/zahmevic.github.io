const requestURL = 'https://zahmevic.github.io/lesson13/data/prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const table = jsonObject['table'];
    for (let i = 0; i < table.length; i++ ) { //full name
      let rentals = document.createElement('section');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let half = document.createElement('h5');
let price1 = document.createElement('h6');
let full = document.createElement('h5');
full.setAttribute('class', full.getAttribute('class'));
let price2 = document.createElement('h6');
let walk = document.createElement('p');
let hour = document.createElement('h5');
hour.setAttribute('id', hour.getAttribute('id'));
let price3 = document.createElement('h6');
let Day = document.createElement('h5');
let price4 = document.createElement('h6');
let image = document.createElement('img');

h2.textContent = table[i].name;
h3.textContent = table[i].max;
h4.textContent = table[i].Reservation;
half.textContent = table[i].Half;
price1.textContent =table[i].price1;
full.textContent = table[i].Full;
price2.textContent =table[i].price2;
walk.textContent = table[i].Walk;
hour.textContent = table[i].hour;
price3.textContent =table[i].price3;
Day.textContent = table[i].Day;
Day.setAttribute('id', table[i].Walk);
price4.textContent =table[i].price4;
image.setAttribute('src', table[i].image);
image.setAttribute('alt', table[i].image);

rentals.appendChild(h2);
rentals.appendChild(h3);
rentals.appendChild(h4);
rentals.appendChild(walk);
rentals.appendChild(half);
rentals.appendChild(full);
rentals.appendChild(hour);
rentals.appendChild(Day);
rentals.appendChild(price1);
rentals.appendChild(price2);
rentals.appendChild(price3);
rentals.appendChild(price4);
rentals.appendChild(image);

document.querySelector('div.rentals').appendChild(rentals);
    }
  })
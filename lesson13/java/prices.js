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
let half = document.createElement('h4');
let full = document.createElement('h4');
let hour = document.createElement('h4');
let Day = document.createElement('h4');
let price1 = document.createElement('h4');
let price2 = document.createElement('h4');
let price3 = document.createElement('h4');
let price4 = document.createElement('h4');
let image = document.createElement('img');

h2.textContent = table[i].name;
h3.textContent = table[i].max;
h4.textContent = table[i].Reservation;
half.textContent = table[i].Half;
full.textContent = table[i].Full;
hour.textContent = table[i].hour;
Day.textContent = table[i].Day;
price1.textContent =table[i].price1;
price2.textContent =table[i].price2;
price3.textContent =table[i].price3;
price4.textContent =table[i].price4;

rentals.appendChild(h2);
rentals.appendChild(h3);
rentals.appendChild(h4);
rentals.appendChild(half);
rentals.appendChild(full);
rentals.appendChild(hour);
rentals.appendChild(Day);
rentals.appendChild(price1);
rentals.appendChild(price2);
rentals.appendChild(price3);
rentals.appendChild(price4);

document.querySelector('div.rentals').appendChild(rentals);
    }
  })
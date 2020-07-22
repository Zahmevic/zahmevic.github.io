const requestURL = 'https://zahmevic.github.io/lesson13/data/prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
const table = jsonObject['table'];
for (let i = 0; i < table.lenght; i++ ) {
  let rentals = document.createElement('section');
  let h2 = document.createElement('h2');
  let h3 = document.createElement('h3');

  h2.textContent = table[i].name;
  h3.textContent = table[i].max;

  rentals.appendChild(h2);
  rentals.appendChild(h3);

  document.querySelector('div.rentals').appendChild(rentals);
}
  })
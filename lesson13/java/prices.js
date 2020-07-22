const requestURL = 'https://zahmevic.github.io/lesson13/data/prices.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); 
const table = jsonObject[''];

},
function table(table){
  console.log(table);
}
)

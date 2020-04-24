
var f =new Date ();
console.log(f.toLocaleDateString());
var year = f.getFullYear();
var month = f.getMonth();
var date =f.getDate();
var day = f.getDay();

document.getElementById("date").textContent = f;
// *****************************************


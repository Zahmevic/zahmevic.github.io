let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = month[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName + ", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("date").textContent = fulldate;
// *****************************************
try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    }
    document.getElementById("date2").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
}
let oLastModif = new Date(document.lastModified);

//hamburguer menu
function toggleMenu () {

    document.getElementById("primaryNav").classList.toggle("hide");
}
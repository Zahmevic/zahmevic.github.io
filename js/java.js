let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "october",
    "November",
    "December",
];

let d = new Date();
let DayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = DayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("current").textContent = fulldate;

// *****************************************

try {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year:"numeric",
    };
    document.getElementById("current2").textContent = new Date().toLocaleDateString(options);
} catch (e) {alert("Error with code or your browser does not support Locale");
}
alert(document.lastModified);


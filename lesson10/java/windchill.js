

var t = document.getElementById('temp');
var s = document.getElementById('speed');

function windChill(t,s) {
wind = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;

document.getElementById('wind').innerHTML = wind;

}


function windchill () {
    let t = parseFloat(document.getElementById("temperature").textContent);
    let s = parseFloat(document.getElementById("wind").textContent);
    let answer = weath(t,s);

    document.getElementById("weath").innerHTML = answer;
}

function weath(t,s){
    if (t >= 50){
        var f = (35.74 + 0.6215*t) - (35.75*s^{0.16}) + (0.4275*t*s^{0.16}) ;
    }

    document.getElementById("weath").innerHTML = f;
}
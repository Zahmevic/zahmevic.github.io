//Friday notification
let d = new Date();

const banner = document.getElementById('event');

if(d.getDay () == 5) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}
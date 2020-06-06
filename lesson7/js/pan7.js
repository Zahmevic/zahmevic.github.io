//Friday notification
let p = new Date();

const banner = document.getElementById('event');

if(p.getDay () == 5) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}
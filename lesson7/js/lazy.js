const imagesToLoad = document.querySelectorAll('img[data-src]'); //esto es para decirle al programa: estas son las imagenes que quiero cargar.

const loadImages = (image) => { //esto es para que el programa detecte si mi elemento img tiene un data-src y pase esa información a mi img tag.
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
  };
};

const imgOptions = {
    threshold: 0
};

if ('IntersectionObserver' in window) { //para cargar las imagenes
 const imgObserver = new IntersectionObserver((items) => {
     items.forEach((item) => {
         if (item.isIntersecting) {
             loadImages(item.target);
             imgObserver.unobserve(item.target);
         }
     });
 }, imgOptions)
 imagesToLoad.forEach( (img) => {
    imgObserver.observe(img);
});
}
else {
    //esto es en caso de que no soporte cargar todas las imagenes
    imagesToLoad.forEach( (img) => {
        loadImages(img);
    });
}
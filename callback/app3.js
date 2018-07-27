/*Callbacks Cuando esto este listo, y yo no sé cuando lo esté, ejecuta ese pedazo de código --> Callback*/

const loadImg = (url, cb) => {
 console.log('me estas leyedo');
 const img = new Image();

 img.onload = () => {
  console.log(img.src);
  cb(null, img);
 };
 img.onerror = () => {
  cb(new Error(`La imagen no pudo cargarse ${url}`))
 };

 img.src = url;
 console.log('me terminé de cargar')
}
const printImage = (src) => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}

/*Este codigo no se va a ejecutar en paralelo, va a esperar que el primer callback se ejecute y así sucesivamente */

//console.log(loadImg('images/1.jfif').src);
loadImg('images/1.jfif', (err, img) => {
 if (err) throw console.error(err);
 printImage(img.src);
 loadImg('https://sergimateo.com/wp-content/2012/08/fotos-panoramicas-4.jpg', (err, img) => {
  if (err) throw err;
  printImage(img.src);
  loadImg('https://sergimateo.com/wp-content/2012/08/fotos-panoramicas-10.jpg', (err, img) => {
   if (err) throw err;
   printImage(img.src);
   loadImg('https://sergimateo.com/wp-content/2012/08/fotos-panoramicas-15.jpg', (err, img) => {
    if (err) throw err;
    printImage(img.src);
   })
  })
 })
})
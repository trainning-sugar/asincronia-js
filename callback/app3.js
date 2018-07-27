/*Cuando esto este listo ejecuta ese pedazo de código --> Callback*/

const loadImg = (url, cb) => {
 const img = new Image();

 img.onload = () => {
  cb(null, img);
 };
 img.onerror = () => {
  cb(new Error(`La imagen no pudo cargarse ${url}`))
 };

 img.src = url;
}
const printImage = (src) => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}

//console.log(loadImg('images/1.jfif').src);

loadImg('https://ugc.kn3.net/i/origin/http://farm2.static.flickr.com/1258/953669278_349a6a9897_o.jpg', (err, img) => {
 if (err) throw err;
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
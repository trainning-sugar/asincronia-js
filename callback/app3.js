/*Cuando esto este listo ejecuta ese pedazo de código --> Callback*/
console.log((document.getElementById('hola')));

const loadImage = (url, cb) => {
 let img = new Image();
 //console.log(typeof img);
 //console.dir(img);
 img.onload = () => {
  cb(null, img);
 }
 img.onerror = () => {
  cb(new Error(`No se pudo cargar la imagen ${url}`))

 }
 img.src = url;
}

const addImg = (src) => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}


loadImage('images/1.jfif', (err, img) => {
 if (err) throw err;
 addImg(img.src);
 loadImage('images/2.jfif', (err, img) => {
  if (err) throw err;
  addImg(img.src);
  loadImage('images/3.jfif', (err, img) => {
   if (err) throw err;
   addImg(img.src);
  })
 })
})
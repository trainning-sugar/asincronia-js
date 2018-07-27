const loadImage = url => {
 return new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
   resolve(img)
  };
  img.onerror = () => {
   reject(new Error(`La imagen no pudo ser cargada ${url}`));
  }
  img.src = url
 })
}

const printImage = src => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}


/*Ahora bien esta implementación no es tan limpia porque lo mejor de
usar las promesas es la composición */


loadImage('../callback/images/1.jfif')
 .then(img1 => {
  printImage(img1.src);
  loadImage('../callback/images/2.jfif')
   .then(img2 => {
    printImage(img2.src);
    loadImage('../callback/images/3.jfif')
     .then(img3 => {
      printImage(img3.src);
     })
     .catch(err => {
      console.error(err);
     })
   })
   .catch(err => {
    console.error(err);
   })
 })
 .catch(err => {
  console.error(err)
 })
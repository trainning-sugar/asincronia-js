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

Promise.all([
 loadImage('../callback/images/1.jfif'),
 loadImage('../callback/images/2.jfif'),
 loadImage('../callback/images/3.jfif')
]).then(images => {
 images.forEach(img => {
  printImage(img.src);
 })
}).catch(err => {
 console.error(err);
})
const loadImage = (url) => {
 return new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
   resolve(img)
  };
  img.onerror = () => {
   reject(new Error(`La imagen no pudo ser cargada`));
  }
  img.src = url
 })
}

const printImage = src => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}

console.log(loadImage('../callback/images/1.jfif'));
const whenImageIsLoad = loadImage('../callback/images/1.jfif')

whenImageIsLoad.then((img1) => {
 printImage(img1.src);
})
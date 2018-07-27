/*Cuando esto este listo ejecuta ese pedazo de código --> Callback*/

const loadImg = (url) => {
 const img = new Image();
 img.src = url;
 console.log(img);
 return img
}

const printImage = (src) => {
 const imgElement = document.createElement('img');
 imgElement.src = src;
 document.getElementById('root').appendChild(imgElement);
}

//console.log(loadImg('images/1.jfif').src);

printImage(loadImg('images/1.jfif').src)
printImage(loadImg('images/2.jfif').src)
printImage(loadImg('images/3.jfif').src)
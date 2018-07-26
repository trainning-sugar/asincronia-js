const loadImage = (url, cb) => {
 const image = new Image();

 image.onload = () => {
  cb(null, image);
 };

 image.onerror = () => {
  cb(new Error(`Could not load image at ${url}`))
 };

 image.src = url;
}
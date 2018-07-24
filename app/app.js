const describe = (string, func) => {
  const doneCallback = () => {
    console.log('done');
  }
  try {
    if (func.length >= 1) {
      func(doneCallback)
      console.log(`passed ${string}`)
    } else {
      func();
    }
    //console.log(`aqui al final del try ${string}`)
  } catch (err) {
    console.error(`failed ${string}`)
    throw err;
  }
}

describe('hola', (doneCallback)=>{
  const x = 1;
  console.log(x); 
  doneCallback();
})
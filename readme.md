# Asincronía

Este código se ejecuta solo en el call Stack

```js
function uno(){
    dos();
};

function dos(){
    console.log('estoy en dos');
}

uno();
```

```js
setTimeout(function(){
 console.log('me tarde 2 seg');
}, 2000)

setTimeout(function(){
 console.log('me tarde 3 seg');
}, 3000)

console.log('ejecutando');
```


```js
const assert = {
  equal (actual, expected) => {
    if(actual ! == expected){
      throw new Error (`expected ${actual} to equal ${expected}`)
    }
  }
}

const test = (string, func) => {
  try {
    func();
    console.log(`passed ${string}`)
  } catch (error) {
    console.error(`failed ${string}`);
    throw error;
  }
}
```

```js
const describe = (string, func) => {
  const callbackDone = ()=>{
    console.log('done');
  }
  try {
    if(func.length >= 1){
      func(callbackDone);
      console.log(`Passed ${string}`);
    }else {
      func();
    }
  } catch(error){
    console.error(`Failed ${string}`);
    throw error;
  }
}

describe('foo', (callbackDone)=>{
  const x = 1;
  console.log(x);
  callbackDone();
})

```
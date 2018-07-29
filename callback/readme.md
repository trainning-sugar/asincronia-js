# Patrones de asincronía en js

## 1. Callbacks

Función pasada a otra función como parámetro que luego es invocada por esa función.

```js
const cb = () => {
  console.log("Aqui dentro del calback");
  setTimeout(() => {
    console.log("Aqui esperando un tiempo para mostrarme");
  }, 2000);
};

const hof = fn => {
  console.log("Entrando a la funcion hof");
  fn();
  console.log("se invoca la cb");
  console.log("Termino de ejecutarse la hof");
};

//Aqui se invoca la hof y se pasa como parametro la función de callback

hof(cb);
```

### High Order Functions

Función que acepta un callback como parámetro

### ¿Para que se utilizan los callbacks?

Es un patrón muy comun en JavaScript lo veremos mucho en:

- Métodos avanzados de los arrays
- Refactorizar codigo repetido y hacerlo más general
- Eventos del browser
- Ajax Request
- React Development

```js
//Codigo Duplicado sin callbacks
function sendMessageConsole(message) {
  console.log(message);
}
function sendMessageAlert(message) {
  alert(message);
}
function sendMessageConfirm(message) {
  return confirm(message);
}
sendMessageConfirm("demasiado codigo repetido");
```

```js
//Codigo reusable con callbacks
const sendMessage = (str, cb) => {
  return cb(str);
};

sendMessage("hola mundo", console.log);
sendMessage("Hola como estas", alert);
const answer = sendMessage("Estas seguro que quieres jugar", confirm);
```

```js
//Callbacks con functions declarations
const greet = (name, formato) => {
  return console.log(`Hola!! ${formato(name)}`);
};

const upperCase = str => str.toUpperCase();

const lowerCase = str => str.toLowerCase();

greet("lulu", upperCase);
greet("AMELIA", lowerCase);
```

```js
//Callbacks con functions anonimas es el patron mas usado
const greet = (name, formato) => {
  return console.log(`Hola!! ${formato(name)}`);
};

greet("LULU", x => x.toLowerCase());

greet("cesar", y => y.toUpperCase());

greet("Amelia", z => `Hola ${z}!!!`);
```

```js
//Impirmer los valores de un array duplicados

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
const double = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i] * 2);
  }
};

double(arrNumbers);

// Ahora con forEach
const arrNumbers = [1, 1, 1, 2, 5, 6, 7, 8];
const arr = [];
arrNumbers.forEach(ele => {
  arr.push(ele * 2);
  return arr;
});
console.log(arrNumbers);
console.log(arr);
//Uso del forEach con todos sus parámetros

const str = ["my", "forEach", "example"];
let result = "";

str.forEach((ele, index, array) => {
  if (array.length - 1 !== index) {
    result += ele + " ";
  } else {
    result += ele + "!!!";
  }
});

console.log(result);

//Implementando la función de forEach
const myArr = [1, 2, 3];

const myForEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i += 1) {
    cb(arr[i], i, arr);
  }
};

myForEach(myArr, ele => {
  console.log(ele * 2);
});
```

`La function findIndex` es un metodo de los arrays que `retorna el index` de la primera coincidencia o del `primer elemento` en el array y si no lo encuentra retorna `-1`

```js
//retorna un tipo de dato number cuyo valor será el indice de la primera coincidencia, caso contrario retornará -1
arr.findIndex((ele, index, arr) => {});
```

```js
// Ahora la funcion findIndex

const arrWeek = ["lunes", "martes", "miercoles", "lunes"];
console.log(arrWeek.findIndex(ele => ele === "viernes")); //tipo de dato number, valor -1
console.log(arrWeek.findIndex(ele => ele === "lunes")); // tipo de dato number valor 0, la primera coincidencia

//Implementación de la función findIndex
const arrWeek = ["lunes", "martes", "miercoles", "lunes"];
const myFindIndex = (arr, cb) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (cb(arr[i], i, arr)) {
      return console.log(i);
    }
    return console.log(-1);
  }
};

myFindIndex(arrWeek, (ele, i, arr) => {
  return ele === "viernes";
});
```

## 2. Stack and the Heap

- Cuando invoco a una función el detalle de la invocación es salvado en el top del `stack (pushed to the top)`
- Cuando una función retorna `returns` la información sobre la invocación es sacada del top del stack `(popped off of the top)`

```js
1 const multiply = (x, y) => {
2 return x * y;
3 };
4 const res = multiply(3, 5);
```

### `Stack Frame Content`

Contiene:

- La función que fue invocada
- Los parámetros que se le pasaron a la función
- El numero de la línea actual

  2: function multiply
  4: function main
  global

### Stack definition (Invocación de funciones)

Un conjunto ordenado de `stack frame`
Las funciones invocadas más recientes se colocan `on the top` del stack
La parte baja del stack se ubica `la primera función invocada`
El stack es procesado de `arriba` hacia `abajo`

### Heap Definition

Area de memoria donde es `almacenada` la data

```js
const obj = {
  firstname: "lulu",
  lastname: "vilchez"
};
```

En el código, el objeto es creado en el `heap` obj es una referencia al objeto, es decir a una dirección en memoria.

```js
const referency = obj;
```

En este caso no estoy haciendo una copia del objeto en si, no estoy creando un nuevo objeto en el heap solo estoy asignando a otra variable las misma referencia en memoria, por lo que si cambio en `referency` al llamar a `obj` se vería mutado.

#### Stack example

```js
const upperCaseFirst = word => {
  return word[0].toUpperCase() + word.slice(1);
};

const upperCaseWords = sentence => {
  const word = sentence.split(" ");
  console.log(word);
  for (let i = 0; i < word.length; i += 1) {
    word[i] = upperCaseFirst(word[i]);
  }
  return word.join(" ");
};

console.log(upperCaseWords("lowercase words")); //Lowercase Words
```

#### setTimeout y setInterval

- setTimeout: función que asíncronicamente ejecuta un callback despues de retraso en milisegundos

```js
setTimeout(() => {
  console.log("Hola soy el cb");
}, 1000);
```

```js
const timerId = setTimeout(() => {
  console.log("Esta función corre in 30seg");
}, 30000);

setTimeout(() => {
  console.log(`cancelando la primera función de setTimeout llamada timerId`);
  clearTimeout(timerId);
}, 2000);
```

- setInterval : función que continuamente invoca a un callback despues de cada 'x' milisegundos. Si no se detiene se llama infinitamente la función

```js
let num = 0;

const intervalId = setInterval(() => {
  num += 1;
  console.log(`num ${num}`);
  if (num === 3) {
    clearInterval(intervalId);
  }
}, 3000);
```

```js
const countDown = num => {
  const intervalId = setInterval(() => {
    num -= 1;
    console.log(`Timer : ${num}`);
    if (num === 0) {
      console.log("Ring ring ring!!");
      clearInterval(intervalId);
    }
  }, 1000);
};

countDown(12);
```

#### The event loop and the queue

### THE QUEUE

Una lista ordenada de funciones esperando ser puestas en el stack
La manera en como se procesan las funciones en el queue es `la primera en llegar es la primera en salir (fifo)`

### THE EVENT LOOP

Funcionalmente en el intérprete de js es el que está chekeando constantemente el queue cuando el stack está vacío
Si el stack(pila) está vacía, el frente de la cola se coloca en la pila

Todo lo asíncrono ocurre en el queue son funciones que esperan ejecutarse en la pila de ejecución

```js
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");

//firts, third, second
```

## 2.- Promises

> Una promesa es un objeto que representa una tarea que será completada en el futuro

```js
const p1 = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num < 0.5) {
    resolve(num);
  } else {
    reject(num);
  }
});

p1.then(data => {
  console.log(`Success ${data}`);
}).catch(error => {
  console.error(`Failed ${error}`);
});
```

```js
const promise = new Promise((resolve, reject) => {
  console.log("1");
  setTimeout(() => {
    const randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
    console.log(`3`);
  }, 4000);
  console.log("2");
});
promise.then(num => {
  console.log(`4: Este es el numero random pasado en resolve ${num}`);
});
```

```js
// Nested async callbacks callbacks que dependen de otros callbacks

let counter = 0;
setTimeout(() => {
  counter += 1;
  console.log(`1er cb counter : ${counter}`);
  setTimeout(() => {
    counter += 1;
    console.log(`2do cb counter : ${counter}`);
    setTimeout(() => {
      counter += 1;
      console.log(`ultimo cb counter : ${counter}`);
    }, 3000);
  }, 2000);
}, 1000);
```

Desventajas de los callbacks anidados

- El código es dificil de leer
- La lógica es dificil de seguir
- El código no es modular

```js
let counter = 0;
const inCounter = () => {
  counter += 1;
  console.log(`Counter ${counter}`);
};
const runLater = (cb, timeInMs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = cb();
      resolve(res);
    }, timeInMs);
  });
};

/* runLater(inCounter, 1000).then(num1 => {
  return num1;
}); */

//Encadenando Promesas

runLater(inCounter, 3000)
  .then(() => {
    return runLater(inCounter, 2000);
  })
  .then(() => {
    return runLater(inCounter, 1000);
  });
```

Encadenamiento de promesas

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomInt = Math.floor(Math.random() * 10);
    resolve(randomInt);
  }, 500);
});

promise
  .then(num1 => {
    console.log(`Primer numero resuelto en medio segundo ${num1}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
      }, 3000);
    });
  })
  .then(num2 => {
    console.log(`Segundo numero resuelto en 3 segundo ${num2}`);
  });
```

```js
const promise = new Promise((resolve, reject) => {
  resolve(5);
});

promise
  .then(num => {
    return num * 2;
  })
  .then(num1 => {
    return num1 + 20;
  })
  .then(num3 => {
    console.log(num3);
  });
```

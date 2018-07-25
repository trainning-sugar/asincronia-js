/* const sum = (x, y) => alert(x + y);
const rest = (x, y) => alert(x - y);
const multiply = (x, y) => alert(x * y);


const doProcess = (num1, num2, cb) => {
  cb(num1, num2);
}


doProcess(2, 3, sum);
doProcess(2, 3, rest);
doProcess(2, 3, multiply);
 */


const getResult = (num1, num2, str) => {
  const operationSytem = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
  }
  const Operar = (callback, x, y) => callback(x, y);
  return Operar(operationSytem[str], num1, num2);
}


const button = document.getElementById('button');

button.addEventListener('click', () => {
  const a = Number(prompt('ingrese un numero'));
  const b = Number(prompt('ingrese otro numero'));
  const string = prompt('ingrese una opcion +, -, *, /');
  console.log(getResult(a, b, string));
})
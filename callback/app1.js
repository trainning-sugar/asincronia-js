const button = document.getElementById('button');

const obj = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y
}

const doProcess = (num1, num2, string) => {
  console.log(obj[string](num1, num2));
}

/* const doProcess = (num1,    num2,   type) => {
  if (type === '+') {
    alert(num1 + num2);
  } else if (type === '-')   {
    alert(num1 - num2)
  } else if (type === 'x') {
    alert(num1 * num2);
  } else {
    alert(num1 / num2);
  }
} */

const clickHandler = () => {
  const a = Number(prompt('Ingrese un numero'));
  const b = Number(prompt('Ingrese otro numero'));
  const string = prompt('Ingrese la operacion +,-,x o /');
  doProcess(a, b, string);
}


button.addEventListener('click', clickHandler);
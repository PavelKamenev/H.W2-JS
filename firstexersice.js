let firstNumber = Number(prompt('Type first number'));
let ret = prompt('Type + - * /');
let secondNumber = Number(prompt('Type second number'));

if (ret === '+') {
  let result = `${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`;
  console.log(result);
}

if (ret === '-') {
    let result = `${firstNumber} - ${secondNumber} = ${firstNumber-secondNumber}`;
    console.log(result);
  }

  if (ret === '*') {
    let result = `${firstNumber} * ${secondNumber} = ${firstNumber*secondNumber}`;
    console.log(result);
  }

  if (ret === '/') {
    let result = `${firstNumber} / ${secondNumber} = ${firstNumber/secondNumber}`;
    console.log(result);
  }
  if (ret === '/' && secondNumber === 0) {
    alert('Fatal Error');
  }
  
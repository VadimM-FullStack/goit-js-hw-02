const ENTER_MSG = "Введите число!";
let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt(ENTER_MSG);
  const number = Number(input);
  numbers.push(number);
}

if (numbers.length > 0) {
  for (const item of numbers) {
    total += item;
  }
}

console.log(`Общая сумма чисел равна ${total}`);

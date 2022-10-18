// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)
let result = '';
for (let x = 20; x <= 30; x += 0.5) {
    result = `${result} ${x}`
}
console.log(result);

// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
const dollar = 27;
for (let x = 10; x <= 100; x += 10) {
  console.log(x * dollar);
}

// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let userNumber = +prompt('Enter your number');
let userNumberResult = '';
for (let x = 1; x <= 100; x += 1) {
    if (x ** 2 <= userNumber) {
        userNumberResult = `${userNumberResult} ${x}`
    } else {
        break;
    }
}
console.log(userNumberResult);

// Дане ціле число. З'ясувати, чи є воно простим.

const simpleNumber = +prompt('Enter your number');
let count = 0;
for (let x = 2; x < simpleNumber; x += 1) {
  if (simpleNumber % x !== 0) {
    count++;
  }
}
if (count || simpleNumber !== 0 || simpleNumber !== 1) {
  console.log('Not a simple number');
} else {
  console.log('Simple number');
}

// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь.

#!/usr/bin/env node
import readlineSync from 'readline-sync';

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i <= 3; i += 1) {
  const number = generateNumber(1, 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
  } else {
    switch (answer) {
      case 'yes':
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        break;
      default:
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    }
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (i === 3) {
    console.log(`Congratulations, ${name}`);
  }
}

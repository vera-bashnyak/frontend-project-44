import readlineSync from 'readline-sync';
import { generateNumber, greeting, isAnswerCorrect } from '../src/index.js';

const findDivisor = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }
  const gcd = a;
  return gcd;
};

const brainGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = generateNumber(1, 100);
    const number2 = generateNumber(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const correctAnswer = findDivisor(number1, number2);
    const answer = Number(readlineSync.question('Your answer: '));
    const check = isAnswerCorrect(correctAnswer, answer, name);
    if (check === false) break;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainGcd;

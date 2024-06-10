import readlineSync from 'readline-sync';
import generateNumber from '../src/index.js';

const findDivisor = (num1, num2) => {
    let a = num1;
    let b = num2;
    let gcd;
    while (a!=b) {
        if (a>b) {
          a = a -b;
        }
        else {
          b = b - a;
        }
      }
      gcd = a;
      return gcd;
}

const brainGcd = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = generateNumber(1, 100);
    const number2 = generateNumber(1, 100);
    console.log(`Question: ${number1} ${number2}`);
    const divisor = findDivisor(number1, number2);
    const answer = Number(readlineSync.question('Your answer: '));
    if (divisor === answer) {
        console.log('Correct!');
      } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${divisor}'`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
      if (i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
  }
}

export default brainGcd;
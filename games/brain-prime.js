import readlineSync from 'readline-sync';
import { generateNumber } from '../src/index.js';

const isItPrime = (num) => {
  let result = false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return result;
    }
  }
  result = true;
  return result;
};

const brainPrime = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = generateNumber(2, 100);
    const result = isItPrime(number);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((result === true && answer === 'yes') || (result === false && answer === 'no')) {
      console.log('Correct!');
    } else {
      switch (answer) {
        case 'yes':
          console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
          break;
        default:
          console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
          break;
      }
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainPrime;

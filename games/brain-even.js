import readlineSync from 'readline-sync';
import generateNumber from '../src/index.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
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
          break;
      }
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default brainEven;

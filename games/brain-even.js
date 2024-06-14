import readlineSync from 'readline-sync';
import { generateNumber, greeting } from '../src/index.js';

const isAnswerCorrect = (number, answer, name) => {
  if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
    console.log('Correct!');
    return true;
  } 
    switch (answer) {
      case 'yes':
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        break;
      default:
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        break;
    }
    console.log(`Let's try again, ${name}!`);
    return false;
};

const brainEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = generateNumber(1, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const check = isAnswerCorrect(number, answer, name);
    if (check === false) break;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainEven;

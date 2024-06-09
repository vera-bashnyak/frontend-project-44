import readlineSync from 'readline-sync';
import generateNumber from '../src/index.js';

const operators = ['+', '-', '*'];
const randomIndex = Math.floor(Math.random() * (operators.length - 1));

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    let result = 0;
    const number1 = generateNumber(1, 100);
    const operator = operators[randomIndex];
    const number2 = generateNumber(1, 100);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    switch (operator) {
      case '+':
        result = number1 + number2;
        break;
      case '-':
        result = number1 - number2;
        break;
      default:
        result = number1 * number2;
        break;
    }
    const answer = Number(readlineSync.question('Your answer: '));
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default brainCalc;

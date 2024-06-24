import readlineSync from 'readline-sync';
import greeting from '../cli.js';
import { randomIndex, getRandomInRange } from '../utils.js';
import isAnswerCorrect from '../index.js';

const operators = ['+', '-', '*'];

const findResult = (operator, num1, num2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
      break;
  }
  return result;
};

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = getRandomInRange(1, 100);
    const operator = operators[randomIndex(operators)];
    const number2 = getRandomInRange(1, 100);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const correctAnswer = findResult(operator, number1, number2);
    const answer = Number(readlineSync.question('Your answer: '));
    const check = isAnswerCorrect(correctAnswer, answer, name);
    if (check === false) break;
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;

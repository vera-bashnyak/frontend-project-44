import readlineSync from 'readline-sync';
import { generateNumber, randomIndex, greeting } from '../src/index.js';

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

const isAnswerCorrect = (correctAnswer, answer, name) => {
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  } 
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    return false;
};

const brainCalc = () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const number1 = generateNumber(1, 100);
    const operator = operators[randomIndex(operators)];
    const number2 = generateNumber(1, 100);
    console.log(`Question: ${number1} ${operator} ${number2}`);
    const correctAnswer = findResult(operator, number1, number2);
    const answer = Number(readlineSync.question('Your answer: '));
    const check = isAnswerCorrect(correctAnswer, answer, name);
    if (check === false) break;
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;

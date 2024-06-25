import getRandomInRange, { randomIndex } from '../utils.js';
import runEngine from '../index.js';

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

const rules = 'What is the result of the expression?';

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const operator = operators[randomIndex(operators)];
  const number2 = getRandomInRange(1, 100);
  const answer = findResult(operator, number1, number2);
  return [`${number1} ${operator} ${number2} `, `${answer}`];
};

const brainCalc = () => {
  runEngine(rules, generateRound);
};

export default brainCalc;

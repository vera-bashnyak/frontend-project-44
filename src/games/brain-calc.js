import getRandomInRange, { randomIndex } from '../utils.js';
import runEngine from '../index.js';

const calculation = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];

  const number1 = getRandomInRange(1, 100);
  const operator = operators[randomIndex(operators)];
  const number2 = getRandomInRange(1, 100);
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculation(operator, number1, number2));
  return [question, answer];
};

const brainCalc = () => {
  const rules = 'What is the result of the expression?';
  runEngine(rules, generateRound);
};

export default brainCalc;

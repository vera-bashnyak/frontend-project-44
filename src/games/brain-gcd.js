import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

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

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const answer = String(findDivisor(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

const brainGcd = () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  runEngine(rules, generateRound);
};

export default brainGcd;

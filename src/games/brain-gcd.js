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

const rules = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const number1 = getRandomInRange(1, 100);
  const number2 = getRandomInRange(1, 100);
  const answer = findDivisor(number1, number2);
  return [`${number1} ${number2} `, `${answer}`];
};

const brainGcd = () => {
  runEngine(rules, generateRound);
};

export default brainGcd;

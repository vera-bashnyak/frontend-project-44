import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isNumberPrime = (num) => {
  let result = 'no';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return result;
    }
  }
  result = 'yes';
  return result;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInRange(2, 100);
  const answer = isNumberPrime(number);
  return [`${number} `, `${answer}`];
};

const brainPrime = () => {
  runEngine(rules, generateRound);
};

export default brainPrime;

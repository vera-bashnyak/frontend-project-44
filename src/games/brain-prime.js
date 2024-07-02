import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isNumberPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInRange(2, 100);
  const answer = isNumberPrime(number) ? 'yes' : 'no';
  return [number, answer];
};

const brainPrime = () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runEngine(rules, generateRound);
};

export default brainPrime;

import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = getRandomInRange(1, 100);
  const answer = isEven(number) ? 'yes' : 'no';
  return [number, answer];
};

const brainEven = () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  runEngine(rules, generateRound);
};

export default brainEven;

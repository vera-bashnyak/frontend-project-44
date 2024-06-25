import getRandomInRange from '../utils.js';
import runEngine from '../index.js';

const findResult = (number) => {
  let result;
  if (number % 2 === 0) {
    result = 'yes';
  } else if (number % 2 !== 0) {
    result = 'no';
  }
  return result;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const number = getRandomInRange(1, 100);
  const answer = findResult(number);
  return [`${number} `, `${answer}`];
};

const brainEven = () => {
  runEngine(rules, generateRound);
};

export default brainEven;

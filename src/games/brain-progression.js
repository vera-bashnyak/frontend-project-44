import getRandomInRange, { randomIndex } from '../utils.js';
import runEngine from '../index.js';

const generateProgression = () => {
  const arr = [];
  let number = getRandomInRange(1, 100);
  const difference = getRandomInRange(2, 10);
  let i = 0;
  while (i < 10) {
    arr.push(number);
    number += difference;
    i += 1;
  }
  return arr;
};

const modifyArr = (arr, num) => {
  arr.splice(arr.indexOf(num), 1, '..');
  const string = arr.join(' ');
  return string;
};

const rules = 'What number is missing in the progression?';

const generateRound = () => {
  const progression = generateProgression();
  const answer = progression[randomIndex(progression)];
  const question = modifyArr(progression, answer);
  return [`${question} `, `${answer}`];
};

const brainProgression = () => {
  runEngine(rules, generateRound);
};

export default brainProgression;

import getRandomInRange, { randomIndex } from '../utils.js';
import runEngine from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const modifyArr = (arr, num) => {
  arr.splice(arr.indexOf(num), 1, '..');
  const string = arr.join(' ');
  return string;
};

const generateRound = () => {
  const start = getRandomInRange(1, 100);
  const step = getRandomInRange(2, 10);
  const length = getRandomInRange(5, 10);
  const progression = generateProgression(start, step, length);
  let answer = progression[randomIndex(progression)];
  const question = modifyArr(progression, answer);
  answer = answer.toString();
  return [question, answer];
};

const brainProgression = () => {
  const rules = 'What number is missing in the progression?';
  runEngine(rules, generateRound);
};

export default brainProgression;

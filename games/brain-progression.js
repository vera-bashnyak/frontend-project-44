import readlineSync from 'readline-sync';
import {
  generateNumber, randomIndex, greeting, isAnswerCorrect,
} from '../src/index.js';

const generateProgression = () => {
  const arr = [];
  let number = generateNumber(1, 100);
  const difference = generateNumber(2, 10);
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

const brainProgression = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progression = generateProgression();
    const correctAnswer = progression[randomIndex(progression)];
    const string = modifyArr(progression, correctAnswer);
    console.log(`Question: ${string}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const check = isAnswerCorrect(correctAnswer, answer, name);
    if (check === false) break;
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainProgression;

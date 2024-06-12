import readlineSync from 'readline-sync';
import { generateNumber, randomIndex } from '../src/index.js';

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

const arrToString = (arr, num) => {
  arr.splice(arr.indexOf(num), 1, '..');
  const string = arr.join(' ');
  return string;
};

const brainProgression = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progression = generateProgression();
    const result = progression[randomIndex(progression)];
    const string = arrToString(progression, result);
    console.log(`Question: ${string}`);
    const answer = Number(readlineSync.question('Your answer: '));

    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    } if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainProgression;

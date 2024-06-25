import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const name = greeting();
  console.log(rules);
  for (let i = 0; i < roundsCount; i += 1) {
    const round = generateRound();
    const [question, answer] = round;
    const userAnswer = readlineSync.question(`Question: ${question}`);
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;

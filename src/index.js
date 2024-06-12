import readlineSync from 'readline-sync';

export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}!`);
};

export const randomIndex = (array) => Math.floor(Math.random() * (array.length - 1));

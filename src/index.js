const isAnswerCorrect = (correctAnswer, answer, name) => {
  if (correctAnswer === answer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default isAnswerCorrect;

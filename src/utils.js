const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomIndex = (array) => Math.floor(Math.random() * (array.length - 1));

export default getRandomInRange;

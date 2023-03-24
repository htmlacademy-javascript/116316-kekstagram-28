const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomListElement = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomList = (array) => array.filter(() => getRandomInteger(0, 1));

const createRandomIdFromRangeGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);

    return currentValue;
  };
};

export {getRandomInteger, getRandomListElement, getRandomList, createRandomIdFromRangeGenerator};

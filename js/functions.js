// Функция для проверки длины строки
const isLessOrEqual = (string, length) => string.length <= length;

// Функция для проверки, является ли строка палиндромом
const isPalindrome = (string) => {
  const cleanString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';

  for (let i = cleanString.length - 1; i >= 0; i--) {
    reverseString += cleanString.at(i);
  }

  return reverseString === cleanString;
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumberFromString = (string) => {
  if (typeof string === 'number') {
    const parseNumber = string
      .toString(10)
      .replaceAll('.', '');

    return Math.abs(parseInt(parseNumber, 10));
  }

  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (!isNaN(parseInt(string[i], 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

// Функция, которая возвращает исходную строку, дополненную указанными символами до заданной длины.
const padString = (string, length, pad) => {
  const actualPadLength = length - string.length;

  if (string.length >= length) {
    return string;
  }

  let resultAddString = '';
  let count = 0;

  while (count < actualPadLength) {
    let tempStr = '';

    for (let i = 0; i <= pad.length - 1; i++) {
      if (count === actualPadLength) {
        break;
      }

      tempStr += pad.at(i);
      count++;
    }

    resultAddString = tempStr + resultAddString;
  }


  return resultAddString + string;
};

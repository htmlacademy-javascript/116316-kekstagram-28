// Функция для проверки длины строки
const checkStringLength = (str, maxLength) => str.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (str) => {
  let reverseStr = '';

  str = str.trim().replaceAll(' ', '');

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr.toLowerCase() === str.toLowerCase();
};

// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа.
const getNumberFromString = (str) => {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(parseInt(str[i], 10))) {
      result += str[i];
    }
  }

  return parseInt(result, 10);
};

// Функция, которая возвращает исходную строку, дополненную указанными символами до заданной длины.
const padString = (str, minLength, addStr) => {
  const resultAddStrLength = minLength - str.length;

  if (str.length >= minLength) {
    return str;
  }

  if (addStr.length > resultAddStrLength) {
    addStr = addStr.slice(0, resultAddStrLength);

    return addStr + str;
  }

  let resultAddString = '';
  let count = 0;

  while (count < resultAddStrLength) {
    let tempStr = '';

    for (let i = 0; i <= addStr.length - 1; i++) {
      if (count === resultAddStrLength) {
        break;
      }

      tempStr += addStr[i];
      count++;
    }

    resultAddString = tempStr + resultAddString;
  }


  return resultAddString + str;
};

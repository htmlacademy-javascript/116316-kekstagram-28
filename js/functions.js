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
const complementString = (str, minLength, addStr) => {
  let resultAddString = '';
  const resultAddStrLength = minLength - str.length;

  if (str.length >= minLength) {
    return str;
  }

  if (addStr.length > resultAddStrLength) {
    addStr = addStr.slice(0, resultAddStrLength);

    return addStr + str;
  }

  while (resultAddString.length < resultAddStrLength) {
    for (let i = 0; i <= addStr.length; i++) {
      if (resultAddString.length === resultAddStrLength) {
        break;
      }

      resultAddString += addStr.slice(0, i);
      console.log(`0, ${i} -` + addStr.slice(0, i));
    }
  }

  return resultAddString + str;
};

const foo1 = complementString('q', 5, '3we');
console.log(foo1);

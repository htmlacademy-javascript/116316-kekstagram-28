// Функция для проверки длины строки
const checkStringLength = (str, maxLength) => str.length <= maxLength;

// Функция для проверки, является ли строка палиндромом
const checkPalindrome = (str) => {
  let reverseStr = '';

  str = str.trim().replaceAll(' ', '');

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.at(i);
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

const foo = (str, minLength, addStr) => {
  let result = '';

  for (let i = 0; i < minLength; i++) {
    result += addStr;
  }
}

foo('1', 4, '0');
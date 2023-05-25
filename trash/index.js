function mergeArrays(array1, array2) {
  return [...array1, ...array2];
}
// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

function removeDuplicates(...args) {
  // return new Set(args);
  return args.filter((item, index) => args.indexOf(item) === index);
}
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

function getEvenNumbers(array) {
  return array.filter(number => number % 2 === 0);
}
// console.log(getEvenNumbers([1, 2, 3, 2, 4, 1, 5]));

function calculateAverage(array) {
  return array.reduce((acc, number) => acc + number, 0) / array.length;
}
// console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function capitalizeFirstLetter(string) {
  return string
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}
// console.log(capitalizeFirstLetter('hello mate, how are you?'));

function createCalculator(initialValue) {
  let value = initialValue;
  return {
    getValue: value,
    add(num) {
      value += num;
      return value;
    },
    subtract(num) {
      value -= num;
      return value;
    }
  };
}
// const result = createCalculator(5);
// console.log(result.add(2));
// console.log(result.add(2));
// console.log(result.subtract(2));
// console.log(result.subtract(2));

function createGreeting(name) {
  return () => `Hello, ${name}`;
}
// const greeting = createGreeting('Alex');
// console.log(greeting());

function createPasswordChecker(maxLength) {
  return password => password.length <= maxLength;
}
// const isPasswordValid = createPasswordChecker(7);
// console.log(isPasswordValid('password')); // Ожидаемый результат:false;
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true

function sumDigits(num) {
  // return num
  //   .toString()
  //   .split('')
  //   .reduce((acc, num) => acc + +num, 0);
  return num < 10 ? num : (num % 10) + sumDigits(Math.floor(num / 10));
}
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6+ 7 + 8 + 9)

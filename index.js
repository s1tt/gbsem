function getEvenNumbers(array) {
  return array.filter(number => number % 2 === 0);
}
console.log(`Even ${getEvenNumbers([1, 2, 3, 2, 4, 1, 5])}`);

function calculateAverage(array) {
  return array.reduce((acc, number) => acc + number, 0) / array.length;
}
console.log(`Avg: ${calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9])}`);

function capitalizeFirstLetter(string) {
  return string
    .split(' ')
    .map(word => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(`Capitalize: ${capitalizeFirstLetter('hello mate, how are you?')}`);

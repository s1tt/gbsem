/////////////////////////////////////1//////////////////////////////////////////
const cube = number => number * number * number;
console.log(cube(2) + cube(3));
/////////////////////////////////////2//////////////////////////////////////////
const taxes = param => {
  if (!Number(param) && typeof param !== 'number') return console.log('Error');
  return `Размер заработной платы за вычетом налогов равен ${(param * 13) / 100}`;
};
console.log(taxes(1000));
/////////////////////////////////////3//////////////////////////////////////////
const maxNumberVar1 = (...nums) => {
  let max = nums[0];
  nums.forEach(i => {
    if (i > max) max = i;
  });
  return max;
};
console.log(maxNumberVar1(1, 22, 3));

const maxNumberVar2 = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3) return num1;
  if (num2 > num1 && num2 > num3) return num2;
  if (num3 > num1 && num3 > num2) return num1;
};
console.log(maxNumberVar2(1, 22, 3));
/////////////////////////////////////4//////////////////////////////////////////
const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;
const sub = (a, b) => {
  if (a === b) return 0;
  return a > b ? a - b : b - a;
};

console.log(sub(4, 2));

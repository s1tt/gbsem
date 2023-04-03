const task1 = function (maxNumber) {
  for (let i = 0; i <= maxNumber; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else if (!(i % 2)) console.log(`${i} это четное число`);
    else if (i % 2) console.log(`${i} это нечетное число`);
  }
};
task1(10);

const task2 = function () {
  const array = [1, 2, 3, 4, 5, 6, 7];
  array.splice(3, 2);
  return array;
};
console.log(task2());

const task3 = function () {
  function generateArrayWithRandomNumbers(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 10));
    }
    return array;
  }

  const array = generateArrayWithRandomNumbers(5);
  console.log(`Массив: ${array}
  1) Сумма элементов массива: ${(array.reduce((acc, item) => acc + item), 0)}
  2) Минимальное число в массиве: ${Math.min(...array)}
  3) Есть ли в массиве число 3? ${array.some(item => item === 3) ? 'Да' : 'Нет'} `);
};
task3();

const task4 = function (maxLength) {
  let string = '';
  for (let i = 0; i < maxLength; i++) {
    string += 'x';
    console.log(string);
  }
};
task4(20);

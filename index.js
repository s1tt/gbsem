const taskOne = () => {
  const num1 = Number(prompt('first number', ''));
  const num2 = Number(prompt('second number', ''));

  const result = num1 <= 1 && num2 >= 3;
  alert(`
Условия задачи: 'переменная num1 равна или меньше 1, а переменная num2 больше или равна 3'.

Веденые вами числа: ${num1} и ${num2} ${result ? '' : 'не'} соответствуют условию
  `);
};

const taskTwo = () => {
  let test = true;
  console.log(test ? '+++' : '---');
};

const taskThree = () => {
  const day = 30;
  console.log(`${day} число это ${day <= 10 ? 'первая' : day <= 20 ? 'вторая' : 'третья'} декада`);
};

const taskFour = () => {
  const number = Number(prompt('number?', ''));
  const units = number % 10;
  const tens = Math.floor((number % 100) / 10);
  const hundreds = Math.floor((number % 1000) / 100);
  console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);
};

// Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
function createCounter() {
  let count = 0;
  return {
    getCount() {
      return count;
    },
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    }
  };
}
const count1 = createCounter();
console.log(count1.increment());
console.log(count1.decrement());
console.log(count1.getCount());

// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
const rootElement = document.getElementById('root');
function findElementByClass(element, className) {
  if (element.classList.contains(className)) {
    return element;
  }

  let foundElement = null;
  const { children } = element;

  for (let i = 0; i < children.length && foundElement === null; i++) {
    foundElement = findElementByClass(children[i], className);
  }

  return foundElement;
}
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);

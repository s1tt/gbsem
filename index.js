const __extends =
  (this && this.__extends) ||
  (function () {
    let extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null) throw new TypeError(`Class extends value ${String(b)} is not a constructor or null`);
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
/*
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
*/
const Employee = /** @class */ (function () {
  function Employee(name) {
    this.name = name;
  }
  Employee.prototype.displayInfo = function () {
    return '\u0418\u043C\u044F \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430: '.concat(this.name);
  };
  return Employee;
})();
const Manager = /** @class */ (function (_super) {
  __extends(Manager, _super);
  function Manager(name, departament) {
    const _this = _super.call(this, name) || this;
    _this.departament = departament;
    return _this;
  }
  Manager.prototype.displayInfo = function () {
    return ''.concat(_super.prototype.displayInfo.call(this), '\n\u041E\u0442\u0434\u0435\u043B: ').concat(this.departament);
  };
  return Manager;
})(Employee);
// Пример использования классов
const employee = new Employee('John Smith');
console.log(employee.displayInfo());
// Вывод:
// Name: John Smith
const manager = new Manager('Jane Doe', 'Sales');
console.log(manager.displayInfo());
// Вывод:
// Name: Jane Doe
// Department: Sales
/*
Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
Свойство products (продукты) - массив, содержащий список продуктов в заказе.
Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
*/
const Product = /** @class */ (function () {
  function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  return Product;
})();
const Order = /** @class */ (function () {
  function Order(orderNumber, products) {
    if (products === void 0) {
      products = [];
    }
    this.orderNumber = orderNumber;
    this.products = products;
  }
  Order.prototype.addProduct = function (product) {
    this.products.push(product);
  };
  Order.prototype.getTotalPrice = function () {
    return this.products.reduce((acc, product) => product.price + acc, 0);
  };
  return Order;
})();
// Пример использования класса
const order = new Order(12345);
const product1 = new Product('Phone', 500);
order.addProduct(product1);
const product2 = new Product('Headphones', 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600

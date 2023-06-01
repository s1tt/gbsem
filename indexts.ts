/*
Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
Свойство name (имя) - строка, имя сотрудника.
Метод displayInfo() - выводит информацию о сотруднике (имя).
Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
Свойство department (отдел) - строка, отдел, в котором работает менеджер.
Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
*/

class Employee {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  displayInfo(): string {
    return `Имя сотрудника: ${this.name}`;
  }
}

class Manager extends Employee {
  private departament: string;
  constructor(name: string, departament: string) {
    super(name);
    this.departament = departament;
  }
  displayInfo(): string {
    return `${super.displayInfo()}\nОтдел: ${this.departament}`;
  }
}

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

class Product {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  private orderNumber: number;
  private products: Array<Product>;

  constructor(orderNumber: number, products: Array<Product> = []) {
    this.orderNumber = orderNumber;
    this.products = products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getTotalPrice(): number {
    if (this.products.length !== 0) {
      return this.products.reduce((acc: number, product: Product) => product.price + acc, 0);
    } else {
      return 0;
    }
  }
}

// Пример использования класса
const order: Order = new Order(12345);

const product1: Product = new Product('Phone', 500);
order.addProduct(product1);

const product2: Product = new Product('Headphones', 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600

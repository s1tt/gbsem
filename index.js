const task1 = () => {
  const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7
  };

  //var 1
  for (let key in numbers) {
    if (numbers[key] >= 3) {
      console.log(`${key} - ${numbers[key]}`);
    }
  }

  //var 2
  console.log(Object.values(numbers).filter(value => value >= 3));
};
console.log('-----------------Task 1-------------------');
task1();

const task2 = () => {
  const post = {
    author: 'John', // вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: 'Alex',
        text: 'lorem ipsum',
        rating: {
          likes: 10,
          dislikes: 2 // вывести это число
        }
      },
      {
        userId: 5, // вывести это число
        userName: 'Jane',
        text: 'lorem ipsum 2', // вывести этот текст
        rating: {
          likes: 3,
          dislikes: 1
        }
      }
    ]
  };

  //var 1
  console.log(`
  1) ${post.author};
  2) ${post.comments[0].rating.dislikes};
  3) ${post.comments[1].userId};
  4) ${post.comments[1].text};
  `);

  //var2
  const { author } = post;
  const { dislikes } = post.comments[0].rating;
  const { userId, text } = post.comments[1];
  console.log(`
  1) ${author};
  2) ${dislikes};
  3) ${userId};
  4) ${text};
  `);
};
console.log('-----------------Task 2-------------------');
task2();

const task3 = () => {
  const products = [
    {
      id: 3,
      price: 200
    },
    {
      id: 4,
      price: 900
    },
    {
      id: 1,
      price: 1000
    }
  ];

  function sale(price, percentage) {
    return price - price * (percentage / 100);
  }

  //var 1
  // products.forEach(obj => (obj.price = obj.price * 0.85));

  //var 2
  products.forEach(obj => (obj.price = sale(obj.price, 15)));

  for (let product of products) {
    console.log(product);
  }
};
console.log('-----------------Task 3-------------------');
task3();

const task4 = () => {
  const products = [
    {
      id: 3,
      price: 127,
      photos: ['1.jpg', '2.jpg']
    },
    {
      id: 5,
      price: 499,
      photos: []
    },
    {
      id: 10,
      price: 26,
      photos: ['3.jpg']
    },
    {
      id: 8,
      price: 78
    }
  ];

  console.log(products.filter(product => product.photos && product.photos.length > 0));
  console.log(products.sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price));
};
console.log('-----------------Task 4-------------------');
task4();

const task5 = () => {
  const en = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const ru = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
  const daysOfTheWeek = {};
  let daysOfTheWeek2 = {};

  if (en.length === ru.length) {
    //var 1
    for (let i = 0; i < en.length; i++) {
      daysOfTheWeek[en[i]] = ru[i];
    }

    //var2
    daysOfTheWeek2 = en.reduce((acc, key, value) => {
      acc[key] = ru[value];
      return acc;
    }, {});
  }

  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek2);
};
console.log('-----------------Task 5-------------------');
task5();

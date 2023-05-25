function createGreeting(name) {
  return () => `Hello, ${name}`;
}
const greeting = createGreeting('John');
console.log(greeting());

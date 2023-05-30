# week_four

const person = {
  name: "John",
  age: 34,
  email: "john@example.com",
};

person.age = 20;
const personDeep = structuredClone(person);
const personShallow = { ...person };

personDeep.age = 50;

console.log(person);
console.log(personDeep);
console.log(personShallow);

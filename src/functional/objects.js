const person = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Fransciso',
  },
};
//const updated = Object.assign({}, person, { name: "Bob", age: 30 })
const updated = {
  ...person,
  address: {
    ...person.address,
    city: 'New York',
  },
  name: 'Bob',
};

console.log(person);

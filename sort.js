const users = [
  {
    firstName: 'Bobby',
    lastName: 1,
    age: 25,
  },
  {
    firstName: 'Chris',
    lastName: 2,
    age: 20,
  },
  {
    firstName: 'Peter',
    lastName: 1,
    age: 15,
  },
];

users.sort((a, b) => a.lastName - b.lastName || a.age - b.age);
console.log(users);

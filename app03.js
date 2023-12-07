const users = [
  { name: "Alex", address: "Thai.", age: 30 }, //Array 0
  { name: "Bob", address: "Canada.", age: 35 }, //Array 1
  { name: "Alisa", address: "USA.", age: 40 }, //Array 2
];
//Destructuring in Object and Array
// const [name, address, age] = users;
// console.log(`Name:${users[0].name},Address: ${users[0].address}, Age: ${users[0].age}`);
// console.log(`Name:${users[1].name},Address: ${users[1].address}, Age: ${users[1].age}`);
// console.log(`Name:${users[2].name},Address: ${users[2].address}, Age: ${users[2].age}`);

for (const { name, address, age } of users) {
  console.log(`Name:${name}, Address: ${address}, Age: ${age}`);
}

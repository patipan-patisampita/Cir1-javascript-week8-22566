const users = {
  fname: "Mark",
  address: "15th Park avenue",
  age: 45,
  position: "facebook ceo",
  price: 55000,
  department: {
    name: "Sales",
    address: {
      city: "Bnk",
      street: "7th Lumpinee Rd.",
      zip: 3250000,
    },
  },
};

const {
  fname,
  address,
  age,
  salary = 5500,
  position = `${position}`,
  price: permanentPrice,
  department: {
    name,
    address: { city },
  },
} = users;
console.log(permanentPrice, fname, age, address, salary, position);
console.log(name,city);

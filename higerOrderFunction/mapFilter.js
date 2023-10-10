let users = [
  { firstName: "Md Nasir", lastName: "Hussain", age: 26 },
  { firstName: "Amit", lastName: "Kumar", age: 28 },
  { firstName: "Anuj", lastName: "kashayp", age: 30 },
  { firstName: "Roushan", lastName: "Gupta", age: 35 },
  { firstName: "Shivam", lastName: "Singh", age: 26 },
];

// console.log(users);

//print first name if age is below 30

let output5 = users.filter(x=> x.age<30).map(x=> x.firstName)
console.log(output5);

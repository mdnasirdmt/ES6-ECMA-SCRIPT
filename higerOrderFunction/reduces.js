let users = [
    { firstName: "Md Nasir", lastName: "Hussain", age: 26 },
    { firstName: "Amit", lastName: "Kumar", age: 28 },
    { firstName: "Anuj", lastName: "kashayp", age: 30 },
    { firstName: "Roushan", lastName: "Gupta", age: 25 },
    { firstName: "Shivam", lastName: "Singh", age: 26 },
  ];
  
  // console.log(users);
  
  //print first name if age is same
  
  let output5 = users.reduce((u, c) => {
    if (u[c.age] == null) {
      u[c.age] = 1;
    } else {
      u[c.age] = ++u[c.age];
    }
  
    return u;
  }, {})
  
  console.log(output5);
  
const Swap = (n1, n2) => {
  console.log(`before swaping n1 is ${n1} and n2 is ${n2}`);

//   using logic
  n1 = n1 + n2;
  console.log(n1);

  n2 = n1 - n2;
  n1 = n1 - n2;


// using array destructuring
// [n1, n2]= [n2, n1]
  console.log(`now n2 is ${n2} and n1 is ${n1}`);
};

let n1 = 10;
let n2 = 5;

Swap(n1, n2);

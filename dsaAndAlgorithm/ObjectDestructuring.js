function objectDestr(obj) {
  console.log(obj[1]);
  console.log(obj);
  let { a, b, c } = obj;
  console.log(a)
}

let obj = {
  1: 2,
  3: 4,
  5: 7,
};

objectDestr(obj);

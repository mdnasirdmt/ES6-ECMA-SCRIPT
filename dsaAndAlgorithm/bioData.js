function bioData(obj) {
  console.log(obj);

  console.log(obj.name);

  let { name, roll, marks, hobbies } = obj;
  console.log(roll);
  console.log(marks)


  console.log(obj.hobbies.h1)
}

let obj = {
  name: "Md Nasir Hussain",
  roll: 757,
  marks: [90,79],
  hobbies: {
    h1: "chess",
    h2: "coding"
  }
};
bioData(obj);

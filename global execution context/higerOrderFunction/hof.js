let radius = [2, 3, 4, 5];

const area = function (radius) {
  return Math.PI * radius* radius;
};


const circumference= function(radius){
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}



// this function will calculate as per logic
const calculate = (radius, logic) => {
  output = [];

  for (let index = 0; index < radius.length; index++) {
    const element = radius[index];

    output.push(logic(element));
  }

  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, circumference));
console.log(calculate(radius, diameter));


// the function takes argument as function and return some value is called Higher Order Function
// here calculate function is higher order function and area, diameter and circumference are callback function
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


Array.prototype.calculate1=(logic) => {
    output = [];
  
    for (let index = 0; index < radius.length; index++) {
      const element = radius[index];
  
      output.push(logic(element));
    }
  
    return output;
  };

console.log('Area of circle  '+calculate(radius, area));
console.log('Circumference  '+calculate(radius, circumference));
console.log('Diameter  '+calculate(radius, diameter));

// both are same line 49 and 50
console.log(radius.map(diameter));
console.log(radius.calculate1(diameter));


// the function takes argument as function and return some value is called Higher Order Function
// here calculate function is higher order function and area, diameter and circumference are callback function


// 1. Follow DRY(Don't Repeat Yourself) principle while coding.
// 2. Use function to stop writing repeating line of codes.
// 3. Function that takes another function as argument(callback function) is known as Higher order functions.
// 4. It is this ability that function can be stored, passed and returned,  they are called first class citizens.
// 5. If we use Array.property.function-name. This function is accessible to any array in your code.


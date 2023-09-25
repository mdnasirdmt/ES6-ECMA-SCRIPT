// ES5
let sum = function () {
    return a + b;
};

let a = 10;
let b = 15;

console.log(sum(a, b));

// ES6
const sum1 = () => {
    return x + y;
};

let x = 3;
let y = 5;
console.log(sum1(x, y));


//////////////////////////
const fun1 = (b) => {
    let a = 30;
    return a + b;
}
console.log(fun1(20))



///////////////////////

const fun2 = () => { console.log("hello") };
fun2()

//////////////////////


const fun3 = (a, b) => { return a + b }
console.log(fun3(3, 4))
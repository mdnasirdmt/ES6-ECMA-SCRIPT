var a= 10;

var a= 100;

a= 200;

console.log(a);

// it not giving any error

///////////////////////////


let b= 300;

// let b= 400;   // Uncaught SyntaxError: Identifier 'b' has already been declared (at variables.js:14:5)


b= 500;  // b value will get changed 300 to 500

console.log(b);


//////////////////

// const c;  // Uncaught SyntaxError: Missing initializer in const declaration (at variables.js:26:7)

// const c= 600;
// const c=700;  // Uncaught SyntaxError: Identifier 'c' has already been declared (at variables.js:29:7)


c==700;    // Uncaught ReferenceError: c is not defined at variables.js:32:1

console.log(c);





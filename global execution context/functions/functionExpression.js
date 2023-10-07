
// function expression

// when we use anonymouse function as value is called function Expression

// anounymouse function example is:

// function(){
//     console.log('this is anounymuse function');
// }


var fun1= function(){
    console.log('this is function expression');
}

fun1();


/////////////////////////////////////////////////////


// when we use named function as value then it is called Named Function Expressuon, let see the example.

var fun2= function xyz(){
    console.log('this is Named Funtion Expression');
    console.log(xyz);
    return xyz;
}


// xyz(); // when we call like this then we got an error called ex:-  ReferenceError: xyx is not defined
var x1= fun2();

console.log(x1);
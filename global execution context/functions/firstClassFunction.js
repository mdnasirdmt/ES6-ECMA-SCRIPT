function firstClassFunction(params) {
    console.log(`the abiity of of a function that takes argument as function and can return a function 
    then we can say function  is First Class Function`);

    return xyz;


}

function xyz(){
    console.log('this is statement function');
}

var x= firstClassFunction(xyz);
console.log(x);
x();


// the abiity of of a function that takes argument as function and can return a function 
//     then we can say function  is First Class Function
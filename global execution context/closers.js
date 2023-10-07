function name1() {

    let x=10;
    function name2() {
        console.log(x);
    }
    
    name2();
}

name1();

///////////////////



function name3() {

    let x1= 11;

    function name4() {
        console.log(x1);
    }

    return name4;
    
}

var z= name3();
console.log(z);
z();

// Closure :Function bundled with its lexical environment is known as a closure.

// What is closure?
// The function bundled with its lexical environment closed to that function
// simply function + Lexical environment

// and closures have very special place in runtime environment
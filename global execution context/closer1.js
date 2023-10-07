function name1() {

    var x= 10;

    return function name2(){
        console.log(x);
    }
    
}

name1()();
/////////////////

function name3() {

    var x= 100;

    return function name4(str){
        console.log(x, str);
    }
    
}

name3()('waah kia baat hai !');

/////////////////

function name5() {

    var x= 1000;
    var x1=7;

    return function name6(s){
        console.log(x, s);
    }
    
}

var name7= name5();
console.log(name7('helllllo'));






// using fuction inside function is called closer
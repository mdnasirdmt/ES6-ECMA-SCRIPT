setTimeout(() => {
console.log('after 3 second i called ');
}, 3000);





function fun4(fun3) {

    console.log('fun4 logged ');
    fun3();
}

fun4(function fun3(){
    console.log('fun3 logged ');
});

// in this example fun3 is call back function
// call back function gives us asyncronous properties
// becuse javaScript is syncronous language, means due to syncronous js can only run one function at time .
// setTimeOut is an example of call back funtion
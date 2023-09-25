
// es5 
const fun1 = () => {
    let arr1 = [1, 2, 3]

    let arr2 = [4, 5, 6]

    // console.log(arr1.concat(arr2))


}

fun1()


//////////


// es6

const fun2 = () => {
    let arr1 = [1, 2, 3]

    let arr2 = [4, 5, 6, 7]
    let arr3 = [...arr1, ...arr2]; // using spread operator we can replace concate function
    // console.log(arr1)
    // console.log(arr2)
    // console.log(arr3)


}

fun2()

//////////////////////


// es6

const fun3 = () => {
    let arr1 = [1, 2, 3]

    let arr2 = [...arr1];  // using spread operator we can copy the array value
    arr2 = [...arr1, 4];
    let arr3 = [...arr1, ...arr2];  // concate the array 
    console.log(arr1)
    console.log(arr2)
    console.log(arr3)


}

fun3()

//////////////////////

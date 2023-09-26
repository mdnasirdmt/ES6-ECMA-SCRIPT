// producing promises

let name = "Nasir";

const proObj = new Promise((resolve, unresolve) => {

    setTimeout(() => {
        resolve(name);
        console.log("data fetched ")
        unresolve("unable to fetch data form db ");
        console.log("data fetched 1111111")
    }, 2000)

});



// consuming promisses
proObj.then((name1) => {

    console.log(name1);

}).catch((error) => {

    console.log(error)
})




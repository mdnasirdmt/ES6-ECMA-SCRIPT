const fetchData = () => {

    let arr = [1, 2, 3, 4, 5];

    return new Promise((resolve, unresolve) => {

        setTimeout(() => {
            resolve(`array value is ${arr[2]} `);
            unresolve("value you are fecthing that is not availble ");
        }, 2000);

    });
}


const getData = fetchData().then((fdata) => {

    console.log(fdata)
})
    .catch((error) => {

        console.log(error)
    });



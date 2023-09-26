const fetchData = () => {
    let arr = [2, 3, 5, 6, 7, 8];

    return new Promise((resovle, unresolve) => {
        setTimeout(() => {
            resovle(`value is ${arr[4]}`);
            unresolve("data not available ");
        }, 2000);
    });
};


const fetchData1 = () => {
    let arr1 = [2, 3, 5, 6, 7, 8];

    return new Promise((resovle, unresolve) => {
        setTimeout(() => {
            resovle(`value is ${arr1[5]}`);
            unresolve("data not available ");
        }, 2000);
    });
};

async function getData1() {
    try {
        const data1 = await fetchData();
        console.log(data1);

        const data2= await fetchData1();
        console.log(data2)

    } catch (error) {

        console.log(`The error is : ${error}`)
    }
}

getData1();

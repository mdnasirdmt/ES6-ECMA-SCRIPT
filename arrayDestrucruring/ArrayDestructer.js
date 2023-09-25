const ArrayDestructer = () => {
    let arr = [1, 2, 3, 4, 5]

    const arr1 = [i1, i2, i3, i4, i5] = arr;
    console.log(arr1[3])
    console.log(i3)
    console.log(arr1)


    const [j1, j2, j3, j4, j5] = arr;
    const [s1, , , , s5] = arr
    console.log(j2)
    console.log(s5)






    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];

        console.log(element)


    }


}

ArrayDestructer()
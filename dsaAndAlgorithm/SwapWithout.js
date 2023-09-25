const Swap = (n1, n2) => {

    console.log(`before swaping n1 is ${n1} and n2 is ${n2}`)

    n1 = n1 + n2;
    console.log(n1)

    n2 = n1 - n2;
    n1 = n1 - n2;

    console.log(`now n2 is ${n2} and n1 is ${n1}`)



}


n1 = 10;
n2 = 5;

Swap(n1, n2);
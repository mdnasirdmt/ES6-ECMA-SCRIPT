const restPara = (...arr) => {
    let total = 0;

    for (let i of arr) {
        total += i;
    }

    console.log(total);
};

restPara(1, 2, 3, 4, 5);


////////////////////

const restPara1 = (a, b, ...c) => {
    console.log(a);
    console.log(b);
    console.log(c.length);
    console.log(c.indexOf("mno"));
    console.log(c[2]);
};

restPara1("abc", "def", "ghi", "jkl", "mno");

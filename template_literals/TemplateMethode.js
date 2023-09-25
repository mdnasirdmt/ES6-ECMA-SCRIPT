const  methode= () => {
    let fname= "Md Nasir";
    let lname= "Uddin";

    const name1= `${fname}`;
    const name2= `${lname}`;
    

    console.log(name1.startsWith('M'));
    console.log(name2.endsWith('M'));

    console.log(name1.includes("Md"));
    console.log(name2.length);


    console.log(`${fname}`.startsWith('M'));
    console.log(`${lname}`.endsWith('M'));



}



methode();
async function errorHndl() {

    try {
        const d = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const d1 = await d.json();
        const d2 = d13.title;  // here we did mistake to tackle catch block....
        console.log(d2)

    } catch (error) {
        console.log(`The error is ${error}`)
    }
}

errorHndl()
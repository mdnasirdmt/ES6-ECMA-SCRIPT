function name1() {

    var x= 1000;
    setTimeout(() => {
        console.log(x);
    }, 3000);
    
}

// name1();


/////////////////




function name2() {

    for (var index = 1; index <=50; index++) {
        
        setTimeout(() => {
            console.log(index);
        }, index=index);
        
    }
    
}

// name2();

////////////////////////////////////////


function name3() {

    for(var i=1; i<=5; i++){

        function closer(c) {

            // setTimeout(() => {
            //     console.log(c);
            // }, c=2000);

            setTimeout(function name() {
                console.log(c);
            })
            
        }

        closer(i);
    }
    
}

name3();






// 1. setTimeout stores the function in a different place and attached a timer to it, 
// when the timer is finished it rejoins the call stack and executed.
// 2. Without closure the var reference gives the latest value as it does not retain the original value 
// but rather has the reference so any update in value after timeout will be shown.
// 3. If we use let/const because they have block scope, every time a new copy of variable is attached, 
// thus this can be done without closure


// 1. An inner function can be directly called using two parenthesis ()().
// 2. Even parameters can be passed this way (Remember that the function needs to be returned to do this)
// 3. Closures can also be used for data hiding and encapsulation. So other code cannot access this value.
// 4. Unused variables are automatically deleted in High Level Programming language by garbage collector. Closures allocate a lot of memory which cannot be deleted so this acts as a disadvantage.
// 5. Some browsers now have smart garbage collectors that automatically deletes variables that are not used outside closures.


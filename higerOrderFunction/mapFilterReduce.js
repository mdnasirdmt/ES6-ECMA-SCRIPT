let arr = [2, 4, 1, 5, 6, 7];
console.log(arr);


/// map

const triple= function(num){
    return num* 3;
}
console.log('tripled '+arr.map(triple)); 

const output1= arr.map(function(num){
    return num* 2;
})
console.log('doubled ' +output1);

// line 7 and 9 to 12 are same

//////////////////////////////////

//reduce
let output2= arr.reduce((max, num )=>{

    if(num>max){
        max=num;
    }

    return max
},0);

console.log('max in array is  '+output2);

////////////////////////////

// filter
const output3= arr.filter(x=> x%2==0?  x: false);
console.log('even in array '+output3);

const output4= arr.filter(x=> x%2!=0 ? x: false);
console.log('odd  in array '+output4);




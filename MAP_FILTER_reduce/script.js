// const arr = [1,2,3,4,5];
// function double(x){
//     return 2*x;
// }
  
// function triple(x){
//     return 3*x;
// }

// function binary(x){
//     return x.toString(2);
// }

// const outputTriple=arr.map(triple)
// console.log(outputTriple);

// const output=arr.map(double)
// console.log(output);

// const outputBinary=arr.map(binary)
// console.log(outputBinary);


// const outputsq=arr.map((x)=>x*2)
// console.log(outputsq);


const arr = [1,2,3,4,5];

function isOdd(x){
    return x%2;
}
function isEven(x){ 
    return x%2==0;
}

const outputOdd=arr.filter(isOdd)
console.log(outputOdd); // [1,3,5]

const outputEven=arr.filter(isEven)
console.log(outputEven); // [2,4]

const outputgreaterthan2=arr.filter((x)=>x>2)
console.log(outputgreaterthan2); // [3,4,5]
const arr = [1,2,3,4,5];
function double(x){
    return 2*x;
}
  
function triple(x){
    return 3*x;
}

function binary(x){
    return x.toString(2);
}

const outputTriple=arr.map(triple)
console.log(outputTriple);

const output=arr.map(double)
console.log(output);

const outputBinary=arr.map(binary)
console.log(outputBinary);


const outputsq=arr.map((x)=>x*2)
console.log(outputsq);
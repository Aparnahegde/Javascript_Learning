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


// const arr = [1,2,3,4,5];

// function isOdd(x){
//     return x%2;
// }
// function isEven(x){ 
//     return x%2==0;
// }

// const outputOdd=arr.filter(isOdd)
// console.log(outputOdd); // [1,3,5]

// const outputEven=arr.filter(isEven)
// console.log(outputEven); // [2,4]

// const outputgreaterthan2=arr.filter((x)=>x>2)
// console.log(outputgreaterthan2); // [3,4,5]

// const arr = [1,2,3,4,5];
// const sum=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(sum); // 15     

// // const max=arr.reduce((acc,curr)=>Math.max(acc,curr),0)
// // console.log(max); // 5

// const output=arr.reduce(function(acc,curr){
//     if(acc<curr){
//         acc=curr;
//     }
// return acc;
// },0)
// console.log(output); // 5   

const users=[{firstName:'John',lastName:'Doe',age:30},
    {firstName:'Jane',lastName:'Doe',age:25},
    {firstName:'Jim',lastName:'Doe',age:20},
    {firstName:'rim',lastName:'foe',age:20}];

    const output=users.map((x)=>x.firstName+' '+x.lastName)
    console.log(output); // ['John Doe','Jane Doe','Jim Doe']


    const output1=users.reduce(function(acc,curr){
        if(acc[curr.age]){
            acc[curr.age]=++acc[curr.age];
        }
        else{
            acc[curr.age]=1;
        }
        return acc;
    },{});  
    console.log(output1); // {20:2,25:1,30:1}

    const output2=users.filter((x)=>x.age<25).map((x)=>x.firstName);
console.log(output2); // ['Jim','rim']

const output3=users.reduce(function(acc,curr){
    if(curr.age<25){
        acc.push(curr.firstName);
    }
    return acc;
}
,[]);
console.log(output3); // ['Jim','rim']



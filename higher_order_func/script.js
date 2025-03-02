// function x(){
//     console.log("I am x");
// }

// function y(x){
//     console.log("I am y");
//     x();
// } 

// y(x);


// const r=[1,2,3,4];

// const calculateArea=function(r){
//     const output=[];
//     for(let i=0;i<r.length;i++){
//         output.push(3.14*r[i]*r[i]);
//     }   
//     return output;
// }
// console.log(calculateArea(r));


// const r=[1,2,3,4];

// const area=function(r){
//     return 3.14*r*r;
// }   

// const circumference=function(r){
//     return 2*3.14*r;
// }

// const diameter=function(r){
//     return 2*r;
// }


// const calculate=function(r,logic){
//     const output=[];
//     for(let i=0;i<r.length;i++){
//         output.push(logic(r[i]));
//     }   
//     return output;
// }
// console.log("AREA: "+calculate(r,area));
// console.log("CIRCUMFERENCE: "+calculate(r,circumference));
// console.log("DIAMETER: "+calculate(r,diameter));




//change calculate as map function
const r=[1,2,3,4];

const area=function(r){
    return 3.14*r*r;
}  

Array.prototype.calculate=function(logic){
    const output=[];
    for(let i=0;i<this.length;i++){
        output.push(logic(this[i]));
    }   
    return output;  
}
console.log("AREA: "+r.calculate(area));
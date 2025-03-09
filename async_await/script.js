// async function getdata(){
// return "Hello World";
// }

// const data = getdata();
// console.log(data); // Promise {<pending>}

// const dataPromise = getdata();  
// dataPromise.then(data => console.log(data)); // Hello World




// const p=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hello World")
//     },2000)
// })
// async function getdata(){
//     return p;
//     }
    
//     const data = getdata();
//     console.log(data); // Promise {<pending>}
    
//     const dataPromise = getdata();  
//     dataPromise.then(data => console.log(data)); // Hello World









const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise Resolved");
    },10000);
}
);
// async function handlePromise(){
//     const result=await p; //await only be used inside async function
//     console.log(result);
// }
// handlePromise(); //Promise Resolved

function getData(){
    p.then((res)=> console.log(res))
        console.log("Namaste JavaScript");
    
}
getData();



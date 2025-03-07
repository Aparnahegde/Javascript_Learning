// const cart=["shoes","shirts","pants"];  
// createOrder(cart,function(orderID){
//     proceedToPayment(paymentID)
// });

// const promise=createOrder(cart);
// promise.then(function(orderID){
//     proceedToPayment(paymentID);
// });


// const GITHUB_API="https://api.github.com/users/Aparnahegde";
// const user=fetch(GITHUB_API);
// console.log(user);

// user.then(function(data){
//     console.log(data);
// });

// createOrder(cart,function(orderID){
//     proceedToPayment(orderID,function(paymentID){
//         showSummary(paymentID,function(){
//             updateWallet();
//         });
//     });
// });

// createOrder(cart).then(function(orderID){
//     return proceedToPayment(orderID);
// }).then(function(paymentID){
//     return showSummary(paymentID);
// }).then(function(){
//     return updateWallet();
// });

// createOrder(cart).then(orderID=>proceedToPayment(orderID))
// .then(paymentID=>showSummary(paymentID))    
// .then(()=>updateWallet());

// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 1 resolved");
//     },3000);
// })
// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 2 resolved");
//     },1000);
// })
// const p3=new Promise(function(resolve,reject){  
//     setTimeout(function(){
//         resolve("Promise 3 resolved");
//     },2000);
// }   )

// Promise.all([p1,p2,p3]).then(res => console.log(res));


// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 1 resolved");
//     },3000);
// })
// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("Promise 2 rejected");
//     },1000);
// })
// const p3=new Promise(function(resolve,reject){  
//     setTimeout(function(){
//         reject("Promise 3 rejected");
//     },2000);
// }   )
//  Promise.all([p1,p2,p3]).then(res => console.log(res)).catch(err=>console.error(err));



// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 1 resolved");
//     },3000);
// })
// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("Promise 2 rejected");
//     },1000);
// })
// const p3=new Promise(function(resolve,reject){  
//     setTimeout(function(){
//         reject("Promise 3 rejected");
//     },2000);
// }   )

// Promise.allSettled([p1,p2,p3]).then(res => console.log(res)).catch(err=>console.error(err));



// const p1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise 1 resolved");
//     },3000);
// })
// const p2=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         reject("Promise 2 rejected");
//     },1000);
// })
// const p3=new Promise(function(resolve,reject){  
//     setTimeout(function(){
//         reject("Promise 3 rejected");
//     },2000);
// }   )

// Promise.allSettled([p1,p2,p3]).then(res => console.log(res)).catch(err=>console.error(err));

// const p1=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve("Promise 1 resolved");
//         },3000);
//     })
//     const p2=new Promise(function(resolve,reject){
//         setTimeout(function(){
//             reject("Promise 2 rejected");
//         },5000);
//     })
//     const p3=new Promise(function(resolve,reject){  
//         setTimeout(function(){
//             reject("Promise 3 rejected");
//         },2000);
//     }   )
    
//     Promise.race([p1,p2,p3]).then(res => console.log(res)).catch(err=>console.error(err));



// const p1=new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 resolve("Promise 1 resolved");
//             },3000);
//         })
//         const p2=new Promise(function(resolve,reject){
//             setTimeout(function(){
//                 reject("Promise 2 rejected");
//             },5000);
//         })
//         const p3=new Promise(function(resolve,reject){  
//             setTimeout(function(){
//                 reject("Promise 3 rejected");
//             },2000);
//         }   )
        
//         Promise.any([p1,p2,p3]).then(res => console.log(res)).catch(err=>console.error(err));


const p1=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("Promise 1 rejected");
    },3000);
})
const p2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("Promise 2 rejected");
    },5000);
})
const p3=new Promise(function(resolve,reject){  
    setTimeout(function(){
        reject("Promise 3 rejected");
    },2000);
}   )

Promise.any([p1,p2,p3]).then(res => console.log(res))
.catch(err=>{
    console.error(err)
    console.log(err.errors);
}
);

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

createOrder(cart,function(orderID){
    proceedToPayment(orderID,function(paymentID){
        showSummary(paymentID,function(){
            updateWallet();
        });
    });
});

createOrder(cart).then(function(orderID){
    return proceedToPayment(orderID);
}).then(function(paymentID){
    return showSummary(paymentID);
}).then(function(){
    return updateWallet();
});


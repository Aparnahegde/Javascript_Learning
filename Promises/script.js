const cart=["shoes","shirts","pants"];  
createOrder(cart,function(orderID){
    proceedToPayment(paymentID)
});

const promise=createOrder(cart);
promise.then(function(orderID){
    proceedToPayment(paymentID);
});
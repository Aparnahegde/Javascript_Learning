// setTimeout(function(){
//     console.log('timer');
// }, 3000);

// function x(y){
//     console.log('x');
//     y();    

// }
// x(function y(){
//     console.log('Hello Y');
// })


//eventlistener
// document.getElementById("clickme").addEventListener('click',function xyz(){
//    alert('Button Clicked');
// }); 


//number time button clicked
 let count = 0;
document.getElementById("clickme").addEventListener('click',function xyz(){
       console.log('Button Clicked '+ (++count) + ' times');
    }); 
    


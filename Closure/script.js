// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     y();    // 10
// }


// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//    return y; 
// }
// var z= x();
// console.log(z);  // ƒ y(){  console.log(a);  }  
// z();  // 10


// function x(){
//     var a = 10;
//     function y(){
//         console.log(a);
//     }
//     a=100;
//    return y; 
// }
// var z= x();
// console.log(z);  // ƒ y(){  console.log(a);  }  
// z(); // 100

// function z(){
//     var b=900;
//     function x(){
//             var a = 10;
//             function y(){
//                 console.log(a,b);
//             }
//             y();   // 10 900
//         }
//         x();// 10 900
// }
// z();//


function z(){
    var b=900;
    function x(){
            var a = 10;
            function y(){
                console.log(a,b);
            }
            return y;
        }
        return x;
}
z()()(); // 10 900
console.log(z()); // ƒ x(){  var a = 10;  function y(){  console.log(a,b);  }  return y;  }
console.log(z()()); // ƒ y(){  console.log(a,b);  }
console.log(z()()()); // 10 900




// function outest(){
//     var c=20;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         var a=10;
//         return inner;
//     }
//     return outer;
// }
// outest()("hello")(); // 10 hello 20


// function outest(){
//     var c=20;
//     function outer(b){
//         function inner(){
//             console.log(a,b,c);
//         }
//         var a=10;
//         return inner;
//     }
//     return outer;
// }
// let a=100;
// outest()("hello")();// 100 hello 20


function outest(){
    var c=20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
       var a=10;
        return inner;
    }
    return outer;
}
var a=100;
outest()("hello")();// 10 hello 20
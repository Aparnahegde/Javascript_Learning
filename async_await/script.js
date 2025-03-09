async function getdata(){
return "Hello World";
}

const data = getdata();
console.log(data); // Promise {<pending>}

const dataPromise = getdata();  
dataPromise.then(data => console.log(data)); // Hello World
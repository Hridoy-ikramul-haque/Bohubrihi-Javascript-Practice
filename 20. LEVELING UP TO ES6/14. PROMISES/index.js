//PROMISES 

//Successful-> resolve 
//Failed-> reject 
 
let prom=new Promise((resolve,reject)=>{
    //let a=1+5; 
     let a; 
     setTimeout(()=>{
         a=4+5;

        if(a==9){
        resolve("Successful");

    }else {
        reject("Failed");
    }

     },2000);

   
});


//.then .catch 

prom.then((message)=>{
    console.log('I am from then ' + message); 
}).catch((message)=>{
    console.log('I am from catch ' + message); 
})
console.log('i am after promise'); 

//Example: Image File 
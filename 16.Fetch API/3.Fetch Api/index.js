//Fetch Api is a asynchronous programmin technique
//Fetch API Uses Javascript Promises

//http://api.icndb.com/jokes/random


document.getElementById("get_data").addEventListener('click',getData);

//Arrow Function 
//let test=(parem1)=>{};
//let test=parem1=>parem1;

// function getData(){
//     fetch('http://api.icndb.com/jokes/random').then(function(res){
//         //console.log(res.text());
//         //console.log(res.json());

//         return res.json();

//     })
//     .then(function(data){
//         console.log(data);
//     })
//     .catch(function(err){
//         console.log(err);
//     })
// }


// using arrow function 


function getData(){
    fetch('http://api.icndb.com/jokes/random').then(res=> res.json())
       
    .then(data=>{console.log(data); })
    .catch(err=>{console.log(err); });
        
    
}


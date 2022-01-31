//Arrow function 

//defining a normal function 
function hridoy(){
    console.log("hello");

}

hridoy();
console.log("next ");

// defining an Arrow function 
let rafa= ()=>{
    console.log("my name is rafa");
}

console.log(rafa());
console.log("next ");

let ismail= (name)=>console.log(name);
console.log(ismail("mui ismail"));
console.log("next ");


let jesmin= k=>console.log(k);//if one parameter parenthesis can be avioded and 
//curly braces can be avoided if single statement[for return statemet curly braces must] . 
console.log(jesmin("my mom"));
console.log("next ");


//both of them are same . 
//let getSqure = num=> {return num*num;}
let getSqure=num=>num*num; 

console.log(getSqure(4));
console.log("next ");


//callback function 
//if we pass a function into an another function its called callback function 

let Numbers = [1,2,3,4,5,6,7];

// Numbers.forEach(function(item){
//     console.log(item);
// });
Numbers.forEach(item=>console.log(item));
console.log("next ");

// let printAll=function(item){
//     console.log(item);
// };

let printAll=(item)=>console.log(item);
Numbers.forEach(printAll);//when we pass a function into another function remember not using parenthesis. 
console.log("next ");

let squre=map=>map*map; 
// let squreNumber= Numbers.map(function(map){
//     return map*map; 
// });

let squreNumber= Numbers.map(squre);

console.log(squreNumber);

console.log("next ");




function num(sum){
    document.getElementById("sum").innerHTML= sum; 
}

function calsum(n1,n2,callback){
    var sum=n1+n2; 
    callback(sum);
}

calsum(10,20,num); 


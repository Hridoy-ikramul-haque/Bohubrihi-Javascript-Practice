//var let const 

//let , const [es6]

var a=10; 
a=a+7; 
var a = 20; //it possible 
// reassign and declare both possible 


let x=255;
x+=10; 
//let x=21; //not possible 
//let x; //not possible 
x=21; //possible 
// can reassign but can not declare 

const z=21;

//z=31; // not possible
//const z; //not possible 
//can not reassign or declare 



//Global scope 
var p=1; 
let q=2;
const r=3; 
console.log(`global scope:`,p,q,r);

var s=200;

//local scope 
function test(){
    var p=4;
    let q=5; 
    const r=6;
    console.log(`function scope:`,p,q,r);
    console.log(`access global varibale:`,s);

    var t=300; 
}

test();

console.log(`global scope:`,p,q,r);
//console.log(`accessing local scope:`,t);

if (true){
    var p=7;//globally changed 
    let q=5;
    const r=3; 
    console.log(`if scope:`,p,q,r); 
}
console.log(`global scope:`,p,q,r);//here p changed 

for(var p=0; p<10; p++)  {
    //if use let not globally changed
    console.log(`loop`,p);
}

console.log(`global scope:`,p,q,r);



//prefarabble using let 
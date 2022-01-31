
let numbers= [23,1,0,-1];
console.log(Math.max(...numbers));

let person= ["hridoy","ikramul"];

let test= (fname,lname)=>console.log(`hello ${fname} ${lname}`);

//test(person[0],person[1]);

test(...person);



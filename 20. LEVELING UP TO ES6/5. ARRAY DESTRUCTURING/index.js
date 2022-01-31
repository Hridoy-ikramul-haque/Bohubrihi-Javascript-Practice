//Array destructing 

let fruits= ["apple","grape","orange"];

// let fruits1= fruits[0];
// let fruits2=fruits[1];
//console.log(`${fruits1}  ${fruits2}`);

let [fruits1,fruits2]=fruits;

console.log(`${fruits1}  ${fruits2}`);

let [x, , y]=fruits; 
console.log(x,y);
//Maps -> data structure -> key value pairs -> object 

let myMap= new Map([
    ['first key',10],
    ['second key',"coding"]
]);

//add
myMap.set('third key','hello world'); 


console.log(myMap);
console.log(myMap.get('first key'));
console.log(myMap.has('first key'));

console.log(myMap.size);


//iterate 

// for(let x of myMap){
//     console.log(x);
// }

// for(let [x,y] of myMap){
//     console.log(x,y);
// }
// for(let x of myMap.keys()){
//     console.log(x);
// }

// for(let x of myMap.values()){
//     console.log(x);
// }

// for(let x of myMap.entries()){
//     console.log(x);
// }

 myMap.forEach((x,y)=>console.log(x,y)) // first -> key , second-> value

let arry= Array.from(myMap);
let arry= Array.from(myMap.keys());
let arry= Array.from(myMap.values());
 console.log(arry);
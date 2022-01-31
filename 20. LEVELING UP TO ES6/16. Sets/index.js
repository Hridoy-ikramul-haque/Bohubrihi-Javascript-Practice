//seta one kind of data structure where we can not store duplicate data 


let arr=[1,2,2,2,33,33];
//console.log(arr);


let mySet= new Set([1,2,2,5]);
mySet.add("i love coding"); 
mySet.add(2); 
//mySet.clear();  
mySet.delete(33); 

// console.log(mySet);
// console.log(mySet.has(2));

// console.log(mySet.size);



//Iterating Sets 

// for(x of mySet){
//     console.log(x);
// }

// for(x of mySet.keys()){
//     console.log(x);
// }

// for(x of mySet.entries()){
//     console.log(x);
// }
// for(x of mySet.values()){
//     console.log(x);
// }
// let iter=mySet.entries(); 
// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// for(let [x] of mySet.entries()){
//     console.log(x);
// }


// let iter=[...mySet.entries()];

// let iter=[...mySet.keys()];

// let iter=[...mySet.values()];

//console.log(iter);


mySet.forEach(value=>console.log(value));
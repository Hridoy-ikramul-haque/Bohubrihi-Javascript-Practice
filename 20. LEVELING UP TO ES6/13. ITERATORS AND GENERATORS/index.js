//ITERATOR -> method 
//Symbol build in method iterator . 

//let iterable="hello";

let iterable=[1,2,3,4,5,6]

//Symbol.iterator

//let iter=iterable[Symbol.iterator];

let iter=iterable[Symbol.iterator]();

// console.log(iter);

// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log("i love coding...");
// console.log(iter.next().value);
// console.log(iter.next());
// console.log(iter.next());


//difference between iterator and loop is we can pause the access on particular  variable values in iterator but in loop its not possible 


//making a custom iterator 
let names=["rahim","karim","rony","hridoy"];

function cusIterator(arr){
    let i=0; 
    return {
        next: function(){
            return i<arr.length ? {value: arr[i++],done: false}: {done:true}; 
        }
    };
}

let members=cusIterator(names);

// console.log(members);
// console.log(members.next());
// console.log(members.next().value);
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());
// console.log("Allah plz help  me");
// console.log(members.next());


//Generator 

function* genfunc(){
    yield 1;
    yield "hridoy";
    yield 4; 
    //return;
    console.log("i love coding");
    yield "karim"; 
    yield "hello world"; 
}
let genIter= genfunc();
console.log(genIter);
console.log(genIter.next());
console.log(genIter.next());
console.log(genIter.next());
console.log(genIter.next().value);
console.log(genIter.next());
console.log(genIter.next());
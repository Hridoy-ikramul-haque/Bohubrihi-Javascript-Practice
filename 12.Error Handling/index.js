//error handling 

//console.log("before error");

//test();
//console.log("after error");

try {
   // test();
   //undefined.test()
} catch (error) {
    //console.log(error);
    // console.log(error.message);
    // console.log(error.name);  
} finally{
    // console.log('i love coding');
}


//error msg generate 

let a=1;

try {
    if(a>15) throw "Too Big";
    else if(a<10) throw "Too small";
} catch (error) {
    console.log(error);
    
}
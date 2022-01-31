
//http://api.icndb.com/jokes
//fetch api returns a promise . 
//let x= fetch('http://api.icndb.com/jokes/random/5000');

//console.log(x);

//fetch('http://api.icndb.com/jokes/random/5000').then(message=>{console.log(message.json());});


// fetch('http://api.icndb.com/jokes/random/5000').then(message=>message.json()).then(data=>{console.log(data)});

//console.log("hello world");


//async await 

async function getJokes(){
    //return "all the jokes"; 
    let response= await fetch('http://api.icndb.com/jokes/random/5000');
    let data= await response.json();
    //return response; 
    return data; 
}

//console.log(getJokes());

//getJokes().then(l=>console.log(l));

console.log(getJokes());


getJokes().then(x=>console.log(x));


//chaining 


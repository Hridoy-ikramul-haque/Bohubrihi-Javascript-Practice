// JSON.stringify()-> Js object to JSON String
// JSON.parse()-> JSON String to Javascript Object
var person1={
	"name": 'hridoy',//string
	"age": 25,//number
	"hometown": "dhaka",//string
	"married": false//boolean
		
};



var person2={
	name: 'rafa',//string
	age: 17,//number
	hometown: "Chandpur",//string
	married: true//boolean
};

//if we write JSON code in javascript ,it will trated as an object 
//console.log(person1);
//console.log(person2);

//var person1_JSON=JSON.parse(person1);//error 

var person1_JSON=JSON.stringify(person1);
var person1_obj=JSON.parse(person1_JSON);
console.log(person1_JSON);
console.log(person1_obj);


console.log(person1.name);
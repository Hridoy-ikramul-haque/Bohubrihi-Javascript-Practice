// https://jsonlint.com

//supported data types:

// string 
// number 
// object(JSON object)
//array
//boolean 
//null

//sonnab

//not suppurted data types: 

//undefined 
//date 
//function 

var person={
	name: 'hridoy',//string
	age: 25,//number
	hometown: "dhaka",//string
	married: false,//boolean
	//dob: 07-16-1997,//Date
	 dob: "07-16-1997",
	test_null: null,//null
	test_undefined: undefined,//undefined
	greet: function(){//function
		console.log(`hello ${this.name}`)
	}
}

//person.greet();

var person_json=JSON.stringify(person);
console.log(person_json);
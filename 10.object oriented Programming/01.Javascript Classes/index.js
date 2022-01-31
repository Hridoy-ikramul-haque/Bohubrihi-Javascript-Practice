//class(ES6)
//Class is a template for creating object 


//create a object 
let person1= {
    firstname: "hridoy",
    lastname: "khan",
    dob: "16/07/1997",

    fullname: function(){
        document.getElementById("p").innerHTML=this.firstname+" "+this.lastname;
        console.log(`${this.firstname} ${this.lastname}`);
    }
}
// person1.fullname();
let person2={
    firstname: "NABILA TASNIM",
    lastname: "RAFA",
    dob: "02/08/2002",

    fullname: function(){
        console.log(`${this.firstname} ${this.lastname} `);
    }
}


// console.log(person1);
// console.log(person2);


//create a class 

class Person {
    constructor(fname,lname,db){
        this.firstname = fname;
        this.lastname = lname;
        this.dob = db;
    }

    calculateAge(){
    	let birthday= new Date(this.dob);
    	let diff=Date.now()-birthday.getTime();
    	let ageDate=new Date(diff);
    	return Math.abs(ageDate.getUTCFullYear()-1970);
    }
}

let person3= new Person("jesmin sultana","lucky","1/16/1965");
let person4= new Person("ismail prodhania","dulal","10.3.1943");


console.log(person3.calculateAge());
console.log(person4);
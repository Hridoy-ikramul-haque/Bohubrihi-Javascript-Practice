//sub class 
//Inheritence 

class Person{    //base Class 
    constructor(fname,lname){
        this.firstname= fname;
        this.lastname = lname;
    }
    greeting(){
        return `Hello ${this.firstname} ${this.lastname}!`;
    }
}

class Customer extends Person { //Sub class 
    constructor(fname,lname,pn,mid){
        super(fname,lname);
        this.phone = pn;
        this.membership = mid;
    }
    fullName(){
        console.log(this.firstname,this.lastname);
    }
}

let hridoy = new Person("hridoy","khan");
console.log(hridoy.greeting());

let rafa = new Customer("nabila","tasnim","01951897926",2);
console.log(rafa);
console.log(rafa.greeting());
console.log(rafa.fullName());

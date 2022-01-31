

let person={
    firstname: "ikramul",
    middlename: "haque",
    lastname: "hridoy",
    dob: "16-07-1997"
};

// let fname= person.firstname;
// let mdlname=person.middlename;
// let lname=person.lastname;
// let dateofbirth= person.dob;

//console.log(fname,mdlname,lname,dateofbirth);

//let {fname,mdlname,lname,dob}=person; //not working exact property name should use 
//let {firstname,middlename,lastname,dob}=person;
let {firstname:fname,middlename,lastname,dob}=person;
console.log(fname,middlename,lastname,dob);//not working exact property name should use 



// function display(person){
//     let fname= person.firstname;
// let mdlname=person.middlename;
// let lname=person.lastname;
// let dateofbirth= person.dob;
// console.log(fname,mdlname,lname,dateofbirth);
// }

// display(person);



function display({firstname:fname,middlename,lastname,dob}){
    
console.log(fname,middlename,lastname,dob);
}

display(person);


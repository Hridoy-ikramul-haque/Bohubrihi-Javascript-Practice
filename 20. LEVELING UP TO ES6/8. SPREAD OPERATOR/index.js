//SPREAD OPERATOR ... 

let str= "ikramul";
let newStr=[...str];
console.log(newStr);


let fruit1=["Apple","Pine-apple","Mango"];
let fruit2=["Orange","Grape"];
let fruit3="Jackfruit";

let newarr=[fruit1,fruit2,fruit3];
let newarr2=[...fruit1,...fruit2,fruit3]
console.log(newarr);
console.log(newarr2);

//Spread on Object[ES8]

let person={
    fname: "ikramul",
    lname: "hridoy"
};

let newPerson={...person, dob:"16-07-1997"};
console.log(newPerson);




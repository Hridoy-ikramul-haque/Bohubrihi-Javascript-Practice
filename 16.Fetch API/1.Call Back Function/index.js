//Callback function 


// setTimeout(function(){
//     console.log('HELLO WORLD');
// },2000);



//synchronous


// let persons=[
//     {
//         firstname: "hridoy",
//         lastname: "khan"
//     },
//     {
//         firstname: "nabila",
//         lastname: "tasnim"
//     }
// ]

// function createPerson(person){
//     setTimeout(function(){
//         persons.push(person);
//     },4000);
// }


// function getPerson(){
//     setTimeout(function(){
//         let output='';
//         persons.forEach(function(person){
//             output+=`<li>${person.firstname} ${person.lastname}</li>`
//             document.getElementById('output').innerHTML=output;
//         })
//     },1000);
// }



//Asynchronous


let persons=[
    {
        firstname: "hridoy",
        lastname: "khan"
    },
    {
        firstname: "nabila",
        lastname: "tasnim"
    }
]

function createPerson(person,callback){
    setTimeout(function(){
        persons.push(person);
        callback();
    },4000);
}


function getPerson(){
    setTimeout(function(){
        let output='';
        persons.forEach(function(person){
            output+=`<li>${person.firstname} ${person.lastname}</li>`
            document.getElementById('output').innerHTML=output;
        })
    },1000);
}





createPerson({firstname: "ismail",lastname: "prodhania"},getPerson);

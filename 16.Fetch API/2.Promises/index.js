//Promises is alternate of Callback function 


//.then 



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

function createPerson(person){
    let prom=new Promise(function(resolve,reject){
        persons.push(person);
        //resolve();
        let error=true;
        if(!error){
            resolve();
        }else{
            reject("Error! something wrong");
        }
    });

    return prom;
    

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





createPerson({firstname: "ismail",lastname: "prodhania"}).then(getPerson)
.catch(function(err){
    console.log(err);
});

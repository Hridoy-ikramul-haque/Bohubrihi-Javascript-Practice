//document.getElementById()


//Getting an element 
let val;
val=document.getElementById("title");
val=document.getElementById("title").id;
val=document.getElementById("title").className;

//changing style 
document.getElementById("title").style.background= "blue";
document.getElementById("title").style.color="white";
document.getElementById("title").style.padding = "20px";
document.getElementById("title").style.textAlign = "center";
document.getElementById("title").style.display="none";
document.getElementById("title").style.display="block";


//Changing Content 
document.getElementById("title").textContent="random text";
document.getElementById("title").innerText = "some random text";
document.getElementById("title").innerHTML = "<i>random title</i>"
title_select = document.getElementById("title");

title_select.innerHTML = "<i><b>this is our title</b></i>"



//document.querySelector 

val=document.querySelector("#title");
val=document.querySelector(".heading");
val=document.querySelector('h3');
val=document.querySelector("li");
val=document.querySelector("ol li");
val.style.background ="black";
val.style.color = "yellow";
val=document.querySelector("li:last-child");
document.querySelector("li:nth-child(2)").innerHTML = "nodejs";
document.querySelector("li:nth-child(odd)").innerHTML = "laravel";



console.log(val);
//Multiselector 
//document.getElementByClassName()
let list=document.getElementsByClassName("sample-class");
list[0].style.background = 'red';
list[0].style.color = 'white';
list[0].textContent="hello world";
//console.log(list[1]);

let taglist = document.getElementsByTagName('ol');

taglist=document.querySelector('ol').getElementsByTagName('li');

let lis= Array.from(taglist);

lis.forEach(function(i) {
    //console.log(i);
});
//console.log(taglist);


//document.querySelectorAll()

//id->#
//class-> .
//tagname-> nothing

let papa=document.querySelectorAll('.sample-class');

papa=document.querySelectorAll('li');

papa=document.querySelectorAll('ul li');
papa.forEach(function(i) {
    console.log(i);
});

papa=document.querySelectorAll('li:nth-child(odd)');
papa.forEach(function(i){
    i.style.background="grey";
});

papa=document.querySelectorAll('li:nth-child(even)');
papa.forEach(function(i){
    i.style.background="red";
    i.style.color='white';
});
console.log(papa);

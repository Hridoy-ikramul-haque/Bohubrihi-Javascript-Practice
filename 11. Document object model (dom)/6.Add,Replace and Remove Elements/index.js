//Adding element to Dom 

//Create Element 
let olItem=document.createElement('li');

//add Id and class

olItem.className='new-list';
olItem.id='new-element';

//add attribute 
olItem.setAttribute('title','new element title');

//add txt value 
olItem.appendChild(document.createTextNode('javascript'));

document.querySelector('ol').appendChild(olItem);


//console.log(olItem);

//create new element 

let ulItem= document.createElement('li');
let link=document.createElement('a');
link.appendChild(document.createTextNode('instagram'));
link.setAttribute('href','#');

ulItem.appendChild(link);

// ulItem.appendChild(document.createTextNode('instagram'));

document.querySelector('ul').appendChild(ulItem);



//console.log(ulItem);


//Replacing Elements 

let newHeading=document.createElement('h1');


newHeading.appendChild(document.createTextNode('h1 new heading'));

let oldHeading=document.querySelector('h3');
newHeading.className='sample-class';

let parent=document.querySelector('div');

parent=oldHeading.parentElement;

parent.replaceChild(newHeading,oldHeading);

// console.log(newHeading);
// console.log(oldHeading);
// console.log(parent);


//Remove Element 

let listItem=document.querySelectorAll('li');

let list=document.querySelector('ol');

// listItem[0].remove();
// listItem[3].remove();

list.removeChild(listItem[0]);

list.className="bosike";
list.classList.add('test');
list.classList.add('testbosike');

list.classList.remove('bosike');
let val=list.hasAttribute('class');
list.setAttribute('title','new-titlle');
list.removeAttribute('title');

console.log(listItem);
console.log(list);
console.log(val);


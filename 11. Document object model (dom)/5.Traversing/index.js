
//traversing the dom


let val;
let list=document.querySelector('ul');
let listItem=document.querySelector('ul li:first-child');


// val=list;
val=listItem;

//get the childNodes
 val=list;
 val=list.childNodes;
 val=list.childNodes[0];
 val=list.childNodes[1];
 val=list.childNodes[2];
 val=list.childNodes[1].nodeName;
 val=list.childNodes[5].nodeType;

//1 Element
//2.Attribute
//3.Text Node
//8.commnet
//9.Document Itself
//10.Doctype

 val=list.children;
 val=list.children[1];
 list.children[1].textContent='hello';
 val=list.children[0].children[0];

  val=list.children[0].children[0].href;
 val=list.firstChild;
 val=list.firstElementChild;
 val=list.lastChild;
 val=list.lastElementChild;
 val=list.childElementCount;
 val=list.parentElement;


 val=listItem;
 val=listItem.parentElement;
 val=listItem.parentNode;
 val=listItem.parentElement.parentElement;

 listItem=document.querySelector("ol li:first-child");
 val=listItem.nextSibling;
 val=listItem.nextSibling.nextSibling;
 val=listItem.nextElementSibling;


 listItem=document.querySelector("ol li:last-child");
 val=listItem.previousSibling;
 val=listItem.previousElementSibling;





console.log(val);

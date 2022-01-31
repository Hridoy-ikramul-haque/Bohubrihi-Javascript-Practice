let val;


val=this;//indicate full html document content
val=window;//indicate full html document content


val=window.document;//indicate my html page full document
val=document;//indicate my html page full document


val=document.all;//indicate all html tag element in one array that are usiung in html document

val=document.all[1];//select second tag from all html tag in my document

val=document.all.length;//indicate total html element
val=document.head;//indicate head property

val=document.body;//indicate body property
val=document.doctype;//indicate doctype property

val=document.domain;//indicate domain id
val=document.URL;//indicate full url
val=document.characterSet;//indicte characterset
val=document.contentType;//indicate content type

val=document.forms;//indicate document all form
val= document.forms[0];//indicate first form of document
val= document.forms[0].method;//incidate form method
val=document.forms[0].action;//indicate forms actions, if no actions indicate html page.

val=document.links;//indicates all links
val=document.links[0];//indicates first link
val= document.links[0].href;//indicates selected links href;
val=document.links[0].className;//indicate link classes name
val=document.links[0].classList;//indicate link classes as an array
val=document.images;//indicate images
val=document.scripts;//indicate scripts
val=document.scripts[0];
val=document.scripts[0].src;//indicate selected script src
val=document.scripts[0].getAttribute('src');//indicate script src name

links=document.links;
//we can apply foreach loop in an array
//but we can not apply foreach in dom aray in that way

let linkArray=Array.from(links)//convert in array 

linkArray.forEach(function(link) {
    console.log(link);

});




console.log(val);

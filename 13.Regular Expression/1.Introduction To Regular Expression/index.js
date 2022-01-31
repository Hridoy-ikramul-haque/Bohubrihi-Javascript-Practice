//Regular Expresion 
//Pattern Matching Technique 


let re;
let str;

re= /hello/;
re=/Hello/i; //case insensitive
console.log(re);
console.log(re.source);

str="hello world";
str="again hello world";
str="hell world";
str="dasdsadsdhellosd";
str=" again hello world hello";


//exec()-returns results in an array on null; 

let result= re.exec(str);


//test()-> true/false;

result=re.test(str);

//match() - Return array or null 

result=str.match(re);

//search()-Returns index of the first match or -1 
result=str.search(re);

//replace() - Return new String 
str="hello babu khaiso";
str.replace(re,"Hi");
console.log(str);
console.log(re.source);

newString=str.replace(re,"ahhh");
console.log(newString);


console.log(result);
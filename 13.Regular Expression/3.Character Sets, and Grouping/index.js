//Regular Expresion 
//Pattern Matching Technique 


let re;
let str;
let result;

//Literal Character

// re=/bangladesh/;
// re=/bangladesh/i;
// str='my country name is Bangladesh';

//Meta Characters//

//re=/^bangladesh/ //Must start with and sign name is ^ -> caret 
//re=/^my/;
//re=/bangladesh$/i;//Must end with 
//re=/^my$/;//must star and end both
//re=/^m.y$/;//only one 
//re=/m.y/;
//re=/m*y/; //0 or more times
//re=/he?llo/; //optional
//re=/h?e/;
//re=/hee\?/;//escaping 


//Chracter Set using Brackets[]

re=/h[eel]lo/;  //Must be one of them inside brackets,must not be both of them 

re=/[Ho]llo/;
re=/[^he]hello/;//anything except those inside brackets 

re=/^[he]hello/;//must start with any one those inside brackets. 

re=/[a-z]hello/;//range 
re=/[A-Z]hello/;
re=/^[A-Z]hello/;
re=/^[A-Z]/;
re=/[A-Za-z]/;
re=/[0-9]/;
re=/[0-9]mynumber/;
re=/^[0-9]mynumber/;
re=/[^0-9]/;
re=/[^0-9]hello/;
re=/[0-9][0-9]hello/;//check two character 

//quantifier 
//Braces {}
re=/hello/;
re=/hel{2}o/;//must occur 2 times l 
re=/hel{3}o/;
re=/hel{2,5}o/;//range 
re=/hel{2,}/;//at least 2 times 


//parentheses()-Grouping 

re=/^[0-9][0-9][0-9][0-9]hello/;
re=/^([0-9]){4}hello/;

//Bangladeshi phone Number Cheking 

re=/^[+][8][8][0][1]/;
re=/^\+8801[0-9]{9}$/;
re=/^[0-9]x{3}/;
re=/^([0-9]x){3}/;
re=/^([0-9]xy){3}/;





// str='my country name is Bangladesh my';

// str='may';
// str='hllo';
// str='hallo';
// str="ue";
// str='hee?'

str='hllo';
str='Hllo';

str='hhello';
str='yhello';
str='hello';
str=' hello';
str='hehello';
str='hhello';
str='abcfdrhello';
str='Hhello';
str='HRIDOY';
str='Hridoy';
str='i love coding';

str=65;
str='6mynumber';
str='my6mynumber';
str='6trttrrr';
str='ihello';
str='87hello';
str='6hello';
str='helo';
str='hello';
str='hellllllo';
str='0453hello';
str='098hello';
str='+8801951897926';
str='+8801gtffdddx';
str= '+8801951897926';
str='7xxx';
str='6x6x6x';
str='5xy6xy6xy';










result=re.exec(str);

function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str} matches '${re.source}'`);
    } else{
        console.log(`'${str}  dosen't matches '${re.source}'`);
    }
}
reTest(re,str);





//console.log(result);
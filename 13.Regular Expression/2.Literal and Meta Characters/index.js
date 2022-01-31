//Regular Expresion
//Pattern Matching Technique


let re;
let str;
let result;

//Literal Character

re=/bangladesh/;
re=/bangladesh/i;
str='my country name is Bangladesh';

//Meta Characters//

re=/^bangladesh/ //Must start with
re=/^my/;
re=/bangladesh$/i;//Must end with
re=/^my$/;//must star and end both
re=/^m.y$/;//Matches any one character in the dot positon[but not empty] if rest of the things matches.
re=/m.y/;
re=/m*y/; //0 or more times[star places only second place]
re=/he?llo/; //optional [here e is optional]
re=/h?e/;
re=/hee\?/;//escaping

str='my country name is Bangladesh my';

str='may';
str='hllo';
str='hallo';
str="ue";
str='hee?'




result=re.exec(str);

function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str} matches '${re.source}'`);
    } else{
        console.log(`'${str}  dosen't matches '${re.source}'`);
    }
}
reTest(re,str);





console.log(result);

//Events of Javascript 

//onclick

// function message(){
//     //console.log("clicked");
//     document.getElementById('q').innerHTML="clicked";
// }

//Event Listener:

//document.getElementById('q').addEventListener('click',message);

function message(val){
    let e=val;
    e=val.target;//this 
    e=val.target.id;
    e=val.timeStamp;
    e=val.type;
    e=val.clientY;//y axis pixel value
    e=val.clientX;//x axis pixel value 
    e=val.offsetY;//y axis element pixel value 
    e=val.offsetX;//x axis element pixel value 




   // console.log(e);


}
//dblclick 

//document.querySelector('div').addEventListener('click',axisValue);
  //document.querySelector('div').addEventListener('mousemove',axisValue);
//document.querySelector('div').style.background='red';

 function axisValue(f){
    let valx= f.offsetX;
    let valy=f.offsetY;
    let val=this;
    this.style.background=`#${valx}`;

   // console.log(valx,valy);
    //console.log(this);
}

document.querySelector('#name').addEventListener('focus',test);

document.querySelector('#name').addEventListener('keyup',test2);

function test(e){
    //console.log("focused");
    this.style.background= 'yellow';

}
function test2(f){
    let x=this.value;
    //console.log(x);
    document.getElementById('para').innerHTML=this.value;

}
document.getElementsByTagName('p')[2].innerHTML="kakakakka";

//http://www.icndb.com/api/

//API -> language independent 
//RESTful api 


document.getElementById('get_data').addEventListener('click',loadJokes);



function loadJokes(){
	let number= document.getElementById("noj").value;
    //console.log(number);


	let xhr= new XMLHttpRequest();
	 xhr.open('GET','http://api.icndb.com/jokes/random',true);
	  xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`,true);

	xhr.onload=function(){
		if(this.status===200){
			//console.log(this.responseText);
			let data= JSON.parse(this.responseText);
			//console.log(JSON.parse(this.responseText));
			let jokes= data.value;
			
			let output="<ol>";

			jokes.forEach( function(item) {

				//console.log(item);
				//console.log(item.joke);
				output+=`<li>${item.joke}</li>`;
				
			});
			output+="</ol>";
			document.getElementById('output').innerHTML=output;

			//console.log(jokes);
			let joke=data.value.joke;
			//console.log(joke); 
		}
	}

	xhr.onprogress=function(){
		document.getElementById('output').innerHTML="<h3>loading.....</h3>";
	}
	xhr.send();
}
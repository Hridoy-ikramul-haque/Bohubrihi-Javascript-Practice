//Asynchronous Programming 

//AJAX -> Asynchronous Javascript and XML
//Get data without loading the page


document.getElementById('get_data').addEventListener('click',loadData)


function loadData(){
	//console.log('button clicked');
	//create a XHR object -> (XML HTTP REQUEST )

	let xhr= new XMLHttpRequest();
	//console.log(xhr);

	//now use open function which is access the file and carry those file data
	//
	xhr.open('GET','data.txt',true);//3 parameter


	//onload
	//use this more

	xhr.onload= function(){
		//HTTP Status:
		//200 : "ok"
		//403: "Forbidden",
		//404: "Not Found"
		if(this.status ===200){
			//console.log(this.status);
			//console.log(this.responseText);
			document.getElementById('output').innerHTML=this.responseText;
		}
	}



    //onreadystatechange

	xhr.onreadystatechange = function(){

		  // readyState Values:
         // 0: request not initialized
         // 1: server connection established
         // 2: request received
         // 3: processing request
         // 4: request finished and response is ready

        // console.log(this.readyState);

		if(this.status===200 && this.readyState===4){
			//console.log(this.responseText);
		}
	}


    //onprogress
    xhr.onprogress=function(){
    	console.log(this.readyState);

    }


	xhr.send();



}

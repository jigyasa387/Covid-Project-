
function validation()
{
	var user=document.getElementById('user').value;
	if(user.length==0){
		document.getElementById('namePrompt').style.color="darkRed";
	 document.getElementById('namePrompt').innerHTML=" *" + "Please fill the text";
     return false;
	}	
	 else if( (user.length<3) || (user.length>20) ){
		document.getElementById('namePrompt').style.color="darkRed";
	document.getElementById('namePrompt').innerHTML="*" + "Character must be between 2 and 20";	
	return false;
	}
    else if( !isNaN(user) ){
		document.getElementById('namePrompt').style.color="darkRed";
      document.getElementById('namePrompt').innerHTML="*"+ "Number are not allowed";
     return false;	  
	 }		 
	else{
		return true;
	}
}

function validateAge()
{	
	var age=document.getElementById('age').value;
	if(age.length==0){
		document.getElementById('age1').style.color="darkRed";
	 document.getElementById('age1').innerHTML=" *" + "This is required";
     return false;
	}
else{
		return true;
	}	
}









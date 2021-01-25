
function fn(){
	var div = document.getElementById("menu");
	if(div.style.visibility==='hidden') {
		div.style.visibility='visible';
	}
	else{
		div.style.visibility='hidden';
	}
}
/*function menuToggle(){
   var x=document.getElementByID("menu");
   if(x.style.display=="none"){
   	x.style.display="block";
   }
   else{
   	x.style.display="none";
   }
}*/
function redirect(){
	var btn=document.getElementById("add");
	var ac=document.getElementById("account");
	if(account.value.trim()=""){
       document.location = "contact us.html";
	}
	else{
        alert("Dish added to cart!")
	}
};
function like(){
	alert("Added to favourites!");
}
function verify()
	{
		var username = document.getElementById("fname");
		var phone = document.getElementById("email");
		var pin = document.getElementById("zip");
    var crd = document.getElementById("cname");
    var c = document.getElementById("cvv");
		if(username.value.trim()=="" || phone.value.trim()=="" || pin.value.trim()==""){
      alert("Please fill billing details");
			return false;
		}
		else if(crd.value.trim()=="" || c.value.trim()=""){
			alert("Please fill card details");
			return false;
		}
		else{
			return true;
		}
	}

  function remove()
  {
    var x=document.getElementById("")
  }
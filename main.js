var maindiv=document.querySelectorAll("#maindiv")
var form=document.getElementById("form")
 var Pass=document.getElementById("Pass")
var picon=document.getElementById("picon")
  picon.addEventListener("click",action)
    function action (){
		if(pass.type==="password"){
			  pass.type="text"
			  picon.setAttribute("class","fa fa-eye")
		}
		else{
			pass.type="password"
			picon.setAttribute("class","fa fa-eye-slash")
			
		}
	}
		
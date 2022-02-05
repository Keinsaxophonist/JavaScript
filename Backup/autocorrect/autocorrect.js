document.getElementById("mybutton").onclick = function(){
var tmp = document.getElementById("text").value
var tmp2;
var tmp3 =['Planet', 'Stern', 'Galaxie']
var tmp4 =['planet', 'stern', 'galaxie']

	if(tmp==tmp4[0]|| tmp==tmp4[1]|| tmp==tmp4[2]){
		tmp2='richtig';
	}else {
		tmp2='falsch: '+tmp3+ ' ist richtig'
	}

	
	document.getElementById("label").innerHTML = tmp2; 
	
}
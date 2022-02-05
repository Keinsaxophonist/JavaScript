document.getElementById("mybutton").onclick = function(){
var tmp = document.getElementById("text").value;
var tmp2;
var tmp3 =['Planet', 'Stern', 'Galaxie'];

var tmp_array = tmp.split(" ");

var tmp3_lgth = tmp3.length;

tmp = " "+tmp+" ";

tmp = tmp.replaceAll(" ", "---");
tmp = tmp.replaceAll("\n", "---");

document.getElementById("label").innerHTML = "";
document.getElementById("label").innerHTML += tmp+"\n\n\n<br><br>";

//Planeten Gasriesen Gaalxien
//Stern
//

//Planeten---Gasreisen---Galaxien---Stern---Astern---

for (var i = 0; i < tmp3_lgth; i++)
{
	var substantiv = "---"+tmp3[i]+"---";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		
	
	var substantiv = "---"+tmp3[i]+".";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

	var substantiv = "---"+tmp3[i]+",";
	var substklein = substantiv.toLowerCase();	
	tmp = tmp.replaceAll(substklein, substantiv);		

}

tmp = tmp.replaceAll("Abgespeist", "Abgespaced");

/*	if(tmp==tmp3[0]|| tmp==tmp3[1]|| tmp==tmp3[2]){
		tmp2='richtig';
	}else {
		tmp2='falsch'
	}
*/
	
tmp = tmp.replaceAll("---", " ");
	document.getElementById("label").innerHTML += tmp;
	
	//document.getElementById("text").value = tmp; 
	
}
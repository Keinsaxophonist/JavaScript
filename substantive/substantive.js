document.getElementById("button").onclick = function() {

var tmp = document.getElementById("textfeld").value;


//erster Durchgang
    /*tmp = tmp.replaceAll(" ", "', <br/>'");
    tmp = tmp.replaceAll(":", " ");
    tmp = tmp.replaceAll(".", " ");
	tmp = tmp.replaceAll("(", " ");
	tmp = tmp.replaceAll(")", " ");
	tmp = tmp.replaceAll('"', " ");*/
	
//zweiter Durchgang

tmp = tmp.replaceAll(",", "', <br/>'");
	
	
	
	
	
    document.getElementById("label").innerHTML ="var Worte = ['" +  tmp + " ']";
}

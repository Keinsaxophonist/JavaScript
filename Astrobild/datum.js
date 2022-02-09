
document.getElementById("mybutton").onclick = function(){

	/*var myname = document.getElementById("datum").value;*/
	var myname = String(document.getElementById("year").value)+""+String(document.getElementById("month").value)+""+String(document.getElementById("day").value);
	var tag =+String(document.getElementById("day").value);
	var monat = String(document.getElementById("month").value);
	var jahr = String(document.getElementById("year").value);
	var monat_array = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
	var tmp=monat_array[monat-1];
	var tmp2=20;
	
	if(jahr>40){
		tmp2=19;
	}
	
	
	document.getElementById("datumtext").innerHTML = myname;
	
	var url = "https://apod.nasa.gov/apod/ap";
	var ext = ".html";
	
	document.getElementById("datumtext").innerHTML = '<a href="'+url+myname+ext+'" target="_blank" >Atronomiebild vom '+tag+'.'+tmp+'.'+String(tmp2)+String(jahr)+'</a>'; 
	
	
	
	//print(myname+" sind "+mkm(myname)+" km<br>" );


	/*function m-cm(m in cm){
	console.log(myname * 100);
	
	function m-nm(m in nm){
	console.log(myname ???);*/
	
}
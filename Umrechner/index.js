
document.getElementById("mybutton").onclick = function(){

	var myname = document.getElementById("mytext").value;
	
	document.getElementById("ergText").innerHTML = mkm(myname) + " km ";
	
	//print(myname+" sind "+mkm(myname)+" km<br>" );
	//print(myname "sind" m-cm "cm" )<br>;
	//print("myname "sind"m-nm"nm" )<br>;
	
	function mkm(m){
	   erg=m / 1000;
	   return erg;
	}
	/*function m-cm(m in cm){
	console.log(myname * 100);
	
	function m-nm(m in nm){
	console.log(myname ???);*/
	
}
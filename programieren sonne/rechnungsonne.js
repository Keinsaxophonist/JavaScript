
var r_sonne = 696340;
var a_cube = 12742;
var c_count = 0;
var max = 54;
var min = max * (-1);
var cube_vec = [];
var txt = "";


for (let i = min; i <= max; i++) {
	for (let j = min; j <= max; j++) {
		for (let k = min; k <= max; k++) {
			var tmp1 = a_cube * i;
			var tmp2 = a_cube * j;
			var tmp3 = a_cube * k;
			var b_vec = Math.sqrt((tmp1*tmp1)+(tmp2*tmp2)+(tmp3*tmp3));
			
			if (b_vec < r_sonne){
				c_count++;
				//txt += c_count+"="+String(tmp1)+","+String(tmp2)+","+String(tmp3)+"<br>";
			}
		} 
	} 
} 

var ergebnis = c_count;
document.getElementById("ttt").innerHTML = ergebnis;
console.log(ergebnis);

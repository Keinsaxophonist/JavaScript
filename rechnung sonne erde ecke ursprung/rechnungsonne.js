
var r_sonne = 696340;
var a_cube = 12742;
var b_cube = a_cube / 2;
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
			var b_vec2 = Math.sqrt((tmp1*tmp1)+(tmp2*tmp2)+(tmp3*tmp3));
			
			var vec_diag = Math.sqrt((a_cube*a_cube)+(a_cube*a_cube)+(a_cube*a_cube));
			var vec_diag2 = Math.sqrt((b_cube*b_cube)+(b_cube*b_cube)+(a_cube*a_cube));
			
			var vec_diag3 = Math.sqrt((b_cube*b_cube)+(b_cube*b_cube)+(0*0));
			var vec_diag4 = Math.sqrt((a_cube*a_cube)+(a_cube*a_cube)+(0*0));
			var vec_diag5 = Math.sqrt((a_cube*a_cube)+(0*0)+(0*0));
			
			var b_vec3 = Math.sqrt((tmp1*tmp1)+(tmp2*tmp2)+(tmp3*tmp3));
			var b_vec4 = Math.sqrt((tmp1*tmp1)+(tmp2*tmp2)+(tmp3*tmp3));
			var b_vec5 = Math.sqrt((tmp1*tmp1)+(tmp2*tmp2)+(tmp3*tmp3));
			
			
			b_vec = b_vec + vec_diag ; //cube diagonale zu Ecke
			b_vec2 = b_vec2 + vec_diag2 ;//cube diganale zur Fläche 
			
			b_vec3 = b_vec + vec_diag3 ;
			b_vec4 = b_vec + vec_diag4 ;
			b_vec5 = b_vec + vec_diag5 ;
			
		
			//b_vec = b_vec + 22070; //cube diagonale zu Ecke
			//b_vec2 = b_vec2 + 15605;//cube diganale zur Fläche 
			if ((b_vec < r_sonne) && (b_vec2 < r_sonne) && (b_vec3 < r_sonne) && (b_vec4 < r_sonne) && (b_vec5 < r_sonne)){
				c_count++;
				//txt += c_count+"="+String(tmp1)+","+String(tmp2)+","+String(tmp3)+"<br>"
			}
		} 
	} 
} 

var ergebnis = c_count;
document.getElementById("ttt").innerHTML = ergebnis;
console.log(ergebnis);

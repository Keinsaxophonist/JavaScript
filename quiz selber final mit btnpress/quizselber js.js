const startbutton = document.getElementById('startbutton');
const nextbutton = document.getElementById('nextbutton');
const header = document.getElementById('header');
const questionContainerElement = document.getElementById('question-container');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');
const resetbutton = document.getElementById('resetbutton');

const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answerbuttons');
let currentQuestionIndex;
currentQuestionIndex = 1;
//var index = currentQuestionIndex;

var question = 'question'+currentQuestionIndex;
window-addEventListener('keydown', (event)=>{
	if (event.key === 's'){
		startGame();
	}

	
})

 //startbutton.addEventListener('click', startGame);
 
function startGame(){
	console.log('started');
	startbutton.classList.add('hide');
	header.classList.add('hide');
	resetbutton.classList.add('hide');
	questionContainerElement.classList.remove('hide');
	question1();
	
}


function nextquestion (){
	nextbutton.classList.remove('hide');
	console.log('nextquestion')
	window-addEventListener('keydown', (event)=>{
	if (event.key === 'n'){
		currentQuestionIndex ++;
		eval('question'+currentQuestionIndex+'()');
		console.log(currentQuestionIndex);
}})};

function question1 (){
	const questionone = ["Wie heiss ist die Sonne?"];
	questionContainerElement.innerHTML=questionone[0];
	answer1.innerText="2000°C";
	answer2.innerText="5500°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	nextbutton.classList.add('hide');
	window-addEventListener('keydown', (event)=>{
	if (event.key === '1'){
		//currentQuestionIndex ++
		nextquestion();
		//alert('Falsch!');
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		alert('bötz');
		
	}
})
	window-addEventListener('keydown', (event)=>{
	if (event.key === '2'){ 
		//currentQuestionIndex ++;
		nextquestion();
		questionContainerElement.innerHTML="Richtig!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		
	}});
		console.log(currentQuestionIndex);
		//console.log(question);
	 question1.stop;
}

function question2 (){
	const questiontwo = ["Wie heiss ist die Sonne im Inneren?"];
	questionContainerElement.innerHTML=questiontwo[0];
	answer1.innerText="15000C";
	answer2.innerText="15000000C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	nextbutton.classList.add('hide');
	window-addEventListener('keydown', (event)=>{
	if (event.key === '1'){
		//currentQuestionIndex ++
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		return;
	}
})
	window-addEventListener('keydown', (event)=>{
	if (event.key === '2'){ 
		//currentQuestionIndex ++;
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		return;
	}});
		console.log(currentQuestionIndex);
	return
}

function question3 (){
	const questionthree = ["Wieviele Monde hat die Erde?"];
	questionContainerElement.innerHTML=questionthree[0];
	answer1.innerText="1";
	answer2.innerText="2";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	nextbutton.classList.add('hide');
	window-addEventListener('keydown', (event)=>{
	if (event.key === '1'){
		//currentQuestionIndex ++
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		
		
	}
})
	window-addEventListener('keydown', (event)=>{
	if (event.key === '2'){ 
		//currentQuestionIndex ++;
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		
		
	}});
		console.log(currentQuestionIndex);
}

function question4 (){
	const questionfour = ["Wem gehoeren die gallilaeischen Monde?"];
	questionContainerElement.innerHTML=questionfour[0];
	answer1.innerText="Saturn";
	answer2.innerText="Jupiter";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	nextbutton.classList.add('hide');
	window-addEventListener('keydown', (event)=>{
	if (event.key === '1'){
		//currentQuestionIndex ++
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		
		
	}
})
	window-addEventListener('keydown', (event)=>{
	if (event.key === '2'){ 
		//currentQuestionIndex ++;
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
		
		
	}});
		console.log(currentQuestionIndex);
}

function question5 (){
	const questionfive = ["Is Leo in einer Zwickmuehle?"];
	questionContainerElement.innerHTML=questionfive[0];
	answer1.innerText="Nein";
	answer2.innerText="Ja";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	nextbutton.classList.add('hide');
	window-addEventListener('keydown', (event)=>{
	if (event.key === '1'){
		//currentQuestionIndex ++
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
	}
})
	window-addEventListener('keydown', (event)=>{
	if (event.key === '2'){ 
		//currentQuestionIndex ++;
		nextquestion();
		questionContainerElement.innerHTML="Falsch!\nBei der Sonne ist es wie bei der Erde: Sie ist außen vergleichsweise kühl und innen ziemlich heiß. Nur sind die Verhältnisse ganz andere. An der Oberfläche der Sonne sind es ungefähr 5.500 Grad Celsius, aber im Inneren herrschen Temperaturen von 15 Millionen Grad Celsius.";
		answer1.classList.add('hide');
		answer2.classList.add('hide');
	}});
		console.log(currentQuestionIndex);
}

function question6 (){
	const questionsix = ["Thx 4 gayming                 Press R for reset"];
	questionContainerElement.innerHTML=questionsix[0];
	alert('Quiz Ende!')
	nextbutton.classList.add('hide');
	answer1.classList.add('hide');
	answer2.classList.add('hide');
	reset ();

}




/*if (currentQuestionIndex == 5){
	console.log('reset aktiviert')
	alert('Bisse fettich noich?')
	reset ();


}*/

function reset () {


	resetbutton.classList.remove('hide');
	resetbutton.onclick = function (){
		//startGame ();
		location.reload();
	}
}


window-addEventListener('keydown', (event)=>{
	if (event.key == 'r'){
		location.reload();
	}

	
})
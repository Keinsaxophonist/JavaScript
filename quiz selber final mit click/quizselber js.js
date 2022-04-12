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

 startbutton.addEventListener('click', startGame);
 
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
	nextbutton.onclick = function (){
		eval('question'+currentQuestionIndex+'()');
	}
	console.log(currentQuestionIndex);
	//console.log(question);
	
}

function question1 (){
	const questionone = ["Wie heiss ist die Sonne?"];
	questionContainerElement.innerHTML=questionone[0];
	answer1.innerText="2000°C";
	answer2.innerText="5500°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	nextbutton.classList.add('hide');
	answer1.onclick = function(){
		currentQuestionIndex ++
		nextquestion();
		alert('Falsch!')
		};
	answer2.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Richtig!')
		};
		console.log(currentQuestionIndex);
		//console.log(question);

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
	answer1.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		
		alert('Falsch!')};
	answer2.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		
		alert('Richtig!')};
	
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
	answer2.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Falsch!')};
	answer1.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Richtig!')};
		console.log(question);
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
	answer1.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Falsch!')};
	answer2.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Richtig!')};
		//console.log(question);
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
	answer1.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Falsch!')};
	answer2.onclick = function(){
		currentQuestionIndex ++;
		nextquestion();
		alert('Richtig!')};
}

function question6 (){
	const questionsix = ["Thx 4 gayming"];
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
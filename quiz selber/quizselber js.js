const startbutton = document.getElementById('startbutton');
const nextbutton = document.getElementById('nextbutton');
const header = document.getElementById('header');
const questionContainerElement = document.getElementById('question-container');
const answer1 = document.getElementById('answer1');
const answer2 = document.getElementById('answer2');

const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answerbuttons');
//const questionone = ["Wie heiß ist die Sonne?"];
//const questiontwo = ["Wieviele Monde hat die Erde?"];
currentQuestionIndex = 2;
var question = 'question'+currentQuestionIndex;
var index = currentQuestionIndex;


/*var questions = {
    question1: function() { },
    question2: function() { },
    question3: function() { },
	question4: function() { },
};*/


 startbutton.addEventListener('click', startGame);
 //nextbutton.addEventListener('click', nextquestion);
 
function startGame(){
	console.log('started');
	startbutton.classList.add('hide');
	header.classList.add('hide');
	questionContainerElement.classList.remove('hide');
	question1();
	//questionContainerElement.innerHTML=questionone[0];
	//answers();
	console.log(question);
}


function nextquestion (){
	nextbutton.classList.remove('hide');
	console.log('nextquestion')
		console.log(question);
	nextbutton.onclick = function (){
		eval('question'+index+'()');
	}
}

function question1 (){
	const questionone = ["Wie heiß ist die Sonne?"];
	questionContainerElement.innerHTML=questionone[0];
	answer1.innerText="2000°C";
	answer2.innerText="5500°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	answer1.onclick = function(){
		nextquestion();
		alert('Falsch!')
		currentQuestionIndex ++;
		};
	answer2.onclick = function(){
		nextquestion();
		alert('Richtig!')
		currentQuestionIndex ++;
		};
	console.log(currentQuestionIndex);
	console.log(question);
}

function question2 (){
	const questionsix = ["Wie heiß ist die Sonne im inneren?"];
	questionContainerElement.innerHTML=questionsix[0];
	answer1.innerText="15000°C";
	answer2.innerText="15000000°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	answer1.onclick = function(){
		nextquestion();
		alert('Falsch!')};
	answer2.onclick = function(){
		nextquestion();
		alert('Richtig!')};
	
}

function question3 (){
	const questionsix = ["Wieviele Monde hat die Erde?"];
	questionContainerElement.innerHTML=questionsix[0];
	answer1.innerText="1°C";
	answer2.innerText="2°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	answer2.onclick = function(){
		nextquestion();
		alert('Falsch!')};
	answer1.onclick = function(){
		nextquestion();
		alert('Richtig!')};
	
}

function question4 (){
	const questionsix = ["Wem gehören die "];
	questionContainerElement.innerHTML=questionsix[0];
	answer1.innerText="15000°C";
	answer2.innerText="15000000°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	answer1.onclick = function(){
		nextquestion();
		alert('Falsch!')};
	answer2.onclick = function(){
		nextquestion();
		alert('Richtig!')};
	
}

function question5 (){
	const questionsix = ["Wie heiß ist die Sonne im inneren?"];
	questionContainerElement.innerHTML=questionsix[0];
	answer1.innerText="15000°C";
	answer2.innerText="15000000°C";
	answer1.classList.remove('hide');
	answer2.classList.remove('hide');
	console.log('buttons');
	console.log(currentQuestionIndex);
	answer1.onclick = function(){
		nextquestion();
		alert('Falsch!')};
	answer2.onclick = function(){
		nextquestion();
		alert('Richtig!')};
	
}
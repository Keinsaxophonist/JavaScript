const startbutton = document.getElementById('startbutton');
const nextbutton = document.getElementById('nextbutton');
const header = document.getElementById('header');
const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answerbuttons');
const questionone = ["test eins"];

 startbutton.addEventListener('click', startGame);
  nextbutton.addEventListener('click', nextquestion);
 
function startGame(){
	console.log('started');
	startbutton.classList.add('hide');
	header.classList.add('hide');
	questionContainerElement.classList.remove('hide');
	questionContainerElement.innerHTML=questionone[0];
}

const startbutton = document.getElementById('startbutton')
const nextbutton = document.getElementById('nextbutton')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answerbuttons')
let shuffledQuestions, currentQuestionIndex
var question = 'question'+currentQuestionIndex;


startbutton.addEventListener('click', startGame)
nextbutton.addEventListener('click', () => {
	currentQuestionIndex++
	setNextquestion()
	
})

function startGame(){
	console.log('started')
	startButton.classList.add('hide')
	shuffledQuestions = questions.sort(() => Math.random() - 0.5)
	currentQuestionIndex = 0
	question-containerElement.classList.remove('hide')
	setNextquestion()
	console.log(question);
}

function setNextquestion(){
	resetState()
	showQuestion(shuffledQuestions[currentQuestionIndex])
	
}

function showQuestion(question){
	questionElement.innerText = question..question
	questions.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innertext = answer.text
		button.classList.add('button')
		if (answer.correct){
			button.dataset.correct = answer.correct
		}
		button.addEventListener('click', selectAnswer)
		answerButtonElement.appendChild(button)
	})
}

function resetState(){
	clearStatusClass(document.body)
	nextbutton.classList.add('hide')
	while (answerButtonElement.firstChild){
		answerButtonElement.removeChild(answerButtonElement.firstChild)
	}
	
	
}

function selectAnswer (e) {
	const selectedButton = e.target
	cons correct = selectedButton.dataset.corrrect
	setStatusClass(document.body, correct)
	Array.from(answerButtonElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
		
	})
	if (shuffledQuestions.length > currentQuestionIndex + 1){
	nextbutton.classList.remove('hide')
	}else  {
		startButton.innerText = 'Restart'
		startbutton.classList.remove('hide')
	}	
}

function setStatusClass(element, correct){
	
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else{
		element.classList.add('wrong')
	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')
}



const questions = [
{
	
	questio: 'Wie heiss ist die Sonne'
	answer: [
	{text: '5.500C', correct: true},
	{text: '12.000C', correct: false}
	
	
	]



}
]
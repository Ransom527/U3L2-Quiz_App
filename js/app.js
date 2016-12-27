//JS Code

var numberCorrect = 0;
var onQuestion = 0;
var Questions =[ {
	Question:'What was the development codename for the Nintendo Gamecube?',
	Choices:['Swordfish','Dolphin','Rhino','Panther'],
	Answer:function(value){
		if(!value)
			return 'Dolphin'
		return 'Dolphin' == value;
	}
},
{
	Question:'The infamous "Konami Code" first appeared in which game?',
	Choices:['Contra','Gradius','Mega Zone','Sidewinder'],
	Answer:function(value){
		if(!value)
			return 'Gradius'
		return 'Gradius' == value;
	}
}
	// Need more question objects?
]


function gameStart() {
	renderQuestion(Questions[onQuestion]);
	$("#question-box").removeClass('hidden');
	$("#start").addClass('hidden');
}


function renderQuestion(data) {
	console.log(data, 'data')
	$('#Question').text(data.Question);
	$('#Answer0').text(data.Choices[0]);
	$('#Answer1').text(data.Choices[1]);
	$('#Answer2').text(data.Choices[2]);
	$('#Answer3').text(data.Choices[3]);
}


function checkChecked(value) {
	return document.getElementById(value).checked;
}


function onSubmit() {
	event.preventDefault();
	var choice
	console.log('sumbit')
	console.log(checkChecked('Option0'))
	console.log(onQuestion, 'onQuestion #1')
	if(checkChecked('Option0')){
		choice = Questions[onQuestion].Choices[0];
		console.log(choice)
		console.log(Questions[onQuestion].Answer(choice));
	}
		if(checkChecked('Option1')){
		choice = Questions[onQuestion].Choices[1];
		console.log(choice)
		console.log(Questions[onQuestion].Answer(choice));
	}
		if(checkChecked('Option2')){
		choice = Questions[onQuestion].Choices[2];
		console.log(choice)
		console.log(Questions[onQuestion].Answer(choice));
	}
		if(checkChecked('Option3')){
		choice = Questions[onQuestion].Choices[3];
		console.log(choice)
		console.log(Questions[onQuestion].Answer(choice));
	}
	if(Questions[onQuestion].Answer(choice)) {
		numberCorrect++
	}
	else {
		console.log(Questions[onQuestion].Answer())
		$('#answer-box').text(Questions[onQuestion].Answer());
	}
	onQuestion += 1;
	console.log(onQuestion, 'onQuestion')
	$("#Submit").addClass('hidden');
//	$("#next-question").removeClass('hidden');
	console.log(numberCorrect, 'Number Correct')

	if(onQuestion == Questions.length) {

		console.log('game over')
	}
	else {
		$("#next-question").removeClass('hidden');
	}
	//if onQuestion value == (last question +1)

}


function nextQuestion() {
	event.preventDefault();
	//uncheck functoin
	$("#next-question").addClass('hidden');
	$("#Submit").removeClass('hidden');
	renderQuestion(Questions[onQuestion])
}

//uncheck answer function

function checkAnswer() {

}

//add html element for numbercorrect and onquestion

function newGame(){

}

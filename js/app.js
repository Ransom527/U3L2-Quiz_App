//JS Code
var State = {
	numberCorrect: 0,
	onQuestion: 0,
	Questions: [
{
	Question:'What was the development codename for the Nintendo Gamecube?',
	Choices:['Swordfish','Dolphin','Rhino','Panther'],
	Answer: 'Dolphin'
},
{
	Question:'The infamous "Konami Code" first appeared in which game?',
	Choices:['Contra','Sidewinder','Mega Zone','Gradius'],
	Answer: 'Gradius'
},
{
	Question:'Nintendo of America is the majority owner of which sports team?',
	Choices:['San Francisco Giants','Seattle Seahawks','Seattle Mariners','Chicago Cubs'],
	Answer: 'Seattle Mariners'
},
{
	Question:'Hyundai released the Nintedo 64 in South Korea under a different name due to import restrictions, what was it called?',
	Choices:['Ultra 64','Comboy 64','iQue Player','Famicom'],
	Answer: 'Comboy 64'
},
{
	Question:'What was the name of the eagerly awaited add-on for the Nintedo 64, only realeased in Japan?',
	Choices:['N64 DD','iQue Player','Satellaview','Ultra 64'],
	Answer: 'N64 DD'
},
{
	Question:'What was the name of the most expesive video game platform ever released?',
	Choices:['3DO','Neo Geo AES','Phillips CD-i','Pioneer LaserActive'],
	Answer: 'Pioneer LaserActive'
},
{
	Question:'What was the name of the camera peripheral for the Sega Dreamcast, only released in Japan?',
	Choices:['DreamSnap','SegaCam','Dreameye','WebCast'],
	Answer: 'Dreameye'
}]
};


//state management, use single object
//state.Questions[i].Question
//refactor Answer: 




//consolidate both
function gameStart() {
	renderQuestion(State.Questions[State.onQuestion]);
	$("#question-box").removeClass('hidden');
	$("#start").addClass('hidden');
}
////

function newGame() {
	State.onQuestion = 0;
	State.numberCorrect = 0;
	renderQuestion(State.Questions[State.onQuestion]);
	$("#answer-box").text('');
	$('.selections').prop('checked', false);
	$("#question-box").removeClass('hidden');
	$("#Submit").removeClass('hidden');
	$("#new-game").addClass('hidden');
}

//loop through array and output answers
function renderQuestion(data) {
	console.log(data, 'data')
	$('#Question').text(data.Question);
	$('#Answer0').text(data.Choices[0]);//.value(data.Choices[0]);
	$('#Answer1').text(data.Choices[1]);
	$('#Answer2').text(data.Choices[2]);
	$('#Answer3').text(data.Choices[3]);
	$('#on-question').text(State.onQuestion);
	$('#number-correct').text(State.numberCorrect);
}
//.attr

//refactor
function onSubmit() {
	event.preventDefault();
	var choice
	console.log($("input:radio[name='Answers']"));
	if(State.Questions[State.onQuestion].Answer === $("input:radio[name='Answers']:checked").text()) {
		State.numberCorrect++
	}
	else {
		$('#answer-box').text(State.Questions[State.onQuestion].Answer);
	}
	State.onQuestion += 1;
	$("#Submit").addClass('hidden');
	if(State.onQuestion == State.Questions.length) {
		gameOver();
		$("#new-game").removeClass('hidden');
		$("#question-box").addClass('hidden');
		console.log('game over')
	}
	else {
		$("#next-question").removeClass('hidden');
	}
}

//use jquery
function checkChecked(value) {
	return document.getElementById(value).checked;
	//Returns selected answer
}

//combine with submit, use alert box for answer
//lookup function called timout for alert persistence
function nextQuestion() {
	event.preventDefault();
	$('.selections').prop('checked', false);
	$("#next-question").addClass('hidden');
	$("#Submit").removeClass('hidden');
	$("#answer-box").text('');
	renderQuestion(State.Questions[State.onQuestion])
}


function gameOver() {
	$("#game-over-div").removeClass('hidden');
}


function checkAnswer() {
//
}



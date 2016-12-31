//JS Code

//state management, use single object
//state.Questions[i].Question
//refactor Answer: 
var numberCorrect = 0;
var onQuestion = 0;
var Questions =[
{
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
	Choices:['Contra','Sidewinder','Mega Zone','Gradius'],
	Answer:function(value){
		if(!value)
			return 'Gradius'
		return 'Gradius' == value;
	}
},
{
	Question:'Nintendo of America is the majority owner of which sports team?',
	Choices:['San Francisco Giants','Seattle Seahawks','Seattle Mariners','Chicago Cubs'],
	Answer:function(value){
		if(!value)
			return 'Seattle Mariners'
		return 'Seattle Mariners' == value;
	}
},
{
	Question:'Hyundai released the Nintedo 64 in South Korea under a different name due to import restrictions, what was it called?',
	Choices:['Ultra 64','Comboy 64','iQue Player','Famicom'],
	Answer:function(value){
		if(!value)
			return 'Comboy 64'
		return 'Comboy 64' == value;
	}
},
{
	Question:'What was the name of the eagerly awaited add-on for the Nintedo 64, only realeased in Japan?',
	Choices:['N64 DD','iQue Player','Satellaview','Ultra 64'],
	Answer:function(value){
		if(!value)
			return 'N64 DD'
		return 'N64 DD' == value;
	}
},
{
	Question:'What was the name of the most expesive video game platform ever released?',
	Choices:['3DO','Neo Geo AES','Phillips CD-i','Pioneer LaserActive'],
	Answer:function(value){
		if(!value)
			return 'Pioneer LaserActive'
		return 'Pioneer LaserActive' == value;
	}
},
{
	//updated
	Question:'What was the name of the camera peripheral for the Sega Dreamcast, only released in Japan?',
	Choices:['DreamSnap','SegaCam','Dreameye','WebCast'],
	Answer: function(value){
		if(!value) {
			return 'Dreameye'
		}
		return 'Dreameye' == value;
	}
}
]



//consolidate both
function gameStart() {
	renderQuestion(Questions[onQuestion]);
	$("#question-box").removeClass('hidden');
	$("#start").addClass('hidden');
}


function newGame() {
	onQuestion = 0;
	numberCorrect = 0;
	renderQuestion(Questions[onQuestion]);
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
	$('#Answer0').text(data.Choices[0]);
	$('#Answer1').text(data.Choices[1]);
	$('#Answer2').text(data.Choices[2]);
	$('#Answer3').text(data.Choices[3]);
	$('#on-question').text(onQuestion);
	$('#number-correct').text(numberCorrect);
}

//refactor
function onSubmit() {
	event.preventDefault();
	var choice
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
	console.log(numberCorrect, 'Number Correct')
	$("#Submit").addClass('hidden');
	if(onQuestion == Questions.length) {
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
	//$("input:radio[name='r']:checked").val()
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
	renderQuestion(Questions[onQuestion])
}


function gameOver() {
	//define actions for 'game over'
}


function checkAnswer() {
//
}



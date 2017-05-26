


loadGame();


//When crystal is clicked add value to js-current-score
$('.js-crystal-red').click(function(){
	var currentScore = parseInt($('.js-current-score').text());
	currentScore = currentScore + parseInt($('.js-crystal-red').attr('value'));
	$('.js-current-score').text(currentScore);
	scoreChecker();
})
$('.js-crystal-blue').click(function(){
	var currentScore = parseInt($('.js-current-score').text());
	currentScore = currentScore + parseInt($('.js-crystal-blue').attr('value'));
	$('.js-current-score').text(currentScore);
	scoreChecker();
})
$('.js-crystal-yellow').click(function(){
	var currentScore = parseInt($('.js-current-score').text());
	currentScore = currentScore + parseInt($('.js-crystal-yellow').attr('value'));
	$('.js-current-score').text(currentScore);
	scoreChecker();
})
$('.js-crystal-green').click(function(){
	var currentScore = parseInt($('.js-current-score').text());
	currentScore = currentScore + parseInt($('.js-crystal-green').attr('value'));
	$('.js-current-score').text(currentScore);
	scoreChecker();
})


//check to see if the value is exceeded.
function scoreChecker() {
	var currentScore = parseInt($('.js-current-score').text());
	var numberToGuess = parseInt($('.js-match-value').text());
	if (currentScore === numberToGuess){
		//add to number of wins
		var winCount = parseInt($('.js-win').text());
		winCount = winCount + 1;
		$('.js-win').text(winCount);
		//reset game
		loadGame()
	}else if (currentScore > numberToGuess){
		//add to number of losses
		var lossCount = parseInt($('.js-loss').text());
		lossCount = lossCount + 1;
		$('.js-loss').text(lossCount);
		//reset game
		loadGame()
	}
}


function loadGame() {
	//Create random number between 19 -120
	var numberToGuess = Math.floor(Math.random()*101)+ 19;
	//display random number in js-current-score div
	$('.js-match-value').text(numberToGuess);
	//set js-current-score to 0
	$('.js-current-score').text('0');

	//create random number and apply that number to each crystal
	$('.js-crystal-red').attr('value', Math.ceil(Math.random()*12));
	$('.js-crystal-blue').attr('value', Math.ceil(Math.random()*12));
	$('.js-crystal-yellow').attr('value', Math.ceil(Math.random()*12));
	$('.js-crystal-green').attr('value', Math.ceil(Math.random()*12));

}
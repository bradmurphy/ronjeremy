var ronJeremyGame = (function () {

	var public = {};

	// GAME 

	function game() {

		var gameStatus = true;	

		$("#next").click(function() {

			if (gameStatus) {
				$("#needle").addClass("needle-animation");
				$("#challenge-wrap").removeClass("bounceOutUp");
				$("#challenge-wrap").removeClass("bounceInDown");
				$("#challenge-wrap").addClass("animated bounceInDown");
				var randomCopy = gameData[Math.floor(Math.random()*gameData.length)];
				document.getElementById('challenge').innerHTML = "challenge #" + randomCopy; 
				gameStatus = false;
			} else {
				$("#challenge-wrap").removeClass("bounceInDown");
				$("#challenge-wrap").addClass("bounceOutUp");

				setTimeout(stopClock, 800);
				setTimeout(dropClock, 1000);
			}

			function stopClock() {
				$("#needle").removeClass("needle-animation");
			}

			function dropClock() {
				$("#needle").addClass("needle-animation");
				$("#challenge-wrap").removeClass("bounceOutUp");
				$("#challenge-wrap").addClass("animated bounceInDown");
				var randomCopy = gameData[Math.floor(Math.random()*gameData.length)];
				document.getElementById('challenge').innerHTML = "challenge #" + randomCopy; 
			}

		});

	}

	// INIT FUNCTION

	function init() {

		// CALL INIT FUNCTIONS

		game();

	}

	// PUBLIC FUNCTIONS

	public.init = init;
	// public.game = game;

	// RETURN PUBLIC

	return public;

}());

$(document).ready(function() {

	// CALL PROTECTED SCRIPTS

	ronJeremyGame.init();

});

// PRELOADER WINDOW LOADING EVENT

$(window).load(function() {

	$(".spinner").delay(1500).fadeOut(500);

	function loadContent() {
		$("#game").fadeIn(500).addClass("opacity");
	}
	
	setTimeout(loadContent, 2000);

});


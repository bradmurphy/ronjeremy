var ronJeremyGame = (function () {

	var public = {};

	// GAME 

	function game() {

		// make page stuff work
		$(".page").hide().first().show();

		$(".page a.pagelink").on("click", function(e) {
			e.preventDefault();

			var newPageID = $(this).attr("href").replace("#", "");
			changePage(newPageID);
		});

		var location = "";

		$("#where-bar").on("click", function() {
			location = "bar";
		});

		$("#where-friends").on("click", function() {
			location = "friends";
		});

		function changePage(pageName) {
			window.scrollTo(0,0);
			$(".page:visible").fadeOut();
			$(".page#"+pageName).delay(400).fadeIn();
			$(".page#"+pageName).trigger("showing");
		};

		$(".page#gameplay").on("showing", function() {

			var randIndex = Math.floor(Math.random() * challenges[location].length);
			var challenge = challenges[location][randIndex];
			$("#needle").addClass("needle-animation");
			document.getElementById("action-shot").style.backgroundImage = "url('"+challenge.filename+"')";
			$("#challenge-desc").html(challenge.challengeDescription);
			// change challenge image and description on gameplay page to match data in *challenge*
			// change challenge title on social page to match data in *challenge*

			setTimeout(function() {
				changePage("outoftime");
				$("#challenge-name").html(challenge.challengeName);
			}, 31000);

		});

		var gameStatus = true;	

		// $("#next").click(function() {

		// 	if (gameStatus) {
		// 		$("#needle").addClass("needle-animation");
		// 		$("#challenge-wrap").removeClass("bounceOutUp");
		// 		$("#challenge-wrap").removeClass("bounceInDown");
		// 		$("#challenge-wrap").addClass("animated bounceInDown");
		// 		var randomCopy = gameData[Math.floor(Math.random()*gameData.length)];
		// 		document.getElementById('challenge').innerHTML = "challenge #" + randomCopy; 
		// 		gameStatus = false;
		// 	} else {
		// 		$("#challenge-wrap").removeClass("bounceInDown");
		// 		$("#challenge-wrap").addClass("bounceOutUp");

		// 		setTimeout(stopClock, 800);
		// 		setTimeout(dropClock, 1000);
		// 	}

		// 	function stopClock() {
		// 		$("#needle").removeClass("needle-animation");
		// 	}

		// 	function dropClock() {
		// 		$("#needle").addClass("needle-animation");
		// 		$("#challenge-wrap").removeClass("bounceOutUp");
		// 		$("#challenge-wrap").addClass("animated bounceInDown");
		// 		var randomCopy = gameData[Math.floor(Math.random()*gameData.length)];
		// 		document.getElementById('challenge').innerHTML = "challenge #" + randomCopy; 
		// 	}

		// });



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

	$(".overlay").delay(2500).fadeOut(500);

});


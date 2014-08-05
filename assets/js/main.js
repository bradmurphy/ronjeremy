var ronJeremy = (function () {

	var public = {};

	// AGE VERIFY FUNCTION

	function ageVerify() {

		// DATE INPUT FIELDS

		var monthInput = $("#month");
		var dayInput = $("#day");
		var yearInput = $("#year");	 

		// CHARACTER LIMIT FUNCTION

		function characterLimit(param) {

			if (param != yearInput) {
				param[0].oninput = function () {
				    if (this.value.length > 2) {
				        this.value = this.value.slice(0,2); 
				    }
				};
				param[0].oninput();
			} else {
				param[0].oninput = function () {
				    if (this.value.length > 4) {
				        this.value = this.value.slice(0,4); 
				    }
				};
				param[0].oninput();
			}
			
		}

		// CALL CHARACTER LIMIT FUNCTIONS

		characterLimit(monthInput);
		characterLimit(dayInput);
		characterLimit(yearInput);


		// AGE-VERIFY SUBMISSION EVENT

		$("#age-verify").submit(function(e) {

			e.preventDefault();
			
			var day = $("#day").val();
			var month = $("#month").val();
			var year = $("#year").val();
			var age = 21;

			if (day === "" || month === "" || year === "") {
				alert("Please enter your date of birth.");
				return false;
			}

			var userDate = new Date();
			userDate.setFullYear(year, month-1, day-1);

			var currentDate = new Date();
			currentDate.setFullYear(currentDate.getFullYear() - age);

			if ((currentDate - userDate) < 0) {
				alert ("Sorry only persons over the age of " + age + " may enter this site.");
				return false;
			} else {
				$("#age-container").addClass("pinned");
				window.scrollTo(0,0);
				setTimeout(function() {
					$("#age-container").remove();
				}, 1200);
				return true;
			}

		});

	}

	// INIT FUNCTION

	function init() {

		// CALL INIT FUNCTIONS

		ageVerify();

		// SCROLL IT PLUGIN

		$.scrollIt();

		//BXSLIDER PLUGIN

		$('.about').bxSlider({
			pager: false,
			infiniteLoop: false,
			hideControlOnEnd: true,
			touchEnabled: true
		});

		$('.social').bxSlider({
			pager: false,
			infiniteLoop: false,
			hideControlOnEnd: true,
			touchEnabled: true
		});

		$('.drinks').bxSlider({
			touchEnabled: true,
			pager: true,
			controls: false,
		    buildPager: function(slideIndex){
		      switch (slideIndex){
		        case 0:
		          return '<img src="assets/img/drink1.png" class="drink-thumb" alt="Drink 1">';
		        case 1:
		          return '<img src="assets/img/drink2.png" class="drink-thumb" alt="Drink 2">';
		        case 2:
		          return '<img src="assets/img/drink3.png" class="drink-thumb" alt="Drink 3">';
		        case 3:
		          return '<img src="assets/img/drink4.png" class="drink-thumb" alt="Drink 4">';
		        case 4:
		          return '<img src="assets/img/drink5.png" class="drink-thumb" alt="Drink 5">';
		        case 5:
		          return '<img src="assets/img/drink6.png" class="drink-thumb" alt="Drink 6">';
		      }
		    }
		});

		// WAYPOINTS

		$.waypoints('refresh');

		// ANIMATE H2

		$("h2").waypoint(function() {
			$("h2").removeClass("flickerText");
			setTimeout(function() {$("h2").addClass("flickerText");}, 50);
		}, { offset: 200 });

		// ANIMATE H1

		$("h1").waypoint(function() {
			$("h1").removeClass("flickerText");
			setTimeout(function() {$("h1").addClass("flickerText");}, 50);
		}, { offset: 200 });

		// ABOUT AND DRINK FADE INS

		// $(".about-bg").waypoint(function() {
		// 	$(this).animate({
		// 		opacity: 1;
		// 	}, 5000);
		// }, { offset: '20%' });

		// $(".drinks-bg").waypoint(function() {
		// 	$(this).fadeIn("slow", function() { 
		// 		$(this).addClass("opacity");
		// 	});
		// }, { offset: '20%' });

		// CAROUSEL ANIMATIONS

		var aboutContainer = document.getElementById("#about");
		var slide = aboutContainer.style.webkitTransform;
		var slideVariant;

		var pagerLink = $(".bx-pager-link");
		console.log(pagerLink[0]);

		// PAGER TEXT ANIMATION

		$(".bx-pager-link").on("click", function() {
				
			if (this) {

				$("h2").removeClass("flickerText");	
				setTimeout(function() {
					$("h2").addClass("flickerText");
				}, 50);

			}

		});

		// NEXT BUTTON ANIMATION

		$("a.bx-next").on("click", function() {

			slideVariant = aboutContainer.style.webkitTransform;
			console.log(slideVariant);
			if (slide != slideVariant) {
				console.log("Animate Shit Right");

				// TEXT FLICKER

				$("h1").removeClass("flickerText");	
				setTimeout(function() {
					$("h1").addClass("flickerText");
				}, 50);

			}

		});

		// PREVIOUS BUTTON ANIMATION

		$("a.bx-prev").on("click", function() {

			slideVariant = aboutContainer.style.webkitTransform;

			if (slide != slideVariant) {
				console.log("Animate Shit Left");

				// TEXT FLICKER

				$("h1").removeClass("flickerText");	
				setTimeout(function() {
					$("h1").addClass("flickerText");
				}, 50);

			}

		});

	}

	// PUBLIC FUNCTIONS

	public.init = init;
	// public.game = game;
	// public.ageVerify = ageVerify;

	// RETURN PUBLIC

	return public;

}());

$(document).ready(function() {

	// CALL PROTECTED SCRIPTS

	ronJeremy.init();

});

// PRELOADER WINDOW LOADING EVENT

$(window).load(function() {

	$(".spinner").delay(1500).fadeOut(500);

	function loadContent() {
		$("#main").fadeIn(500).addClass("opacity");
	}
	
	function loadAge() {
		$("#age-container").fadeIn(500).addClass("opacity");
	}

	setTimeout(loadAge, 2000);
	setTimeout(loadContent, 2500);

});


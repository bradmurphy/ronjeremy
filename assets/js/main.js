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
				$("#homescreen-logo").addClass("big-logo-animation");
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

		// MENU HOVER

		// $("#sunButton").mouseover(function() {
		// 	$(this).css("background", "url(assets/img/menu-hover.png)");
		// });

		// $("#sunButton").mouseout(function() {
		// 	$(this).css("background", "url(assets/img/menu.png)");
		// });

		// MENU FUNCTIONALITY

		var menuStatus = true;

		$("#sunButton").on("click", function() {

			$(".main-nav").toggleClass("down");
			if (menuStatus) {
				$(this).css("background", "url(assets/img/menu-hover.png)");
				menuStatus = false;
			} else {
				$(this).css("background", "url(assets/img/menu.png)");
				menuStatus = true;
			}
			
		});

		$(".main-nav ul li a").on("click", function() {

			$(".main-nav").removeClass("down");
			$("#sunButton").css("background", "url(assets/img/menu.png)");
			menuStatus = true;

		});

		$("#homescreen-logo").on("click", function() {

			$(".main-nav").removeClass("down");
			$("#sunButton").css("background", "url(assets/img/menu.png)");
			menuStatus = true;

		});

		$("#homescreen-logo-mobile").on("click", function() {

			$(".main-nav").removeClass("down");
			$("#sunButton").css("background", "url(assets/img/menu.png)");
			menuStatus = true;

		});

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
			infiniteLoop: false,
			hideControlOnEnd: true,
			pager: true,
		    buildPager: function(slideIndex){
		      switch (slideIndex){
		        case 0:
		          return '<img src="assets/img/drink1.png" class="drink-thumb" alt="Drink 1">';
		        case 1:
		          return '<img src="assets/img/drink2.png" class="drink-thumb" alt="Drink 2">';
		        case 2:
		          return '<img src="assets/img/drink4.png" class="drink-thumb" alt="Drink 3">';
		        case 3:
		          return '<img src="assets/img/drink3.png" class="drink-thumb" alt="Drink 4">';
		        case 4:
		          return '<img src="assets/img/drink5.png" class="drink-thumb" alt="Drink 5">';
		        case 5:
		          return '<img src="assets/img/drink6.png" class="drink-thumb" alt="Drink 6">';
		      }
		    }
		});

		// WAYPOINTS

		$.waypoints('refresh');

		// MAIN MENU POPUP

		$("#sunButton").waypoint(function() {
			$(this).attr("class", "menu-button menu-fixed");
		}, { offset: '25%' });

		// ANIMATE H2

		$("h2").waypoint(function() {
			$("h2").removeClass("flickerText");
			setTimeout(function() {$("h2").addClass("flickerText");}, 50);
		}, { offset: '25%' });

		// ANIMATE H1

		$("h1").waypoint(function() {
			$("h1").removeClass("flickerText");
			setTimeout(function() {$("h1").addClass("flickerText");}, 50);
		}, { offset: '25%' });

		// CAROUSEL ANIMATIONS

		var pagerLink = $(".bx-pager-link");

		// PAGER TEXT ANIMATION

		$(".bx-pager-link").on("click", function() {
				
			if (this) {

				$("h2").removeClass("flickerText");	
				setTimeout(function() {
					$("h2").addClass("flickerText");
				}, 50);

			}

		});

		// CAROUSEL VARIABLES

		var aboutContainer = document.getElementById("#about");
		var aboutSlide = aboutContainer.style.webkitTransform;
		var socialContainer = document.getElementById("#social");
		var socialSlide = socialContainer.style.webkitTransform;
		var slideVariant;

		// ABOUT NEXT BUTTON ANIMATION

		$("a.bx-next").on("click", function() {

			slideVariant = aboutContainer.style.webkitTransform;

			if (aboutSlide != slideVariant) {

				// FLICKER ICON 1

				$(".newYork path").attr("class", "");	
				setTimeout(function() {
					$(".newYork path").attr("class", "flickerIcon1");
				}, 50);

				// FLICKER ICON 2

				$(".education path").attr("class", "");	
				setTimeout(function() {
					$(".education path").attr("class", "flickerIcon2");
				}, 50);

				// FLICKER ICON 3

				$(".teacher path").attr("class", "");	
				setTimeout(function() {
					$(".teacher path").attr("class", "flickerIcon3");
				}, 50);

				// FLICKER ICON 4

				$(".playboy path").attr("class", "");	
				setTimeout(function() {
					$(".playboy path").attr("class", "flickerIcon4");
				}, 50);

				// TEXT FLICKER H1

				$("h1").removeClass("flickerText");	
				setTimeout(function() {
					$("h1").addClass("flickerText");
				}, 50);

				// TEXT FLICKER H2

				$("h2").removeClass("flickerText");	
				setTimeout(function() {
					$("h2").addClass("flickerText");
				}, 100);

			}

		});

		// ABOUT PREVIOUS BUTTON ANIMATION

		$("a.bx-prev").on("click", function() {

			slideVariant = aboutContainer.style.webkitTransform;

			if (aboutSlide != slideVariant) {

				// FLICKER ICON 1

				$(".newYork path").attr("class", "");	
				setTimeout(function() {
					$(".newYork path").attr("class", "flickerIcon1");
				}, 50);

				// FLICKER ICON 2

				$(".education path").attr("class", "");	
				setTimeout(function() {
					$(".education path").attr("class", "flickerIcon2");
				}, 50);

				// FLICKER ICON 3

				$(".teacher path").attr("class", "");	
				setTimeout(function() {
					$(".teacher path").attr("class", "flickerIcon3");
				}, 50);

				// FLICKER ICON 4

				$(".playboy path").attr("class", "");	
				setTimeout(function() {
					$(".playboy path").attr("class", "flickerIcon4");
				}, 50);

				// TEXT FLICKER H1

				$("h1").removeClass("flickerText");	
				setTimeout(function() {
					$("h1").addClass("flickerText");
				}, 50);

			}

		});

		// SOCIAL NEXT ANIMATION

		$("a.bx-next").on("click", function() {

			slideVariant = socialContainer.style.webkitTransform;

			if (socialSlide != slideVariant) {

				// TEXT FLICKER H2

				$("h2").removeClass("flickerText");	
				setTimeout(function() {
					$("h2").addClass("flickerText");
				}, 50);

			}

		});

		// SOCIAL NEXT ANIMATION

		$("a.bx-prev").on("click", function() {

			slideVariant = socialContainer.style.webkitTransform;

			if (socialSlide != slideVariant) {

				// TEXT FLICKER H2

				$("h2").removeClass("flickerText");	
				setTimeout(function() {
					$("h2").addClass("flickerText");
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

	// $(".age-verification").hide();
	// $(".overlay").hide();
	
	ronJeremy.init();

});

// PRELOADER WINDOW LOADING EVENT

$(window).load(function() {

	$(".overlay").delay(2500).fadeOut(500);

});


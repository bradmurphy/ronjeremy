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
				return true;
			}

		});

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		ageVerify();

	}

	// PUBLIC FUNCTIONS
	public.init = init;
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
		$(".main").addClass("opacity");
	}
	
	function loadAge() {
		$("#age-container").addClass("opacity");
		setTimeout(loadContent, 1000);
	}

	setTimeout(loadAge, 2000);

});




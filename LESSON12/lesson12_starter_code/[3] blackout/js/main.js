// Together: write pseudo code
// Objective: we want to change the background color when we click on the light switch


/*

1) we wan to select the light switch or "button" and add an event listener to it for when the button is clicked.

2) what is the current background color? Does the body tag have a class of dark on it?

3) If there's a class of dark, remove it. If there's not, add it.

*/


$("#light_switch").on("click", function(){

	// console.log("it works!");

	if($("body").hasClass("dark")) {

		// console.log("has dark class!");

		$("body").removeClass("dark");

	}else {

		$("body").addClass("dark");

	}

});


// Hint: for your condition, you'll need to look up and use the .hasClass() method. You'll want to use this as part of your condition.

// Hint #2: Refer to the syntax on the cheat sheet. The entire condition gets wrapped in parentheses. (your condition goes here)

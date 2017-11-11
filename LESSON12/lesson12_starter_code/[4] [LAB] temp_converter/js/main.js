// When the user clicks on #fahrenheit_to_celsius
$('#fahrenheit_to_celsius').on('click', function () {

	// Get the value of #temperature
	var temperature = $('#temperature').val();

	temperature = parseFloat(temperature);

	// $('#fahrenheit_to_celsius').on('click', function () {

	  temperature = (fahrenheit - 32) / 1.8;

	  $('#result').html(temperature);

	// });

});


// $('#fahrenheit_to_celsius').on('click', function (){
// 	// Get the users value
// 	var temp = $('#temperature').val();
// 	// parseFloat to make it a number we can work with
// 	temp = parseFloat(temp);
// 	// do the math provided in the slide
// 	result = (temp - 32) / 1.8;
// 	// output the result to the page
// 	$("#result").html(result);
// });

// $('#celsius_to_fahrenheit').on('click', function (){
// 	// Get the users value
// 	var temp = $('#temperature').val();
// 	// parseFloat to make it a number we can work with
// 	temp = parseFloat(temp);
// 	// do the math provided in the slide
// 	result = 1.8 * celsius + 32;
// 	// output the result to the page
// 	$("#result").html(result);
// });
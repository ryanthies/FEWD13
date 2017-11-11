$("#fahrenheit_to_celsius").on("click", function(){

	result = (getTemp(); - 32) / 1.8;

	$("#result").html(result);

});


$("#celsius_to_fahrenheit").on("click", function(){

	result = 1.8 * getTemp(); + 32;

	$("#result").html(result);

});


function getTemp(){
	temp = $("#temperature").val();
	temp = parseFloat(temp);

}


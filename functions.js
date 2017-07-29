console.log("in functions.js");

console.log(cutUpInput);
var outputNumber = cutUpInput(5);
console.log(outputNumber);



function nuggetFactory (animalInput) {
	// chickens are cut up
	cutUpInput(animalInput);
	// chickens are separated into chunks
	// take the chunks and fry them
	// package the nuggets
}

function cutUpInput (input) {
	var output = input * 20;
	return output;

}
// Function Declarations
var summation;
var constant = 40;

function doesAddition (number1, number2) {
summation = number1 + number2 + constant;
}

doesAddition(2, 3);
console.log(summation);
// saving a function definition to a variable

console.log(additonAction(4, 9));
var additonAction = function(first, seccond) {
	return first + second;

}
console.log(additonAction(4, 9));
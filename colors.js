
// make the list into an array
// sort that array alpahbetically
// loop through the array and log to the console the statements:
//"The color at _index number_is_ color name_
// create a variable with the string list of colors
var colors = "chartreuse, navy, forest green, aqua, purple, frost, emerald, international-rescue orange, seafoam green, firehouse red";
// make the list into an array

var array = colors.split(",")

array.sort();
console.log(array);
// sort that array alpahbetically
console.log(array.sort());
// loop through the array and log to the console the statements:
for (var i = 0; i < array.length; i++){
	console.log("The color at " + i + " is " +array[i]);
}

///Looping Exercise

//Write a for loop that uses a counter variable initialized at 5 and then increments it by 10 every time it executes. Use console.log() to output the value of the counter variable each time through the loop. Stop execution of the loop if the counter variable’s value is greater than 120.

for (var i = 5; i <= 120; i = i + 10){     
	console.log("current value", i); 
}
console.log("Finish with the for loop.");
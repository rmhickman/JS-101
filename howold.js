console.log("linked")

// 1. How many hours are in a year
var hoursInADay = 24;
var daysInAYear = 365;
var minutesInAHour = 60;
console.log(hoursInADay * daysInAYear);




// How many minutes are in a decade
var yearsInDecade = 10;
console.log("minutes in decade:" , yearsInDecade * daysInAYear * hoursInADay * minutesInAHour);


// How many seconds old they are
var secondsInMinute = 60;
var ageOfYoda = 43;
var ageInSeconds = ageOfYoda * daysInAYear * hoursInADay * minutesInAHour * secondsInMinute
console.log("How old Yoda is in seconds:" , ageInSeconds);


// If they are older than some arbitrary number, console "I'm old", else "I'm young"

if (ageInSeconds > 9) {
	console.log("I'm old!");
} else {
	console.log("I'm young!");
}
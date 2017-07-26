/// how to define an object
// objects are contained in {}
var x = "humidity"

var weather = {
	currentTemp: 82,
	isRaining: false,
	humidity: "too much",
	'is-sunny': true // no comma for the last property
};

console.log(weather);
// assigning a property to an object
weather.location = "Nashville";
weather['zipCode'] = 37212;
console.log(weather);

console.log(weather.isRaining);
console.log(weather['is-sunny']);

console.log("humidity", weather[x]);
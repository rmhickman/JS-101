console.log("in arrays");

// arrays hold organized info

var pokemon = "charmander";

var array = [43 , "string" , null , "car" , {}, pokemon];

console.log(array[5]);
array[33] = "apple";
console.log(array.length);

// Array Methods

console.log(array.indexOf("car"));

array.push("cat");
console.log(array);

array.pop();
console.log(array);

array.unshift("zoe is cool");

array.shift();
console.log(array);

var newString = array.join("|")
console.log(newString);
console.log(typeof newString);

array = newString.split("|");
console.log(array);

var sentence = "http://www.meetup.com/";
console.log(sentence.split("/"));
console.log(sentence.split(""));

var newArray = ["dog", "cat", "pig", "hippo"];
var numberArray = [3, 6, 92, 55, 8];

console.log(newArray.reverse());

console.log(newArray.sort());
console.log(numberArray.sort());

console.log(newArray);
var result = newArray.slice(1, 3);
console.log(result);

console.log(numberArray);
var result = numberArray.splice(3, 1);
console.log(numberArray);
console.log(result);

// FOR LOOPS

newArray = ["dog", "cat", "pig", "hippo"];

for(var i = 0;i < newArray.length; i++){
	debugger;
	console.log("I'm at index " + i);
	console.log(newArray[i]);
}















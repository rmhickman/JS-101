console.log("I'm in main.js");

console.log(42);

var string = ""
var number = 89;
var boolean = true;
var nullvalue = null; //typically provided this value intentionally
var undefvalue; //usually undefined because some sort of logic needs to be re-arranged.
var objvalue = {};
// console.log

var numberOfInstructors = 0;

numberOfInstructors = numberOfInstructors + 2;
//is the same as
numberOfInstructors += 2;

console.log(numberOfInstructors);

// operator are used to manipulate or change values

// Math Operators

var summation = 2 + 3;
var sub = 4 - 1;
var multipication = 2 * 3;
var divide = 7 / 2;
var modulus = 7 % 2;
 console.log(modulus);

 // Equality Operators

 // == // values are equal
 console.log("4" == 4); //would be true
 console.log("4" === 4); //would be false
 //
 //!=// values are not equal
 //!==// values are not strictly equal

 // relational operators
 // > < <= >= 
 console.log("we think this should be true", 8 > 2);
 console.log("we think this is false", "a" > "z");
 console.log("we think this is true", 8 >= 8);

 // Logical Operators 
 // && (and)
 // || (or)
 // ! (NOT)

 var num = 2;
 console.log(!num);// this is false
 var zero = 0;
 console.log(!zero); // this is true
// Conditional Logic
 var zoeIsCool = true;
 var callanIsCool = true;

 if (zoeIsCool && callanIsCool){
 	console.log("students are happy");
 } else if (zoeIsCool || callanIsCool){
 	console.log("something else");
 } else {
 	console.log("nope!")
 }



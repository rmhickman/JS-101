console.log("I'm in second.js");
// concatanation
var perry = "penquin";
var nellie = "owl";

console.log( "Perry is a " + perry);

var quote = "this is my quote";

var numberOfCharacters = quote.length;
console.log("length of quote" , numberOfCharacters);

// Built in Methods
//.indexof()
//.chartAt()
//.replace()


// FIRST QUOTE
console.log(quote.indexOf("my")); // will give the index of the beginning of the string( first counter)
console.log(quote.charAt(0)); // will give the character at the specified index
console.log(quote.replace(/my/g, "robots"));


//SECOND QUOTE
 var element = document.getElementById("secondQuote"); // reading from HTML
 var jsString = element.innerHTML;
 console.log(jsString);


var sonnet = document.getElementById("sonnet");// Take the contents of the sonnet div and place it in a variable.

console.log("sonnet");
var jsString = sonnet.innerHTML;
console.log("jsString");//Take the contents of the sonnet div and place it in a variable.

console.log(jsString.indexOf("orphans"));// Find and output the starting position of the word "orphans".
console.log(jsString.length)//Output the number of characters in the sonnet.
console.log(jsString.replace("winter", "yuletide"));//Replace the first occurance of the string "winter" with "yuletide".

console.log(jsString.replace(/the/g, "a large")); //Replace all occurances of the string "the" with "a large".

document.getElementById("sonnet").innerHTML = jsString; //Set the content of the sonnet div with the new string.


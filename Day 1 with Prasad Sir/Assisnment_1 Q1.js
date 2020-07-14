/*Q!. Explain various methods in console function
Answer: */

/* The console.log() is a function that writes a message to log on the debugging console, such as Webkit or Firebug. In a browser you will not see anything on the screen. It logs a message to a debugging console.*/
console.log("Hey there! I am an external JS.") 

//The console.time() method starts a timer in the console view.
console.time('Time taken'); //time starts

/*The console.error() method writes an error message to the console.
The console is useful for testing purposes.*/
console.error("An error occured!!")

//The console.warn() method writes a warning to the console.
console.warn("This is a warning.")

/*The console.table() method writes a table in the console view.
The first parameter is required, and must be either an object, or an array, containing data to fill the table. */
var a = {name:"Simeen", age:"18", city:"Mumbai"}
var b = {name:"Alia", age:"18", city:"Mumbai"}
var c = {name:"Zain", age:"18", city:"Mumbai"}

//console.log({a,b,c});
console.table({a,b,c});

//%c - customized messages, css code
console.log('%c Custom messages','color:blue')

//The console.timeEnd() method ends a timer, and writes the result in the console view.
console.timeEnd('Time taken') //time ends
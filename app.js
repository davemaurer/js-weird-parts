// When you run a JS file, a global object is always created for you, even if you have no code to run. The global object for a
// file that runs in the browser is Window object. "This" is also created for you. "This" is a special variable the JS engine makes
// for you. In a file with no code, "this" is Window.


// objects in JavaScript are just sets of name(key)/value pairs

// execution context is the wrapper that the JS engine creates when it executes JS code. The base execution context is
// always the global context, and it creates the global object and 'this'. An execution context is created for you when
// running a JavaScript file even if you have no code at all in your JS file.

// Global in JS means "not inside a function"

// Hoisting in JS is when the JS engine allocates memory space for functions and variables declared inside the file being
// executed. With functions, the entire function is loaded into memory. With variables declared outside of functions, only
// the variables themselves are hoisted, not the values assigned to them. Values are not assigned to variables until the JS
// engine executes that line of code where the variable is assigned.

// Hoisting happens during the first phase of the JS engine's execution context setup. This is the CREATION phase, during which
// memory is allocated for the functions and variables that will be used when the code is actually executed line by line.

// There are TWO phases to the JS engine's execution context creation: 1. the CREATION phase, and 2. the EXECUTION phase.

// During the CREATION phase of the execution context setup, multiple things happen. 1. The Global Object is created. 2. "this"
// is assigned in memory (to the global object to start out.). 3. The Outer Environment is created (if the current context is global,
// the outer environment is set to null, since there is nothing outside the global object.) 4. Memory space is reserved for all
// variables and functions in the file and required by the file being run.

// During the EXECUTION phase, JS code is executed line by line, values are assigned to variables as their lines are executed.

// Undefined in JS is an actual value that indicates the receiver of the value has been declared, but has no normal value
// assigned to it yet. This is not the same as 'not defined', which means the receiver has not been declared yet.

// In the code below, the variable a will be assigned the value 'undefined' during the CREATION phase, and assigned the
// value "Hello World!" during the EXECUTION phase.
var a = "Hello World!";

function b(word) {
  console.log(word)
};

console.log(a);

// In the code below, when index.html is opened and runs this file, the console will log a ReferenceError: a is not defined,
// because a has not been declared as a variable.
function b(word) {
  console.log(word)
};

console.log(a);


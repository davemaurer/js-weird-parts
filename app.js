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

// Single threaded means that ONE command can be executed at a time. JS is single threaded, even though a browser may
// be doing more than just running JS commands. The browser may have multiple threads going, but JS is single threaded.

// JS is also synchronous, meaning only one line of code can be executed at a time, (in order in JS).

// So in JS one line is executed at a time and one command is executed at a time.

// When you run the code below, a global execution context happens, the functions are loaded into memory, and the code is
// executed line by line. As JS invokes functions, an execution context is created for each running function, and these
// contexts are placed on a CALL STACK. Then all of the things on the call stack are executed in order. Functions are added to the
// call stack in order of invocation, NOT in order of when they appear lexically in the file. Each time a function on the
// stack calls another function, that new function is added to the top of the stack and starts executing. Functions are popped
// off of the call stack (execution stack) as they finish executing.

// In the code below, a global execution context is created, then the JS engine evaluates each line of code, one at a time.
// When it gets to the function invocation(call) a();, a new execution context is created for that function, and is added to the
// call stack, on top of the global context. It then executes function a, and gets to the invocation for b();. A new context is
// then created for the execution of function b, and it goes on top of the call stack. After function b finishes running, it is
// popped off of the call stack, and function a continues to run. Then when it's finished, it is popped off of the call stack, and
// we are left with our global context, so the JS engine keeps going down the file.
function a() {
  b();
  var c;
}

function b() {
  var d;
}

a();
var d;

// variable environment refers to the place a variable is stored in memory. Every execution context has it's own variable
// environment, so a variable named the same thing in three different functions can have a different value three different
// times while in memory. Each execution context is it's own separate memory parking space. Example: In the code below you
// would see 1, 2, and undefined printed to the console in that order.
function b() {
  var myVar;
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar);
  b();
}

var myVar  = 1;
console.log(myVar);
a();

// in the example below, the OUTER ENVIRONMENT comes into play. The outer environment is the lexical environment, so
// when the JS engine needs to go searching for a variable that is not defined, it refers to the lexical scope. The only
// variable that is declared outside of a function here is var myVar = 1, so it is the outer environment variable found.
// If function b had been declared inside of function a, myVar would equal 2. In the code below, both function b's and
// function a's outer reference is the global context, and myVar = 1 was declared in the global context.
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  b();
}

var myVar = 1;
a();

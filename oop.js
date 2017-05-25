// In OOP a class(object) can inherit data and attributes from another class(object).
// The class inheriting is referred to as the child class.
// The class inherited from is the parent class.

// When calling a function/method on an object, the JS engine looks for the function inside the
// object, then goes up the parent chain if it can't initially find the function.

// Objects in JS can contain attributes. These attributes are made up of key/value pairs. To
// retrieve the value for an attribute, you can use either bracket notation or dot notation.

// You can create a JS object with literal notation, where you set all attributes and values when assigning
// it, or you can use a constructor.

var dave = new Object;

dave.name = "dave";

// You can make your own constructor with present attributes for an object.

function Person(age, profession) {
  this.age = age;
  this.profession = profession;
}

var dave = new Person(48, 'Observer');
dave.age //=> 48

// You can define your own methods on an object you create, but it's better to use prototypes and
// define the function on the prototype itself.

Person.prototype.upperCaseName = function() {
  console.log(this.name.toUpperCase());
};

// You define new attributes on a prototype by using dot or bracket notation and the assignment operator.

Person.prototype.job = "job goes here";

// You CANNOT let a constructor accept new arguments using this method. You would have to re-define your
// constructor (prototype) at that point.

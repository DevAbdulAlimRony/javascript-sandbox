// Object: Multiple Properties need to Define a Object. Like a Person have multiple properties: height, weight, body type etc.
// Noun/Adjective - Variable in Procedural- Property in OOP (person.height, person.weight)
// Verb - Function in Procedural - Method in OOP (person.play, person,walk, person.song)
// Class is a factory to create multiple objects without code duplication. Ex- One Form Template without Data to Create All Student's Filled Form
// Four Pillars of OOP- Abstraction (Hide Implementation), Encapsulation (Property Method Binding), Inheritence, Polymorphism
// Abstraction: Handle Complexity by Hiding Unnecessary Details for Users(Class).
// Encapsulation: Bundling Data and Methods that works on that Data within one unit/object
// Inheritence: Mechanism where you can inherit a class from another class.
// Polymorphism: Method Overriding, OverLoading etc.

// Rect Object Literal
var rect = {
  // Properties
  width: 100,
  height: 60,

  // Methods
  draw: function () {
    console.log(this); // Refer rect object
    this.print();
  },

  // ES6 standardly method write
  print() {
    console.log(this.width);
    console.log(this.height);
  },
};

// Outside Call- rect.width;
rect.draw();

// Changing Property from Outside
rect.width = 200;

//About 'this': In an object method, this refers to the object. Alone, this refers to the global object. In a function, this refers to the global object.
function globalThis() {
  console.log(this);
}
globalThis(); // Output: Window Object. Because everything is in object in js
new globalThis(); //Output: Return an Empty Object

// We can change value of Properties in another Object
var triangle = {
  width: 10,
  height: 5,
  printTri: rect.print(),
};
console.log(triangle.printTri); // Output: width 10, height 5

//  Creating Class and Make Objects, but javascript have no class
// But we can solve this by factory or constructor pattern

// Factory Pattern: Define the Object in a Function
var createRect = function (width, height) {
  return {
    width: width,
    height: height,

    draw: function () {
      console.log("Test Factory");
    },
    print: function () {
      console.log(this.width);
    },
  };
};
var rect1 = createRect(10, 8);
rect1.print();

var rect2 = createRect(1, 2);
rect2.print();

// Constructor Pattern: The Constructor Function Naming Should be Capital, No need any comma, everything should have this
var Rect = function (width, height) {
  this.width = width;
  this.height = height;

  this.draw = function () {
    console.log("Test Factory");
  };
  this.print = function () {
    console.log(this.width);
  };
};
var rect3 = new Rect(10, 8); // Must need new keyword, if not used this.width etc will refer to window object. new keyword will create empty object
rect3.draw();

// Constructor Property: Refrence of the Function in which Object created
rect1.constructor; // refer direct object (factory pattern)
rect3.constructor; // refer function in which construct (constructor pattern)

// Calling constructor
var objStr = new String("objStr");
console.log("normal string" + objStr);

// Except primitive data, everything is objcet in js, even functions are object in js
// Checking if Function is a Object
function testFunctionIsObject() {
  console.log("I am an object");
}
typeof testFunctionIsObject(); // Output: Function
testFunctionIsObject().constructor; // Output: f Function {native code} - obejct proved

// Important methods of Function Object
function myFunc(c, d) {
  console.log(this.a + this.b);
}
myFunc(); // Output: NaN, because this refers to windows object
// But, we can define which object to refer, bind execution context
myFunc.call({}); // We provide empty object
myFunc.call({ a: 20, b: 10 }, 10, 5); // c and d extra argument, instant call
myFunc.apply({ a: 20, b: 10 }, [10, 5]); // instant call. same output, just take arguments in array
myFunc.bind({ a: 2, b: 1 }, 5, 5); // Dont instant call, Just Bind the Object
// To Call
var callMyFuncBind = myFunc.bind({ a: 2, b: 1 }, 5, 5);
callMyFuncBind(); // or callMyFuncBind(5, 5); no need c,d define in .bind now

// Pass/call By Value , Pass/call By Reference
var n = 10;
function change(n) {
  n = n + 10; // created a clone of n, not original n (pass by value)
  console.log(n);
}
change(n); // Output: 20
console.log(n); // Output: 10- Premitive Data, Didnt Change the Value
var objData = {
  a: 10,
  b: 20,
};
function changeObj(obj) {
  obj.a = obj.a + 100;
  console.log(obj.a);
}
changeObj(objData); // Output: 110
console.log(objData.a); // Output: 110, changed the value (pass by reference)
// So, primitive data cannot be changed inside a function, but object can be changed
// Object in Javascript is a Mutable Object. If we change object in any function, everywhere where we used that object will change

// Abstraction (Others language use- public protected private)
var AbstrctTest = function (width, height) {
  this.width = width;
  this.height = height;
  this.position1 = {
    x: 56,
    y: 77,
  };

  var position2 = {
    x: 56,
    y: 77,
  };
  // Position1 is public, but position2 will be private because of its scope in function

  var printProperties = function () {
    console.log(width); // Not this.width, beacuse it is in var
  };

  // or, this way
  var printProperties2 = function () {
    console.log(this.width);
  }.bind(this);

  // But if we want the access of that abstracted property position ?
  this.getPosition = function () {
    return position;
  };

  // or, Another Solution to Access Private (Getter Setter)
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value; // we can check condition also here
    },
  });
}; // Just width and height is accessible from object of this Class

var rect7 = new AbstractTest(1, 2);
console.log(rect7.getPosition()); // Accessed Private Property
// When we Use defineProperty
rect7.position = {
  x: 456,
  y: 2,
};
console.log(rect7.position);

// Inheritence
// Protoype: Just a Parent Class
// obj.__proto__ === obj2.__proto__; // Checking Same Prototype, __proto__ is deprecated, just for test
Object.getPrototypeOf(obj) === Object.getPrototypeOf(obj2);
// If we create an array, it is actually inherited from Array prototype where all methods are defined and this prototype came from Object prototype
// Same for Our string -> String -> Object (Multi Level Inheritence/Prototyping)

// Property Descriptor (set if property just readable or writable etc)
var person = {
  name: "Abdul Alim",
};
var descriptor = Object.getOwnPropertyDescriptor(person, "name"); // checking property descriptor
console.log(descriptor); //Output: configurabe: true, enumerable: true, value: 'Abdul Alim , writable: true.
// Writable means, we can override from outside. Configurable (if removable from outside),enumerable (Viewable when Iterate)
let baseObj = Object.getPrototypeOf(person); // person.__proto__
let descriptor2 = Object.getOwnPropertyDescriptor(baseObj, "toString");
console.log(descriptor2); // enumurable: false, so we cant remove toString method from Outside

// Setting Property Descriptor
Object.defineProperty(person, "name", {
  enumerable: false,
  writable: false,
  configurable: false,
  value: "Not Changable Name",
});

// Constructor Prototype
function Person(name) {
  this.name = name;
}
Person.prototype.PI = 3.1416;
var p1 = new Person("AAR"); // eery object's prototype will get PI as like as constructor called when object call
// Ex: Array.prototype.myMethod = function () {} - we added myMethod in array constructor, now we can use that method in any of our array

// Ex
function Square(width) {
  this.width = width;
  // We didnt configure draw() here
  // We can call this.draw() here
}
Square.prototype = {
  draw: function () {
    // we can call this.width here
    console.log("Draw");
  },
};
var sqr1 = new Square(10);
var sqr2 = new Square(5); // Now, when we call obj, dont copy draw method again and again, in memory we have just one draw() method in constructor
sqr1.draw();
// width is instance member, draw is prototype member

// Check Property: obj.hasOwnProperty('width')
// check instance: Object.keys(obj),
// check instance and prototype: for (var i in obj) { } - i is key here

// Custom Prototypical Inheritence Example
function Shape(color) {
  this.color = color;
}
Shape.prototype = {
  common: function () {
    console.log("Common Method");
  },
};

function Square2(width) {
  Shape.call(this, color); // Getting Property of Shape (super call)
  this.width = width;
}
Square2.prototype = Object.create(Shape.prototype); // prototype reset
Square2.prototype.constructor = Square2; // Constructor Reseting
//Now  Extend
Square2.prototype.draw = function () {
  console.log("Drawing");
};
var sqr = new Square(45, "green");

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
// But when we are extending in Square2 and Circle, same code duplication is happenning
// So, we can create a common extends function at first
function extend(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
} // Now, we can use this function
extend(Shape, Circle);

// Method Overriding
Circle.prototype.common = function () {
  Shape.prototype.common.call(this); // common method call
  console.log("Calling from Circle"); // method changed
};

// Polymorphism: We are overriding method, so it is giving different outputs from different class instance, that's the polymorphism
// Check object's class: sqr instanceof Square - output: true or false

// Inheritence and Composition Mixin
var canWalk = {
  walk: function () {
    console.log("Walking...");
  },
};
var canEat = {
  eat: function () {
    console.log("Eating...");
  },
};
var person = Object.assign({}, canWalk, canEat); // Concat Eat and Walk in Empty Object
console.log(person);

// or, this approach
function Person(name) {
  this.name = name;
}
Object.assign(Person.prototype, canWalk, canEat);

// or,
function mixin(target, ...sources) {
  // ...sources rest operator fist take all args as array then again in assign when we spread it it divides into objects (ES6)
  Object.assign(target, ...sources);
}
mixin(Person.prototype, canWalk, canEat);
var person1 = new Person("A");
console.log(person);

//*== OOP in ES6 == //

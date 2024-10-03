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

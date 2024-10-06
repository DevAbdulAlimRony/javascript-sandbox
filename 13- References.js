/*== 1. Array ==*/

// Creating New Array Object
var names = ["A", "B", "E", "F"]; // using array literal, clear and preferred way, shorthand of new Array(), do the same thing
var names2 = new Array("C", "D"); // using Array constructor
var names3 = new Array(3); // Array of length 3, [ , , ], just this difference with []
var names4 = new Array(["A", "B"]); // Output: [["A", "B"]]

// Array Methods
names.constructor; // Output: function Array() { [native code] }
names.at(1); // Output: B. It returned 1 indexed value
var newNames = names.concat(names2); // Output: New Array After Joining those Two
names.copyWithin(2, 0); // Replace Index 2 Value by Index 0 Value, ES6 Feature, Not Supported in IE

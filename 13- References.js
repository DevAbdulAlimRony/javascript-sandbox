/*== 1. Array ==*/

// Creating New Array Object
var names = ["A", "B", "E", "F"]; // using array literal, clear and preferred way, shorthand of new Array(), do the same thing
var names2 = new Array("C", "D"); // using Array constructor
var names3 = new Array(3); // Array of length 3, [ , , ], just this difference with []
var names4 = new Array(["A", "B"]); // Output: [["A", "B"]]
var ages = [1, 2, 3, 19, 22];
let multiArray = [
  [1, 2],
  [3, 4],
];
const products = [
  { name: "Laptop", price: 999.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Tablet", price: 299.99 },
  { name: "Headphones", price: 199.99 },
];
Array.from("ABEF"); // Create an Array from String- ["A", "B", "E", "F"]

// Array Methods
names.constructor; // Output: function Array() { [native code] }
names.at(1); // Output: B. It returned 1 indexed value
var newNames = names.concat(names2); // Output: New Array After Joining those Two
names.copyWithin(2, 0); // Replace Index 2 Value by Index 0 Value, ES6 Feature, Not Supported in IE
names.entries(); // Output: [1, "A".. Convert Array to Iteratable Object in Key Value Pair, not support in IE

// every() method: check if all values in array pass a function test
function testEvery(name) {
  return name == "A";
}
names.every(testEvery); // Output: false

names.fill("G"); // Replace all value of original array by G
names.fill("G", 2, 3); // Replace index 2 to index 3 only

// filter method: Filtered based on Condition and Return
const adults = ages.filter((age) => age >= 18); // Output: 19, 22

// find() method works like filter(), but it return only first element which passed the test
const adults2 = ages.find((age) => age >= 18); // Output: 19
// findIndex() return first matched index
// findLast() returns last matched, findLastIndex()
multiArray.flat(); // Output: 1, 2, 3, 4

//flatMap(): map an array and flatten it
const newNames = names.flatMap((name) => name + "A"); // Output: [AA BA ...

// forEach(): run a function on each element of array
products.forEach((product) => {
  console.log(`${product.name} : ${product.price}`);
});

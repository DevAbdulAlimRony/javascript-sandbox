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
Array.of("A", "B", "C"); // Creates array with any type of provided arguments

// Array Checking
Array.isArray(names); // Checking if the object is an Array

// Array Properties
names.constructor; // Output: function Array() { [native code] }
names.length; // Length of the Array
Array.prototype.upperCase = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};
names.upperCase(); // Array.prototype includes new methods and properties in array object

// Array Methods
names.includes("A"); // Outout: true. The includes() method returns true if an array contains a specified value.
names.indexOf("A"); // Returns the first index (position) of a specified value.
names.indexOf("A", 2); // Start Checking from Index 2
// lastIndexOf
names.at(1); // Output: B. It returned value of index 1
var newNames = names.concat(names2); // Output: New Array After Joining those Two
names.copyWithin(2, 0); // Replace Index 2 Value by Index 0 Value, ES6 Feature, Not Supported in IE
names.fill("G"); // Replace all value of original array by G
names.fill("G", 2, 3); // Replace index 2 to index 3 only
names.join(); // Returns an Array as String. Output: A,B,E,F
names.join(" and"); // Output: A and B and E and F
names.reverse(); // Reverse the Array, Overwrites the original array
names.toReversed(); // Return new Reversed Array, dont Overwrite the original array
//The toString() method returns a string with array values separated by commas.
names.toString();
names.entries(); // Output: [1, "A".. Convert Array to Iteratable Object in Key Value Pair, not support in IE
// values() method returns an Iterator object with the values of an array, not supported in IE
names.valueOf(); // Returns the Array itself, copied version, not overwrite

// Element Add Remove
names.unshift("Rbal"); // Add one or multiple element at first
names.push("Abal"); // Add one or multiple element at last
names.shift(); // Removes First Element
names.pop(); // Removes last Element

// Slicing
names.slice(1, 2); // Returns selected elements in an array, as a new array.
names.slice(-2, -1);

// The splice() method adds and/or removes array elements, overwrites
// splice(index- where to add or remove, count - number of items to remove, item1...)
names.splice(2, 0, "L", "K"); // ad L and K at position 2
names.splice(2, 2); // At position 2, remove 2 items
// toSpliced: new Array, dont overwrite
// ES2023 added the Array with() method as a safe way to update elements in an array without altering the original array.
const updatedNames = names.with(2, "Abdullah");

// Sorting (closure parameter is optional)
names.sort(); // Overwrites original array sorted in alphabetical and ascending
// Sorting numbers can produce incorrect results. "25" is bigger than "100", because "2" is bigger than "1".
// to sort descending: first sort(), then reverse()
ages.sort((a, b) => a - b); // sort number in ascending perfectly, for descending: b-a
// toSorted(): sort in a new array, not overwrite

// every() method: check if all values in array pass a function test
function testEvery(name) {
  return name == "A";
}
names.every(testEvery); // Output: false

// some() method checks if any array elements pass a test
names.some(testEvery);

// filter method: Filtered based on Condition and Return
const adults = ages.filter((age) => age >= 18); // Output: 19, 22

// find() method works like filter(), but it return only first element which passed the test
const adults2 = ages.find((age) => age >= 18); // Output: 19
// findIndex() return first matched index
// findLast() returns last matched, findLastIndex()
multiArray.flat(); // Output: 1, 2, 3, 4

// Map() method creates a new array from calling a function for every array element.
let newAges = ages.map((age) => age * 2);

//flatMap(): map an array and flatten it
const newNames = names.flatMap((name) => name + "A"); // Output: [AA BA ...
// Use flatMap() when you expect the mapping operation to return arrays or nested arrays and you want to flatten the result into a single array.

// forEach(): run a function on each element of array
products.forEach((product) => {
  console.log(`${product.name} : ${product.price}`);
});

// key() method Create an Array Iterator object, containing the keys of the array
for (let key of products.key()) {
  console.log(`${key} : ${products[key].price}`);
}

// Reduce array in a Single Element
var total = ages.reduce(function (prevValue, currentValue) {
  return prevValue + currentValue;
}, 0);
// reduceRight() : right to left

/*== 2. String ==*/

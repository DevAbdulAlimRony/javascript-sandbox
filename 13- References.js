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
let str1 = "Abdul ";
let str2 = "   Alim";
str1.constructor; // ES1 Feature, output: function String() { [native code] }
str1.length; // Length Property
let charFromUnicode = String.fromCharCode(72, 69, 67); // Converts Unicode values to characters
// String.fromCharCode Static method of the String object
// The prototype property allows you to add new properties and methods to strings.
// The prototype is a property available with all JavaScript objects.

str1.at(0); // Character at Index
str1.startsWith("Abdul"); // Output: true
// charAt(), charCodeAt()- Unicode of Indexed Character, codePointAt()
str1.indexOf("A"); // First Occurance Index of A
// lastIndexOf
str1.concat(str2); // Joins two or more strings an return a new
str1.concat(" ", str2);
str2.endsWidth("Alim"); // true
str2.endsWidth("alim"); // false
str1.includes("Abdul"); // Output: true, ES6 feature
str1.match("ab"); // Output: ab. if not found, null. Do a Serach for ab (first occurance)
str1.match(/ab/); // Search by Regular Expression
str1.match(/ab/g); // global search, output all ab found (all occurance)
str1.match(/ab/gi); // global case insensitive search
str1.search("Abdul"); // or, /Abdul/ or, /Abdul/i (case insensitive). If not found, return -1
// saerch returns index of matched, match returns array of matched values
str1.localeCompare(str2); // 0 if equal, 1 if first one sorted before, -1 if second one sorted after
str2.repeat(2); //  Output: Alim Alim. ES6 Featue, dont change original
let newStr2 = str2.replace("Alim", "Halim"); // Replace a First Occurance of Specified String, new string
let newStr3 = str2.replace(/Alim/g, "Dalim"); //  All occurance of Alim Replaced (global replace)
// replaceAll (replace all occurance)- ES21 feature

// Adding Pad
let padded = str1.padEnd(6, "-"); //str1 length must be 6, so we added - at last to make it length of 6: Abdul -
// padStart
// split(), splite()
str1.substr(1, 4); // Slice from index 1 to index 4
str1.substr(2); // From Position 2s. Does not change original array
str1.substring(1, 4); // Slice Index 1 to Length 4
// toLowerCase(), toLocaleLowerCase(), toUpperCase()
// toString(): The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML)
str1.trim(); // remove whitespace from left and right side, dont change original array
// trimStart(), trimEnd()
str1.valueOf(); // Return primitive vlue of a string, from object to primitive value
// date1.valueOf() < date2.valueOf(): comparing timestamps easily

/*== 3. Number ==*/

// Prpertirs of Method
let num1 = 134.5;
let num2 = 5.56789;
let num3 = 1000000;
num1.constructor; // Returns the function that created the Number prototype
// num1.constructor === Number, str.constructor === String, arr.constructor === Array : Checking
// Number.EPSILON in JavaScript represents the smallest difference between two numbers that can still be considered distinct from one another.
// Real Life Example: Comparing Floating-Point Numbers for Perfect Equality so that Calculation is perfect
let originalPrice = 100.0;
let discount = 0.1; // 10% discount
let targetPrice = 90.0;
let calculatedPrice = originalPrice * (1 - discount);
// Due to Floating Point prcesion, calculatedPrice and targetPrice will not equal. Solution:
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON; // static property
}
isEqual(calculatedPrice, targetPrice);
Number.MAX_SAFE_INTEGER; // 9007199254740991
Number.MIN_SAFE_INTEGER; // -9007199254740991
Number.MAX_VALUE; // 1.7976931348623157e+308
Number.MIN_VALUE; // 5e-324
Number.NaN; // ES1 Feature. Output: NaN
Number.NEGATIVE_INFINITY; // -Infinity
Number.POSITIVE_INFINITY; // Infinity
Number.prototype; // prototype allows you to add new properties and methods to numbers.

// Static Methods of Number
Number.isFinite(num1); // Output: true. If  num1 is finite and legal number. If it is other data type, it will return false. // Not Supported in IE
Number.isInteger(num1); // Output: true. ES6 Feature. Not Supported in ES6
Number.isNaN("a"); // false
Number.isNaN(0 / 0); // true
Number.isSafeInteger(num1); // true
Number.isSafeInteger(0.5); // fase
Number.isSafeInteger(-infinity); // false, ES6 Feature
// A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number: all integers from (253 - 1) to -(253 - 1).
Number.parseFloat(num1); // Parses a value as a string and returns the first number.
Number.parseFloat("34 45 66"); // Output: 34
Number.parseFloat("40H"); // Output: 40
// If the first character cannot be converted, NaN is returned.. Ex: H40
Number.parseInt("10.00"); // Output: 10, arses a value as a string and returns the first integer.

// Instance Methods for Number Object
num1.toExponential(); // Output: 1.345e+2
num2.toFixed(); // Output: 6. Converts a number to a string, rounded to a specified number of decimals
num2.toFixed(2); // Output: 5.56
num2.toFixed(2); // Output: 5.5678900000
num3.toLocaleString(); // Output: 1,000,000
num3.toLocaleString("en-US", { style: "currency", currency: "USD" }); // Output: $1,000,000.00, ES3 Feature
// The toLocaleString() returns a number as a string, using local language format. Depends on Locale setup of computer.
num2.toPrecision(2); // Output: 5.0056789- added 2 precision after point
num2.toString(); // Convert number to string
num2.toString(2); // Convert to Binary. Octal: 8, Hexa: 16
num2.valueOf(); // Primitive Value of Number. If we create number by new Number() etc

/*== 3. Math ==*/
Math.E; // Euler's Number: 2.718281828459045
Math.LN2; // Natural logarithm of 2, 0.6931471805599453
Math.LN10; // 2.302585092994046
Math.PI; // 3.141592653589793
Math.SQRT1_2; // square root of 1/2: 0.7071067811865476
Math.SQRT1_2; // square root of 2: 1.4142135623730951
// LOG2E, LOG10E

Math.abs(-7.25); // Output: 7.25. If null, will return 0
// acosh(), asin(), asinh(), atan(), atan2(), atanh(), cos(), cosh(), clz32(), exp(), expm1(), sin(), sinh(), tan(), tanh()
Math.cbrt(125); // Output: 5, cubit root of a number. ES6 Feature
Math.ceil(0.6); // Output: 1
Math.floor(0.6); // Output: 0
Math.fround(2.6); // 2.5999999046325684
Math.round(2.5); // Output: 3
Math.log(2); // Returns the natural logarithm (base E) of a number.
// log10, log1p, log2
Math.max(0, 150, 30, 20, 38); // 150, Math.min()
Math.sqrt(4); // Output: 2
Math.pow(4, 3); // 64
Math.random() * 10; // Random frm 0 to 10
Math.sign(-3); // Output: -1. Positive: 1, Negative: -1, Zero: 0
Math.trunc(8.76); // Output: 8. Return Integer part of a Number

/*== 4. Object ==*/
const person1 = {
  firstName: "Abdul",
  lastName: "Alim",
  age: 25,
};
const person2 = { firstName: "Abul", lastName: "Bolod" };
person1.constructor;
person1.prototype;
Object.keys(person2);
Object.values(person2);
Object.assign(person1, person2); // person1: firstName: Abul,lastName: Smith,age:25. Assign Property to Another Object
const newPerson = Object.create(person1); // Copied person1 to newPerson. Now, newPerson is another object. ES5 Feature
Object.defineProperties(person1, {
  department: { value: "it" },
}); // Add New Property or Change Existing Property in an Object
// defineProperty()
Object.entries(person2); // Convert Object into an Iterable Array
Object.freeze(person2); // Cant Change the object Anymore. In non strict mode, fail siletnly. In strict mode, throw error
Object.isFrozen(person2); // Check if Object freezed
Object.preventExtensions(person2); // Cant add new Property Value
Object.isExtensible(person2); // Check if Extensib
Object.seal(person2); // Prevents additions or deletions of new properties.
Object.isSeal(person2);
Object.fromEntries(arr1); // Convert aray into Object
// Object.getOwnPropertyDescriptor(), getOwnPropertyDescriptors, getOwnPropertyNames
Object.groupBy(person1, customCallback());

person2.toString(); // Convert Object to String. If cant, it returns [Object Object]
person2.valueOf();

/*== 4. Date ==*/
const time = new Date(); // Date constructor creates a new Date Object (ISO Notion), ES1 Feature
const time2 = new Date("2015-03-25"); // Output: Wed Mar 25 2015 06:00:00 GMT+0600 (Bangladesh Standard Time)
// We can also pass milliseconds
// new Date(year, month, day, hours, minutes, seconds, milliseconds)

// Properties
time.constructor; // function Date() { [native code] }, object
// We can use + , - , > , < on multiple dates normally (js will automatically do it as milliseconds)
time.prototype;

// Instance Methods
time.getDate(); // Date Portion, Output-Ex: 14 (Return Value: Number)
time.setDate(15); // Now, Date is Changed in time var, It will shhow 15
time.getDay(); // Day of the Var, For Saturday- we will get 0 and so on
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
weekday[time.getDay()]; // Output Ex: Sunday
time.getMonth(); // Output Ex: 3. January = 0 and so on. We can use array of months like weeks determining
time.setMonth(11); // Also take day as second optional. (0 - 11).
// for month: -1 will be last month of the previous year , 12 will first month of next year and so on. Also same for Date
time.getFullYear(); // Output Ex: 2024 (Return Value: Number)
time.setFullYear(2020);
time.setFullYear(2020, 10, 3); // setFullYear() can also set month and day.
time.getHours(); // Output Ex: 9. Return 0 to 23 (Local Time Hour)
time.setHours(23);
time.setHours(23, 59, 3, 999); // setHours() can also set minutes, seconds and milliseconds.
time.setHours(time.getHours() - 24); // Set the Time 24 Hours Ago
time.getMinutes(); // Output: 0 to 59
time.setMinutes(time.getMinutes() - 60); // 60 Minutes Ago, also can take second and millisecond
time.getSeconds(); // Output: 0 to 59
time.setSeconds(35); // also can take milliseconds. -1, 60 will result in prevoius or next minute's second
time.getMilliseconds(); // Output: 0 to 999
time.setMilliseconds(55);
// time.setTime(1332403882588)
time.getTime(); // Returns the number of milliseconds since January 1, 1970 or Specified Date in new Date() constructor
// Converting from Milliseconds: minute = 1000 * 60, hour = minute * 60, day = hour * 24, year = day * 365
// seconds = t.getTime() / 1000, days = t.getTime() / (60 * 60 * 24)
// getTimezoneOffset(): difference between utc and local time in minutes

// Getting UTC: When You need timestamp is consistent no matter where user is located
// Real life Ex of UTC time: Logging Events, Schedule Task for Different Countries at Same Time, International Transactions, International Calender Events, GPS Tracking
// getUTCDate(), setUTCDate() getUTCDay() and so on.
time.toDateString(); // Readable Format: Mon Oct 14 2024, ES1 Feature
time.toISOString(); // Readable Format as ISO Standard, ES5 Feature
time.toJSON(); // Returns as string JSON Date Formatting- 2024-10-14T04:53:16.008Z
time.toLocaleDateString(); // Readable Date as Locale Convention- 10/14/2024
time.toLocaleTimeString(); // 10:56:50 AM
time.toLocaleString(); // 10/14/2024, 10:57:50 AM
time.toString(); // Mon Oct 14 2024 10:58:02 GMT+0600 (Bangladesh Standard Time)
// toTimeString(), toUTCString()
time.valueOf(); // Return primitive value of date object, same work as parse

// Staic Methods:
Date.now(); // Same as getTime() in UTC
// Date.parse(): Parses a date string and returns the time difference since January 1, 1970 or Specified Date
Date.parse("2024-10-14T10:30:00");
// Date.parse() is useful when you are working with date strings and need to convert them to milliseconds for further calculations, comparisons, or validations.
Date.UTC(); // Same as Parse, but in UTC

/*== 5. Regular Expression ==*/

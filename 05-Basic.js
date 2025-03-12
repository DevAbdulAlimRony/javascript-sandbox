//Run this code using code runner or from the command prompt- go to the directory- node fileName
//Other Basics from JS Slide
var a = 2; //Number Literal
console.log("Testing JS" + 6 + a);
var b = Number("5"); //Number Constructor
console.log(Number.parseFloat(b));
//Number.parseInt, Number.MAX_VALUE
console.log(1 / 0); //Output: Infinity
console.log("abc" * 10); //output: NaN- Not a Number
var hex = 0xff; //0x is hexadecimal
console.log(hex);
var oct = 756; //0 means octal
console.log(oct);
//String: Wrapped into single or double quote or into back tic ` or can use String constructor
//true, false, Boolean constructor
//A variable without value returns 'undefined' and null is a special type of data type that usually used as a absence of an object.
//Equality Check: == , === , object.is , same value zero algorithm(ex. check if something present in array. array[NaN]. If we run array.includes(), then we will get true)
//Check Equality table from documentation



// const: value wont change
// let: value can be changed
// var: Not recommended to use, old thing. It is scoped to a function, not in a block
// var Allows Redeclaration (Which Can Cause Bugs)
// var is Hoisted Without Initialization (Creates undefined Bugs)
// If var is declared outside a function, it becomes part of the window object, which can cause conflicts.
if (true) {
  var test = "I exist outside the block!";
}
console.log(test); // ✅ Output: "I exist outside the block!" (Bad)
if (true) {
  let test = "I am safe inside!";
}
console.log(test); // ❌ Error: test is not defined
var x = 10;
var x = 20; // ✅ No error, but can be problematic
console.log(x); // 20
let y2 = 10;
// let y = 20; // ❌ Error: Identifier 'y' has already been declared
console.log(myVar); // ✅ Output: undefined (Not an error, but confusing)
var myVar = 5;
console.log(myLet); // ❌ ReferenceError: Cannot access 'myLet' before initialization
let myLet = 5;
var name = "Alice";
console.log(window.name); // ✅ "Alice" (Bad, pollutes global scope)

//Type Conversion
str = "123"; //automatic type conversion
str2 = str + 10; //not Auto type conversion
//Number.parseInt(), str.toString(), Number(Infinity)
//Falsy Values: '', 0, -0, null, undefined, NaN (though they are not directly false value)
console.log(Boolean(0)); //output: false
console.log(typeof String);

//Math Object: Math.E, Math.PI, Math.abs(), Math.floor(), Math.ceil(), Math.round(), Math.max(), Math.min(), Math.pow(), Math.sqrt(), Math.random()

//Date Class
var date = new Date();
console.log(date.toDateString());
//toTimeString(), toLocalString(), getFullYear(), getMonth(), getDate(), getHours(), getMinutes(), getSeconds()

//String Comparisn
//'abc' < 'bcd' (first letter a and b, if they equal compare second letter)
//small letter is greater than capital letter-  'a' > 'Z'
//'001' == 1 -Returns true, string converted to number when we compare
// String is immutable, we cant change any character by its index. Array is mutable - Ex. arr[0] = 1
//String Methods: concat(), startsWith(), endsWith(), substr(), charAt(), toUpperCase(), toLowerCase(), trim(), split(' '), includes() string and array property: length

//Array
var arr1 = [1, 2, 3, 4, 5];
var arr2 = Array(1, 2, 3);
var arr3 = [
  [1, 2],
  [3, 4],
];
var mixedArray = [1, 'ok', true]; // Not Recommended for Internal Optimization
// arr.length,
//push(), pop(), shift(), unshift(), slice(), splice(), includes('item'), indexOf('item')
//Array Reverse: arr.reverse(). Do it in Raw without method
//Methods: join(), fill(), concat(), isArray(), from()

//Javascript Object
var obj1 = { a: 2 }; // object literal
delete obj1.a;
var obj2 = new Object();
//Object Methods: Object.keys(), Object.entries(), Object.values(), Object.assign()
// We can create object by object Literal, Class, new Object(), Object.create({})
// Object Iterate: for in Loop - singleData in AllData
// Property Access: obj.prop, obj['prop'], { prop } = obj, obj[prop]
// Deleting Property: delete myObject.propertyName

// All Types Loop: for, for of, while, do while, , for in [iterate over object], array,foreach, map(), filter(), reduce()

// Fat Arrow Function
//normal function
function sum(a, b) {
  return a + b;
}
document.writeln(sum(2, 3));
//Arrow function
let sum2 = (a, b) => {
  return a + b;
};
// simplified  for Single Line
let sum3 = (a, b) => a + b;
//If One Parameter
let sum4 = (a) => a * a;

//Unchange the Outer this if any callback function called like foreach
//This value will change in forEach if use normal function
//If we want to use outer this into inner.
//Arrow function dont care about this rules.
var skill = {
  name: "Abdullah",
  skills: ["javascript", "PHP"],
  func: function () {
    // this = {skills}
    this.skills.forEach((i) => document.writeln(this.name + " knows " + i));
  },
};
skill.func();

// Ternary Operator
var age = 18;
var type = age > 18 ? "Adult" : "Child";
var type2 = age > 18 ? "adult" : age < 10 ? "Child" : "Young";
var type3 = age > 18 ? true : false;
document.writeln(type);
document.writeln(type2);
document.writeln(type3);

//Array.Find()
var array = [10, 20, 30, 40, 50];
var find = array.find(function (currentNum) {
  if (currentNum > 20) {
    return currentNum; //If true once, searching ends.
  }
});
document.writeln(find);

/*array.find arguments: find(function(){
currentValue, currentIndex, array
 }, this)*/
//For outer this, this parameter will need.
//  FindIndex()
var findIndx = array.findIndex(function (currentIndex) {
  return currentIndex > 20;
});
document.writeln(findIndx);

//Filter()
var filter = array.filter((values) => {
  return values > 30; //All values grater than 30
});
document.writeln(filter);

// Slice()
document.writeln(array.slice());
document.writeln(array.slice(2, 3));
document.writeln(array.slice(-2, -1));

//splice()
var spliced = array.splice(2, 3, 5, 6, 7);
document.writeln(array);

//Concat()
var array2 = [2, 3];
var array3 = [4, 3];
var concat = array.concat(array2, array3);
document.writeln(concat);

// push()
var push = array.push(2, 3);
document.writeln(array);
var pushArray = array.push([2, 3]);
console.log(array);

// map()
var map = array.map((nums) => {
  return 2 * nums;
});
document.writeln(map);

//reduce()
var reduce = array.reduce((prevValue, currValue) => {
  return prevValue + currValue;
}, 0);
document.writeln(reduce);

// for in
var obj = { name: "Abdul", Age: 17 };
for (property in obj) {
  document.writeln(property);
}
for (index in array) {
  document.writeln(index);
}

//for of
var str = "Hi, Javascript";
for (values of array) {
  document.writeln(values);
}
for (chars of str) {
  document.writeln(chars);
}

// Object Tricks
var x = 2,
  y = 3,
  z = x + y;
var obj2 = {
  name: "Sakib Pagla",
  status: "single",
  x,
  y,
  z, //Shorthand from: x:x, y:y, z:z
};
var property = Object.keys(obj2);
var values = Object.values(obj2);
var all = Object.entries(obj2);

//Function Default Value
function myFunc(x = 5) {
  return x;
}
document.writeln(myFunc()); //Output: 5
document.writeln(myFunc(10)); //Output: 10
document.writeln(myFunc(undefined)); //Output: 5
document.writeln(myFunc(null)); //Output: null

// Spread Operator
var nums1 = [1, 2];
//var nums2 = [nums1[0], nums[1], 3, 4, 5]
var nums2 = [...nums1, 3, 4, 5];
var a = nums1; //If array changed, a will change
var a = [...nums1]; //Exact Copy of nums1

// Rest Operator (for user wished unlimited parameter)
//By Arguments Property
function arg() {
  document.writeln(arguments);
}
arg(1, 2, 3, 4, 5);

//By Rest Operator
function rest(a, ...params) {
  document.writeln(a);
  document.writeln(params);
}
rest(5, 6, 7, 8, 9, 10); //a=5, Rests are params

//Object Destructuring
var destructObj = {
  names: "car",
  model: "volvo",
  owners: {
    person1: "Muhammad Taha",
  },
};
const { names } = destructObj;
document.writeln(names);
//destructObj[name]
const { model: title } = destructObj;
document.writeln(title);
const {
  owners: { person1 },
} = destructObj;
document.writeln(person1);
//use default value for non-existing obj
const { user = {} } = destructObj;
document.writeln(user);

//Array Destructuring
var destructArray = [2, 3, 4, 5];
var [a, b] = destructArray;
document.writeln(a, b);
//Output: 2, 3
var [, , c, d] = destructArray;
document.writeln(c, d);
//Output: 4, 5

// Swaping Vars
var x = 3,
  y = 4;
[y, x] = [x, y];
document.writeln(x, y);

// Template Literals
var name1 = "Jahid";
var name2 = "Basu";
document.writeln(`${name1} and ${name2}
                 are my friends`);

//* Ecmascript 6 is a Next Generation of JS, shortest and easy implementaion. Ex- Class Based OOP
// Needs Environment to Get Max Advantages: nodejs installed

//* String Template (New Way to Define String)
var s = `string multi

            line`;
console.log(s); // Output: Exact Output with Space like pre tag
var myName = "Abdul Alim";
var age = 25;
console.log(
  `My name is ${myName} , I am ${age > 18 ? " adult" : " not adult"}`
); // We used + to concat before, must use back tick
// In that ${}, we can also write single line logic

//* String Methods: includes(),  startsWith(), endsWith()
console.log(myName.padStart(15)); // myName length must be 15, so it will take spaces at start to make 15 length
console.log(myName.padEnd(15, "a")); // End fill up with a
console.log("A".repeat(5)); //Output: AAAAA

//* Variable Declaration (Dont need to use var anymore)
// let: value can be reassigned, const: value cant be reassigned
if (true) {
  var a = 10;
}
console.log(a); // Output: 10
for (var i = 0; i < 5; i++) {}
console.log(i); //Output: 5
// Here is the problem with var, because in js if for dont create any block. Just function creates block
// But if we define those vars by let, we cant access it from outside, it prevents memory leak.
// So, always use let rather than var. If we define let in a {}, it will be accessible just in that curly braces.

//* Arrow Function Syntax: Old Way
function add(a, b) {
  return a + b;
}
let sum = function (a, b) {
  return a + b;
};

//* Arrow Function (Also Called Fat/Banana Arrow Function) Syntax: ES6 Way
let sum2 = (a, b) => {
  return a + b;
};
// But, if one line executed
let sum3 = (a, b) => a + b; // Automatic Implicit Return
// But, If one parameter, No need that parenthesis anymore
// Arow function dont have any capacity for assigning 'this'
// if we use this in a arrow function of object, it will refer parent object of the objecct.
let testObj = {
  name: "Abdul",
  print: function () {
    setTimeout(function () {
      console.log(`Hello ${this.name}`);
      // It will give undefined, because setTimeOut is a function, and in there another function. That function will refer window object
    }, 1000);
  },
};

// Solution for testObj so that this can refer testObj:
// 1. let self = this, now use self rather than this
// 2. at last }.bind(testObj), 1000)
// 3. Better Solution: Use Arrow Function, because it will refer parent object
let testObj2 = {
  name: "Abdul",
  print: function () {
    setTimeout(() => {
      console.log(`Hello ${this.name}`);
    }, 1000);
  },
};

//* Default Parameter
function sqr(n) {
  return n + n;
}
console.log(sqr()); // But argument not provided, it will output: undefined
// Old Soludtion: if(!n){n = 1} or, n = n || 1
// ES6 Solution:
function sqr2(n = 1) {
  return n + n;
} // so, default argument will be 1 if not provided
// If we use default parameter, then never null as argument from outside

//* Custom Iterable Object
let customObj = {
  start: 1,
  end: 10,
  [Symbol.iterator]: function () {
    let currentValue = this.start;
    const self = this;
    return {
      next() {
        return {
          done: currentValue > self.end,
          value: currentValue++,
        };
      },
    };
  },
};
for (let v of customObj) {
  console.log(v); // Output: 1 to 10
}

//* Rest (when use in a function's parameter) and Spread (When use anywhere except function parameter) Operator
// Consider, we dont know how many arguments can be passed in a function
// Old Way:
function sum4() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(1, 2, 3, 4, 5);
// Rest Operator Way: Rest Operator must be last parameter
function restTest(a, ...rest) {
  console.log(a);
  console.log(rest);
  console.log(rest.reduce((a, b) => a + b)); // summation of all rest args
}
restTest("Abdul", 1, 2, 3, 4); // a = Abdul, others in rest parameter like an array
// Spread Operator
let a = [1, 2, 3];
console.log(...a); // Output: 1 2 3 (Array converted into singular data)

// Make New Object Copying from Another Object using Spread
let obj3 = {
  a: 1,
  b: 2,
  c: 3,
};
let obj4 = { ...obj3 }; // Output: same as obj3, but obj3 === obj4 will return false

// Enhance Object
let g = 10,
  h = 20;
let enhanced = {
  g: g,
  h: h,
  print: function () {},
  //Here, Key is g, and value g from global variable
  // But, If key and value is same, then we can just write:
  g,
  h,

  // also function declaration in object for ES6 changed
  print() {},
};

//* Destructuring
let person = {
  name: "A Alim",
  email: "alim15@cse.pstu.ac.bd",
  address: {
    city: "Pabna",
    country: "Bangladesh",
  },
};
// Old Way for Assigning:
// let name = person.name;
// let email = person.email;
// ES6 Way:
let {
  name,
  email,
  address,
  address: { city, country },
} = person; // Must be var name same as key of object
console.log(name, email, city, country);
// for array(not useful): let{first, second,last} // index number

//* Transform Object into Array
console.log(Object.entries(obj3)); // Not ES6

//* Transform Array into Object
var objArr = [
  ["a", 10],
  ["b", 20],
];
console.log(Object.fromEntries()); // ES6

// Symbol: Primitive Data Type that is completely unique. Two symbol must not be same
let s1 = Symbol();
let s2 = Symbol("Test Symbol"); // Test Symbol is just a description
console.log(s1); // output: Symbol
// Method: toString(), value(). But what is the use case?
// Symbol helps for non public properties in class (private property)
// Symbol Helps to create enum (set of constants), because js has no enum system

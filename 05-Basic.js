//Run this code using code runner or from the command prompt- go to the directory- node fileName
//Other Basics from JS Slide
var a = 2; //Number Literal
console.log("Testing JS" + 6 + a);
var b = Number('5'); //Number Constructor
console.log(Number.parseFloat(b));
//Number.parseInt, Number.MAX_VALUE
console.log(1/0); //Output: Infinity
console.log('abc' * 10); //output: NaN- Not a Number
var hex = 0xff; //0x is hexadecimal
console.log(hex);
var oct = 0756; //0 means octal
console.log(oct);
//String: Wrapped into single or double quote or into back tic ` or can use String constructor
//true, false, Boolean constructor
//A variable without value returns 'undefined' and null is a special type of data type that usually used as a absence of an object.
//Equality Check: == , === , object.is , same value zero algorithm(ex. check if something present in array. array[NaN]. If we run array.includes(), then we will get true)
//Check Equality table from documentation

//Type Conversion
str = '123' //automatic type conversion
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

//String Methods: concat(), startsWith(), endsWith(), substr(), charAt(), toUpperCase(), toLowerCase(), trim(), split(), string and array property: length

//Array
var arr1 = [1, 2, 3, 4, 5];
var arr2 = Array(1, 2, 3);
var arr3 = [[1, 2], [3, 4]]; 
//push(), pop(), shift(), unshift(), splice()

//Array Reverse: arr.reverse(). Do it in Raw without method

//Methods: join(), fill(), concat(), isArray(), from()

//Javascript Object






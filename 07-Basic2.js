//Inline Javascripts, Introducing console, window
document.getElementById("inner").innerHTML =
  "JavaScript Can Change HTML Content and CSS Style innerHTML";
document.getElementById("display").style.fontSize = "35px";
window.alert("Hey there, its your javascript");
console.log("Hey there, its your javascript");

//Variable Declaring
var $name;
var enums = 1e5; //10 power 5
console.log(enums);
var enums2 = 1e-5; //10 inverse 5
console.log(enums2);
var num1 = 14;
var num2 = 14;
var string = "30";
var _firstName = "Abdul ",
  _lastName = "Ali"; //private variable, multiple variable

//Number and String Behavior
document.getElementById("undefined").innerHTML = $name;
document.getElementById("vars").innerHTML = _firstName + _lastName;
document.getElementById("sum").innerHTML = num1 + num2;
document.getElementById("string").innerHTML = num1 + num2 + string;
document.getElementById("string1").innerHTML = 14 + 14 + "14";
document.getElementById("string2").innerHTML = 14 + "14" + 14;
document.getElementById("string3").innerHTML = "14" + 2 + 3;

//Arithmetic Operator
var x = 10;
var y = 2;
document.getElementById("sub").innerHTML =
  "Subtraction of   x and y: " + (x - y);
document.getElementById("product").innerHTML =
  "Multiplication of   x and y: " + x * y;
document.getElementById("division").innerHTML =
  "Division of   x and y: " + x / y;
document.getElementById("modulus").innerHTML =
  "Modulus of   x and y: " + (x % y);
document.getElementById("power").innerHTML =
  "Exponentiation of   x and y: " + x ** y;
document.getElementById("power_func").innerHTML =
  "Exponentiation of   x and y by function: " + Math.pow(x, y);
document.getElementById("precedence").innerHTML = 3 + 6 * 6;

//Assignment Operator
var a = 2;
document.getElementById("assign").innerHTML = a = a + 2; //2+2 =4
document.getElementById("assign1").innerHTML = a -= 2; // 4-2 = 2
document.getElementById("assign2").innerHTML = a *= 2; // 2*2 = 4
document.getElementById("assign3").innerHTML = a **= 2; // 4^2 = 16
document.getElementById("assign4").innerHTML = a /= 2; // 16/2 = 8
document.getElementById("assign5").innerHTML = a %= 2; // 8%2 = 0

//Boolean Data Type
var name1 = "Polock";
var name2 = "Hridoy";
document.write((name1 == name2) + "			");
document.write("    " + (name1 != name2) + "<br />");

//Array
var ledp = [
  "Graphics Design",
  "Digital marketing",
  "Web Design and Development",
];
document.write(
  "All LEDP Free Course gifted by prime minister: " + ledp + "<br/>"
);
document.write("First 0 index of this array: " + ledp[0] + "<br/>");

//Object
var trainee1 = {
  name: "Abdul Alim",
  batch: "lot-6",
  trainer: "Md Shofiqul Islam",
  course: "Web Design and Development",
};
document.write(trainee1 + "<br />");
document.write(trainee1.course + "<br />");

//typeof operator
document.write("3 is " + typeof 3 + "<br />");
document.write("3+3 is " + typeof (3 + 3) + "<br />");
document.write("3.845 is " + typeof 3.845 + "<br />");
document.write(
  "'3' is " +
    typeof "3" +
    "<br /> <em><strong><mark><kbd>Hi</kbd></mark></strong></em><br />"
);
document.write("Empty is " + typeof "" + "<br />");
document.write("Empty is " + typeof "" + "<br />");
document.write("Not declared variable is " + typeof type0 + "<br />");
document.write(
  "Null is " + typeof null + " ..Mistake of JavaScript. It should be Null<br />"
);
document.write("Array is " + typeof ledp + " !!!!<br />");
document.write("Object is " + typeof trainee1 + "<br />");
document.write(typeof (0 == 0) + "<br />");
document.write(typeof (0 != 0) + "<br />");
document.write(
  "Function data Type is " + typeof function ledp2020() {} + "<br />"
);
trainee1 = null; // Objects can be emptied by setting the value to null.
document.write(trainee1 + "<br />");
ledp = undefined;

//Function
function function1() {
  document.write("Thank you LEDP</br>" + name1.length);
}
var function1 = function1(); //Function can be passed in a variable
document.write("<br />" + function1); //It will return functions object

//innerHTML -> show the top of the page
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
document.getElementById("temperature").innerHTML =
  "The temperature is " + toCelsius(77) + " Celsius";

//Object
var person = {
  firstName: "Abdul",
  lastName: "Alim",
  trainer: "Md Shafiqul Islam",
  age: 23,
};
document.write("<br>" + person.trainer);
document.write("<br>" + person["trainer"]);

var person2 = {
  firstName: "Jani",
  lastName: "Na",
  id: 1702012,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.write("<br />" + person2.fullName());

// Events
//Events
function background() {
  document.body.style.backgroundColor = "black";
}

//Escape Character
document.write("<br />" + 'Tarininig with "LEDP"');
document.write("<br />" + "'Web Design and development'");
document.write("<br />" + "\\ This is called backslash");

//Strings can be object
/*var str1 = new String("ledp2020");// Execution Speed slow
document.write("<br />"+typeof(str1));
document.write("<br />"+(str==str1));
var str2 = new String("ledp2020");
document.write("<br />"+(str2==str1));//Two object cannot be same*/

//String Index and Search
var str3 = "writer, Designer and Developer. Its your Designer here";
document.write("<br />Designer index: " + str3.indexOf("Designer"));
document.write("<br />Designer Index from1: " + str3.indexOf("writer", 1));
document.write("<br />Last Index of Designer: " + str3.lastIndexOf("Designer"));
document.write("<br />Search here Index : " + str3.search("writer"));

//If string not found, it returns -1
document.write("<br />" + str3.indexOf("Frelancer"));
document.write("<br />" + str3.search("Frelancer"));

//String Extracting
var str4 = "Slice me, please......Slice me";
document.write("<br />" + str4.slice(5));
document.write("<br />" + str4.slice(1, 4)); //It will show from 1 to 3
document.write("<br />" + str4.slice(-2, -6));
document.write("<br />" + str4.substring(1, 2)); //Not work with negative number,Just show 1 index
document.write("<br />" + str4.substr(1, 2)); //Show index from 1 to 2
document.write("<br />" + str4.replace("Slice", "Replace"));
document.write("<br />" + str4.replace(/slice/i, "Replace")); //Avoid case sensitivity
document.write("<br />" + str4.replace(/./g, "*")); //Replace All Matches
document.write("<br />" + str4.replace(/Slice/g, "Replace"));

//String letter changing
var upper = "<br />i am a lower case string, please convert me into uppercase";
var lower = "<br />I AM A UPPERCASE STRING. PLEASE CONVERT ME INTO LOWERCASE";
document.write(upper.toUpperCase());
document.write(lower.toLowerCase());

//Concat method
var cn1 = "Please, Concate me";
var cn2 = " With a string";
document.write("<br />" + cn1.concat(cn2));

//Trim Method
var trimer = "		Disgusting! Clear my white spaces, Abdul Alim         ";
document.write("<br />" + trimer.trim()); //Not supported in the internet Explorer 8
var trim2 = "       LEDP 2020!        ";
alert(trim2.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")); //Trim Using Replace Method

//Extracting String characters
schar = "AAR";
document.write("<br />" + schar.charAt(0));
document.write("<br />" + schar.charCodeAt(2));

//String Property access
var access = "Access My Property";
access[0] = "B"; //Not working and no error. It can be done by converting string into
document.write("<br />" + access[0]); //Not work in Internet Explorer 7 or earlier

//Converting string to Array
var arr = "Please, Convert me into an array";
document.write("<br />" + arr.split(" "));
document.write("<br />" + arr.split("|"));
document.write("<br />" + arr.split(""));
var arra = arr.split(" "); //Put it into a variable to change the value
arra[0] = "K";
document.write("<br />After converting array variable into an array: " + arra);

//...................................................................................................
//Number
var x = 0.2 + 0.1;
document.write("<br />The sum " + x + " is not the exact value");
var y = (0.2 * 10 + 0.1 * 10) / 10;
document.write("<br />Now, The sum " + y + " is the exact value");
//JavaScript will try to convert strings to numbers in all numeric operations except + :
document.write("<br />" + ("3" + 4)); //Not showing 7, showing 34
document.write("<br />" + ("3" - 4));
document.write("<br />" + "3" * 4);
document.write("<br />" + "3" / 4);
//NaN : Not a number --Illegal Number--
document.write("<br />" + 3 / NaN);

//Hexadecimal and Octal
var hexa = 0x25f; //0x define hexadecimal. It will show the decimal value of this hexadecimal
var octal = 21; //0 can define Octal in some javascript version
document.write("<br />" + hexa);
document.write("<br />" + octal);

//Number Base by toString method
var myNumber2 = 32;
document.getElementById("base").innerHTML =
  "32 = " +
  " " +
  " Decimal " +
  myNumber2.toString(10) +
  "<br>" +
  " Hexadecimal " +
  myNumber2.toString(16) +
  "<br>" +
  " Octal " +
  myNumber2.toString(8) +
  "<br>" +
  " Binary " +
  myNumber2.toString(2);

//Numbers can be object
// var y22= new Number(123);
//Number Methods
//toString Method-Convert number into string
var testNumber = 11;
document.write("<br />" + typeof testNumber.toString());

//toExponential method
document.write("<br />" + testNumber.toExponential());
document.write("<br />" + testNumber.toExponential(1));

//toFixed Method : Parameter is index
var testNumber = 9.656;
document.write("<br />" + testNumber2.toFixed(0)); // returns 10
document.write("<br />" + testNumber2.toFixed(2)); // returns 9.66
document.write("<br />" + testNumber2.toFixed(4)); // returns 9.6560
document.write("<br />" + brtestNumber2.toFixed(6)); // returns 9.656000

//toPrecision() Method : Same work, just parameter is length
var testNumber3 = 9.656;
testNumber3.toPrecision(); // returns 9.656
testNumber3.toPrecision(2); // returns 9.7
testNumber3.toPrecision(4); // returns 9.656
testNumber3.toPrecision(6); // returns 9.6560

//The valueOf() Method : Returns a number as a number
document.write("<br />" + testNumber3.valueOf());

//Converting Variables to Numbers. Its javasript global method
//JavaScript global methods can be used on all JavaScript data types.
//Number method
var num = true;
document.write("<br />" + Number(num)); //Return 1
//Converting date
var date = new Date("2017-09-30");
document.write("<br />" + Number(date)); //Return 1506729600000
//The Number() method also returns the number of milliseconds since 1.1.1970
//parseInt method
document.write("<br />" + parseInt("10")); // returns 10
document.write("<br />" + parseInt("10.33")); // returns 10
document.write("<br />" + parseInt("10 20 30")); // returns 10
document.write("<br />" + parseInt("10 years")); // returns 10
document.write("<br />" + parseInt("years 10")); // returns NaN
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned.And must return float part.

//Number Properties
//MAX_VALUE 	=> Returns the largest number possible in JavaScript
//MIN_VALUE 	=> Returns the smallest number possible in JavaScript
//POSITIVE_INFINITY 	=> Represents infinity (returned on overflow)
//NEGATIVE_INFINITY 	=> Represents negative infinity (returned on overflow)
//NaN 	=> Represents a "Not-a-Number" value
document.write(" " + Number.MAX_VALUE);
document.write(" " + Number.MIN_VALUE);
document.write(" " + Number.POSITIVE_INFINITY);
document.write(" " + Number.NEGATIVE_INFINITY);
document.write(" " + Number.NaN);
document.write(" " + 1 / 0);

//Array Declaration and call
var friends = [
  "Farhad",
  "Rumman",
  "Rafit",
  "sakib",
  "Munem",
  "Maruf",
  "Avi",
  "Jahid",
  "basu",
  "Robiul",
  "Taha",
  "Sajon",
]; //Good declaration
var frnds = new Array(1, 2, 3); //Bad Declaration
document.write("My Close Friends: <br />" + friends + "<br />");
document.write("Roommate: " + friends[3]);
friends[11] = "Ashik";
document.write("<br />" + friends[11] + "<br />");
//Array is a object
document.write(typeof frnds);

//Looping through the array:
//for loop
document.write("<br />Looping through the array=> By for loop :  <br />");
len = friends.length;
text = "<ul>";
for (var i = 0; i < len; i++) {
  text += "<li>" + friends[i] + "</li>";
}
text += "</ul>";
document.write(text);

//foreach loop
document.write("<br />Looping through the array=> By forEach loop :  <br />");
function myFunction(value) {
  text2 += "<li>" + value + "</li>";
}
text2 = "<ul>";
friends.forEach(myFunction);
text2 += "</ul>";
document.write(text2);

//Array Method
var newFriend = friends.push("Polock"); //Insert New Value
document.write("<br />" + Array.isArray(friends)); //Recognizing Array

//Method2: Craeting own function torecognize array
function isArray(myArray) {
  return myArray.constructor.toString().indexOf("Array") > -1;
}
document.write("<br />" + isArray(friends));

var arr = friends instanceof Array;
document.write("<br />" + arr + "<br />");

var methods1 = ["Mehmed", "Ahmed"];
var methods2 = ["Mustafa", "Muntasir"];
//tostring
document.write("<br />" + methods1.toString());
//join method(works like tostring)
document.write("<br />" + methods1.join(" * "));
//pop method removes the last element.It returns the value that popped out
var remove = methods2.pop();
document.write("<br />" + methods2.pop());
document.write("<br />" + remove);
//Shift method remove first element
var shift = methods1.shift();
document.write("<br />" + methods1.shift());
document.write("<br />" + shift);
//Unshift method adds new element at first. It returns th new array length.
var unshift = methods2.unshift("Bayezid");
document.write("<br />" + methods2.unshift("Bayezid"));
document.write("<br />" + unshift);
//Adding a new element by length property
var add = (methods2[methods2.length] = "Ibrahim");
document.write("<br />" + methods2);
//Deleting Object
delete methods2[0];
document.write("<br />" + methods2);

//splice mthod to add one or more element in specific position. First paramter is position and 2nd parameter is the elment removing number
document.write("<br />" + methods2.splice(2, 0, "Mustafa", "Suleman"));
//Splice to remove elements
document.write("<br />" + methods2.splice(0, 1));
//Merging array
document.write("<br />" + methods1.concat(methods2));
document.write("<br />" + methods1.concat("Usman"));
//Slicing an array
var slice = methods2.slice(1);
document.write("<br />" + methods2.slice(1)); //Slice in position 1. Just remove the 0 position element
document.write("<br />" + slice); //Return new array
document.write("<br />" + methods2.slice(1, 3));

//Sorting Array
//sorting alphabetically
//Reverse method reverse th array. Can be used for descending sorting
var sort = methods2.sort();
document.write("<br />" + methods2.sort());
document.write("<br />" + sort.reverse());

//Sorting a number by function
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b; //If give b-a , it will sort in descnding order
});
document.write("<br />" + points); //If not use this function, sorting will have error. It will sort as string.
document.write("<br />" + points[0]); //Minimum Value
document.write("<br />" + points[points.length - 1]); //Maximum Value

//Sorting an array in random orders-------Use it from w3school very carefully
/*document.getElementById("ran").innerHTML = points;
function random() {
  points1.sort(function(a, b){
	  return 0.5 - Math.random()
	  });
  document.getElementById("ran").innerHTML = points;
}

//Fisher Yates method: Exact array sorting by random numbers
document.write("<br /><h2>Array Sorting by Fisher Yates method</h2>");

document.getElementById("fisher").innerHTML = points;  
function fisher() {
var i, j, k;
  for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }
  document.getElementById("fisher").innerHTML = points;
}
//Sorting a whole array is a very inefficient method if you only want to find the highest (or lowest) value. 
//Use Math.max.apply(null, arr) or Math.min.apply(null, arr) to find maximum or minimum value of an array. Details from w3school
 */
document.write("<br />" + Math.max.apply(null, [1, 2, 3]));
document.write("<br />" + Math.min.apply(null, [1, 2, 3]));
document.write("<br />" + Math.max(1, 2, 3));
document.write("<br />" + Math.min(1, 2, 3));

//Date
document.write("<br /><h2>Practicing Date Methods</h2>");
document.write(Date() + "<br />");
//4 ways to creat new date object
var d = new Date();
document.write("<br />" + new Date());
document.write("<br />" + new Date(2018, 11, 24, 10, 44, 60, 0)); //Year Month Day Hours Minutes Seconds MilliSeconds
document.write("<br />" + new Date(2018, 11, 24, 10, 44, 60)); //Year Month Day Hours Minutes Seconds
document.write("<br />" + new Date(2018, 11, 24, 10, 44)); //Year Month Day Hours Minutes
document.write("<br />" + new Date(2018, 11, 24, 10)); //Year Month Day Hours
document.write("<br />" + new Date(2018, 11, 24)); //Year Month Day
document.write("<br />" + new Date(2018, 11)); //Year Month
document.write("<br />" + new Date(2018)); //MilliSeconds
document.write("<br />" + new Date(18, 11, 10)); //18 shows 1918
document.write("<br />" + new Date(8, 11, 10)); //8 shows 1908
document.write("<br />" + new Date("November 11, 1997 07:30:00")); //Its called DateString
document.write("<br />" + d.toUTCString());
document.write("<br />" + d.toDateString()); //Easy to raed
document.write("<br />" + d.toISOString());

//ISO Format
document.write("<br />" + new Date("1997-11-11"));
document.write("<br />" + new Date("1997-11"));
document.write("<br />" + new Date("1997"));
document.write("<br />" + new Date("1997-11-11T12:00:00Z")); //Time start with T and End with Z
document.write("<br />" + new Date("2015-03-25T12:00:00-06:00")); //By Removing Z for modifying Time

//Short Date
document.write("<br />" + new Date("03/25/2015"));
document.write("<br />" + new Date("2015/03/25")); //This format is undefined in javascript

//Long date : Each format is valid
document.write("<br />" + new Date("25 Mar 2020"));
document.write("<br />" + new Date("March 25 2015"));
document.write("<br />" + new Date("Mar 25 2015"));
document.write("<br />" + new Date("MARCH 25 2015"));

//Parsing date as millisecond counting from 1970 by javascript
var msec = Date.parse("11 Nov 1997");
document.write("<br />" + msec);
var d2 = new Date(msec);
document.write("<br />" + d2);

//Date getMethod
document.write("<br /><h2>Here are the getMethods</h2><br />");
document.write("<ul>");
document.write("<li>Time is: " + d.getTime() + "<br /></li>");
document.write("<li>Year is: " + d.getFullYear() + "<br /></li>");
document.write("<li>Month is: " + d.getMonth() + "<br /></li>");
//See Months by Full Name Creating an array
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.write(
  "<li><br />Picked from array the full named month: " +
    months[d.getMonth()] +
    "<br /></li>"
);
document.write("<li>Date is: " + d.getDate() + "<br /></li>");
document.write("<li>Hour is: " + d.getHours() + "<br /></li>");
document.write("<li>Second is: " + d.getSeconds() + "<br /></li>");
document.write("<li>MilliSecond is: " + d.getMilliseconds() + "<br /></li>");
document.write("<li>Day is: " + d.getDay() + "<br /></li>");
//See Day by Full Name Creating an array
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.write(
  "<li><br />Picked from array the full named month: " +
    days[d.getDay()] +
    "<br /></li>"
);
document.write("</ul>");

//getUTCFullYear.....All methods work with UTCd.

//Set Mthod-------------------------------------------------------Problem
document.write("<br />" + d.setFullYear(2020));
document.write("<br />" + d.setFullYear(2020, 11, 11)); //can optionally set month and day
document.write("<br />" + d.setFullYear(2020, 10, 11));
document.write("<br />" + d.setMonth(10));
document.write("<br />" + d.setDate(10));
document.write("<br />" + d.setDate(d.getDate() + 50));
document.write("<br />" + d.setDate(d.getMinutes() + 50));
document.write("<br />" + d.setDate(d.getSeconds() + 50));

//Conditional time
var today, morning, morningAfter, noon, evening, night;
today = new Date();
/*morning = new Date();
morningAfter = new Date();
noon = new Date();
evening = new Date();
night = new Date();*/
if (days[today.getDay()] == "Friday") {
  document.getElementById("date").innerHTML =
    "Hurrah!! its holiday. Give your time to your family. Don't miss Zummah Salah! &#128525";
} else if (today.getHours() >= 5 && today.getHours() < 9) {
  document.getElementById("date").innerHTML =
    "Good Morning!Your LEDP training will start at 9 am. Have a good day! &#128525";
} else if (today.getHours() >= 9 && today.getHours() < 11) {
  document.getElementById("date").innerHTML =
    "Hey guys, Good Morning! Looks like you are in LEDP training now. Be attentive in your class. &#128525";
} else if (today.getHours() >= 11 && today.getHours() < 13) {
  document.getElementById("date").innerHTML =
    "Hey guys, Good Noon! Looks like you are in LEDP training now. Be attentive in your class. Don't forget your Zahar Salah! &#128525";
} else if (today.getHours() >= 13 && today.getHours() < 15) {
  document.getElementById("date").innerHTML =
    "Hey guys, Good Noon! Looks like you finished todays LEDP training. Rest some time. Don't forget your Acor Salah! &#128525";
} else if (today.getHours() >= 16 && today.getHours() < 19) {
  document.getElementById("date").innerHTML =
    "Good Afternoon! Time to practice your assignments. &#128525";
} else if (today.getHours() >= 19 && today.getHours() < 21) {
  document.getElementById("date").innerHTML =
    "Time to see your favourate drama Kosem Sultan. &#128151&#128516";
} else if (8.3 >= today.getHours() < 1) {
  document.getElementById("date").innerHTML =
    "Good Night! Remember your Isha salah and LEDP's Assignment. Don't use facebook very much. &#128525";
} else {
  document.getElementById("date").innerHTML =
    "What are you doing here?, Its night here. So slep, buddy. Don't Dream, just sleep peacefully. Don't forget your Fazar Salah. &#128525";
}

//Javascript math object
document.write("<br /><h2>JavaScript math object</h2>");
document.write("<br />Math.pi : " + Math.PI);
document.write("<br />Math.round: " + Math.round(20.7)); //Return 21
document.write("<br />Math.round: " + Math.round(20.4)); //Return 20
document.write("<br />Math.pow: " + Math.pow(2, 4));
document.write("<br />Math.sqrt: " + Math.sqrt(4));
document.write("<br />Math.abs: " + Math.abs(-4, 5));
document.write("<br />Math.ceil: " + Math.ceil(4.7)); //Like round
document.write("<br />Math.floor: " + Math.floor(4.7)); // Returns 4
document.write(
  "<br />Math.sin: The sine value of 90 degree is " +
    Math.sin((90 * Math.PI) / 180)
); //Returns 1
document.write(
  "<br />Math.cos: The cos value of 0 degree is " +
    Math.cos((0 * Math.PI) / 180)
); //Returns 0
document.write("<br />Math.min:  " + Math.min(34, 2, 5, 90));
document.write("<br />Math.max:  " + Math.max(34, 2, 5, 90));
document.write("<br />Math.random:  " + Math.random()); //Return random number 0 to 1
document.write("<br />Math.trunc:  " + Math.trunc(4.55));
document.write("<br />Math.log(base E):  " + Math.log(6));
document.write("<br />Math.exp(e power):  " + Math.exp(4));
document.write("<br />Math.cbrt(Cubic root):  " + Math.cbrt(4));

//8 math Properties or mathematical constants
document.write("<br /><h2>8 math Properties</h2>");
document.write("<br />" + Math.E); // returns Euler's number
document.write("<br />" + Math.PI); // returns PI
document.write("<br />" + Math.SQRT2); // returns the square root of 2
document.write("<br />" + Math.SQRT_2); // returns the square root of 1/2
document.write("<br />" + Math.LN2); // returns the natural logarithm of 2
document.write("<br />" + Math.LN10); // returns the natural logarithm of 10
document.write("<br />" + Math.LOG2E); // returns base 2 logarithm of E
document.write("<br />" + Math.LOG10E); // returns base 10 logarithm of E

//Integer random Number
document.write(
  "<br /><h2>Random Numbers: </h2><br />" + Math.floor(Math.random() * 100)
); //Between 0 to 99
document.write("<br />" + Math.floor(Math.random() * 100) + 1); //Between 0 to 100

//Proper Random function
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
document.write(
  "<br />Random Number by proper function: " + getRndInteger(100, 1000)
);

//Boolean
document.write("<br /><h2>Boolean Function and Type</h2><br />");
document.write("<br />" + Boolean(9 > 8));
document.write("<br />0 is: " + Boolean(0)); //0 is false
document.write("<br />-0 is : " + Boolean(-0)); //-0 is false
document.write("<br />Empty String: " + Boolean("")); //Empty string is false
document.write("<br />Undefined variable: " + Boolean("boola")); //undefined is false
document.write("<br />Null: " + Boolean(null)); //null is false
document.write("<br />NaN: " + Boolean(10 / "Rony")); //NaN is false
//Booleans can be object
/*var y = new Boolean(false);//typeof returns object.*/
document.write("<br />data Type: " + Boolean(10 === "10"));

//Ternary Operator
var age = 18;
var voteable = age < 18 ? "Too young" : "Old enough";
document.write("<br />" + voteable);

//Switch case
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  default:
    day = "Saturday";
}
document.getElementById("case").innerHTML = "Today is " + day;
//Its not important to case1, 2...and not to last place for the default. Default and any case can be placed in any place of statement you wish.
var text;
switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
document.write("<br />" + text);
//Can be used common codeblocks into multiple cases
var text22;
switch (new Date().getDay()) {
  case 4:
  case 5:
    text2 = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text2 = "It is Weekend";
    break;
  default:
    text2 = "Looking forward to the Weekend";
}
document.write("<br />" + text2);
//If multiple cases matches a case value, the first case is selected.
//Multi case- chained Operation

var foo = 1;
var output = "Output: ";
switch (foo) {
  case 0:
    output += "So "; //If foo=0, then add
  case 1:
    output += "What ";
    output += "Is ";
  case 2:
    output += "Your ";
  case 3:
    output += "Name";
  case 4:
    output += "?";
    break;
  case 5:
    output += "!";
    console.log(output);
    break;
  default:
    console.log("Please pick a number from 0 to 5!");
}
document.write("<br />" + output);

//For Loop
var text = "";
var i;
for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("num").innerHTML = text;

//Can Initiate many values in statment
var ledp = [
  "Graphics Design",
  "Digital Marketing",
  "web design and Development",
];
var i, len, text2;
for (i = 0, len = ledp.length, text2 = ""; i < len; i++) {
  text2 += ledp[i] + "<br>";
}
//Can be Ommit Statement 1 when values are set before loop
var i = 0;
var text3 = "";
var ledp2 = ["HTML", "CSS", "BOOTSTRAP"];
var len = ledp2.length;
for (; i < len; i++) {
  //Must put ;
  text3 += ledp2[i] + "<br>";
}
//Also can omit the second statement. But must use break in loop, otherwise the loop never stop and the browser will crash
//Statement3 also can be omitted but must put this increment statement in loop.
var ledp3 = ["Patuakhali Lot 6", "batch 4", "Morning batch"];
var i = 0,
  text4 = "";
var len = ledp3.length;
for (; i < len; ) {
  text4 += ledp3[i] + "<br>";
  i++;
}
document.getElementById("ledp3").innerHTML = text4;

//for in loop
//Properties of an object
var person = { fname: "Abdul", lname: "Alim", age: 23 };
var i;
var txt = "";
for (i in person) {
  txt += person[i] + " ";
}
document.getElementById("person").innerHTML = txt;

//For of Loop
var cars = ["BMW", "Volvo", "Mini"];
var x;
for (x of cars) {
  document.write("<br />" + x);
}
//While Loop..Loop through block of code as long as the condition is true
var j = 0;
while (j < 10) {
  document.write(j + "<br />");
  j++;
}
//Do..While Loop..
//The break statement jumps out of a loop
//The continue statement jumps over one iteration in the loop
//Can be add lebel
var p, q;

loop1: for (p = 0; p < 3; p++) {
  //The first for statement is labeled "loop1"
  loop2: for (q = 0; q < 3; q++) {
    //The second for statement is labeled "loop2"
    if (p === 1 && q === 1) {
      continue loop1;
    }
    document.write("p = " + p + ", q = " + q);
  }
}

//Working With Document Object

console.dir(document);
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.doctype);
console.log(document.documentMode);
console.log(document.forms);
console.log(document.lastModified);
console.log(document.all[5]);
console.log(document.images);
console.log(document.links);
console.log(document.characterSet);
console.log(document.readyState);

console.log(typeof document);
console.log(typeof document.body);
document.title = "Javascript DOM";

// Get Element By ID

let IDText = document.getElementById("IDText");
console.dir(IDText); //See all properties of this object
document.writeln(IDText.textContent + "<br />"); // Just Text, Not CSS or other element's effect...
document.writeln(IDText.innerText + "<br />");
document.writeln(IDText.innerHTML + "<br />"); //All Content including HTML Element
console.log(IDText.innerHTML); //With Inner HTML Tags
IDText.style.color = "green";
IDText.style.borderBottom = "1px solid red"; //Not border-bottom

//Get Elements By ClassName

let ul = document.getElementById("unorder-list");
let items = ul.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "pink";
}

//Get Elements By TagName

var lists = document.getElementsByTagName("li");
console.log(lists[0]);

//Query Selector

var listitem = document.querySelector(".item"); //Work With One element
listitem.style.color = "yellow";
var secondListItem = document
  .querySelector("#another-unorder-list")
  .querySelector(".item:nth-child(2)");
secondListItem.style.color = "DarkGrey";

//Query Selector All

var listitems = document.querySelectorAll(".item:nth-child(3)");
for (let item of listitems) {
  item.style.color = "DarkRed";
}

// Children

var grandParent = document.querySelector("#grand-parent");
var parent = grandParent.children;
var child = parent[0].children;
for (var children of child) {
  children.style.color = "red";
  children.style.listStyleType = "none";
}

//Parent Element

var child2 = document.querySelector(".items");
child2.parentElement.style.marginLeft = "20px";

//Closest()

var SearchGrandFromChild = child2.closest("#grand-parent");
//Search from bottom to top
console.log(SearchGrandFromChild);

//Next Sibling, Previous Sibling

var children1 = document.querySelector(".items");
var children2 = children1.nextElementSibling;
children2.style.fontSize = "200%";
children2.previousElementSibling.style.color = "green";

// Creating Element

const newElement = document.createElement("p");
newElement.className = "Para";
newElement.setAttribute("id", "newPara");
const container = document.querySelector("#grand-parent");
const content = document.querySelector(".parent");
container.insertBefore(newElement, content);

// Append Child

const newElement2 = document.createElement("div");
container.appendChild(newElement2); //Added in Last Line

// Append
container.append("Append can contain text");
container.append("Text", newElement, document.createElement("h1"));

//EventListener

const ListenToMe = document.querySelector(".click");
ListenToMe.addEventListener("click", (event) => {
  console.log("Clicked");
});
// dblclick, mousedown, mouseup, mouseenter, mouseleave
// mouseover, mouseout, mousemove

const input = document.querySelector('input[type="text"]');
input.addEventListener("keydown", (event) => {
  console.log(event.target.value);
});
//focus, keydown, keyup, keypress, blur, cut, paste, input

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); //Prevent Reload
  console.log(event.target);
});

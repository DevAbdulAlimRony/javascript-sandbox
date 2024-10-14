// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
//Right: myCalculator(5, 5, myDisplayer);
//Wrong: myCalculator(5, 5, myDisplayer());

// JavaScript has two main characteristics as a programming language, both important to understand how our code will work.
// First is its synchronous nature, which means the code will run line after line, almost as you read it
// and secondly that it is single - threaded, only one command is being executed at any time.

//Synchronous Programming: Synchronous basically means that you can only execute one thing at a time (one line, then next line)
var a = 5;
var response = storeData(a); // Waiting
if (response.success) {
  console.log(success);
}
// In the above example, storeData() storing data in server, so it has to be interact with server's processor.
// So, the line will wait as long as it has not done its work.After successful, next line will execute.
// Like ATM  line, if any front man have problem with something, others will wait for him as long as that front man have done his work.
// That is problematic

// Functions running in parallel with other functions are called asynchronous
// Asynchronous: It means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.
// If front man getting any problem to his account, others will take money. Front man will solve his problem at this time. Waiting silently.
// We can experience asynchronous programming while working with database, api, server etc. But we can test it with some web api tools that browser or nodejs provide us.
// Ex: fetch(), getUserMedia(), showOpenFilePicker()
console.log("Line 1");
setTimeout(() => {
  console.log("After 5 second- Line 2");
}, 5000);
setTimeout(() => {
  console.log("After 3 second- Line 3");
}, 3000);
setTimeout(() => {
  console.log("After 4 second- Line 4");
}, 0);
console.log("Line 5");
// Execution: Line 1, Line 5, Line 4, Line 3, Line 2
// After finishing all synchronous work instantly, then asynchronous as time mentioned.
// The window object represents an open window in a browser. setTimeOut() is a method of Window Object. The setTimeout() method calls a function after a number of milliseconds. 1 second = 1000 milliseconds.
// setTimeout(functionRef/code, delay, param1, param2, /* …, */ paramN). A function to be executed after the timer expires.
// If delay parameter is not given, a value of 0 is used, meaning execute "immediately", or more accurately, the next event cycle.\
// Always use integr for delay, if string given like "1000"- it will convert as integer. If '1 second'- It will consider as 0.
// setTimeout() is an asynchronous function, meaning that the timer function will not pause execution of other functions in the functions stack.
// browsers will enforce a minimum timeout of 4 milliseconds once a nested call to setTimeout has been scheduled 5 times.

// The clearTimeout() method clears a timer set with the setTimeout() method.
//To clear a timeout, use the id returned from setTimeout():
// myTimeout = setTimeout(function, milliseconds); clearTimeout(myTimeout); Better Example in W3Schhols last example.

// The setTimeout() is executed only once. If you need repeated executions, use setInterval() instead.
setInterval(myFunction, 1000); // Call every one second
//The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

// We cant store data from a function into a variable
function sayName(name) {
  let result;
  setTimeout(() => {
    result = name;
    // console.log(name) , Output: undefined, name print after 3 s
  }, 3000);
  return result;
}
let output = sayName("Rony");
console.log(output); // Output: Undefined, because it is called before async.
//Reason: Synchronous goes to call stack, async goes to call stack then to the web api then to the event loop then to the call stack. For that, if we even provide 0 in setTimeOut(), it will work after all synchronous.
//'Callback Hell' or 'Pyramid of Doom': To handle this type of problem, js introduced await, async like terms

// Javascript is a single threaded language, it process one process at a time. Browser provides asynchronous options, not js.
// Two Data Structure: Heap to manage vars, stack to manage func calls
// A thread is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.

// In nodejs and browser, js works by google's v8 engine, so don't worry about platform. V8 dont know about DOM, broweser provides it.

// Three ways to handle asynchronous: Callback, Promise, Async Function
// Handling Collection on Async Operation: Async Iterator, For Await of Loop, Async Generator ***

// AJAX: Asynchronous Javascript and XML (JSON) is a web api to transfer data from url or api, Just bring json data we need - not all html css and data.
// Ajax with Callback Exm:
function getResult(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("get", url);

  xhr.onreadystatechange = function (e) {
    if (xhr.readystate === 4) {
      if (xhr.status === 200) {
        let response = JSON.parse(xhr.response);
        callback(null, response); // null means no error
      } else {
        callback(xhr.status, null);
      }
    }
  };
  xhr.send();
}
getResult("https://jsonplaceholder.typicode.com/posts", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.forEach((r) => console.log(r.title));
  }
}); // But, rather than we can use Fetch API. It returns promise, so we dont need callback

// Callback not always asynchronous like map()
let arr = [1, 2, 3, 5];
let squareArr = arr.map((v) => v * v);
console.log(squareArr);

// To make it asynchronous-
function asyncMap(arr, callback) {
  return arr.map((v) => {
    // setTimeout(() => callback.bind(null, v), 0);
    setTimeout(() => callback(v), 0);
  });
}
let sqArr = asyncMap(arr, (v) => {
  console.log(v); // we cant store async vals in variable, so we need callback here
});
console.log(qbArr);

// Dependent Requests, Why not Callback in JS
const base_url = "https://jsonplaceholder.typicode.com";

getResult(`${base_url}/posts/1`, (err, res) => {
  if (err) {
    throw new Error("Error!");
  }

  let { userid } = res;
  getResult(`${base_url}/users/${userid}`, (err, res) => {
    // ...
  });
}); // This system is very problematic, that's why we use promise.

// Promise: Promise is a constructor function which will have resolve (when success), and reject (when failure)
// Promise has two status: Pending, Resolved. PromiseValue: ...
// A JavaScript Promise object can be: Pending, Fulfilled, Rejected
// The Promise object supports two properties: state and result.
// While a Promise object is "pending" (working), the result is undefined.
// When a Promise object is "fulfilled", the result is a value.
// When a Promise object is "rejected", the result is an error object.
// If anything resolved, then() block... If anything rejected, catch() block, finally() block rarely used
// then and catch and finally are methods of the Promise object, and they are chained one after the other. Each takes a callback function as its argument and returns a Promise.
// finally allows us to execute code once the Promise is settled, regardless of whether it was resolved or rejected
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "One"); // PromiseValue: One
});
p1.then((v) => {
  console.log(v); // v is for resolve parameter, Output: one
})
  .catch((e) => {
    console.log(e); //e is for reject parameter
  })
  .finally(() => {
    console.log(
      "The Promise is settled, meaning it has been resolved or rejected."
    );
  });

// Real Ex: If you passed in the exam , then I promise to buy you an iphone
function getIphone(isPassed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve("Got an Iphone");
      } else {
        reject(new Error("Failed in Exam"));
      }
    }, 2000);
  });
}
getIphone(true)
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {
    console.log(e.message);
  });

// Fetch API
const response = fetch(`${base_url}/users/1`); //It will return a promise, after sometimes it will be resolved
fetch(`${base_url}/users/1`)
  .then((res) => res.json())
  // res returns many data like body, status etc, not js object
  // res.json() will provide another promise with only data like js object which is already resolved.
  // As it is a promise, we can use promise chaining, we dont need then and another catch. Just use then, because we already have a catch
  .then((data) => {
    console.log(data);
    return Promise.resolve("Something"); // Another Promise, now again use then() to chain
  })
  .then((str) => {
    console.log(str);
  })
  .catch((e) => {
    console.log(e.message);
  });
// First res.json(), in its body- data, in its body- str : Chained

// Convert GetResult() method of Ajax using FetchApi
function fetchResult(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);

    xhr.onreadystatechange = function (e) {
      if (xhr.readystate === 4) {
        if (xhr.status === 200) {
          let response = JSON.parse(xhr.response);
          resolve(response); // null means no error
        } else {
          reject(new Error("Error!"));
        }
      }
    };
    xhr.send();
  });
} // Now, we can use then() and catch() block when call this method

// Some methods of Promise
const delay = (s) => new Promise((resolve) => setTimeout(resolve, s * 1000));

let p3 = Promise.resolve("OK"); // Instantly made and resolved
p3.then((v) => console.log(v));

let p4 = Promise.reject("Reject"); // Instantly create and reject

let promiseArr = [p1, p2, p3];
Promise.all(promiseArr).then((arr) => console.log(arr)); // Resolve after all promise resolved, Ex: at a time many request to the server
// If got any rejection, all will be rejected

Promise.race(promiseArr).then((arr) => console.log(arr)); // Resolve if any of them resolved. Like if set time out got 2s, 3s, 4s- just 2s will be resolved

// Async Await
function myPromise() {
  return Promise.resolve("OK");
}
console.log(myPromise()); // This function returns promise

async function myPromise2() {
  return "Ok"; // Automatically returns promise, no need 'new Promise'
}
myPromise2().then((v) => alert(v));

let p5 = new Promise((resolve) => {
  setTimeout(resolve, 5000, "OK");
});
async function asyncFunc() {
  let v = await p1; // wait to resolve the promise first, then go to the next line
  console.log(v);
}

async function doSomethingAsynchronous() {
  // logic
}

const doSomethingAsynchronous = async () => {
  // logic
};

// async function doSomethingAsynchronous() {
//   try {
//     const value = await greeting;
//     console.log("The Promise is resolved!", value);
//   } catch((error) {
//     console.error("The Promise is rejected!", error);
//   } finally {
//     console.log(
//       "The Promise is settled, meaning it has been resolved or rejected."
//     );
//   }
// }

// Function must be async if we want to use await

// Again, modify getResults()
async function fetchData() {
  try {
    let res = await fetch("url");
    let data = await res.json(); // Now, no need then() because of await
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
}

// Async Iterator: Handling Collection of Async: use [Symbol.asyncIterator]()
// Let's say you're working on an application that fetches data from multiple API endpoints. Instead of fetching the data all at once and waiting for all requests to finish, you can use an async iterator to process the data as soon as each request is completed, making the application more efficient and responsive.
// For Await of Loop
// Async Generator

// Blogs to Read:
// 1. https://www.smashingmagazine.com/2020/11/comparison-async-await-versus-then-catch/
// 2. https://www.freecodecamp.org/news/asynchronous-javascript/

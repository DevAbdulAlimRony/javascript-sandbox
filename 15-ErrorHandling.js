let n = 10;
if (n > 5) {
  throw new Error("n is greater than 5");
}
// InternalError(), RangeError(), ReferenceError(), SyntaxError(), TypeError() etc.
// Error can be handled with If Else (When Javascript runtime will not throw error (Ex. can return NaN or Infinity), but We need to show warning)

// NaN === NaN will return false, undefined === undefined will rturn true
// So, we cant compare NaN and NaN

// Error Handling with try...catch
function makeWords(text) {
  try {
    let str = text.trim();
    let words = str.split("");
    return words;
  } catch (e) {
    // In e, we will get an error objcet (message, stack...)
    console.dir(e.message);
  }
}
let words = makeWords(3); // 3 is a number and number object will not have trim() method.
console.log(words);

// We can open try catch block anywhere, If open try, catch must be open. In catch, e parameter must be given
// If no error happen in try block, never execute catch block. but if get error in a line, execution will stop
try {
  console.log("Brhum");
  throw new Error("Ami Erro");
  console.log("Ami Kaj Korbo Na");
} catch {} // Optional Catch Binding, If e is not necessary we can omit that
// When we throw error, it will go in the catch block (throw - catch). So, next line will not work

// Optional Block: finally (will work after any block work finish)

// Custom Error:
class CustomError extends Error {
  constructor(msg) {
    super(msg);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, customError);
    }
  }
}
// Now, we can use throw new CustomError()

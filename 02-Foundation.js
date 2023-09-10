//Scope Chain: We can access global variable in any function. All of the function has a global lexical environment. The have this scope chain links that give us access to variables that are in parent environment.

//Function Lexical Environment- Scope chain goes function to function.
function sayMyName(){
    var a = 'a';
    return function findName(){
        var b = 'b';
        // console.log(c)- got error not defined
        return function printName(){
            var c = 'c';
            return 'Abdul Alim'
        }
    }
}
sayMyName()()();

//Lexical Environment === [[scope]]. In chrome dev tool, if we write function(){}, then we will get [[scopes]] type global in window object.

//If variable is not defined in the environment
'use strict'
function weird(){
    weight = 90; //didn't use any var, const or let keyword. But it will work. If we want it not to work, then use 'use strict' on top
    return weight;
}
weird();

var hey = function hello(){}
hey() //it will work
hello() //Got undefined error, because it added to its own execution context var environment.

//Block Scope
if(5>4){
    var pass = '1234'; //accessible anywhere
    const pass2 = '1234';
    let pass3 = '123'; //ES6 introduced const and let block scoped, just can be accessible in this block
    //In other programming language, automatically block scoped.
}

//Global Variables are bad. How can I minimize that?
//IIFE: Immediately invoked Function Expression

(function() {

})(); //anonymous function expression and immediately invoked it, that is callback function
//Advantage: No global property created, just scoped inside this IIFE

// function(){}()- syntax error. we can't immediately call function declaration, but function expression.

//this keyword: this is the object that the function is a property of. We have an object and object has some function, we have access to this in that function that refers to that object. If we write 'this' in console, we will get window object.

//'this' gives methods access to their object
const obj = {
    name: 'A',
    bored: function(){
        return this.name; //this obj.name
    },
    boredAgain(){
        return this.bored() + '!'
    }
}

//'this' execute same code for multiple objects
function friendsFunc(){
    console.log(this.name)
}
const name = 'Rony'
const obj1 = {
    name: 'Robiul',
    friend: friendsFunc
}
const obj2 = {
    name: 'Basu',
    friend: friendsFunc
}
friendsFunc() //Output: Rony (because here object is window)
obj1.friendsFunc() //Output: Robiul
obj2.friendsFunc() //Output: Basu


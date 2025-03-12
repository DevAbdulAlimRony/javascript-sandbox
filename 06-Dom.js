// Document Object Model- Tree Type Model of HTML Structure
// DOM is the programming interface of HTML document. when browser load site, html document converted to DOM Tree
// DOM needs to manipuate HTML elements

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
document.writeln(IDText.innerHTML + "<br />"); //All Content including HTML Element , also comment
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
var lists = document.getElementsByTagName("li"); // We will get Array like Object or HTML Collection
// Array like Object is not 100% array
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
for (let item of listitems) { // Traverse DOM
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

//Closest()- Search from bottom to top
var SearchGrandFromChild = child2.closest("#grand-parent");
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

// When we use classNames selector, we get HTML Collection, but when we use querySelectorAll we get NodeList in the DOM Object
// We can use forEach or forOf Loop on NodeList, But on Collection or array like object we can only use for of
// An HTMLCollection is a list of DOM elements that match certain criteria. For example, they may have the same tag name or class. Or they may be related in a specific context, like children of a particular element.
//  a NodeList is a list of nodes. But what is a node? A node is any individual element in the DOM tree. This could be elements, attributes, texts, comments, and so on.

// getAttribute(), setAttribute(), classList, classList.remove(), classList.add()
// childNode, parentNode

// DOM Event Listener
// <button onClick='makeGreen()'> // or,
document.getElementById('ok').addEventListener('click', function makeGreen() {
  document.body.style.backgroundColor = 'green'
}) // or,
document.getElementById('ok').addEventListener('click', function () {
  document.body.style.backgroundColor = 'green'
})
// click, mouseover, mouseout, keydown, keyup, keypress, submit, change, focus, blur, load, resize, scroll
// Event Object: event.target, event.type, event.key
document.getElementById('message-input-box').addEventListener('keyup', function (event) {
  console.log('typing', event.target.value);
}) // ja type korche shetay dekha jabe

// Github Type Delete Example
document.getElementById('input-delete').addEventListener('keyup', function (event) {
  const text = event.target.value;
  const btnDelete = document.getElementById('btn-delete');
  if (text == 'delete') {
    btnDelete.removeAttribute('disabled');
  }
  else {
    btnDelete.setAttribute('disabled', true);
  }
})

// Event Bubble and Stop Propagating
// Event Bubbling is a concept in the DOM (Document Object Model). It happens when an element receives an event, and that event bubbles up (or you can say is transmitted or propagated) to its parent and ancestor elements in the DOM tree until it gets to the root element.
// Bubbling is the default behavior of events on elements unless you stop the propagation
body.addEventListener('click', () => {
  console.log("body was clicked")
})

div.addEventListener('click', () => {
  console.log("div was clicked") // output: div was clicked, body was clicked. bubbling happens.
})

button.addEventListener('click', (event) => {
  event.stopPropagation()
  console.log("button was clicked") // output: button was clciked,  bubbling stopped
})

// stopImmediatePropagation()
document.getElementById("myButton").addEventListener("click", (event) => {
  event.stopImmediatePropagation(); // Stops this and any other listener on button
  console.log("First event: Button clicked");
});

document.getElementById("myButton").addEventListener("click", () => {
  console.log("Second event: Button clicked again");
});

document.body.addEventListener("click", () => {
  console.log("Body was clicked");
});

// Event Delegation: Event delegation is a technique in JavaScript where instead of adding event listeners to multiple child elements, you add a single event listener to a parent element. This works because of event bubbling—the event propagates up the DOM tree, allowing the parent to handle events from its child elements.
document.getElementById("list").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") { // Ensures only <li> elements trigger
    console.log("You clicked:", event.target.textContent);
  }
});
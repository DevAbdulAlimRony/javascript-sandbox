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

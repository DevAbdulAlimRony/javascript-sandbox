//AJAX- Know Intro(Data Communication- Request Response)
function loadData(){

    //create a new Request
    //XMLHttpRequest is browser built in object- Its just a name, we can pass any data like json data, not just xml data
    const xhr = new XMLHttpRequest();

    //What to do when response arrives
    xhr.onload = function(){
        const container = document.getElementById('demo');
        container.innerHTML = this.responseText;
        //xhr.responseText
    }

    //Prepare Request
    xhr.open("GET", "./data/data.txt");
    //xhr.open(.,., false)- synchronous

    //Send Request
    xhr.send();

    //More XMLHttpRequest Methods: abort(), getAllResponseHeaders(), getResponseHeader(), setRequestHeader()
    //More XMLHttpRequest Properties: onLoad, readyState, responseText, responseXML, onreadystateChange, status, statusText

    //Fetch API is a simpler way to use ajax
}

//Real Life Example of AJAX
function sendRequest(method, url, data){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        //console.log(this.responseText); -Return JSON text
       // console.log(JSON.parse(this.responseText).userId);- Return JSON Object
        //or, use responseType if we always want JSON object rather than JSON text
        //console.log(this.response);- If responseType json set
        if(this.status >= 400){
            reject(`Application Error- ${this.status}- ${this.statusText}`);
        }
        else{
            resolve(this.response);
        }
    }

    xhr.onerror = function () {
        reject("oops! palaw palaw! Error Babaji Ashche..");
    } //Network Related Error

    //Link from fake Rest API server- JSON Placeholder
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.send();
    });
    return promise;
}
function getData() {
   sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then((responseData) => {
        console.log(responseData);
   })
   .catch((err) => {
    console.log(err);
   });
}
function sendData(){
    sendRequest("POST", "https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: "dhuru",
        body: "bodyless",
        userId: 1,
    })).then((responseData) => {
        console.log(responseData);
   });
}
const getButton = document.getElementById("get");
getButton.addEventListener("click", getData);

const sendButton = document.getElementById("send");
sendButton.addEventListener("click", sendData);


//JSON- Text Format for storing and transporting data, not a real object, just text in a specific format, mostly for API calling and data storing. We can convert it into javascript object and can use it using parse method
//JSON object literals are surrounded by curly braces {}.JSON object literals contains key/value pairs.

Keys and values are separated by a colon.
const obj = {
    name: "nameless", 
    age: 37,
 } //-Javascript Object
'{"name": "nameless", "age": 37}' //-json data. values can be string, number, boolean, object, array, boolean, null
//js object to json string: JSON.stringify()
//Json string to js object: JSON.parse()
//previous use was xml rather than json. use tag rather than double quote.
//Reviver Function
const obj4 = JSON.parse(jsonstring, function(key, value){
    //..like middleware..transformer
});
//don't use function in json, if use then use eval() when parsing
//save json data in local storage- setItem()

//Accessing object values
const myObj = JSON.parse(myJson);
x = myObj.name; //or,
y = myObj["name"];
//Looping an object
for(const x in myObj){}

//JSON PHP: object to json- json_encode(), json to object - json_decode()

//JSONP is a method for sending JSON data without worrying about cross-domain issues. JSONP does not use the XMLHttpRequest object. JSONP uses the <script> tag instead.

//Javascript Web API


// String Reversse in Easy Way
let sentence = "kichu ekota";
let reverse = '';
for (const letter of sentence) {
    reverse = letter + reverse
}
console.log(reverse);// or using loop
const reverse2 = sentence.split('').reverse().join(''); // Shortcut Way

// Reversing Array
const numbers = [1, 2, 3];
numbers.reverse(); // using method
// without method
const rev_nums = [];
for (num of numbers) {
    rev_numbers.unshift(num);
}
// using for loop
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    rev_numbers.unshift(num);
}
// or loop in reverse way
let rev_nums2 = [];
for (i = numbers.length - 1; i >= 0; i--) {
    const num = numbers[i];
    rev_nums2.push(num);
    console.log(num);
}

// Sorting Array
numbers.sort(); // when sorting happen it sort as its ASCII value, so uppercase letter will get priority
// 4, 7, 43 - it will get 4, 43, 7- numbers will treat as string, so compare like that to sort. use arrow function to solve it
const nums_asc = [...numbers].sort(function (a, b) { return a - b });
const nums_desc = [...numbers].sort(function (a, b) { return b - a }); // we copies array using spread operator, so original array will not affect


// Sum of Array using Function
function sum(numbers) {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
        return sum;
    }
}
const nums = [4, 2, 1, 6];
const sum = sum(nums);
console.log('Sum of Number is: ', sum);

// Inch to Feet
function inchToFeet(inch) {
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + 'ft ' + inchRemaining + ' inch.'
    return result;
}
const shuvoHeight = inchToFeet(75);

// Checking Leap Year
function isLeapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0) {
        return true;
    }
    else if (year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

// Average of Odd Numbers in an Array
function oddAverage(numbers) {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }

    let sum = 0;
    for (const number of odds) {
        sum = sum + number;
    }

    const count = odds.length;
    const avg = sum / count;
    return avg;
}

// Remove Duplicate Items from an Array
const biriyaniKhor = ['abul', 'babul', 'khabul', 'abul'];
function noDuplicate(array) {
    const unique = [];
    for (const item of array) {
        if (unique.includes(item) === false) {
            unique.push(item);
        }
    }
    return unique;
}
noDuplicate(biriyaniKhor);

// Swaping Variable- Method 1(temp Variable)
let water = 'water';
let juice = 'juice';
const tempGlass = water;
water = juice;
juice = tempGlass;

// without temp, using destructring
let x = 5;
let y = 7;
[x, y] = [y, x];

// Max Number in Array
function getmax(numbers) {
    let max = numbers[0];
    for (const num of nums) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }

    let cashOutcharge = (money * 1.75) / 100;
    return cashOutcharge;
}

function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }

    const dontIncludeChars = ".-_+@";
    if (dontIncludeChars.includes(email[0])) {
        return false;
    }

    const atTheRateIndex = email.indexOf("@");
    if (atTheRateIndex === -1 || atTheRateIndex === 0 || atTheRateIndex === email.length - 1) {
        return false;
    }

    if (email.includes(" ")) {
        return false;
    }

    if (!email.endsWith(".com")) {
        return false;
    }

    return true;
}

function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }

    let mangoeVotes = 0;
    let bananaVotes = 0;

    for (let vote of votes) {
        if (typeof vote === "string") {
            if (vote === "mango") {
                mangoeVotes++;
            } else if (vote === "banana") {
                bananaVotes++;
            }
        }
    }

    if (mangoeVotes > bananaVotes) {
        return "Mango";
    } else if (bananaVotes > mangoeVotes) {
        return "Banana";
    } else {
        return "Draw";
    }
}

function isBestFriend(f1, f2) {
    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }

    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }

    return false;
}

function calculateWatchTime(times) {
    for (let time of times) {
        if (typeof time !== 'number') {
            return "Invalid";
        }
    }

    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++) {
        totalSeconds = totalSeconds + times[i];
    }

    let hours = parseInt(totalSeconds / 3600);
    let minutes = parseInt((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return {
        hour: hours,
        minute: minutes,
        second: seconds
    };
}

// Shopping Cart
let products = [
    {
        name: 'Laptop',
        price: 200,
        quantity: 2,
    },
    {
        name: 'mobile',
        price: 100,
        quantity: 3,
    }
];
function cartTotal() {
    let total = 0;
    for (const product of products) {
        total = total + (product.price * product.quantity);
    }
    return total;
}
cartTotal(products);

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 80;

    if (quantity <= 100) {
        const total = quantity * first100Price;
    }
}

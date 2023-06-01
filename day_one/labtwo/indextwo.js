//Array Methods and Callbacks - Demonstrate the use of callback functions.
//This lab is designed to be a review of array methods with callback functions 
//(i.e forEach, map, filter, reduce, find, every, etc).
//You don't have to write an answer to the thought questions.

//1. The first statement is for the numbers array.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

//2. The second statement is for the string array.
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//Every
//1. Determine if every number is greater than or equal to 0.
function everyFirst(element, index, array) {
    return element >= 0;
}
console.log(nums.every(everyFirst));

//2. Determine if every word shorter than 8 characters.
function everySecond(element, index, array) {
    for(let char = 0; char < panagram.length; char++) {
    return char <= 8;
    }
}

console.log(panagram.every(everySecond));

//Filter
//1. filter the array for numbers less than 4.
const results = nums.filter(num => num < 4);
console.log(results);

//2. Filter words that have an even length.
const result =  panagram.filter(each => each.length % 2 === 0);
console.log(result);

//Find
//1. Find the first value divisible by 5.
const found = nums.find(element => element % 5 === 0);
console.log(found);

//2. Find the first word that is longer than 5 characters.
function longerFive(element, index, array) {
    for(let fiveChar = 0; fiveChar < panagram.length; fiveChar++) {
    return fiveChar > 5;
    }
}

console.log(panagram.find(longerFive));  //this returns undefined. 

const secondTry =  panagram.find(each => each.length > 5);
console.log(secondTry);

//Find Index
//1. Find the index of the first number that is divisible by 3.
const divThree = (element => element % 3 === 0);
console.log(nums.findIndex(divThree));

//2. Find the index of the first word that is less than 2 characters long.
const twoChar = panagram.findIndex(each => each.length < 2);
console.log(twoChar);

//For Each
//1. Log each value of the array multiplied by 3.
nums.forEach(element => console.log(element * 3));

//2. Log each word with an exclamation point at the end of it.
panagram.forEach(element => console.log(element + '!'));

//Map
//1. Make a new array of each number multiplied by 100.
const multiHundred = nums.map(x => x * 100);
console.log(multiHundred);

//2. Make a new array of all of the words in all uppercase.
const wordUpper = panagram.map(word => word.toUpperCase());
console.log(wordUpper);

//Some
//1. Find out if some numbers are divisible by 7.
const divSeven = (num) => num % 7 === 0;
console.log(nums.some(divSeven));

//2. Find out if some words have the letter a in them.
console.log(Array.prototype.some.call(panagram, (x) => x === "lazy"));

/*const tryAgain =  panagram.some(each => each.length === "a");
    return tryAgain;

function findTheA(element, index, array) {
    for(let findA = 0; findA < panagram.length; findA++) {
    return findA === 'a';
    }
    }
console.log(panagram.some(findTheA));

console.log(panagram.includes("lazy"));*/
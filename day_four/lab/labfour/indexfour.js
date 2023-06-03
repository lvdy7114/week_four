//JavaScript Total Recall
/*
*A* -- Q&A
1. How do we assign a value to a variable? Using the assignment operator

2. How do we change the value of a variable? Removing the current value and type in desired value at the same place.  

3. How do we assign an existing variable to a new variable? By initializing a new variable 
and assign it to the existing variable.  

4. Remind me, what are declare, assign, and define?
-Declaring a variable is creating it.  To do this choose which identifier to set it up - such as const or let, and then 
naming it something that you and others can read what it is. 
-Assigning is to assign the identifier and variable name by using the equal sign = and type in the value after it. 
-Defining is the same as initializing the variable.  E.g let questionOne = 'Q&A'; 

5. What is pseudocoding and why should you do it?
Pseudocode are description of the steps in an algorithm of a normal programming language, 
but is intended for human reading rather than machine reading.  The purpose of using pseudocode is that it is 
easier for people to understand than conventional programming language code, and that it is an efficient and 
environment-independent description of the key principles of an algorithm.

6. What percentage of time should be spent thinking about how you're going to solve a problem 
vs actually typing in code to solve it?
I think it depends on each person's experience with it.  I'd say it's 50% on thinking and 50% on typing to solve it. 
*/
/* ////////I. Variables & Datatypes///////////////
**B* -- Strings
Create a variable called firstVariable.
Assign it the value of the string "Hello World".
Change the value of this variable to some number.
Store the value of firstVariable in a new variable called secondVariable.
Change the value of secondVariable to any string.
*/
let firstVariable = 'Hello World';
firstVariable = 1;
let secondVariable = firstVariable;
secondVariable = 'Any string';
console.log(firstVariable);
//What is the value of firstVariable?  //1

//Create a variable called yourName and set it equal to your name as a string. 
//Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns
//a new string with them concatenated.
//Example: "Hello, my name is Jean Valjean"
let yourName = 'Linda';
let greetPerson = "Hello, my name is " + yourName;
console.log(greetPerson);

/*
***C* : Booleans
Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
Answers should be all be valid JS syntax, not weird things that don't make sense but happen to print true to the console.
*/
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b); //t
  console.log(c > d); //t
  console.log(e.includes('e')); //t

  // FOR THE NEXT TWO, USE ONLY && OR ||
  console.log(true || false); //t
  console.log(false && false && false && false && false || true); //t
  console.log(false === false); //t

  console.log(e.includes ('Kevin')); //t
  console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  console.log(a === a != d); // note: the answer is a simple arithmetic equation, not something "weird"
  console.log(48 == '48');  //t

  /*
  ****D* The Farm
Declare a variable animal. Set it to be "cow" or some other animal.
Write code that will print out "mooooo" if the variable is equal to cow.
Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." 
  */
 let animal = 'cow';
 if(animal === 'cow') {
    console.log('mooooo');
 } else {
    console.log('Hey! You\'re not a cow');
 }

 /* Driver's Ed
Make a variable that holds a person's age; be semantic.
Write code that will print out "Here are the keys!" if the age is 16 years or older, 
or, if the age is younger than 16, a message should print "Sorry, you're too young."
 */
let personAge = 16;
if(personAge >= 16) {
    console.log('Here are the keys!')
} else if (personAge < 16 ) {
    console.log('Sorry, you\'re too young.');
}

//////////II. Loops//////////////////
/*A* The Basics
*/
//Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//Write a loop that will print out all the numbers from 10 up to and including 400.
for (let j = 10; j <= 40; j++) {
    console.log(j);
}
//Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let z = 12; z <= 40; z++) {
    if(z % 3 === 0) {
        console.log(z);
    }
}

/**B* Get Even
Print out the numbers that are within the range of 1 - 100.
Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/
for (let x = 1; x <= 10; x++) {
    if( x % 2 === 0) {
        console.log(x + " <-- is an even number");
    }
}

/***C* Give Me Five
1. For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five.*/
//2. Add to the code from above to print out "I found a number. Three is a crowd." if the number is a multiple of three.
//For numbers divisible by both three and five, be sure your code prints both messages.
for (let t = 0; t <= 100; t++) {
    if(t % 5 === 0 && t % 3 === 0) {
        console.log('I found a ' + t + '. High five! & I found a ' + t + '. Three is a crowd.')
    }
    else if( t % 5 === 0) {
        console.log('I found a ' + t + '. High five!');
    } else if ( t % 3 === 0) {
        console.log('I found a ' + t + '. Three is a crowd.')
    } 
    else {
        console.log(t);
    }
}

/****D* Savings Account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.
You got a bonus! Your pay is now doubled each week. 
Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it. 
*/
//
let bank_account = 0;
for (let m = 1; m <= 10; m++) {
    bank_account += m;
}
console.log('$' + bank_account); //$55

for (let b = 1; b <= 100; b++) {
    bank_account += b;
    bonus = b * 2;
    sum = bonus + bank_account;
}
console.log('$' + sum); //come back it says 5305, not 10,100

/* /////////III. Arrays & Control flow///////////////
Next, we'll revist arrays and control statements.

*A* Talk About It
What are the things in an array called?
-a list of values or items, that also is like a storage container space for that item. 
Do Arrays guarantee those things will be in order?
-it depends if the developer makes changes to it.  If it is const, it can still change. 
What real-life thing could you model with an array?
-a list and/or a box with stuff inside, which would be the value or item with a label outside of it.  
-Can be like a row of boxes on a shelf.  The array is a shelf and the boxes are the items. 
*/
/**B* Easy Does It
Create an array that contains three quotes and store it in a variable called quotes.*/
const quotes = ["all thought is energy", "all things are in motion", "all time is now" ];


/***C* Accessing Elements
Given the following array, */ 
const randomThings = [1, 10, "Hello", true];
/*How do you access the 1st element in the array?
What would you write to access the 3rd element of the array?*/
console.log(randomThings[2]);  

/****D* Change Values
Given the following array,*/ 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
/*Change the value of "Github" to "Octocat".
Add a new element, "Cloud City" to the array.
Check the value of the array to make sure it updated the array. 
*/
ourClass.splice(-1,1, 'Octocat');
console.log(ourClass);

ourClass.push('Cloud City');
console.log(ourClass);

/*****E* Mix It Up
Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are 
more appropriate.
Given the following array, */
const myArray = [5, 10, 500, 20];

//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Aegon');
console.log(myArray);

//Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);

/*Remove the string of your choice from the end of the array.*/
myArray.pop();
console.log(myArray);

//Reverse this array using Array.prototype.reverse().
console.log(Array.prototype.reverse.call(myArray));
//Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
//Yes. The reverse() method returns reference to the original array, 
//so mutating the returned array will mutate the original array as well
//it returned the array in a reverse list

/******F* Biggie Smalls
Create a variable that contains an integer.
Write an if ... else statement that:
console.log()s "little number" if the number is entered is less than 100.
console.log()s "big number" if the number is greater than or equal to 100.
*/
let int = 99;
if(int < 100) {
    console.log('little number');
} else if ( int >= 100) {
        console.log('big number');
}

/*******G* Monkey in the Middle
Write an if ... else statement:
console.log() little number if the number entered is less than 5.
If the number entered is more than 10, log "big number".
Otherwise, log "monkey".
*/
if(int <= 5) {
    console.log('little number')
} else if( int >= 10 ) {
    console.log('big number')
    }
  else {
    console.log('monkey');
}

/*********H.* What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  /* 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, 
  log the sentence "Kristyn is rocking that " + *the third item in Kristyn's closet* + " today!" to the console.*/
  console.log('Krystyn is rocking that ' + kristynsCloset[2] + ' today!');
  
//2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(5,1, 'yellow knit hat','raybans');
console.log(kristynsCloset);
//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset.splice(5,1,'stained knit hat');
console.log(kristynsCloset);
//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.log(thomsCloset[0][0]);
//5. In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][1]);
//6. Access one item from Thom's accessories array.
console.log(thomsCloset[2][1]);
//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ', and ' + thomsCloset[2][1] + '!');
//8. Get more specific about what kind of PJs Thom is wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
  console.log(thomsCloset[1][2]); //PJ's
  console.log(thomsCloset);
  thomsCloset[1][2] = 'Footie Pajamas';
  console.log(thomsCloset);

/* /////////IV. Functions///////////////
*A* printGreeting
Write a function called printGreeting with a parameter name that returns a greeting with the argument 
interpolated into the greeting, like so:
*/
function printGreeting(greeting) {
    return greeting = 'Hello there, ' + greeting + '!';
}
console.log(printGreeting("Slimer"));

/**B* printCool
Write a function printCool that accepts one parameter, name as an argument. 
The function should print the name and a message saying that that person is cool. 
*/
function printCool(name) {
    return name = name + ' is cool.';
}
console.log(printCool("Captain Reynolds"));  

/***C* calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number. */
function calculateCube(x) {
    let volume = 0;
    return volume = x * x * x;
}
console.log(calculateCube(5));

/****D* isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel,
false otherwise. The vowel could be upper or lower case.
Test your function on every vowel and make sure it's working. 
In general, when you write functions, take a minute to test them with different values to make sure
they behave the way you expect. 
*/

function isVowel(vowel) {
    if(vowel === 'a') {
        return true;
    } 
    else if (vowel === 'e') {
        return true;
    } 
    else if (vowel === 'i') {
        return true;
    }
    else if (vowel === 'o') {
    return true;
    }
    else if (vowel === 'u') {
        return true;
        }
    else {
        return false;
    }
}
console.log(isVowel("a"));

/*****E* getTwoLengths
Write a function getTwoLengths that accepts two parameters (strings). 
The function should return an array of numbers where each number is the length of the corresponding string. 
*/
function getTwoLengths(string,string1) {
    return [string.length, string1.length]; 

}
console.log(getTwoLengths("Hank", "Hippopopalous")); //[4,13]

/******F* getMultipleLengths 
Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. 
The function should return an array of numbers where each number is the length of the corresponding string. 
*/
//first try /* 
/* function getMultipleLengths(count) {
    for(let a = 0; a < count.length; a++) {
        return [count[a]];
    }
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); //come back, just prints this line or 5

//second try
function getMultipleLengths(count) {
    let greets = [];
    for (let i = 0; i < arguments.length; i++) {
        greets.push(arguments[i]);  
        arguments[i].length;   
    }
    return count;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); //should print out => [5, 4, 2, 2, 4]
*/
    //third try
function getMultipleLengths(word) {
    let greet1 = [];
    for (element of word) {
        greet1.push(element.length);
    }
    return greet1;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

/*******G* maxOfThree
Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. 
If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, 
one of them should be returned. Be sure to test it with larger values in each of the three locations. 
*/
const maxOfThree = function(s,m,l) {
    if(l >= s && l >= m) {
        return l;
    } else if (m >= s && m >= l) {
      return m;
    } else {
      return s;
    }
  }
 console.log(maxOfThree(6, 9, 1)); //9

 /********H. printLongestWord
Write a function printLongestWord that accepts a single argument, an array of strings. 
The method should return the longest word in the array. In case of a tie, the method should return the word that appears 
first in the array.
 */
//first try
/*function printLongestWord(long) {
    let longestWord = [];
    for (let i = 0; i < long.length; i++) {
        if(long[i].length > long[longestWord]) {
            return long;
        } 
}
}*/
//second try
function printLongestWord(find) {
    let longestWord = " ";

    find.forEach(function(word) {
        if(word.length > longestWord.length) {
            longestWord = word;
        }
    });
    return longestWord;
}
 

//should return => "Peanutbutter"
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

///////V.Objects//////
//Let's set up an object data structure. 
//Say we have a website that sells products, and we have a user of our website, and we want to store that user's data. 
//The object data structure is a good way to organize the data from our user.

/*A* Make a User Object
Create an object called user.
Write into the object the key-value pairs for name, email, age, and purchased. 
Set the value of purchased to an empty array []. Set the other values to whatever you would like.
*/
const user = {
    name: 'Captain Reynolds',
    email: 'captainreynolds@shopping.com',
    age: 21,
    purchased: []
}

/**B* Update the User
Our user has changed his or her email address. 
Without changing the original user object, update the email value to a new email address.
Our user has had a birthday! Without changing the original user object, 
increment the age value using the postfix operator. Hint: age++.
*/

user.email = 'reynoldscap@shopping.com';
user.age++;
console.log(user.email);
console.log(user.age);

/***C* Adding Keys and Values
You have decided to add your user's location to the data that you want to collect.
Without changing the original user object, add a new key location to the object, 
and give it a value of some location (a string).
*/
user.location = "United States";
console.log(user);

/****D* Shopaholic!
Our user has purchased some items! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
Console.log just the "Merino jodhpurs" from the purchased array.
*/

user.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhpurs');
console.log(user.purchased);

/*****E* Object within an Object
Remember that you can add an object to an existing object in the same way that you can add any new key-value pair.
If we want to give our user a friend with a name and age, we could write:
*/
user.friend = {
    name: "Grace Hopper",
    age: 85
}
console.log(user);

//1. Write a friend object into your user object and give the friend a name, age, location, and purchased array 
//(empty for now).
user.friend1 = {
    name: 'Slimer', 
    age: 45,
    location: 'Australia', 
    purchased: []
}
//2. Console.log just the friend's name.
console.log(user.friend1);
//3. Console.log just the friend's location.
console.log(user.friend1.location);
//4. Change the friend's age to 55.
user.friend1.age = 55;
console.log(user.friend1.age);
//5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend1.purchased.push('The One Ring');
console.log(user.friend1.purchased);
//6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend1.purchased.push('A latte');
//7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend1.purchased[1]);

/******F* Loops
*/
//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), 
//and prints each element to the console.
for(each of user.purchased) {
    console.log(each);
}
console.log(user.purchased);

//Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for(each of user.friend1.purchased) {
    console.log(each);
}

/*******G* Functions Operating on Objects
Write a single function updateUser that takes no parameters. When the function is run, it should:
Increment the user's age by 1.
Make the user's name uppercase.
The function does not need a return statement, it will merely modify the user object.
*/

function updateUser() {
    user.age++;
    user.name = user.name.toUpperCase(); 
}
updateUser(user.age,user.name);
console.log(user.age, user.name);

/*Write a function oldAndLoud that performs the exact same tasks as updateUser, 
but instead of hard-coding it to only work on our user object, make it take a parameter person, 
and have it modify the object that is passed in as an argument when the function is called. 
Call your oldAndLoud function with user as the argument.*/

function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();

}
oldAndLoud(user);
console.log(user.age,user.name);
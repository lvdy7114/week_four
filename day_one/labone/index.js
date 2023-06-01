//JavaScript Functions
//Define and code 6 of the 10 functions below in the index.js file.
//Define the functions using the approach as specified (either as a function expression or declaration).


// 1. Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments 
//and returns the largest of them. 
//If they are the same, return that number. Use the if...else construct or a ternary expression - 
//the Math.max method is not allowed.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and 
  //returns the largest of them. Again, the Math.max method is not allowed.
  const maxOfThree = function(small,mid,large) {
    if(large >= small && large >= mid) {
        return large;
    } else if (mid >= small && mid >= large) {
      return mid;
    } else {
      return small;
    }
  }
 console.log(maxOfThree(1,10,5));

//3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and 
//returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
  if (char ===  'a', 'e', 'i', 'o', 'u') {
    return true;
  }
  else {
    return false;
  }
}
console.log(isCharAVowel('a'));

// 4. Define a function, as a function expression, sumArray that takes an array of numbers and 
//returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
const sumArray = function(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
 
}
console.log(sumArray([2,4,5]));

//5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and 
//returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(product) {
  let prod = 1; 
  for (let p = 0; p < product.length; p++) {
      prod = prod * product[p];
}
return prod;
}

console.log(multiplyArray([2,4,5]));

//6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function
//when called.
const numArgs = function() {
    return arguments.length;
}

console.log(numArgs(1));

//7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, 
//and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
let newWord = ' ';

function reverseString(word) {
  for(let w = word.length - 1; w >= 0; w--) {
    newWord += word[w];
  }
  return newWord;
}
console.log(reverseString('rockstar'));

//8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument 
//and returns the length of the longest string.

//9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number 
//as arguments; and returns an array of the strings that are longer than the number passed in. For example, 
//stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

//10. Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, 
//adds them together, and returns the resulting sum. Assume all parameters will be numbers. 
//If called with no arguments, return 0 (zero).

//Bonus - If you have time, feel free to complete more than 6 of the above 10 functions. More practice is always better!
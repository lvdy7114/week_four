//Practice Activity 1: Write a Function Declaration
//Write a function named computeArea using the function declaration approach
//It will have two parameters: width & height
//It will compute the area of a rectangle (width multiplied by height) and return a string in the following form: 
//The area of a rectangle with a width of __ and a height of __ is __ square units. 
//Invoke the function to test it. 

function computeArea(width,height) {
    return width * height;
    
}

let width = 5;
let height = 10;

let area = computeArea(width,height);

console.log('The area of a rectangle with a width of ' + width + ' and a height of ' + height + ' is ' + area + ' square units.' );

//Practice Activity 2: Write a Function Expression
//Write a function named planetHasWater using the function expression syntax.
//It will have one parameter: planet.
//Return true if the planet argument is either "Earth" or "Mars", otherwise return false.
//Bonus points if you ensure the function will work regardless of the casing of the planet being 
//passed in ('earth', 'MARS', etc.).
//Invoke the function a couple of times to test it!

/*
const planetHasWater = function(planet) { 
    let p = planet[p].toUpperCase() + planet.slice(1).toLowerCase();
    if(p === 'Earth' || p === 'Mars') {
        return true;
    }
    return false;
};
console.log(planetHasWater("mars"));
/*



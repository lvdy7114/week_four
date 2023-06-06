//Arrays within Objects
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"], 
    companion: { 
		name: "Velma",
		type: "Bat" },
    companion: {
			name: "Tim",
			type: "Parasite", 
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
}


console.log(adventurer.belongings);
console.log(adventurer.belongings[0]);

//Iterate Over an Array within an Object
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}

//Object within an Object
console.log(adventurer.companion);

//companion's type
console.log(adventurer.companion.type);

//Object within an Object within an Object...
//What would you write to console.log Tim's type? 
console.log(adventurer.companion.type[1]); //be sure brackets are in proper place in object. //parasite

//Array within an Object within an Object within an Object.....
//What would your write to console.log "health insurance"?
console.log(adventurer.companion.belongings[2]);

//An Array of Objects
const movies = [ { title: "Tokyo Story" },  { title: "Paul Blart: Mall Cop" }, { title: "L'Avventura" } ];
console.log(movies[0]);

//You could reference the properties by first asking for the index, then the property:
console.log(movies[0].title);

//loop over the arrays.
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}

//Combining Objects, Arrays, and Functions
//You can create a property for an object that is an array:
const foo = {
    someArray:[1,2,3]
};
foo.someArray[0]; // 1

//You can create a property for an object that is an object:
const foo1 = {
    someObject: {
        someProperty: 'oh hai!'
    }
};
foo1.someObject.someProperty; // oh hai!

//You can create a property for an object that is a function (method):
const foo2 = {
    someMethod:()=>{
        console.log('oh hai');
    }
};

foo2.someMethod();// logs 'oh hai!'

//You can store an object in an array:
const foo3 = [{someProperty:'weee'}, 2, 3];

console.log(foo3[0].someProperty);

//You can store an array in an array:
const foo4 = [
    ["0,0", "0,1", "0,2"],
    ["1,0", "1,1", "1,2"],
    ["2,0", "2,1", "2,2"]
];

foo4[1][2]; //1,2

//You can store a function in an array:
const foo5 = [
    1,
    "hi",
    ()=>{
        console.log('fun');
    }
];

foo5[2]();

//Adding Classes
//Character Class - When creating a class, 
//it's best practice to capitalize the first letter of the variable, so we know it's a class. 
//Now we can "instantiate" or create new objects using this class. 
//We do this by adding the new keyword before calling the class name like a function.
//Adding Methods to Character
//These methods can, of course, take parameters:
//If we have multiple methods, don't put commas between them:
//Let's add some properties with a constructor function:
//Custom Constructors -We need a way to customize each object. 
//Our constructor function can take params which we can use to alter the properties of the object instantiated. 
//This allows us to customize each instance:
//Class Methods - can define a method that will alter that for us. 
//This way, everything is done with methods that have predictable results on our objects. 
//Object Interactions- we can pass an object to another object to have them interact.

class Character {
	constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
	  this.legs = 2;
	  this.arms = 2;
	  this.name = name;
	  this.age = age;
	  this.eyes = eyes;
	  this.hair = hair;
	  this.lovesCats = lovesCats;
	  this.lovesDogs = lovesDogs || false;
	}
	greet (otherCharacter) {
	  console.log('Hi ' + otherCharacter + '!');
	}
	classyGreeting (otherClassyCharacter) {
	  console.log('Greetings ' + otherClassyCharacter.name + '!');
	}
	setHair (hairColor) {
	  this.hair = hairColor;
	}
	smite () {
	  console.log('I smite thee you vile person!');
	}
	//method of an action and is repetitive
	walk() {
		console.log(`${this.name} walks.`)
	}
  }
  const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
  const me = new Character('Wendel the Wavy', 32, 'brown', 'wavy blonde');
  you.walk() + me.walk();
  
  me.classyGreeting(you);
  you.classyGreeting(me);

//Inheritance we can extend our Character class to create our Hobbit.  With a constructor and super
class Hobbit extends Character {
	constructor (name, age, eyes, hair) {
	  super(name, age, eyes, hair);
	  this.skills = ["thievery", "speed", "willpower"];
	}
	steal () {
	  console.log("Let's get away!");
	}
	greet (otherCharacter) {
	  console.log(`Hello ${otherCharacter}.`);
	}
	smite () {
	  super.smite();
	  this.steal();
	}
  }
  
  const frodo = new Hobbit('Frodo', 30, 'brown', 'black')
  console.log(frodo);

//////////////Additional Classes - Lab Activity///////////////////
/*
Make a class of Elves, Dwarves, Men, or something else that resonates with your fantasy world. 
Be creative and share your class with the class.
*/
 //////Fantasy world creation activity starts here/////
class Mermaid {
	constructor(name, age, location, eyes, hair, fins) {
		this.name = name;
		this.age = age;
		this.location = location;
		this.eyes = eyes;
		this.hair = hair;
		this.fins = fins;
		
	}
	setHair (hairColor) {
		this.hair = hairColor;
	  }
	setEyes (eyeColor) {
		this.eyes = eyeColor;
	}

	setFins (finColor) {
		this.fins = finColor;
	}
	
	greet() {
		console.log(`Hello, my name is ${this.name}, and I'm ${this.age}-year-old from ${this.location}!`);
	}
	toString(mermaid = 'Mermaid') {
		return `I have ${this.eyes} eyes with ${this.hair} hair color, and my fin color is ${this.fins}! I'm a ${mermaid}!`;
	  }
	
}
const mermaid = new Mermaid('Ariel', 21, 'under the sea', 'green', 'red', 'green');
mermaid.greet();
console.log(mermaid.toString()); 

const mermaid1 = new Mermaid('Tress', 32, 'Triton', 'hazel', 'brown', 'blue');
mermaid1.greet();
console.log(mermaid1.toString());

const mermaid2 = new Mermaid('Elyse', 28, 'Atlantia', 'blue', 'blonde', 'pink');
mermaid2.greet();
console.log(mermaid2.toString());

class Aquaman extends Mermaid {
	constructor(name, age, location, eyes, hair, fins) {
	  super(name, age, location);
	  this.hair = hair;
	  this.name = name;
	  this.age = age;
	  this.eyes = eyes;
	  this.fins = fins;
	}
	toString(aquaman = 'Aquaman') {
		return super.toString(`${aquaman}`);
	  }
  }

  const aquaman = new Aquaman('Arthur',31, 'the underwater kingdom of Atlantis', 'green', 'dark brown', 'green');
  aquaman.greet();
  console.log(aquaman.toString());
 //////Fantasy world creation activity completed/////

 /*Create a Factory
Sometimes we need to have a "factory" object that will generate other objects.
The purpose of the factory is so it can control the creation process in some way.
This is usually a single object that exists throughout the program that performs a set of functions, 
also called a singleton.Let's start with magical tome.
 */
class Tome {
	constructor (maker, serialNum, spellType) {
	  this.maker = maker;
	  this.spellType = spellType;
	  this.serialNum = serialNum;
	}
	cast () {
	  console.log('Casting a spell!');
	}
  }

const fireTome = new Tome('Merlin', 'Fire', 1);
console.log(fireTome);

//Now let's make a factory class that will make tomes for us.
class Factory {
	constructor (maker) {
	  this.maker = maker;
	  this.tomes = [];
	}
	generateTome (spellType) {
	  const newTome = new Tome(this.maker, spellType, this.tomes.length);
	  this.tomes.push(newTome);
	}
	findTome (index) {
	  return this.tomes[index];
	}
  }
  
  const merlin = new Factory('Merlin');
  merlin.generateTome('Fire');
  merlin.generateTome('Water');
  merlin.generateTome('Earth');
  merlin.generateTome('Air');
  console.log(merlin);
  console.log(merlin.findTome(0));

  //Now we can easily create another new factory that produces its own tomes.
const gandalf = new Factory('Gandalf');
gandalf.generateTome('Light');
gandalf.generateTome('Dark');
console.log(gandalf);
console.log(gandalf.findTome(0));

/*Going Forward - Use the information and examples provided thus far to expand your game of Objects and Orcs!
To give you some ideas of what you could accomplish, try to:
Add additional classes to handle repetitive objects.
Add class methods to create new actions.
Add interaction between the objects of classes within your methods (could two Characters trade items?).
You could, for example, create an Inventories class that includes properties in the form of items and methods 
like add or remove. Your Characters could then have Inventory objects within their properties, and trade methods 
that access Inventory.add and Inventory.remove, as an example. Is this the best approach for this functionality? 
Explore and discover!
The possibilities are nearly endless. If you've run out of time for this lab, feel free to return later and continue
 your adventure!
*/

 //Inventories class
 class Inventories {
	constructor(items) {
	this.items = items;
	}
	add() {
		return this.items;
	}
	
 }

 const inventory = new Inventories(['medicine', 'herbs']);

 inventory.add();
 console.log(inventory);


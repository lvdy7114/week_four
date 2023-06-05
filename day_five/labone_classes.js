//JavaScript Classes
/*For the Cat class:
Give the class at least three properties.
Give the class at least three methods.
Create two instances of the class (two cats).
Log both instances to see their properties.
Invoke each method from both instances.
*/
class Cat {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
    intro() {
      console.log(`${this.name} is a ${this.breed} and is ${this.age} years old. `);
    }
    speak() {
        console.log(`${this.name} purrs and says meow.`)
    }
    toString(cat = 'Cat') {
		return `${this.name} is a ${cat}.`;
	  }

  }

const cat = new Cat('Bobo', 'Mainecoon', 4);
const cat1 = new Cat('Kimber', 'Scottish Fold', 2);
 cat.intro();
 cat1.intro();
 cat.speak();
 cat1.speak()
 console.log(cat.toString());
 console.log(cat1.toString());


/*For the Pirate class:
Create three properties that are set by the constructor.
Create three methods.
Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
Loop over each array and print three properties of each pirate.
When trying to think of properties and methods, remember that our classes are nouns, 
their properties are like adjectives, and their methods are like verbs.
*/
class Pirate {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }
  intro() {
    console.log(`My name is ${this.name} and I am ${this.age} years old.  I am currently sailing on the ${this.location}.`);
  }
  speak() {
      console.log(`${this.name} is the captain of this ship`)
  }
  toString(pirate = 'Pirate') {
      return `${this.name} is a ${pirate}.`;
    }
}

const jollyRoger = new Pirate('Captain Sparrow', 35, 'Atlantic Ocean');
const blackPearl = new Pirate('Captain Manih', 31, 'Pacific Ocean');

jollyRoger.intro();
jollyRoger.speak();
console.log(jollyRoger.toString());

blackPearl.intro();
blackPearl.speak();
console.log(blackPearl.toString());

//trying to figure out how to instantiate an array and loop it over three properties
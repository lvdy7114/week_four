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
  status() {
      console.log(`${this.name} is a pirate.`);
  }
  speak() {
      console.log(`${this.name} says ahoy mate!`);
    }
}

const jollyRoger = [new Pirate ('Sparrow', 35, 'Pacific Ocean'), new Pirate('Manih', 31, 'Pacific Ocean'), new Pirate('Pelle', 31, 'Pacific Ocean')];
const blackPearl = [new Pirate('Manji', 32, 'Atlantic Ocean'), new Pirate('Storm', 38, 'Atlantic Ocean'), new Pirate('Ice', 39, 'Atlantic Ocean') ];

//loop over three properties for each array
for (let i=0; i < jollyRoger.length; i++) {
	console.log(jollyRoger[i].intro() + jollyRoger[i].status() + jollyRoger[i].speak());
}

for(let j= 0; j < blackPearl.length; j++ ) {
 blackPearl[j].intro() + blackPearl[j].status() + blackPearl[j].speak();
}


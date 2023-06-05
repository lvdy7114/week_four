//////////////////////////////practice oop//////////////////////////////////
//use of the this keyword:
//person object with keys and values
const person = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer'
}

function introduce() {
  console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
}

//setting up introduce method for the person object
person.introduce = introduce;
person.introduce();
//Prints out::: Hello, my name is Elyan Kemble, and I'm a 32-year-old Front-End Developer from Garland, Texas!

//If we wanted to, we could also have included the function within our original object as a method, like so:
const person1 = {
  name: {
    first: 'Elyan',
    last: 'Kemble',
  },
  age: 32,
  location: {
    city: 'Garland',
    state: 'Texas',
    zip: 75040
  },
  occupation: 'Front-End Developer',
  //method here
  introduce1() {
    console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
  }
}

person1.introduce1();

//classes explained

/*Instantiating a Class
OOP vocabulary:
instance: An object created by a class.
instantiate: We instantiate a class to create an object.
instantiation: The process of creating an object.
In JS, we create objects using the new keyword when invoking (instantiating) the class:
*/
//instantiating example
//const v1 = new Animal();
/*The Constructor Method
When a class is being instantiated, the special constructor method in the class will automatically be called:
*/
/*
class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
}*/
/*
Note that unlike within object literals, methods are not separated by a comma.
Now, we have (almost) fully created our Animal class. If we wanted to instantiate all of the animals we had previously, 
we could do that with four lines of code!
The purpose of the constructor method is to initialize the data properties of the new object being created 
(represented by this).
If there are no properties to initialize, the constructor method is optional (a hidden default constructor is called).
*/
/*const cat1 = new Animal(2, 4, true, false); //2 eyes, 4 legs, isAwake, is not moving
const cat2 = new Animal(2, 4, false, false); //2 eyes, 4 legs, not awake, not moving
const dog1 = new Animal(2, 4, true, true); //2 eyes, 4 legs, isAwake, isMoving
const cow1 = new Animal(2, 4, true, false); //2 eyes, 4 legs, isAwake, not moving*/
/*
Object Instantiation
When we invoke the class prefaced with the new keyword, behind the scenes:

JS creates a new object (empty) and assigns it to the this keyword.
The constructor method is called with the arguments we provided when invoking the class. 
Remember, the constructor method is where we create/initialize properties on the new object assigned to this.
After the constructor is finished executing, the class automatically returns the new object.
Although the constructor method is special because it's called automatically, 
there's nothing special about how it's defined, other methods are defined the same way.
*/

/*Defining Methods in a Class
We're still missing some of the functionality we had in our original objects, so we need to define some methods.
There are two types of methods that can be added to a class:
*/
//Prototype (instance) methods. Prototype methods are the most common, 
//and are available to be called by any instance of the class.
//For example, when you use Array.prototype.forEach you can only use that method on an instance of an Array:
const nums = [1,2,3];
nums.forEach((num) => {
  console.log(num);
})
//Static (class) methods - Static methods are methods that are called on the class itself and cannot be called by instances.
//For example, when you use Math.random you don't need to create an instance of Math first:
console.log(Math.random());

/*Inheritance
Inheritance is the ability to create classes based on other classes. 
With inheritance, we can define a parent class that has certain properties and methods, 
and child classes that will inherit all of these properties and methods from their parent. 
The major benefit to inheritance is that those child classes can then add their own specific properties and methods, 
or override the parent's.
We use two new keywords to implement inheritance: extends and super.
The extends keyword declares what parent a child inherits from. 
For instance, we could create a new Cat class based on our Animal class by saying class Cat extends Animal. 
Within the child class, you can access properties and methods of the parent by using the keyword super. 
JavaScript inheritance implementation is prototype-based. We will discuss prototypes later within the lesson.
In JS, virtually every object inherits from the Object class and thus inherits its methods, such as toString:
*/

/*If we define a method that already exists in the object hierarchy, we "override" it.
For example, we can override the Object's toString method by adding it to our Animal class:
Concepts of inheritance to expand upon animals example by creating subclasses (child classes) 
for Cat, Dog, and Cow.
*/

class Animal {
	constructor(eyes, legs, isAwake, isMoving) {
		this.eyes = eyes;
    this.legs = legs;
    this.isAwake = isAwake;
    this.isMoving = isMoving;
	  // return is not needed because the new object is returned by default
	}
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
  toString(animal = 'Animal') {
    return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs with ${[this.hair, this.fur]} hair color. I ${this.isAwake ? 'am' : 'am not'} awake, 
    and I ${this.isMoving ? 'am' : 'am not'} moving.`;
  }
}

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo.");
  }
  toString() {
    return super.toString("Cow");
  }
}
/*
Take note of the following:
We changed the toString() method of Animal to accept a parameter, 
but given it a default value for when we don't call it from our child classes.
We use super() within the constructor to set properties more easily, 
and no longer need eyes or legs as parameters for our child class constructors because they 
are consistent across child classes. Calling super() within the constructor will automatically call 
the parent's constructor method, but it must be called before any other references to this.
We use super.speak() within speak to avoid repetition. If we wanted to change how all animals speak, 
we could continue to do so within the Animal class. We do something similar with toSpeak().
If you wanted to completely change the speak() or toString() methods in these children classes, you could.
*/

//instantiate animals class
const cat1 = new Cat("Orange", true, false);
const cat2 = new Cat("Black and White", false, false);
const dog1 = new Dog("Gold", true, true);
const cow1 = new Cow("Brown", true, false);

console.log(cat1.toString());
cat1.speak();
console.log(cat2.toString());
cat2.speak();
console.log(dog1.toString());
dog1.speak();
console.log(cow1.toString());
cow1.speak();

/*Using this example as inspiration, create a Human class that extends Animal. 
Think about how you could go about implementing the functionality above in the context of the already-created parent class. 
Could you add some of these properties to the Animal class? How would that change the structure of your other child classes?
*/
class Human extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 2, isAwake, isMoving, person.name, person.age);
    this.hair = hair;
    this.name = person.name;
    this.age = person.age;
    
  }
  speak() {
    super.speak("Funny fact:");
  }
  toString() {
    return super.toString("Human");
  }
}
//Once you are finished, instantiate a Human and introduce(). 
const human = new Human("blonde", true, true);
person.introduce();
human.speak();
console.log(human.toString());

/*displays//
This Cat has 2 eyes and 4 legs with ,Orange hair color. It is awake,
    and is not moving.
Meow...
This Cat has 2 eyes and 4 legs with ,Black and White hair color. It is not awake,
    and is not moving.
Meow...
This Dog has 2 eyes and 4 legs with ,Gold hair color. It is awake,
    and is moving.
Woof!
This Cow has 2 eyes and 4 legs with Brown, hair color. It is awake,
    and is not moving.
Moo.
Hello, my name is Elyan Kemble, and I'm a 32-year-old Front-End Developer from Garland, Texas!
Funny fact:
This Human has 2 eyes and 2 legs with blonde, hair color. It is awake,
    and is moving.
*/
/*
Encapsulation is the ability for an object to decide what information is shows to the outside world and 
what information it keeps to itself. It also encourages methods that specify how certain properties are 
accessed or modified. In order to implement encapsulation, we need public and private properties and methods. 
In JavaScript, all object properties and methods are public by default, which means they can be accessed 
from outside of the object itself. 
Private properties, on the other hand, cannot be accessed externally. In order to create a private property, 
we must declare it using the # symbol at the top of the class definition (outside of the constructor). 
These declarations are called "hash names," since they use the hash prefix #. Legacy code has _
Attempting to access the private properties them will result in a SyntaxError.  Now that it's 
inaccessible, let's provide controlled access using methods called getters and setters. 
Getters and setters do exactly what they sound like they do - get and set specific data. 
In order to create getters and setters, we use the get and set keywords.
In OOP, we use getters and setters to control exactly how specific data is accessed, modified, or deleted
so that our objects behave predictably.  Encapsulation helps prevent bugs.
When creating objects, it's important to note that not every field needs a getter and/or a setter. 
If we did not need the ability to change a learner's name or age, for example, we could forgo those setters
and simply create getters 
*/

/*Object factory -A factory function is a function that returns an object. By creating objects with factories, 
we avoid the use of the new keyword. Generally speaking, factories are wonderful for creating copies of simple objects, 
but lose out on much of the flexibility of working with classes as complexity increases.
Objects created by factories also do not benefit from the prototype chain, as they are simple objects.
Here's an example factory function, and how it could be written with a constructor function instead:
*/

/*Static Properties and Methods. So far, we've been instantiating all of our examples in order to work with them, 
but we know from experience that this is not always necessary. The Math.random() method, which we have mentioned before, 
does not require an instance of the Math class in order to be called. Similarly, the property Math.PI can be accessed 
without instantiation. These are called "static" properties and methods.

Static methods are often used to create utility functions that perform actions that are independant of the state of an 
individual object.
Static properties are useful for caches, fixed-configuration values, or other data that does not need to be replicated 
across each instance of the class's objects.
What kind of static properties and methods could we add to our example classes? Remember, static features need to be 
independant of the state of individual objects.
Let's look at a more practical example. Say that we wanted to get the average of a set of grades without needing to 
instantiate a Learner object and assign all of the grades to that specific learner. Let's create a Grades class with a 
single static method that will look very familiar:
*/
class Grades {
  static getAverage(...grades) {
    const arr = [];

    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });
    
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
}
//Now we can use Grades.getAverage() to calculate the average of an arbitrary list of grades without instantiating 
//or affecting the state of any Learner objects.

/*We could take this example one step further - what if you continued to expand the Grades class such that it had 
its own constructor, private array of grades, getters, and setters? We could then remove all of this logic from our 
Learner class and instead instantiate a Grades object within the Learner class in order to hold and interact with that 
data.
What would be the benefits of doing this? What are the downsides?
Here's what that might look like:
*/
class Learner {
  #grades;
  #name = {
    first: "",
    last: ""
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;

    this.#grades = new Grades();
  }
  get name() {
    return this.#name.first + " " + this.#name.last;
  }
  get age() {
    return this.#age;
  }
  addGrades(...grades) {
    this.#grades.addGrades(grades);
  }
  get grades() {
    return this.#grades.grades;
  }
  get average() {
    return this.#grades.average;
  }
}

class Grades {
  #grades = [];

  constructor(initialGrades) {
    if (initialGrades) {
      this.addGrades(initialGrades);
    }
  }
  static getAverage(...grades) {
    const arr = [];
    this.addToArray(arr, grades);
    return this.avgArray(arr);
  }
  static addToArray(arr, grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        arr.push(grade);
      }
    });
  }
  static avgArray(gradeArray) {
    const arr = [...gradeArray];
    arr.sort((a, b) => a - b).shift();

    return arr.reduce((a, b) => a + b) / arr.length;
  }
  addGrades(...grades) {
    Grades.addToArray(this.#grades, grades.flat());
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    return Grades.avgArray(this.#grades);
  }
}

/*
Take a few minutes to analyze the changes made to these two classes, and try to determine the reasoning behind 
each of them. Copy the code and test it for yourself to see how the functionality may have changed or expanded.
While this may or may not seem practical, it does demonstrate a very common occurence in development. 
You will often be given tools like packages, modules, and classes that already handle some of the functionality 
you are looking to implement, but you need to integrate them with your own work. In the above example, 
if we were given the Grades class and told how its methods worked, it would certainly inform our decision-making process 
when creating the Learner class, since there would be no reason to recreate those methods from scratch.
*/
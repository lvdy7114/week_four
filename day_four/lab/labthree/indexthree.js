//Pass by Value and Pass by Reference. 
//Create shallow copies of objects.
//Create deep copies of objects.
//Use pass by value to manipulate copies of data.
//Use pass by reference to manipulate data in place.

const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
}

/*1. People move location frequently. Create a new function moveLocation().
moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.
The location object will have the properties city, state, and zip.
The function should change the city, state, and zip properties of the person to match those of the new location.
 */

function moveLocation(person, location) {
    person.location.city = location.city;
    person.location.state = location.state;
    person.location.zip = location.zip;
}

//Test your function by using the following code. Does personTwo now live in Rochester? (They should.)
const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location.city);

/* 2. Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. 
However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations 
every time they move.

Set Julie's location to Timmy's location by reference.
Test this new link by using the following code, which utilizes our already-completed moveLocation() function 
with no changes necessary. Do both people now live in California? (They both should.)
 */

const newLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}
moveLocation(personOne,newLoc);
moveLocation(personTwo,newLoc); //added this to code to reflect Julie in CA. 

console.log(personOne.location, personTwo.location);

/* 3. The happy couple are having a baby! Create a new object personThree.
Set personThree.name.first to whatever you'd like, and personThree.
name.last to a hyphenated combination of personOne and personTwo's last names.
Give personThree an age of 0.
Set personThree's location to that of their parents, by reference so that the baby stays with its family.
Test your code's behavior by using your moveLocation() function.
*/

const personThree = {
    name: {
        first: 'Tiju',
        last: 'July-Timtim'
    },
    age: 0,
    location: {
        city: 'Mountain View',
        state: 'CA',
        zip: 94035
    }
} 

moveLocation(personThree,newLoc);
console.log(personThree);

//4. Years go by, and personThree is ready for a life of independance.
//Increment everyone's age values by 20.
personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;
console.log(personOne.age, personTwo.age, personThree.age);

//Create a copy of personThree's location that breaks the reference to the current location object, 
//and set their location to that copy.
moveLocation(personThree, personThree.location);
console.log(personThree.location);

//Test your code by having personThree moveLocation() to Buffalo, NY (nLoc)
moveLocation(personThree,nLoc);
console.log(personThree.location);

//Does this change the locations of personOne or personTwo? (It shouldn't.)
console.log(personOne.location, personTwo.location);  //not changed

/* Welcome to the future! We've invented both immortality and cloning.
Check the age values of your original persons to make sure you did not accidentally set them to 0! 
*/
//Increment everyone's age values by 300.
personOne.age += 300;
personTwo.age += 300;
personThree.age += 300;
console.log(personOne.age, personTwo.age, personThree.age);

//Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age 
//set to 0. 

function clonePerson(personCopy) {
    const newPerson = {
        name: {},
        age: 0,
        location: {}
    };

    newPerson.name.first = personCopy.name.first;
    newPerson.name.last = personCopy.name.last;
    newPerson.age = personCopy.age;
    newPerson.location.city = personCopy.location.city;
    newPerson.location.state = personCopy.location.state;
    newPerson.location.zip = personCopy.location.zip;

    return newPerson;
}

//These are all independant clones, so each should be able to move to its own location. 
//Test your code by creating several clones of our persons and using moveLocation() to send them elsewhere. 
const cloneOne = clonePerson(personOne);
const cloneTwo = clonePerson(personTwo);
const cloneThree = clonePerson(personThree);

const newCloneLoc = {
    city: 'Clone city', 
    state: 'Clone state', 
    zip: 'Clone zip'
}

const cloneInn = {
    city: 'Clone Indie',
    state: 'Clone Independence',
    zip: 'Zip In'
}

const clonePlace = {
    city: 'Clone Place',
    state: 'Clone Somewhere',
    zip: 'Zip Clone'
}

moveLocation(cloneOne, newCloneLoc);
moveLocation(cloneTwo, cloneInn);
moveLocation(cloneThree, clonePlace);


//Are these locations unaffected by each other? (They should be.)
console.log(cloneOne, cloneTwo, cloneThree);
console.log(personOne, personTwo, personThree);

/* The hive mind has taken over... Create a new object called thoughts and give it some properties.
Set personOne.thoughts to your thoughts object by reference.
Do this for all of your persons and clones, such that changing the original thoughts object modifies the 
.thoughts property of every person.
Test your code by modifying everyone's thoughts with a single line of code. Pass by reference is powerful.
*/

const thoughts = {
    mind:'deep'
}

    personOne.mind = thoughts;
    personTwo.mind = thoughts;
    personThree.mind = thoughts;
    cloneOne.mind = thoughts;
    cloneTwo.mind = thoughts;
    cloneThree.mind = thoughts; 

    console.log(personOne, personTwo, personThree);
    console.log(cloneOne, cloneTwo, cloneThree);

thoughts.mind = 'shallow';

console.log(personOne, personTwo, personThree);
console.log(cloneOne, cloneTwo, cloneThree);

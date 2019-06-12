/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Object: 'this' would refer to the many global objects that belong to the window.
* 2. Implicit Binding: 'this' would refer to whatever object is created and invoked with the class containing 'this'.
* 3. New Binding: 'this' would refer to the object created based on the constructor function.
* 4. Explicit Binding: 'this' would refer to the context variable within either a .call() or .apply() function.
*
* write out a code example of each explanation above
*/

// Principle 1
function firstThis(arg) {
    console.log(arg);
}
firstThis(this);

// Principle 2
const Person = function(name) {
    return {
        name: name,
        sayName: function() {
            console.log(this.name);
        }
    };
};
const luis = Person('Luis');
luis.sayName();

// Principle 3
const Hobbies = function(hobbies1, hobbies2, hobbies3) {
    this.hobbies1 = hobbies1,
    this.hobbies2 = hobbies2,
    this.hobbies3 = hobbies3
}
const myHobbies = new Hobbies('skateing', 'guitar playing', 'coding');
console.log(myHobbies);


// Principle 4
const aboutMe = function(item1, item2, item3) {
    console.log(`Hello my name is ${this.name}, and I am ${this.age} years old. I love ${item1}, ${item2}, and ${item3}!`);
}
const luis2 = {
    name: "Luis",
    age: 24,
}
let hobbies = ['coding', 'skateboarding', 'music'];
aboutMe.apply(luis2, hobbies);
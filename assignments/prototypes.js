console.log("********** START OF PROTOTYPE.JS **********");
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
// ********** GameObject ********** //

function GameObject(values) {
  this.createdAt = values.createdAt;
  this.name = values.name;
  this.dimensions = values.dimesions;
}
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`;
}


// ********** CharacterStats ********** //

function CharacterStats(charStats) {
  GameObject.call(this, charStats); // Goes upstream
  this.healthPoints = charStats.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype); // Creates CharacterStats prototype from GameObject

CharacterStats.prototype.takeDamage = function() { // Creates a 'takeDamage' method
  return `${this.name} took damage.`;
}


// ********** Humanoid ********** //

function Humanoid(humanoidStats) {
  CharacterStats.call(this, humanoidStats); // Goes upstream
  this.team = humanoidStats.team;
  this.weapons = humanoidStats.weapons;
  this.language = humanoidStats.language;
}
Humanoid.prototype = Object.create(CharacterStats.prototype); // Creates Humanoid prototype from CharacterStats

Humanoid.prototype.greet = function() { // Creates a 'greet' method
  return `${this.name} offers a greeting in ${this.language}.`
}


// ********** Villan ********** //

function Villain(villainStats) {
  Humanoid.call(this,villainStats);
  this.specialPower = villainStats.specialPower;
  this.defence = villainStats.defence;
}
Villain.prototype = Object.create(Humanoid.prototype);

// ********** Hero ********** //
function Hero(heroStats) {
  Humanoid.call(this,heroStats);
  this.armor = heroStats.armor;
}
Hero.prototype = Object.create(Humanoid.prototype);
Hero.prototype.healthBoost = function() {
  return 'Health Boost: ' + this.healthPoints * 2;
}


  const theVillain = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 20,
      width: 10,
      height: 11,
    },
    healthPoints: 5,
    name: 'Luis',
    team: 'The Underworld',
    weapons: [
      'A skateboard',
    ],
    language: 'Spanish',
    specialPower: 'Lazer Beam Eyes',
    defence: 'Runs away',
  })

  const theHero = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: -20,
      width: -10,
      height: -11,
    },
    healthPoints: 115,
    name: 'Luis',
    team: 'Wizard',
    weapons: [
      'Wizard Stuff',
    ],
    language: 'Wizardry',
    armor: 'Wizard Armor',
  })

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(theVillain.specialPower);
  console.log(theHero.healthBoost());

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
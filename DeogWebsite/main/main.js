var fame = 'hello';

console.log(fame === "hello"); 
console.log("I am so stupid");

/*
var itemOne = document.getElementById("hot");
var eltext = itemOne.firstChild.nodeValue;
eltext = eltext.replace("hi", "yeah");
itemOne.firstChild.nodeValue = eltext;
*/

const getComputerChoice = () => {
  var random = Math.floor(Math.random() * 3)
  if (random === 0) {
    random = 'rock';
    return random;
  } else if (random === 1) {
    random = 'paper';
    return random;
  } else if (random === 2) {
    random = 'scissors';
    return random;
  }
}

console.log(getComputerChoice());

var sum = 0;
function addThree() {
  sum += 3;
}

var testObject = {
  name: 'Test Object',
  number: 14,
  12: 'Good'
}

console.log(testObject[12]);

const foo = ['one', 'two', 'three']
let [a, b, c, d = 'four'] = foo;
console.log(a, b, c, d);


const spaceShuttle = function(targetPlanet) {
  this.targetPlanet = targetPlanet;
}

var zeus = new spaceShuttle('Jupiter');

console.log(zeus.targetPlanet);

let jeff = function() {
  console.log(this.name);
}

/*
const obj1 = {
  name: 'Jeffery',
  func: jeff,
  print: () => {
    setTimeout(() => console.log(this));
    let arrow = () => console.log(this);
    arrow();
  }
}

obj1.print(); */

function Pet(name) {
  this.name = name;
  this.getName = () => this.name;
}

const cat = new Pet('Fluffy');


const numbers = [1, 2];

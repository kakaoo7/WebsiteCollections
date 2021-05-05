function MyCat() {
  this.name = 'meow meow';
  this.hello = function() {
    console.log(`hello ${this.name}.`);
  }
}

let him = new MyCat();

function testFunc() {
  console.log('hello ' + this.name);
}

function Rabbit(name, countLegs) {
  console.log(this instanceof Rabbit); // => true
  this.countLegs = countLegs;
  this.name = name;
  testFunc.call(this);
}

const myRabbit = new Rabbit('White Rabbit', 4);

// Constructor invocation

function myObject(name, title) {
  this.title = title;
  this.func = testFunc;
  this.name = name;
}

const liveObject = new myObject('live', 'amazing');

liveObject.func();

let variable = {
  this: this,
  name: 'variable2',
  eventFunc() {
    console.log(this.name);
  }
}

//console.log(variable)

function random() {
  let a = 10;
  function randomOne() {
    console.log('hello this is randomOne function.');
  }
  randomOne();
}


let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
}

let tryReassignment = (obj) => {
  obj.identified = false;
  console.log(obj); // Prints {'identified': false, 'transport type': 'flying'} 
}

tryReassignment(spaceship) // The attempt at reassignment does not work.
console.log(spaceship) // Still returns {homePlanet : 'Earth', color : 'red'};

let a = []
let b = a       // a and b refer to the same thing
b.push(3)       // modify from b
console.log(a)  // observe effect from a


let tempObj = {
    _num: 22,
    get num() {
        return this._num;
    }
};

let functions = {
  name: 'Deog',
  arrowTest() {
    let arrow = () => {
      return this.name
    }
    return arrow();
  }
}

console.log(functions.arrowTest);

function person(firstName, lastName, age) {
  return {
    FirstName: firstName,
    LastName: lastName,
    Age: age
  };
  
}

const helloWorld = person('Caleb', 'Hey', 20);
console.log(helloWorld);

/*
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1
  }
  for (let i=num-1; i > 0; num--) {
    num*=i;
  }
  return num 
}

console.log(factorial(6)); */

let compareSort = (array) => {
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i+1]) {
            done = false;
            let temp = array[i];
            array[i] = array[i+1];
            array[i+1] = temp;
        }
    }
  }
  return array
};

console.log(compareSort([1, 200, 4, 10, 6, 7, 8, 121, 2]));

let x = 10, y = 20;

let abc = (x, y) => {
  x = x+10;
  y = y+10;
  console.log(x);
  console.log(y);
  return x*10
}

let z = abc(x,y) + abc(x,y);
console.log(x);
console.log(y);
console.log(z);

let coin = 5;
let count = 0;

while (coin < 300) {
  coin = Math.round(coin*1.5);
  count++;
}

console.log(count);
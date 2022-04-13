// let ve const block scope, var functional scope
//reference error!

//##### REFERENCE TYPE #####
var object1 = { value: 10 }; // we create a new adress
var object2 = object1; // we want to store same address like object1
var object3 = { value: 10 }; // we create a new object

console.log(object1 === object2); //true
console.log(object1 === object3); //false

object1.value = 15;
console.log(object2.value); // 15

// A reference type, which is a non primitive type, are not defined by the programming languages. That means they're created by the programmer.
// Arrays are just objects at the end of the day

[] === []; //false

//##### CONTEXT vs SCOPE #####
function func() {
  let i = "a"; // That lives inside of these brackets
  // It doesnt know anything about root scope
}
console.log(i);

// Context tells you where we are within the object
console.log(this === window); //true
// This just refers to what object its inside of

function a() {
  console.log(this);
}

a(); // Window object

const object4 = {
  a: function () {
    console.log(this);
  },
};
object4.a(); // {a: f}

//##### INSTANTIATION #####
// Instantiation is when you make a copy of an object and
// reuse the code
// We can make instances or multiple copies of an object
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi i am ${name}, I'm a ${type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");


// Optional

function printName(obj: { first: string; last?: string }) {
    
  }
 
  printName({ first: "Bob" });
  printName({ first: "Alice", last: "Alisson" });

  // Function


  function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
  }
   
  greet("Maddison", new Date());

// Array

 let data:string[]= ['fjfj','fjf']
data.push('fhf')
console.log(data)

// Object 

  interface Point {
    x: number;
    y: number;
  }

 let user:Point ={  
     x:55,
     y:44   
 }
 console.log(user)
 
// Union Types

let data:number| string = 'djd'
data=22

console.log(data)

// Example Union types
function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  
  printId(101);
  
  printId("202");
 
 
  //Interfaces

  interface Point {
    x: number;
    y: number;
  }
   
  function printCoord(pt: Point) {  
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoord({ x: 100, y: 100 });


  //Type 

  type point = {
    x: number;
    y: number;
  };
   
  // Exactly the same as the earlier example
  function PrintCoord(pt: point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  PrintCoord({ x: 100, y: 100 });



  // Null and Undefine

  function doSomething(x: string | null) {
    if (x === null) {
      // do nothing
    } else {
      console.log("Hello, " + x.toUpperCase());
    }
  }



  //in operator

  type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

// instanceof


function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
 
    } else {
      console.log(x.toUpperCase());
                 
  
    }
  }

  // Assignments

  let x = Math.random() < 0.5 ? 10 : "hello world!";
   
x = 1;
 
console.log(x);
           
    x = "goodbye!";
 
console.log(x);

// Generic Functions

function user<T>(data:T):T{
  return data
}

console.log(user({name:'djd',age:56}))
// Function Overloads


function makeDate(timestamp: number): Date;

function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
//Parameter Destructuring

//  Assignability of Functions

// 

function greeter(fn: (a: string) => void) {
    fn("Hello, World");
  }
   
  function printToConsole(s: string) {
    console.log(s);
  }
   
  greeter(printToConsole);


  // Function Overloads


function makeDate(timestamp: number): Date;


function makeDate(m: number, d: number, y: number): Date  //symbol


    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);


// Class 

class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
console.log(`${pt.x}, ${pt.y}`);

// Constructors


class Point {
  x: number;
  y: number;
 
      constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;

  }
  cons n1=new point()
  n1.point()
  console.log(n1)
}

// Constructors Example
class Point {
  x: number;
  y: number;
 
      constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;

  }

  get(){
console.log( 'x'+ this.x)
console.log( 'y'+ this.y)

  } 
  cons n1=new point()
  n1.get()
}
 // Getters / Setters

   class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

// Inheritence 

class Animal {
  move() {
    console.log("Moving along!");
  }
}
 
class Dog extends Animal {
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log("woof!");
    }
  }
}


   // Enum

   enum Days{
     mon,tue,wed,thu,fri,sat,sun
   }
let day:Days;
day=Days.wed
console.log(day)
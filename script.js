//filter
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 52 },
  { name: "Charlie", score: 70 },
  { name: "David", score: 45 }
];
const failedStudents=students.filter(student=>student.score<60);
console.log(failedStudents);


//Arrow function
const add = (a, b) => a + b;
console.log(add(5, 6));


//Arrow function without parameters
const hello = () => {
    console.log( "Hi from GeekforGeeks!" );
}
hello();


//Arrow function with single parameter
const square = x => x*x;
console.log(square(5));


//Arrow function with multiple parameters

const hii = ( x, y, z ) => {
    console.log( x + y + z )
}

hii( 10, 20, 30 );


//Arrow function with default parameters

const greet = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}
greet( 16, 14 );


//return object literals

const Person = (firstName, lastName) =>
({first: firstName, last: lastName});
console.log(Person("venky", "srii"));


//this keyword

const person = {
    name: "The World",
    greet() {
        return `Welcome To, ${this.name}`;
    }
};
console.log(person.greet());


// use strict  

"use strict";
console.log("Strict mode enable");

function myFunction() {
    "use strict";
    let x = 3.14;
    console.log(x);
}


//let keyword

let a = 18;
{
    let a = 9; // Block-scoped variable
    console.log(a);
}
console.log(a);


 //const keyword

 const PI = 3.14159;
 PI = 3; 

//spread operator

const num1 = [ 11,22,33 ];
const num2 = [...num1, 44, 55 ];
console.log(num2);


//The for/of loop

const s = ["mango","apple", "banana", "cherry" ];
for (const fruit of s) {
    console.log(fruit);
}

//interating over string

const v = "srilatha";
for (const char of v) {
    console.log(char);
}


//map

const map = new Map();
map.set("a", 10);
map.set("b", 15);
map.set("c",20);
console.log(map.get("c"));


//set

const set = new Set([ 1, 2, 3, 3,4,5,9,7,8,2,8,4,8 ]);
console.log(set);

//classes

class Animal {
    bark() { console.log("Barking"); }
}
const dog = new Animal();
dog.bark();

//promises

const fetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data  successfully fetched"), 3000);
    });
};
fetch().then(data => console.log(data));


//var hoisting

console.log(m); 
var m = 5;

//redeclaring the var

var p = 10;
var p = 20; 
console.log(p);


//

function outer() {
    console.log(a); // undefined
    var a = 5;
    function inner() {
        console.log(b); // undefined
        var b = 10;
    }
    inner();
}
outer();


//async 

const getData = async () => {
    let data = "this is srilatha";
    return data;
}
getData().then(data => console.log(data));


//await

const getData1 = async () => {
    let y = await "this is venky";
    console.log(y);
}

console.log(1);
getData1();
console.log(2);


//array.values()

const o = ["Apple", "Banana", "Cherry"];
const res = o.values();

for (const value of res) {
    console.log(value);
}


//array.reverse()

let q = [1, 2, 3, 4, 5];
q.reverse();
console.log(q);


//array.filter()

let a1 = [1, 2, 3, 4, 5]
let a2 = a1.filter((num) => num > 1)
console.log(a2)


//array.slice()

const i1 = [1, 2, 3, 4, 5];
const res1 = i1.slice(1, 4);
console.log(res1); 
console.log(i1)


//array.splice()

let b1 = [20, 30, 40, 50];
b1.splice(1, 3);
b1.splice(1, 0, 3, 4, 5);
console.log(b1);


//array.pop()

let v1 = [20, 30, 40, 50];
v1.pop();
console.log(v1);


//array.push()

let v2 = [10, 20, 30, 40, 50];
v2.push(60);
v2.push(70, 80, 90);
console.log(v2);


//array.join()

let a4 = ["HTML", "CSS", "JS", "React","Angular"];
console.log(a4.join('|'));


//array tostring()

let a5  = ["HTML", "CSS", "JS", "React","Angular"];
let s1 = a5.toString();
console.log(s1);


//array length

let j1 = ["HTML", "CSS", "JS", "React","Angular"];
console.log(j1.length);


//for loop

for (let x = 2; x <= 5; x++) {
    console.log("Value of x:" + x);
}


//to print array of elements

let arr = [10, 20, 30, 40,50,60,80];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); 
}


//while loop

 let count = 1;
 while (count <= 10) {
  console.log(count);
  count++;
 }


//do while loop

let count = 1;
do {
  console.log(count);
  count++;
} while (count <= 10);


//for in loop

const k = [1, 2, 3, 4, 5];

for (const i in k) {
  	console.log(k[i]);
}


//for of loop

const str = "srii";

for (const char of str) {
    console.log(char);
}


//iterating over set

let s2 = new Set([1, 2, 3, 4, 5]);

for (let val of s2) {
    console.log(val);
}


//

let person1 = {
    name: "pavani",
    age: 26,
    city: "hyderabad"
};

for (let key of Object.keys(person1)) {
    console.log(`${key}: ${person1[key]}`);
}

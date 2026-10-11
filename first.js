console.log("Velora");

// this code print --
console.log("hey! velora");

// Artimetic opreation
let a = 5;
let b = 15;
console.log("a =", a, "b =", b);
console.log("a - b", a - b);
console.log("a + b", a + b);
console.log("a*b", a * b);
console.log("a/b", a / b);
console.log("a%b", a % b);
console.log("a**b", a ** b);

// unary operator

console.log("a++", a++); //5
console.log("a=", a);

//CONDITIONAL STATEMENT---
//if statement

// let color;
// if (mood == "dark-mode") {
//   color = "black";
// }

let age = 20;

if (age >= 18) {
  console.log("u can vote");
}
if (age < 18) {
  console.log("u can't vote");
}

//if-else statment

let age1 = 20;

if (age1 >= 18) {
  console.log("u can vote");
} else {
  console.log("u can't vote");
}

//odd or even

let num = 20;
if (num % 2 == 0) {
  console.log(num, "is even");
} else {
  console.log(num, "is odd");
}

//syntax -> rules---
//else-if statment

if (age <= 18) {
  console.log("junior");
} else if (age > 60) {
  console.log("senior");
} else {
  console.log("young");
}

let age2 = 21;
let result = age >= 18 ? "adult" : "not adult";
console.log(result);

//use of prompt

let name = prompt("hey!");
console.log(name);

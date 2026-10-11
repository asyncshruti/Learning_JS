// problem 1
/*
let num1 = prompt("Enter a number:");
//console.log(num);
if (num1 % 5 === 0) {
  console.log(num1, "it is multiple of 5");
} else {
  console.log(num1, "it is not multiple of 5");
}
*/
/*
//2. WAC which give grade to student according to their scores
let score = prompt("enter ur score (0 - 100): ");
let grade;
if (score >= 90 && score <= 100) {
  console.log("grades = A");
} else if (score >= 70 && score <= 89) {
  console.log("grades = B");
} else if (score >= 60 && score <= 69) {
  console.log("grades = C");
} else if (score >= 50 && score <= 59) {
  console.log("grades = D");
} else {
  console.log("grades = F");
}

*/
//3. print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("i=", i);
  }
}

/*4.Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

/*
//method 1
let num = prompt("enter a number");
if (num == 36) {
  console.log("correct", num);
} else {
  console.log("incorrect");
}
  */
// method 2
/*
let gameNum = 36;
let userNum = prompt("Guess the game numner : ");

while (userNum !== gameNum) {
  userNum = prompt("u entered wrong number, guess again :");
}
console.log("congratulation, u entered the right number");

*/

//5.find the average

let marksOfStudent = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let val of marksOfStudent) {
  sum += val;
}
let avg = sum / marksOfStudent.length;
console.log(`avg marks of the class = ${avg}`);

/*6.All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.*/

let prices = [250, 645, 300, 900, 50];
let i = 0;
for (let val of prices) {
  console.log(`value at index ${i} = ${val}`);
  let offer = val / 10;
  prices[i] = prices[i] - offer;
  console.log(`value after offer = ${prices[i]}`);
  i++;
}

//for(let i = 0; i <prices.length; i++) {}

let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

//.push
let place = ["Delhi", "Kolkata", "Hyadrabad"];

place.push("Ranchi", "Sindri");
console.log(place);
//.toString--
console.log(place.toString());

//pop()
place.pop("Ranchi", "Sindri");
console.log(place);

//.concat()

let name = ["sourav", "sindri"];
let name1 = ["Shruti", "Ranchi"];

console.log(name.concat(name1)); //method 1 to join two array

let family = name.concat(name1); // method 2 to join two array
console.log(family);

//.unshift
place.unshift("Ranchi", "Sindri");
console.log(place);

//.shift
place.shift("Ranchi", "Sindri");
console.log(place);

//slice()
let marks = [85, 97, 44, 37, 76, 60];
console.log(marks.slice(2, 5));

//splice()
let marks1 = [85, 97, 44, 37, 76, 60];
console.log(marks.splice(1, 2, 21));

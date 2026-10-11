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

//3. print all even numbers from 0 to 100.

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("i=", i);
  }
}

/*4.Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.*/

// let num = prompt("enter a number");
// if (num == 36) {
//   console.log("correct", num);
// } else {
//   console.log("incorrect");
// }

let gameNum = 36;
let userNum = prompt("Guess the game numner : ");

while(userNum !== gameNum) {
 userNum = prompt("u entered wrong number, guess again :");
}
console.log("congratulation, u entered the right number");
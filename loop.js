// for loop
for (let i = 1; i <= 5; i++) {
  console.log("love u Sourav");
}

//calculate sum of 1 to n

let sum = 0;
let n = 9;
for (let i = 1; i < n; i++) {
  sum = sum + i;
  console.log("sum =", sum);
}

// while loop
let i = 1;
while (i <= 10) {
  console.log("Velora");
  i++;
}

// do while loop
let j = 1;
do {
  console.log("j=", j);
  j++;
} while (j <= 5);

// for-of loop

let str = "SouravShruti";

let size = 0;
for (let i of str) {
  console.log("i=", i);
  size++;
}
console.log("string size = ", size);

// for-in loop

let Student = {
  name: "Shruti",
  age: 20,
  cgpa: 7.5,
  isPass: true,
};
for (let key in Student) {
  console.log("key=", key, "value=", Student[key]);
}

//string
//str.slice
let str1 = "vishnu";
console.log(str1.slice(1, 4));



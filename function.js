function myFunction() {
  console.log("hey! velora");
  console.log("Velora love Sourav");
}
myFunction();

//function ---2 number sum

function sum(x, y) {
  s = x + y;
  // console.log("before return");
  return s;
  console.log("after return");
}

let val = sum(3, 4);
// console.log(x);
// console.log(y);
console.log(val);

// compact way to write a function
const sum1 = (a, b) => {
  return a + b;
};

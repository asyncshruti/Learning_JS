/*
//Scyn ---
console.log("Velora");
console.log("Sourav");
console.log("Anuska");

//Asynchrous code

function hello() {}

setTimeout(() => {
  console.log("hey!velora");
}, 4000); //timeout

console.log("selfLove");
console.log("Shruti");

// ---Callback---

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sumCallback) {
  sumCallback(a, b);
}

calculator(1, 2, (a, b) => {
  console.log(a + b);
});

//nesting---if-else

let age = 19;
if (age >= 18) {
  if (age >= 60) {
    console.log("Senior");
  } else {
    console.log("middle");
  }
} else {
  console.log("child");
}

//nested loop

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(j);
  }
}

//nested loop ek line mein likhne k liye

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let j = 0; j < 5; j++) {
    str = str + j;
  }
  console.log(i, str);
}

function getData(dataId) {
  //2s
  setTimerout(() => {
    console.log("data", dataId);
  }, 2000);
}

function getData(dataId, getNextData) {
  //2s
  setTimerout(() => {
    console.log("data", dataId);
    getNextData();
  }, 2000);
}

// callback hell---(pyramid of doom)
// getData(1, () => {
//   console.log("getting data2....");
//   getData(2, () => {
//     console.log("getting data3....");
//     getData(3, () => {
//       console.log("getting data4....");
//       getData(4);
//     });
//   });
// });

//promise---
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a Shruti");
//   reject("some error occured");
// });

*/

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a Shruti");
//     //resolve("Success"); // for resolve
//     reject("network error");
//   });
// };

// let promise = getPromise();
// promise.then(() => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

function getData(dataId) {
  return new Promise((resolve, reject) => {
    settimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 5000);
  });
}

async function getAllData() {
  await getData(1);
  console.log("getting data1...");
  await getData(2);
  console.log("gatting data2...");
  await getData(3);
  console.log("getting data3....");
}
//promise chain

// let p1 = getdata(1);
// p1.then((res) => {
//   console.log(res);
// });

//Asyn- Await
function api() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("weather data");
      resolve(200);
    }, 2000);
  });
}

async function getWeatherData() {
  await api(); //1st
}

let btn1 = document.querySelector("#btn1");

btn1.onclick = (evt) => {
  console.log("yes");
  let a = 25;
  a++;
  console.log(a);
  console.log(evt.type);
  //console.log(evt.target);
 // console.log(evt.clientx, evt.clienty);
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log("you are inside div");
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientx, evt.clienty);
};

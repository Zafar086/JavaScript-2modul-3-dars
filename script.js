let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

setInterval(() => {
  let now = new Date();
  second.textContent = now.getSeconds();
  minute.textContent = now.getMinutes();
  hour.textContent = now.getHours();
}, 1000);

// let arr = [1, 2, 3, 4, 5];

// // let first = arr.map((value, i) => {
// //   return value + 5;
// // });

// // console.log(first);

// let four = arr.filter((value, i) => {
//   return value < 3;
// });

// console.log(four);

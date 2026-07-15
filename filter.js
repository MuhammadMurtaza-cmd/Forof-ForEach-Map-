// Sirf even numbers filter karo.
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let fa = nums.filter((value) => value % 2 === 0);
document.getElementById("dis1").innerText = fa;

// Sirf odd numbers filter karo.
// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
let fb = nums.filter((values) => values % 2 !== 0);
document.getElementById("dis2").innerText = fb;

// 18 ya us se zyada age wale users filter karo.
const users = [
  { name: "Ali", age: 17 },
  { name: "Ahmed", age: 25 },
  { name: "Sara", age: 30 },
];
let fc = users.filter((use) => {
  use.age >= 18;
  //   return (use.name, use.age);
});
document.getElementById("dis3").innerText += fc;

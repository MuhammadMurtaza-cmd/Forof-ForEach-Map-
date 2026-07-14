// Write a program to print all elements of an array using for...of.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const i of num) {
  document.getElementById("dis").innerText += i;
}

// Write a program to find the sum of all numbers in an array using for...of.

let sum = 0;
for (const it of num) {
  sum += it;
  document.getElementById("dis1").innerText = sum;
}

// Write a program to print only odd numbers from an array using for...of.

for (const ite of num) {
  if (ite % 2 !== 0) {
    document.getElementById("dis2").innerText += ite;
  }
}

// Write a program to find the maximum number in an array using for...of.

let a = num[0];
for (const val of num) {
  if (val > a) {
    a = val;
  }
}
document.getElementById("dis4").innerText = a;

// Write a program to count the number of vowels in a string using for...of.

const str = ["a", "b", "c", "d", "e", "j", "t", "u"];
for (const vo of str) {
  if (vo === "a" || vo === "e" || vo === "i" || vo === "o" || vo === "u") {
    document.getElementById("dis3").innerText += vo;
  }
}

// Write a program to reverse a string using for...of.
const rever = ["Lahore"];
let reverse = "";
for (const char of rever) {
  reverse = char + reverse;
}
document.getElementById("dis5").innerText = reverse;

// Write a program to calculate the average of numbers in an array using for...of.

const numberarr = [10, 20, 30, 40, 50, 60];
let sum1 = 0;
for (const value of numberarr) {
  sum1 += value;
  avg = sum1 / numberarr.length;
  document.getElementById("dis6").innerText = avg;
}

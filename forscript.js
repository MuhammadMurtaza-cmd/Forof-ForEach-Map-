// Write a program to print all elements of an array using forEach().

const firstarr = ["My", "Name", "is", "Muhammad", "Murtaza"];
firstarr.forEach((i) => {
  document.getElementById("dis").innerText += i;
});

// Write a program to find the sum of all numbers in an array using forEach().

const secarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
secarr.forEach((it) => {
  sum += it;
  document.getElementById("dis1").innerText = sum;
});

// Write a program to print the index and value of each array element using forEach()

const thirdarr = ["a", "b", "c", "d", "e"];
thirdarr.forEach(function (ite, index) {
  document.getElementById("dis2").innerHTML +=
    `${index} is index of ${ite}</br>`;
});

// Write a program to find numbers greater than 50 from an array using forEach().

const fortharr = [10, 20, 40, 50, 60, 55];
fortharr.forEach((item) => {
  if (item >= 50) {
    document.getElementById("dis3").innerText += item;
  }
});

// Write a program to find the smallest number in an array using forEach().

const fivtharr = [12, 44, 22, 87, 45, 5];
let smallval = fivtharr[0];
fivtharr.forEach((ele) => {
  if (ele < smallval) {
    smallval = ele;
  }
});
document.getElementById("dis4").innerText = smallval;

// Write a program to convert all strings in an array to uppercase using forEach().

const sixtharr = ["hello", "world"];
sixtharr.forEach((elem) => {
  ab = elem.toUpperCase();
  document.getElementById("dis5").innerText += ab;
});

// Write a program to calculate the total marks of students using forEach().

const marks = {
  eng: 60,
  urdu: 85,
  maths: 78,
};
tmarks = 0;
Object.values(marks).forEach((element) => {
  tmarks += element;
});
document.getElementById("dis6").innerText = tmarks;

// Write a program to display student details stored in an array of objects using forEach().

const detailarr = [
  { name: "Murtaza", age: 19, student: "BSCS", semester: "2nd" },
  { name: "Shahzad", age: 26, student: "HND", semester: "8th" },
  { name: "Abdullah", age: 24, student: "BBIT", semester: "5th" },
];

detailarr.forEach((detail) => {
  document.getElementById("dis7").innerHTML +=
    `Student name: ${detail.name}----Age:${detail.age}-----Student:${detail.student}-----Semester:${detail.semester}</br>`;
});

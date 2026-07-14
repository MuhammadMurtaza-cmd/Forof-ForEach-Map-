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

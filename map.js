// double the value
const firstarr = [1, 2, 3, 4, 5];
let fa = firstarr.map((e) => {
  return e * 2;
});
document.getElementById("dis1").innerText += fa;

// square the values

let fb = firstarr.map((ele) => {
  return ele * ele;
});
document.getElementById("dis2").innerText = fb;

// names to uppercase
const names = ["ali", "ahmed", "sara"];
let fc = names.map((i) => {
  return i.toUpperCase();
});
document.getElementById("dis3").innerText += fc;

// Users array se sirf names ki array banao.
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Ahmed" },
  { id: 3, name: "Sara" },
];
let fd = users.map((it) => {
  return it.name;
});
document.getElementById("dis4").innerText += fd;

// Products ke prices mein 15% tax add karke new array banao.
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
];
let fe = products.map((elem) => {
  return Math.round(elem.price * 1.15);
});
document.getElementById("dis5").innerText = fe;
// Har string ke start mein "Mr. " add karo.
const namess = ["Ali", "Ahmed", "Hassan"];
let ff = namess.map((nam) => {
  return `Mr.${nam}`;
});
document.getElementById("dis6").innerText = ff;

// Dates ko "DD/MM/YYYY" format mein convert karo.

const dates = ["2025-01-15", "2025-05-20", "2025-12-31"];
let fg = dates.map((da) => {
  const [year, month, day] = da.split("-");
  return `${day}-${month}-${year}`;
});
document.getElementById("dis7").innerText = fg;

// Users ke names aur ages ko combine karke string banao.
const userss = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 },
];
let fh = userss.map((element) => `Name:${element.name}---Age:${element.age}`);
document.getElementById("dis8").innerText = fh;

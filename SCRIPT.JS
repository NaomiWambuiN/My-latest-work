// pasenger counter app
//document.getElementById("count-el").innerText = 5;
let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
function increment() {
  count += 1;
  countEl.textContent = count;
}
// let date = document.getElementById("bd");
// let w = new Date();
// function age() {
//   let birthDate = new Date(date.value);
//   let age = w.getFullYear() - birthDate.getFullYear();
//   let m = w.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && w.getDate() < birthDate.getDate())) {
//       age--;
//   }
//     document.getElementById("age").innerHTML

//   age + m;

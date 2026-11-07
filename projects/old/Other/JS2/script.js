function getRandomNumber(min, max) {
  min = 0;
  max = 2;
  return Math.floor(Math.random() * (max - min) + min);
}
var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let b = 0;
for (let c = 0; c < 9; c++) {
  arr[c] = getRandomNumber();
}
for (let a = 0; a < 9; a++) {
  document.write(arr[a]);
  b++;
  if (b % 3 == 0) document.write("<br>");
}
function button() {
  let baton = 0;
  baton = prompt("Введите ячейку, которую хотите изменить");
  if (arr[baton] == 1) arr[baton] = 0;
  if (arr[baton] == 0) arr[baton] = 1;
  return arr[baton];
}
const buttom = document.querySelector("#myButton");
buttom.addEventListener("click", button);

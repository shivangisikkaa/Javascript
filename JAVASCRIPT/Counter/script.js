let increase = document.getElementById("incbtn");
let decrease = document.getElementById("deBtn");
let reset = document.getElementById("rebtn");
let countt = document.getElementById("count");
let count = 0;

increase.onclick = function () {
  count++;
  countt.textContent = count;
};

decrease.onclick = function () {
  count--;
  countt.textContent = count;
};

reset.onclick = function () {
  count = 0;
  countt.textContent = count;
};

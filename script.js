const result = document.getElementById("result");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
let myCount = 0;

function checkColor() {
  if (myCount > 0) {
    result.style.color = "green";
  } else if (myCount < 0) {
    result.style.color = "red";
  } else result.style.color = "black";
}
function addition() {
  myCount++;
}
function substraction() {
  myCount--;
}
function showresult() {
  result.innerHTML = myCount;
}
reset.addEventListener("click", () => {
  myCount = 0;
  checkColor();
  showresult();
});

plus.addEventListener("click", () => {
  addition();
  checkColor();
  showresult();
});

minus.addEventListener("click", () => {
  substraction();
  checkColor();
  showresult();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    addition();
    checkColor();
    showresult();
  } else if (e.keyCode == 37) {
    substraction();
    checkColor();
    showresult();
  }
});

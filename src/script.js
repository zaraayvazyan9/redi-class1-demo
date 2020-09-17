var counter = 0;

function countUp() {
  counter = counter + 1; // counter++;
  var resultCmp = document.getElementById("result");
  resultCmp.innerHTML = counter;
}

function countDown() {
  counter--;
  document.getElementById("result").innerHTML = counter;
}

document.getElementById("countUpBtn").addEventListener("click", countUp);
document
  .getElementById("countUpBtn")
  .addEventListener("contextmenu", countDown);
document.getElementById("result").innerHTML = counter;

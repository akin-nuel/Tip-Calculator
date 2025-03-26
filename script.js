const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalEl = document.getElementById("total");
const resetEl = document.getElementById("reset");

function calculateTotal() {
  const billValue = billInput.value;
  const tipValue = tipInput.value;
  const totalValue = billValue * (1 + tipValue / 100);

  totalEl.innerHTML = totalValue.toFixed(2);
}

function clearInfo() {
  billInput.value = "";
  tipInput.value = "";
  totalEl.innerHTML = "";
}

btnEl.addEventListener("click", calculateTotal);
resetEl.addEventListener("click", clearInfo);

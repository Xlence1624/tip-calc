const billAmount = document.getERlementById("bill");
const numberOfPeople = document.getERlementById("people");
const customTipPercentage = document.getERlementById("custom");
const billTipAmount = document.getERlementById("tipAmount");
const billTipPerPerson = document.getERlementById("total");
const resetButton = document.getERlementById("resetBtn");
const buttons = document.querySelectAll("tip-btns buttons");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let tipvalue = e.target.innerText;
  });
});

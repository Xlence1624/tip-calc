const billInput = document.querySelector(".bill-input");
const customInput = document.querySelector(".custom-input");
const NumberOfPeople = document.querySelector(".number-of-people");
const amtFIg = document.querySelector(".amt-fig");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset-btn");
const Btn = document.querySelectorAll(".btn");
//reset btn code
resetBtn.addEventListener("click", (e) => {
  billInput.value = "0";
  NumberOfPeople.value = "1";
  total.innerHTML = "$0.00";
  amtFIg.innerHTML = "$0.00";
});

//btn class change on click
Btn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    document.querySelector(".active")?.classList.remove("active");
    btn.classList.add("active");
  });
});

//custom input outline change
customInput.addEventListener("click", () => {
  document.querySelector(".active")?.classList.remove("active");
});

document.querySelectorAll(".btn")[0].addEventListener("click", (e) => {
  total.innerHTML = billInput.value * NumberOfPeople.value * 0.05;
  amtFIg.innerHTML = billInput.value * 0.05;
});
document.querySelectorAll(".btn")[1].addEventListener("click", (e) => {
  total.innerHTML = billInput.value * NumberOfPeople.value * 0.1;
  amtFIg.innerHTML = billInput.value * 0.1;
});

document.querySelectorAll(".btn")[2].addEventListener("click", (e) => {
  total.innerHTML = billInput.value * NumberOfPeople.value * 0.15;
  amtFIg.innerHTML = billInput.value * 0.15;
});

document.querySelectorAll(".btn")[3].addEventListener("click", (e) => {
  total.innerHTML = billInput.value * NumberOfPeople.value * 0.25;
  amtFIg.innerHTML = billInput.value * 0.25;
});

document.querySelectorAll(".btn")[4].addEventListener("click", (e) => {
  total.innerHTML = billInput.value * NumberOfPeople.value * 0.5;
  amtFIg.innerHTML = billInput.value * 0.5;
});

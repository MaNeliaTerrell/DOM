//1. Create a new variable called 'total' and assign it the div with the id of 'total'

const total = document.getElementById('total');
console.log(total);
//2. Create Six Functions (add, subtract, multiplyBy2, divideBy2, multiplyBy5, divideBy5)

const addBtn = document.querySelector("#add")
const subtractBtn = document.querySelector("#subtract")
const multiplyBy2Btn = document.querySelector("#mult-2")
const divideBy2Btn = document.querySelector("#div-2")
const multiplyBy5Btn = document.querySelector("#mult-5")
const divideBy5Btn = document.querySelector("#div-5")

// Example:
function add() {
  // add 1 to the textContent of the total variable
  // update the value of the total variable textContent
  // use an alert to alert the user
  console.log(total.textContent);
  total.textContent = Number(total.textContent) + 1
}
function subtract() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) - 1
}
function multiplyBy2() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 2
}
function divideBy2() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 2
}
function multiplyBy5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) * 5
}
function divideBy5() {
  console.log(total.textContent);
  total.textContent = Number(total.textContent) / 5
}


//3. Attach Functions to Buttons

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', subtract)
multiplyBy2Btn.addEventListener('click', multiplyBy2)
divideBy2Btn.addEventListener('click', divideBy2)
multiplyBy5Btn.addEventListener('click', multiplyBy5)
divideBy5Btn.addEventListener('click', divideBy5)
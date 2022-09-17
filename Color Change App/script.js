const COLORS_ARRAY = [
  "red",
  "yellow",
  "magenta",
  "cyan",
  "blue",
  "black",
  "gray",
  "teal",
  "green",
  "purple",
  "violet",
];

// ===== CHALLENGE =====
// 1. Create A Function (generate)
// Function should get a random color from the COLORS_ARRAY
// Create a li element
// Add the color name to the li text
// Set the background color of the li to the random color
// Append the li to the ul
// 2. Create Function (reset)
// Should remove all li children from the ul. 
// Should set background color to white.

const button = document.getElementById("generate-color")
const ul = document.getElementById('color-list')
const clearButton = document.getElementById('clear')

button.addEventListener('click', function () {
  let randomColors = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
  const body = document.querySelector('body')
  body.style.background = randomColors
  li.textContent = randomColors
  li.style.backgroundColor = randomColors
})
let li = document.createElement('li')
ul.appendChild(li)

  const reset = () => {
  const removeLi = ul.getElementsByTagName('li')
  li.remove()
  document.body.style.backgroundColor = "white"
  }
  clearButton.addEventListener('click', reset)
  console.log(removeLi);



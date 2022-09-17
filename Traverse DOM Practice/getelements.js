/** Write your code below each comment */

/* Get the element with an ID of 'first' */
const first = document.getElementById('first')
console.log(first)

/* Now delete that first element (in the html file), and re-run your code. What changed? */
const parentEl = document.getElementsByClassName('elements')
console.log(parentEl);
const childEl = parentEl.firstElementChild
console.log(childEl);
parentEl.removeChild(childEl)
/* Get the elements with a class of 'second' with getElementsByClassName: */
const second = document.getElementsByClassName('second')
console.log(second);

/* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */
const childEl2 = parentEl.firstElementChild.nextElementSibling
console.log(childEl2);
parentEl.removeChild(childEl2)

/* Get the span element using getElementsByTagname: */
const span = document.getElementsByTagName('span')
console.log(span);
/* Add a span anywhere, and re-run the last piece of code. What's different? */

const span2 = document.createElement('span')
span2.textContent = "I'm new!"
parentEl[0].appendChild(span2)

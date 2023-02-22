console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements);
  let result;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const A = parseInt(data.numberA, 10);
  const B = parseInt(data.numberB, 10);

  console.log(data.operator);
  if (data.operator === "addition") {
    result = add(A, B);
  } else if (data.operator === "subtraction") {
    result = subtract(A, B);
  } else if (data.operator === "multiplication") {
    result = multiply(A, B);
  } else {
    result = divide(A, B);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

/* - Use the values of the `numberA` and `numberB` inputs 
to perform the operation selected by the `operator` input on them. 
You can use the provided helper functions `add()`, `subtract()`, 
`multiply()` and `divide()`.
- Assign the result to the `result` variable. */

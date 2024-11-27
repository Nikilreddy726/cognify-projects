// Select DOM elements
const calculateButton = document.getElementById('calculateButton');
const resultParagraph = document.getElementById('result');

// Add event listener to the button
calculateButton.addEventListener('click', () => {
  // Get the values of the two input fields
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);

  // Validate inputs
  if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = "Please enter valid numbers.";
    return;
  }

  // Calculate the sum
  const sum = num1 + num2;

  // Display the result
  resultParagraph.textContent = `Result: ${sum}`;
});

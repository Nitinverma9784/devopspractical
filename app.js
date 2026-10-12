// Core business logic (testable)
function greet(name) {
  return `Hello, ${name ? name.trim() : 'Guest'}! Welcome to DevOps Demo`;
}

function calculateSum(a, b) {
  return Number(a) + Number(b);
}

// Browser DOM logic
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const greetBtn = document.getElementById('greet-btn');
    const nameInput = document.getElementById('name-input');
    const outputDiv = document.getElementById('output');

    if (greetBtn && nameInput && outputDiv) {
      greetBtn.addEventListener('click', () => {
        const name = nameInput.value;
        outputDiv.textContent = greet(name);
      });
    }

    const calcBtn = document.getElementById('calc-btn');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calcOutput = document.getElementById('calc-output');

    if (calcBtn && num1 && num2 && calcOutput) {
      calcBtn.addEventListener('click', () => {
        const sum = calculateSum(num1.value, num2.value);
        calcOutput.textContent = `Result: ${sum}`;
      });
    }
  });
}

// Export for Node.js test runner
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { greet, calculateSum };
}

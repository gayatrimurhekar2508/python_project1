// Skill Nexis Week 1 - Assignment Functions

// 1. Temperature Converter
function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function convertTemperature() {
  const value = Number(document.getElementById('tempInput').value);
  const mode = document.getElementById('tempMode').value;
  const output = document.getElementById('tempResult');

  if (Number.isNaN(value)) {
    output.textContent = 'Please enter a temperature.';
    return;
  }

  if (mode === 'cToF') {
    output.textContent = `${value} °C = ${celsiusToFahrenheit(value).toFixed(2)} °F`;
  } else {
    output.textContent = `${value} °F = ${fahrenheitToCelsius(value).toFixed(2)} °C`;
  }
}

// 2. Student Grade Calculator
function getGrade(average) {
  if (average >= 90) return 'A+';
  if (average >= 80) return 'A';
  if (average >= 70) return 'B';
  if (average >= 60) return 'C';
  if (average >= 50) return 'D';
  return 'F';
}

function calculateGrade() {
  const input = document.getElementById('marksInput').value;
  const marks = input.split(',').map(Number).filter(n => !Number.isNaN(n));
  const output = document.getElementById('gradeResult');

  if (marks.length === 0 || marks.some(mark => mark < 0 || mark > 100)) {
    output.textContent = 'Enter valid marks from 0 to 100, separated by commas.';
    return;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  const average = total / marks.length;
  output.textContent = `Average: ${average.toFixed(2)}% | Grade: ${getGrade(average)}`;
}

// 3. Even/Odd & Prime Checker
function isPrime(number) {
  if (number < 2 || !Number.isInteger(number)) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function checkNumber() {
  const number = Number(document.getElementById('numberInput').value);
  const output = document.getElementById('numberResult');

  if (!Number.isInteger(number)) {
    output.textContent = 'Please enter a whole number.';
    return;
  }

  const type = number % 2 === 0 ? 'Even' : 'Odd';
  const prime = isPrime(number) ? 'Prime' : 'Not Prime';
  output.textContent = `${number} is ${type} and ${prime}.`;
}

// 4. Simple ATM Simulator
const correctPIN = '1234';
let balance = 5000;

function loginATM() {
  const pin = document.getElementById('pinInput').value;
  const result = document.getElementById('atmLoginResult');
  const menu = document.getElementById('atmMenu');

  if (pin === correctPIN) {
    result.textContent = 'Login successful. Welcome to the ATM!';
    menu.classList.remove('hidden');
    document.getElementById('balanceValue').textContent = balance.toFixed(2);
  } else {
    result.textContent = 'Incorrect PIN. Try again.';
  }
}

function checkBalance() {
  document.getElementById('atmResult').textContent = `Current balance: ₹${balance.toFixed(2)}`;
}

function deposit() {
  const amount = Number(document.getElementById('amountInput').value);
  const result = document.getElementById('atmResult');

  if (amount <= 0 || Number.isNaN(amount)) {
    result.textContent = 'Enter a valid deposit amount.';
    return;
  }

  balance += amount;
  document.getElementById('balanceValue').textContent = balance.toFixed(2);
  result.textContent = `₹${amount.toFixed(2)} deposited successfully.`;
}

function withdraw() {
  const amount = Number(document.getElementById('amountInput').value);
  const result = document.getElementById('atmResult');

  if (amount <= 0 || Number.isNaN(amount)) {
    result.textContent = 'Enter a valid withdrawal amount.';
    return;
  }

  if (amount > balance) {
    result.textContent = 'Insufficient balance.';
    return;
  }

  balance -= amount;
  document.getElementById('balanceValue').textContent = balance.toFixed(2);
  result.textContent = `₹${amount.toFixed(2)} withdrawn successfully.`;
}

function logoutATM() {
  document.getElementById('atmMenu').classList.add('hidden');
  document.getElementById('atmLoginResult').textContent = 'You have been logged out.';
  document.getElementById('pinInput').value = '';
}

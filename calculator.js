window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues(); // show initial values
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update(); // listen to submit from user and show new values
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let amountVal = localStorage.getItem('amount');
  let yearsVal = localStorage.getItem('years');
  let rateVal = localStorage.getItem('rate'); // retrieving inital data either from local storage
  if (!amountVal && !yearsVal && !rateVal) {
    amountVal = localStorage.setItem('amount', 10000);
    yearsVal = localStorage.setItem('years', 1);
    rateVal = localStorage.setItem('rate', 1); // or setting initial data-values, that are set to new storage value
  }
  const amountUI = document.getElementById("loan-amount");
  amountUI.value = amountVal;
  const yearsUI = document.getElementById("loan-years");
  yearsUI.value = yearsVal;
  const rateUI = document.getElementById("loan-rate");
  rateUI.value = rateVal; // defining the first UI values
  update(); // using the above data to upate
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues(); 
  const monPay = calculateMonthlyPayment(currentUIValues); 
  updateMonthly(monPay); // calculate monthly pay value and show to user
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let amountLoc = values.amount;
  let yearsLocTotal = Math.floor(values.years*12);
  let rateLoc = values.rate/100; 
  return (amountLoc*rateLoc/(1-Math.pow((1+rateLoc), -yearsLocTotal))).toFixed(2); // calculate monthly payment with formula and initial or input data
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}

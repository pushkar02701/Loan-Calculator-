function calculateLoan() {
	// Get input values
	const loanAmount = parseFloat(
		document.querySelector(".loan-amount").value
	);
	const interestRate = parseFloat(
		document.querySelector(".interest-rate").value
	);
	const monthsToPay = parseFloat(
		document.querySelector(".months-to-pay").value
	);

	// Validate inputs
	if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(monthsToPay)) {
		alert("Please enter valid numbers for all fields.");
		return;
	}

	// Calculate monthly interest and payment
	const monthlyInterestRate = interestRate / 100 / 12;
	const numerator =
		loanAmount *
		monthlyInterestRate *
		Math.pow(1 + monthlyInterestRate, monthsToPay);
	const denominator = Math.pow(1 + monthlyInterestRate, monthsToPay) - 1;
	const monthlyPayment = (numerator / denominator).toFixed(2);

  console.log(monthlyPayment);
  
	// Display the result
	document.querySelector(
		".payment"
	).innerHTML = `Monthly Payment: $${monthlyPayment}`;
}

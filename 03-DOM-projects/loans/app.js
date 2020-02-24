// const val = 12345;
// alert(`MSG #${val}: EVERYTHANG WORKS BUD`);

// Event Listeners
function loadEventListeners () {
	document.getElementById('loan-form').addEventListener('submit', function (e) {
		// Hide results
		document.getElementById('results').style.display = 'none';
		// Show loading GIF
		document.getElementById('loading').style.display = 'block';

		setTimeout(calculateResults, 1500);

		// Prevent default action of links (ie. Redirect)
		e.preventDefault();
	});
}
// Load Event Listeners
loadEventListeners();

// Calculate Loan
function calculateResults () {
	// console.log('Calculating... Calculating... Calculating...');

	// Initialize variables from UI input fields
	const initialLoan = document.getElementById('amount');
	const interestRate = document.getElementById('interest');
	const timeFrame = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalInterest = document.getElementById('total-interest');

	// Make calculations
	const principal = parseFloat(initialLoan.value);
	const calcInterest = parseFloat(interestRate.value) / 100 / 12;
	const calcPayments = parseFloat(years.value) * 12;

	// Compute
	const x = Math.pow(1 + calcInterest, calcPayments);
	const monthly = principal * x * calcInterest / (x - 1);

	// Check if monthly is finite number
	if (isFinite(monthly)) {
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calcPayments).toFixed(2);
		totalInterest.value = (monthly * calcPayments - principal).toFixed(2);

		showMessage('Calculation Succesful: You can do this! ', 'good');

		// Show results
		document.getElementById('results').style.display = 'block';
		// Hide loading GIF
		document.getElementById('loading').style.display = 'none';
	}
	else {
		// Create a message
		// Can show or hide but we'll create it using Javascript
		showMessage('Whoops, you must complete the form! ', 'warn');

		// Hide results
		document.getElementById('results').style.display = 'none';
		// Hide loading GIF
		document.getElementById('loading').style.display = 'none';
	}
}

function showMessage (error, status) {
	// Create error div in document
	const errorDiv = document.createElement('div');

	// Initialize the location variables for where our error message will go
	const card = document.querySelector('.card');
	const heading = document.querySelector('.heading');

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	// Give the error custom CSS and content
	if (status === 'good') {
		errorDiv.className = 'alert alert-success';
	}
	else if (status === 'warn') {
		errorDiv.className = 'alert alert-danger';
	}
	else {
		errorDiv.className = 'alert alert-info';
	}

	errorDiv.appendChild(document.createTextNode(error));

	// Clear error after x number milliseconds
	setTimeout(clearMessage, 3000);
}

function clearMessage () {
	document.querySelector('.alert').remove();
}

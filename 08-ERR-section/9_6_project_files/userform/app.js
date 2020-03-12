// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName () {
	const name = document.getElementById('name');
	// Input must start with a letter and be between 2-10 characters
	/*
    Examples: John or William or Kelly or Kelso
  */
	const re = /^[a-zA-Z]{2,15}$/;

	if (!re.test(name.value)) {
		name.classList.add('is-invalid');
	}
	else {
		name.classList.remove('is-invalid');
	}
}

function validateZip () {
	const zip = document.getElementById('zip');
	// Input must start with 5 digits with an optional extra 4
	/*
    Examples: 45678 or 45678-1234
  */
	const re = /^[0-9]{5}(-[0-9]{4})?$/;

	if (!re.test(zip.value)) {
		zip.classList.add('is-invalid');
	}
	else {
		zip.classList.remove('is-invalid');
	}
}

function validateEmail () {
	const email = document.getElementById('email');
	// Allow letters, numbers, symbols(_ - and .) followed by an @ symbol with domain folowed by .TLD(from 2 up to 5 letters)
	/*
    Examples: elonmusk@tesla.com or Pres.Trump@WH.gov or Seth-Thomas-5@gmail.com 
  */
	const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

	if (!re.test(email.value)) {
		email.classList.add('is-invalid');
	}
	else {
		email.classList.remove('is-invalid');
	}
}

function validatePhone () {
	const phone = document.getElementById('phone');
	// Input must be 3 digits 3 digits 4 digits in optional formats of - . or no space at all
	/*
    Examples: 123-456-7890 or 123.456.7890 or 1234567890 or (123)456-7890
  */
	const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

	if (!re.test(phone.value)) {
		phone.classList.add('is-invalid');
	}
	else {
		phone.classList.remove('is-invalid');
	}
}

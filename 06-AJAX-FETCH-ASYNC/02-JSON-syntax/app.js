// Create UI event listeners
document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer Function
function loadCustomer (e) {
	// Instantiate our XHR object
	const xhr = new XMLHttpRequest();

	// Open file (type of request, file, async t/f)
	xhr.open('GET', 'customer.json', true);

	// Load it
	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);

			const customer = JSON.parse(this.responseText);

			const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;

			document.getElementById('customer').innerHTML = output;
		}
	};

	// To complete the request, send it
	xhr.send();
}

// Load Customers
function loadCustomers (e) {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'customers.json', true);

	xhr.onload = function () {
		if (this.status === 200) {
			// console.log(this.responseText);

			const customers = JSON.parse(this.responseText);

			let output = '';

			customers.forEach(function (customer) {
				// Plus equals so it appends and not replaces the data foreach
				output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `;
			});

			document.getElementById('customers').innerHTML = output;
		}
	};

	xhr.send();
}

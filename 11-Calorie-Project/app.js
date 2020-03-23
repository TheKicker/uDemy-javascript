// Storage Controller

// Item Controller
const ItemCtrl = (function () {
	// Item Constructor
	const Item = function (id, name, calories) {
		this.id = id;
		this.name = name;
		this.calories = calories;
	};

	// Data Structure / State
	const data = {
		items: [
			// { id: 0, name: 'Steak Dinner', calories: 1200 },
			// { id: 1, name: 'Cookie', calories: 400 },
			// { id: 2, name: 'Eggs', calories: 300 },
			// { id: 3, name: 'Buffalo Chicken Dip', calories: 450 },
			// { id: 4, name: 'Cowboy Burger & Brew Fries', calories: 1450 }
		],
		currentItem: null,
		totalCalories: 0
	};

	// Public methods
	return {
		logData: function () {
			return data;
		},
		addItem: function (inputName, inputCalories) {
			let ID;
			// Create ID
			if (data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			}
			else {
				ID = 0;
			}

			// Caloories to number
			calories = parseInt(inputCalories);

			// Create our new item
			newItem = new Item(ID, inputName, calories);

			// Append item to array
			data.items.push(newItem);

			return newItem;
		},
		getTotalCalories: function () {
			let total = 0;
			// Loop through adding calories
			data.items.forEach(function (item) {
				total += item.calories;
			});
			// Set total calories to total
			data.totalCalories = total;

			return data.totalCalories;
		},
		getItems: function () {
			return data.items;
		},
		getItemById: function (id) {
			let found = null;
			// Loop through items to grab correct one
			data.items.forEach(function (item) {
				if (item.id === id) {
					found = item;
				}
			});

			return found;
		},
		setCurrentItem: function (itemToEdit) {
			data.currentItem = itemToEdit;
		},
		getCurrentItem: function () {
			return data.currentItem;
		}
	};
})();

// UI Controller
const UserInterfaceCtrl = (function () {
	const UIselectors = {
		itemList: '#item-list',
		inputMeal: '#item-name',
		inputCalories: '#item-calories',
		ouputCaloriesMain: '.calories-main',
		outputCalories: '.total-calories',
		addBtn: '.add-btn',
		updateBtn: '.update-btn',
		deleteBtn: '.delete-btn',
		backBtn: '.back-btn'
	};

	// Public methods
	return {
		// Testing purposes (ignored)
		test: function () {
			console.log('Initializing User Interface...');
		},
		// Populate and paint the items onto the screen
		populateList: function (items) {
			let outputHTML = '';
			// Simple forloop
			items.forEach(function (item) {
				outputHTML += `<li class="collection-item" id="item-${item.id}">
					<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="secondary-content">
				  	<i class="edit-item fa fa-pencil"></i>
					</a>
			  	</li>`;
			});

			// Inject into page
			document.querySelector(UIselectors.itemList).innerHTML = outputHTML;
		},
		getItemInput: function () {
			return {
				name: document.querySelector(UIselectors.inputMeal).value,
				calories: document.querySelector(UIselectors.inputCalories).value
			};
		},
		addListItem: function (item) {
			// Show the list
			document.querySelector(UIselectors.itemList).style.display = 'block';
			document.querySelector(UIselectors.ouputCaloriesMain).style.display = 'block';

			// Create LI element
			const li = document.createElement('li');
			li.className = 'collection-item';
			li.id = `item-${item.id}`;
			li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em><a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
			// Insert item
			document.querySelector(UIselectors.itemList).insertAdjacentElement('beforeend', li);
		},
		showTotalCalories: function (totalCalories) {
			document.querySelector(UIselectors.outputCalories).textContent = totalCalories;
		},
		clearInput: function () {
			document.querySelector(UIselectors.inputMeal).value = '';
			document.querySelector(UIselectors.inputCalories).value = '';
		},
		clearEditState: function () {
			UserInterfaceCtrl.clearInput();
			document.querySelector(UIselectors.updateBtn).style.display = 'none';
			document.querySelector(UIselectors.deleteBtn).style.display = 'none';
			document.querySelector(UIselectors.backBtn).style.display = 'none';
			document.querySelector(UIselectors.addBtn).style.display = 'inline';
		},
		showEditState: function () {
			document.querySelector(UIselectors.updateBtn).style.display = 'inline';
			document.querySelector(UIselectors.deleteBtn).style.display = 'inline';
			document.querySelector(UIselectors.backBtn).style.display = 'inline';
			document.querySelector(UIselectors.addBtn).style.display = 'none';
		},
		hideList: function () {
			document.querySelector(UIselectors.itemList).style.display = 'none';
			document.querySelector(UIselectors.ouputCaloriesMain).style.display = 'none';
		},
		getSelectors: function () {
			return UIselectors;
		},
		addItemToForm: function () {
			document.querySelector(UIselectors.inputMeal).value = ItemCtrl.getCurrentItem().name;
			document.querySelector(UIselectors.inputCalories).value = ItemCtrl.getCurrentItem().calories;
			UserInterfaceCtrl.showEditState();
		}
	};
})();

// App Controller
const AppCTRL = (function (ItemCtrl, UserInterfaceCtrl) {
	// Load event listeners
	const loadEventListeners = function () {
		// Because our UI selectors are private, we have to add a method to fetch them.
		UserInterfaceSelectors = UserInterfaceCtrl.getSelectors();

		// Add food item event
		document.querySelector(UserInterfaceSelectors.addBtn).addEventListener('click', itemAddSubmmit);

		// Edit icon click event (the pencil)
		document.querySelector(UserInterfaceSelectors.itemList).addEventListener('click', itemUpdateSubmit);
	};

	// Add item submit
	const itemAddSubmmit = function (e) {
		// Get form input from UI Controller
		const inputFields = UserInterfaceCtrl.getItemInput();

		// Check for empty field
		if (inputFields.name !== '' && inputFields.calories !== '') {
			// Add item
			const newItem = ItemCtrl.addItem(inputFields.name, inputFields.calories);

			// Paint the item to UI
			UserInterfaceCtrl.addListItem(newItem);

			// Fetch and show total calories count
			const totalCalories = ItemCtrl.getTotalCalories();
			UserInterfaceCtrl.showTotalCalories(totalCalories);

			// Clear input fields
			UserInterfaceCtrl.clearInput();
		}
		else {
			console.log('Input fields empty.  You dumb dumb');
		}

		e.preventDefault();
	};

	const itemUpdateSubmit = function (e) {
		// Targeting via delegation because this item doesnt exist when the page loads
		// It only exists once something is in the list
		if (e.target.classList.contains('edit-item')) {
			// Fetch the clicked item's ID
			const listID = e.target.parentNode.parentNode.id;

			// break into array
			const listIDArr = listID.split('-');
			const id = parseInt(listIDArr[1]);

			// Return the entire item
			const itemToEdit = ItemCtrl.getItemById(id);

			// Set that to current item
			ItemCtrl.setCurrentItem(itemToEdit);

			// Add item to form
			UserInterfaceCtrl.addItemToForm();
		}

		e.preventDefault();
	};

	// Public methods
	return {
		// Testing purposes (ignored)
		test: function () {
			console.log('Initializing Application...');
		},
		// When the page loads
		init: function () {
			// Set initial state
			UserInterfaceCtrl.clearEditState();

			// Get items (will be from local storage eventually)
			const items = ItemCtrl.getItems();

			// Check if any items exist
			if (items.length === 0) {
				// hide the list
				UserInterfaceCtrl.hideList();
			}
			else {
				// Paint the items onto the UI
				UserInterfaceCtrl.populateList(items);
			}

			// Get total calories
			const totalCalories = ItemCtrl.getTotalCalories();

			// Add total calories to UI
			UserInterfaceCtrl.showTotalCalories(totalCalories);

			// Load event listeners
			loadEventListeners();
		}
	};
})(ItemCtrl, UserInterfaceCtrl);

// Launch the App :)
AppCTRL.init();

const data = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston MA',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'Jen Smith',
		age: 26,
		gender: 'female',
		lookingfor: 'male',
		location: 'Miami FL',
		image: 'https://randomuser.me/api/portraits/women/82.jpg'
	},
	{
		name: 'William Johnson',
		age: 38,
		gender: 'male',
		lookingfor: 'female',
		location: 'Lynn MA',
		image: 'https://randomuser.me/api/portraits/men/83.jpg'
	},
	{
		name: 'Alyssa DeMuzio',
		age: 22,
		gender: 'female',
		lookingfor: 'male',
		location: 'Gatlinburg TN',
		image: 'https://randomuser.me/api/portraits/women/24.jpg'
	},
	{
		name: 'Kelsey Bennett',
		age: 30,
		gender: 'female',
		lookingfor: 'male',
		location: 'Youngstown OH',
		image: 'https://randomuser.me/api/portraits/women/56.jpg'
	},
	{
		name: 'Maura Gomez',
		age: 23,
		gender: 'female',
		lookingfor: 'male',
		location: 'Pullman WA',
		image: 'https://randomuser.me/api/portraits/women/69.jpg'
	}
];

// initiaze our iterator with the data above
const profiles = profileIterator(data);

// Call first available profile
nextProfile();

// Wait for a click event, then call next profile
document.getElementById('next').addEventListener('click', nextProfile);

// Render the next profile
function nextProfile () {
	// Feed our data iterator
	const currentProfile = profiles.next().value;

	// Render the dynamic HTML
	if (currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

		document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
	}
	else {
		// No more profiles, reset the site
		window.location.reload();
	}
}

// Profile Iterator Engine
function profileIterator (profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true };
		}
	};
}

// Initalize our github.js class
const gh = new Github();
// Initalize our ui.js class
const ui = new userInterface();

// Search input event listener
const searchUser = document.getElementById('searchUser');
// Add event listener
searchUser.addEventListener('keyup', (e) => {
	// get input text
	const userText = e.target.value;
	// console.log(userText);
	if (userText !== '') {
		// Make HTTP call using the github file credentials
		gh.getUser(userText).then((data) => {
			// Check if the profile exists
			if (data.profileData.message === 'Not Found') {
				// Show an alert that the user doesnt exist (UI File)
				ui.showAlert('User Not Found', 'alert alert-danger');
			}
			else {
				// Show profile (UI File)
				ui.showProfile(data.profileData);
				ui.showRepos(data.repoData);
			}
		});
	}
	else {
		// Clear the profile (UI File)
		ui.clearProfile();
	}
});

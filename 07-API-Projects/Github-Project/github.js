// In production, you don't what this to be frontware facing
class Github {
	// Add a constructor to hold our Github API credentials
	constructor () {
		this.client_id = '43319e85b18fe35a7a48';
		this.client_secret = 'ca01489768822947d177c7aaaecc3d5cae4be31c';
		this.repo_count = 10;
		this.repo_sort = 'created: asc';
	}
	// We will have to requests - one for the user, one for the user's repos
	async getUser (user) {
		// Fetch the response of the url of desired user via our credentials
		const profileURL = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&${this.client_secret}`);
		// Fetch the response of the url of desired user's repos via our credentials
		const repoURL = await fetch(
			`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&${this
				.client_secret}`
        );
        
		// Collect the JSON object from the profile URL
		const profileData = await profileURL.json();
		// Collect the JSON object from the repo URL
		const repoData = await repoURL.json();

		// Return an object because we are gathering both the user and their repos.
		return {
			profileData,
			repoData
		};
	}
}

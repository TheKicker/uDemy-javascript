const posts = [
	{
		title: 'Post One',
		body: 'This is the first post. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, exercitationem.'
	},
	{
		title: 'Post Two',
		body: 'This is the second post. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, exercitationem.'
	},
	{
		title: 'Post Three',
		body: 'This is the third post. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore, exercitationem.'
	}
];

// Promises
function createPost (post, callback) {
	setTimeout(function () {
		posts.push(post);
		callback();
	}, 2000);
}

function getPosts () {
	setTimeout(function () {
		let output = '';
		posts.forEach(function (post) {
			output += `<li>${post.title}<br>${post.body}</li>`;
		});
		document.body.innerHTML = output;
	}, 1000);
}

createPost({ title: 'Post Four x Two', body: 'Hooga booga' }, getPosts);

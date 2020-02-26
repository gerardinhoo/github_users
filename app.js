// Init Github
const github = new Github;
// Init UI
const ui = new UI;


// Search Input Selection
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
	// GET INPUT TEXT
	const userText = e.target.value;
	if (userText !== '') {
		// Make http call
		github.getUser(userText).then((data) => {
			if (data.profile.message === 'Not Found') {
				// Show Alert
				ui.showAlert("User Not Found", "alert alert-danger")
			} else {
				// Show Profile
				ui.showProfile(data.profile)
				ui.showRepos(data.repos);
			}
		});
	} else {
		// Clear Profile
		ui.clearProfile();
	}
});

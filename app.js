// instantiate github
const github = new Github();

// instantiate user
const ui = new UI();

// search user
const searchUser = document.querySelector('#searchUser');

searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear Profile
    ui.clearProfile();
  }
});

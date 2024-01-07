// Check if there are saved details
    if (localStorage.getItem('savedUsername') && localStorage.getItem('savedPassword')) {
      document.body.innerHTML += '<button id="existing">Login as existing user</button>';
    }

    // Submit event handler
    document.getElementById('loginForm').addEventListener('submit', function (event) {
      event.preventDefault();

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rememberCheckbox = document.getElementById('checkbox');

      if (rememberCheckbox.checked) {
        // Save details to local storage
        localStorage.setItem('savedUsername', username);
        localStorage.setItem('savedPassword', password);
      } else {
        // Remove saved details from local storage
        localStorage.removeItem('savedUsername');
        localStorage.removeItem('savedPassword');
      }

      // Show alert
      alert('Logged in as ' + username);
	  form.reset();
    }); 

    // Existing user button event handler
    document.getElementById('existing').addEventListener('click', function () {
      var savedUsername = localStorage.getItem('savedUsername');
      alert('Logged in as ' + savedUsername);
    });
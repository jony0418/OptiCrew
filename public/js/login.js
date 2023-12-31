const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect the values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      
        // Send a POST request to the login route
        const response = await fetch('/api/user/login', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          // If successful, redirect the user to the /employee
          alert('Welcome now you are logged in!');
          document.location.replace('/employee');
        } else {
          const errorData = await response.json();
          alert(errorData.error);
        }
    }
  };
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  

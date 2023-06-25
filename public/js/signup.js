const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const username = document.querySelector('#username').value.trim(); 
    const email = document.querySelector('#email').value.trim(); 
    const password = document.querySelector('#password').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        }); 
        if (response.ok) {
            document.location.replace('/login'); 
        } else {
            alert('Failed to sign up'); 
        }
    }
}; 

document.querySelector('.signup-form').addEventListener("submit", signupFormHandler);
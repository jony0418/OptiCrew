const signupFormHandler = async (event) => {
    event.preventDefault(); 

    const name = document.querySelector('#username').value.trim(); 
    const email = document.querySelector('#email').value.trim(); 
    const password = document.querySelector('#password').value.trim();

    console.log("Sending Data: ", name, email, password);
    if (name && email && password) {
        const response = await fetch('/user', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    }
}

document.querySelector('#submit-btn').addEventListener("submit", signupFormHandler);
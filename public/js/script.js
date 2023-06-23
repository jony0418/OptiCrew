document.getElementById('newEmployeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // create a new FormData object
  var formData = new FormData(event.target);
  
  // create a new object to send as JSON
  var newEmployee = {};
  formData.forEach((value, key) => {
    // Convert "true" and "false" strings to boolean values
    if (value === "true") value = true;
    else if (value === "false") value = false;
    
    newEmployee[key] = value;
  });

  // make an AJAX request
  fetch('/employee', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newEmployee)
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});
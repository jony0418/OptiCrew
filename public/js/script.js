document.getElementById('newEmployeeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // create a new FormData object
  var formData = new FormData(event.target);
  
  // make an AJAX request
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/employee', true);
  
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Success!
      var response = JSON.parse(xhr.responseText);
      console.log(response);
    } else {
      // We reached our target server, but it returned an error
      console.error('Server error', xhr);
    }
  };
  
  xhr.onerror = function() {
    // There was a connection error of some sort
    console.error('Connection error', xhr);
  };
  
  xhr.send(formData);
});

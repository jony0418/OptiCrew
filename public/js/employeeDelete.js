const searchButton = document.getElementById('searchButton');
const deleteButton = document.getElementById('deleteButton');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

let currentEmployeeId = null;

searchButton.addEventListener('click', async () => {
    const searchValue = searchInput.value;
    const response = await fetch(`/api/employee/${searchValue}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    
    if (response.ok) {
        const data = await response.json();
        currentEmployeeId = data.id;
        deleteButton.disabled = false;
        searchResults.textContent = `Employee found: ${data.name} ${data.lastName}. Click 'Delete' to remove this employee.`;
    } else {
        searchResults.textContent = 'No employee found.';
        deleteButton.disabled = true;
    }
});

deleteButton.addEventListener('click', async () => {
    if (currentEmployeeId) {
        const response = await fetch(`/api/employee/${currentEmployeeId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        });

        if (response.ok) {
            searchResults.textContent = 'Employee deleted successfully.';
        } else {
            searchResults.textContent = 'Failed to delete employee.';
        }

        currentEmployeeId = null;
        deleteButton.disabled = true;
        searchInput.value = '';
    }
});

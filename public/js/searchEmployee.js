// searchEmployee.js
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const searchInput = document.querySelector("#searchInput").value.trim();

    if (searchInput) {
        try {
            const response = await fetch(`/api/employee/${searchInput}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.ok) {
                const employee = await response.json();

                const resultsDiv = document.querySelector("#searchResults");

                // Clear out any old results
                resultsDiv.innerHTML = "";

                // Display the employee data
                resultsDiv.innerHTML += `
                    <p>ID: ${employee.id}</p>
                    <p>Name: ${employee.name}</p>
                    <p>Last Name: ${employee.lastName}</p>
                    <p>Assist: ${employee.assist}</p>
                    <p>Shift: ${employee.shift}</p>
                    <p>Gender: ${employee.gender}</p>
                    <p>Birth: ${employee.birth}</p>
                    <p>Address: ${employee.address}</p>
                    <p>County: ${employee.county}</p>
                    <p>Zip Code: ${employee.zipCode}</p>
                    <p>City: ${employee.city}</p>
                    <p>Cellphone: ${employee.cel}</p>
                    <p>Education: ${employee.education}</p>
                    <p>Department ID: ${employee.id_department}</p>
                    <p>Supervisor: ${employee.supervisor}</p>
                    <p>Position: ${employee.position}</p>
                    <p>Admission Date: ${employee.admissionDate}</p>
                    <p>Vacations: ${employee.vacations}</p>
                    <p>Code: ${employee.code}</p>
                    <p>Active: ${employee.active}</p>
                    <p>SSN: ${employee.ssn}</p>
                    <p>Income: ${employee.income}</p>
                    <p>Type: ${employee.type}</p>
                    <p>Class: ${employee.class}</p>
                `;
            } else {
                console.log(`HTTP error: ${response.status}`);
            }
        } catch (error) {
            console.error(error);
        }
    }
});

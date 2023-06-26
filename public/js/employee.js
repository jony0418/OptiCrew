const printAllEmployees = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('this will print all employees');
    const response = await fetch('api/employee', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    if (response.ok) {
        const data = await response.json();
        console.log('response:', data);

        // Create a table and append it to the DOM
        let table = `<table><thead><tr><th>Department</th><th>Employee Name</th><th>SSN</th></tr></thead><tbody>`;
        for (let employee of data) {
            table += `<tr><td>${employee.Department.name}</td><td>${employee.name}  ${employee.lastName}</td><td>${employee.ssn}</td></tr>`;
        }
        table += `</tbody></table>`;
        document.querySelector(".employeeContainer").innerHTML += table;

    } else {
        console.log(`HTTP error: ${response.status}`);
    }
};

const newEmployeeBtn = document.getElementById('appBtn');

newEmployeeBtn.addEventListener('click', printAllEmployees);

const addEmployeeBtn = document.getElementById('addEmployeeBtn');

addEmployeeBtn.addEventListener('click', async (event) => {
    // Redirect to the '/addEmployee' URL
    event.preventDefault();
    event.stopPropagation();
    window.location.href = '/addEmployee';
});

const searchEmployeeBtn = document.getElementById('searchEmployeeBtn');

searchEmployeeBtn.addEventListener('click', async (event) => {
    // Redirect to the '/addEmployee' URL
    event.preventDefault();
    event.stopPropagation();
    window.location.href = '/searchEmployee';
});
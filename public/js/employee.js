const printAllEmployees = async (event) => {
    event.preventDefault();
    console.log('this will print all employees')
    const response = await fetch('/api/employee', {
        method: 'GET',
        // body: JSON.stringify(),
        headers: {'Content-Type': 'application/json'}
    })
    console.log('response:', response)
    console.log('response:', response.name)
};

const newEmployeeBtn = document.getElementById('appBtn');

newEmployeeBtn.addEventListener('click', printAllEmployees);





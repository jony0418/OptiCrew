const form = document.querySelector('#newEmployeeForm');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let formData = {
        name: form.name.value,
        lastName: form.lastName.value,
        shift: form.shift.value,
        gender: form.gender.value,
        birth: form.birth.value,
        address: form.address.value,
        county: form.county.value,
        zipCode: form.zipCode.value,
        city: form.city.value,
        cel: form.cel.value,
        education: form.education.value,
        id_department: form.id_department.value,
        supervisor: form.supervisor.value,
        position: form.position.value,
        admissionDate: form.admissionDate.value,
        vacations: form.vacations.value,
        code: form.code.value,
        active: form.active.value === "true", // Convert the string to a boolean
        ssn: form.ssn.value,
        income: parseFloat(form.income.value), // Convert the string to a float
        type: form.type.value,
        class: form.class.value,
    };

    try {
        const response = await fetch('/api/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        } else {
            alert("Employee added successfully!");
            // Clear the form
            form.reset();
        }
    } catch (error) {
        console.error(error);
    }
});

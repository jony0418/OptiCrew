const router = require('express').Router(); 
const express = require('express'); 
const { Employee, Department, Incident, Assist } = require('../../models'); 

//Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [Department, Incident],
        }); 
        res.status(200).json(employees); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve employees'}); 
    }
})

// create new employee
router.post('/', async (req, res) => {
    try {
        //get the employee data from the request body
        const employeeData = req.body; 
        //create a new employee using the employee model 
        const employee = await Employee.create(employeeData); 

        //return the created employee as the response
        return res.status(201).json(employee); 
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ error: 'Failed to create employee'}); 
    }
}); 


module.exports = router; 
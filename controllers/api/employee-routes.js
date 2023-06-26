const router = require('express').Router(); 
const express = require('express'); 
const { Employee, Department, Incident, Assist } = require('../../models');
const authMiddleware = require('../../authMiddleware');  

//Get all employees
router.get('/', authMiddleware, async (req, res) => {
    try {
        const employee = await Employee.findAll({
            include: [Department, Incident],
        });
        res.render('employee', {employee}); 
        res.status(200).json(employee); 
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve employees'}); 
    }
});

// create new employee
router.post('/',authMiddleware, async (req, res) => {
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

//get by id 
router.get('/:id', authMiddleware, async (req, res) => {
    try {
      const { id } = req.params;
  
      // Retrieve the employee from the database based on the provided ID
      const employee = await Employee.findByPk(id);
  
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found' });
      }
  
      res.status(200).json(employee);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to retrieve employee' });
    }
});

//update employee by id
router.put('/:id', authMiddleware, async (req, res) => {
    try {
        const { id } = req.params; 
        const employeeData = req.body; 

        //find the employee by id
        const employee = await Employee.findByPk(id); 

        //if employee doesnt exist, return error
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' }); 
        }
        //update the employee information
        await employee.update(employeeData); 

        return res.status(200).json(employee); 
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ error: 'Failed to update employee' }); 
    }
}); 
  




module.exports = router; 
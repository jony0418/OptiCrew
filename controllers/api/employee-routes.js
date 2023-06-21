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


module.exports = router; 
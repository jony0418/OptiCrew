const express = require('express');
const router = require('express').Router();

// Import routes
const homeRoutes = require('./home-routes');
const employeeRoutes = require('./api/employee-routes');
const assistRoutes = require('./api/assist-routes'); 
const userRoutes = require('./api/users-routes');

router.use('/', homeRoutes);
router.use('/employee', employeeRoutes); 
router.use('/assist', assistRoutes); 
router.use('/user', userRoutes);

module.exports = router; 
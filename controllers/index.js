const express = require('express'); 
const router = require('express').Router(); 

//import routes
const homeRoutes = require('./home-routes'); 
const employeeRoutes = require('./api/employee-routes');
const userRoutes = require('./api/users-routes');

router.use('/', homeRoutes);
router.use('/employee', employeeRoutes); 
router.use('/user', userRoutes); 


//exports the router
module.exports = router; 
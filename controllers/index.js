const express = require('express'); 
const router = require('express').Router(); 

//import routes
const homeRoutes = require('./home-routes'); 
const employeeRoutes = require('./api/employee-routes');

router.use('/', homeRoutes);
router.use('/employee', employeeRoutes); 


//exports the router
module.exports = router; 
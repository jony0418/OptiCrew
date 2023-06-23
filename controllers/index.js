const express = require('express'); 
const router = require('express').Router(); 

//import routes
const homeRoutes = require('./home-routes'); 
const employeeRoutes = require('./api/employee-routes');
const assistRoutes = require('./api/assist-routes'); 

router.use('/', homeRoutes);
router.use('/employee', employeeRoutes); 
router.use('/assist', assistRoutes); 

//exports the router
module.exports = router; 
const express = require('express');
const router = require('express').Router();

// Import routes
const homeRoutes = require('./home-routes');
const employeeRoutes = require('./api/employee-routes');
const assistRoutes = require('./api/assist-routes'); // Corrected filename

router.use('/', homeRoutes);
router.use('/employee', employeeRoutes);
router.use('/assist', assistRoutes);

// Export the router
module.exports = router;


const router = require('express').Router();
const employeeRoutes = require('./employee-routes');
const assistRoutes = require('./assist-routes'); 
const userRoutes = require('./users-routes');

router.use('/employee', employeeRoutes); 
router.use('/assist', assistRoutes); 
router.use('/user', userRoutes);

module.exports = router; 
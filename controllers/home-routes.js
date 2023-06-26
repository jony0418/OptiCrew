const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  // Handle the home route logic
  res.render('index')
});

// Gets all employees currently registered on the DB (For Administrators Only)
router.get('/employee', async (req, res)=>{
  res.render('employee')
})

router.get('/addEmployee', async (req, res)=>{
  res.render('addEmployee')
})

router.get('/login', (req, res) => {
  // Handle the home route logic
  res.render('login')
});

router.get('/searchEmployee', (req, res) => {
  res.render('searchEmployee')
});

// 
// 

router.get('/signup', (req, res) => {
  // Handle the home route logic
  res.render('SignUp')
  
});
// Export the router
module.exports = router;

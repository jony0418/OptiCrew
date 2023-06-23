const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  // Handle the home route logic
  res.render('index')
});

// Gets all employees currently registered on the DB (For Administrators Only)
// router.get('/employee', async (req, res)=>{
//   return res.render('employee')
// })

router.get('/login', (req, res) => {
  // Handle the home route logic
  res.render('login')
  
});


// 
// 

router.get('/signUp', (req, res) => {
  // Handle the home route logic
  res.render('/signUp')
  
});
// Export the router
module.exports = router;

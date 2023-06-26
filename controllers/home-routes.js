const express = require('express');
const router = express.Router();
const withAuth = require('../utils/auth'); 

// Define routes
router.get('/', (req, res) => {
  // Handle the home route logic
  res.render('index')
});

// Gets all employees currently registered on the DB (For Administrators Only)
router.get('/employee', withAuth, async (req, res)=>{
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

router.get('/removeEmployee', (req, res) => {
  res.render('removeEmployee')
});

router.get('/about-us', (req, res) => {
  res.render('about-us')
});

router.get('/login', (req, res) => {
  //if the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/employee'); 
  }
  res.render('login'); 
});
 

router.get('/signup', (req, res) => {
  // Handle the home route logic
  if (req.session.logged_in) {
    res.redirect('employee'); 
  }
  res.render('SignUp')
});



// Export the router
module.exports = router;

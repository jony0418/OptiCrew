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
  console.log(req.session);
  res.render('employee',{username: req.session.username, logged_in: req.session.logged_in})
})


router.get('/addEmployee', async (req, res)=>{
  res.render('addEmployee',{username: req.session.username, logged_in: req.session.logged_in})
})

router.get('/login', (req, res) => {
  // Handle the home route logic
  res.render('login')
});

router.get('/searchEmployee', (req, res) => {
  res.render('searchEmployee',{username: req.session.username, logged_in: req.session.logged_in})
});

router.get('/removeEmployee', (req, res) => {
  res.render('removeEmployee',{username: req.session.username, logged_in: req.session.logged_in})
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

//logout route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end(); 
    }); 
  } else {
    res.status(404).end(); 
  }
}); 

// Export the router
module.exports = router;

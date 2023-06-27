const router = require('express').Router();
const { User } = require('../../models');
const nodemailer = require('nodemailer'); // Require nodemailer

router.post('/', async (req, res) => {
  console.log('Request received to create a new user', req.body);
  
  try {
    const userData = await User.create(req.body);

    console.log('User created:', userData);

    req.session.save(() => {
      console.log('Saving session data for user');

      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.username = userData.username;

      console.log('Session data saved');

      // Set up nodemailer transporter
      let transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
              user: 'opticrew730@gmail.com', // your account
              pass: 'zeiecjjszruwfcod' // your password, we use a token here instead of a password
          }
      });

      console.log('Transporter set up');

      // Set up email data
      let mailOptions = {
          from: 'OptiCrew730@gmail.com',
          to: userData.email,
          subject: 'Welcome!',
          text: `Welcome ${userData.username}, to our application! We hope you enjoy your stay! - The OptiCrew Team`
      };


      console.log('Mail options set up');

      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              console.log('Error sending mail:', error);
              return;
          }
          console.log('Message sent: %s', info.messageId);
      });

      console.log('Email sent');

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log('Error creating user:', err);
    res.status(400).json(err);
  }
});

//this route recives all the users (id, username, email and password) just for testing
router.get('/users', async (req, res) => {
    try {
      // Access the user data from the previous route
      const users = await User.findAll();
  
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Failed to fetch users' });
    }
});
  
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } }); 

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again'}); 
        return; 
    }
    const validPassword = await userData.checkPassword(req.body.password); 


    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again'}); 
      return;   
    }
    req.session.save(() => {
      req.session.user_id;
      req.session.logged_in = true; 
      req.session.username = userData.username;
      res.json({ user: userData, message: 'You are now logged in!' }); 
    }); 
  } catch (err) {
    res.status(400).json(err); 
  }
}); 

//logout route
router.post('/logout', (req, res) => {
  console.log('login out', req.session.logged_in)
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end(); 
    }); 
  } else {
    res.status(404).end(); 
  }
}); 

module.exports = router; 
const router = require('express').Router(); 
const { User } = require('../../models'); 
const nodemailer = require('nodemailer'); // Require nodemailer

// create new user
router.post('/', async (req, res) => {

    console.log("Submitted Data: ", req.body)
    try {
        //get the user data from the request body
        const userData = req.body; 
        //create a new user using the employee model 
        const user = await User.create(userData); 


        //set seesion data fot the created user
        req.session.save(() => {
          req.session.user_id = userData.id; 
          req.session.logged_in = true; 
        }); 

        // Set up nodemailer transporter
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'opticrew730@gmail.com', // your gmail account
                pass: 'opticrew12345678' // your gmail password
            }
        });

        // Set up email data
        let mailOptions = {
            from: 'OptiCrew@gmail.com',
            to: userData.email, 
            subject: 'Welcome!', 
            text: 'Welcome to our application!'
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);   
        });


        //return the created user as the response
        return res.status(200).json(user); 
      } catch (error) {
        console.log(error); 
        return res.status(500).json({ error: 'Failed to create user'}); 
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
  

// login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by the username
    const user = await User.findOne({ where: { username } });

    // If the user is found and the password is correct
    if (user && await user.checkPassword(password)) {
      // Set up sessions with a 'loggedIn' variable set to `true`
      req.session.save(() => {
        req.session.user_id = user.id;
        req.session.logged_in = true;
        req.session.username = user.username;
        req.session.email = user.email;
      });
      res.status(200).json({ message: 'Logged in successfully' });
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to logiin' });
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end(); 
    }); 
  } else {
    res.status(404).end(); 
  }
}); 

module.exports = router; 
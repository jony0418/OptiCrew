const router = require('express').Router(); 
const { User } = require('../../models'); 
const nodemailer = require('nodemailer'); // Require nodemailer

//         //set seesion data fot the created user
//         req.session.save(() => {
//           req.session.user_id = userData.id; 
//           req.session.logged_in = true; 
//         }); 

//         // Set up nodemailer transporter
//         let transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: 'opticrew730@gmail.com', // your gmail account
//                 pass: 'opticrew12345678' // your gmail password
//             }
//         });

//         // Set up email data
//         let mailOptions = {
//             from: 'OptiCrew@gmail.com',
//             to: userData.email, 
//             subject: 'Welcome!', 
//             text: 'Welcome to our application!'
//         };

//         // Send the email
//         transporter.sendMail(mailOptions, (error, info) => {
//             if (error) {
//                 return console.log(error);
//             }
//             console.log('Message sent: %s', info.messageId);   
//         });


//         //return the created user as the response
//         return res.status(200).json(user); 
//       } catch (error) {
//         console.log(error); 
//         return res.status(500).json({ error: 'Failed to create user'}); 
//     }
// });
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body); 
    
    req.session.save(() => {
      req.session.user_id = userData.id; 
      req.session.logged_in = true; 

      res.status(200).json(userData); 
    }); 
  } catch (err) {
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

      res.json({ user: userData, message: 'You are now logged in!' }); 
    }); 
  } catch (err) {
    res.status(400).json(err); 
  }
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

module.exports = router; 
const router = require('express').Router(); 
const express = require('express'); 
const { User } = require('../../models'); 


// create new user
router.post('/', async (req, res) => {

    console.log("Submitted Data: ", req.body)
    try {
        //get the user data from the request body
        const userData = req.body; 
        //create a new user using the employee model 
        const user = await User.create(userData); 

        //return the created user as the response
        return res.status(201).json(user); 
    } catch (error) {
        console.log(error); 
        return res.status(500).json({ error: 'Failed to create user'}); 
    }
}); 

//get all user's email this function will not develop any function in the app its just for testing
router.get('/', async (req, res) => {
    try {
        const users = await User.findAll({
            attributes: ['email'],
        }); 
        const emailList = users.map((users) => users.email);

        return res.status(200).json(emailList); 
    } catch {
        console.log(error); 
        return res.status(500).json({ error: 'Failed to fetch users' }); 
    }
}); 

module.exports = router; 
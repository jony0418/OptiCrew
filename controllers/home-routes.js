const router = express('express').Router(); 

//Get all the possible options from the homepage 
router.get('/', async (req, res) => {
    res.send('Welcome to the home, page')
})

//get one specific action


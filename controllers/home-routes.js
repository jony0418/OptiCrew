const router = express('express').Router(); 

//Get 
router.get('/', async (req, res) => {
    res.send('Welcome to the home, page')
})
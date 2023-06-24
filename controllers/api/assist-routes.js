const express = require('express');
const router = require('express').Router(); 
const { Assist, Employee, Incident } = require('../../models');

router.get('/assist/:id', async (req, res) => {
  try {
    const assistData = await Assist.findByPk(req.params.id, {
      include: [
        {
          //employee name
          model: Employee,
          attributes: ['name']
        },
        {
          model: Incident, 
          attributes: ['date', 'type']
        }
      ]
    }); 
    if (!assistData) {
      res.status(404).json({ message: 'No assist founded for this employee' }); 
      return; 
    }
    res.json(assistData); 
  } catch (err) {
    console.log(err); 
    res.status(500).json(err); 
  }
}); 

router.get('/assist', async (req, res) => {
  try {
    const assists = await Assist.findAll();
    res.json(assists);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;


module.exports = router;

const express = require('express');
const router = express.Router();
const { Assist, Employee, Incident } = require('../../models');

router.get('/assist/:id', (req, res) => {
  Assist.findOne({
    where: {
      id_employee: req.params.id
    },
    include: [
      {
        model: Employee,
        attributes: ['name']
      },
      {
        model: Incident,
        attributes: ['date', 'type']
      }
    ]
  })
  .then(assistData => {
    if (!assistData) {
      res.status(404).json({ message: 'No asistencia encontrada para este empleado.' });
      return;
    }
    res.json(assistData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;

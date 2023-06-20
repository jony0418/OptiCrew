const { Assist } = require('../models');

const assistData = [
  {
    id_employee: 1,
    date: '2023-06-19',
    entry: '08:00:00',
    departure: '17:00:00',
    id_incident: 1,
    week: 25
  },
  {
    id_employee: 2,
    date: '2023-06-19',
    entry: '09:00:00',
    departure: '18:00:00',
    id_incident: null,
    week: 25
  },
  // more data here
];

const seedAssists = () => Assist.bulkCreate(assistData);

module.exports = seedAssists;

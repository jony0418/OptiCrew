const { incident } = require('../models');

const incidentData = [
{
    id_employee: 1,
    date: '2021-07-01',
    days: 1,
    type: 'Sick leave',
    observations: 'He has feeling bad with fever and headache',
    id_user: 1,
    status: 'Aprooved'
},
{
    id_employee: 2,
    date: '2021-07-02',
    days: 2,
    type: 'Vacaciones',
    observations: 'Vacaciones',
    id_user: 1,
    status: 'Aprooved'
},
{
    id_employee: 2,
    date: '2021-07-03',
    days: 5,
    type: 'Vacaciones',
    observations: 'Vacaciones',
    id_user: 1,
    status: 'Aprooved'
},
{
    id_employee: 3,
    date: '2021-07-04',
    days: 4,
    type: 'Sick leave',
    observations: 'He has feeling bad with fever and headache',
    id_user: 1,
    status: 'Aprooved'
}
  // ...more data...
];

const seedIncident = () => incident.bulkCreate(incidentData);

module.exports = seedIncident;
const { incidents } = require('../models');

const incidentsData = [
{
    id_incident: 1,
    date: '2021-07-01'
},
{
    id_incident: 2,
    date: '2021-07-02'
},
{
    id_incident: 2,
    date: '2021-07-03'
},
{
    id_incident: 3,
    date: '2021-07-04'
},
{
    id_incident: 3,
    date: '2021-07-05'
},
{
    id_incident: 3,
    date: '2021-07-06'
},
{
    id_incident: 3,
    date: '2021-07-07'
},
{
    id_incident: 3,
    date: '2021-07-08'
},
{
    id_incident: 4,
    date: '2021-07-09'
},
{
    id_incident: 4,
    date: '2021-07-10'
},
{
    id_incident: 4,
    date: '2021-07-11'
},
{
    id_incident: 4,
    date: '2021-07-12'

}
  // ...more data...
];

const seedIncidents = () => incidents.bulkCreate(incidentsData);

module.exports = seedIncidents;
const { Assist } = require('../models');
const { Op } = require('sequelize');
const { Incident } = require('../models');

const seedAssist = async () => {
  let assists = [];
  let incidents = await Incident.findAll();

  const workDaysInJanuary2023 = [];
  const startDate = new Date(2023, 0, 1); // January 2023
  const endDate = new Date(2023, 1, 1); // February 2023
  
  for (let day = startDate; day < endDate; day.setDate(day.getDate() + 1)) {
    if (day.getDay() !== 0 && day.getDay() !== 6) { // Skip weekends
      workDaysInJanuary2023.push(new Date(day));
    }
  }

  for (let day of workDaysInJanuary2023) {
    for (let employeeId = 1; employeeId <= 4; employeeId++) {
      const incident = incidents.find(i => 
        i.id_employee === employeeId && 
        new Date(i.date).toDateString() === day.toDateString()
      );
      assists.push({
        id_employee: employeeId,
        date: day,
        entry: '08:00:00',
        departure: '17:00:00',
        id_incident: incident ? incident.id : null,
        week: Math.floor((day.getDate() - 1) / 7) + 1,
      });
    }
  }

  await Assist.bulkCreate(assists);
};

module.exports = seedAssist;
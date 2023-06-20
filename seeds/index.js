const seedDepartments = require('./department-seeds');
const seedEmployees = require('./employee-seeds');
const seedIncident = require('./incident-seeds');
const seedUser = require('./user-seeds');
const seedAssist = require('./assist-seeds');
const seedIncidents = require('./incidents-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await seedDepartments();
  console.log('\n----- DEPARTMENTS SEEDED -----\n');

  await seedIncidents();
  console.log('\n----- INCIDENTS SEEDED -----\n');

  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedAssist();
  console.log('\n----- ASSIST SEEDED -----\n');
  
  await seedIncident();
  console.log('\n----- INCIDENT SEEDED -----\n');


  process.exit(0);
};

seedAll();

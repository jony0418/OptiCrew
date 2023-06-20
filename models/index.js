const Employee = require('./employee');
const Department = require('./department');
const User = require('./user');
const Incident = require('./incident');
const Assist = require('./assist');
const Incidents = require('./incidents');

Employee.belongsTo(Department, {
  foreignKey: 'id_department',
  onDelete: 'CASCADE',
});

Department.hasMany(Employee, {
  foreignKey: 'id_department',
  onDelete: 'CASCADE',
});

Incident.belongsTo(Employee, {
  foreignKey: 'id_employee',
  onDelete: 'CASCADE',
});

Employee.hasMany(Incident, {
  foreignKey: 'id_employee',
  onDelete: 'CASCADE',
});

Incident.belongsTo(User, {
  foreignKey: 'id_user',
  onDelete: 'SET NULL',
});

User.hasMany(Incident, {
  foreignKey: 'id_user',
});

Assist.belongsTo(Employee, {
  foreignKey: 'id_employee',
  onDelete: 'CASCADE',
});

Employee.hasMany(Assist, {
  foreignKey: 'id_employee',
  onDelete: 'CASCADE',
});

Assist.belongsTo(Incident, {
  foreignKey: 'id_incident',
  onDelete: 'SET NULL',
});

Incident.hasOne(Assist, {
  foreignKey: 'id_incident',
});

module.exports = { Employee, Department, User, Incident, Assist, Incidents };

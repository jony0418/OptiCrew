const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employee extends Model {}

Employee.init(
  {
    // Employee ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    assist: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // Employee first name
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee last name
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee shift
    shift: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee gender
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee birth date
    birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    // Employee address
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee county
    county: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee zip code
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee city
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee cellphone number
    cel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee education level
    education: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // ID of the department the employee belongs to
    id_department: {
      type: DataTypes.INTEGER,
      references: {
        model: 'department',
        key: 'id',
      },
    },
    // Employee supervisor
    supervisor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee position
    position: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee admission date
    admissionDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    // Number of vacation days for the employee
    vacations: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // Employee code
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee active status
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // Employee social security number
    ssn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee income
    income: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    // Employee type
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Employee class
    class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Employee',
  }
);

module.exports = Employee;


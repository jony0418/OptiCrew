const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Employee = require('./employee');
const User = require('./user');

class Incident extends Model {}

Incident.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_employee: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    days: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observations: {
      type: DataTypes.STRING,
      allowNull: true,  // Assuming observations are optional
    },
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'incident',
  }
);

// Add this after the Incident model definition:

Incident.belongsTo(Employee, {
  foreignKey: 'id_employee',
  onDelete: 'CASCADE',
});

Incident.belongsTo(User, {
  foreignKey: 'id_user',
  onDelete: 'SET NULL',
});

module.exports = Incident;

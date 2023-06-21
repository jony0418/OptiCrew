const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Assist extends Model {}

Assist.init(
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
    entry: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    departure: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    id_incident: {
      type: DataTypes.INTEGER,
      references: {
        model: 'incident',
        key: 'id',
      },
    },
    week: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Assist',
  }
);

module.exports = Assist;

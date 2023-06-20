const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Incidents extends Model {}

Incidents.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_Incidents: {
      type: DataTypes.INTEGER,
      references: {
        model: 'incident',
        key: 'id',
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Incidents',
  }
);

module.exports = Incidents;

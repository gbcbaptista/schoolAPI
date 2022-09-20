'use strict';
const {
  Model
} = require('sequelize');
const people = require('./people');
module.exports = (sequelize, DataTypes) => {
  class Nivels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Nivels.hasMany(models.StudentGroups, { foreignKey: 'nivel_id'})
    }
  }
  Nivels.init({
    descr_nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivels',
    paranoid: true
  });
  return Nivels;
};
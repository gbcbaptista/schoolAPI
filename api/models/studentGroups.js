'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StudentGroups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      StudentGroups.hasMany(models.Registrations, { foreignKey: 'studentGroups_id' })
      StudentGroups.belongsTo(models.People)
      StudentGroups.belongsTo(models.Nivels)
    }
  }
  StudentGroups.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'StudentGroups',
  });
  return StudentGroups;
};
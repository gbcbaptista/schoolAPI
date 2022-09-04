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
      StudentGroupsGroups.hasMany(models.Registrations, { foreignKey: 'studentGroups_id' })
      StudentGroupsGroups.belongsTo(models.People)
      StudentGroupsGroups.belongsTo(models.Nivels)
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
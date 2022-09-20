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
      StudentGroups.hasMany(models.Registrations, { foreignKey: 'studentGroup_id' })
      StudentGroups.belongsTo(models.People, { foreignKey: 'teacher_id' })
      StudentGroups.belongsTo(models.Nivels , { foreignKey: 'nivel_id' })
    }
  }
  StudentGroups.init({
    start_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'StudentGroups',
    paranoid: true
  });
  return StudentGroups;
};
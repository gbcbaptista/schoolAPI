'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.StudentGroups, { foreignKey: 'teacher_id'})
      People.hasMany(models.Registrations, { foreignKey: 'student_id'})
    }
  }
  People.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateName: (name) => {
          if (name.length < 3) throw new Error('Name must be longer than 3 letters!')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid Email!'
        }
    }},
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
  scopes: {
    all: { where: {} },
  }});

  return People;
};
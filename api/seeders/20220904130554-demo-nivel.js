'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Nivels', [
      {
        descr_nivel: 'Basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Intermediate',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descr_nivel: 'Advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Nivels', null, {});
  }
};

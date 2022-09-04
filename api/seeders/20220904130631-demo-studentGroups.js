'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('studentGroups', [
      {
        teacher_id: 3,
        start_date: '2021-04-01',
        nivel_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_id: 4,
        start_date: '2021-04-01',
        nivel_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        teacher_id: 4,
        start_date: '2021-04-01',
        nivel_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('studentGroups', null, {});
  }
};

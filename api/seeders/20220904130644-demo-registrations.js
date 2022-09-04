'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Registrations', [
      {
        status: 'Canceled',
        student_id: 2,
        studentGroup_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Canceled',
        student_id: 2,
        studentGroup_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'Confirmed',
        student_id: 2,
        studentGroup_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Registrations', null, {});
  }
};

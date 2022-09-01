'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('People', [
      {
      name: 'John Doe',
      active: true,
      email: "carla@carla.com",
      role: "student",
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Marcos Silva',
        active: true,
        email: "marcos@marcos.com",
        role: "student",
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'Gabriel Doe',
          active: true,
          email: "gabriel@gabriel.com",
          role: "teacher",
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            name: 'Gabriela Silva',
            active: true,
            email: "gabriela@gabriela.com",
            role: "teacher",
            createdAt: new Date(),
            updatedAt: new Date()
            },
    ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('People', null, {});
  }
};

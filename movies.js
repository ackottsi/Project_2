'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Movies', [
      {
        name: 'Ex Machina',
        dateReleased: '7/14/2015'
      },
      {
        name: 'McLintock',
        dateReleased: '10/11/2005'
      },
      {
        name: 'Matilda',
        dateReleased: '06/07/1996'
     },
     {
        name: 'Pale Rider',
        dateReleased: '04/01/1992'
    },
    {
        name: 'Pretty Woman',
        dateReleased: '08/30/2005'
    }], 
  {});
},

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {
     */
  }
};

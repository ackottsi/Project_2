'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Movies', [
      {
        movieId: 1,
        actorId: 1
      },
      {
        movieId: 1,
        actorId: 2
      },
      {
        movieId: 1,
        actorId: 3
     },
     {
        movieId: 1,
        actorId: 4
    },
    {
        movieId: 2,
        actorId: 5
      },
      {
        movieId: 2,
        actorId: 6
      },
      {
        movieId: 3,
        actorId: 7
     },
     {
        movieId: 3,
        actorId: 8
    },
    {
        movieId: 4,
        actorId: 9
      },
      {
        movieId: 4,
        actorId: 10
      },
      {
        movieId: 4,
        actorId: 11
     },
     {
        movieId: 5,
        actorId: 12
    },
    {
        movieId: 5,
        actorId: 13
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

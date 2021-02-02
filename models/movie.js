'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automaticall
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Actor, { foreignKey: "movieId" });
    }
  };
  Movie.init({
    name: DataTypes.STRING,
    dateReleased: DataTypes.DATE

  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};
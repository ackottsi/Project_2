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
      Actor.belongsTo(models.Movie, { foreignKey: "movieId" });
        }
    };
  Actor.init({
    name: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};
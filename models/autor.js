'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Autor.init({
    nome_autor: DataTypes.STRING,
    data_nascimento: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'autor'
  });
  return Autor;
};
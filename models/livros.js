'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Livros.init({
    nome_livro: DataTypes.STRING,
    lancamento_livro: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Livros',
    tableName: 'livros'
  });
  return Livros;
};
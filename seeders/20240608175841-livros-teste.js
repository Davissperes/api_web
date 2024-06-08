'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('livros', [
      {
        nome_livro: "A Noite do Tigre",
        lancamento_livro: new Date("2019-02-12")
      },
      {
        nome_livro: "Onde Cantam os Pássaros",
        lancamento_livro: new Date("2019-08-06")
      },
      {
        nome_livro: "Circe",
        lancamento_livro: new Date("2018-04-10")
      },
      {
        nome_livro: "A Quinta Estação",
        lancamento_livro: new Date("2015-08-04")
      },
      {
        nome_livro: "O Conto da Aia",
        lancamento_livro: new Date("1985-09-01")
      },
      {
        nome_livro: "O Senhor dos Anéis",
        lancamento_livro: new Date("1954-07-29")
      },
      {
        nome_livro: "Duna",
        lancamento_livro: new Date("1965-08-01")
      },
      {
        nome_livro: "1984",
        lancamento_livro: new Date("1949-06-08")
      },
      {
        nome_livro: "Neuromancer",
        lancamento_livro: new Date("1984-07-01")
      },
      {
        nome_livro: "A Guerra dos Mundos",
        lancamento_livro: new Date("1898-01-01")
      },
      {
        nome_livro: "O Sol é Para Todos",
        lancamento_livro: new Date("1960-07-11")
      },
      {
        nome_livro: "Beloved",
        lancamento_livro: new Date("1987-09-16")
      },
      {
        nome_livro: "A Song of Ice and Fire: A Game of Thrones",
        lancamento_livro: new Date("1996-08-06")
      },
    ], {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('livros', {
        nome_livro: "A Noite do Tigre",
        nome_livro: "Onde Cantam os Pássaros",
        nome_livro: "Circe",
        nome_livro: "A Quinta Estação",
        nome_livro: "O Conto da Aia",
        nome_livro: "O Senhor dos Anéis",
        nome_livro: "Duna",
        nome_livro: "1984",
        nome_livro: "Neuromancer",
        nome_livro: "A Guerra dos Mundos",
        nome_livro: "O Sol é Para Todos",
        nome_livro: "Beloved",
        nome_livro: "A Song of Ice and Fire: A Game of Thrones"
    }, {});
  }
};

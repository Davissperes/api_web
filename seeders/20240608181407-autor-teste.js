'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('autor', [
      {
        nome_autor: "Yangsze Choo",
        data_nascimento: "1973-01-01"
      },
      {
        nome_autor: "Delia Owens",
        data_nascimento: "1949-04-04"
      },
      {
        nome_autor: "Madeline Miller",
        data_nascimento: "1978-07-24"
      },
      {
        nome_autor: "N. K. Jemisin",
        data_nascimento: "1972-09-19"
      },
      {
        nome_autor: "Margaret Atwood",
        data_nascimento: "1939-11-18"
      },
      {
        nome_autor: "J. R. R. Tolkien",
        data_nascimento: "1892-01-03"
      },
      {
        nome_autor: "Frank Herbert",
        data_nascimento: "1920-10-08"
      },
      {
        nome_autor: "George Orwell",
        data_nascimento: "1903-06-25"
      },
      {
        nome_autor: "William Gibson",
        data_nascimento: "1948-03-17"
      },
      {
        nome_autor: "H. G. Wells",
        data_nascimento: "1866-09-21"
      },
      {
        nome_autor: "Harper Lee",
        data_nascimento: "1926-04-28"
      },
      {
        nome_autor: "Toni Morrison",
        data_nascimento: "1931-02-18"
      },
      {
        nome_autor: "George R. R. Martin",
        data_nascimento: "1948-09-20"
      }
    ], {});
  },
  
  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('autor', {
      nome_autor: "Yangsze Choo",
      nome_autor: "Delia Owens",
      nome_autor: "Madeline Miller",
      nome_autor: "N. K. Jemisin",
      nome_autor: "Margaret Atwood",
      nome_autor: "J. R. R. Tolkien",
      nome_autor: "Frank Herbert",
      nome_autor: "George Orwell",
      nome_autor: "William Gibson",
      nome_autor: "H. G. Wells",
      nome_autor: "Harper Lee",
      nome_autor: "Toni Morrison",
      nome_autor: "George R. R. Martin"
    }, {});
  }
};

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('komik', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        judul: {
          allowNull: false,
          type: Sequelize.STRING
        },
        harga: {
          allowNull: false,
          type: Sequelize.DOUBLE,
        },
        imageKomik: {
          allowNull: true,
          type: Sequelize.TEXT
        },
        description: {
          allowNull: false,
          type: Sequelize.TEXT
        },
        halaman: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        nama_pengarang: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
         },
         updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
         },
         deletedAt: {
           allowNull: false,
           type: Sequelize.DATE
         }
      });
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('komik');
    
  }
};

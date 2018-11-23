'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('transaksi', {
         id: {
           allowNull: false,
           autoIncrement: true,
           primaryKey: true,
           type: Sequelize.INTEGER
          },
          id_user: {
            allowNull: false,
            type: Sequelize.INTEGER
           },
        name: {
            allowNull: false,
            type: Sequelize.STRING
           },
        judul_komik: {
            allowNull: false,
            type: Sequelize.STRING
           },
        harga: {
            allowNull: false,
            type: Sequelize.DOUBLE
           },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE
           },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
           }
        });
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.dropTable('transaksi');
  }
};

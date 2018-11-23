'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaksi = sequelize.define('transaksi', {
    id_user: {
        allowNull: false,
        type: DataTypes.INTEGER
       },
    name: {
        allowNull: false,
        type: DataTypes.STRING
       },
    judul_komik: {
        allowNull: false,
        type: DataTypes.STRING
       },
    harga: {
        allowNull: false,
        type: DataTypes.DOUBLE
       }
  }, {
    tableName: 'transaksis'
  });
  transaksi.associate = function(models) {
    // associations can be defined here
  };
  return transaksi;
};
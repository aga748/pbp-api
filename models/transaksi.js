'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('transaksi', {
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
    tableName: 'users'
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
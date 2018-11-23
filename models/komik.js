'use strict';
module.exports = (sequelize, DataTypes) => {
  const komik = sequelize.define('komiks', {
    judul: {
        allowNull: false,
        type: DataTypes.STRING
      },
      harga: {
        allowNull: false,
        type: DataTypes.DOUBLE
      },
      imageKomik: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      halaman: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      nama_pengarang: {
        allowNull: false,
        type: DataTypes.STRING
      }
  }, {
    tableName: 'komik'
  });
  komik.associate = function(models) {
    // associations can be defined here
  };
  return komik;
};
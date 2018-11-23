'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: {
        allowNull: false,
        type: DataTypes.STRING
       },
    username: {
        allowNull: false,
        type: DataTypes.STRING
       },
    email: {
        allowNull: false,
        type: DataTypes.STRING
       },
    password: {
        allowNull: false,
        type: DataTypes.STRING
       },
    balance: {
        allowNull: false,
        type: DataTypes.DOUBLE
       },
    imageUser: {
        allowNull: true,
       type: DataTypes.TEXT
    }
  }, {
    tableName: 'users'
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    migration.createTable(
      'users',
      {
        id: {
          type: DataTypes.STRING,
          primaryKey: true,
          autoIncrement: false
        },
        username: {
          type: DataTypes.STRING,
        },
        real_name: {
          type: DataTypes.STRING,
        },
        avatar: {
          type: Sequelize.STRING
        },
        createdAt: {
          type: DataTypes.DATE
        },
        updatedAt: {
          type: DataTypes.DATE
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    migration.dropTable('users')
  }
};

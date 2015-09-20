'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    migration.createTable(
      'channels',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
        },
        description: {
          type: Sequelize.STRING
        },
        is_archived: {
          type: Sequelize.BOOLEAN
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
    migration.dropTable('channels')
  }
};

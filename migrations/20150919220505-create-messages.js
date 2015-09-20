'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    migration.createTable(
      'messages',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        channel_id:{
          type: DataTypes.STRING
        },
        user_id: {
          type: DataTypes.STRING,
          primaryKey: true,
        },
        attachments: {
          type: Sequelize.JSON
        },
        text: {
          type: Sequelize.STRING
        },
        ts: {
          type: Sequelize.FLOAT
        },
        subtype: {
          type: Sequelize.STRING
        },
        hidden: {
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
    migration.dropTable('messages')
  }
};

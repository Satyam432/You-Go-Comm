const { sequelize, Sequelize } = require('../utils/database');

const Event = sequelize.define('event', {
  event_id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Event;

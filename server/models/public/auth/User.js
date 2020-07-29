const { sequelize, Sequelize } = require('../../db');
module.exports.User = sequelize.define('user', {
  user_id: {
    primaryKey: true,
    type: Sequelize.UUIDV4,
    allowNUll: false,
  },
});

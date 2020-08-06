const { sequelize, Sequelize } = require('../../config/database');
const Friend = sequelize.define(
  'friend',
  {
    following_id: {
      type: Sequelize.UUID,
    },
    follower_id: {
      type: Sequelize.STRING,
    },
  },
  { underscored: true }
);
module.exports = Friend;

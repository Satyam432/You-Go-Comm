const Sequelize = require('sequelize');

const db = {};

db.sequelize = require('../config/database'); // contains sequelize, Sequelize, connect_db
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

// Adding Models
db.User = require('./user/User');
db.Friend = require('./user/Friend');
db.Event = require('./Event');

// Add Relations/ Associations
db.User.belongsToMany(db.User, {
  as: 'followers',
  through: db.Friend,
  foreignKey: 'follower_id',
  otherKey: 'following_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

db.User.belongsToMany(db.User, {
  as: 'following',
  through: db.Friend,
  foreignKey: 'following_id',
  otherKey: 'follower_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = db;

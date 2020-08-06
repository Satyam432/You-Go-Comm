const Sequelize = require('sequelize');

const db = {};

db.sequelize = require('../config/database'); // contains sequelize, Sequelize, connect_db
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

// Adding Models
db.User = require('./auth/User');
db.Event = require('./Event');

// Add Relations/ Associations
db.User.belongsToMany(db.User, {
  as: 'Follower',
  through: 'friends',
  foreignKey: 'follower_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

db.User.belongsToMany(db.User, {
  as: 'Following',
  through: 'friends',
  foreignKey: 'following_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = db;

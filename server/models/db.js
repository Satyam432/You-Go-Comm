const Sequelize = require('sequelize');
const faker = require('faker');
const Promise = require('bluebird');

const db = {};

db.sequelize = require('../utils/database'); // contains sequelize, Sequelize, connect_db
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;

// Adding Models
db.User = require('./auth/User');
db.Event = require('./Event');

// Add Relations/ Associations
db.User.belongsToMany(db.Event, {
  through: 'user_event',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Promise.all([
  db.User.create({
    name: faker.name.findName(),
    email: faker.internet.email(),
    college: 'BITS',
    state: faker.address.state(),
    city: faker.address.city(),
    degree: 'B.Tech',
    dob: faker.date.past(),
    contact: faker.phone.phoneNumber(),
    image_url: faker.internet.url(),
  }),
  db.Event.create({
    name: faker.commerce.productName(),
  }),
]);

module.exports = db;

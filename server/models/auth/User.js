const { sequelize, Sequelize } = require('../../config/database');
const User = sequelize.define(
  'user',
  {
    user_id: {
      primaryKey: true,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      allowNUll: false,
    },
    name: {
      type: Sequelize.STRING,
    },
    college: {
      type: Sequelize.STRING,
    },
    degree: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATEONLY,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    linkedin_profile: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      },
    },
    image_url: {
      type: Sequelize.STRING,
      validate: {
        isUrl: true,
      },
    },
  },
  { underscored: true }
);
module.exports = User;

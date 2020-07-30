const { sequelize, Sequelize } = require('../../utils/database');
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
      allowNull: false,
    },
    college: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    degree: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    dob: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contact: {
      type: Sequelize.STRING,
      allowNull: false,
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

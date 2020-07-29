const { sequelize, Sequelize } = require('../../utils/db');
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
      validate: {
        isNumeric: true,
        len: [0, 10],
      },
    },
    contact_whatsapp: {
      type: Sequelize.STRING,
      validate: {
        isNumeric: true,
        len: [0, 10],
      },
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
  },
  { underscored: true }
);
User.create({
  name: 'Setej',
  college: 'vit',
  degree: 'B.Tech',
  dob: Sequelize.NOW,
  city: 'Goa',
  state: 'goa',
  contact: '9998787458',
  email: 'setej@bits.com',
});
module.exports = User;

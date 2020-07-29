const { Sequelize, Model, DataTypes } = require('sequelize');


const sequelize = new Sequelize(
  process.env.DATABASE_NAME || 'yougocomm',
  process.env.DATABASE_USERNAME || 'postgres',
  process.env.DATABASE_PASSWORD || 'yougocomm123',
  {
    host: process.env.DATABASE_HOST || 'db',
    port: process.env.DATABASE_PORT || 5432,
    dialect: 'postgres',
    define: {
      underscored: true,
      schema: 'public',
    },
    timezone: '+05:30',
    dialectOptions: {
      useUTC: false,
    },
  }
);

const db = {};
db.connect_db = async () => {
  try {
    await sequelize.authenticate();

    console.log("\n\nConected to postgres :')");
  } catch (err) {
    console.log(err);
    console.log("\n\nCould not connect to postgres :'(");
  }
};

db.sequelize = sequelize;
db.Sequelize = DataTypes;

module.exports = db;

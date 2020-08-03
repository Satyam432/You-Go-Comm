const db = require('./models/db').sequelize;
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config();
require('./middlewares/passport_google');

const errorHandler = require('./middlewares/error_handler');
const authRouter = require('./routes/auth');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({credentials:true,origin:[process.env.HOST_CLIENT_ADD]}));
app.use(
  cookieSession({
    maxAge: 1 * 60 * 60 * 1000,
    keys: ['yougocomm123321yougocomm'],
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/api/auth', authRouter);

app.use('/', errorHandler.handle404);
app.use(errorHandler.handle);

db.sequelize
  // .sync({ force: true }) // use to erase all data and recreate and also add/delte columns
  .sync() // use to persist data
  // .sync({ alter: true }) // use to persist data  and/or add or remove columns
  // .sync({benchmark:true,logging:false})
  .then((result) => {
    return db.connect_db();
  })
  .then((result) => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`\n\nListening on Port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

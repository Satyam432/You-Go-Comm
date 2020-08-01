const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require('../controllers/auth/auth');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google'),
  AuthController.authenticate
);

router.get('/current-user', (req, res, next) => {
  console.log('USER OBJ', req.user);
  return res.status(200).json({ success: true, user: req.user });
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect(`${process.env.HOST_CLIENT_ADD}`);
});

router.post('/add-details', AuthController.addDetails);

module.exports = router;

const express = require('express');
const router = express.Router();
const passport = require('passport');
const AuthController = require('../controllers/auth/auth');

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
    session: false,
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google', { session: false }),
  AuthController.authenticate
);

router.post('/add-details', AuthController.addDetails);

module.exports = router;

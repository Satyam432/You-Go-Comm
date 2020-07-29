const express = require('express');
const router = express.Router();
const passport = require('passport');

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
  (req, res, next) => {
    res.redirect(
      process.env.FALLBACK_URL || 'http://localhost:3000/account-details'
    );
  }
);

module.exports = router;

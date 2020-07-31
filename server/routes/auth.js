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

// /api/auth/current-user
router.get('/current_user', (req, res, next) => {
  return res.status(200).json({ success: true, user: req.user });
});

router.post('/add-details', AuthController.addDetails);

module.exports = router;

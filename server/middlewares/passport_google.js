const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const db = require('../models/db');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    let user = await db.User.findOne({ where: { user_id: id } }, { raw: true });
    // user = { id: user.user_id, email: user.email, type: null };
    done(null, user.get({ plain: true }));
  } catch (error) {
    done(new Error('User not found'));
  }
});

passport.use(
  new GoogleStrategy(
    {
      clientID:
        process.env.GOOGLE_CLIENT_ID ||
        '720927514645-19ci5f72p7o5kr8m06g74c2il8t8pumf.apps.googleusercontent.com',
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || 'DMCEgOqaeYOQrInfSO-vVu8E',
      callbackURL:
        process.env.GOOGLE_CALLBACK_URL ||
        'http://localhost:5000/api/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      let user = await db.User.findOne({
        where: {
          email: profile._json.email,
        },
        raw: true,
      });
      if (user) {
        return done(null, {
          id: user.user_id,
          email: user.email,
          type: 'LOGIN',
        });
      }
      user = await db.User.create(
        { email: profile._json.email, image_url: profile._json.picture },
        { raw: true }
      );
      if (user) {
        return done(null, {
          id: user.user_id,
          email: user.email,
          type: 'SIGNUP',
        });
      }
    }
  )
);

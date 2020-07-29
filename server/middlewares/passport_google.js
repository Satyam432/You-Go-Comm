const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');

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
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

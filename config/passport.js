const passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./keys');
module.exports = function(passport){
    passport.use(new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: "/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
       console.log(profile);
       console.log(accessToken);
      }
    

    ))
}
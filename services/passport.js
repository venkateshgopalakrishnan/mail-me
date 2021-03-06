const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LinkedinStrategy = require("passport-linkedin-oauth2").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const user = mongoose.model("user");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  user.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await user.findOne({ userID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new user({ userID: profile.id }).save();
        done(null, user);
      }
    }
  )
);

passport.use(
  new LinkedinStrategy(
    {
      clientID: keys.linkedinClientID,
      clientSecret: keys.linkedinClientSecret,
      callbackURL: "/auth/linkedin/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await user.findOne({ userID: profile.id });
      if (existingUser) {
        done(null, existingUser);
      } else {
        const user = await new user({ userID: profile.id }).save();
        done(null, user);
      }
    }
  )
);

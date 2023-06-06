const mongoose = require('mongoose')
const { Schema } = mongoose
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const findOrCreate = require('mongoose-findorcreate')

const userSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String,
  },
  googleId: {
    type: String
  }
});

userSchema.plugin(passportLocalMongoose)
userSchema.plugin(findOrCreate)

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy())

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, {
      id: user.id, username: user.username, name: user.displayName
    })
  })
})

passport.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user)
  })
})

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "https://angry-eel-fedora.cyclic.app/auth/google/admin-console/create-perso"
},
  function (accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user)
    })
  }
))

module.exports = User;
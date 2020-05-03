// Using Passport.js with MongoDb
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("Users", UserSchema);

module.exports = User;

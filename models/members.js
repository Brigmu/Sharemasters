// Public member data
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  }
});

const Member = mongoose.model("Members", MemberSchema);

module.exports = Member;

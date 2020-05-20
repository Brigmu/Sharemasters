// Profile info for users
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  coordinates: {
    lat: { type: Number },
    lng: { type: Number }
  },
  address: String,
  city: String,
  state: {
    type: String,
  },
  zipCode: {
    type: String,
    maxlength: 5
  },
  rentals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  owned: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  rentalHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Profile = mongoose.model("Profiles", ProfileSchema);

module.exports = Profile;

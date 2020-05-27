const mongoose = require('mongoose');
const Schema = mongoose.Schema

const itemSchema = new mongoose.Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: "Profile",
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String,
        maxlength: [2, 'Please enter two-letter state abbreviation']
    },
    zipCode: {
        type: Number,
        maxlength: 5
    },
    fullAddress: {
        type: String
    },
    coordinates: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String
    },
    pendingRequest: {
        type: Boolean,
        default: false
    },
    renterUserId: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    isRented: {
        type: Boolean,
        default: false
    },
    currentAppointment: 
         [
            {
                type: Schema.Types.ObjectId,
                ref: "Appointments"
            }
        ],
    appointmentHistory: [
            {
                type: Schema.Types.ObjectId,
                ref: "Appointments"
            }
        ],
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Item = mongoose.model("Item", itemSchema)

module.exports = Item;
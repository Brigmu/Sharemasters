const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new mongoose.Schema({
    item_id: {
        type: String
    },
    owner_id: {
        type: String
    },
    renter_id: {
        type: String
    },
    // For when we have time and dates for appointments
    // pickup_date: {
    //     type: Date,
    //     default: Date.now()
    // },
    // pickup_time: {
    //     type: Number
    // },
    // return_date: {
    //     type: Date,
    // },
    // return_time: {
    //     type: Number
    // },
    canceled: {
        type: Boolean,
        default: false
    },
    returned: {
        type: Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


const Appointments = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointments
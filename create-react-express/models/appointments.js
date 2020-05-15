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
    is_cancelled: {
        type: Boolean,
        default: false
    },
    is_returned: {
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
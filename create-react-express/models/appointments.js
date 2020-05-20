const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    itemId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item'
    },
    renterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    isReturned: {
        type: Boolean,
        default: false
    },
    isCancelled: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Appointment = mongoose.model("Appointment", appointmentSchema)

module.exports = Appointment;
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    owner_id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    image_url: {
        type: String
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    
    },
    pending_request: {
        type: Boolean
    },
    is_rented: {
        type: Boolean
    },
    appointment: {
        // id of the appointment in appointment collection
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
})


const Item = mongoose.model("Item", itemSchema)

module.exports = Item;
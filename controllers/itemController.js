// const db = require('../models');
const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    getAllUnrented: function(req, res) {
        db.Item.find({isRented: false})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    findAll: function(req, res) {
        // db.Item.find({})
        // .populate('ownerId')
        // .populate({path: 'appointments', 
        //     populate: [{
        //         path: 'current',
        //         model: 'Appointments'
        //     },
        //     {
        //         path: 'history',
        //         model: 'Appointments'
        //     }
        //     ]
        // })
        //   .then(data => {
        //       res.json(data)
            //   console.log(data);
            // })
        //   .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.find({_id: req.params.id})
            .populate('ownerId')
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item.create(req.body)
        .then(data => res.json(data))
        // .then(function(req, res) {
        //     db.Item.update( { _id: })
        // })
        .catch(err => console.log(err));
    },
    itemUpdate: function(req, res) {
        db.Item.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    updateRentStatus: function(req, res) {
        db.Item.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
    },
    updatePendingStatus: function(req, res) {
        db.Item.findByIdAndUpdate(req.params.id, req.body)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
    },

    updateAppointments: function(req,res) {
        db.Item.update({_id: req.params.id}, {$pull: {currentAppointment: req.body.appointmendId}, $push: {appointmentHistory: req.body.appointmendId}})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err))
    }
    // ownerApprove: function(req, res) {
    //     db.Item.findOneAndUpdate({ _id: req.params.id }, { pendingRequest: true,  })
    //     .then(data => res.json(data))
    //     .catch(err => res.status(422).json(err));
    // }


}
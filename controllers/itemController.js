const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    getAllUnrented: function(req, res) {
        db.Item.find({isRented: false})
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.find({_id: req.params.id})
            .populate('ownerId')
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item.create(req.body)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    },
    itemUpdate: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
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


}
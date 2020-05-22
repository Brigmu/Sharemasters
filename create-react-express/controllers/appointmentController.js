const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Appointment.findAll(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Appointment.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },

    create: function(req, res) {
        db.Appointment.create(req.body)
        // .then(res => console.log('Hi from controller'))
        .catch(err => console.log(err));
    },
    updateCancelled: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, { isCanceled: true })
        .then(res => res.json(res))
        .catch(err => res.status(422).json(err));
    },
    updateReturn: function(req, res) {
        db.Appointments.findOneAndUpdate({ _id: req.params.id }, { isReturned: true })
        .then(res => res.json(res))
        .catch(err => res.status(422).json(err));
    }

}
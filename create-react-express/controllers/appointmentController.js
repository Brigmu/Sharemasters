const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Appointment.find(req.query)
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
        .then(res => res.json(res))
        .catch(err => console.log(err));
    },
    updateCancel: function(req, res) {
        db.Appointments.findOneAndUpdate({ _id: req.params.id }, { $set: { isCanceled: true }, function(err, doc) {
            if (err) return res.send(500, {error: err})
            return res.send('Succesfully cancelled.');
        }} )
    },
    updateReturn: function(req, res) {
        db.Appointments.findOneAndUpdate({ _id: req.params.id }, {$set: { isReturned: true }, function(err, doc) {
            if (err) return res.send(500, {error: err})
            return res.send('Succesfully returned.');
        }})
    }

}
// const db = require('../models');
const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Item.find({})
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
          .then(data => {
              res.json(data)
            //   console.log(data);
            })
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.aggregate([
        { $match: { _id : mongoose.Types.ObjectId(req.params.id) } },
        { $lookup: {
            from: "users",
            localField: "ownerId",
            foreignField: "userId",
            as: "ownerInfo"
        }},
        { $lookup: {
            from: "appointments",
            localField: "_id",
            foreignField: "itemId",
            as: "appointmentInfo"
        }}
    ])
        // .populate("ownerInfo")
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
    // getAppointmentInfo: function(req, res) {
    //     db.Item.aggregate([
    //     { $match: { _id : mongoose.Types.ObjectId(req.params.id) } },
    //     { $lookup: {
    //         from: "appointments",
    //         localField: "_id",
    //         foreignField: "itemId",
    //         as: "appointmentInfo"
    //     }}
    // ])
    //     // .populate("ownerInfo")
    //     .then(data => res.json(data))
    //     .catch(err => res.status(422).json(err));
    // },
    renterRequest: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body )
        .then(res => res.json(res))
        .catch(err => res.status(422).json(err));
    },

    itemAppointmentCancelled: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, { pendingRequest: false, appointments: "" })
        .then(res => console.log('Appointment Cancelled'))
        .catch(err => res.status(422).json(err));
    },


    ownerApprove: function(req, res) {
        db.Item.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { pendingRequest: false, isRented: true } )
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }


}
// const db = require('../models');
const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Item.findAll({})
          .sort({ date: -1 })
          .then(data => res.json(data))
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
    ])
        // .populate("ownerInfo")
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item.create(req.body)
        .then(res => console.log(res))
        // .then(function(req, res) {
        //     db.Item.update( { _id: })
        // })
        .catch(err => console.log(err));
    },
    renterRequest: function(req, res) {
        db.Item.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.id) }, { pending_request: true } )
        .then(data => console.log(data))
        .catch(err => res.status(422).json(err));
    }
    // ownerApprove: function(req, res) {
    //     db.Item.findOneAndUpdate({ _id: req.params.id }, { pendingRequest: true,  })
    //     .then(data => res.json(data))
    //     .catch(err => res.status(422).json(err));
    // }


}
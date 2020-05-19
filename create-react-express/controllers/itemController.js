// const db = require('../models');
const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        db.Item.findAll({})
        //   .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.aggregate([
        { $match: { itemId: req.params.id } },
        { $lookup: {
            from: "users",
            localField: "ownerId",
            foreignField: "userId",
            as: "ownerInfo"
        }}
    //     ,
    //     { $group: { _id: "$itemId"},
    //     firstName: { $first: "$ownerInfo.firstName"},
    //     lastName: { $first: "$ownerInfo.lastName"}
    // }

    ])
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Item.create(req.body)
        .then(res => res.json(res))
        .catch(err => console.log(err));
    },
    renterRequest: function(req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, { pendingRequest: true })
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
    }
    // ownerApprove: function(req, res) {
    //     db.Item.findOneAndUpdate({ _id: req.params.id }, { pendingRequest: true,  })
    //     .then(data => res.json(data))
    //     .catch(err => res.status(422).json(err));
    // }


}
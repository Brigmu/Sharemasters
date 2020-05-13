// const db = require('../models');
const Item = require("../models/items");
const mongoose = require("mongoose");

module.exports = {
    findAll: function(req, res) {
        Item.find(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        Item.findById(req.params.id)
        .then(data => res.json(data))
        .catch(err => res.status(422).json(err));
            
    }
}
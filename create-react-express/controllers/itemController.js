const db = require('../models');
const mongoose = require('mongoose')

module.exports = {
    findAll: function(req, res) {
        db.Item.find(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.findById(req.params.id)
        .then(data => res.json(data))

        .catch(err => res.status(422).json(err));
            
    }
}
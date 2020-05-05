const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Item.find(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Item.findById(req.param.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
            
    }
}
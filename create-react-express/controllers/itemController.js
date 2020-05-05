const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Item.find(req.query)
          .sort({ date: -1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        console.log('hi from controller')
        db.Item.findOne({ _id: req.param.id })
        .then(data => res.json(data))

        .catch(err => res.status(422).json(err));
            
    }
}
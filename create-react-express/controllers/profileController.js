
const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Profile.find(req.query)
          .sort({ username: 1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Profile.findById(req.params.id)
            .populate("owned")
            .populate("rented")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
            
    },
    addOne: function(req, res) {
        const newProfile = new db.Profile(req.body);
        db.User.findOne({username: req.body.username})
            .then(user => {
                newProfile.userId = user._id;
                newProfile.save()
                .then(data => res.json(data))
                .catch(err => res.status(422).json(err));
            })
    },
    update: function(req, res) {
        db.Profile.updateOne({ _id: req.params.id}, {$set: req.body})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}

const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Profile.find(req.query)
          .sort({ username: 1 })
          .then(data => res.json(data))
          .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
        db.Profile.find({ userId: req.params.id })
            .populate("owned")
            .populate("rentals")
            .populate("rentalHistory")
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
            
    },
    addOne: function(req, res) {
        const newProfile = new db.Profile(req.body);
        db.User.findOne({ username: req.body.username })
            .then(user => {
                newProfile.userId = user._id;
                newProfile.save()
                .then(data => res.json(data))
                .catch(err => {res.status(422).json({message: 'Missing or Invalid Fields', err: err})});
            })
            .catch(err => {res.status(422).json({message: 'Disconnect between user and profile', err: err})})
    },
    update: function(req, res) {
        db.Profile.update({ userId: req.params.id }, { $set: req.body })
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    addRental: function(req, res) {
        db.Profile.update({ _id: req.params.id }, { $push: { rentals: req.body.itemId }})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    addRentalHistory: function(req, res) {
        db.Profile.update({ _id: req.params.id }, { $push: { rentalHistory: req.body.itemId }})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    },
    addOwned: function(req, res) {
        db.Profile.update({ _id: req.params.id }, { $push: { owned: req.body.itemId }})
            .then(data => res.json(data))
            .catch(err => res.status(422).json(err));
    }
}
const mongoose = require("mongoose");
const { Player } = require('../models/models');

module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.status(400).json(err));
}

module.exports.findAllPlayers = (req, res) => {
    Player.find().sort("position")
        .then(allPlayer => res.json(allPlayer))
        .catch(err => res.status(400).json(err));
}

module.exports.findOnePlayer = (req, res) => {
    Player.findOne({_id:req.params.id})
        .then(onePlayer => res.json(onePlayer))
        .catch(err => res.status(400).json(err));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id:req.params.id}, req.body, {new:true, runValidators: true})
        .then(updatedPlayer => res.json(updatedPlayer))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)});
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id:req.params.id})
        .then(deletePlayer => res.json(deletePlayer))
        .catch(err => res.status(400).json(err));
}

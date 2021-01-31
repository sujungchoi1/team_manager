const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required!"],
        minlength: [2, "Name must be at least 2 chraracters!"]
    }
,  
    position: {
        type: String
    }
,  
    playing: {
        type: Boolean,
        default: false
    }
,  
    notPlaying: {
        type: Boolean,
        default: false
    }
,  
    undecided: {
        type: Boolean,
        default: true
    }

},{ timestamps: true });

module.exports.Player = mongoose.model('Player', PlayerSchema);

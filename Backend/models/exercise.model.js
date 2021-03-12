const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
    userName:{type: String ,required: true},
    description: {type: String ,required: true},
    duration:{type: Number ,required: true},
    date:{type: Date ,required: true}

})

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;

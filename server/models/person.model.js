const mongoose = require('mongoose');


const PersonSchema = new mongoose.Schema({
    title: { type: String,
        requires: [true, "Name is required"],
        minlength: [3, "Name must be at least 3 characters"] },

    type: { type: String,
        requires: [true, "type is required"],
        minlength: [3, "type must be at least 3 characters"]  },

    // description: { type: String},
    description: {
        type: String,
        requires: [true, "description is required"],
        minlength: [3, "description must be at least 3 characters"]  },

    skillone: {
        type: String },
    
    skilltwo: {
        type: String },
    
    skillthree: {
        type: String },

    }, { timestamps: true });

module.exports = mongoose.model('Person', PersonSchema);


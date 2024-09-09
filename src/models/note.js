const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Corrected 'Types'
        ref: "User",
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Note", NoteSchema);

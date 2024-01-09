const mongoose = require("mongoose");

const MiniatureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
    },

    manufacturer: {
        type: String,
        required: [true, "Field is required, even if unknown."],
    },

    sculptor: {
        type: String,
    },

    code: {
        type: String,
    },

    material: {
        type: String,
        required: [true, "Field is required."],
    },

    yearReleased: {
        type: String,
    },

    image: {
        type: String,
        required: [true, "Image is required."],
    },

    notes: {
        type: String,
        maxLength: [200, "Notes may not exceed 200 characters."],
    },

    wishlist: {
        type: Boolean,
        default: false,
        
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

}, {timestamps:true})

const Miniature = mongoose.model("Miniature", MiniatureSchema)

module.exports=Miniature;

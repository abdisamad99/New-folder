const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Fruit name must be provided"]
    },
    rating: {
        type: Number,
        required: [true, "Rating must be provided"]
    },
    review: String,
    featured: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: ["tropical", "citrus", "berry", "dry"]
    }
});

module.exports = mongoose.model("Fruit", fruitSchema)
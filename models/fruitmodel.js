const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"]
  },
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: ["apple", "samsung", "dell", "mi"]
  }
});

module.exports = mongoose.model("fruit", fruitSchema);
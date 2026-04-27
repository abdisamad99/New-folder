const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 8
  },
  rating: {
    type: Number,
    required: true,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
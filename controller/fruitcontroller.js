const Fruit = require("../models/fruitmodel");

const getFruits = async (req, res) => {
    const fruits = await Fruit.find();
    res.json(fruits);
};

const createFruit = async (req, res) => {
    const fruit = await Fruit.create({
        name: req.body.name,
        rating: req.body.rating,
        review: req.body.review
    });

    res.json(fruit);
};

module.exports = { getFruits, createFruit };
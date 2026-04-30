const Fruit = require('../models/fruitModel');

// CREATE
const createFruit = async (req, res) => {
    try {
        const fruit = await Fruit.create(req.body);

        res.status(201).json({
            success: true,
            data: fruit
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ALL
const getAllFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();

        res.status(200).json({
            success: true,
            data: fruits
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET ONE
const getOneFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);

        res.json(fruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// UPDATE
const updateFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(fruit);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DELETE
const deleteFruit = async (req, res) => {
    try {
        await Fruit.findByIdAndDelete(req.params.id);

        res.json({ message: "Fruit deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createFruit,
    getAllFruits,
    getOneFruit,
    updateFruit,
    deleteFruit
};
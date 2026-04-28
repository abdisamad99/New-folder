const Fruit = require('../models/fruitModel');

// CREATE
exports.createFruit = async (req, res) => {
    try {
        const fruit = await Fruit.create(req.body);
        res.status(201).json({ success: true, data: fruit });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// GET ALL
exports.getFruits = async (req, res) => {
    try {
        const fruits = await Fruit.find();
        res.json({ success: true, data: fruits });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// GET ONE
exports.getOneFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);

        if (!fruit) {
            return res.status(404).json({
                success: false,
                message: "Fruit not found"
            });
        }

        res.json({ success: true, data: fruit });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE
exports.updateFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!fruit) {
            return res.status(404).json({
                success: false,
                message: "Fruit not found"
            });
        }

        res.json({ success: true, data: fruit });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE
exports.deleteFruit = async (req, res) => {
    try {
        const fruit = await Fruit.findByIdAndDelete(req.params.id);

        if (!fruit) {
            return res.status(404).json({
                success: false,
                message: "Fruit not found"
            });
        }

        res.json({
            success: true,
            message: "Deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
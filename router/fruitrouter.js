const express = require("express");
const router = express.Router();

const {
    getFruits,
    createFruit
} = require("../controller/fruitcontroller");

router.get("/", getFruits);
router.post("/", createFruit);

module.exports = router;
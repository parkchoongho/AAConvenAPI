const express = require("express");

const { Food } = require("../models/food");

const router = express.Router();

router.get("/search", async (req, res, next) => {
  console.log(req.query);

  next();
});

router.post("/create", async (req, res, next) => {
  try {
    const { name, category } = req.body;
    const food = new Food({ name, category });
    await food.save();

    res.json({ result: true });
  } catch (error) {
    res.status(500).json({ result: false, error });
  } finally {
    next();
  }
});

module.exports = router;

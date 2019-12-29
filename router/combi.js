const express = require("express");

const { Combi } = require("../models/combi");
const { Food } = require("../models/food");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const { name, foods } = req.body;
    const combi = new Combi({ name, foods });

    await combi.save();

    let foodArray = combi.foods;
    let length = combi.foods.length;

    for (let i = 0; i < length; i++) {
      const food = await Food.findById(foodArray[i]);
      await food.combinations.push(combi._id);
      await food.save();
    }

    res.json({ result: true });
  } catch (error) {
    res.status(500).json({ result: false, error });
  } finally {
    next();
  }
});

module.exports = router;

const express = require("express");

const { Conven } = require("../models/conven");

const router = express.Router();

router.post("/create", async (req, res, next) => {
  try {
    const { name } = req.body;
    const conven = new Conven({ name });
    await conven.save();

    res.json({ result: true });
  } catch (error) {
    res.status(500).json({ result: false, error });
  } finally {
    next();
  }
});

module.exports = router;

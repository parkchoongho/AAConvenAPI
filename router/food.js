const express = require("express");

const { Food } = require("../models/food");

const router = express.Router();

router.get("/search", async (req, res, next) => {
  console.log(req.query);

  next();
});

module.exports = router;

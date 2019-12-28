const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const foodSchema = new Schema({
  name: { type: String, required: true },
  convenience: { type: mongoose.Types.ObjectId, ref: "Conven" },
  category: [{ type: String }],
  combination: [[{ type: mongoose.Types.ObjectId, ref: "Food" }]]
});

const Food = model("Food", foodSchema);

module.exports = { Food };

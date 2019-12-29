const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const foodSchema = new Schema({
  name: { type: String, required: true },
  category: [{ type: String }],
  combinations: [{ type: mongoose.Types.ObjectId, ref: "combi" }]
});

const Food = model("Food", foodSchema);

module.exports = { Food };

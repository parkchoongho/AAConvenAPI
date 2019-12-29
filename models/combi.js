const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const combiSchema = new Schema({
  name: { type: String, required: true },
  foods: [{ type: mongoose.Types.ObjectId, ref: "Food" }]
});

const Combi = model("Combi", combiSchema);

module.exports = { Combi };

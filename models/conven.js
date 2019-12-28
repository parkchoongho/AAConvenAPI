const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const convenSchema = new Schema({
  name: { type: String, required: true },
  foods: [{ type: mongoose.Types.ObjectId, ref: "Food" }]
});

const Conven = model("Conven", convenSchema);

module.exports = { Conven };

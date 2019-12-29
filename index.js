const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");

const combi = require("./router/combi");
const food = require("./router/food");

const dbURI = process.env.MONGODB_URI || "mongodb://localhost/AAConven";

const app = express();

app.use(helmet());

app.use((req, res, next) => {
  mongoose
    .connect(dbURI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    })
    .then(() => {
      console.log("MongoDB Connected!");
      next();
    })
    .catch(e => {
      console.log("Failed to Connect MongoDB");
      next(e);
    });
});

app.use(express.json());

app.use("/api/combi", combi);
app.use("/api/food", food);

app.use(() => mongoose.disconnect());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

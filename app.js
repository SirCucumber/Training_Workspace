const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
const port = process.env.PORT;

//app.use(bodyParser.json);

//Import Routes
const workoutRoute = require("./routes/workouts");

app.use(express.json());
app.use("/api", workoutRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Test message");
});

mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB!")
);

app.listen(port);

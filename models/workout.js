const mongoose = require("mongoose");

const workoutSchema = mongoose.Schema({
  date: {
    type: Date,
    require: true,
  },
  time: {
    type: Number,
    require: true,
  },
  weight: {
    type: Number,
    require: true,
  },
  exercises: {
    type: Number,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Workout", workoutSchema);

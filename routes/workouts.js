const express = require("express");
const router = express.Router();
const workoutSchema = require("../models/workout");

//Внесение данных об упражнении
router.post("/workouts", (req, res) => {
  const workout = workoutSchema(req.body);
  workout
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Получение данных о всех упражнениях за месяц
router.get("/workouts", (req, res) => {
  workoutSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;

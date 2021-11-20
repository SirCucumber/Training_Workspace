module.exports = (app) => {
  const indexController = require("../Controller/IndexController");
  const monthsController = require("../Controller/MonthsController");
  const workoutsController = require("../Controller/WorkoutsController");

  app.route("/").get(indexController.index);
  app.route("/months").get(monthsController.months);
  app.route("/workouts").get(workoutsController.workouts);
  app.route("/workouts/add").post(workoutsController.add);
};

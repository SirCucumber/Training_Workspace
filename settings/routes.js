module.exports = (app) => {
  const indexController = require("../Controller/IndexController");
  const monthsController = require("../Controller/MonthsController");

  app.route("/").get(indexController.index);
  app.route("/months").get(monthsController.months);
};

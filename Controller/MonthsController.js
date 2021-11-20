const response = require("../response");
const db = require("../settings/db");

exports.months = (req, res) => {
  db.query("SELECT * FROM `months`", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.status(rows, res);
    }
  });
};

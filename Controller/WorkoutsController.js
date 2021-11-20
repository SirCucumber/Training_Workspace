const response = require("../response");
const db = require("../settings/db");

exports.workouts = (req, res) => {
  db.query("SELECT * FROM `workouts`", (error, rows, fields) => {
    if (error) {
      console.log(error);
    } else {
      response.status(rows, res);
    }
  });
};

exports.add = (req, res) => {
  const sql =
    "INSERT INTO `workouts`(`month_id`, `date`, `time`, `weight`, `exercises`, `comments`) VALUES(?, ?, '15:16:14', '71.7', '27', 'cscs')";
  const currentMonth = new Date().getMonth() + 1;
  const time = new Date();
  db.query(sql, [currentMonth, time], (error, results) => {
    if (error) {
      console.log(error);
    } else {
      response.status(results, res);
    }
  });
};

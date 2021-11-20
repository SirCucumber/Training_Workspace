const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "sqluser",
  connector: "mysql",
  password: "password",
  database: "testdb",
  insecureAuth: true,
});

connection.connect((error) => {
  if (error) {
    return console.log("Ошибка подключения к БД!" + error);
  } else {
    return console.log("Подключение к БД успешно!");
  }
});

module.exports = connection;

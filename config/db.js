const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  port: 8012,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });

module.exports = sequelize;

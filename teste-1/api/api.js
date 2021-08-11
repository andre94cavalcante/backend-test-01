const readCSV = require("./readCSV");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json("API Started");
  });

  app.get("/users", (req, res) => {
    readCSV.readAllData().then((data) => {
      setTimeout(() => {
        res.send(data);
      }, 3000);
    });
  });
};

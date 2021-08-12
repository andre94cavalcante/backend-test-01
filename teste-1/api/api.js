const readCSV = require("./readCSV");
const gatherDBinfo = require("./gatherDBinfo");
// const mongoose = require("./DB/mongodb");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.json("API Started");
  });

  app.get("/users", (req, res) => {
    // readCSV.readAllData().then((data) => {
    //   setTimeout(() => {
    //     res.send(data);
    //   }, 3000);
    // });
    let data = gatherDBinfo.getUserInfo().then(() => {
      // res.send("ok");
      setTimeout(() => {
        res.send(data);
      }, 1000);
    });
  });
};

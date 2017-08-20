var db = require("../models/");

module.exports = function(app) {


  app.get("/", function(req, res) {
    db.Burger.findAll({})
      .then(function(result) {
        res.json(result);
      })
  });


  app.post("/burgers/create", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(dbBurger) {
    res.json(dbBurger);
    }).catch(function(err) {
      res.status(400).json(err);
    });
  });

  app.put("/burgers/update", function(req, res) {
    db.Burger.update({
       burger_name: req.body.burger_name,
       devoured: req.body.devoured
      },
      {
      where: {
        id: req.body.id    
      }
    })
    .then(function(dbBurger) {
    res.json(dbBurger);
    }).catch(function(err) {
      res.status(400).json(err)
    });
  });
};
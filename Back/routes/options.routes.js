module.exports = app => {
  const options = require("../controllers/options.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", options.create);

  // Retrieve all Tutorials
  router.get("/", options.findAll);

  // Retrieve all published Tutorials
  //router.get("/name", bot.findByName);

  // Retrieve a single Tutorial with id
  router.get("/:uid", options.findOne);

  // Update a Tutorial with id
  router.put("/:uid", options.update);

  // Delete a Tutorial with id
  router.delete("/:uid", options.delete);

  // Delete all Tutorials
  router.delete("/", options.deleteAll);

  app.use('/api/options', router);
};
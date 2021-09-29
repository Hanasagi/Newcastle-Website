module.exports = app => {
  const bot = require("../controllers/bot.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", bot.create);

  // Retrieve all Tutorials
  router.get("/", bot.findAll);

  // Retrieve all published Tutorials
  //router.get("/name", bot.findByName);

  // Retrieve a single Tutorial with id
  router.get("/:id", bot.findOne);

  // Update a Tutorial with id
  router.put("/:id", bot.update);

  // Delete a Tutorial with id
  router.delete("/:id", bot.delete);

  // Delete all Tutorials
  router.delete("/", bot.deleteAll);

  app.use('/api/bot', router);
};
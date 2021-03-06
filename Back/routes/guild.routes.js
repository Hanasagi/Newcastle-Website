module.exports = app => {
  const guild = require("../controllers/guild.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", guild.create);

  // Retrieve all Tutorials
  router.get("/", guild.findAll);

  // Retrieve all published Tutorials
  //router.get("/name", bot.findByName);

  // Retrieve a single Tutorial with id
  router.get("/:uid", guild.findOne);

  // Update a Tutorial with id
  router.put("/:uid", guild.update);

  // Delete a Tutorial with id
  router.delete("/:uid", guild.delete);

  // Delete all Tutorials
  router.delete("/", guild.deleteAll);

  app.use('/api/guild', router);
};
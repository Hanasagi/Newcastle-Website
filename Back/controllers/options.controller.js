const db = require("../models");
const Options = db.options;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    if (!req.body.uid) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const options = {
    uid: req.body.uid,
    show_news: req.body.show_news,
    webhook_url: req.body.webhook_url,
    danbooru_feed: req.body.danbooru_feed,
    news_channel: req.body.news_channel,
    check_channel: req.body.check_channel,
    sfw_danbooru_channel: req.body.sfw_danbooru_channel,
    nsfw_danbooru_channel: req.body.nsfw_danbooru_channel,
    last_id: req.body.last_id
  };

  // Save Tutorial in the database
  Options.create(options)
    .then(data => {
      res.send(data);
      console.log(res)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const uid = req.query.uid;
  var condition = uid ? { uid: { [Op.like]: `%${uid}%` } } : null;

  Options.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving stuff."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  console.log(req.params)
    const uid = req.params.uid;
    var condition = uid ? { uid: { [Op.like]: `%${uid}%` } } : null;

  Options.findOne({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving " + uid
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  console.log(req.params)
  const uid = req.params.uid;

  Options.update(req.body, {
    where: { uid: uid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Bot was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Bot with id=${uid}. Maybe Bot was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Bot with id=" + uid
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const uid = req.params.uid;

  Options.destroy({
    where: { uid: uid }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${uid}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + uid
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Options.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};

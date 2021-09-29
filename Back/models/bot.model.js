module.exports = (sequelize, Sequelize) => {
  const Bot = sequelize.define("bot", {
    name: {
      type: Sequelize.STRING
    },
    value: {
      type: Sequelize.STRING
    },
  },{freezeTableName: true,
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,});

  return Bot;
};
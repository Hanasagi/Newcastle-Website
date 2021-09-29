module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    nickname: {
      type: Sequelize.STRING
    },
    picture: {
      type: Sequelize.STRING
    },
    token: {
      type: Sequelize.STRING
    },
    refresh: {
      type: Sequelize.STRING
    },
    scope: {
      type: Sequelize.STRING
    },
    type: {
      type: Sequelize.STRING
    },
    guild: {
      type: Sequelize.JSON
    }
  },{freezeTableName: true,
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,});

  return User;
};
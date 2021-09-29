module.exports = (sequelize, Sequelize) => {
  const Guild = sequelize.define("guild", {
    uid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    lang: {
      type: Sequelize.STRING
    },
    icon_url: {
      type: Sequelize.STRING
    }
  },{freezeTableName: true,
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
id:false});

  return Guild;
};
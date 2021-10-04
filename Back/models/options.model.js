module.exports = (sequelize, Sequelize) => {
  const Options = sequelize.define("options", {
    uid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    show_news: {
      type: Sequelize.BOOLEAN
    },
    webhook_url: {
      type: Sequelize.STRING
    },
    danbooru_feed: {
      type: Sequelize.STRING
    },
    news_channel: {
      type: Sequelize.STRING
    },
    check_channel: {
      type: Sequelize.STRING
    },
    sfw_danbooru_channel: {
      type: Sequelize.STRING
    },
    nsfw_danbooru_channel: {
      type: Sequelize.STRING
    },
    last_id: {
      type: Sequelize.STRING
    }
  },{freezeTableName: true,
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,});

  return Options;
};
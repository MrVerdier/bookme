const { Model } = require("objection");

class Events extends Model {
  static get tableName() {
    return "events";
  }

  static get relationMappings() {
    const User = require("./User");
    const Color = require("./Color");

    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "events.user_fk",
          to: "users.id",
        },
      },
      color: {
        relation: Model.BelongsToOneRelation,
        modelClass: Color,
        join: {
          from: "events.color_fk",
          to: "colors.id",
        },
      },
    };
  }
}

module.exports = Events;

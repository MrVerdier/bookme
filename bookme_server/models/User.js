const { Model } = require("objection");

class User extends Model {
  static get tableName() {
    return "users";
  }
  static get relationMappings() {
    const Events = require("./Events");

    return {
      events: {
        relation: Model.HasManyRelation,
        modelClass: Events,
        join: {
          from: "users.id",
          to: "events.user_dk",
        },
      },
    };
  }
}

module.exports = User;

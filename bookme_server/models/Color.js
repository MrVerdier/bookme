const { Model } = require("objection");

class Color extends Model {
  static get tableName() {
    return "colors";
  }

  static get relationMappings() {
    const Event = require("./Events");

    return {
      event: {
        relation: Model.HasManyRelation,
        modelClass: Events,
        join: {
          from: "colors.id",
          to: "events.color_fk",
        },
      },
    };
  }
}

module.exports = Color;

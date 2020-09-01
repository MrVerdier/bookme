require("dotenv").config();

const express = require("express");
const router = express.Router();
const Pusher = require("pusher");
const Events = require("../models/Events");

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
});

router.post("/addevent", async (req, res) => {
  const { body } = req;
  // const timeStart = body.timeStart.HH + ":" + body.timeStart.mm;
  // const timeEnd = body.timeEnd.HH + ":" + body.timeEnd.mm;

  console.log(body);

  // TODO user id to correct
  const newEvent = {
    user_fk: 1,
    title: body.title,
    start: body.start,
    end: body.end,
    time_start: body.timeStart,
    time_end: body.timeEnd,
    color_fk: body.color,
    description: body.description,
  };
  console.log(newEvent);

  await Events.query().insert(newEvent);
  // TODO add validation for events

  pusher.trigger("schedule", "new-event", body);
  res.json(body);
});

router.get("/", async (req, res) => {
  const events = await Events.query()
    .select()
    .withGraphFetched("owner")
    .withGraphFetched("color");

  let eventsArray = [];

  events.map((event) => {
    let sendEvent = {
      title: event.title,
      start: event.start,
      end: event.end,
      timeStart: event.time_start,
      timeEnd: event.time_end,
      owner: event.owner.username,
      description: event.title,
      cssClass: event.color.color,
    };

    eventsArray.push(sendEvent);
  });

  res.json([eventsArray]);
});

module.exports = router;

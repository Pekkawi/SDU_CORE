import mongoose from "mongoose";

const eventTypes = [
  "update_ready",
  "update_done",
  "lock_close",
  "lock_open",
  "access_denied",
  "access_granted",
  "access_overwrite",
  "usage_start",
  "usage_end",
];

const eventsSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    required: true,
  },
  event_type: {
    type: String,
    required: true,
    enum: eventTypes,
  },
  metadata: {
    type: Object,
    default: {},
  },
});

const events = mongoose.models.events || mongoose.model("events", eventsSchema);

export default events;

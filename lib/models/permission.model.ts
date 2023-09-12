import mongoose from "mongoose";

const schedulings = ["on_demand", "scheduled", "locking"];
const defaultScheduling = schedulings[0];
const workflows = ["open", "timed", "controlled"];
const defaultWorkflow = workflows[0];

const permissionSchema = new mongoose.Schema({
  abbreviation: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
    unique: false,
    default: "",
  },
  scheduling: {
    type: String,
    required: true,
    unique: false,
    default: defaultScheduling,
    enum: schedulings,
  },
  workflow: {
    type: String,
    required: true,
    unique: false,
    default: defaultWorkflow,
    enum: workflows,
  },
  default: {
    type: Boolean,
    required: true,
    unique: false,
    default: false,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "images.file",
    required: true,
    unique: false,
  },
});

const permission =
  mongoose.models.permission || mongoose.model("permission", permissionSchema);

export default permission;

import mongoose from "mongoose";

const roles = ["user", "staff", "supervisor", "admin"];
const [defaultRole] = roles;

const userSchema = new mongoose.Schema({
  azure_id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  card_id: {
    type: String,
    required: true,
    unique: true,
  },
  card_number: {
    type: String,
    required: true,
    unique: false,
  },
  first_name: {
    type: String,
    required: true,
    unique: false,
  },
  last_name: {
    type: String,
    required: true,
    unique: false,
  },
  display_name: {
    type: String,
    required: true,
    unique: false,
  },
  role: {
    type: String,
    required: true,
    unique: false,
    enum: roles,
    default: defaultRole,
  },
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "permission",
      required: false,
      unique: false,
      default: [],
    },
  ],
});

const User = mongoose.models.User || mongoose.model("user", userSchema);

export default User;

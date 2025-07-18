const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["Admin", "User"], default: "User" },
  customerId: String, // tenant identifier
});

module.exports = mongoose.model("User", UserSchema);

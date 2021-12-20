const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
  city: { type: String, required: true },
});

module.exports.Admin = mongoose.model("Admin", adminSchema);

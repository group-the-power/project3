const mongoose = require("mongoose");
require("dotenv").config();
const DB_URI = process.env.DB_URI;
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Database not connected"));

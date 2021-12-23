const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  courseName: { type: String, required: true },
  userId: {type:Number, required: true},
  courseId: {type:Number, required: true},
  startCourse:{type:Date, required: true},
  endCourse:{type:Date, required: true},
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});
const student = mongoose.model("student", studentSchema);
module.exports = student;
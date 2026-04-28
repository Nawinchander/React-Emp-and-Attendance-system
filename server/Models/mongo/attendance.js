const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: Number,
  date: String,
  status: String
});

module.exports = mongoose.model("Attendance", attendanceSchema);
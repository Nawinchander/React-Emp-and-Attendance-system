// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/attendance_logs")
// .then(() => console.log("Mongo Connected"));

// module.exports = mongoose;


const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema({
  employeeId: Number,
  date: String,
  status: String
});

module.exports = mongoose.model("Attendance", attendanceSchema);



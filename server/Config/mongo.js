const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/attendance_logs")
.then(() => console.log("Mongo Connected"));

module.exports = mongoose;


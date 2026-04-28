const express = require("express");
const cors = require("cors");

require("./config/mysql");
require("./config/mongo");

const leaveRoutes = require("./routes/leaveRoutes");
const attendanceRoutes = require("./routes/attendanceRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leaves", leaveRoutes);
app.use("/api/attendance", attendanceRoutes);

app.listen(5000, () => console.log("Server running"));

